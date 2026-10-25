import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeMobile, sanitizeString, createEnquiry } from '../controllers/enquiryController.js';
import { Enquiry } from '../models/Enquiry.js';

test('1. Mobile Number Normalization and Validation', async (t) => {
  await t.test('removes +91, spaces, hyphens, and parenthesis', () => {
    assert.equal(normalizeMobile('+91 98765-43210'), '9876543210');
    assert.equal(normalizeMobile('+91 (98765) 43210'), '9876543210');
    assert.equal(normalizeMobile('09876543210'), '9876543210');
    assert.equal(normalizeMobile('919876543210'), '9876543210');
    assert.equal(normalizeMobile('9876543210'), '9876543210');
  });

  await t.test('accepts valid 10-digit Indian numbers starting with 6, 7, 8, 9', () => {
    const valid = ['9876543210', '8888899999', '7001234567', '6298765432'];
    const regex = /^[6-9]\d{9}$/;

    for (const num of valid) {
      assert.equal(regex.test(normalizeMobile(num)), true);
    }
  });

  await t.test('rejects numbers starting with invalid digits or wrong lengths', () => {
    const invalid = ['1234567890', '4567891234', '98765', '9876543210999'];
    const regex = /^[6-9]\d{9}$/;

    for (const num of invalid) {
      assert.equal(regex.test(normalizeMobile(num)), false);
    }
  });
});

test('2. Input Sanitization Security', async (t) => {
  await t.test('strips dangerous HTML tag brackets', () => {
    const malicious = '<script>alert("xss")</script>Student Name';
    const sanitized = sanitizeString(malicious);
    assert.equal(sanitized.includes('<'), false);
    assert.equal(sanitized.includes('>'), false);
    assert.equal(sanitized, 'scriptalert("xss")/scriptStudent Name');
  });

  await t.test('trims leading and trailing whitespace', () => {
    assert.equal(sanitizeString('   Aarav Singhal   '), 'Aarav Singhal');
  });
});

test('3. Server-side Validation in createEnquiry Controller', async (t) => {
  await t.test('returns 400 when required fields are missing', async () => {
    let statusCode = null;
    let jsonResponse = null;

    const mockReq = {
      body: {},
      headers: {},
      socket: { remoteAddress: '127.0.0.1' },
    };

    const mockRes = {
      status(code) {
        statusCode = code;
        return this;
      },
      json(data) {
        jsonResponse = data;
        return this;
      },
    };

    const mockNext = (err) => {
      throw err;
    };

    await createEnquiry(mockReq, mockRes, mockNext);

    assert.equal(statusCode, 400);
    assert.equal(jsonResponse.success, false);
    assert.equal(jsonResponse.message, 'Please correct the highlighted fields.');
    assert.ok(jsonResponse.errors.studentName);
    assert.ok(jsonResponse.errors.studentClass);
    assert.ok(jsonResponse.errors.parentMobile);
    assert.ok(jsonResponse.errors.course);
  });

  await t.test('returns 400 when mobile number format is invalid', async () => {
    let statusCode = null;
    let jsonResponse = null;

    const mockReq = {
      body: {
        studentName: 'Aarav Singhal',
        studentClass: 'Class 10',
        parentMobile: '0012345',
        course: 'Class 9–10 Board Mastery',
      },
      headers: {},
      socket: { remoteAddress: '127.0.0.1' },
    };

    const mockRes = {
      status(code) {
        statusCode = code;
        return this;
      },
      json(data) {
        jsonResponse = data;
        return this;
      },
    };

    await createEnquiry(mockReq, mockRes, () => {});

    assert.equal(statusCode, 400);
    assert.equal(jsonResponse.success, false);
    assert.ok(jsonResponse.errors.parentMobile);
  });

  await t.test('returns 400 when student name is too short or contains invalid characters', async () => {
    let statusCode = null;
    let jsonResponse = null;

    const mockReq = {
      body: {
        studentName: 'A',
        studentClass: 'Class 10',
        parentMobile: '9876543210',
        course: 'Class 9–10 Board Mastery',
      },
      headers: {},
      socket: { remoteAddress: '127.0.0.1' },
    };

    const mockRes = {
      status(code) {
        statusCode = code;
        return this;
      },
      json(data) {
        jsonResponse = data;
        return this;
      },
    };

    await createEnquiry(mockReq, mockRes, () => {});

    assert.equal(statusCode, 400);
    assert.equal(jsonResponse.success, false);
    assert.ok(jsonResponse.errors.studentName);
  });
});

test('4. Mongoose Enquiry Model Schema Validation', async (t) => {
  await t.test('validates valid enquiry document against schema', () => {
    const doc = new Enquiry({
      studentName: 'Aarav Singhal',
      studentClass: 'Class 10',
      parentMobile: '9876543210',
      course: 'Class 9–10 Board Mastery',
    });

    const validationError = doc.validateSync();
    assert.equal(validationError, undefined);
  });

  await t.test('catches invalid mobile format at Mongoose schema level', () => {
    const doc = new Enquiry({
      studentName: 'Aarav Singhal',
      studentClass: 'Class 10',
      parentMobile: '12345',
      course: 'Class 9–10 Board Mastery',
    });

    const validationError = doc.validateSync();
    assert.ok(validationError);
    assert.ok(validationError.errors.parentMobile);
  });
});
