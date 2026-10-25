import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const carouselRef = useRef(null);

  // Responsive items count: 3 on desktop, 2 on tablet, 1 on mobile
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 700) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS_DATA.length - visibleCount);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  // Touch Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 0) {
        // Swiped left -> next
        handleNext();
      } else {
        // Swiped right -> prev
        handlePrev();
      }
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <section
      className="section section-alt testimonials-section"
      id="testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        {/* Header & Controls */}
        <div className="testimonials-header-row">
          <div className="testimonials-header-left">
            <span className="section-eyebrow">Student & Parent Voices</span>
            <h2 id="testimonials-heading" className="section-title">
              What Our Community Says
            </h2>
            <p className="section-subtitle">
              Authentic stories of academic transformation, improved confidence, and exam success from Aaroh Academy students and parents.
            </p>
          </div>

          <div className="carousel-nav-buttons" aria-label="Carousel navigation">
            <button
              type="button"
              className="carousel-btn"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              className="carousel-btn"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Carousel Window */}
        <div
          ref={carouselRef}
          className="carousel-container"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-roledescription="carousel"
          aria-label="Student and parent testimonials"
        >
          {/* ARIA Announcement for Screen Readers */}
          <div className="sr-only" aria-live="polite">
            Showing slide {currentIndex + 1} of {maxIndex + 1}
          </div>

          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {TESTIMONIALS_DATA.map((t, idx) => (
              <div
                key={t.id}
                className="carousel-slide"
                style={{ flex: `0 0 ${100 / visibleCount}%` }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${idx + 1} of ${TESTIMONIALS_DATA.length}: ${t.name}`}
              >
                <article className="testimonial-card">
                  <div className="testimonial-card-top">
                    <div className="stars-row" aria-label={`${t.rating} out of 5 stars`}>
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={17} className="star-icon" fill="currentColor" />
                      ))}
                    </div>
                    <Quote size={28} className="quote-icon" aria-hidden="true" />
                  </div>

                  <p className="testimonial-quote">“{t.quote}”</p>

                  <div className="testimonial-author">
                    <div className="author-avatar">{t.avatar}</div>
                    <div className="author-meta">
                      <strong className="author-name">{t.name}</strong>
                      <span className="author-role">{t.role}</span>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="carousel-dots" aria-hidden="true">
          {[...Array(maxIndex + 1)].map((_, i) => (
            <button
              key={i}
              type="button"
              className={`dot-indicator ${i === currentIndex ? 'dot-active' : ''}`}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-section {
          background-color: var(--color-bg-light);
          position: relative;
          overflow: hidden;
        }

        .testimonials-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 40px;
        }

        @media (max-width: 768px) {
          .testimonials-header-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        .testimonials-header-left {
          max-width: 640px;
        }

        .carousel-nav-buttons {
          display: flex;
          gap: 12px;
          flex-shrink: 0;
        }

        .carousel-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1.5px solid var(--color-border);
          background: #ffffff;
          color: var(--color-navy);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }

        .carousel-btn:hover {
          background-color: var(--color-navy);
          color: var(--color-yellow);
          border-color: var(--color-navy);
          transform: translateY(-2px);
        }

        .carousel-container {
          overflow: hidden;
          width: 100%;
          padding: 8px 0 16px 0;
          outline: none;
        }

        .carousel-track {
          display: flex;
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          will-change: transform;
        }

        .carousel-slide {
          padding: 0 12px;
          box-sizing: border-box;
        }

        .testimonial-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          padding: 28px;
          display: flex;
          flex-direction: column;
          height: 100%;
          box-shadow: 0 4px 12px rgba(10, 25, 47, 0.04);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 28px rgba(10, 25, 47, 0.08);
          border-color: var(--color-yellow);
        }

        .testimonial-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .stars-row {
          display: flex;
          gap: 4px;
          color: var(--color-yellow);
        }

        .star-icon {
          color: var(--color-yellow);
        }

        .quote-icon {
          color: var(--color-border);
          opacity: 0.7;
        }

        .testimonial-quote {
          font-size: 0.94rem;
          line-height: 1.65;
          color: var(--color-text-secondary);
          margin-bottom: 24px;
          flex: 1;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid var(--color-border);
        }

        .author-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--color-navy);
          color: var(--color-yellow);
          font-weight: 700;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .author-meta {
          display: flex;
          flex-direction: column;
        }

        .author-name {
          font-size: 0.98rem;
          color: var(--color-navy);
        }

        .author-role {
          font-size: 0.78rem;
          color: var(--color-text-muted);
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 24px;
        }

        .dot-indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #cbd5e1;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          padding: 0;
        }

        .dot-active {
          width: 28px;
          border-radius: var(--radius-full);
          background: var(--color-navy);
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }
      `}</style>
    </section>
  );
}
