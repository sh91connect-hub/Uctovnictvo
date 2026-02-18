import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { MessageSquare, Award, Users, Shield } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

// KONCEPT 2: Kruhová profilová fotka s horizontálnym layoutom
const AboutSection = () => {
  return (
    <section id="about" className="section-padding" data-testid="about-section">
      <div className="container-custom">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          {/* Header s fotkou - vycentrované */}
          <motion.div variants={fadeInUp} className="flex flex-col items-center gap-6 mb-8">
            {/* Kruhová fotka */}
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl border-4 border-white ring-4 ring-emerald-100">
                <img
                  src="https://images.pexels.com/photos/7654441/pexels-photo-7654441.jpeg"
                  alt="Ing. Zuzana Jedináková"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-emerald-700 text-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-lg">
                <p className="text-xl font-bold leading-none">20+</p>
                <p className="text-[10px] text-emerald-100">rokov</p>
              </div>
            </div>

            {/* Meno a popis */}
            <div className="text-center">
              <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
                O mne
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                Ing. Zuzana Jedináková
              </h2>
              <p className="text-slate-500">Účtovníčka a ekonomická poradkyňa</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div variants={fadeInUp} className="space-y-4 text-center mb-8">
            <p className="text-base text-slate-600 leading-relaxed">
              Svoju činnosť som začala v roku 2004 ako SZČO na základe živnostenského oprávnenia podporeného dlhoročnou praxou v oblasti účtovníctva, práva a daní. V súčasnosti pracujem ako ekonóm a zameriavam sa na malé a stredné podnikateľské subjekty, obchodné spoločnosti a drobných živnostníkov.
            </p>
          </motion.div>

          {/* Trust points - horizontálne */}
          <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4 mb-8">
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

          {/* CTA */}
          <motion.div variants={fadeInUp} className="text-center">
            <Link to="contact" smooth={true} duration={500} offset={-80} className="btn-primary inline-flex items-center gap-2 cursor-pointer" data-testid="about-cta">
              <MessageSquare className="w-5 h-5" />Napíšte mi
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
