import React, { useState } from 'react';
import { ChevronDown, MessageSquare, ArrowRight } from 'lucide-react';
import { FAQS_DATA } from '../data/faqs';

export default function FAQ({ onContactClick }) {
  // First item open by default (index 0)
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    // If clicking the currently open item, close it; otherwise open the clicked one
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  const handleContactAction = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section section-light faq-section" id="faqs" aria-labelledby="faq-heading">
      <div className="container faq-container">
        {/* Left Column: Heading, Paragraph, Contact CTA */}
        <div className="faq-left">
          <span className="section-eyebrow">Clear Answers</span>
          <h2 id="faq-heading" className="faq-title">
            Frequently Asked Questions
          </h2>
          <p className="faq-description">
            Have questions about batch enrollments, teaching methodology, or study resources? Explore our quick answers or get in touch with our academic advisors.
          </p>

          <div className="faq-cta-card">
            <div className="faq-cta-icon-box">
              <MessageSquare size={22} className="faq-cta-icon" />
            </div>
            <h4>Still have questions?</h4>
            <p>Our academic counsellors are available to answer all your queries and schedule your visit.</p>
            <button
              type="button"
              className="btn btn-primary btn-sm faq-contact-btn"
              onClick={handleContactAction}
            >
              <span>Contact Us</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* Right Column: Exactly 6 FAQ Accordion Items */}
        <div className="faq-right" role="region" aria-label="Frequently Asked Questions Accordion">
          <div className="accordion-list">
            {FAQS_DATA.map((faq, index) => {
              const isOpen = openIndex === index;
              const headingId = `faq-header-${faq.id}`;
              const contentId = `faq-content-${faq.id}`;

              return (
                <div key={faq.id} className={`accordion-item ${isOpen ? 'accordion-open' : ''}`}>
                  <button
                    type="button"
                    id={headingId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="accordion-header"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="accordion-question">{faq.question}</span>
                    <span className="accordion-chevron-wrapper" aria-hidden="true">
                      <ChevronDown size={18} className={`chevron-icon ${isOpen ? 'chevron-rotated' : ''}`} />
                    </span>
                  </button>

                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headingId}
                    className={`accordion-collapse ${isOpen ? 'show' : ''}`}
                  >
                    <div className="accordion-body">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .faq-section {
          background-color: var(--color-bg-white);
          position: relative;
        }

        .faq-container {
          display: grid;
          grid-template-columns: 0.95fr 1.3fr;
          gap: 56px;
          align-items: start;
        }

        @media (max-width: 992px) {
          .faq-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .faq-left {
          display: flex;
          flex-direction: column;
        }

        .faq-title {
          font-size: clamp(2rem, 3.2vw, 2.5rem);
          line-height: 1.22;
          margin-bottom: 18px;
        }

        .faq-description {
          font-size: 1.05rem;
          color: var(--color-text-secondary);
          line-height: 1.65;
          margin-bottom: 28px;
        }

        .faq-cta-card {
          background-color: var(--color-bg-light);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .faq-cta-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background-color: var(--color-yellow-light);
          color: var(--color-yellow-hover);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 6px;
        }

        .faq-cta-card h4 {
          font-size: 1.05rem;
          color: var(--color-navy);
        }

        .faq-cta-card p {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        .faq-contact-btn {
          align-self: flex-start;
          margin-top: 8px;
        }

        /* Right Column Accordion List */
        .accordion-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .accordion-item {
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .accordion-item:hover {
          border-color: #cbd5e1;
        }

        .accordion-item.accordion-open {
          border-color: var(--color-yellow);
          box-shadow: 0 4px 14px rgba(10, 25, 47, 0.05);
        }

        .accordion-header {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 20px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          gap: 16px;
          font-size: 1.02rem;
          font-weight: 600;
          color: var(--color-navy);
          transition: background-color 0.2s ease;
        }

        .accordion-header:hover {
          background-color: var(--color-bg-light);
        }

        .accordion-question {
          flex: 1;
        }

        .accordion-chevron-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--color-bg-light);
          color: var(--color-navy);
          flex-shrink: 0;
          transition: background-color 0.2s ease;
        }

        .accordion-open .accordion-chevron-wrapper {
          background: var(--color-yellow-light);
          color: var(--color-yellow-hover);
        }

        .chevron-icon {
          transition: transform 0.25s ease;
        }

        .chevron-rotated {
          transform: rotate(180deg);
        }

        .accordion-collapse {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s cubic-bezier(0, 1, 0, 1);
        }

        .accordion-collapse.show {
          max-height: 500px;
          transition: max-height 0.35s ease-in-out;
        }

        .accordion-body {
          padding: 0 20px 20px 20px;
          font-size: 0.92rem;
          color: var(--color-text-secondary);
          line-height: 1.65;
          border-top: 1px solid var(--color-bg-light);
          padding-top: 14px;
        }
      `}</style>
    </section>
  );
}
