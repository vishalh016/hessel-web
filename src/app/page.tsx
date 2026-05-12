import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import OrbitalQuote from "@/components/OrbitalQuote";
import Packages from "@/components/Packages";
import SignatureExperiences from "@/components/SignatureExperiences";
import MenuBuilder from "@/components/MenuBuilder";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AdminConsole from "@/components/AdminConsole";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ValueProposition />
      <OrbitalQuote />
      <Packages />
      <SignatureExperiences />
      <MenuBuilder />
      <Testimonials />
      <Gallery />
      <ContactSection />
      <Footer />
      <AdminConsole />
    </main>
  );
}
