import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
// Import našej novej GDPR stránky
import Gdpr from "@/components/sections/Gdpr";

// Pôvodný obsah tvojej hlavnej stránky zabalíme do jedného bloku
const MainPage = () => (
  <>
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
  </>
);

function App() {
  return (
    // Pridáme smerovač, ktorý určuje, čo sa zobrazí na akej adrese
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/gdpr" element={<Gdpr />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
