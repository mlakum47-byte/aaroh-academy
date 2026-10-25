import React from 'react';
import { Award, Users, TrendingUp, CheckCircle } from 'lucide-react';
import DemoForm from './DemoForm';
import { ACADEMY_CONFIG } from '../config/academy';

export default function Hero({ preselectedCourse }) {
  const trustChips = [
    { label: 'Experienced Faculty', icon: Award },
    { label: 'Small Batch Size', icon: Users },
    { label: 'Regular Progress Updates', icon: TrendingUp },
  ];

  return (
    <section className="hero-section" id="home" aria-label="Hero Introduction">
      <div className="container hero-container">
        {/* Left Column: Heading, Paragraph, Trust Chips, Hero Image */}
        <div className="hero-left-column">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            <span>{ACADEMY_CONFIG.eyebrow}</span>
          </div>

          <h1 className="hero-title">
            Stronger Foundation, Brighter <span className="text-highlight">Future</span>
          </h1>

          <p className="hero-description">
            Empowering students from Class 6 to 12 and competitive entrance aspirants with quality teaching, deep conceptual understanding, individual attention, and continuous academic growth.
          </p>

          {/* Three Trust Chips */}
          <div className="trust-chips-list" aria-label="Key Academy Strengths">
            {trustChips.map((chip, idx) => {
              const IconComp = chip.icon;
              return (
                <div key={idx} className="trust-chip">
                  <div className="chip-icon-box">
                    <IconComp size={16} />
                  </div>
                  <span className="chip-label">{chip.label}</span>
                </div>
              );
            })}
          </div>

          {/* Educational Hero Visual */}
          <div className="hero-image-wrapper">
            <img
              src={`${import.meta.env.BASE_URL}images/hero-illustration.svg`}
              alt="Students mastering concepts and formulas in modern smart classroom at Aaroh Academy"
              className="hero-image"
              width="600"
              height="400"
              loading="eager"
            />
            <div className="hero-floating-stat">
              <CheckCircle size={18} className="stat-check-icon" />
              <div>
                <strong>Admissions Open 2026–27</strong>
                <span>Limited seats per batch for personal focus</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Demo Enquiry Form */}
        <div className="hero-right-column">
          <DemoForm preselectedCourse={preselectedCourse} />
        </div>
      </div>

      <style>{`
        .hero-section {
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          padding-top: 48px;
          padding-bottom: 72px;
          border-bottom: 1px solid var(--color-border);
          position: relative;
          overflow: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.15fr 0.95fr;
          gap: 48px;
          align-items: start;
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .hero-section {
            padding-top: 36px;
            padding-bottom: 56px;
          }
        }

        .hero-left-column {
          display: flex;
          flex-direction: column;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-navy);
          background-color: var(--color-bg-alt);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          margin-bottom: 18px;
          border: 1px solid var(--color-border);
          align-self: flex-start;
        }

        .eyebrow-dot {
          width: 8px;
          height: 8px;
          background-color: var(--color-yellow);
          border-radius: 50%;
          display: inline-block;
        }

        .hero-title {
          font-size: clamp(2.3rem, 4.2vw, 3.4rem);
          line-height: 1.15;
          margin-bottom: 18px;
          letter-spacing: -0.02em;
        }

        .hero-title .text-highlight {
          color: var(--color-yellow);
          position: relative;
          display: inline-block;
        }

        .hero-description {
          font-size: 1.1rem;
          line-height: 1.65;
          color: var(--color-text-secondary);
          margin-bottom: 24px;
          max-width: 600px;
        }

        .trust-chips-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 32px;
        }

        .trust-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          padding: 8px 14px;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
          box-shadow: 0 2px 6px rgba(10, 25, 47, 0.04);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-navy);
        }

        .chip-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background-color: var(--color-yellow-light);
          color: var(--color-yellow-hover);
        }

        .hero-image-wrapper {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--color-border);
          background: #ffffff;
          margin-top: 10px;
        }

        .hero-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .hero-floating-stat {
          position: absolute;
          bottom: 14px;
          left: 14px;
          right: 14px;
          background: rgba(10, 25, 47, 0.92);
          backdrop-filter: blur(6px);
          color: #ffffff;
          padding: 12px 16px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(245, 158, 11, 0.3);
        }

        .stat-check-icon {
          color: var(--color-yellow);
          flex-shrink: 0;
        }

        .hero-floating-stat strong {
          display: block;
          font-size: 0.88rem;
          color: #ffffff;
        }

        .hero-floating-stat span {
          display: block;
          font-size: 0.76rem;
          color: #cbd5e1;
        }

        .hero-right-column {
          position: sticky;
          top: calc(var(--navbar-height-scrolled) + 20px);
        }

        @media (max-width: 992px) {
          .hero-right-column {
            position: static;
          }
        }
      `}</style>
    </section>
  );
}
