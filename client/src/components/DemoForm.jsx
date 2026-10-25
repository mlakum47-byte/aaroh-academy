import React, { useState, useEffect } from 'react';
import { CheckCircle2, AlertCircle, Loader2, Sparkles, Lock } from 'lucide-react';
import { COURSES_DATA } from '../data/courses';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

const CLASS_OPTIONS = [
  'Class 6',
  'Class 7',
  'Class 8',
  'Class 9',
  'Class 10',
  'Class 11 (Science / PCM / PCB)',
  'Class 12 (Science / PCM / PCB)',
  'Competitive Exam (JEE / NEET / Olympiads)',
];

export default function DemoForm({ preselectedCourse }) {
  const [formData, setFormData] = useState({
    studentName: '',
    studentClass: '',
    parentMobile: '',
    course: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverStatus, setServerStatus] = useState({
    type: null, // 'success' | 'error' | null
    message: '',
  });

  // If a course was clicked externally, pre-fill it
  useEffect(() => {
    if (preselectedCourse) {
      setFormData((prev) => ({
        ...prev,
        course: preselectedCourse,
      }));
    }
  }, [preselectedCourse]);

  // Client-side validation function
  const validateField = (name, value) => {
    switch (name) {
      case 'studentName': {
        const trimmed = value.trim();
        if (!trimmed) return 'Student name is required.';
        if (trimmed.length < 2) return 'Name must be at least 2 characters.';
        if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) return 'Only letters, spaces, and hyphens allowed.';
        return '';
      }
      case 'studentClass': {
        if (!value) return 'Please select a class.';
        return '';
      }
      case 'parentMobile': {
        const cleaned = value.replace(/[\s\-\(\)]/g, '');
        if (!cleaned) return "Parent's mobile number is required.";
        if (!/^[6-9]\d{9}$/.test(cleaned)) {
          return 'Enter a valid 10-digit mobile number starting with 6–9.';
        }
        return '';
      }
      case 'course': {
        if (!value) return 'Please select a course.';
        return '';
      }
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    // Clear top banner error
    if (serverStatus.type === 'error') {
      setServerStatus({ type: null, message: '' });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const errorMsg = validateField(name, value);
    if (errorMsg) {
      setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset status
    setServerStatus({ type: null, message: '' });

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setServerStatus({
        type: 'error',
        message: 'Please correct the highlighted fields.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Endpoint: POST /api/enquiries
      const endpoint = `${API_BASE_URL}/api/enquiries`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        // Successful submission confirmed by server
        setServerStatus({
          type: 'success',
          message: data.message || 'Your demo class enquiry has been submitted successfully.',
        });

        // Clear form only upon successful server confirmation
        setFormData({
          studentName: '',
          studentClass: '',
          parentMobile: '',
          course: '',
        });
        setErrors({});
      } else {
        // Server validation error or failure
        const errorMsg =
          data.message ||
          (response.status === 429
            ? 'Too many attempts. Please try again after some time.'
            : 'Enquiry submission failed. Please check the fields and try again.');

        setServerStatus({
          type: 'error',
          message: errorMsg,
        });

        if (data.errors && typeof data.errors === 'object') {
          setErrors(data.errors);
        }
      }
    } catch (networkError) {
      console.error('Demo form submission network error:', networkError);
      setServerStatus({
        type: 'error',
        message:
          'Unable to reach the enquiry server. Please check your internet connection or call Aaroh Academy directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="demo-form-card" id="demo-form">
      <div className="demo-form-header">
        <div className="demo-header-badge">
          <Sparkles size={14} className="badge-icon" />
          <span>Complimentary Session</span>
        </div>
        <h3 className="demo-form-title">Book a Free Demo Class</h3>
        <p className="demo-form-desc">
          Experience our interactive classrooms and meet expert faculty with zero commitment.
        </p>
      </div>

      {/* Server Status Feedback Alert */}
      {serverStatus.type === 'success' && (
        <div className="form-alert form-alert-success" role="alert" aria-live="polite">
          <CheckCircle2 size={20} className="alert-icon" />
          <div>
            <strong>Enquiry Received!</strong>
            <p>{serverStatus.message}</p>
          </div>
        </div>
      )}

      {serverStatus.type === 'error' && (
        <div className="form-alert form-alert-error" role="alert" aria-live="assertive">
          <AlertCircle size={20} className="alert-icon" />
          <div>
            <strong>Submission Notice</strong>
            <p>{serverStatus.message}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="demo-form-body">
        {/* Student Name */}
        <div className="form-group">
          <label htmlFor="studentName" className="form-label">
            Student Name <span className="req">*</span>
          </label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            placeholder="e.g. Aarav Singhal"
            className={`form-input ${errors.studentName ? 'input-error' : ''}`}
            aria-invalid={!!errors.studentName}
            aria-describedby={errors.studentName ? 'studentName-error' : undefined}
            required
          />
          {errors.studentName && (
            <p id="studentName-error" className="error-text">
              {errors.studentName}
            </p>
          )}
        </div>

        {/* Student Class */}
        <div className="form-group">
          <label htmlFor="studentClass" className="form-label">
            Class <span className="req">*</span>
          </label>
          <select
            id="studentClass"
            name="studentClass"
            value={formData.studentClass}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            className={`form-select ${errors.studentClass ? 'input-error' : ''}`}
            aria-invalid={!!errors.studentClass}
            aria-describedby={errors.studentClass ? 'studentClass-error' : undefined}
            required
          >
            <option value="">Select Student's Current Class</option>
            {CLASS_OPTIONS.map((cls) => (
              <option key={cls} value={cls}>
                {cls}
              </option>
            ))}
          </select>
          {errors.studentClass && (
            <p id="studentClass-error" className="error-text">
              {errors.studentClass}
            </p>
          )}
        </div>

        {/* Parent's Mobile Number */}
        <div className="form-group">
          <label htmlFor="parentMobile" className="form-label">
            Parent's Mobile Number <span className="req">*</span>
          </label>
          <div className="phone-input-wrapper">
            <span className="phone-prefix">+91</span>
            <input
              type="tel"
              id="parentMobile"
              name="parentMobile"
              value={formData.parentMobile}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              maxLength={10}
              placeholder="9876543210"
              className={`form-input phone-input ${errors.parentMobile ? 'input-error' : ''}`}
              aria-invalid={!!errors.parentMobile}
              aria-describedby={errors.parentMobile ? 'parentMobile-error' : undefined}
              required
            />
          </div>
          {errors.parentMobile && (
            <p id="parentMobile-error" className="error-text">
              {errors.parentMobile}
            </p>
          )}
        </div>

        {/* Course Dropdown */}
        <div className="form-group">
          <label htmlFor="course" className="form-label">
            Course Interested In <span className="req">*</span>
          </label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            className={`form-select ${errors.course ? 'input-error' : ''}`}
            aria-invalid={!!errors.course}
            aria-describedby={errors.course ? 'course-error' : undefined}
            required
          >
            <option value="">Select Desired Course Program</option>
            {COURSES_DATA.map((course) => (
              <option key={course.id} value={course.title}>
                {course.title}
              </option>
            ))}
          </select>
          {errors.course && (
            <p id="course-error" className="error-text">
              {errors.course}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary btn-submit-demo"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="spinner" />
              <span>Processing Demo Booking...</span>
            </>
          ) : (
            <span>Book My Free Demo</span>
          )}
        </button>

        {/* Privacy Notice */}
        <div className="form-privacy-notice">
          <Lock size={12} className="lock-icon" />
          <span>We respect your privacy. No spam. Contacted only for demo confirmation.</span>
        </div>
      </form>

      <style>{`
        .demo-form-card {
          background: #ffffff;
          border-radius: var(--radius-xl);
          padding: 32px;
          box-shadow: 0 12px 36px rgba(10, 25, 47, 0.12);
          border: 1px solid var(--color-border);
          position: relative;
        }

        @media (max-width: 576px) {
          .demo-form-card {
            padding: 22px 18px;
            border-radius: var(--radius-lg);
          }
        }

        .demo-form-header {
          margin-bottom: 20px;
        }

        .demo-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-navy);
          background-color: var(--color-yellow-light);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          margin-bottom: 8px;
          border: 1px solid var(--color-yellow-border);
        }

        .badge-icon {
          color: var(--color-yellow-hover);
        }

        .demo-form-title {
          font-size: 1.45rem;
          color: var(--color-navy);
          margin-bottom: 6px;
        }

        .demo-form-desc {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          line-height: 1.45;
        }

        .form-alert {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          border-radius: var(--radius-md);
          margin-bottom: 18px;
          font-size: 0.85rem;
        }

        .form-alert-success {
          background-color: var(--color-success-bg);
          border: 1px solid #a7f3d0;
          color: #065f46;
        }

        .form-alert-error {
          background-color: var(--color-error-bg);
          border: 1px solid #fecaca;
          color: #991b1b;
        }

        .alert-icon {
          flex-shrink: 0;
          margin-top: 1px;
        }

        .demo-form-body {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-label {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-navy);
        }

        .req {
          color: var(--color-error);
        }

        .form-input,
        .form-select {
          width: 100%;
          padding: 11px 14px;
          font-size: 0.92rem;
          color: var(--color-text-primary);
          background-color: #f8fafc;
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-md);
          transition: border-color 0.2s, background-color 0.2s, box-shadow 0.2s;
        }

        .form-input:focus,
        .form-select:focus {
          background-color: #ffffff;
          border-color: var(--color-navy);
          outline: none;
          box-shadow: 0 0 0 3px rgba(10, 25, 47, 0.1);
        }

        .phone-input-wrapper {
          display: flex;
          align-items: stretch;
          border-radius: var(--radius-md);
          overflow: hidden;
        }

        .phone-prefix {
          display: flex;
          align-items: center;
          padding: 0 12px;
          background-color: #e2e8f0;
          color: var(--color-text-secondary);
          font-weight: 600;
          font-size: 0.9rem;
          border: 1.5px solid var(--color-border);
          border-right: none;
          border-top-left-radius: var(--radius-md);
          border-bottom-left-radius: var(--radius-md);
        }

        .phone-input {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }

        .input-error {
          border-color: var(--color-error) !important;
          background-color: #fffafb;
        }

        .error-text {
          font-size: 0.78rem;
          color: var(--color-error);
          font-weight: 500;
        }

        .btn-submit-demo {
          width: 100%;
          padding: 13px;
          font-size: 1rem;
          margin-top: 4px;
        }

        .spinner {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .form-privacy-notice {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 0.75rem;
          color: var(--color-text-muted);
          text-align: center;
          margin-top: 6px;
        }

        .lock-icon {
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
}
