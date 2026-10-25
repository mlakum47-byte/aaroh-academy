import React, { useState, useEffect, useRef } from 'react';
import { Phone, Menu, X, MessageCircle, ArrowRight } from 'lucide-react';
import { ACADEMY_CONFIG } from '../config/academy';

export default function Navbar({ onEnquireClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Monitor scroll for sticky navbar height reduction & shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trap focus & handle Escape key in mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeMobileMenu();
        return;
      }

      if (e.key === 'Tab' && mobileMenuRef.current) {
        const focusableElements = mobileMenuRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    // Auto-focus first focusable element inside the menu
    const timeout = setTimeout(() => {
      const firstFocusable = mobileMenuRef.current?.querySelector('a, button');
      firstFocusable?.focus();
    }, 50);

    // Prevent body scroll when menu is open
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timeout);
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    // Restore focus to hamburger button
    setTimeout(() => {
      hamburgerRef.current?.focus();
    }, 50);
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Courses', href: '#courses' },
    { label: 'Results', href: '#results' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    closeMobileMenu();

    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnquireAction = () => {
    closeMobileMenu();
    if (onEnquireClick) {
      onEnquireClick();
    } else {
      const target = document.querySelector('#demo-form') || document.querySelector('#home');
      target?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}
        role="banner"
      >
        <div className="container navbar-container">
          {/* Logo & Brand Identity */}
          <a
            href="#home"
            className="navbar-brand"
            onClick={(e) => handleNavClick(e, '#home')}
            aria-label={`${ACADEMY_CONFIG.name} Homepage`}
          >
            <img
              src="/images/logo.svg"
              alt="Aaroh Academy Emblem"
              className="navbar-logo"
              width="44"
              height="44"
            />
            <div className="brand-text">
              <span className="brand-name">{ACADEMY_CONFIG.name}</span>
              <span className="brand-tagline">{ACADEMY_CONFIG.tagline}</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="nav-link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Actions */}
          <div className="navbar-actions">
            <a
              href={`tel:${ACADEMY_CONFIG.contact.phoneTel}`}
              className="nav-phone-link"
              aria-label={`Call us at ${ACADEMY_CONFIG.contact.phone}`}
            >
              <Phone className="phone-icon" size={17} aria-hidden="true" />
              <span className="phone-number">{ACADEMY_CONFIG.contact.phone}</span>
            </a>

            <button
              type="button"
              className="btn btn-primary btn-sm btn-enquire"
              onClick={handleEnquireAction}
            >
              Enquire Now
            </button>

            {/* Mobile Hamburger Button */}
            <button
              ref={hamburgerRef}
              type="button"
              className="mobile-menu-toggle"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Width Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="mobile-menu-backdrop" onClick={closeMobileMenu} />
          <div
            id="mobile-navigation"
            ref={mobileMenuRef}
            className="mobile-menu-drawer"
          >
            <div className="mobile-menu-header">
              <div className="brand-text">
                <span className="brand-name">{ACADEMY_CONFIG.name}</span>
                <span className="brand-tagline">{ACADEMY_CONFIG.tagline}</span>
              </div>
              <button
                type="button"
                className="mobile-close-btn"
                aria-label="Close navigation menu"
                onClick={closeMobileMenu}
              >
                <X size={26} />
              </button>
            </div>

            <nav className="mobile-nav-links">
              <ul>
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="mobile-nav-link"
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mobile-menu-footer">
              <button
                type="button"
                className="btn btn-primary btn-full-width"
                onClick={handleEnquireAction}
              >
                Enquire Now <ArrowRight size={16} />
              </button>

              <div className="mobile-contact-buttons">
                <a
                  href={`tel:${ACADEMY_CONFIG.contact.phoneTel}`}
                  className="btn btn-secondary mobile-contact-btn"
                >
                  <Phone size={18} />
                  <span>Call {ACADEMY_CONFIG.contact.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${ACADEMY_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
                    ACADEMY_CONFIG.contact.whatsappDefaultMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp mobile-contact-btn"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background-color: var(--color-bg-white);
          border-bottom: 1px solid var(--color-border);
          height: var(--navbar-height);
          display: flex;
          align-items: center;
          transition: height 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
        }

        .navbar-scrolled {
          height: var(--navbar-height-scrolled);
          box-shadow: 0 4px 18px rgba(10, 25, 47, 0.08);
          background-color: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(8px);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .navbar-logo {
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }

        .navbar-brand:hover .navbar-logo {
          transform: scale(1.05);
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-navy);
          letter-spacing: -0.01em;
          line-height: 1.2;
        }

        .brand-tagline {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          font-weight: 500;
          line-height: 1.2;
        }

        .desktop-nav .nav-list {
          display: flex;
          align-items: center;
          gap: 28px;
          list-style: none;
        }

        .nav-link {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-text-secondary);
          position: relative;
          padding: 6px 0;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--color-yellow);
          transition: width 0.2s ease;
        }

        .nav-link:hover {
          color: var(--color-navy);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .nav-phone-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-navy);
          padding: 6px 10px;
          border-radius: var(--radius-sm);
          transition: background-color 0.2s ease;
        }

        .nav-phone-link:hover {
          background-color: var(--color-bg-light);
          color: var(--color-yellow-hover);
        }

        .phone-icon {
          color: var(--color-yellow);
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--color-navy);
          padding: 8px;
          border-radius: var(--radius-sm);
        }

        /* Mobile Menu Styles */
        @media (max-width: 992px) {
          .desktop-nav,
          .nav-phone-link {
            display: none;
          }

          .mobile-menu-toggle {
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
        }

        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1100;
          display: flex;
        }

        .mobile-menu-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(10, 25, 47, 0.6);
          backdrop-filter: blur(4px);
        }

        .mobile-menu-drawer {
          position: relative;
          width: 100%;
          max-width: 380px;
          height: 100%;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          box-shadow: 4px 0 24px rgba(0,0,0,0.2);
          z-index: 2;
          overflow-y: auto;
          animation: slideIn 0.25s ease-out;
        }

        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid var(--color-border);
        }

        .mobile-close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          color: var(--color-navy);
        }

        .mobile-nav-links {
          padding: 24px 0;
          flex: 1;
        }

        .mobile-nav-links ul {
          list-style: none;
        }

        .mobile-nav-link {
          display: block;
          padding: 14px 24px;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-navy);
          border-left: 4px solid transparent;
          transition: all 0.2s ease;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link:focus {
          background-color: var(--color-bg-light);
          border-left-color: var(--color-yellow);
          color: var(--color-yellow-hover);
        }

        .mobile-menu-footer {
          padding: 24px;
          border-top: 1px solid var(--color-border);
          display: flex;
          flex-direction: column;
          gap: 12px;
          background-color: var(--color-bg-light);
        }

        .btn-full-width {
          width: 100%;
        }

        .mobile-contact-buttons {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .mobile-contact-btn {
          width: 100%;
          font-size: 0.9rem;
          padding: 10px 14px;
        }

        .btn-whatsapp {
          background-color: #25d366;
          color: #ffffff;
          border: 1px solid #25d366;
        }

        .btn-whatsapp:hover {
          background-color: #1eb954;
          color: #ffffff;
        }
      `}</style>
    </>
  );
}
