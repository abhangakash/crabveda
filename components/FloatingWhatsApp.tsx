"use client";

import { useState, useEffect } from "react";

const WHATSAPP_URL =
  "https://wa.me/919921297518?text=Hello%20CrabVeda!%20I%20want%20to%20order%201%20bottle%20of%20CrabVeda%20Ayurvedic%20Crab%20Oil%20(200ml%20%E2%82%B9360).%20Please%20confirm%20my%20order.";

const INSTAGRAM_URL = "https://www.instagram.com/crabveda?igsh=M2VoNzRoOGhvMzFu";

export default function StickyOrderBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start a timer to show the sticky elements after 5 seconds (5000 milliseconds)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    // Clean up the timer if the component unmounts before 5 seconds pass
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating Instagram Brand Action */}
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow CrabVeda on Instagram"
        className={`floating-insta-anchor ${isVisible ? "is-visible" : ""}`}
      >
        <span className="insta-pulse-ring" />
        <div className="insta-glass-canvas">
          <svg className="insta-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <defs>
              <linearGradient id="sticky-insta-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f09433" />
                <stop offset="25%" stopColor="#e6683c" />
                <stop offset="50%" stopColor="#dc2743" />
                <stop offset="75%" stopColor="#cc2366" />
                <stop offset="100%" stopColor="#bc1888" />
              </linearGradient>
            </defs>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#sticky-insta-grad)"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="url(#sticky-insta-grad)"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="url(#sticky-insta-grad)"></line>
          </svg>
        </div>
      </a>

      {/* Main Bottom Sticky Bar Context Container */}
      <div className={`modern-sticky-bar ${isVisible ? "is-visible" : ""}`}>
        <div className="sticky-bar-container">
          
          {/* Left Side: Product Identity Summary */}
          <div className="product-summary-block">
            <div className="product-meta">
              <span className="product-name-tag">CrabVeda Therapeutic Oil</span>
              <span className="product-volume-tag">200ml Bottle</span>
            </div>
            
            <div className="product-price-display">
              <span className="price-label-desc">Premium Specialist Therapy</span>
              <div className="price-digits-wrapper">
                <span className="price-currency">₹</span>
                <span className="price-amount">360</span>
              </div>
            </div>
          </div>

          {/* Right Side: Ultra-Modern Action Button */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order on WhatsApp"
            className="premium-action-btn"
          >
            <span className="btn-glow-layer" />
            <div className="btn-content-inner">
              <svg className="action-whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.874L.057 23.929l6.224-1.453A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.791 9.791 0 01-5.031-1.389l-.361-.214-3.741.874.946-3.638-.235-.373A9.79 9.79 0 012.182 12C2.182 6.545 6.545 2.182 12 2.182S21.818 6.545 21.818 12 17.455 21.818 12 21.818z"/>
              </svg>
              <span className="btn-text-desktop">Checkout</span>
              <span className="btn-text-mobile">Order</span>
              <svg className="arrow-icon-mobile" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </a>

        </div>
      </div>

      <style jsx global>{`
        /* ==========================================================================
           FLOATING INSTAGRAM ELEMENTS
           ========================================================================== */
        .floating-insta-anchor {
          position: fixed;
          bottom: 96px;
          right: 24px;
          z-index: 99998;
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          outline: none;
          box-sizing: border-box;
          
          /* Initial State: Hidden and shifted down */
          opacity: 0;
          transform: translateY(20px);
          pointer-events: none;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease;
        }

        /* Active State handled by CSS class triggers instead of automated keyframes */
        .floating-insta-anchor.is-visible {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .insta-glass-canvas {
          background: #FFFFFF;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 12px 30px rgba(218, 39, 67, 0.16), 0 2px 8px rgba(26, 16, 8, 0.06);
          border: 1px solid rgba(253, 246, 232, 0.6);
          position: relative;
          z-index: 2;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
        }

        .insta-svg {
          transform: translateY(0.5px);
          transition: transform 0.3s ease;
        }

        .insta-pulse-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(220, 39, 67, 0.15) 0%, transparent 75%);
          border: 1.5px solid rgba(220, 39, 67, 0.4);
          z-index: 1;
          pointer-events: none;
          animation: insta-pulse-wave 2.2s infinite cubic-bezier(0.25, 0, 0, 1);
        }

        .floating-insta-anchor:hover .insta-glass-canvas {
          transform: scale(1.08) translateY(-2px);
          box-shadow: 0 16px 35px rgba(218, 39, 67, 0.22), 0 4px 12px rgba(26, 16, 8, 0.08);
        }

        .floating-insta-anchor:hover .insta-svg {
          transform: rotate(5deg) scale(1.02);
        }

        @keyframes insta-pulse-wave {
          0% { transform: scale(0.92); opacity: 0.9; }
          90% { transform: scale(1.45); opacity: 0; }
          100% { opacity: 0; }
        }

        /* ==========================================================================
           MODERN BOTTOM STICKY BAR LAYOUT
           ========================================================================== */
        .modern-sticky-bar {
          --bar-bg: rgba(253, 246, 232, 0.9); 
          --bar-border: rgba(26, 16, 8, 0.08);
          --btn-primary: var(--text-dark, #1A1008);
          --btn-hover: var(--forest, #1E3A2F);
          --gold-accent: var(--gold, #C9901A);
          --gold-highlight: var(--gold-light, #E8B84B);
          
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 99999;
          background: var(--bar-bg) !important;
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-top: 1px solid var(--bar-border);
          padding: 16px 24px;
          box-shadow: 0 -10px 40px rgba(26, 16, 8, 0.05);
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          box-sizing: border-box;

          /* Initial State: Slid out of view completely */
          transform: translateY(100%);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Active State triggered after 5 seconds */
        .modern-sticky-bar.is-visible {
          transform: translateY(0);
        }

        .sticky-bar-container {
          max-width: 1140px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
        }

        /* --- Left Side Layout --- */
        .product-summary-block {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .product-meta {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .product-name-tag {
          font-family: var(--font-heading), 'Playfair Display', serif;
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-dark, #1A1008) !important;
          letter-spacing: 0.01em;
        }

        .product-volume-tag {
          font-family: var(--font-body), 'Lora', serif;
          font-size: 0.85rem;
          color: var(--text-light, #7A6040) !important;
          font-style: italic;
          letter-spacing: 0.02em;
        }

        .product-price-display {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1px;
        }

        .price-label-desc {
          display: block;
          font-family: var(--font-body), 'Lora', serif;
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-light, #7A6040) !important;
          font-weight: 600;
          line-height: 1;
        }

        .price-digits-wrapper {
          display: flex;
          align-items: baseline;
          color: var(--text-dark, #1A1008);
        }

        .price-currency {
          font-family: var(--font-body), 'Lora', serif;
          font-size: 1.05rem;
          font-weight: 500;
          color: var(--gold-accent) !important;
          margin-right: 2px;
        }

        .price-amount {
          font-family: var(--font-display), 'Cinzel', serif;
          font-size: 1.75rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        /* --- Right Side CTA Action --- */
        .premium-action-btn {
          position: relative;
          text-decoration: none;
          box-sizing: border-box;
          overflow: hidden;
          border-radius: 100px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .btn-content-inner {
          display: flex;
          align-items: center;
          gap: 12px;
          background: var(--btn-primary);
          padding: 16px 36px;
          color: var(--white, #FFFFFF) !important;
          font-family: var(--font-body), 'Lora', serif;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .action-whatsapp-icon {
          width: 18px;
          height: 18px;
          color: #25D366; 
        }

        .btn-text-mobile, .arrow-icon-mobile {
          display: none;
        }

        .btn-glow-layer {
          position: absolute;
          inset: 0;
          border-radius: 100px;
          background: linear-gradient(90deg, transparent, rgba(232, 184, 75, 0.3), transparent);
          transform: translateX(-100%);
          z-index: 1;
        }

        /* --- Hovers --- */
        .premium-action-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(26, 16, 8, 0.15);
        }

        .premium-action-btn:hover .btn-content-inner {
          background: var(--btn-hover);
          border-color: var(--gold-highlight) !important;
        }

        .premium-action-btn:hover .btn-glow-layer {
          transform: translateX(100%);
          transition: transform 0.8s ease-in-out;
        }

        /* ==========================================================================
           MOBILE ECOSYSTEM MANAGEMENT
           ========================================================================== */
        @media (max-width: 768px) {
          .modern-sticky-bar { padding: 14px 20px; }
          .sticky-bar-container { gap: 20px; }
          .product-summary-block { gap: 20px; }
          .price-amount { font-size: 1.5rem; }
          .price-label-desc { font-size: 0.65rem; }
          
          .floating-insta-anchor {
            bottom: 90px;
            right: 16px;
            width: 48px;
            height: 48px;
          }
        }

        @media (max-width: 580px) {
          .sticky-bar-container {
            justify-content: space-between;
          }

          .product-meta {
            display: none; 
          }

          .product-price-display {
            gap: 2px;
          }

          .price-label-desc {
            font-size: 0.62rem;
            letter-spacing: 0.04em;
          }

          .price-amount {
            font-size: 1.45rem;
            line-height: 1.1;
          }
          
          .price-currency {
            font-size: 0.95rem;
          }

          .premium-action-btn {
            flex-grow: 1;
            max-width: 62%;
          }

          .btn-content-inner {
            justify-content: center;
            padding: 14px 16px;
            width: 100%;
            gap: 8px;
            background: var(--btn-primary);
            letter-spacing: 0.08em;
          }

          .btn-text-desktop { display: none; }
          .action-whatsapp-icon { width: 14px; height: 14px; opacity: 0.95; }
          
          .btn-text-mobile {
            display: inline-block;
            font-size: 0.85rem;
            font-weight: 600;
          }

          .arrow-icon-mobile {
            display: inline-block;
            width: 12px;
            height: 12px;
          }
        }
      `}</style>
    </>
  );
}