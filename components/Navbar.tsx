"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919921297518?text=Hello%20CrabVeda!%20I%20want%20to%20order%201%20bottle%20of%20CrabVeda%20Ayurvedic%20Crab%20Oil%20(200ml%20%E2%82%B9360).%20Please%20confirm%20my%20order.";

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
          <div className="dock-logo-badge">🦀</div>
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
          {open ? <X size={18} strokeWidth={2.5} /> : <Menu size={18} strokeWidth={2.5} />}
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
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="dock-mobile-whatsapp-btn">
              Secure Checkout via WhatsApp
            </a>
          </div>
        </div>

      </header>

      <style>{`
        .modern-dock-container {
          --dock-bg: rgba(255, 255, 255, 0.65);
          --dock-border: rgba(0, 0, 0, 0.06);
          --dock-text: #0f172a;
          --dock-gold: #b45309;
          
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 999999;
          padding: 32px 40px;
          transition: padding 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-sizing: border-box;
        }

        /* Shrinks container into a tighter floating island panel on scroll */
        .modern-dock-container.is-scrolled {
          padding: 16px 40px;
        }

        .modern-dock-header {
          max-width: 1100px;
          margin: 0 auto;
          background: var(--dock-bg);
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          border: 1px solid var(--dock-border);
          border-radius: 24px;
          padding: 10px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 1px 2px rgba(0,0,0,0.01), 0 4px 24px rgba(0,0,0,0.02);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .modern-dock-container.is-scrolled .modern-dock-header {
          box-shadow: 0 1px 3px rgba(0,0,0,0.02), 0 12px 36px rgba(15, 23, 42, 0.05);
          background: rgba(255, 255, 255, 0.85);
          border-color: rgba(0, 0, 0, 0.08);
        }

        /* --- Brand Identity --- */
        .dock-logo-link {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .dock-logo-badge {
          font-size: 1.25rem;
          background: #f8fafc;
          border: 1px solid rgba(0,0,0,0.05);
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
        }

        .dock-logo-meta {
          display: flex;
          flex-direction: column;
        }

        .dock-logo-title {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--dock-text);
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .dock-logo-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 0.6rem;
          color: var(--dock-gold);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
        }

        /* --- Minimalist Desktop Nav Deck --- */
        .dock-desktop-links {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .dock-nav-item {
          text-decoration: none;
          color: var(--dock-text);
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          padding: 8px 14px;
          border-radius: 100px;
          opacity: 0.7;
          transition: all 0.2s ease;
        }

        .dock-nav-item:hover {
          opacity: 1;
          background-color: rgba(0, 0, 0, 0.04);
        }

        /* --- Premium CTA Button --- */
        .dock-cta {
          text-decoration: none;
          background-color: var(--dock-text);
          color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 10px 18px;
          border-radius: 14px;
          transition: all 0.2s ease;
        }

        .dock-cta:hover {
          background-color: #1e293b;
          transform: translateY(-0.5px);
        }

        /* --- Mobile Core Functionalities --- */
        .dock-mobile-trigger {
          display: none;
          background: none;
          border: none;
          color: var(--dock-text);
          cursor: pointer;
          padding: 10px;
        }

        .dock-mobile-overlay {
          display: none;
        }

        /* ==========================================================================
           MOBILE MODE: Pure Floating Pill Geometry
           ========================================================================== */
        @media (max-width: 900px) {
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
            background: rgba(0,0,0,0.03);
            border-radius: 50%;
          }

          /* Completely fluid slide-down system built right into the floating nav widget */
          .menu-is-open .dock-mobile-overlay {
            display: block;
            width: 100%;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.98);
            border: 1px solid var(--dock-border);
            margin-top: 8px;
            border-radius: 20px;
            box-shadow: 0 16px 36px rgba(0,0,0,0.06);
            padding: 24px;
            box-sizing: border-box;
            animation: dock-fade-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          .dock-mobile-inner-grid {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .dock-mobile-nav-link {
            text-decoration: none;
            color: var(--dock-text);
            font-family: -apple-system, BlinkMacSystemFont, sans-serif;
            font-size: 0.95rem;
            font-weight: 500;
            padding: 4px 0;
            border-bottom: 1px solid rgba(0,0,0,0.03);
          }

          .dock-mobile-whatsapp-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #0f172a;
            color: #ffffff;
            text-decoration: none;
            font-family: -apple-system, BlinkMacSystemFont, sans-serif;
            font-size: 0.9rem;
            font-weight: 600;
            padding: 14px;
            border-radius: 12px;
            margin-top: 8px;
            text-align: center;
          }
        }

        @keyframes dock-fade-in {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}