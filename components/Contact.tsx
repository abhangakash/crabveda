"use client";

const WHATSAPP_URL =
  "https://wa.me/919921297518?text=Hello%20CrabVeda!%20I%20have%20a%20question.";

const contacts = [
  {
    icon: "📞",
    label: "Phone / WhatsApp",
    value: "+91 99212 97518",
    href: "tel:+919921297518",
  },
  {
    icon: "📧",
    label: "Email",
    value: "crabveda@gmail.com",
    href: "mailto:crabveda@gmail.com",
  },
  {
    icon: "📍",
    label: "Marketed By",
    value: "CrabVeda Ayurvedic, India",
    href: null,
  },
];

const socials = [
  {
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
    label: "Instagram",
    href: "https://instagram.com/crabveda_ayurvedic",
    color: "#E1306C",
  },
  {
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    label: "Facebook",
    href: "https://facebook.com/crabveda",
    color: "#1877F2",
  },
  {
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    label: "YouTube",
    href: "https://youtube.com/@crabveda",
    color: "#FF0000",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-pad"
      style={{
        background: "linear-gradient(180deg, #F5EDDA 0%, #EDE0C4 100%)",
        position: "relative",
      }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.75rem",
            color: "var(--gold)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}>
            Get In Touch
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            color: "var(--forest)",
            marginBottom: 12,
            letterSpacing: "0.04em",
          }}>
            Contact Us
          </h2>
          <div className="gold-divider" />
          <p style={{
            fontFamily: "var(--font-body)",
            color: "var(--text-mid)",
            fontSize: "1rem",
            maxWidth: 440,
            margin: "16px auto 0",
            lineHeight: 1.75,
          }}>
            Have questions? We&apos;re here to help. Reach out to us anytime.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          alignItems: "start",
        }}>
          {/* Contact details */}
          <div>
            <h3 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.2rem",
              color: "var(--forest)",
              marginBottom: 24,
              fontWeight: 700,
            }}>
              Reach Us Directly
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {contacts.map((c) => (
                <div key={c.label} style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "center",
                  background: "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(253,246,232,0.7))",
                  border: "1px solid rgba(201,144,26,0.2)",
                  borderRadius: 14,
                  padding: "18px 20px",
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: "linear-gradient(135deg, var(--forest), var(--forest-mid))",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.3rem", flexShrink: 0,
                  }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.75rem",
                      color: "var(--text-light)",
                      marginBottom: 2,
                    }}>{c.label}</div>
                    {c.href ? (
                      <a href={c.href} style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                        color: "var(--forest)",
                        textDecoration: "none",
                        fontSize: "0.95rem",
                      }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--gold)")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--forest)")}
                      >
                        {c.value}
                      </a>
                    ) : (
                      <div style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                        color: "var(--forest)",
                        fontSize: "0.95rem",
                      }}>{c.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div style={{ marginTop: 28 }}>
              <div style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.82rem",
                color: "var(--text-light)",
                marginBottom: 14,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}>
                Follow Us
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    style={{
                      width: 44, height: 44, borderRadius: 12,
                      background: s.color,
                      color: "white",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.3s ease",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 6px 20px ${s.color}55`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* WhatsApp order card */}
          <div style={{
            background: "linear-gradient(145deg, var(--forest), var(--forest-mid))",
            borderRadius: 24,
            padding: "40px 32px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: -40, right: -40,
              width: 160, height: 160, borderRadius: "50%",
              border: "1px solid rgba(201,144,26,0.15)",
            }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>💬</div>
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.3rem",
                color: "white",
                marginBottom: 8,
                letterSpacing: "0.04em",
              }}>
                Quick Order via WhatsApp
              </h3>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.88rem",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.7,
                marginBottom: 24,
              }}>
                Simply tap the button below. A pre-filled message will open in WhatsApp.
                Just hit send and we&apos;ll confirm your order quickly!
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ width: "100%", justifyContent: "center", marginBottom: 16 }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.874L.057 23.929l6.224-1.453A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.791 9.791 0 01-5.031-1.389l-.361-.214-3.741.874.946-3.638-.235-.373A9.79 9.79 0 012.182 12C2.182 6.545 6.545 2.182 12 2.182S21.818 6.545 21.818 12 17.455 21.818 12 21.818z"/>
                </svg>
                Chat on WhatsApp
              </a>

              <div style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.78rem",
                color: "rgba(255,255,255,0.4)",
              }}>
                📞 +91 99212 97518
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
