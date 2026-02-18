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

// KONCEPT 1: Kompaktný bočný layout s menšou fotkou
const AboutSection = () => {
  return (
    <section id="about" className="section-padding" data-testid="about-section">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image - menšia */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl w-[280px] md:w-[320px]">
                <img
                  src="https://images.pexels.com/photos/7654441/pexels-photo-7654441.jpeg"
                  alt="Ing. Zuzana Jedináková"
                  className="w-full h-[350px] md:h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-emerald-700 text-white rounded-xl p-4 shadow-lg">
                <p className="text-2xl font-bold">20+</p>
                <p className="text-emerald-100 text-sm">rokov praxe</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-5"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
                O mne
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Ing. Zuzana Jedináková
              </h2>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-base text-slate-600 leading-relaxed">
              Svoju činnosť som začala v roku 2004 ako SZČO na základe živnostenského oprávnenia podporeného dlhoročnou praxou v oblasti účtovníctva, práva a daní.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-base text-slate-600 leading-relaxed">
              V súčasnosti pracujem ako ekonóm a zameriavam sa na malé a stredné podnikateľské subjekty, obchodné spoločnosti a drobných živnostníkov.
            </motion.p>

            <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-3 pt-3">
              <div className="bg-stone-50 rounded-xl p-3 text-center">
                <Award className="w-6 h-6 text-emerald-700 mx-auto mb-1" />
                <p className="font-bold text-slate-900 text-sm">Od roku 2004</p>
                <p className="text-xs text-slate-500">v odbore</p>
              </div>
              <div className="bg-stone-50 rounded-xl p-3 text-center">
                <Users className="w-6 h-6 text-emerald-700 mx-auto mb-1" />
                <p className="font-bold text-slate-900 text-sm">Malé a stredné</p>
                <p className="text-xs text-slate-500">subjekty</p>
              </div>
              <div className="bg-stone-50 rounded-xl p-3 text-center">
                <Shield className="w-6 h-6 text-emerald-700 mx-auto mb-1" />
                <p className="font-bold text-slate-900 text-sm">Osobný prístup</p>
                <p className="text-xs text-slate-500">ku klientovi</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-3 text-center">
              <Link to="contact" smooth={true} duration={500} offset={-80} className="btn-primary inline-flex items-center gap-2 cursor-pointer" data-testid="about-cta">
                <MessageSquare className="w-5 h-5" />Napíšte mi
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
