import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: [true, 'Student name is required'],
      trim: true,
      minlength: [2, 'Student name must be at least 2 characters'],
      maxlength: [80, 'Student name cannot exceed 80 characters'],
      match: [/^[a-zA-Z\s.'-]+$/, 'Student name can only contain letters, spaces, hyphens, and dots'],
    },
    studentClass: {
      type: String,
      required: [true, 'Class selection is required'],
      trim: true,
      maxlength: [50, 'Class cannot exceed 50 characters'],
    },
    parentMobile: {
      type: String,
      required: [true, 'Parent mobile number is required'],
      trim: true,
      match: [/^[6-9]\d{9}$/, 'Please provide a valid 10-digit Indian mobile number'],
    },
    course: {
      type: String,
      required: [true, 'Course selection is required'],
      trim: true,
      maxlength: [100, 'Course cannot exceed 100 characters'],
    },
    status: {
      type: String,
      enum: ['New', 'Contacted', 'Demo Scheduled', 'Completed', 'Archived'],
      default: 'New',
    },
    ipAddress: {
      type: String,
      select: false, // Hidden by default for privacy
    },
  },
  {
    timestamps: true,
  }
);

// Index to help quickly find duplicate recent submissions
enquirySchema.index({ parentMobile: 1, course: 1, createdAt: -1 });

export const Enquiry = mongoose.model('Enquiry', enquirySchema);
