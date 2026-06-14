"use client";
import Image from "next/image";

const WHATSAPP_URL =
  "https://wa.me/919921297518?text=Hello%20CrabVeda!%20I%20want%20to%20order%201%20bottle%20of%20CrabVeda%20Ayurvedic%20Crab%20Oil%20(200ml%20%E2%82%B9360).%20Please%20confirm%20my%20order.";

export default function Hero() {
  return (
    <section className="premium-hero">
      
      {/* IMMERSIVE BACKGROUND CANVAS */}
      <div className="hero-bg-viewport">
        <Image 
          src="/img1.jpeg" 
          alt="Ayurvedic Natural Ingredients Backdrop" 
          fill
          priority
          className="bg-core-image"
        />
        <div className="bg-dynamic-overlay" />
      </div>

      <div className="hero-interface-wrapper">
        
        {/* DESKTOP-ONLY PRODUCT SHOWCASE PANEL */}
        <div className="desktop-product-panel">
          <div className="glass-display-case">
            <Image 
              src="/img2.jpeg" 
              alt="CrabVeda Bottle" 
              width={240} 
              height={320} 
              priority
              className="desktop-only-bottle"
            />
          </div>
        </div>

        {/* CONTEMPORARY EDITORIAL COPY PANEL */}
        <div className="editorial-text-panel">
          <div className="capsule-badge">100% Authentic Ayurveda</div>
          
          <h1 className="hero-heading">
            CrabVeda <span className="hero-subheading">Ayurvedic Crab Oil</span>
          </h1>
          
          <p className="hero-narrative">
            A premium therapeutic formulation engineered to naturally relieve deep joint stiffness, reduce localized inflammation, and restore structural mobility.
          </p>
          
          <div className="pills-flexbox">
            <span className="pill-tag">🦴 Joint Relief</span>
            <span className="pill-tag">🔥 Anti-Swelling</span>
            <span className="pill-tag">🏃 Free Mobility</span>
          </div>

          {/* DYNAMIC HYBRID TRANSACTION FRAME */}
          <div className="unified-action-card">
            
            {/* Mobile-Only Integrated Bottle (Perfect size, stays inside the card) */}
            <div className="mobile-product-thumbnail">
              <Image 
                src="/img2.jpeg" 
                alt="CrabVeda Bottle" 
                width={70} 
                height={95} 
                priority
                className="mobile-inline-bottle"
              />
            </div>

            <div className="action-details-split">
              <div className="pricing-cluster">
                <div className="price-line">
                  <span className="tag-current">₹360</span>
                  <span className="tag-was">₹450</span>
                </div>
                <p className="tag-meta">200ml · Free Express Shipping</p>
              </div>
              
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="action-cta">
                <WhatsAppIcon />
                <span>Order via WhatsApp</span>
              </a>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        .premium-hero {
          --emerald: #1E3A2F;
          --amber: #C9901A;
          --slate-light: #64748B;
          --card-glass: rgba(255, 255, 255, 0.9);
          
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 40px 60px;
          box-sizing: border-box;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        /* --- Full Screen Adaptive Backdrop --- */
        .hero-bg-viewport {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .bg-core-image {
          object-fit: cover;
        }

        /* Ambient gradient masking: handles legibility across all screen viewports */
        .bg-dynamic-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #FAF9F6 45%, rgba(250,249,246,0.85) 65%, rgba(250,249,246,0.2) 100%);
        }

        .hero-interface-wrapper {
          position: relative;
          z-index: 2;
          max-width: 1140px;
          width: 100%;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 64px;
          align-items: center;
        }

        /* --- Desktop Layout Architecture --- */
        .desktop-product-panel {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .glass-display-case {
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 40px;
          border-radius: 28px;
          border: 1px solid rgba(255,255,255,0.6);
          box-shadow: 0 30px 60px rgba(30,58,47,0.1);
        }

        .desktop-only-bottle {
          object-fit: contain;
          filter: drop-shadow(0 20px 30px rgba(30,58,47,0.15));
        }

        .mobile-product-thumbnail {
          display: none; /* Invisible on desktop */
        }

        /* --- Copywriting Architecture --- */
        .editorial-text-panel {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .capsule-badge {
          background: var(--emerald);
          color: #FFF;
          padding: 6px 14px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .hero-heading {
          font-size: 4rem;
          font-weight: 800;
          color: var(--emerald);
          margin: 0 0 16px;
          letter-spacing: -0.03em;
          line-height: 1.05;
        }

        .hero-subheading {
          display: block;
          font-family: Georgia, serif;
          font-weight: 400;
          font-style: italic;
          font-size: 1.8rem;
          color: var(--amber);
          margin-top: 6px;
        }

        .hero-narrative {
          font-size: 1.1rem;
          line-height: 1.65;
          color: #2D3748;
          margin: 0 0 32px;
          max-width: 500px;
        }

        .pills-flexbox {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .pill-tag {
          background: rgba(30, 58, 47, 0.07);
          color: var(--emerald);
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        /* --- Desktop Action Box --- */
        .unified-action-card {
          background: #FFF;
          border: 1px solid rgba(0,0,0,0.05);
          border-radius: 24px;
          padding: 20px 24px;
          width: 100%;
          max-width: 520px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.03);
          box-sizing: border-box;
        }

        .action-details-split {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 20px;
        }

        .price-line {
          display: flex;
          align-items: baseline;
          gap: 8px;
        }

        .tag-current {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--emerald);
          letter-spacing: -0.02em;
        }

        .tag-was {
          font-size: 1.05rem;
          color: var(--slate-light);
          text-decoration: line-through;
        }

        .tag-meta {
          margin: 2px 0 0;
          font-size: 0.8rem;
          color: var(--slate-light);
          font-weight: 500;
        }

        .action-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: #111827;
          color: #FFF;
          padding: 16px 28px;
          border-radius: 14px;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.15s;
          flex-shrink: 0;
        }

        .action-cta:hover {
          background: #1F2937;
        }

        /* ==========================================================================
           LUXURY IMMERSIVE MOBILE SYSTEM (Zero Clashing / Zero Layout Overlaps)
           ========================================================================== */
        @media (max-width: 968px) {
          .premium-hero {
            padding: 80px 16px 32px;
            align-items: flex-end; /* Snaps interface cleanly to user view base */
          }

          /* Mask transforms into an elegant soft vertical shroud over the backdrop image */
          .bg-dynamic-overlay {
            background: linear-gradient(180deg, rgba(250,249,246,0.65) 0%, #FAF9F6 60%, #FAF9F6 100%);
          }

          .hero-interface-wrapper {
            grid-template-columns: 1fr;
            gap: 0;
          }

          /* Wipe out the desktop display module completely on mobile */
          .desktop-product-panel {
            display: none !important;
          }

          .editorial-text-panel {
            align-items: center;
            text-align: center;
            width: 100%;
          }

          .capsule-badge {
            margin-bottom: 16px;
          }

          .hero-heading {
            font-size: 2.8rem;
          }

          .hero-subheading {
            font-size: 1.4rem;
          }

          .hero-narrative {
            font-size: 0.98rem;
            margin-bottom: 24px;
          }

          .pills-flexbox {
            justify-content: center;
            margin-bottom: 32px;
          }

          /* Transform bottom action card into a sleek container holding the bottle image safely inside */
          .unified-action-card {
            background: var(--card-glass);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255,255,255,0.8);
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 16px;
            padding: 16px;
            align-items: center;
            box-shadow: 0 15px 40px rgba(30,58,47,0.08);
            max-width: 100%;
            text-align: left;
          }

          /* Reveal the product image dynamically inside the protected bounds of the checkout card */
          .mobile-product-thumbnail {
            display: block;
            background: #FFF;
            padding: 8px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.04);
            flex-shrink: 0;
          }

          .mobile-inline-bottle {
            object-fit: contain;
          }

          .action-details-split {
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
          }

          .tag-current {
            font-size: 1.8rem;
          }

          .action-cta {
            padding: 14px;
            width: 100%;
            box-sizing: border-box;
          }
        }
      `}</style>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.874L.057 23.929l6.224-1.453A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.791 9.791 0 01-5.031-1.389l-.361-.214-3.741.874.946-3.638-.235-.373A9.79 9.79 0 012.182 12C2.182 6.545 6.545 2.182 12 2.182S21.818 6.545 21.818 12 17.455 21.818 12 21.818z"/>
    </svg>
  );
}