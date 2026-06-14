"use client";
import Image from "next/image";

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

        {/* Dynamic Split Layout: Media Box + Masonry Stream */}
        <div className="testimonials-split-layout">
          
          {/* Left Column: Your /img6.png Feature Showcase Card */}
          <div className="testimonials-media-showcase">
            <div className="media-sticky-wrapper">
              <Image 
                src="/img8.png"
                alt="CrabVeda User Transformation and Relief"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="testimonial-showcase-image"
                priority
              />
              <div className="media-vignette-overlay" />
              <div className="media-floating-caption">
                <h4>Clinically Tested Efficacy</h4>
                <p>100% natural compounds designed for rapid, target-deep absorption.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Cascading Review Stream */}
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
      </div>

      <style jsx global>{`
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
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .testimonials-header {
          text-align: center;
          margin-bottom: 48px;
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
          margin-bottom: 56px;
        }

        .metric-pill-card {
          background: #FFFFFF;
          border: 1px solid rgba(30, 58, 47, 0.03);
          border-radius: 16px;
          padding: 20px;
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

        /* --- Split Layout Engine Container --- */
        .testimonials-split-layout {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr; /* 42% / 58% dynamic space balance */
          gap: 40px;
          align-items: flex-start;
        }

        /* --- Image Showcase Card Styling (/img6.png) --- */
        .testimonials-media-showcase {
          width: 100%;
        }

        .media-sticky-wrapper {
          position: relative;
          width: 100%;
          height: 560px; /* Expansive architectural viewport portrait container */
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(30, 58, 47, 0.08);
        }

        .testimonial-showcase-image {
          object-fit: cover;
          object-position: center center;
        }

        .media-vignette-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(14, 40, 32, 0.9) 0%, rgba(14, 40, 32, 0.2) 50%, transparent 100%);
          z-index: 2;
        }

        .media-floating-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 32px;
          box-sizing: border-box;
          color: #FFFFFF;
          z-index: 3;
        }

        .media-floating-caption h4 {
          font-family: var(--font-heading), serif;
          font-size: 1.25rem;
          margin: 0 0 6px 0;
          color: var(--gold);
        }

        .media-floating-caption p {
          font-family: var(--font-body), sans-serif;
          font-size: 0.9rem;
          line-height: 1.5;
          margin: 0;
          opacity: 0.9;
        }

        /* --- Testimonial Masonry Column Stream --- */
        .testimonials-masonry-stream {
          columns: 2; /* Perfectly matches split view width specs */
          column-gap: 20px;
          width: 100%;
        }

        .editorial-testimonial-card {
          break-inside: avoid;
          display: inline-block;
          width: 100%;
          background: #FFFFFF;
          border: 1px solid rgba(30, 58, 47, 0.04);
          border-radius: 20px;
          padding: 28px 24px;
          margin-bottom: 20px;
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
          gap: 12px;
          margin-bottom: 16px;
        }

        .minimal-avatar-initials {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(30, 58, 47, 0.04);
          border: 1px solid rgba(30, 58, 47, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading), sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--forest);
          flex-shrink: 0;
        }

        .profile-identity-meta {
          display: flex;
          flex-direction: column;
        }

        .user-name-text {
          font-family: var(--font-heading), serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--forest);
          margin: 0 0 2px 0;
        }

        .user-location-label {
          font-family: var(--font-body), sans-serif;
          font-size: 0.75rem;
          color: var(--text-muted);
          display: inline-flex;
          align-items: center;
        }

        .geo-dot {
          font-size: 0.8rem;
          margin-right: 3px;
        }

        .star-rating-row {
          display: flex;
          gap: 3px;
          margin-bottom: 12px;
        }

        .vector-star {
          color: var(--gold);
          font-size: 0.85rem;
          line-height: 1;
        }

        .user-testimonial-quote {
          font-family: var(--font-body), sans-serif;
          font-size: 0.88rem;
          color: var(--text-dark);
          line-height: 1.6;
          margin: 0;
        }

        /* ==========================================================================
           RESPONSIVE RE-FLOW SYSTEM
           ========================================================================== */
        @media (max-width: 1024px) {
          .testimonials-split-layout {
            grid-template-columns: 1fr; /* Stacks image and stream vertically */
            gap: 32px;
          }

          .media-sticky-wrapper {
            height: 380px; /* Adjust portrait frame to clean landscape banner on tablets */
          }

          .testimonials-masonry-stream {
            columns: 2;
          }
        }

        @media (max-width: 680px) {
          .testimonials-section {
            padding: 80px 16px;
          }

          .testimonials-header {
            margin-bottom: 32px;
          }

          .metrics-dashboard-bar {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 12px;
            margin-bottom: 32px;
            padding-bottom: 8px;
          }
          
          .metrics-dashboard-bar::-webkit-scrollbar {
            display: none;
          }

          .metric-pill-card {
            flex: 0 0 75%;
            scroll-snap-align: start;
            padding: 16px;
          }

          .media-sticky-wrapper {
            height: 260px; /* Compact presentation frame on ultra-narrow phones */
            border-radius: 16px;
          }

          .media-floating-caption {
            padding: 20px;
          }

          .testimonials-masonry-stream {
            columns: 1; /* Clean single-row scrolling architecture */
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