import React from 'react';
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { ACADEMY_CONFIG } from '../config/academy';

export default function Footer({ onCourseClick }) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Courses', href: '#courses' },
    { label: 'Results', href: '#results' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const courseLinks = [
    { label: 'Class 6–8', id: 'class-6-8' },
    { label: 'Class 9–10', id: 'class-9-10' },
    { label: 'Class 11–12', id: 'class-11-12' },
    { label: 'Competitive Exam Preparation', id: 'competitive-prep' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer-root" role="contentinfo">
      <div className="container">
        {/* Main Footer Columns */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand-header">
              <img
                src="/images/logo.svg"
                alt="Aaroh Academy Crest"
                className="footer-logo"
                width="48"
                height="48"
              />
              <div>
                <h3 className="footer-brand-name">{ACADEMY_CONFIG.name}</h3>
                <p className="footer-brand-tagline">“{ACADEMY_CONFIG.tagline}”</p>
              </div>
            </div>
            <p className="footer-brand-desc">{ACADEMY_CONFIG.shortBio}</p>

            {/* Social Media Links */}
            <div className="footer-social-section">
              <span className="social-heading">Follow Our Academic Updates:</span>
              <div className="footer-socials" aria-label="Social media channels">
                <a
                  href={ACADEMY_CONFIG.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label="Aaroh Academy on Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={ACADEMY_CONFIG.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label="Aaroh Academy on Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href={ACADEMY_CONFIG.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label="Aaroh Academy on YouTube"
                >
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-link-list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="footer-link"
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Courses Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Courses</h4>
            <ul className="footer-link-list">
              {courseLinks.map((course) => (
                <li key={course.id}>
                  <a
                    href="#courses"
                    className="footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#courses')?.scrollIntoView({ behavior: 'smooth' });
                      if (onCourseClick) onCourseClick(course.label);
                    }}
                  >
                    {course.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Campus Contact</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MapPin size={17} className="f-icon" />
                <span>{ACADEMY_CONFIG.location.formattedAddress}</span>
              </li>
              <li className="footer-contact-item">
                <Phone size={17} className="f-icon" />
                <a href={`tel:${ACADEMY_CONFIG.contact.phoneTel}`} className="footer-link">
                  {ACADEMY_CONFIG.contact.phone}
                </a>
              </li>
              <li className="footer-contact-item">
                <Mail size={17} className="f-icon" />
                <a href={`mailto:${ACADEMY_CONFIG.contact.email}`} className="footer-link">
                  {ACADEMY_CONFIG.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {currentYear} {ACADEMY_CONFIG.name}. All Rights Reserved. “{ACADEMY_CONFIG.tagline}”.
          </p>

          <button
            type="button"
            className="btn-scroll-top"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-root {
          background-color: var(--color-navy-950);
          color: #94a3b8;
          padding-top: 72px;
          padding-bottom: 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          margin-top: auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 0.8fr 1fr 1.2fr;
          gap: 48px;
          margin-bottom: 56px;
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 36px;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        .footer-brand-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
        }

        .footer-logo {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
        }

        .footer-brand-name {
          font-size: 1.35rem;
          color: #ffffff;
          line-height: 1.2;
        }

        .footer-brand-tagline {
          font-size: 0.8rem;
          color: var(--color-yellow);
          font-weight: 500;
        }

        .footer-brand-desc {
          font-size: 0.88rem;
          line-height: 1.6;
          color: #94a3b8;
          margin-bottom: 20px;
          max-width: 340px;
        }

        .social-heading {
          display: block;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #cbd5e1;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .footer-socials {
          display: flex;
          gap: 12px;
        }

        .social-icon-link {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s, color 0.2s, transform 0.2s;
        }

        .social-icon-link:hover {
          background-color: var(--color-yellow);
          color: var(--color-navy);
          transform: translateY(-2px);
        }

        .footer-col-title {
          font-size: 1.05rem;
          color: #ffffff;
          margin-bottom: 20px;
          position: relative;
          padding-bottom: 10px;
        }

        .footer-col-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 28px;
          height: 2px;
          background-color: var(--color-yellow);
        }

        .footer-link-list,
        .footer-contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-link {
          font-size: 0.9rem;
          color: #cbd5e1;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }

        .footer-link:hover {
          color: var(--color-yellow);
          transform: translateX(3px);
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.88rem;
          color: #cbd5e1;
          line-height: 1.5;
        }

        .f-icon {
          color: var(--color-yellow);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          gap: 16px;
          flex-wrap: wrap;
        }

        .copyright-text {
          font-size: 0.84rem;
          color: #64748b;
        }

        .btn-scroll-top {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #cbd5e1;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-scroll-top:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: var(--color-yellow);
          border-color: var(--color-yellow);
        }
      `}</style>
    </footer>
  );
}
