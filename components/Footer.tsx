"use client";

const WHATSAPP_URL =
  "https://wa.me/919921297518?text=Hello%20CrabVeda!%20I%20want%20to%20order%201%20bottle%20of%20CrabVeda%20Ayurvedic%20Crab%20Oil%20(200ml%20%E2%82%B9360).%20Please%20confirm%20my%20order.";

export default function Footer() {
  return (
    <footer style={{
      background: "#0A1A0F",
      color: "rgba(255,255,255,0.6)",
      padding: "48px 24px 28px",
      borderTop: "1px solid rgba(201,144,26,0.2)",
    }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: 40,
          marginBottom: 40,
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 40, height: 40, borderRadius: "50%",
                background: "linear-gradient(135deg, #E8B84B, #C9901A)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.2rem",
              }}>🦀</div>
              <div>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  color: "white",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  lineHeight: 1.1,
                }}>CrabVeda</div>
                <div style={{
                  fontSize: "0.6rem",
                  color: "var(--gold)",
                  letterSpacing: "0.15em",
                  fontFamily: "var(--font-display)",
                }}>AYURVEDIC</div>
              </div>
            </div>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.85rem",
              lineHeight: 1.8,
              maxWidth: 280,
              marginBottom: 20,
            }}>
              A unique Ayurvedic formulation with natural crab extract and powerful herbs
              for joint pain relief, inflammation reduction and improved mobility.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: "1rem" }}>🇮🇳</span>
              <span style={{ fontSize: "0.8rem", fontFamily: "var(--font-body)" }}>
                Made with tradition. Backed by nature.
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.8rem",
              color: "var(--gold-light)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}>
              Quick Links
            </h4>
            {["#home", "#benefits", "#ingredients", "#how-to-use", "#testimonials", "#contact"].map((href) => (
              <div key={href} style={{ marginBottom: 10 }}>
                <a href={href} style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  textTransform: "capitalize",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--gold-light)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
                >
                  {href.replace("#", "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                </a>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.8rem",
              color: "var(--gold-light)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}>
              Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a href="tel:+919921297518" style={{
                color: "rgba(255,255,255,0.55)",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontFamily: "var(--font-body)",
              }}>📞 +91 99212 97518</a>
              <a href="mailto:crabveda@gmail.com" style={{
                color: "rgba(255,255,255,0.55)",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontFamily: "var(--font-body)",
              }}>📧 crabveda@gmail.com</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{
                color: "#25D366",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
              }}>💬 Order on WhatsApp</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          paddingTop: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}>
          <div style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.78rem",
          }}>
            © {new Date().getFullYear()} CrabVeda Ayurvedic. All rights reserved.
          </div>
          <div style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.78rem",
            color: "rgba(255,255,255,0.35)",
          }}>
            Marketed by CrabVeda Ayurvedic · India · Batch: CV0001
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer .container > div:first-child { grid-template-columns: 1fr !important; gap: 32px !important; }
          footer .container > div:last-child { flex-direction: column; text-align: center; }
        }
      `}</style>
    </footer>
  );
}
