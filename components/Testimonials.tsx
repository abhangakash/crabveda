"use client";

const testimonials = [
  {
    name: "Ramesh Patil",
    location: "Pune, Maharashtra",
    rating: 5,
    text: "I have been suffering from knee pain for 5 years. After using CrabVeda for just 3 weeks, the difference is unbelievable. I can walk without pain now. Highly recommended!",
    avatar: "👨‍🦳",
  },
  {
    name: "Sunita Deshpande",
    location: "Nashik, Maharashtra",
    rating: 5,
    text: "My husband has severe arthritis. We tried many oils but nothing worked as well as CrabVeda. The relief is fast and long-lasting. Bahut accha product hai!",
    avatar: "👩",
  },
  {
    name: "Anil Sharma",
    location: "Mumbai, Maharashtra",
    rating: 5,
    text: "As a gym trainer, muscle soreness is a daily issue. CrabVeda Crab Oil has become my go-to recovery product. Natural, effective and smells great too.",
    avatar: "👨",
  },
  {
    name: "Meena Joshi",
    location: "Kolhapur, Maharashtra",
    rating: 5,
    text: "My mother-in-law was unable to move her shoulder properly. After regular use of CrabVeda oil, her mobility has improved so much. We ordered 2 more bottles!",
    avatar: "👩‍🦱",
  },
  {
    name: "Vijay Kulkarni",
    location: "Aurangabad, Maharashtra",
    rating: 5,
    text: "Completely Ayurvedic, no side effects. Been using it for back pain and it is working wonderfully. The ordering process through WhatsApp is also very easy.",
    avatar: "👨‍🦲",
  },
  {
    name: "Priya Naik",
    location: "Goa",
    rating: 5,
    text: "Excellent product! My father-in-law is 72 years old and has joint problems. This oil has given him so much relief. Will definitely buy again.",
    avatar: "👩‍🦰",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "var(--gold)", fontSize: "0.9rem" }}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-pad"
      style={{
        background: `
          radial-gradient(ellipse at 80% 20%, rgba(201,144,26,0.07) 0%, transparent 50%),
          linear-gradient(180deg, #FDF6E8 0%, #F5EDDA 100%)
        `,
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
            Real Stories
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            color: "var(--forest)",
            marginBottom: 12,
            letterSpacing: "0.04em",
          }}>
            Customer Testimonials
          </h2>
          <div className="gold-divider" />
          <p style={{
            fontFamily: "var(--font-body)",
            color: "var(--text-mid)",
            fontSize: "1rem",
            maxWidth: 460,
            margin: "16px auto 0",
            lineHeight: 1.75,
          }}>
            Thousands of happy customers across India trust CrabVeda for daily relief.
          </p>
        </div>

        {/* Stats row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
          marginBottom: 48,
          textAlign: "center",
        }}>
          {[
            { stat: "5000+", label: "Happy Customers" },
            { stat: "4.9★", label: "Average Rating" },
            { stat: "98%", label: "Satisfaction Rate" },
          ].map((s) => (
            <div key={s.label} style={{
              background: "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(245,237,218,0.6))",
              border: "1px solid rgba(201,144,26,0.2)",
              borderRadius: 16,
              padding: "24px 16px",
            }}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                color: "var(--forest)",
                fontWeight: 700,
                marginBottom: 4,
              }}>{s.stat}</div>
              <div style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.82rem",
                color: "var(--text-light)",
              }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20,
        }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              background: "linear-gradient(145deg, rgba(255,255,255,0.95), rgba(253,246,232,0.8))",
              border: "1px solid rgba(201,144,26,0.18)",
              borderRadius: 20,
              padding: "24px 22px",
              position: "relative",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translateY(-3px)";
              el.style.boxShadow = "0 10px 32px rgba(30,58,47,0.1)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
            >
              {/* Quote mark */}
              <div style={{
                position: "absolute", top: 16, right: 20,
                fontFamily: "serif",
                fontSize: "3.5rem",
                color: "rgba(201,144,26,0.12)",
                lineHeight: 1,
              }}>&ldquo;</div>

              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 14 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--forest), var(--forest-mid))",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.5rem",
                  flexShrink: 0,
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    color: "var(--forest)",
                    fontSize: "0.95rem",
                    marginBottom: 2,
                  }}>{t.name}</div>
                  <div style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    color: "var(--text-light)",
                  }}>📍 {t.location}</div>
                </div>
              </div>

              <Stars count={t.rating} />

              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.88rem",
                color: "var(--text-mid)",
                lineHeight: 1.75,
                marginTop: 12,
                fontStyle: "italic",
              }}>
                &ldquo;{t.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
