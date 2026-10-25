import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { ACADEMY_CONFIG } from '../config/academy';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Become visible after scrolling 200px
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${ACADEMY_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    ACADEMY_CONFIG.contact.whatsappDefaultMessage
  )}`;

  return (
    <aside
      className={`whatsapp-floating-wrapper ${isVisible ? 'visible' : ''}`}
      aria-label="Direct WhatsApp Enquiry"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="Chat with Aaroh Academy on WhatsApp (opens in a new tab)"
      >
        <MessageCircle size={28} className="whatsapp-icon" aria-hidden="true" />
        <span className="whatsapp-tooltip">Chat on WhatsApp</span>
      </a>

      <style>{`
        .whatsapp-floating-wrapper {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 990;
          opacity: 0;
          visibility: hidden;
          transform: translateY(20px) scale(0.85);
          transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), visibility 0.3s;
          /* Respect mobile safe-area insets */
          padding-bottom: env(safe-area-inset-bottom, 0);
          padding-right: env(safe-area-inset-right, 0);
        }

        .whatsapp-floating-wrapper.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
        }

        .whatsapp-btn {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background-color: #25d366;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
          position: relative;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
        }

        .whatsapp-btn:hover {
          background-color: #1eb954;
          transform: scale(1.08);
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.55);
        }

        .whatsapp-icon {
          flex-shrink: 0;
        }

        .whatsapp-tooltip {
          position: absolute;
          right: 70px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(10, 25, 47, 0.95);
          color: #ffffff;
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.78rem;
          font-weight: 600;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.2s ease, transform 0.2s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .whatsapp-tooltip::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 100%;
          transform: translateY(-50%);
          border-width: 5px;
          border-style: solid;
          border-color: transparent transparent transparent rgba(10, 25, 47, 0.95);
        }

        .whatsapp-btn:hover .whatsapp-tooltip,
        .whatsapp-btn:focus-visible .whatsapp-tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateY(-50%) translateX(-4px);
        }

        @media (max-width: 576px) {
          .whatsapp-floating-wrapper {
            bottom: 18px;
            right: 18px;
          }

          .whatsapp-btn {
            width: 52px;
            height: 52px;
          }

          .whatsapp-tooltip {
            display: none;
          }
        }
      `}</style>
    </aside>
  );
}
