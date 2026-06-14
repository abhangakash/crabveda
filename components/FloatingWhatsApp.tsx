"use client";

const WHATSAPP_URL =
  "https://wa.me/919921297518?text=Hello%20CrabVeda!%20I%20want%20to%20order%201%20bottle%20of%20CrabVeda%20Ayurvedic%20Crab%20Oil%20(200ml%20%E2%82%B9360).%20Please%20confirm%20my%20order.";

export default function FloatingWhatsApp() {
  return (
    <>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="premium-whatsapp-fab"
      >
        {/* Subtle, premium breathing ambient glow effect */}
        <span className="fab-glow-pulse" />
        
        {/* Content Wrapper */}
        <div className="fab-content">
          <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.874L.057 23.929l6.224-1.453A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.791 9.791 0 01-5.031-1.389l-.361-.214-3.741.874.946-3.638-.235-.373A9.79 9.79 0 012.182 12C2.182 6.545 6.545 2.182 12 2.182S21.818 6.545 21.818 12 17.455 21.818 12 21.818z"/>
          </svg>
          <span className="fab-text">Order Now <span className="text-price">· ₹360</span></span>
        </div>
      </a>

      <style>{`
        .premium-whatsapp-fab {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 9999;
          text-decoration: none;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .fab-content {
          display: flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #1ebea5, #075e54);
          padding: 14px 22px;
          border-radius: 100px;
          color: #ffffff;
          font-family: var(--font-body), -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          box-shadow: 0 8px 24px rgba(7, 94, 84, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.15);
          position: relative;
          z-index: 2;
        }

        .whatsapp-icon {
          width: 20px;
          height: 20px;
        }

        .text-price {
          color: #e2f8f5;
          opacity: 0.9;
        }

        /* Ambient Breathing Pulse */
        .fab-glow-pulse {
          position: absolute;
          inset: -4px;
          border-radius: 100px;
          background: #1ebea5;
          opacity: 0;
          z-index: 1;
          animation: ambient-breath 2.5s infinite ease-in-out;
        }

        /* Hover Mechanics */
        .premium-whatsapp-fab:hover {
          transform: translateY(-4px) scale(1.02);
        }
        
        .premium-whatsapp-fab:hover .fab-content {
          box-shadow: 0 12px 32px rgba(7, 94, 84, 0.45);
          background: linear-gradient(135deg, #22caaf, #0b6b60);
        }

        @keyframes ambient-breath {
          0% { transform: scale(0.96); opacity: 0; }
          50% { opacity: 0.25; }
          100% { transform: scale(1.06); opacity: 0; }
        }

        /* ==========================================================================
           MOBILE ADJUSTMENT: Clutter-Free, Pure Floating Button
           ========================================================================== */
        @media (max-width: 640px) {
          .premium-whatsapp-fab {
            bottom: 24px;
            right: 20px;
          }

          /* Changes from a wide text pill to a perfect premium touch circle */
          .fab-content {
            padding: 16px;
            border-radius: 50%;
          }

          .whatsapp-icon {
            width: 24px;
            height: 24px;
          }

          .fab-text {
            display: none; /* Removes text clutter instantly on mobile devices */
          }

          .fab-glow-pulse {
            border-radius: 50%;
            inset: -2px;
          }
        }
      `}</style>
    </>
  );
}