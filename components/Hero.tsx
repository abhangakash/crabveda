"use client";
import Image from "next/image";

const WHATSAPP_URL =
  "https://wa.me/919921297518?text=Hello%20CrabVeda!%20I%20want%20to%20order%201%20bottle%20of%20CrabVeda%20Ayurvedic%20Crab%20Oil%20(200ml%20%E2%82%B9360).%20Please%20confirm%20my%20order.";

export default function Hero() {
  return (
    <section className="modern-hero">
      <div className="hero-container">
        
        {/* EDITORIAL MEDIA STAGE: Side-by-side elements on both desktop and mobile */}
        <div className="hero-media-stage">
          
          {/* Left Panel: The Lifestyle Context */}
          <div className="media-panel lifestyle-panel">
            <Image 
              src="/img1.jpeg" 
              alt="Ayurvedic Natural Ingredients" 
              fill
              priority
              className="panel-img"
            />
          </div>

          {/* Right Panel: The Product Display */}
          <div className="media-panel product-panel">
            <div className="product-img-wrapper">
              <Image 
                src="/img2.jpeg" 
                alt="CrabVeda Bottle" 
                width={180} 
                height={240} 
                priority
                className="actual-product-img"
              />
            </div>
          </div>

        </div>

        {/* TEXT STAGE */}
        <div className="hero-text-stage">
          <div className="mini-badge">100% Authentic Ayurveda</div>
          
          <h1 className="main-title">
            CrabVeda <span className="serif-subtitle">Ayurvedic Crab Oil</span>
          </h1>
          
          <p className="description-paragraph">
            A premium therapeutic formulation engineered to naturally relieve deep joint stiffness, reduce localized inflammation, and restore structural mobility.
          </p>
          
          <div className="pills-container">
            <span className="benefit-pill">🦴 Joint Relief</span>
            <span className="benefit-pill">🔥 Anti-Swelling</span>
            <span className="benefit-pill">🏃 Free Mobility</span>
          </div>

          <div className="checkout-bar">
            <div className="price-box">
              <div className="price-row">
                <span className="price-current">₹360</span>
                <span className="price-old">₹450</span>
              </div>
              <p className="price-details">200ml · Free Shipping</p>
            </div>
            
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="cta-button">
              <WhatsAppIcon />
              <span>Order via WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

      <style>{`
        .modern-hero {
          --dark-green: #1E3A2F;
          --gold: #C9901A;
          --slate: #475569;
          --canvas-bg: #FAF9F6;
          
          min-height: 100vh;
          background-color: var(--canvas-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 140px 24px 60px;
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .hero-container {
          max-width: 1100px;
          width: 100%;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 64px;
          align-items: center;
        }

        /* --- Media Stage (Side-by-Side Canvas) --- */
        .hero-media-stage {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          width: 100%;
          height: 520px;
        }

        .media-panel {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
          border: 1px solid rgba(0,0,0,0.03);
        }

        .panel-img {
          object-fit: cover;
        }

        .product-panel {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .product-img-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .actual-product-img {
          object-fit: contain;
          max-width: 100%;
          height: auto;
        }

        /* --- Text Area --- */
        .hero-text-stage {
          display: flex;
          flex-direction: column;
        }

        .mini-badge {
          align-self: flex-start;
          background: #FFF;
          border: 1px solid rgba(0,0,0,0.08);
          padding: 6px 14px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: var(--dark-green);
          margin-bottom: 20px;
        }

        .main-title {
          font-size: 3.5rem;
          font-weight: 800;
          color: var(--dark-green);
          margin: 0 0 16px;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .serif-subtitle {
          display: block;
          font-family: Georgia, serif;
          font-weight: 400;
          font-style: italic;
          font-size: 1.75rem;
          color: var(--gold);
          margin-top: 4px;
        }

        .description-paragraph {
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--slate);
          margin: 0 0 28px;
          max-width: 500px;
        }

        .pills-container {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .benefit-pill {
          background: rgba(30,58,47,0.05);
          color: var(--dark-green);
          padding: 6px 14px;
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .checkout-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #FFF;
          border: 1px solid rgba(0,0,0,0.05);
          border-radius: 18px;
          padding: 14px 20px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.02);
        }

        .price-row {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }

        .price-current {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--dark-green);
        }

        .price-old {
          font-size: 0.95rem;
          color: var(--slate);
          text-decoration: line-through;
        }

        .price-details {
          margin: 2px 0 0;
          font-size: 0.75rem;
          color: var(--slate);
        }

        .cta-button {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #1E293B;
          color: #FFF;
          padding: 14px 24px;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s;
        }

        .cta-button:hover {
          background: #0F172A;
        }

        /* ==========================================================================
           HIGH-END EDITORIAL MOBILE BREAKPOINT
           ========================================================================== */
        @media (max-width: 900px) {
          .modern-hero {
            padding: 110px 16px 40px;
          }

          .hero-container {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          /* Fixed: Smoothly scales to an elegant, equal-split double canvas row */
          .hero-media-stage {
            height: 240px; 
            gap: 12px;
          }

          .media-panel {
            border-radius: 14px;
          }

          .product-panel {
            padding: 12px;
          }

          .actual-product-img {
            max-height: 180px;
          }

          /* Text adjustments below images */
          .hero-text-stage {
            align-items: center;
            text-align: center;
          }

          .mini-badge {
            margin-bottom: 12px;
            align-self: center;
          }

          .main-title {
            font-size: 2.5rem;
          }

          .serif-subtitle {
            font-size: 1.35rem;
          }

          .description-paragraph {
            font-size: 0.95rem;
            max-width: 100%;
            margin-bottom: 20px;
          }

          .pills-container {
            justify-content: center;
            margin-bottom: 28px;
          }

          .checkout-bar {
            flex-direction: column;
            align-items: stretch;
            gap: 16px;
            width: 100%;
            padding: 20px;
            box-sizing: border-box;
          }

          .price-row {
            justify-content: center;
          }

          .cta-button {
            justify-content: center;
            padding: 16px;
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