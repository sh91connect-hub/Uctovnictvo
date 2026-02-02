import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Phone, CheckCircle2, Send, Award } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

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
          <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-6">
            <motion.div variants={fadeInUp}>
              <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Profesionálne účtovníctvo</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Účtovníctvo s<span className="text-emerald-700"> osobným prístupom</span>
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
              <a href="tel:+421904295670" className="btn-primary flex items-center gap-2" data-testid="hero-call-btn">
                <Phone className="w-5 h-5" />Zavolajte mi
              </a>
              <Link to="contact" smooth={true} duration={500} offset={-80} className="btn-outline flex items-center gap-2 cursor-pointer" data-testid="hero-inquiry-btn">
                <Send className="w-5 h-5" />Nezáväzný dopyt
              </Link>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1649209979970-f01d950cc5ed?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhY2NvdW50YW50JTIwb2ZmaWNlJTIwZGVzayUyMGNhbGN1bGF0b3IlMjBmaW5hbmNpYWwlMjBkb2N1bWVudHN8ZW58MHx8fHwxNzcwMDQzNDU3fDA&ixlib=rb-4.1.0&q=85" alt="Profesionálne účtovnícke služby" className="w-full h-[400px] md:h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
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

export default HeroSection;
