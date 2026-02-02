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

const AboutSection = () => {
  return (
    <section id="about" className="section-padding" data-testid="about-section">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.pexels.com/photos/7654441/pexels-photo-7654441.jpeg" alt="Ing. Zuzana Jedináková" className="w-full h-[400px] md:h-[500px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-emerald-700 text-white rounded-xl p-6 shadow-xl">
              <p className="text-4xl font-bold">20+</p>
              <p className="text-emerald-100">rokov praxe</p>
            </div>
          </motion.div>
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="space-y-6">
            <motion.div variants={fadeInUp}>
              <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">O mne</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ing. Zuzana Jedináková</h2>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed">
              Svoju činnosť som začala v roku 2004 ako SZČO na základe živnostenského oprávnenia podporeného dlhoročnou praxou v oblasti účtovníctva, práva a daní.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed">
              V súčasnosti pracujem ako ekonóm a zameriavam sa na malé a stredné podnikateľské subjekty, obchodné spoločnosti a drobných živnostníkov.
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
              <Link to="contact" smooth={true} duration={500} offset={-80} className="btn-primary inline-flex items-center gap-2 cursor-pointer" data-testid="about-cta">
                <MessageSquare className="w-5 h-5" />Kontaktujte ma
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
