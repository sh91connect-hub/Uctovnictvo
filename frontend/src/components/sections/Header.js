import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Phone, MessageSquare, Menu, X } from "lucide-react";

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
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
            <div className="flex items-center gap-2" data-testid="logo">
             <img src="/uctologo.svg" alt="Logo" className="h-16 w-auto" />
<div className="hidden sm:block">
  <p className="font-bold text-emerald-800 text-lg leading-tight">Vedenie účtovníctva</p>
  <p className="font-bold text-emerald-800 text-lg leading-tight">a ekonomické poradenstvo</p>
</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6" data-testid="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-slate-600 hover:text-emerald-700 font-medium cursor-pointer transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+421904295670" className="btn-outline flex items-center gap-2 !py-2 !px-4" data-testid="call-btn">
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">Zavolajte</span>
            </a>
            <Link to="contact" smooth={true} duration={500} offset={-80} className="btn-primary flex items-center gap-2 !py-2 !px-4 cursor-pointer" data-testid="inquiry-btn">
              <MessageSquare className="w-4 h-4" />
              <span>Napíšte mi</span>
            </Link>
          </div>

          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} data-testid="mobile-menu-btn">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="lg:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} smooth={true} duration={500} offset={-80} className="text-slate-600 hover:text-emerald-700 font-medium py-2 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-3 pt-3">
                <a href="tel:+421904295670" className="btn-outline flex items-center justify-center gap-2 flex-1">
                  <Phone className="w-4 h-4" /> Zavolajte
                </a>
                <Link to="contact" smooth={true} duration={500} className="btn-primary flex items-center justify-center gap-2 flex-1 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                  <MessageSquare className="w-4 h-4" /> Napíšte mi
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
