import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, CalendarCheck, ExternalLink } from 'lucide-react';
import { ACADEMY_CONFIG } from '../config/academy';

export default function Contact({ onBookDemoClick }) {
  const handleDemoAction = () => {
    if (onBookDemoClick) {
      onBookDemoClick();
    } else {
      document.querySelector('#demo-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-navy contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="container contact-container">
        {/* Left Column */}
        <div className="contact-left">
          <span className="section-eyebrow">Connect With Us</span>
          <h2 id="contact-heading" className="contact-title">
            Visit Our Campus & Experience the Aaroh Standard
          </h2>
          <p className="contact-subtitle">
            We welcome parents and students to visit our campus, tour our classrooms, meet our faculty, and discuss personalized learning goals.
          </p>

          <div className="contact-info-list">
            {/* Address */}
            <div className="contact-info-item">
              <div className="contact-icon-box">
                <MapPin size={22} className="contact-icon" />
              </div>
              <div className="contact-item-text">
                <span className="item-label">Campus Address</span>
                <address className="item-value">{ACADEMY_CONFIG.location.formattedAddress}</address>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-info-item">
              <div className="contact-icon-box">
                <Phone size={22} className="contact-icon" />
              </div>
              <div className="contact-item-text">
                <span className="item-label">Admissions Hotline</span>
                <a
                  href={`tel:${ACADEMY_CONFIG.contact.phoneTel}`}
                  className="item-value item-link"
                >
                  {ACADEMY_CONFIG.contact.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="contact-info-item">
              <div className="contact-icon-box">
                <Mail size={22} className="contact-icon" />
              </div>
              <div className="contact-item-text">
                <span className="item-label">Academic Enquiries</span>
                <a
                  href={`mailto:${ACADEMY_CONFIG.contact.email}`}
                  className="item-value item-link"
                >
                  {ACADEMY_CONFIG.contact.email}
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="contact-info-item">
              <div className="contact-icon-box">
                <Clock size={22} className="contact-icon" />
              </div>
              <div className="contact-item-text">
                <span className="item-label">Visiting & Counselling Hours</span>
                <span className="item-value">{ACADEMY_CONFIG.contact.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="contact-action-buttons">
            <button
              type="button"
              className="btn btn-primary btn-contact-demo"
              onClick={handleDemoAction}
            >
              <CalendarCheck size={18} />
              <span>Book a Free Demo Class</span>
            </button>

            <a
              href={ACADEMY_CONFIG.location.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-navy-outline btn-contact-directions"
            >
              <Navigation size={18} />
              <span>Get Directions</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Right Column: Embedded Responsive Google Map */}
        <div className="contact-right">
          <div className="map-frame-wrapper">
            {ACADEMY_CONFIG.location.googleMapsEmbedUrl ? (
              <iframe
                title="Aaroh Academy Campus Location on Google Maps"
                src={ACADEMY_CONFIG.location.googleMapsEmbedUrl}
                className="map-iframe"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <div className="map-fallback">
                <MapPin size={36} className="contact-icon" />
                <p>Map location preview not configured.</p>
                <span>{ACADEMY_CONFIG.location.formattedAddress}</span>
              </div>
            )}
            <div className="map-badge">
              <span className="live-dot" />
              <span>Aaroh Academy Campus, Sector 62, Noida</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: var(--color-navy);
          color: #ffffff;
          padding: 80px 0;
          position: relative;
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 56px;
          align-items: center;
        }

        @media (max-width: 992px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .contact-section {
            padding: 56px 0;
          }
        }

        .contact-left {
          display: flex;
          flex-direction: column;
        }

        .contact-title {
          font-size: clamp(2rem, 3.2vw, 2.7rem);
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .contact-subtitle {
          font-size: 1.05rem;
          color: #cbd5e1;
          line-height: 1.65;
          margin-bottom: 32px;
        }

        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 36px;
        }

        .contact-info-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .contact-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(245, 158, 11, 0.15);
          color: var(--color-yellow);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-item-text {
          display: flex;
          flex-direction: column;
        }

        .item-label {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #94a3b8;
          font-weight: 600;
          margin-bottom: 2px;
        }

        .item-value {
          font-size: 0.98rem;
          color: #f1f5f9;
          font-style: normal;
          line-height: 1.4;
        }

        .item-link {
          transition: color 0.2s ease;
        }

        .item-link:hover {
          color: var(--color-yellow);
          text-decoration: underline;
        }

        .contact-action-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .btn-contact-demo {
          padding: 13px 24px;
        }

        .btn-contact-directions {
          padding: 13px 22px;
        }

        /* Right Column Map */
        .map-frame-wrapper {
          position: relative;
          width: 100%;
          height: 420px;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: #050d1a;
        }

        @media (max-width: 580px) {
          .map-frame-wrapper {
            height: 320px;
          }
        }

        .map-iframe {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }

        .map-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px;
          text-align: center;
          color: #cbd5e1;
          gap: 12px;
        }

        .map-badge {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          background: rgba(10, 25, 47, 0.9);
          backdrop-filter: blur(6px);
          color: #ffffff;
          padding: 10px 14px;
          border-radius: var(--radius-md);
          font-size: 0.8rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(245, 158, 11, 0.3);
        }

        .live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--color-yellow);
          box-shadow: 0 0 8px var(--color-yellow);
        }
      `}</style>
    </section>
  );
}
