import { Enquiry } from '../models/Enquiry.js';
import { checkDbConnection } from '../config/database.js';

// Helper to mask phone numbers in logs for privacy (e.g. 98****3210)
const maskMobile = (mobile) => {
  if (!mobile || typeof mobile !== 'string' || mobile.length < 6) return '******';
  return `${mobile.slice(0, 2)}****${mobile.slice(-4)}`;
};

// Normalize mobile number: strips +91, 0, spaces, dashes
export const normalizeMobile = (input) => {
  if (!input || typeof input !== 'string') return '';
  let cleaned = input.replace(/[\s\-\(\)\.]/g, '');
  if (cleaned.startsWith('+91')) {
    cleaned = cleaned.slice(3);
  } else if (cleaned.startsWith('91') && cleaned.length === 12) {
    cleaned = cleaned.slice(2);
  } else if (cleaned.startsWith('0') && cleaned.length === 11) {
    cleaned = cleaned.slice(1);
  }
  return cleaned;
};

// Valid input sanitization helper
export const sanitizeString = (str) => {
  if (typeof str !== 'string') return '';
  return str
    .replace(/[<>]/g, '') // remove dangerous HTML characters
    .trim();
};

export const createEnquiry = async (req, res, next) => {
  try {
    const rawStudentName = req.body.studentName || req.body.name;
    const rawStudentClass = req.body.studentClass || req.body.class;
    const rawParentMobile = req.body.parentMobile || req.body.phone;
    const rawCourse = req.body.course;

    const errors = {};

    // 1. Validate student name
    const studentName = sanitizeString(rawStudentName);
    if (!studentName) {
      errors.studentName = 'Student name is required.';
    } else if (studentName.length < 2) {
      errors.studentName = 'Student name must be at least 2 characters.';
    } else if (studentName.length > 80) {
      errors.studentName = 'Student name cannot exceed 80 characters.';
    } else if (!/^[a-zA-Z\s.'-]+$/.test(studentName)) {
      errors.studentName = 'Student name can only contain letters, spaces, hyphens, and periods.';
    }

    // 2. Validate class
    const studentClass = sanitizeString(rawStudentClass);
    if (!studentClass) {
      errors.studentClass = 'Please select a class.';
    } else if (studentClass.length > 50) {
      errors.studentClass = 'Invalid class selection.';
    }

    // 3. Validate & normalize parent mobile
    const parentMobile = normalizeMobile(rawParentMobile);
    if (!parentMobile) {
      errors.parentMobile = "Parent's mobile number is required.";
    } else if (!/^[6-9]\d{9}$/.test(parentMobile)) {
      errors.parentMobile = 'Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.';
    }

    // 4. Validate course
    const course = sanitizeString(rawCourse);
    if (!course) {
      errors.course = 'Please select a course.';
    } else if (course.length > 100) {
      errors.course = 'Course title cannot exceed 100 characters.';
    }

    // If any validation failed, return 400
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Please correct the highlighted fields.',
        errors,
      });
    }

    // Verify database connection is live
    if (!checkDbConnection()) {
      console.warn('[Enquiry] Database is not currently connected to MongoDB.');
      return res.status(503).json({
        success: false,
        message: 'Database service is temporarily unavailable. Please verify MongoDB is running or contact Aaroh Academy directly by phone/WhatsApp.',
      });
    }

    // 5. Duplicate submission prevention
    // Check if an enquiry with the same mobile number and course was submitted within the last 60 minutes
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
    const existingRecentEnquiry = await Enquiry.findOne({
      parentMobile,
      course,
      createdAt: { $gte: oneHourAgo },
    });

    if (existingRecentEnquiry) {
      return res.status(400).json({
        success: false,
        message: 'An enquiry for this course and mobile number was already received recently. Our academic counsellor will get in touch with you shortly.',
      });
    }

    // 6. Save valid enquiry
    const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
    const newEnquiry = new Enquiry({
      studentName,
      studentClass,
      parentMobile,
      course,
      status: 'New',
      ipAddress: typeof clientIp === 'string' ? clientIp.split(',')[0].trim() : 'unknown',
    });

    const savedEnquiry = await newEnquiry.save();

    console.log(`[Enquiry] Successfully created enquiry ID ${savedEnquiry._id} for mobile ${maskMobile(parentMobile)}`);

    return res.status(201).json({
      success: true,
      message: 'Your demo class enquiry has been submitted successfully.',
    });
  } catch (err) {
    console.error('[Enquiry] Submission error:', err);
    return next(err);
  }
};

export const getEnquiries = async (req, res, next) => {
  try {
    if (!checkDbConnection()) {
      return res.status(503).json({
        success: false,
        message: 'Database is currently unavailable.',
        data: [],
      });
    }

    const page = Math.max(1, parseInt(req.query.page, 10) || 1);
    const limit = Math.min(50, Math.max(1, parseInt(req.query.limit, 10) || 10));
    const skip = (page - 1) * limit;

    const [enquiries, total] = await Promise.all([
      Enquiry.find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Enquiry.countDocuments(),
    ]);

    // Mask phone numbers in response for privacy
    const maskedEnquiries = enquiries.map((enq) => ({
      ...enq,
      parentMobile: maskMobile(enq.parentMobile),
    }));

    return res.status(200).json({
      success: true,
      data: maskedEnquiries,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (err) {
    return next(err);
  }
};
