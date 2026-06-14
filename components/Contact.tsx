"use client";

import { useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/919921297518?text=Hello%20CrabVeda!%20I%20have%20a%20question.";

const contacts = [
  {
    icon: "📞",
    label: "Phone Support",
    value: "+91 99212 97518",
    href: "tel:+919921297518",
  },
  {
    icon: "📧",
    label: "Email Desk",
    value: "crabveda@gmail.com",
    href: "mailto:crabveda@gmail.com",
  },
  {
    icon: "📍",
    label: "Marketed By",
    value: "CrabVeda Ayurvedic, India",
    href: null,
  },
];

const socials = [
  {
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
    label: "Instagram",
    href: "https://instagram.com/crabveda_ayurvedic",
  },
  {
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    label: "Facebook",
    href: "https://facebook.com/crabveda",
  },
  {
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93$.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    label: "YouTube",
    href: "https://youtube.com/@crabveda",
  },
];

export default function Contact() {
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    const encodedText = encodeURIComponent(`Hello CrabVeda! ${message}`);
    window.open(`https://wa.me/919921297518?text=${encodedText}`, "_blank");
  };

  return (
    <section id="contact" className="modern-contact-section">
      <div className="editorial-grid-container">
        
        {/* Left Column: Asymmetric Header & Core Details */}
        <div className="editorial-info-pane">
          <span className="editorial-eyebrow">Assistance Desk</span>
          <h2 className="editorial-heading">
            Connect with <br />
            <span className="serif-italic">CrabVeda.</span>
          </h2>
          <p className="editorial-description">
            Have questions regarding application methods, ongoing shipments, or batch origins? Our team is available for direct inquiries.
          </p>

          <div className="editorial-directory-list">
            {contacts.map((c) => (
              <div key={c.label} className="directory-strip">
                <span className="strip-icon">{c.icon}</span>
                <div className="strip-content">
                  <span className="strip-label">{c.label}</span>
                  {c.href ? (
                    <a href={c.href} className="strip-interactive-value">
                      {c.value}
                    </a>
                  ) : (
                    <span className="strip-static-value">{c.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="editorial-social-footer">
            <span className="social-meta-title">Channels</span>
            <div className="social-icon-row">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="minimalist-icon-link" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Border-Framed Input Layout */}
        <div className="editorial-form-pane">
          <form onSubmit={handleFormSubmit} className="minimalist-message-form">
            <div className="form-header-block">
              <h3 className="form-heading-text">Direct Inquiry</h3>
              <p className="form-caption-text">Your text will open our active chat line instantly.</p>
            </div>

            <div className="interactive-input-group">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your question here..."
                className="minimalist-textarea"
                maxLength={500}
                required
              />
              <span className="input-focus-line" />
            </div>

            <button type="submit" className="minimalist-submit-btn">
              <span>Initiate Chat Thread</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="btn-arrow">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>

            <div className="form-bypass-footer">
              Prefer a blank slate? <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Launch default app instance →</a>
            </div>
          </form>
        </div>

      </div>

      <style>{`
        .modern-contact-section {
          --c-forest: #1E3A2F;
          --c-gold: #C9901A;
          --c-cream-bg: #F4ECE1;
          --c-text-main: #2D3A34;
          --c-text-muted: #6E7C75;
          --border-fine: rgba(30, 58, 47, 0.08);

          background-color: var(--c-cream-bg);
          padding: 140px 40px;
          position: relative;
          box-sizing: border-box;
        }

        .editorial-grid-container {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 100px;
          align-items: center;
        }

        /* --- Left Column: Info Layout --- */
        .editorial-info-pane {
          display: flex;
          flex-direction: column;
        }

        .editorial-eyebrow {
          font-family: var(--font-body), sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--c-gold);
          margin-bottom: 16px;
        }

        .editorial-heading {
          font-family: var(--font-display), serif;
          font-size: clamp(2.4rem, 4.5vw, 3.4rem);
          color: var(--c-forest);
          line-height: 1.1;
          margin: 0 0 24px 0;
          font-weight: 400;
          letter-spacing: -0.02em;
        }

        .serif-italic {
          font-style: italic;
          font-weight: 600;
        }

        .editorial-description {
          font-family: var(--font-body), sans-serif;
          font-size: 1.05rem;
          line-height: 1.65;
          color: var(--c-text-muted);
          margin: 0 0 48px 0;
        }

        .editorial-directory-list {
          display: flex;
          flex-direction: column;
          gap: 28px;
          border-left: 2px solid rgba(30, 58, 47, 0.05);
          padding-left: 24px;
          margin-bottom: 48px;
        }

        .directory-strip {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .strip-icon {
          font-size: 1.1rem;
          line-height: 1;
          margin-top: 2px;
          opacity: 0.8;
        }

        .strip-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .strip-label {
          font-family: var(--font-body), sans-serif;
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--c-text-muted);
          font-weight: 500;
        }

        .strip-interactive-value {
          font-family: var(--font-heading), sans-serif;
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--c-forest);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .strip-interactive-value:hover {
          color: var(--c-gold);
        }

        .strip-static-value {
          font-family: var(--font-heading), sans-serif;
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--c-forest);
        }

        .editorial-social-footer {
          display: flex;
          align-items: center;
          gap: 20px;
          padding-top: 12px;
        }

        .social-meta-title {
          font-family: var(--font-body), sans-serif;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--c-text-muted);
          font-weight: 600;
        }

        .social-icon-row {
          display: flex;
          gap: 14px;
        }

        .minimalist-icon-link {
          color: var(--c-text-muted);
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-flex;
          align-items: center;
        }

        .minimalist-icon-link:hover {
          color: var(--c-forest);
          transform: translateY(-1px);
        }

        /* --- Right Column: Modern Form Box --- */
        .editorial-form-pane {
          background: #FFFFFF;
          border-radius: 32px;
          padding: 56px 48px;
          box-shadow: 0 40px 90px rgba(30, 58, 47, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .form-header-block {
          margin-bottom: 36px;
        }

        .form-heading-text {
          font-family: var(--font-heading), serif;
          font-size: 1.4rem;
          color: var(--c-forest);
          margin: 0 0 6px 0;
          font-weight: 600;
        }

        .form-caption-text {
          font-family: var(--font-body), sans-serif;
          font-size: 0.88rem;
          color: var(--c-text-muted);
          margin: 0;
        }

        .interactive-input-group {
          position: relative;
          margin-bottom: 32px;
        }

        .minimalist-textarea {
          width: 100%;
          min-height: 140px;
          box-sizing: border-box;
          border: none;
          border-bottom: 2px solid var(--border-fine);
          background: transparent;
          padding: 12px 0;
          font-family: var(--font-body), sans-serif;
          font-size: 1rem;
          color: var(--c-text-main);
          line-height: 1.6;
          resize: none;
          transition: border-color 0.3s ease;
        }

        .minimalist-textarea:focus {
          outline: none;
          border-color: var(--c-forest);
        }

        .minimalist-submit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
          background: var(--c-forest);
          color: #FFFFFF;
          border: none;
          font-family: var(--font-heading), sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          padding: 18px 32px;
          border-radius: 14px;
          cursor: pointer;
          transition: background-color 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
          box-shadow: 0 10px 30px rgba(30, 58, 47, 0.1);
        }

        .minimalist-submit-btn:hover {
          background-color: #12251E;
          transform: translateY(-1px);
          box-shadow: 0 14px 35px rgba(30, 58, 47, 0.18);
        }

        .btn-arrow {
          transition: transform 0.2s ease;
        }

        .minimalist-submit-btn:hover .btn-arrow {
          transform: translateX(4px);
        }

        .form-bypass-footer {
          text-align: center;
          font-family: var(--font-body), sans-serif;
          font-size: 0.82rem;
          color: var(--c-text-muted);
          margin-top: 24px;
        }

        .form-bypass-footer a {
          color: var(--c-gold);
          text-decoration: none;
          font-weight: 600;
          margin-left: 4px;
        }

        .form-bypass-footer a:hover {
          text-decoration: underline;
        }

        /* ==========================================================================
           RESPONSIVE RE-FLOW CONSTRAINTS
           ========================================================================== */
        @media (max-width: 992px) {
          .modern-contact-section {
            padding: 100px 24px;
          }

          .editorial-grid-container {
            grid-template-columns: 1fr;
            gap: 64px;
          }

          .editorial-form-pane {
            padding: 40px 32px;
          }
        }

        @media (max-width: 500px) {
          .modern-contact-section {
            padding: 80px 16px;
          }

          .editorial-heading {
            font-size: 2.2rem;
          }

          .editorial-form-pane {
            padding: 32px 20px;
            border-radius: 24px;
          }
        }
      `}</style>
    </section>
  );
}