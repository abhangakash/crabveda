"use client";

const testimonials = [
  {
    name: "Ramesh Patil",
    location: "Pune, Maharashtra",
    rating: 5,
    text: "I have been suffering from knee pain for 5 years. After using CrabVeda for just 3 weeks, the difference is unbelievable. I can walk without pain now. Highly recommended!",
    initials: "RP",
  },
  {
    name: "Sunita Deshpande",
    location: "Nashik, Maharashtra",
    rating: 5,
    text: "My husband has severe arthritis. We tried many oils but nothing worked as well as CrabVeda. The relief is fast and long-lasting. Bahut accha product hai!",
    initials: "SD",
  },
  {
    name: "Anil Sharma",
    location: "Mumbai, Maharashtra",
    rating: 5,
    text: "As a gym trainer, muscle soreness is a daily issue. CrabVeda Crab Oil has become my go-to recovery product. Natural, effective and smells great too.",
    initials: "AS",
  },
  {
    name: "Meena Joshi",
    location: "Kolhapur, Maharashtra",
    rating: 5,
    text: "My mother-in-law was unable to move her shoulder properly. After regular use of CrabVeda oil, her mobility has improved so much. We ordered 2 more bottles!",
    initials: "MJ",
  },
  {
    name: "Vijay Kulkarni",
    location: "Aurangabad, Maharashtra",
    rating: 5,
    text: "Completely Ayurvedic, no side effects. Been using it for back pain and it is working wonderfully. The ordering process through WhatsApp is also very easy.",
    initials: "VK",
  },
  {
    name: "Priya Naik",
    location: "Goa",
    rating: 5,
    text: "Excellent product! My father-in-law is 72 years old and has joint problems. This oil has given him so much relief. Will definitely buy again.",
    initials: "PN",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="star-rating-row">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="vector-star">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        
        {/* Section Header */}
        <div className="testimonials-header">
          <div className="section-mini-badge">
            <span className="badge-bullet">●</span> Real Stories
          </div>
          <h2 className="section-main-heading">Trusted Clinical Relief</h2>
          <p className="section-context-desc">
            Discover how thousands of individuals across India recovered their mobility and embraced a life free of joint discomfort.
          </p>
        </div>

        {/* Minimal High-Trust Metrics Bar */}
        <div className="metrics-dashboard-bar">
          {[
            { stat: "5000+", label: "Verified Users" },
            { stat: "4.9★", label: "Average Rating" },
            { stat: "98%", label: "Recovery Rate" },
          ].map((s, index) => (
            <div key={index} className="metric-pill-card">
              <div className="metric-number-display">{s.stat}</div>
              <div className="metric-label-text">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Modern Cascading Column Masonry Grid */}
        <div className="testimonials-masonry-stream">
          {testimonials.map((t, i) => (
            <div key={i} className="editorial-testimonial-card">
              
              {/* Subtle Elegant Watermark Quote Graphic */}
              <div className="quote-icon-watermark">“</div>

              <div className="testimonial-profile-row">
                <div className="minimal-avatar-initials">
                  {t.initials}
                </div>
                <div className="profile-identity-meta">
                  <h4 className="user-name-text">{t.name}</h4>
                  <span className="user-location-label">
                    <span className="geo-dot">📍</span> {t.location}
                  </span>
                </div>
              </div>

              <Stars count={t.rating} />

              <p className="user-testimonial-quote">
                &ldquo;{t.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-section {
          --forest: #1E3A2F;
          --gold: #C9901A;
          --bg-cream: #FAF7F2;
          --text-dark: #2B3631;
          --text-muted: #5C6661;

          background: linear-gradient(180deg, #FDF6E8 0%, var(--bg-cream) 100%);
          padding: 120px 24px;
          position: relative;
          box-sizing: border-box;
        }

        .testimonials-container {
          max-width: 1140px;
          margin: 0 auto;
          width: 100%;
        }

        .testimonials-header {
          text-align: center;
          margin-bottom: 56px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .section-mini-badge {
          display: inline-flex;
          align-items: center;
          background: #FFFFFF;
          color: var(--gold);
          padding: 6px 14px;
          border-radius: 100px;
          font-family: var(--font-body), sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
          border: 1px solid rgba(201, 144, 26, 0.15);
          margin-bottom: 16px;
        }

        .badge-bullet {
          color: var(--forest);
          margin-right: 6px;
          font-size: 0.6rem;
        }

        .section-main-heading {
          font-family: var(--font-display), serif;
          font-size: clamp(2.2rem, 4vw, 2.8rem);
          color: var(--forest);
          margin: 0 0 16px 0;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .section-context-desc {
          font-family: var(--font-body), sans-serif;
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin: 0;
          max-width: 520px;
        }

        /* --- Metrics Bar Dashboard Rules --- */
        .metrics-dashboard-bar {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 64px;
        }

        .metric-pill-card {
          background: #FFFFFF;
          border: 1px solid rgba(30, 58, 47, 0.03);
          border-radius: 16px;
          padding: 24px 20px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(30, 58, 47, 0.01);
        }

        .metric-number-display {
          font-family: var(--font-display), serif;
          font-size: clamp(1.8rem, 3.5vw, 2.4rem);
          color: var(--forest);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 4px;
        }

        .metric-label-text {
          font-family: var(--font-body), sans-serif;
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        /* --- Testimonial Masonry Engine Layout --- */
        .testimonials-masonry-stream {
          columns: 3;
          column-gap: 24px;
          width: 100%;
        }

        .editorial-testimonial-card {
          break-inside: avoid;
          display: inline-block;
          width: 100%;
          background: #FFFFFF;
          border: 1px solid rgba(30, 58, 47, 0.04);
          border-radius: 20px;
          padding: 32px 28px;
          margin-bottom: 24px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.01);
          box-sizing: border-box;
          transition: all 0.3s ease;
        }

        .editorial-testimonial-card:hover {
          border-color: rgba(201, 144, 26, 0.25);
          box-shadow: 0 12px 30px rgba(30, 58, 47, 0.05);
          transform: translateY(-2px);
        }

        .quote-icon-watermark {
          position: absolute;
          top: -10px;
          right: 20px;
          font-family: serif;
          font-size: 6rem;
          color: rgba(201, 144, 26, 0.04);
          user-select: none;
          pointer-events: none;
        }

        .testimonial-profile-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }

        .minimal-avatar-initials {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: rgba(30, 58, 47, 0.04);
          border: 1px solid rgba(30, 58, 47, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading), sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--forest);
          letter-spacing: 0.02em;
          flex-shrink: 0;
        }

        .profile-identity-meta {
          display: flex;
          flex-direction: column;
        }

        .user-name-text {
          font-family: var(--font-heading), serif;
          font-size: 1rem;
          font-weight: 700;
          color: var(--forest);
          margin: 0 0 2px 0;
        }

        .user-location-label {
          font-family: var(--font-body), sans-serif;
          font-size: 0.78rem;
          color: var(--text-muted);
          display: inline-flex;
          align-items: center;
        }

        .geo-dot {
          font-size: 0.85rem;
          margin-right: 3px;
        }

        .star-rating-row {
          display: flex;
          gap: 3px;
          margin-bottom: 14px;
        }

        .vector-star {
          color: var(--gold);
          font-size: 0.9rem;
          line-height: 1;
        }

        .user-testimonial-quote {
          font-family: var(--font-body), sans-serif;
          font-size: 0.9rem;
          color: var(--text-dark);
          line-height: 1.65;
          margin: 0;
        }

        /* ==========================================================================
           RESPONSIVE RE-FLOW SYSTEM (Adapting Columns Seamlessly)
           ========================================================================== */
        @media (max-width: 992px) {
          .testimonials-masonry-stream {
            columns: 2; /* Drops elegantly to 2 columns on tablets */
          }
        }

        @media (max-width: 680px) {
          .testimonials-section {
            padding: 80px 16px;
          }

          .testimonials-header {
            margin-bottom: 40px;
          }

          /* Metrics Dashboard switches to horizontal swipe track to reduce height footprint */
          .metrics-dashboard-bar {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 12px;
            margin-bottom: 40px;
            padding-bottom: 8px;
          }
          
          .metrics-dashboard-bar::-webkit-scrollbar {
            display: none;
          }

          .metric-pill-card {
            flex: 0 0 70%;
            scroll-snap-align: start;
            padding: 20px 16px;
          }

          /* Convert masonry elements back into clean single column cards */
          .testimonials-masonry-stream {
            columns: 1;
          }

          .editorial-testimonial-card {
            padding: 24px 20px;
            margin-bottom: 16px;
          }
        }
      `}</style>
    </section>
  );
}