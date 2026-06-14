"use client";

const WHATSAPP_URL =
  "https://wa.me/919921297518?text=Hello%20CrabVeda!%20I%20want%20to%20order%201%20bottle%20of%20CrabVeda%20Ayurvedic%20Crab%20Oil%20(200ml%20%E2%82%B9360).%20Please%20confirm%20my%20order.";

export default function OrderSection() {
  return (
    <section id="order" className="checkout-section">
      {/* Structural Decorative Canvas Borders */}
      <div className="gradient-divider-top" />
      <div className="ambient-radial-glow" />

      <div className="checkout-container">
        <div className="checkout-split-layout">
          
          {/* LEFT COLUMN: Clean Brand Specifics Manifest */}
          <div className="product-manifest-column">
            <div className="section-mini-badge">
              <span className="badge-bullet">●</span> Direct Procurement
            </div>
            <h2 className="section-main-heading">
              CrabVeda <br />
              <span className="gold-highlight-text">Ayurvedic Crab Oil</span>
            </h2>

            <div className="technical-spec-sheet">
              {[
                ["Product", "CrabVeda Ayurvedic Joint Formula"],
                ["Net Content", "200 ml (6.76 fl oz)"],
                ["Pricing", "₹360 (Inclusive of all taxes)"],
                ["Unit Rate", "₹1.80 / ml"],
                ["Batch ID", "CV0001"],
                ["Shelf Life", "12 Months from Manufacturing"],
              ].map(([label, value]) => (
                <div key={label} className="spec-item-row">
                  <span className="spec-label">{label}</span>
                  <span className="spec-value">{value}</span>
                </div>
              ))}
            </div>

            {/* Quality Seals Group */}
            <div className="quality-trust-badges-row">
              {["🌿 100% Pure Botanical", "🇮🇳 Made in India", "✅ Clinically Tested"].map((tag) => (
                <span key={tag} className="trust-pill-tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: The Single High-End Conversational Checkout Card */}
          <div className="transaction-card-column">
            <div className="premium-checkout-vault">
              <div className="vault-header">
                <span className="vault-brand-emblem">🦀</span>
                <span className="vault-pricing-badge">Official Store Pricing</span>
              </div>

              <div className="price-matrix-display">
                <span className="currency-symbol">₹</span>
                <span className="prime-amount-digit">360</span>
              </div>
              
              <p className="fulfillment-sub-label">
                Per 200ml Bottle • Free Standard Logistics Across India
              </p>

              {/* Polished, Single Conversational Call-To-Action */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-conversion-cta-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="cta-whatsapp-vector">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.874L.057 23.929l6.224-1.453A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.791 9.791 0 01-5.031-1.389l-.361-.214-3.741.874.946-3.638-.235-.373A9.79 9.79 0 012.182 12C2.182 6.545 6.545 2.182 12 2.182S21.818 6.545 21.818 12 17.455 21.818 12 21.818z"/>
                </svg>
                <span>Instant Checkout Securely</span>
              </a>

              <div className="transaction-footer-disclaimer">
                <span className="lock-shield-icon">🔒</span> Secure automated routing. Tap to transmit a pre-formatted order dispatch message directly to fulfillment staff.
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .checkout-section {
          --forest-dark: #0F2219;
          --forest-base: #1E3A2F;
          --gold-warm: #C9901A;
          --gold-tint: #E3B24D;
          --text-opacity: rgba(255, 255, 255, 0.7);

          background: linear-gradient(180deg, var(--forest-base) 0%, var(--forest-dark) 100%);
          padding: 120px 24px;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }

        .gradient-divider-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(227, 178, 77, 0.3), transparent);
        }

        .ambient-radial-glow {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 15% 25%, rgba(201, 144, 26, 0.05) 0%, transparent 60%),
            radial-gradient(circle at 85% 75%, rgba(201, 144, 26, 0.03) 0%, transparent 60%);
          pointer-events: none;
        }

        .checkout-container {
          max-width: 1140px;
          margin: 0 auto;
          width: 100%;
        }

        .checkout-split-layout {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 80px;
          align-items: center;
        }

        /* --- Left Side Brand Manifest Styles --- */
        .section-mini-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.04);
          color: var(--gold-tint);
          padding: 6px 14px;
          border-radius: 100px;
          font-family: var(--font-body), sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border: 1px solid rgba(227, 178, 77, 0.2);
          margin-bottom: 20px;
        }

        .badge-bullet {
          color: #FFFFFF;
          margin-right: 6px;
          font-size: 0.6rem;
        }

        .section-main-heading {
          font-family: var(--font-display), serif;
          font-size: clamp(2.2rem, 4vw, 3rem);
          color: #FFFFFF;
          margin: 0 0 32px 0;
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.01em;
        }

        .gold-highlight-text {
          color: var(--gold-tint);
        }

        .technical-spec-sheet {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 32px;
        }

        .spec-item-row {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }

        .spec-item-row:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .spec-item-row:first-child {
          padding-top: 0;
        }

        .spec-label {
          font-family: var(--font-body), sans-serif;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.45);
        }

        .spec-value {
          font-family: var(--font-body), sans-serif;
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
        }

        .quality-trust-badges-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .trust-pill-tag {
          background: rgba(201, 144, 26, 0.08);
          border: 1px solid rgba(201, 144, 26, 0.2);
          color: var(--gold-tint);
          padding: 6px 14px;
          border-radius: 100px;
          font-size: 0.76rem;
          font-family: var(--font-body), sans-serif;
          font-weight: 500;
        }

        /* --- Right Side Transaction Box Styles --- */
        .premium-checkout-vault {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.03), rgba(201, 144, 26, 0.01));
          border: 1px solid rgba(227, 178, 77, 0.2);
          border-radius: 28px;
          padding: 48px 40px;
          backdrop-filter: blur(12px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);
          text-align: center;
        }

        .vault-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .vault-brand-emblem {
          font-size: 2.5rem;
          line-height: 1;
        }

        .vault-pricing-badge {
          font-family: var(--font-body), sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--gold-tint);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .price-matrix-display {
          display: inline-flex;
          align-items: flex-start;
          justify-content: center;
          color: #FFFFFF;
          margin-bottom: 8px;
        }

        .currency-symbol {
          font-family: var(--font-display), serif;
          font-size: 2rem;
          font-weight: 400;
          color: var(--gold-tint);
          margin-top: 4px;
          margin-right: 2px;
        }

        .prime-amount-digit {
          font-family: var(--font-display), serif;
          font-size: 4.5rem;
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .fulfillment-sub-label {
          font-family: var(--font-body), sans-serif;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.4);
          margin: 0 0 36px 0;
        }

        /* The Re-styled Premium Anchor CTA */
        .premium-conversion-cta-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          background: #FFFFFF;
          color: var(--forest-dark);
          text-decoration: none;
          font-family: var(--font-heading), sans-serif;
          font-size: 1rem;
          font-weight: 700;
          padding: 18px 32px;
          border-radius: 16px;
          box-sizing: border-box;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          transition: transform 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease;
          margin-bottom: 20px;
        }

        .premium-conversion-cta-link:hover {
          background: #FAF6EE;
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(227, 178, 77, 0.15);
        }

        .cta-whatsapp-vector {
          color: #25D366; /* Pure brand accent isolated onto the vector hook natively */
        }

        .transaction-footer-disclaimer {
          font-family: var(--font-body), sans-serif;
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.35);
          line-height: 1.5;
          text-align: left;
          display: flex;
          gap: 8px;
          align-items: flex-start;
          background: rgba(0, 0, 0, 0.12);
          padding: 14px 16px;
          border-radius: 12px;
        }

        .lock-shield-icon {
          font-size: 0.9rem;
          line-height: 1;
          margin-top: 1px;
        }

        /* ==========================================================================
           STRICT RESPONSIVE LAYOUT CONSTRAINTS
           ========================================================================== */
        @media (max-width: 992px) {
          .checkout-split-layout {
            grid-template-columns: 1fr;
            gap: 56px;
          }
          
          .product-manifest-column {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .technical-spec-sheet {
            width: 100%;
            max-width: 600px;
          }

          .quality-trust-badges-row {
            justify-content: center;
          }
        }

        @media (max-width: 500px) {
          .checkout-section {
            padding: 80px 16px;
          }

          .premium-checkout-vault {
            padding: 36px 20px;
          }

          .prime-amount-digit {
            font-size: 3.8rem;
          }

          .premium-conversion-cta-link {
            padding: 16px 24px;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
}