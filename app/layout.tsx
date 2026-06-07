import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CrabVeda Ayurvedic Crab Oil – Joint & Muscle Relief | 200ml",
  description:
    "CrabVeda Ayurvedic Crab Oil relieves joint pain, reduces inflammation and improves mobility with natural crab extract & powerful Ayurvedic herbs. Order now on WhatsApp. ₹360 only.",
  keywords: [
    "crab oil",
    "ayurvedic crab oil",
    "joint pain relief oil",
    "muscle pain oil india",
    "CrabVeda",
    "natural joint oil",
    "ayurvedic oil for joints",
    "crab oil for knee pain",
    "best ayurvedic oil india",
  ],
  authors: [{ name: "CrabVeda Ayurvedic" }],
  openGraph: {
    title: "CrabVeda Ayurvedic Crab Oil – Joint & Muscle Relief",
    description:
      "Pure, natural & Ayurvedic crab oil for joint pain, inflammation & mobility. Order on WhatsApp at ₹360.",
    url: "https://www.crabveda.com",
    siteName: "CrabVeda",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CrabVeda Ayurvedic Crab Oil",
    description: "Natural joint & muscle care oil. Order on WhatsApp at ₹360.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://www.crabveda.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#8B6914" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "CrabVeda Ayurvedic Crab Oil",
              description:
                "Pure Ayurvedic crab oil for joint pain relief, reducing inflammation and improving mobility.",
              brand: { "@type": "Brand", name: "CrabVeda" },
              offers: {
                "@type": "Offer",
                priceCurrency: "INR",
                price: "360",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
