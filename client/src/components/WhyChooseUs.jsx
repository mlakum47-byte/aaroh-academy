import React from 'react';
import { Lightbulb, UserCheck, FileText, HeartHandshake } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      id: 1,
      title: 'Concept-Based Learning',
      description: 'Focus on understanding concepts rather than memorising answers.',
      icon: Lightbulb,
      highlight: 'Core Foundation',
    },
    {
      id: 2,
      title: 'Personalised Attention',
      description: 'Provide focused guidance based on student learning needs.',
      icon: UserCheck,
      highlight: 'Individual Focus',
    },
    {
      id: 3,
      title: 'Regular Tests and Analysis',
      description: 'Monitor progress and identify weak areas.',
      icon: FileText,
      highlight: 'Targeted Feedback',
    },
    {
      id: 4,
      title: 'Supportive Environment',
      description: 'Encourage confidence, discipline, and continuous improvement.',
      icon: HeartHandshake,
      highlight: 'Holistic Growth',
    },
  ];

  return (
    <section className="section section-light why-choose-section" id="why-choose-us" aria-labelledby="why-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">The Aaroh Edge</span>
          <h2 id="why-heading" className="section-title">
            Why Choose Aaroh Academy?
          </h2>
          <p className="section-subtitle">
            A proven pedagogy founded on conceptual depth, close mentorship, structured assessment, and a nurturing academic culture.
          </p>
        </div>

        {/* Exactly 4 Points Grid */}
        <div className="why-grid">
          {points.map((point) => {
            const IconComponent = point.icon;
            return (
              <div key={point.id} className="why-card">
                <div className="why-card-top">
                  <div className="why-icon-box">
                    <IconComponent size={26} className="why-icon" />
                  </div>
                  <span className="why-badge">{point.highlight}</span>
                </div>

                <h3 className="why-card-title">{point.title}</h3>
                <p className="why-card-desc">{point.description}</p>
                <div className="why-card-bar" />
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .why-choose-section {
          background-color: var(--color-bg-white);
          position: relative;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        @media (max-width: 1024px) {
          .why-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .why-grid {
            grid-template-columns: 1fr;
          }
        }

        .why-card {
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 30px 24px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 12px rgba(10, 25, 47, 0.04);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          position: relative;
        }

        .why-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px rgba(10, 25, 47, 0.08);
          border-color: var(--color-yellow);
        }

        .why-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .why-icon-box {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background-color: var(--color-navy);
          color: var(--color-yellow);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }

        .why-card:hover .why-icon-box {
          transform: scale(1.08);
          background-color: var(--color-navy-800);
        }

        .why-badge {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--color-text-muted);
          background: var(--color-bg-light);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
        }

        .why-card-title {
          font-size: 1.25rem;
          color: var(--color-navy);
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .why-card-desc {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin-bottom: 20px;
          flex: 1;
        }

        .why-card-bar {
          height: 3px;
          width: 40px;
          background-color: var(--color-yellow);
          border-radius: var(--radius-full);
          transition: width 0.3s ease;
        }

        .why-card:hover .why-card-bar {
          width: 80px;
        }
      `}</style>
    </section>
  );
}
