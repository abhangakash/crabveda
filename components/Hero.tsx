"use client";
import { useEffect, useRef } from "react";

const WHATSAPP_URL =
  "https://wa.me/919921297518?text=Hello%20CrabVeda!%20I%20want%20to%20order%201%20bottle%20of%20CrabVeda%20Ayurvedic%20Crab%20Oil%20(200ml%20%E2%82%B9360).%20Please%20confirm%20my%20order.";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background: `
          radial-gradient(ellipse at 70% 40%, rgba(232, 184, 75, 0.18) 0%, transparent 60%),
          radial-gradient(ellipse at 20% 80%, rgba(30, 58, 47, 0.12) 0%, transparent 50%),
          linear-gradient(160deg, #FDF6E8 0%, #F5EDDA 40%, #EDE0C4 100%)
        `,
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 80,
      }}
    >
      {/* Decorative background elements */}
      <div style={{
        position: "absolute", top: "10%", right: "5%",
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,144,26,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "15%", left: "3%",
        width: 200, height: 200, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(30,58,47,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Leaf pattern top-left */}
      <div style={{
        position: "absolute", top: 90, left: -20, fontSize: "6rem",
        opacity: 0.06, transform: "rotate(-20deg)", pointerEvents: "none",
        userSelect: "none",
      }}>🌿</div>
      <div style={{
        position: "absolute", bottom: 60, right: -10, fontSize: "8rem",
        opacity: 0.06, transform: "rotate(15deg)", pointerEvents: "none",
        userSelect: "none",
      }}>🌿</div>

      <div className="container section-pad" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
        {/* Left: Text content */}
        <div style={{ animation: "fadeInUp 0.9s ease forwards" }}>
          <div style={{
            display: "inline-block",
            background: "linear-gradient(135deg, var(--forest), var(--forest-mid))",
            color: "var(--gold-light)",
            padding: "6px 18px",
            borderRadius: 50,
            fontSize: "0.72rem",
            fontFamily: "var(--font-display)",
            letterSpacing: "0.15em",
            marginBottom: 20,
            textTransform: "uppercase",
          }}>
            Pure · Natural · Ayurvedic
          </div>

          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
            color: "var(--forest)",
            lineHeight: 1.15,
            marginBottom: 8,
            letterSpacing: "0.04em",
          }}>
            CrabVeda
          </h1>
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.4rem, 3vw, 2.1rem)",
            color: "var(--gold)",
            fontStyle: "italic",
            fontWeight: 400,
            marginBottom: 20,
          }}>
            Ayurvedic Crab Oil
          </h2>

          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.05rem",
            color: "var(--text-mid)",
            lineHeight: 1.8,
            marginBottom: 28,
            maxWidth: 480,
          }}>
            Ancient Ayurvedic wisdom meets powerful crab extract. Relieve joint pain,
            reduce inflammation & restore natural mobility — trusted by thousands across India.
          </p>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 32 }}>
            {["Joint Pain Relief", "Reduces Inflammation", "Improves Mobility", "100% Natural"].map((tag) => (
              <span key={tag} style={{
                background: "rgba(30,58,47,0.08)",
                border: "1px solid rgba(30,58,47,0.2)",
                color: "var(--forest)",
                padding: "6px 14px",
                borderRadius: 50,
                fontSize: "0.78rem",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
              }}>
                ✓ {tag}
              </span>
            ))}
          </div>

          {/* Price + CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            <div>
              <div style={{
                fontSize: "0.78rem",
                color: "var(--text-light)",
                fontFamily: "var(--font-body)",
                letterSpacing: "0.08em",
              }}>200ml Bottle</div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.2rem",
                color: "var(--forest)",
                fontWeight: 700,
                lineHeight: 1,
              }}>
                ₹360
                <span style={{ fontSize: "0.85rem", color: "var(--text-light)", fontWeight: 400 }}>
                  {" "}incl. all taxes
                </span>
              </div>
            </div>

            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.874L.057 23.929l6.224-1.453A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.791 9.791 0 01-5.031-1.389l-.361-.214-3.741.874.946-3.638-.235-.373A9.79 9.79 0 012.182 12C2.182 6.545 6.545 2.182 12 2.182S21.818 6.545 21.818 12 17.455 21.818 12 21.818z"/>
              </svg>
              Order Now – ₹360
            </a>
          </div>

          {/* Trust indicators */}
          <div style={{
            display: "flex", gap: 24, marginTop: 32,
            borderTop: "1px solid rgba(201,144,26,0.2)",
            paddingTop: 24, flexWrap: "wrap",
          }}>
            {[
              { icon: "🇮🇳", label: "Made in India" },
              { icon: "🌿", label: "100% Natural" },
              { icon: "✅", label: "Ayurvedic Formula" },
            ].map((t) => (
              <div key={t.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: "1.2rem" }}>{t.icon}</span>
                <span style={{
                  fontSize: "0.78rem", color: "var(--text-mid)",
                  fontFamily: "var(--font-body)", fontWeight: 600,
                }}>{t.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product visual */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}>
          {/* Glow ring */}
          <div style={{
            position: "absolute",
            width: 340, height: 340,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,144,26,0.15) 0%, transparent 70%)",
            animation: "float 6s ease-in-out infinite",
          }} />

          {/* Product card */}
          <div
            className="animate-float"
            style={{
              background: "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(245,237,218,0.8))",
              borderRadius: 32,
              padding: "40px 36px",
              border: "1.5px solid rgba(201,144,26,0.3)",
              boxShadow: "0 20px 60px rgba(30,58,47,0.12), 0 4px 20px rgba(201,144,26,0.15)",
              textAlign: "center",
              position: "relative",
              maxWidth: 320,
              width: "100%",
            }}
          >
            {/* Badge */}
            <div style={{
              position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
              background: "linear-gradient(135deg, var(--gold-light), var(--gold))",
              color: "var(--forest)",
              padding: "6px 20px",
              borderRadius: 50,
              fontSize: "0.7rem",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              letterSpacing: "0.1em",
              whiteSpace: "nowrap",
              boxShadow: "0 4px 12px rgba(201,144,26,0.3)",
            }}>
              BESTSELLER
            </div>

            {/* Product emoji visual */}
            <div style={{ fontSize: "5rem", marginBottom: 16, lineHeight: 1 }}>🦀</div>
            <div style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.3rem",
              color: "var(--forest)",
              fontWeight: 700,
              marginBottom: 4,
              letterSpacing: "0.05em",
            }}>CrabVeda</div>
            <div style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1rem",
              color: "var(--gold)",
              fontStyle: "italic",
              marginBottom: 16,
            }}>Ayurvedic Crab Oil</div>

            <div style={{
              background: "linear-gradient(135deg, var(--forest), var(--forest-mid))",
              borderRadius: 12,
              padding: "14px 20px",
              marginBottom: 20,
            }}>
              <div style={{
                color: "var(--gold-light)",
                fontFamily: "var(--font-display)",
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                marginBottom: 4,
              }}>RELIEF · STRENGTH · MOBILITY</div>
              <div style={{
                color: "white",
                fontFamily: "var(--font-body)",
                fontSize: "0.82rem",
              }}>For Joint & Muscle Care</div>
            </div>

            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
              <div>
                <div style={{ fontSize: "0.7rem", color: "var(--text-light)", fontFamily: "var(--font-body)" }}>
                  200ml | 6.76 fl oz
                </div>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  color: "var(--forest)",
                  fontWeight: 700,
                }}>₹360</div>
              </div>
              <div style={{
                background: "rgba(30,58,47,0.08)",
                border: "1px solid rgba(30,58,47,0.2)",
                borderRadius: 8,
                padding: "8px 12px",
                fontSize: "0.72rem",
                color: "var(--forest)",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
              }}>
                🌿 Enriched with<br />Ayurvedic Herbs
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #home .container { grid-template-columns: 1fr !important; gap: 40px !important; }
          #home .container > div:last-child { order: -1; }
        }
      `}</style>
    </section>
  );
}
