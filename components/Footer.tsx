"use client";

const WHATSAPP_URL =
  "https://wa.me/919921297518?text=Hello%20CrabVeda!%20I%20want%20to%20order%201%20bottle%20of%20CrabVeda%20Ayurvedic%20Crab%20Oil%20(200ml%20%E2%82%B9360).%20Please%20confirm%20my%20order.";

export default function Footer() {
  return (
    <footer className="minimal-footer">
      <div className="footer-wrapper">
        
        {/* Top Section: Clean Center Brand Lockup */}
        <div className="footer-brand-section">
          <div className="footer-logo">
            <span className="logo-icon">🦀</span>
            <div className="logo-text-group">
              <span className="logo-main">CrabVeda</span>
              <span className="logo-sub">Ayurvedic</span>
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

      <style>{`
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
          gap: 12px;
          margin-bottom: 16px;
        }

        .logo-icon {
          font-size: 1.5rem;
        }

        .logo-text-group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .logo-main {
          font-family: var(--font-display), serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--f-text-light);
          letter-spacing: 0.02em;
          line-height: 1;
        }

        .logo-sub {
          font-family: var(--font-display), serif;
          font-size: 0.65rem;
          color: var(--f-gold);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-top: 2px;
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

        /* --- Mobile First Premium Buttons --- */
        .footer-actions {
          width: 100%;
          max-width: 480px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 48px;
        }

        .action-pill {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 16px;
          border-radius: 12px;
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
          background-color: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--f-border);
          color: var(--f-text-light);
          font-size: 0.85rem;
        }

        .secondary-pill:hover {
          background-color: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
        }

        /* --- Bottom Meta / Compliance --- */
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
           DESKTOP ENHANCEMENTS (Keeps it clean on wider screens)
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