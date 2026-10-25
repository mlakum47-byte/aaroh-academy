import React, { useState, useEffect, useRef } from 'react';
import { Trophy, TrendingUp, Award, ArrowRight, X, CheckCircle2 } from 'lucide-react';
import { ACADEMY_CONFIG } from '../config/academy';

export default function Results() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    students: 0,
    boardRate: 0,
    selections: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);

  const targetStats = {
    students: ACADEMY_CONFIG.stats.studentsGuided.value, // 2500
    boardRate: ACADEMY_CONFIG.stats.boardSuccessRate.value, // 98.4
    selections: ACADEMY_CONFIG.stats.competitiveSelections.value, // 450
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Respect prefers-reduced-motion
          const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
          ).matches;

          if (prefersReducedMotion) {
            setCounts({
              students: targetStats.students,
              boardRate: targetStats.boardRate,
              selections: targetStats.selections,
            });
            return;
          }

          // Smooth animation using requestAnimationFrame
          const duration = 1800; // ms
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts({
              students: Math.floor(easeOut * targetStats.students),
              boardRate: parseFloat((easeOut * targetStats.boardRate).toFixed(1)),
              selections: Math.floor(easeOut * targetStats.selections),
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts({
                students: targetStats.students,
                boardRate: targetStats.boardRate,
                selections: targetStats.selections,
              });
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="section-navy results-section"
      id="results"
      aria-labelledby="results-heading"
    >
      <div className="container results-container">
        {/* Left Side */}
        <div className="results-left">
          <span className="section-eyebrow">Academic Milestones</span>
          <h2 id="results-heading" className="results-title">
            Consistent Excellence & Verified Achievements
          </h2>
          <p className="results-subtitle">
            Our systematic concept-first pedagogy translates into dependable academic scores, strong board percentages, and remarkable competitive selections year after year.
          </p>

          <button
            type="button"
            className="btn btn-primary btn-know-all-results"
            onClick={() => setIsModalOpen(true)}
            aria-haspopup="dialog"
          >
            <span>Know All Results</span>
            <ArrowRight size={17} />
          </button>
        </div>

        {/* Right Side: Three Statistic Cards */}
        <div className="results-right">
          {/* Stat 1: Students Guided */}
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <Award size={24} className="stat-icon" />
            </div>
            <div className="stat-number">
              {counts.students.toLocaleString()}
              <span className="stat-suffix">{ACADEMY_CONFIG.stats.studentsGuided.suffix}</span>
            </div>
            <h3 className="stat-label">{ACADEMY_CONFIG.stats.studentsGuided.label}</h3>
            <p className="stat-desc">{ACADEMY_CONFIG.stats.studentsGuided.description}</p>
          </div>

          {/* Stat 2: Board Exam Success Rate */}
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <TrendingUp size={24} className="stat-icon" />
            </div>
            <div className="stat-number">
              {counts.boardRate.toFixed(1)}
              <span className="stat-suffix">{ACADEMY_CONFIG.stats.boardSuccessRate.suffix}</span>
            </div>
            <h3 className="stat-label">{ACADEMY_CONFIG.stats.boardSuccessRate.label}</h3>
            <p className="stat-desc">{ACADEMY_CONFIG.stats.boardSuccessRate.description}</p>
          </div>

          {/* Stat 3: Selections in Competitive Exams */}
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <Trophy size={24} className="stat-icon" />
            </div>
            <div className="stat-number">
              {counts.selections.toLocaleString()}
              <span className="stat-suffix">{ACADEMY_CONFIG.stats.competitiveSelections.suffix}</span>
            </div>
            <h3 className="stat-label">{ACADEMY_CONFIG.stats.competitiveSelections.label}</h3>
            <p className="stat-desc">{ACADEMY_CONFIG.stats.competitiveSelections.description}</p>
          </div>
        </div>
      </div>

      {/* Verified Results Breakdown Modal */}
      {isModalOpen && (
        <div
          className="results-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="results-modal-title"
        >
          <div className="modal-backdrop" onClick={() => setIsModalOpen(false)} />
          <div className="results-modal-card">
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close results summary"
            >
              <X size={22} />
            </button>

            <span className="modal-badge">Verified Performance Record</span>
            <h3 id="results-modal-title" className="results-modal-title">
              Aaroh Academy Academic Achievements
            </h3>
            <p className="results-modal-desc">
              All results are audited and verified through student scorecards and board examination roll records.
            </p>

            <div className="results-table-wrapper">
              <table className="results-table">
                <thead>
                  <tr>
                    <th>Academic Category</th>
                    <th>Students Enrolled</th>
                    <th>Distinction Rate (85%+)</th>
                    <th>Top Highlights</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Class 10 CBSE / ICSE</strong></td>
                    <td>380+</td>
                    <td>98.4%</td>
                    <td>14 Students scored 98%+ aggregate</td>
                  </tr>
                  <tr>
                    <td><strong>Class 12 Boards (Science)</strong></td>
                    <td>320+</td>
                    <td>96.2%</td>
                    <td>School toppers in Physics & Chemistry</td>
                  </tr>
                  <tr>
                    <td><strong>JEE Main & Advanced</strong></td>
                    <td>185+</td>
                    <td>Qualified 82%</td>
                    <td>Highest percentile: 99.64</td>
                  </tr>
                  <tr>
                    <td><strong>NEET-UG Medical</strong></td>
                    <td>140+</td>
                    <td>Government College Selection 74%</td>
                    <td>Top score: 685/720</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="modal-footer-note">
              <CheckCircle2 size={16} className="check-icon" />
              <span>Full merit list with roll numbers and marksheets is available at our admissions office.</span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .results-section {
          background-color: var(--color-navy);
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }

        .results-container {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 56px;
          align-items: center;
        }

        @media (max-width: 992px) {
          .results-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .results-section {
            padding: 56px 0;
          }
        }

        .results-left {
          display: flex;
          flex-direction: column;
        }

        .results-title {
          font-size: clamp(2rem, 3.2vw, 2.7rem);
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .results-subtitle {
          font-size: 1.05rem;
          color: #cbd5e1;
          line-height: 1.65;
          margin-bottom: 28px;
        }

        .btn-know-all-results {
          align-self: flex-start;
          padding: 12px 24px;
        }

        .results-right {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        @media (max-width: 640px) {
          .results-right {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-lg);
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: transform 0.25s ease, background-color 0.25s ease, border-color 0.25s ease;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--color-yellow);
        }

        .stat-icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(245, 158, 11, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .stat-icon {
          color: var(--color-yellow);
        }

        .stat-number {
          font-family: var(--font-heading);
          font-size: clamp(1.8rem, 2.8vw, 2.4rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 6px;
          display: flex;
          align-items: baseline;
        }

        .stat-suffix {
          color: var(--color-yellow);
          font-size: 1.6rem;
          margin-left: 2px;
        }

        .stat-label {
          font-size: 0.95rem;
          font-weight: 600;
          color: #f1f5f9;
          margin-bottom: 6px;
        }

        .stat-desc {
          font-size: 0.78rem;
          color: #94a3b8;
          line-height: 1.4;
        }

        /* Modal */
        .results-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 1200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .results-modal-card {
          position: relative;
          background: #ffffff;
          color: var(--color-navy);
          border-radius: var(--radius-xl);
          max-width: 720px;
          width: 100%;
          padding: 32px;
          z-index: 2;
          box-shadow: 0 24px 48px rgba(0,0,0,0.3);
          max-height: 90vh;
          overflow-y: auto;
          animation: modalPop 0.25s ease-out;
        }

        .results-modal-title {
          font-size: 1.5rem;
          color: var(--color-navy);
          margin-bottom: 6px;
        }

        .results-modal-desc {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          margin-bottom: 20px;
        }

        .results-table-wrapper {
          overflow-x: auto;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          margin-bottom: 16px;
        }

        .results-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.88rem;
        }

        .results-table th {
          background-color: var(--color-bg-alt);
          color: var(--color-navy);
          padding: 12px 14px;
          font-weight: 700;
          border-bottom: 1px solid var(--color-border);
        }

        .results-table td {
          padding: 12px 14px;
          border-bottom: 1px solid var(--color-border);
          color: var(--color-text-secondary);
        }

        .results-table tr:last-child td {
          border-bottom: none;
        }

        .modal-footer-note {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: var(--color-text-muted);
        }
      `}</style>
    </section>
  );
}
