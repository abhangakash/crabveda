"use client";
import Image from "next/image";

const WHATSAPP_URL =
  "https://wa.me/919921297518?text=Hello%20CrabVeda!%20I%20want%20to%20order%201%20bottle%20of%20CrabVeda%20Ayurvedic%20Crab%20Oil%20(200ml%20%E2%82%B9360).%20Please%20confirm%20my%20order.";

export default function Hero() {
  return (
    <section className="premium-hero">
      
      {/* IMMERSIVE BACKGROUND CANVAS */}
      <div className="hero-bg-viewport">
        <div className="bg-ambient-glow" />
      </div>

      <div className="hero-interface-wrapper">
        
        {/* ADAPTIVE VISUAL MODULE (Sits Right on Desktop, Jumps ABOVE content on Mobile) */}
        <div className="product-visual-showcase">
          <div className="hero-banner-inner-box">
            <Image 
              src="/img4.png"
              alt="Ayurvedic Natural Ingredients & Herbs Backdrop"
              fill
              priority
              sizes="(max-width: 968px) 100vw, 50vw"
              className="hero-main-banner-img"
            />
          </div>
        </div>

        {/* EDITORIAL COPY PANEL (Sits Left on Desktop, Below Image on Mobile) */}
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

          {/* DYNAMIC TRANSACTION FRAME */}
          <div className="unified-action-card">
            <div className="action-details-split">
              <div className="pricing-cluster">
                <div className="price-line">
                  <span className="tag-current">₹360</span>
                  <span className="tag-was">₹450</span>
                </div>
                <p className="tag-meta">200ml Bottle · Free Express Shipping</p>
              </div>
              
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="action-cta">
                <WhatsAppIcon />
                <span>Order via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      <style jsx global>{`
        .premium-hero {
          --emerald: #1E3A2F;
          --text-dark: #1A1008;
          --gold-accent: #C9901A;
          --slate-light: #7A6040;
          --canvas-cream: #FDFBF7;
          
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          /* Balanced desktop layout padding configuration */
          padding: 140px 40px 80px; 
          box-sizing: border-box;
          overflow: hidden;
          background-color: var(--canvas-cream);
        }

        /* --- Luxury Studio Background Engine --- */
        .hero-bg-viewport {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .bg-ambient-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 70% 40%, rgba(201, 144, 26, 0.08) 0%, rgba(253, 246, 232, 0) 60%);
        }

        /* --- Desktop Architecture: Balanced 2-Column Grid --- */
        .hero-interface-wrapper {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          width: 100%;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 60px;
          align-items: center;
        }

        /* On Desktop, text sits on the left column */
        .editorial-text-panel {
          grid-column: 1;
          grid-row: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
        }

        /* On Desktop, image sits on the right column */
        .product-visual-showcase {
          grid-column: 2;
          grid-row: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .hero-banner-inner-box {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 45px rgba(26, 16, 8, 0.05);
          background: #FFFFFF;
        }

        .hero-main-banner-img {
          object-fit: contain;
          object-position: center center;
        }

        /* --- Typography & Branding Tokens --- */
        .capsule-badge {
          background: var(--emerald);
          color: #FFF;
          padding: 6px 16px;
          border-radius: 100px;
          font-family: var(--font-body), 'Lora', serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 24px;
          box-shadow: 0 4px 12px rgba(30, 58, 47, 0.1);
        }

        .hero-heading {
          font-family: var(--font-display), 'Cinzel', serif;
          font-size: clamp(2.5rem, 4vw, 3.6rem);
          font-weight: 700;
          color: var(--text-dark);
          margin: 0 0 20px;
          letter-spacing: 0.01em;
          line-height: 1.1;
        }

        .hero-subheading {
          display: block;
          font-family: var(--font-body), 'Lora', serif;
          font-weight: 500;
          font-style: italic;
          font-size: clamp(1.2rem, 2vw, 1.7rem);
          color: var(--gold-accent);
          margin-top: 4px;
          letter-spacing: 0;
        }

        .hero-narrative {
          font-family: var(--font-body), 'Lora', serif;
          font-size: 1.05rem;
          line-height: 1.7;
          color: #4A3E3D;
          margin: 0 0 32px;
          max-width: 520px;
        }

        .pills-flexbox {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .pill-tag {
          background: rgba(201, 144, 26, 0.06);
          border: 1px solid rgba(201, 144, 26, 0.15);
          color: var(--text-dark);
          padding: 8px 16px;
          border-radius: 100px;
          font-family: var(--font-body), 'Lora', serif;
          font-size: 0.85rem;
          font-weight: 500;
        }

        /* --- Premium Hybrid Action Card --- */
        .unified-action-card {
          background: #FFF;
          border: 1px solid rgba(26, 16, 8, 0.05);
          border-radius: 20px;
          padding: 24px;
          width: 100%;
          max-width: 540px;
          box-shadow: 0 10px 40px rgba(26, 16, 8, 0.04);
          box-sizing: border-box;
        }

        .action-details-split {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 24px;
        }

        .price-line {
          display: flex;
          align-items: baseline;
          gap: 10px;
        }

        .tag-current {
          font-family: var(--font-display), 'Cinzel', serif;
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--text-dark);
        }

        .tag-was {
          font-family: var(--font-body), 'Lora', serif;
          font-size: 1.1rem;
          color: var(--slate-light);
          text-decoration: line-through;
          opacity: 0.7;
        }

        .tag-meta {
          margin: 4px 0 0;
          font-family: var(--font-body), 'Lora', serif;
          font-size: 0.8rem;
          color: var(--slate-light);
          font-weight: 500;
        }

        .action-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: var(--text-dark);
          color: #FFF;
          padding: 16px 32px;
          border-radius: 100px;
          font-family: var(--font-body), 'Lora', serif;
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          flex-shrink: 0;
        }

        .action-cta:hover {
          background: var(--emerald);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(30, 58, 47, 0.15);
        }

        /* ==========================================================================
           TABLET & MOBILE BREAKPOINTS (Fixed overlapping layout errors)
           ========================================================================== */
       @media (max-width: 1100px) {
          .premium-hero {
            /* 100px to 110px leaves optimal structural buffer for fixed components */
            padding: 110px 24px 60px; 
            min-height: auto; /* Avoid forced 100vh page stretching issues on tablet */
          }

          .hero-interface-wrapper {
            display: flex;
            flex-direction: column;
            gap: 48px;
            max-width: 800px;
            margin: 0 auto;
          }

          .product-visual-showcase {
            order: 1;
            width: 100%;
            display: flex;
            justify-content: center;
          }

         .hero-banner-inner-box {
            position: relative;
            width: 100%;
            max-width: 750px;
            aspect-ratio: 16 / 10;
          }

          .hero-main-banner-img {
            object-fit: cover;
            object-position: center center;
          }

          .editorial-text-panel {
            order: 2;
            max-width: 700px;
            margin: 0 auto;
            align-items: center;
            text-align: center;
          }

          .hero-narrative {
            max-width: 600px;
          }

          .pills-flexbox {
            justify-content: center;
          }
        }

        @media (max-width: 600px) {
          .premium-hero {
            /* Gives comfortable breathing room from a top fixed header */
            padding: 75px 16px 48px;
          }

          .hero-interface-wrapper {
            gap: 28px;
          }

          .hero-banner-inner-box {
            position: relative;
            width: calc(100vw + 32px);
            margin-left: -16px;
            margin-right: -16px;
            aspect-ratio: 16 / 10;
            border-radius: 0;
            overflow: hidden;
            box-shadow: none;
          }

          .editorial-text-panel {
            padding: 0 8px;
          }

          .hero-heading {
            font-size: 2.2rem;
            margin: 0 0 12px;
          }

          .hero-subheading {
            font-size: 1.2rem;
          }

          .hero-narrative {
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 24px;
          }

          .pills-flexbox {
            margin-bottom: 28px;
            gap: 6px;
          }

          .pill-tag {
            padding: 6px 12px;
            font-size: 0.78rem;
          }

          .unified-action-card {
            padding: 16px;
          }

          .action-details-split {
            flex-direction: column;
            gap: 16px;
          }

          .pricing-cluster {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .tag-current {
            font-size: 1.85rem;
          }

          .action-cta {
            padding: 14px;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#25D366" }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.874L.057 23.929l6.224-1.453A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.791 9.791 0 01-5.031-1.389l-.361-.214-3.741.874.946-3.638-.235-.373A9.79 9.79 0 012.182 12C2.182 6.545 6.545 2.182 12 2.182S21.818 6.545 21.818 12 17.455 21.818 12 21.818z"/>
    </svg>
  );
}