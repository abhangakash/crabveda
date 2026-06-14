"use client";

import { useState } from "react";
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

  return (
    <div className={`static-nav-container ${open ? "menu-is-open" : ""}`}>
      <header className="static-nav-header">
        
        {/* Left: Premium Minimalist Branding */}
        <Link href="#home" className="nav-logo-link" onClick={() => setOpen(false)}>
          <div className="nav-logo-wrapper">
            <Image
              src="/logo.jpeg"
              alt="CrabVeda Logo"
              width={32}
              height={32}
              className="nav-brand-img"
              priority
            />
          </div>         
          <div className="nav-logo-meta">
            <span className="nav-logo-title">CrabVeda</span>
            <span className="nav-logo-subtitle">Ayurvedic Co.</span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="nav-desktop-links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-item">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Premium Desktop CTA */}
        <div className="nav-desktop-action">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="nav-cta">
            Order Now
          </a>
        </div>

        {/* Mobile Controller */}
        <button 
          onClick={() => setOpen(!open)} 
          className="nav-mobile-trigger"
          aria-label="Toggle Menu"
        >
          {open ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
        </button>

        {/* Mobile Overlay System */}
        <div className="nav-mobile-overlay">
          <div className="nav-mobile-inner-grid">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={() => setOpen(false)}
                className="nav-mobile-nav-link"
              >
                {link.label}
              </a>
            ))}
            
            {/* Call to Action Stacks */}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="nav-mobile-whatsapp-btn">
              Checkout via WhatsApp
            </a>

            {/* Social Links Row */}
            <div className="nav-mobile-socials">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="mobile-social-pill social-instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                <span>Instagram</span>
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="mobile-social-pill social-facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"></path></svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

      </header>

      <style jsx global>{`
        .static-nav-container {
          --nav-bg: rgba(253, 246, 232, 0.85);
          --nav-border: rgba(26, 16, 8, 0.08);
          --nav-text: #1A1008;
          --nav-gold: #C9901A;
          --nav-white: #FFFFFF;
          
          position: relative; 
          z-index: 99999;
          background: var(--nav-bg);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          border-bottom: 1px solid var(--nav-border);
          width: 100%;
        }

        .static-nav-header {
          max-width: 1200px;
          margin: 0 auto;
          /* REDUCED HEIGHT: Changed padding from 18px to 10px */
          padding: 10px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
          position: relative; 
        }

        /* Branding Styles */
        .nav-logo-link {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .nav-logo-wrapper {
          /* REDUCED HEIGHT: Sized wrapper container down to match 32px constraints */
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 50%;
          border: 1px solid rgba(201, 144, 26, 0.2);
        }

        .nav-brand-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .nav-logo-link:hover .nav-brand-img {
          transform: scale(1.05);
        }

        .nav-logo-meta {
          display: flex;
          flex-direction: column;
        }

        .nav-logo-title {
          font-family: 'Cinzel', serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--nav-text) !important;
          letter-spacing: 0.02em;
          line-height: 1.1;
        }

        .nav-logo-subtitle {
          font-family: 'Lora', serif;
          font-size: 0.55rem;
          color: var(--nav-gold) !important;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          margin-top: 1px;
        }

        /* Desktop Nav Items */
        .nav-desktop-links {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .nav-item {
          text-decoration: none;
          color: var(--nav-text) !important;
          font-family: 'Lora', serif;
          font-size: 0.85rem;
          font-weight: 500;
          padding: 6px 14px;
          border-radius: 100px;
          opacity: 0.8;
          transition: all 0.2s ease;
        }

        .nav-item:hover {
          opacity: 1;
          background-color: rgba(26, 16, 8, 0.04);
          color: var(--nav-gold) !important;
        }

        /* Premium Actions Button */
        .nav-cta {
          text-decoration: none;
          background-color: var(--nav-text);
          color: var(--nav-white) !important;
          font-family: 'Lora', serif;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 8px 18px;
          border-radius: 100px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: all 0.25s ease;
        }

        .nav-cta:hover {
          background-color: var(--nav-gold);
          box-shadow: 0 4px 12px rgba(201, 144, 26, 0.15);
        }

        .nav-mobile-trigger {
          display: none;
          background: none;
          border: none;
          color: var(--nav-text);
          cursor: pointer;
          padding: 4px;
        }

        .nav-mobile-overlay {
          display: none;
        }

        /* ==========================================================================
           RESPONSIVE CODEBREAKS & SCROLLING MOBILE PANELS
           ========================================================================== */
        @media (max-width: 992px) {
          .nav-desktop-links, .nav-desktop-action {
            display: none !important;
          }

          .nav-mobile-trigger {
            display: flex;
            position: relative;
            z-index: 100001;
          }

          .menu-is-open .nav-mobile-overlay {
            display: block;
            position: absolute;
            top: 100%; 
            left: 0;
            right: 0;
            background: #FDFBF7;
            border-top: 1px solid var(--nav-border);
            border-bottom: 1px solid var(--nav-border);
            padding: 30px 24px;
            box-sizing: border-box;
            z-index: 100000;
            box-shadow: 0 10px 30px rgba(26, 16, 8, 0.05);
            animation: mobileNavFade 0.25s ease-out forwards;
          }

          .nav-mobile-inner-grid {
            display: flex;
            flex-direction: column;
            gap: 14px;
            max-width: 500px;
            margin: 0 auto;
          }

          .nav-mobile-nav-link {
            text-decoration: none;
            color: var(--nav-text) !important;
            font-family: 'Lora', serif;
            font-size: 1.05rem;
            font-weight: 500;
            padding: 10px 0;
            border-bottom: 1px solid rgba(26, 16, 8, 0.04);
          }

          .nav-mobile-whatsapp-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #128C7E;
            color: var(--nav-white) !important;
            text-decoration: none;
            font-family: 'Lora', serif;
            font-size: 0.9rem;
            font-weight: 600;
            padding: 12px;
            border-radius: 100px;
            margin-top: 8px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            box-shadow: 0 4px 12px rgba(18, 140, 126, 0.15);
          }

          .nav-mobile-socials {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-top: 6px;
          }

          .mobile-social-pill {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 10px;
            border-radius: 100px;
            text-decoration: none;
            font-size: 0.8rem;
            font-weight: 600;
          }

          .social-instagram {
            background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
            color: #FFFFFF !important;
          }

          .social-facebook {
            background-color: #1877F2;
            color: #FFFFFF !important;
          }
        }

        @keyframes mobileNavFade {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}