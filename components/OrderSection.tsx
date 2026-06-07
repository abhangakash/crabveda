"use client";

const WHATSAPP_URL =
  "https://wa.me/919921297518?text=Hello%20CrabVeda!%20I%20want%20to%20order%201%20bottle%20of%20CrabVeda%20Ayurvedic%20Crab%20Oil%20(200ml%20%E2%82%B9360).%20Please%20confirm%20my%20order.";

export default function OrderSection() {
  return (
    <section
      id="order"
      className="section-pad"
      style={{
        background: "linear-gradient(160deg, var(--forest) 0%, #0F2219 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background texture */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle at 25% 25%, rgba(201,144,26,0.06) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(201,144,26,0.04) 0%, transparent 50%)",
        pointerEvents: "none",
      }} />

      {/* Gold border top */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
        }}>
          {/* Left: Product info */}
          <div>
            <div style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.75rem",
              color: "var(--gold-light)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 12,
              opacity: 0.8,
            }}>
              Order Now
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "white",
              marginBottom: 16,
              letterSpacing: "0.04em",
              lineHeight: 1.2,
            }}>
              CrabVeda<br />
              <span style={{ color: "var(--gold-light)" }}>Ayurvedic Crab Oil</span>
            </h2>

            <div style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(201,144,26,0.25)",
              borderRadius: 16,
              padding: "20px",
              marginBottom: 28,
            }}>
              {[
                ["Product", "CrabVeda Ayurvedic Crab Oil"],
                ["Size", "200 ml (6.76 fl oz)"],
                ["MRP", "₹360 (Inclusive of all taxes)"],
                ["Unit Price", "₹1.80 per ml"],
                ["Mfg Date", "Jun 2026"],
                ["Best Before", "1 year from manufacturing date"],
                ["Batch No.", "CV0001"],
              ].map(([label, value]) => (
                <div key={label} style={{
                  display: "flex",
                  gap: 12,
                  paddingBottom: 10,
                  marginBottom: 10,
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}>
                  <span style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8rem",
                    color: "rgba(255,255,255,0.5)",
                    minWidth: 110,
                    flexShrink: 0,
                  }}>{label}</span>
                  <span style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.9)",
                    fontWeight: 600,
                  }}>{value}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {["🌿 100% Natural", "🇮🇳 Made in India", "✅ Ayurvedic"].map((tag) => (
                <span key={tag} style={{
                  background: "rgba(201,144,26,0.15)",
                  border: "1px solid rgba(201,144,26,0.3)",
                  color: "var(--gold-light)",
                  padding: "6px 14px",
                  borderRadius: 50,
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Right: Order CTA */}
          <div style={{ textAlign: "center" }}>
            <div style={{
              background: "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(201,144,26,0.06))",
              border: "1.5px solid rgba(201,144,26,0.3)",
              borderRadius: 28,
              padding: "40px 32px",
              backdropFilter: "blur(10px)",
            }}>
              <div style={{ fontSize: "3rem", marginBottom: 16 }}>🦀</div>

              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.72rem",
                color: "rgba(232,184,75,0.7)",
                letterSpacing: "0.15em",
                marginBottom: 8,
              }}>
                SPECIAL PRICE
              </div>

              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "3.5rem",
                color: "var(--gold-light)",
                fontWeight: 700,
                lineHeight: 1,
                marginBottom: 4,
              }}>
                ₹360
              </div>
              <div style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.5)",
                marginBottom: 28,
              }}>
                200ml · Incl. all taxes · Free delivery on request
              </div>

              {/* WhatsApp order button */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  marginBottom: 16,
                  fontSize: "1.05rem",
                  padding: "18px 32px",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.874L.057 23.929l6.224-1.453A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.791 9.791 0 01-5.031-1.389l-.361-.214-3.741.874.946-3.638-.235-.373A9.79 9.79 0 012.182 12C2.182 6.545 6.545 2.182 12 2.182S21.818 6.545 21.818 12 17.455 21.818 12 21.818z"/>
                </svg>
                Order on WhatsApp
              </a>

              <div style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.78rem",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.6,
              }}>
                💬 Click to chat · 📦 Fast delivery across India<br />
                Tap the button and send the pre-filled message
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #order .container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
