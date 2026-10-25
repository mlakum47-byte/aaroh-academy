import React, { useState } from 'react';
import { Clock, Check, ArrowRight, X, Sparkles, BookOpen } from 'lucide-react';
import { COURSES_DATA } from '../data/courses';

export default function Courses({ onSelectCourseForDemo }) {
  const [activeCourseModal, setActiveCourseModal] = useState(null);

  const handleKnowMore = (course) => {
    setActiveCourseModal(course);
  };

  const handleEnrollOrDemo = (courseTitle) => {
    setActiveCourseModal(null);
    if (onSelectCourseForDemo) {
      onSelectCourseForDemo(courseTitle);
    }
  };

  return (
    <section className="section section-light courses-section" id="courses" aria-labelledby="courses-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Academic Programs</span>
          <h2 id="courses-heading" className="section-title">
            Choose Your Learning Path
          </h2>
          <p className="section-subtitle">
            Structured, curriculum-aligned academic courses meticulously crafted to build foundational mastery, score high in board examinations, and excel in competitive entrance tests.
          </p>
        </div>

        {/* 4 Course Cards Grid */}
        <div className="courses-grid">
          {COURSES_DATA.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onKnowMore={() => handleKnowMore(course)}
              onBookDemo={() => handleEnrollOrDemo(course.title)}
            />
          ))}
        </div>
      </div>

      {/* Course Details Modal */}
      {activeCourseModal && (
        <div
          className="course-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-course-title"
        >
          <div className="modal-backdrop" onClick={() => setActiveCourseModal(null)} />
          <div className="course-modal-content">
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setActiveCourseModal(null)}
              aria-label="Close course details"
            >
              <X size={22} />
            </button>

            <div className="modal-badge">{activeCourseModal.badge}</div>
            <h3 id="modal-course-title" className="modal-title">
              {activeCourseModal.title}
            </h3>

            <p className="modal-desc">{activeCourseModal.oneLineDescription}</p>

            <div className="modal-meta-box">
              <div className="meta-item">
                <Clock size={16} className="meta-icon" />
                <span>{activeCourseModal.batchTimingSummary}</span>
              </div>
              <div className="meta-item">
                <BookOpen size={16} className="meta-icon" />
                <span><strong>Target:</strong> {activeCourseModal.eligibility}</span>
              </div>
            </div>

            <div className="modal-highlights">
              <h4>Program Highlights & Syllabus Features:</h4>
              <ul>
                {activeCourseModal.highlights.map((item, idx) => (
                  <li key={idx}>
                    <Check size={16} className="check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-actions">
              <button
                type="button"
                className="btn btn-primary btn-full-width"
                onClick={() => handleEnrollOrDemo(activeCourseModal.title)}
              >
                <span>Book Free Demo for this Course</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .courses-section {
          background-color: var(--color-bg-white);
          position: relative;
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        @media (max-width: 1100px) {
          .courses-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .courses-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Course Card Component Styles */
        .course-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 12px rgba(10, 25, 47, 0.04);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          height: 100%;
        }

        .course-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px rgba(10, 25, 47, 0.1);
          border-color: var(--color-yellow);
        }

        .course-image-holder {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: #0a192f;
          overflow: hidden;
        }

        .course-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .course-card:hover .course-image {
          transform: scale(1.04);
        }

        .course-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(10, 25, 47, 0.88);
          color: var(--color-yellow);
          font-size: 0.72rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(245, 158, 11, 0.4);
        }

        .course-card-content {
          padding: 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .course-title {
          font-size: 1.18rem;
          color: var(--color-navy);
          margin-bottom: 10px;
          line-height: 1.35;
        }

        .course-desc {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
          margin-bottom: 18px;
          flex: 1;
        }

        .course-timing-box {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          background: var(--color-bg-light);
          padding: 10px 12px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border);
          font-size: 0.8rem;
          color: var(--color-navy);
          font-weight: 500;
          margin-bottom: 18px;
        }

        .timing-icon {
          color: var(--color-yellow-hover);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .course-card-actions {
          display: flex;
          gap: 10px;
          margin-top: auto;
        }

        .btn-know-more {
          flex: 1;
          background-color: transparent;
          border: 1.5px solid var(--color-navy);
          color: var(--color-navy);
          padding: 10px 14px;
          font-size: 0.88rem;
          font-weight: 600;
          border-radius: var(--radius-md);
        }

        .btn-know-more:hover {
          background-color: var(--color-navy);
          color: #ffffff;
        }

        /* Modal Styles */
        .course-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 1200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(10, 25, 47, 0.65);
          backdrop-filter: blur(4px);
        }

        .course-modal-content {
          position: relative;
          background: #ffffff;
          border-radius: var(--radius-xl);
          max-width: 580px;
          width: 100%;
          padding: 32px;
          z-index: 2;
          box-shadow: 0 20px 40px rgba(0,0,0,0.25);
          animation: modalPop 0.25s ease-out;
        }

        @keyframes modalPop {
          from {
            opacity: 0;
            transform: scale(0.94);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .modal-close-btn {
          position: absolute;
          top: 18px;
          right: 18px;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--color-text-muted);
          padding: 6px;
          border-radius: 50%;
          transition: background-color 0.2s;
        }

        .modal-close-btn:hover {
          background-color: var(--color-bg-light);
          color: var(--color-navy);
        }

        .modal-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--color-yellow-hover);
          background-color: var(--color-yellow-light);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          margin-bottom: 12px;
        }

        .modal-title {
          font-size: 1.45rem;
          color: var(--color-navy);
          margin-bottom: 10px;
        }

        .modal-desc {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin-bottom: 18px;
        }

        .modal-meta-box {
          background: var(--color-bg-light);
          border-radius: var(--radius-md);
          padding: 14px;
          border: 1px solid var(--color-border);
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.88rem;
          color: var(--color-navy);
        }

        .meta-icon {
          color: var(--color-yellow-hover);
          flex-shrink: 0;
        }

        .modal-highlights h4 {
          font-size: 0.95rem;
          color: var(--color-navy);
          margin-bottom: 10px;
        }

        .modal-highlights ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 24px;
        }

        .modal-highlights li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.88rem;
          color: var(--color-text-secondary);
        }

        .check-icon {
          color: var(--color-success);
          flex-shrink: 0;
          margin-top: 3px;
        }
      `}</style>
    </section>
  );
}

// Reusable CourseCard Component
function CourseCard({ course, onKnowMore, onBookDemo }) {
  return (
    <article className="course-card">
      <div className="course-image-holder">
        <img
          src={course.image}
          alt={`Curriculum illustration for ${course.title}`}
          className="course-image"
          loading="lazy"
        />
        <span className="course-badge">{course.badge}</span>
      </div>

      <div className="course-card-content">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-desc">{course.oneLineDescription}</p>

        <div className="course-timing-box">
          <Clock size={16} className="timing-icon" aria-hidden="true" />
          <span>{course.batchTimingSummary}</span>
        </div>

        <div className="course-card-actions">
          <button
            type="button"
            className="btn btn-know-more"
            onClick={onKnowMore}
            aria-label={`Know more about ${course.title}`}
          >
            Know More
          </button>
        </div>
      </div>
    </article>
  );
}
