import "@/App.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import axios from "axios";
import {
  Phone,
  Mail,
  MapPin,
  Calculator,
  Building2,
  Users,
  TrendingUp,
  CheckCircle2,
  Shield,
  Clock,
  FileText,
  MessageSquare,
  ChevronDown,
  Menu,
  X,
  Send,
  Award,
  Briefcase,
  HeadphonesIcon,
} from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Služby", to: "services" },
    { name: "Výhody", to: "benefits" },
    { name: "O mne", to: "about" },
    { name: "Cenník", to: "pricing" },
    { name: "FAQ", to: "faq" },
    { name: "Kontakt", to: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glassmorphism" data-testid="header">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
            <div className="flex items-center gap-2" data-testid="logo">
              <div className="w-10 h-10 bg-emerald-700 rounded-lg flex items-center justify-center">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <p className="font-bold text-emerald-800 text-lg leading-tight">Účtovníctvo</p>
                <p className="text-xs text-slate-500">Ing. Zuzana Jedináková</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" data-testid="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-slate-600 hover:text-emerald-700 font-medium cursor-pointer transition-colors"
                data-testid={`nav-${link.to}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+421904295670"
              className="btn-outline flex items-center gap-2 !py-2 !px-4"
              data-testid="call-btn"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">Zavolajte</span>
            </a>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="btn-primary flex items-center gap-2 !py-2 !px-4 cursor-pointer"
              data-testid="inquiry-btn"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Dopyt</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="mobile-menu-btn"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-4 border-t border-slate-200"
            data-testid="mobile-nav"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-slate-600 hover:text-emerald-700 font-medium py-2 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-3 pt-3">
                <a
                  href="tel:+421904295670"
                  className="btn-outline flex items-center justify-center gap-2 flex-1"
                >
                  <Phone className="w-4 h-4" /> Zavolajte
                </a>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="btn-primary flex items-center justify-center gap-2 flex-1 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageSquare className="w-4 h-4" /> Dopyt
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

// Hero Section
const HeroSection = () => {
  const benefits = [
    "Prax od roku 2004",
    "Kompletné ekonomické služby",
    "Osobný prístup ku každému klientovi",
  ];

  return (
    <section id="hero" className="pt-20 md:pt-24" data-testid="hero-section">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-12">
          {/* Left Content */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                Profesionálne účtovníctvo
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Účtovníctvo s
                <span className="text-emerald-700"> osobným prístupom</span>
              </h1>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Kompletné ekonomické služby pre fyzické a právnické osoby. Od založenia firmy až po daňové priznania - všetko na jednom mieste.
            </motion.p>

            <motion.ul variants={fadeInUp} className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
              <a
                href="tel:+421904295670"
                className="btn-primary flex items-center gap-2"
                data-testid="hero-call-btn"
              >
                <Phone className="w-5 h-5" />
                Zavolajte mi
              </a>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="btn-outline flex items-center gap-2 cursor-pointer"
                data-testid="hero-inquiry-btn"
              >
                <Send className="w-5 h-5" />
                Nezáväzný dopyt
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1649209979970-f01d950cc5ed?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhY2NvdW50YW50JTIwb2ZmaWNlJTIwZGVzayUyMGNhbGN1bGF0b3IlMjBmaW5hbmNpYWwlMjBkb2N1bWVudHN8ZW58MHx8fHwxNzcwMDQzNDU3fDA&ixlib=rb-4.1.0&q=85"
                alt="Profesionálne účtovnícke služby"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <p className="font-bold text-slate-900">20+ rokov</p>
                <p className="text-sm text-slate-500">skúseností v odbore</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  const services = [
    {
      icon: Calculator,
      title: "Jednoduché účtovníctvo",
      description: "Kompletné spracovanie pre živnostníkov a SZČO.",
      features: ["Peňažný denník", "Evidencia DPH", "Daňové priznanie", "Poradenstvo"]
    },
    {
      icon: Building2,
      title: "Podvojné účtovníctvo",
      description: "Pre s.r.o. a väčšie obchodné spoločnosti.",
      features: ["Hlavná kniha", "Výkaz ziskov a strát", "Súvaha", "Štatistické výkazy"]
    },
    {
      icon: Users,
      title: "Mzdová agenda",
      description: "Výplaty, odvody a komunikácia s úradmi.",
      features: ["Mesačné mzdy", "Odvody a dane", "Ročné zúčtovanie", "Potvrdenia"]
    },
    {
      icon: TrendingUp,
      title: "Daňové poradenstvo",
      description: "Optimalizácia a komplexné poradenstvo.",
      features: ["Daňové priznania", "Zastupovanie pri kontrole", "Aktuálne zmeny", "Zakladanie firiem"]
    },
  ];

  return (
    <section id="services" className="section-padding bg-white" data-testid="services-section">
      <div className="container-custom">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Naše služby
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Komplexné účtovnícke služby
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ponúkame široké spektrum ekonomických služieb pre živnostníkov aj firmy.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-stone-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-emerald-200 group"
              data-testid={`service-card-${index}`}
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-700 transition-colors">
                <service.icon className="w-7 h-7 text-emerald-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Benefits Section
const BenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Zastupovanie pred úradmi",
      description: "Komunikácia s daňovým úradom, sociálnou a zdravotnými poisťovňami."
    },
    {
      icon: Clock,
      title: "Úspora času",
      description: "Venujte sa svojmu podnikaniu, účtovníctvo nechajte na nás."
    },
    {
      icon: FileText,
      title: "Kompletná dokumentácia",
      description: "Zabezpečenie a archivácia všetkých účtovných dokumentov."
    },
    {
      icon: HeadphonesIcon,
      title: "Osobný prístup",
      description: "Individuálne riešenia a poradenstvo pre vašu situáciu."
    },
    {
      icon: Award,
      title: "Dlhoročné skúsenosti",
      description: "V odbore pôsobím od roku 2004 s osvedčenou kvalitou."
    },
    {
      icon: Briefcase,
      title: "Komplexné služby",
      description: "Od založenia firmy až po daňové priznania na jednom mieste."
    },
  ];

  return (
    <section id="benefits" className="section-padding" data-testid="benefits-section">
      <div className="container-custom">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="inline-block bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Výhody spolupráce
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Prečo si vybrať práve mňa?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ponúkam viac než len vedenie účtovníctva. Získate spoľahlivého partnera pre vaše podnikanie.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center group"
              data-testid={`benefit-${index}`}
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-700 transition-colors duration-300">
                <benefit.icon className="w-8 h-8 text-emerald-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
              <p className="text-slate-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Process Section
const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Kontakt",
      description: "Zavolajte mi alebo napíšte. Rád zodpoviem vaše otázky."
    },
    {
      number: "02",
      title: "Analýza",
      description: "Zhodnotíme vašu situáciu a potreby vášho podnikania."
    },
    {
      number: "03",
      title: "Návrh riešenia",
      description: "Pripravím cenovú ponuku a podmienky spolupráce."
    },
    {
      number: "04",
      title: "Spolupráca",
      description: "Začneme spolupracovať a vy sa môžete venovať podnikaniu."
    },
  ];

  return (
    <section className="section-padding bg-emerald-800" data-testid="process-section">
      <div className="container-custom">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="inline-block bg-emerald-700 text-emerald-100 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Ako to funguje
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Jednoduchý proces spolupráce
          </h2>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
            V 4 krokoch k bezstarostnému účtovníctvu.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative"
              data-testid={`step-${index}`}
            >
              <div className="bg-emerald-700/50 rounded-xl p-6 text-center h-full">
                <span className="text-5xl font-bold text-emerald-400/30">{step.number}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-2">{step.title}</h3>
                <p className="text-emerald-100">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ChevronDown className="w-8 h-8 text-emerald-400 rotate-[-90deg]" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="section-padding" data-testid="about-section">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7654441/pexels-photo-7654441.jpeg"
                alt="Ing. Zuzana Jedináková"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-emerald-700 text-white rounded-xl p-6 shadow-xl">
              <p className="text-4xl font-bold">20+</p>
              <p className="text-emerald-100">rokov praxe</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                O mne
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Ing. Zuzana Jedináková
              </h2>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed">
              Svoju činnosť som začala v roku 2004 ako SZČO na základe živnostenského oprávnenia podporeného dlhoročnou praxou v oblasti účtovníctva, práva a daní.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed">
              V súčasnosti pracujem ako ekonóm a zameriavam sa na malé a stredné podnikateľské subjekty, obchodné spoločnosti a drobných živnostníkov. Ponúkam komplexné ekonomické služby pre fyzické a právnické osoby.
            </motion.p>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-stone-50 rounded-xl p-4 text-center">
                <Award className="w-8 h-8 text-emerald-700 mx-auto mb-2" />
                <p className="font-bold text-slate-900">Od roku 2004</p>
                <p className="text-sm text-slate-500">v odbore</p>
              </div>
              <div className="bg-stone-50 rounded-xl p-4 text-center">
                <Users className="w-8 h-8 text-emerald-700 mx-auto mb-2" />
                <p className="font-bold text-slate-900">Malé a stredné</p>
                <p className="text-sm text-slate-500">podnikateľské subjekty</p>
              </div>
              <div className="bg-stone-50 rounded-xl p-4 text-center">
                <Shield className="w-8 h-8 text-emerald-700 mx-auto mb-2" />
                <p className="font-bold text-slate-900">Osobný prístup</p>
                <p className="text-sm text-slate-500">ku každému klientovi</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-4">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="btn-primary inline-flex items-center gap-2 cursor-pointer"
                data-testid="about-cta"
              >
                <MessageSquare className="w-5 h-5" />
                Kontaktujte ma
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Pricing Section
const PricingSection = () => {
  const [accountingType, setAccountingType] = useState("simple");

  const simpleAccountingPrices = [
    { type: "Neplatca DPH", items: "1-100 položiek", price: "60 €" },
    { type: "Neplatca DPH", items: "101+ položiek", price: "80 €" },
    { type: "Platca DPH", items: "1-100 položiek", price: "70 €" },
    { type: "Platca DPH", items: "101+ položiek", price: "80-100 €" },
  ];

  const doubleAccountingPrices = [
    { type: "Neplatca DPH", items: "1-100 položiek", price: "80 €" },
    { type: "Neplatca DPH", items: "101+ položiek", price: "100 €" },
    { type: "Platca DPH", items: "1-100 položiek", price: "100 €" },
    { type: "Platca DPH", items: "101+ položiek", price: "140 €" },
  ];

  const additionalServices = [
    { name: "Mzdová evidencia a personalistika", price: "15 €/pracovník" },
    { name: "Poradenské a konzultačné služby", price: "15 €/hod" },
    { name: "Vypracovanie účt. závierky a daň. priznania pre JÚ", price: "80 €" },
    { name: "Vypracovanie účt. závierky a daň. priznania pre PÚ", price: "200 €" },
    { name: "Vypracovanie podnikateľského zámeru (ÚPSVaR)", price: "100 €" },
    { name: "Vybavenie živnostenského listu", price: "50 €" },
  ];

  const prices = accountingType === "simple" ? simpleAccountingPrices : doubleAccountingPrices;

  return (
    <section id="pricing" className="section-padding bg-white" data-testid="pricing-section">
      <div className="container-custom">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Cenník
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Transparentné ceny
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Mesačné paušálne ceny za vedenie účtovníctva.
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex justify-center mb-8"
        >
          <div className="bg-stone-100 p-1 rounded-xl inline-flex" data-testid="pricing-toggle">
            <button
              onClick={() => setAccountingType("simple")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                accountingType === "simple"
                  ? "bg-emerald-700 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              data-testid="toggle-simple"
            >
              Jednoduché účtovníctvo (JÚ)
            </button>
            <button
              onClick={() => setAccountingType("double")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                accountingType === "double"
                  ? "bg-emerald-700 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              data-testid="toggle-double"
            >
              Podvojné účtovníctvo (PÚ)
            </button>
          </div>
        </motion.div>

        {/* Pricing Table */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200">
            <div className="grid grid-cols-3 bg-emerald-700 text-white font-semibold">
              <div className="p-4">Typ</div>
              <div className="p-4">Položky</div>
              <div className="p-4 text-right">Cena/mesiac</div>
            </div>
            {prices.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 ${index % 2 === 0 ? "bg-white" : "bg-stone-50"}`}
                data-testid={`price-row-${index}`}
              >
                <div className="p-4 font-medium text-slate-700">{item.type}</div>
                <div className="p-4 text-slate-600">{item.items}</div>
                <div className="p-4 text-right font-bold text-emerald-700">{item.price}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Doplnkové služby</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-stone-50 rounded-xl p-4 flex justify-between items-center border border-stone-100"
                data-testid={`additional-service-${index}`}
              >
                <span className="text-slate-700">{service.name}</span>
                <span className="font-bold text-emerald-700 whitespace-nowrap ml-4">{service.price}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Ako často je potrebné dodávať doklady?",
      answer: "Doklady je ideálne odovzdávať mesačne, aby sme mohli priebežne spracovávať účtovníctvo. Môžete ich priniesť osobne, poslať poštou alebo elektronicky."
    },
    {
      question: "Aké doklady potrebujete pre vedenie účtovníctva?",
      answer: "Potrebujeme všetky faktúry (vydané aj prijaté), bankové výpisy, pokladničné doklady, zmluvy a iné dokumenty súvisiace s vašim podnikaním."
    },
    {
      question: "Zastupujete aj pri daňovej kontrole?",
      answer: "Áno, zastupujem klientov pred daňovým úradom, sociálnou poisťovňou aj zdravotnými poisťovňami. V prípade kontroly pripravím všetky potrebné dokumenty."
    },
    {
      question: "Ako dlho trvá spracovanie podnikateľského zámeru?",
      answer: "Spracovanie podnikateľského zámeru pre ÚPSVaR trvá zvyčajne 3-5 pracovných dní, v závislosti od komplexnosti vášho projektu."
    },
    {
      question: "Ponúkate aj online konzultácie?",
      answer: "Áno, okrem osobných stretnutí ponúkam aj telefonické a online konzultácie. Stačí sa dohodnúť na vhodnom termíne."
    },
  ];

  return (
    <section id="faq" className="section-padding" data-testid="faq-section">
      <div className="container-custom">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Často kladené otázky
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Máte otázky?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tu nájdete odpovede na najčastejšie otázky.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-xl border border-stone-200 overflow-hidden"
              data-testid={`faq-item-${index}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                data-testid={`faq-toggle-${index}`}
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 pb-4"
                >
                  <p className="text-slate-600">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post(`${API}/contact`, formData);
      if (response.data.success) {
        setSubmitStatus({ type: "success", message: response.data.message });
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Nastala chyba pri odosielaní. Skúste to prosím znova."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Phone, label: "Telefón", value: "0904 295 670", href: "tel:+421904295670" },
    { icon: Mail, label: "Email", value: "jedinacik68@gmail.com", href: "mailto:jedinacik68@gmail.com" },
    { icon: MapPin, label: "Adresa", value: "L'. Podjavorinskej 1373/59, 053 11 Smižany", href: null },
  ];

  return (
    <section id="contact" className="section-padding bg-slate-900" data-testid="contact-section">
      <div className="container-custom">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <span className="inline-block bg-emerald-800 text-emerald-100 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Kontakt
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Spojte sa so mnou
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Neváhajte ma kontaktovať. Rada zodpoviem vaše otázky.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div>
                <label className="block text-white font-medium mb-2">Meno a priezvisko *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="Vaše meno"
                  data-testid="input-name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="vas@email.sk"
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Telefón</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="0900 000 000"
                    data-testid="input-phone"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Správa *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  placeholder="Vaša správa..."
                  data-testid="input-message"
                />
              </div>

              <p className="text-sm text-slate-400">
                Odoslaním formulára súhlasíte so spracovaním osobných údajov za účelom odpovede na váš dopyt.
              </p>

              {submitStatus && (
                <div
                  className={`p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-emerald-800/50 text-emerald-300"
                      : "bg-red-800/50 text-red-300"
                  }`}
                  data-testid="submit-status"
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                data-testid="submit-btn"
              >
                {isSubmitting ? (
                  "Odosielam..."
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Odoslať dopyt
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4" data-testid={`contact-info-${index}`}>
                  <div className="w-12 h-12 bg-emerald-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white font-medium text-lg hover:text-emerald-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium text-lg">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Business Info */}
            <div className="bg-slate-800 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-4">Fakturačné údaje</h3>
              <div className="space-y-2 text-slate-300">
                <p><span className="text-slate-400">IČO:</span> 41316614</p>
                <p><span className="text-slate-400">DIČ:</span> 1037849362</p>
                <p><span className="text-slate-400">Adresa:</span> L'. Podjavorinskej 1373/59, 053 11 Smižany</p>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="flex gap-4">
              <a
                href="tel:+421904295670"
                className="flex-1 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl py-4 flex items-center justify-center gap-2 font-semibold transition-colors"
                data-testid="quick-call-btn"
              >
                <Phone className="w-5 h-5" />
                Zavolajte
              </a>
              <a
                href="mailto:jedinacik68@gmail.com"
                className="flex-1 bg-slate-700 hover:bg-slate-600 text-white rounded-xl py-4 flex items-center justify-center gap-2 font-semibold transition-colors"
                data-testid="quick-email-btn"
              >
                <Mail className="w-5 h-5" />
                Napíšte
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const usefulLinks = [
    { name: "Daňové riaditeľstvo SR", href: "https://www.financnasprava.sk" },
    { name: "Živnostenský register SR", href: "https://www.zrsr.sk" },
    { name: "Obchodný register SR", href: "https://www.orsr.sk" },
    { name: "Sociálna poisťovňa", href: "https://www.socpoist.sk" },
  ];

  return (
    <footer className="bg-slate-950 py-12" data-testid="footer">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-emerald-700 rounded-lg flex items-center justify-center">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-lg">Účtovníctvo</p>
                <p className="text-xs text-slate-400">Ing. Zuzana Jedináková</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              Profesionálne účtovnícke služby pre živnostníkov a firmy od roku 2004.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Rýchle odkazy</h4>
            <nav className="space-y-2">
              {["Služby", "Cenník", "O mne", "Kontakt"].map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase().replace(" ", "-").replace("služby", "services").replace("cenník", "pricing").replace("o mne", "about").replace("kontakt", "contact")}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="block text-slate-400 hover:text-emerald-400 cursor-pointer transition-colors text-sm"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Užitočné odkazy</h4>
            <nav className="space-y-2">
              {usefulLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Ing. Zuzana Jedináková. Všetky práva vyhradené.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Mobile Sticky CTA
const MobileStickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-3 md:hidden z-40" data-testid="mobile-sticky-cta">
      <div className="flex gap-3">
        <a
          href="tel:+421904295670"
          className="flex-1 bg-emerald-700 text-white rounded-xl py-3 flex items-center justify-center gap-2 font-semibold"
        >
          <Phone className="w-5 h-5" />
          Zavolať
        </a>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-80}
          className="flex-1 border-2 border-emerald-700 text-emerald-700 rounded-xl py-3 flex items-center justify-center gap-2 font-semibold cursor-pointer"
        >
          <MessageSquare className="w-5 h-5" />
          Dopyt
        </Link>
      </div>
    </div>
  );
};

// Main App Component
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
