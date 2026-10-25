import React, { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/gallery';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems =
    selectedCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const activeLightboxItem =
    lightboxIndex !== null && filteredItems[lightboxIndex]
      ? filteredItems[lightboxIndex]
      : null;

  return (
    <section className="section section-alt gallery-section" id="gallery" aria-labelledby="gallery-heading">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-eyebrow">Campus Life</span>
          <h2 id="gallery-heading" className="section-title">
            Life at Aaroh Academy
          </h2>
          <p className="section-subtitle">
            A glimpse inside our modern classrooms, active teaching sessions, student collaborative circles, and celebratory academic achievements.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="gallery-tabs" role="tablist" aria-label="Gallery categories">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={selectedCategory === cat.id}
              className={`gallery-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => {
                setSelectedCategory(cat.id);
                setLightboxIndex(null);
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Image Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="gallery-item-card"
              onClick={() => setLightboxIndex(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setLightboxIndex(index);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View ${item.title}`}
            >
              <div className="gallery-img-wrapper">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="gallery-thumbnail"
                  loading="lazy"
                  width="500"
                  height="350"
                />
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <span className="overlay-category">{item.category}</span>
                    <h3 className="overlay-title">{item.title}</h3>
                    <div className="overlay-zoom-icon">
                      <Maximize2 size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      {activeLightboxItem && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={activeLightboxItem.title}
        >
          <div className="lightbox-backdrop" onClick={() => setLightboxIndex(null)} />
          
          <div className="lightbox-content">
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close image preview (Escape)"
            >
              <X size={26} />
            </button>

            {/* Prev / Next controls */}
            {filteredItems.length > 1 && (
              <>
                <button
                  type="button"
                  className="lightbox-nav-btn lightbox-prev"
                  onClick={() =>
                    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1))
                  }
                  aria-label="Previous image"
                >
                  <ChevronLeft size={28} />
                </button>

                <button
                  type="button"
                  className="lightbox-nav-btn lightbox-next"
                  onClick={() =>
                    setLightboxIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0))
                  }
                  aria-label="Next image"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}

            <div className="lightbox-image-box">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.alt}
                className="lightbox-img"
              />
            </div>

            <div className="lightbox-caption">
              <h4>{activeLightboxItem.title}</h4>
              <p>{activeLightboxItem.description}</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-section {
          background-color: var(--color-bg-light);
          position: relative;
        }

        .gallery-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-bottom: 36px;
        }

        .gallery-tab-btn {
          background: #ffffff;
          border: 1px solid var(--color-border);
          color: var(--color-text-secondary);
          padding: 8px 18px;
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .gallery-tab-btn:hover {
          background-color: var(--color-bg-alt);
          color: var(--color-navy);
        }

        .gallery-tab-btn.active {
          background-color: var(--color-navy);
          color: var(--color-yellow);
          border-color: var(--color-navy);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 900px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 580px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }

        .gallery-item-card {
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: #0a192f;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(10, 25, 47, 0.05);
          outline: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .gallery-item-card:hover,
        .gallery-item-card:focus-visible {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(10, 25, 47, 0.12);
        }

        .gallery-img-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
        }

        .gallery-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .gallery-item-card:hover .gallery-thumbnail {
          transform: scale(1.06);
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(10, 25, 47, 0) 30%, rgba(10, 25, 47, 0.92) 100%);
          display: flex;
          align-items: flex-end;
          padding: 20px;
          opacity: 0.9;
          transition: opacity 0.25s ease;
        }

        .gallery-item-card:hover .gallery-overlay {
          opacity: 1;
        }

        .overlay-content {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .overlay-category {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--color-yellow);
          margin-bottom: 4px;
        }

        .overlay-title {
          font-size: 1.05rem;
          color: #ffffff;
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .overlay-zoom-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          align-self: flex-end;
          margin-top: -24px;
        }

        /* Lightbox */
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          z-index: 1300;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .lightbox-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(10, 25, 47, 0.9);
          backdrop-filter: blur(8px);
        }

        .lightbox-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          width: 100%;
          background: #ffffff;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 24px 48px rgba(0,0,0,0.4);
          animation: modalPop 0.25s ease-out;
        }

        .lightbox-close-btn {
          position: absolute;
          top: 14px;
          right: 14px;
          background: rgba(10, 25, 47, 0.7);
          color: #ffffff;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          transition: background-color 0.2s;
        }

        .lightbox-close-btn:hover {
          background-color: var(--color-yellow);
          color: var(--color-navy);
        }

        .lightbox-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(10, 25, 47, 0.7);
          color: #ffffff;
          border: none;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          transition: background-color 0.2s;
        }

        .lightbox-nav-btn:hover {
          background-color: var(--color-yellow);
          color: var(--color-navy);
        }

        .lightbox-prev {
          left: 14px;
        }

        .lightbox-next {
          right: 14px;
        }

        .lightbox-image-box {
          width: 100%;
          max-height: 520px;
          background: #0a192f;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-img {
          width: 100%;
          height: auto;
          max-height: 520px;
          object-fit: contain;
        }

        .lightbox-caption {
          padding: 20px 24px;
          background: #ffffff;
        }

        .lightbox-caption h4 {
          font-size: 1.2rem;
          color: var(--color-navy);
          margin-bottom: 6px;
        }

        .lightbox-caption p {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
        }
      `}</style>
    </section>
  );
}
