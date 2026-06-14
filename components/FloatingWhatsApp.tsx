"use client";

const WHATSAPP_URL =
  "https://wa.me/919921297518?text=Hello%20CrabVeda!%20I%20want%20to%20order%201%20bottle%20of%20CrabVeda%20Ayurvedic%20Crab%20Oil%20(200ml%20%E2%82%B9360).%20Please%20confirm%20my%20order.";

export default function StickyOrderBar() {
  return (
    <div className="modern-sticky-bar">
      <div className="sticky-bar-container">
        
        {/* Left Side: Product Identity Summary */}
        <div className="product-summary-block">
          <div className="product-meta">
            <span className="product-name-tag">CrabVeda Therapeutic Oil</span>
            <span className="product-volume-tag">200ml Bottle</span>
          </div>
          
          <div className="product-price-display">
            {/* 2-3 word high-end context description for mobile viewports */}
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
            <span className="btn-text-desktop">Order Via WhatsApp</span>
            <span className="btn-text-mobile">Order</span>
            <svg className="arrow-icon-mobile" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </a>

      </div>

      <style jsx global>{`
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
          animation: slide-up-entrance 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
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

        /* Descriptive context header for professional editorial layout */
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

        @keyframes slide-up-entrance {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
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
        }

        @media (max-width: 580px) {
          .sticky-bar-container {
            justify-content: space-between;
          }

          .product-meta {
            display: none; /* Safely hides text overflow clutter */
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

          /* Luxury stretch button panel */
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
    </div>
  );
}