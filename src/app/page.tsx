import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import QuickQuote from "@/components/QuickQuote";
import Packages from "@/components/Packages";
import SignatureExperiences from "@/components/SignatureExperiences";
import MenuBuilder from "@/components/MenuBuilder";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ValueProposition />
      <QuickQuote />
      <Packages />
      <SignatureExperiences />
      <MenuBuilder />
      <Testimonials />
      <Gallery />
      <ContactSection />
      <Footer />
    </main>
  );
}
