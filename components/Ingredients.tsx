"use client";
import Image from "next/image";

const ingredients = [
  { 
    name: "Crab Extract", 
    image: "/img5.png",
    icon: "🦀", 
    benefit: "Core active ingredient for joint repair & pain relief", 
    hero: true 
  },
  { name: "Mahanarayan Taila", icon: "🫙", benefit: "Ancient Ayurvedic base oil for deep penetration" },
  { name: "Ashwagandha", icon: "🌱", benefit: "Strengthens muscles, reduces fatigue & inflammation" },
  { name: "Shallaki", icon: "🌿", benefit: "Boswellia extract — clinically proven for joint health" },
  { name: "Nirgundi", icon: "🍃", benefit: "Powerful anti-inflammatory for swelling & stiffness" },
  { name: "Rasna", icon: "🌾", benefit: "Traditional herb for arthritis & rheumatic conditions" },
  { name: "Erand Mool", icon: "🌻", benefit: "Castor root for pain relief & improved circulation" },
  { name: "Devdar", icon: "🪵", benefit: "Himalayan cedar for nerve pain & muscle relaxation" },
  { name: "Guggul", icon: "💧", benefit: "Resin that reduces inflammation at a cellular level" },
  { name: "Til Taila", icon: "🌰", benefit: "Sesame oil base for deep tissue absorption" },
];

export default function Ingredients() {
  const heroIngredient = ingredients.find(i => i.hero);
  const regularIngredients = ingredients.filter(i => !i.hero);

  return (
    <section id="ingredients" className="ingredients-section">
      <div className="ingredients-container">
        
        {/* Editorial Section Header */}
        <div className="ingredients-header">
          <div className="section-mini-badge">
            <span className="badge-bullet">●</span> What&apos;s Inside
          </div>
          <h2 className="section-main-heading">Pure Ingredients</h2>
          <p className="section-context-desc">
            Sourced sustainably from nature and prepared according to traditional Ayurvedic methodologies—completely free from synthetic chemicals or fillers.
          </p>
        </div>

        {/* Dynamic Architectural Layout */}
        <div className="ingredients-layout-grid">
          
          {/* THE HERO CARD: No separate blocks. Text is layered directly ON top of the image */}
          {heroIngredient && (
            <div className="ingredient-hero-card">
              
              {/* Full-Bleed Background Image Component */}
              <Image 
                src={heroIngredient.image}
                alt={heroIngredient.name}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="hero-background-media"
                priority
              />
              
              {/* Dark Shroud Layer to ensure text is perfectly legible over the image */}
              <div className="hero-image-overlay-shroud" />

              {/* Text Panel Sitting ON Top of the Image */}
              <div className="hero-card-content-overlay">
                <div className="hero-badge-tag">Key Catalyst</div>
                <div className="hero-title-cluster">
                  <div className="hero-icon-shell">{heroIngredient.icon}</div>
                  <h3 className="hero-ingredient-name">{heroIngredient.name}</h3>
                </div>
                <p className="hero-ingredient-desc">{heroIngredient.benefit}</p>
              </div>

            </div>
          )}

          {/* MINIMALIST BOTANICAL MATRIX */}
          <div className="ingredients-sub-grid">
            {regularIngredients.map((ing, i) => (
              <div key={i} className="botanical-card">
                <div className="botanical-header">
                  <span className="botanical-icon">{ing.icon}</span>
                  <h4 className="botanical-name">{ing.name}</h4>
                </div>
                <p className="botanical-desc">{ing.benefit}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Premium Minimalistic Footer Note Block */}
        <div className="ingredients-trust-banner">
          <div className="banner-content">
            <span className="banner-icon">🌿</span>
            <div className="banner-text">
              <h4>Enriched with secondary therapeutic herbs</h4>
              <p>All items undergo strict quality controls to ensure absolute structural potency and consumer purity.</p>
            </div>
          </div>
        </div>

      </div>

      <style jsx global>{`
        .ingredients-section {
          --forest: #1E3A2F;
          --gold: #C9901A;
          --cream: #FAF7F2;
          --text-dark: #2B3631;
          --text-muted: #5C6661;

          background-color: #F4EFE6;
          padding: 120px 24px;
          position: relative;
          box-sizing: border-box;
        }

        .ingredients-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .ingredients-header {
          text-align: center;
          margin-bottom: 64px;
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
          max-width: 540px;
        }

        .ingredients-layout-grid {
          display: flex;
          flex-direction: column;
          gap: 32px;
          margin-bottom: 48px;
        }

        /* --- True Text-ON-Image Single Container Design --- */
        .ingredient-hero-card {
          position: relative;
          width: 100%;
          min-height: 440px; /* Great cinematic canvas height */
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: flex-end; /* Pushes content down elegantly, or change to center/flex-start depending on framing */
          box-shadow: 0 20px 40px rgba(30, 58, 47, 0.12);
        }

        .hero-background-media {
          object-fit: cover;
          object-position: center center;
          z-index: 1;
        }

        /* Ambient shroud to protect text readability on all viewports */
        .hero-image-overlay-shroud {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10, 24, 18, 0.95) 0%, rgba(10, 24, 18, 0.4) 60%, rgba(10, 24, 18, 0.1) 100%);
          z-index: 2;
        }

        /* Content block floating safely above the background graphic */
        .hero-card-content-overlay {
          position: relative;
          z-index: 3;
          padding: 60px 48px;
          color: #FFFFFF;
          max-width: 800px;
          box-sizing: border-box;
        }

        .hero-badge-tag {
          display: inline-block;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 6px 14px;
          border-radius: 100px;
          font-size: 0.68rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--gold);
          margin-bottom: 20px;
        }

        .hero-title-cluster {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 12px;
        }

        .hero-icon-shell {
          font-size: 2.8rem;
          line-height: 1;
        }

        .hero-ingredient-name {
          font-family: var(--font-display), serif;
          font-size: 2.4rem;
          font-weight: 700;
          margin: 0;
          letter-spacing: 0.01em;
        }

        .hero-ingredient-desc {
          font-family: var(--font-body), sans-serif;
          font-size: 1.15rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
        }

        /* --- Supporting Herb Matrix Blocks --- */
        .ingredients-sub-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .botanical-card {
          background: #FFFFFF;
          border: 1px solid rgba(30, 58, 47, 0.03);
          border-radius: 16px;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          box-shadow: 0 4px 15px rgba(30, 58, 47, 0.01);
          transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
        }

        .botanical-card:hover {
          transform: translateY(-2px);
          border-color: rgba(201, 144, 26, 0.3);
          box-shadow: 0 10px 25px rgba(30, 58, 47, 0.04);
        }

        .botanical-header {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .botanical-icon {
          font-size: 1.3rem;
          line-height: 1;
        }

        .botanical-name {
          font-family: var(--font-heading), serif;
          font-size: 1rem;
          font-weight: 700;
          color: var(--forest);
          margin: 0;
        }

        .botanical-desc {
          font-family: var(--font-body), sans-serif;
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin: 0;
        }

        .ingredients-trust-banner {
          background: #FFFFFF;
          border-radius: 16px;
          padding: 24px 32px;
          border: 1px solid rgba(30, 58, 47, 0.04);
          box-shadow: 0 10px 30px rgba(0,0,0,0.02);
        }

        .banner-content {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .banner-icon {
          font-size: 1.8rem;
          line-height: 1;
        }

        .banner-text h4 {
          font-family: var(--font-heading), serif;
          font-size: 1rem;
          color: var(--forest);
          margin: 0 0 2px 0;
          font-weight: 600;
        }

        .banner-text p {
          font-family: var(--font-body), sans-serif;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin: 0;
        }

        /* ==========================================================================
           RESPONSIVE HANDLERS
           ========================================================================== */
        @media (max-width: 968px) {
          .ingredients-sub-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .ingredient-hero-card {
            min-height: 380px;
          }

          .hero-card-content-overlay {
            padding: 40px 32px;
          }

          .hero-ingredient-name {
            font-size: 2rem;
          }
        }

        @media (max-width: 600px) {
          .ingredients-section {
            padding: 80px 16px;
          }

          .ingredients-header {
            margin-bottom: 40px;
          }

          .ingredient-hero-card {
            min-height: 340px;
          }

          .hero-card-content-overlay {
            padding: 32px 20px;
          }

          .hero-title-cluster {
            gap: 12px;
          }

          .hero-icon-shell {
            font-size: 2.4rem;
          }

          .hero-ingredient-name {
            font-size: 1.75rem;
          }

          .hero-ingredient-desc {
            font-size: 1rem;
          }

          .ingredients-sub-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .banner-content {
            flex-direction: column;
            text-align: center;
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
}