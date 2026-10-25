import express from 'express';
import { createEnquiry, getEnquiries } from '../controllers/enquiryController.js';
import { enquiryRateLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

// POST /api/enquiries - Book a demo class enquiry
router.post('/', enquiryRateLimiter, createEnquiry);

// GET /api/enquiries - View recent enquiries (internal / administrative)
router.get('/', getEnquiries);

export default router;
