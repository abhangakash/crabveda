"use client";

import Image from "next/image";

const WHATSAPP_URL =
  "https://wa.me/919921297518?text=Hello%20CrabVeda!%20I%20want%20to%20order%201%20bottle%20of%20CrabVeda%20Ayurvedic%20Crab%20Oil%20(200ml%20%E2%82%B9360).%20Please%20confirm%20my%20order.";
const INSTAGRAM_URL = "https://www.instagram.com/crabveda?igsh=M2VoNzRoOGhvMzFu";
const FACEBOOK_URL = "https://www.facebook.com/share/1BE5Lhjuqk/";
const YOUTUBE_URL = "https://www.youtube.com/@crabveda";

export default function Footer() {
  return (
    <footer className="minimal-footer">
      <div className="footer-wrapper">
        
        {/* Top Section: Clean Center Brand Lockup */}
        <div className="footer-brand-section">
          <div className="footer-logo">
            <div className="footer-logo-wrapper">
              <Image
                src="/logo.jpeg"
                alt="CrabVeda Logo"
                width={42}
                height={42}
                className="footer-brand-img"
              />
            </div>
            <div className="logo-text-group">
              <span className="logo-main">CrabVeda</span>
              <span className="logo-sub">Ayurvedic Co.</span>
            </div>
          </div>
          <p className="footer-tagline">
            Traditional wisdom. Natural relief. Formulated for joint mobility and deep inflammation recovery.
          </p>
        </div>

        {/* Middle Section: Clean Row of Quick Links */}
        <nav className="footer-nav">
          {["#home", "#benefits", "#ingredients", "#how-to-use", "#testimonials", "#contact"].map((href) => (
            <a key={href} href={href} className="footer-nav-link">
              {href.replace("#", "").replace(/-/g, " ")}
            </a>
          ))}
        </nav>

        {/* Action Section: Premium Full-Width Touch Buttons for Mobile */}
        <div className="footer-actions">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="action-pill whatsapp-pill">
            <span className="pill-icon">💬</span>
            <span className="pill-text">Order via WhatsApp</span>
          </a>
          
          <div className="action-group-secondary">
            <a href="tel:+919921297518" className="action-pill secondary-pill">
              <span>📞 Call Support</span>
            </a>
            <a href="mailto:crabveda@gmail.com" className="action-pill secondary-pill">
              <span>📧 Email Us</span>
            </a>
          </div>
        </div>

        {/* Social Media Link Hub with Colored Brand Icons */}
        <div className="footer-social-row">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="social-icon-link link-instagram" aria-label="Instagram">
            <svg className="colored-social-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="instagram-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f09433" />
                  <stop offset="25%" stopColor="#e6683c" />
                  <stop offset="50%" stopColor="#dc2743" />
                  <stop offset="75%" stopColor="#cc2366" />
                  <stop offset="100%" stopColor="#bc1888" />
                </linearGradient>
              </defs>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#instagram-grad)"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="url(#instagram-grad)"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="url(#instagram-grad)"></line>
            </svg>
            <span className="social-text">Instagram</span>
          </a>
          
          <span className="social-divider">|</span>
          
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="social-icon-link link-facebook" aria-label="Facebook">
            <svg className="colored-social-icon" width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"></path>
            </svg>
            <span className="social-text">Facebook</span>
          </a>

          <span className="social-divider">|</span>

          <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="social-icon-link link-youtube" aria-label="YouTube">
            <svg className="colored-social-icon" width="20" height="20" viewBox="0 0 24 24" fill="#FF0000">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span className="social-text">YouTube</span>
          </a>
        </div>

        {/* Bottom Section: Minimalist Compliance Line */}
        <div className="footer-bottom">
          <div className="compliance-row">
            <span>© {new Date().getFullYear()} CrabVeda Ayurvedic</span>
            <span className="divider-dot">•</span>
            <span>Batch: CV0001</span>
            <span className="divider-dot">•</span>
            <span>India</span>
          </div>
          <p className="legal-disclaimer">
            Marketed by CrabVeda Ayurvedic. Made with traditional natural extracts.
          </p>
        </div>

      </div>

      <style jsx global>{`
        .minimal-footer {
          --f-bg: #0A140E;
          --f-gold: #C9901A;
          --f-text: #A1AFA7;
          --f-text-light: #FFFFFF;
          --f-border: rgba(255, 255, 255, 0.08);

          background-color: var(--f-bg);
          color: var(--f-text);
          padding: 60px 20px 40px;
          border-top: 1px solid rgba(201, 144, 26, 0.15);
          font-family: var(--font-body), -apple-system, BlinkMacSystemFont, sans-serif;
          box-sizing: border-box;
          width: 100%;
        }

        .footer-wrapper {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        /* --- Brand Stack --- */
        .footer-brand-section {
          margin-bottom: 40px;
        }

        .footer-logo {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 18px;
          text-align: left;
        }

        .footer-logo-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-brand-img {
          object-fit: contain;
          border-radius: 8px;
          filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2));
        }

        .logo-text-group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }

        .logo-main {
          font-family: var(--font-display), 'Cinzel', serif;
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--f-text-light);
          letter-spacing: 0.02em;
          line-height: 1.1;
        }

        .logo-sub {
          font-family: var(--font-body), 'Lora', serif;
          font-size: 0.65rem;
          color: var(--f-gold);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-top: 2px;
          font-weight: 600;
        }

        .footer-tagline {
          font-size: 0.9rem;
          line-height: 1.6;
          max-width: 460px;
          margin: 0 auto;
          opacity: 0.85;
        }

        /* --- Horizontal Navigation Links --- */
        .footer-nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px 24px;
          padding: 24px 0;
          width: 100%;
          border-top: 1px solid var(--f-border);
          border-bottom: 1px solid var(--f-border);
          margin-bottom: 40px;
        }

        .footer-nav-link {
          color: var(--f-text);
          text-decoration: none;
          font-size: 0.88rem;
          text-transform: capitalize;
          transition: color 0.2s ease;
        }

        .footer-nav-link:hover {
          color: var(--f-gold);
        }

        /* --- Touch Action Interactive Buttons --- */
        .footer-actions {
          width: 100%;
          max-width: 480px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 32px;
        }

        .action-pill {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 16px;
          border-radius: 100px;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 600;
          transition: all 0.2s ease;
          box-sizing: border-box;
        }

        .whatsapp-pill {
          background-color: #128C7E;
          color: white;
        }

        .whatsapp-pill:hover {
          background-color: #0f7569;
        }

        .action-group-secondary {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .secondary-pill {
          background-color: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--f-border);
          color: var(--f-text-light);
          font-size: 0.85rem;
        }

        .secondary-pill:hover {
          background-color: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.15);
        }

        /* --- Social Media Colored Hub Line --- */
        .footer-social-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .social-icon-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--f-text);
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 500;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .social-text {
          transition: color 0.2s ease;
        }

        /* Hover Interactions */
        .social-icon-link:hover {
          transform: translateY(-1px);
        }

        .link-instagram:hover .social-text {
          color: #e6683c;
        }

        .link-facebook:hover .social-text {
          color: #1877F2;
        }

        .link-youtube:hover .social-text {
          color: #FF0000;
        }

        .colored-social-icon {
          transition: transform 0.2s ease, filter 0.2s ease;
        }

        .social-icon-link:hover .colored-social-icon {
          transform: scale(1.08);
          filter: drop-shadow(0 2px 6px rgba(255, 255, 255, 0.1));
        }

        .social-divider {
          color: var(--f-border);
          font-size: 0.85rem;
          user-select: none;
        }

        /* --- Bottom Compliance Frame --- */
        .footer-bottom {
          width: 100%;
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.4);
        }

        .compliance-row {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 8px;
        }

        .divider-dot {
          color: var(--f-gold);
          opacity: 0.5;
        }

        .legal-disclaimer {
          margin: 0;
          opacity: 0.7;
        }

        /* ==========================================================================
           RESPONSIVE VIEWPORT STYLING HANDLERS
           ========================================================================== */
        @media (min-width: 768px) {
          .minimal-footer {
            padding: 80px 40px 50px;
          }

          .footer-actions {
            max-width: 600px;
            flex-direction: row;
            align-items: center;
          }

          .whatsapp-pill {
            flex: 1.2;
          }

          .action-group-secondary {
            flex: 2;
            width: 100%;
          }
        }
      `}</style>
    </footer>
  );
}