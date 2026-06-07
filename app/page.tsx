import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Ingredients from "@/components/Ingredients";
import HowToUse from "@/components/HowToUse";
import Testimonials from "@/components/Testimonials";
import OrderSection from "@/components/OrderSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Ingredients />
        <HowToUse />
        <Testimonials />
        <OrderSection />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
