import React from 'react';
import { GraduationCap, ArrowRight, BookCheck } from 'lucide-react';
import { FACULTY_DATA } from '../data/faculty';

export default function Faculty({ onEnquiryClick }) {
  return (
    <section className="section section-alt faculty-section" id="about" aria-labelledby="faculty-heading">
      <div className="container faculty-container">
        {/* Left Column: Introduction & CTA */}
        <div className="faculty-left">
          <span className="section-eyebrow">Academic Mentors</span>
          <h2 id="faculty-heading" className="faculty-title">
            Learn from Proven Mentors & Subject Specialists
          </h2>
          <p className="faculty-desc">
            At Aaroh Academy, our faculty members are not just tutors—they are passionate subject experts and mentors who have spent over a decade guiding students to board tops and competitive ranks.
          </p>
          <p className="faculty-subdesc">
            Every faculty member is dedicated to personal doubt clearance, conceptual breakdown of difficult topics, and fostering a disciplined yet highly supportive academic environment.
          </p>

          <div className="faculty-cta-box">
            <div className="cta-icon-holder">
              <BookCheck size={22} className="cta-icon" />
            </div>
            <div className="cta-content">
              <h4>Meet Our Faculty in Person</h4>
              <p>Attend an interactive demo session and discuss your academic goals.</p>
              <button
                type="button"
                className="btn btn-secondary btn-sm faculty-cta-btn"
                onClick={onEnquiryClick}
              >
                <span>Schedule a Faculty Interaction</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: 4 Faculty Cards */}
        <div className="faculty-right">
          <div className="faculty-grid">
            {FACULTY_DATA.map((teacher) => (
              <article key={teacher.id} className="faculty-card">
                <div className="faculty-image-box">
                  <img
                    src={teacher.image}
                    alt={`Portrait of ${teacher.name}, ${teacher.subject}`}
                    className="faculty-img"
                    loading="lazy"
                  />
                  <span className="faculty-exp-badge">{teacher.experienceYears}</span>
                </div>

                <div className="faculty-info">
                  <h3 className="faculty-name">{teacher.name}</h3>
                  <p className="faculty-subject">{teacher.subject}</p>
                  <p className="faculty-qual">{teacher.qualification}</p>
                  <p className="faculty-bio">{teacher.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .faculty-section {
          background-color: var(--color-bg-light);
          position: relative;
        }

        .faculty-container {
          display: grid;
          grid-template-columns: 0.95fr 1.3fr;
          gap: 48px;
          align-items: start;
        }

        @media (max-width: 992px) {
          .faculty-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .faculty-left {
          display: flex;
          flex-direction: column;
        }

        .faculty-title {
          font-size: clamp(2rem, 3.2vw, 2.5rem);
          line-height: 1.22;
          margin-bottom: 18px;
        }

        .faculty-desc {
          font-size: 1.05rem;
          color: var(--color-text-secondary);
          line-height: 1.65;
          margin-bottom: 12px;
        }

        .faculty-subdesc {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 28px;
        }

        .faculty-cta-box {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          padding: 22px;
          display: flex;
          gap: 16px;
          box-shadow: 0 4px 12px rgba(10, 25, 47, 0.05);
        }

        .cta-icon-holder {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background-color: var(--color-yellow-light);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cta-icon {
          color: var(--color-yellow-hover);
        }

        .cta-content h4 {
          font-size: 1rem;
          color: var(--color-navy);
          margin-bottom: 4px;
        }

        .cta-content p {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          margin-bottom: 12px;
        }

        .faculty-cta-btn {
          margin-top: 4px;
        }

        /* Right Column Grid */
        .faculty-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        @media (max-width: 580px) {
          .faculty-grid {
            grid-template-columns: 1fr;
          }
        }

        .faculty-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(10, 25, 47, 0.04);
          display: flex;
          flex-direction: column;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          height: 100%;
        }

        .faculty-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(10, 25, 47, 0.08);
          border-color: var(--color-yellow);
        }

        .faculty-image-box {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          background: #0a192f;
          overflow: hidden;
        }

        .faculty-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .faculty-exp-badge {
          position: absolute;
          bottom: 10px;
          right: 10px;
          background: rgba(10, 25, 47, 0.9);
          color: var(--color-yellow);
          font-size: 0.72rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(245, 158, 11, 0.35);
        }

        .faculty-info {
          padding: 18px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .faculty-name {
          font-size: 1.12rem;
          color: var(--color-navy);
          margin-bottom: 4px;
        }

        .faculty-subject {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-yellow-hover);
          margin-bottom: 2px;
        }

        .faculty-qual {
          font-size: 0.78rem;
          color: var(--color-text-muted);
          font-weight: 500;
          margin-bottom: 10px;
        }

        .faculty-bio {
          font-size: 0.82rem;
          color: var(--color-text-secondary);
          line-height: 1.45;
          margin-top: auto;
        }
      `}</style>
    </section>
  );
}
