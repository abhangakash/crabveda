"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919921297518?text=Hello%20CrabVeda!%20I%20want%20to%20order%201%20bottle%20of%20CrabVeda%20Ayurvedic%20Crab%20Oil%20(200ml%20%E2%82%B9360).%20Please%20confirm%20my%20order.";
const INSTAGRAM_URL = "https://www.instagram.com/crabveda?igsh=M2VoNzRoOGhvMzFu";
const FACEBOOK_URL = "https://www.facebook.com/share/1BE5Lhjuqk/";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Benefits", href: "#benefits" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "How to Use", href: "#how-to-use" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`modern-dock-container ${scrolled ? "is-scrolled" : ""} ${open ? "menu-is-open" : ""}`}>
      <header className="modern-dock-header">
        
        {/* Left: Premium Minimalist Branding */}
        <Link href="#home" className="dock-logo-link">
          <div className="dock-logo-wrapper">
            <Image
              src="/logo.jpeg"
              alt="CrabVeda Logo"
              width={42}
              height={42}
              className="dock-brand-img"
              priority
            />
          </div>         
          <div className="dock-logo-meta">
            <span className="dock-logo-title">CrabVeda</span>
            <span className="dock-logo-subtitle">Ayurvedic Co.</span>
          </div>
        </Link>

        {/* Center: Monospace Inline Track Deck (Desktop) */}
        <nav className="dock-desktop-links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="dock-nav-item">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: High-End Interactive CTA (Desktop) */}
        <div className="dock-desktop-action">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="dock-cta">
            Order Now
          </a>
        </div>

        {/* Mobile Minimal Menu Controller */}
        <button 
          onClick={() => setOpen(!open)} 
          className="dock-mobile-trigger"
          aria-label="Toggle Menu"
        >
          {open ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
        </button>

        {/* Fluid Micro-Expansion Mobile Tray */}
        <div className="dock-mobile-overlay">
          <div className="dock-mobile-inner-grid">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={() => setOpen(false)}
                className="dock-mobile-nav-link"
              >
                {link.label}
              </a>
            ))}
            
            {/* Call to Actions Stack */}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="dock-mobile-whatsapp-btn">
              Checkout via WhatsApp
            </a>

            {/* Premium Colored Social Connections Row */}
            <div className="dock-mobile-socials">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="nav-social-pill nav-instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                <span>Instagram</span>
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="nav-social-pill nav-facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"></path></svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

      </header>

      <style jsx global>{`
        .modern-dock-container {
          --dock-bg: rgba(253, 246, 232, 0.8);
          --dock-border: rgba(26, 16, 8, 0.06);
          --dock-text: var(--text-dark, #1A1008);
          --dock-gold: var(--gold, #C9901A);
          --dock-gold-hover: var(--gold-light, #E8B84B);
          --dock-white: var(--white, #FFFFFF);
          
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 999999;
          padding: 24px 32px;
          transition: padding 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-sizing: border-box;
          width: 100%;
        }

        .modern-dock-container.is-scrolled {
          padding: 14px 32px;
        }

        .modern-dock-header {
          max-width: 1140px;
          margin: 0 auto;
          background: var(--dock-bg);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          border: 1px solid var(--dock-border);
          border-radius: 100px;
          padding: 10px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 4px 30px rgba(26, 16, 8, 0.03);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .modern-dock-container.is-scrolled .modern-dock-header {
          box-shadow: 0 10px 40px rgba(26, 16, 8, 0.06);
          background: rgba(253, 246, 232, 0.92);
          border-color: rgba(26, 16, 8, 0.1);
        }

        .dock-logo-link {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
        }

        .dock-logo-wrapper {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 50%;
        }

        .dock-brand-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .dock-logo-link:hover .dock-brand-img {
          transform: scale(1.04);
        }

        .dock-logo-meta {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .dock-logo-title {
          font-family: var(--font-display), 'Cinzel', serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--dock-text) !important;
          letter-spacing: 0.03em;
          line-height: 1.1;
        }

        .dock-logo-subtitle {
          font-family: var(--font-body), 'Lora', serif;
          font-size: 0.6rem;
          color: var(--dock-gold) !important;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 600;
          margin-top: 1px;
        }

        .dock-desktop-links {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .dock-nav-item {
          text-decoration: none;
          color: var(--dock-text) !important;
          font-family: var(--font-body), 'Lora', serif;
          font-size: 0.88rem;
          font-weight: 500;
          padding: 8px 16px;
          border-radius: 100px;
          opacity: 0.75;
          transition: all 0.25s ease;
        }

        .dock-nav-item:hover {
          opacity: 1;
          background-color: rgba(26, 16, 8, 0.04);
          color: var(--dock-gold) !important;
        }

        .dock-cta {
          text-decoration: none;
          background-color: var(--dock-text);
          color: var(--dock-white) !important;
          font-family: var(--font-body), 'Lora', serif;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 10px 22px;
          border-radius: 100px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid transparent;
        }

        .dock-cta:hover {
          background-color: var(--dock-gold);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(201, 144, 26, 0.15);
        }

        .dock-mobile-trigger {
          display: none;
          background: none;
          border: none;
          color: var(--dock-text);
          cursor: pointer;
          padding: 8px;
          transition: all 0.2s ease;
        }

        .dock-mobile-overlay {
          display: none;
        }

        /* ==========================================================================
           RESPONSIVE REFINEMENTS & MOBILE HUB STYLING
           ========================================================================== */
        @media (max-width: 992px) {
          .modern-dock-container {
            padding: 16px 20px;
          }
          .modern-dock-container.is-scrolled {
            padding: 12px 20px;
          }

          .dock-desktop-links, .dock-desktop-action {
            display: none !important;
          }

          .dock-mobile-trigger {
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(26, 16, 8, 0.03);
            border-radius: 50%;
          }

          .menu-is-open .dock-mobile-overlay {
            display: block;
            width: 100%;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(253, 246, 232, 0.98);
            border: 1px solid var(--dock-border);
            margin-top: 10px;
            border-radius: 24px;
            box-shadow: 0 16px 40px rgba(26, 16, 8, 0.08);
            padding: 24px;
            box-sizing: border-box;
            animation: dock-panel-drop 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          .dock-mobile-inner-grid {
            display: flex;
            flex-direction: column;
            gap: 14px;
          }

          .dock-mobile-nav-link {
            text-decoration: none;
            color: var(--dock-text) !important;
            font-family: var(--font-body), 'Lora', serif;
            font-size: 1rem;
            font-weight: 500;
            padding: 8px 0;
            border-bottom: 1px solid rgba(26, 16, 8, 0.03);
            transition: color 0.2s ease;
          }

          .dock-mobile-nav-link:hover {
            color: var(--dock-gold) !important;
          }

          .dock-mobile-whatsapp-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #128C7E;
            color: var(--dock-white) !important;
            text-decoration: none;
            font-family: var(--font-body), 'Lora', serif;
            font-size: 0.9rem;
            font-weight: 600;
            padding: 14px;
            border-radius: 100px;
            margin-top: 6px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            text-align: center;
            box-shadow: 0 4px 12px rgba(18, 140, 126, 0.2);
            transition: background 0.2s ease;
          }

          .dock-mobile-whatsapp-btn:hover {
            background: #0f7569;
          }

          /* Colored Social Hub Interface Engine */
          .dock-mobile-socials {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin-top: 4px;
          }

          .nav-social-pill {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 12px;
            border-radius: 100px;
            text-decoration: none;
            font-size: 0.85rem;
            font-weight: 600;
            box-sizing: border-box;
            transition: transform 0.2s ease, opacity 0.2s ease;
          }

          .nav-social-pill:active {
            transform: scale(0.98);
          }

          /* Authentic Instagram Gradient Style */
          .nav-instagram {
            background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
            color: #FFFFFF !important;
            box-shadow: 0 4px 12px rgba(220, 39, 67, 0.15);
          }

          /* Authentic Facebook Flat Brand Style */
          .nav-facebook {
            background-color: #1877F2;
            color: #FFFFFF !important;
            box-shadow: 0 4px 12px rgba(24, 119, 242, 0.15);
          }
        }

        @keyframes dock-panel-drop {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}