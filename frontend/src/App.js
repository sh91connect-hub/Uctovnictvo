import "@/App.css";
import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/Services";
import BenefitsSection from "@/components/sections/Benefits";
import ProcessSection from "@/components/sections/Process";
import AboutSection from "@/components/sections/About";
import PricingSection from "@/components/sections/Pricing";
import FAQSection from "@/components/sections/FAQ";
import ContactSection from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import MobileStickyCTA from "@/components/sections/MobileStickyCTA";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="pb-16 md:pb-0">
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <ProcessSection />
        <AboutSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}

export default App;
