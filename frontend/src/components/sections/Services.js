import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Calculator, Building2, Users, Briefcase, FolderOpen, CheckCircle2, MessageSquare } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const SimpleCard = () => (
  <motion.div
    variants={fadeInUp}
    className="bg-stone-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-emerald-200 group"
    data-testid="service-card-0"
  >
    <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-700 transition-colors">
      <Calculator className="w-7 h-7 text-emerald-700 group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">Vedenie jednoduchého účtovníctva</h3>
    <p className="text-slate-600 mb-4">Kompletné spracovanie jednoduchého účtovníctva vrátane evidencií, závierky a daňového priznania.</p>
    <ul className="space-y-2">
      <li className="flex items-start gap-2 text-sm text-slate-500"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Peňažný denník</span></li>
      <li className="flex items-start gap-2 text-sm text-slate-500"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Pokladničná kniha (v tuzemskej aj cudzej mene)</span></li>
      <li className="flex items-start gap-2 text-sm text-slate-500"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Knihy pohľadávok a záväzkov</span></li>
      <li className="flex items-start gap-2 text-sm text-slate-500"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Evidencia majetku, výpočet odpisov</span></li>
      <li className="flex items-start gap-2 text-sm text-slate-500"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Evidencia DPH – daňové priznanie</span></li>
      <li className="flex items-start gap-2 text-sm text-slate-500"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Účtovná závierka a výkazy</span></li>
      <li className="flex items-start gap-2 text-sm text-slate-500"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Poradenstvo v oblasti JÚ</span></li>
    </ul>
  </motion.div>
);

const DoubleCard = () => (
  <motion.div
    variants={fadeInUp}
    className="bg-stone-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-emerald-200 group"
    data-testid="service-card-1"
  >
    <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-700 transition-colors">
      <Building2 className="w-7 h-7 text-emerald-700 group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">Vedenie podvojného účtovníctva</h3>
    <p className="text-slate-600 mb-4">Podvojné účtovníctvo pre firmy s kompletnými výstupmi a ročnou závierkou.</p>
    <ul className="space-y-2">
      <li className="flex items-start gap-2 text-sm text-slate-500"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Účtovný denník</span></li>
      <li className="flex items-start gap-2 text-sm text-slate-500"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Hlavná kniha, analytická evidencia</span></li>
      <li className="flex items-start gap-2 text-sm text-slate-500"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Evidencia pohľadávok a záväzkov</span></li>
      <li className="flex items-start gap-2 text-sm text-slate-500"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Evidencia DPH – daňové priznanie</span></li>
      <li className="flex items-start gap-2 text-sm text-slate-500"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Evidencia majetku, výpočet odpisov</span></li>
      <li className="flex items-start gap-2 text-sm text-slate-500"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Ročná závierka, súvaha, poznámky</span></li>
      <li className="flex items-start gap-2 text-sm text-slate-500"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Štatistické výkazy</span></li>
    </ul>
  </motion.div>
);

const ConsultingCard = () => (
  <motion.div
    variants={fadeInUp}
    className="bg-stone-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-emerald-200 group"
    data-testid="service-card-2"
  >
    <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-700 transition-colors">
      <Briefcase className="w-7 h-7 text-emerald-700 group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">Podnikateľské poradenstvo</h3>
    <p className="text-slate-600 mb-4">Praktické poradenstvo v daniach a účtovníctve – zrozumiteľne a podľa aktuálnych predpisov.</p>
    <ul className="space-y-2">
      <li className="flex items-start gap-2 text-sm text-slate-500"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Komplexné poradenstvo v daniach</span></li>
      <li className="flex items-start gap-2 text-sm text-slate-500"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Spracovanie daňových priznaní</span></li>
      <li className="flex items-start gap-2 text-sm text-slate-500"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Aktuálne zmeny daňových predpisov</span></li>
      <li className="flex items-start gap-2 text-sm text-slate-500"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Informácie o daňových povinnostiach</span></li>
      <li className="flex items-start gap-2 text-sm text-slate-500"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Zakladanie a transformácie firiem</span></li>
      <li className="flex items-start gap-2 text-sm text-slate-500"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Zastupovanie pri daňových kontrolách</span></li>
    </ul>
  </motion.div>
);

const PayrollCard = () => (
  <motion.div
    variants={fadeInUp}
    className="bg-stone-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-emerald-200 group"
    data-testid="service-card-3"
  >
    <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-700 transition-colors">
      <Users className="w-7 h-7 text-emerald-700 group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">Mzdová agenda</h3>
    <p className="text-slate-600 mb-4">Spracovanie miezd a povinnej personalistiky vrátane prihlášok, odvodov a ročných výstupov.</p>
    <ul className="space-y-2">
      <li className="flex items-start gap-2 text-sm text-slate-500"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Prihlášky/odhlášky do SP a ZP</span></li>
      <li className="flex items-start gap-2 text-sm text-slate-500"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Mesačné spracovanie miezd</span></li>
      <li className="flex items-start gap-2 text-sm text-slate-500"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Mzdové listy</span></li>
      <li className="flex items-start gap-2 text-sm text-slate-500"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Príkazy na úhradu miezd a odvodov</span></li>
      <li className="flex items-start gap-2 text-sm text-slate-500"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Ročné zúčtovanie dane</span></li>
      <li className="flex items-start gap-2 text-sm text-slate-500"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Potvrdenia pre zamestnancov</span></li>
    </ul>
  </motion.div>
);

const OtherCard = () => (
  <motion.div
    variants={fadeInUp}
    className="bg-stone-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-emerald-200 group"
    data-testid="service-card-4"
  >
    <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-700 transition-colors">
      <FolderOpen className="w-7 h-7 text-emerald-700 group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">Ostatné služby</h3>
    <p className="text-slate-600 mb-4">Doplnkové služby a administratíva, ktoré vám ušetria čas a starosti.</p>
    
    <p className="text-sm font-semibold text-slate-700 mb-2">Výhody spolupráce:</p>
    <ul className="space-y-2 mb-4">
      <li className="flex items-start gap-2 text-sm text-slate-500"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Komunikácia s úradmi (DÚ, ZP, SP)</span></li>
      <li className="flex items-start gap-2 text-sm text-slate-500"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Zastupovanie pred daňovým úradom</span></li>
      <li className="flex items-start gap-2 text-sm text-slate-500"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Zastupovanie pred poisťovňami</span></li>
      <li className="flex items-start gap-2 text-sm text-slate-500"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Sekretárske služby</span></li>
    </ul>
    
    <p className="text-sm font-semibold text-slate-700 mb-2">Doplnkové služby:</p>
    <ul className="space-y-2">
      <li className="flex items-start gap-2 text-sm text-slate-500"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Finančné a ekonomické analýzy</span></li>
      <li className="flex items-start gap-2 text-sm text-slate-500"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><span>Spracovanie podnikateľského zámeru</span></li>
    </ul>
  </motion.div>
);

const ServicesSection = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Služby
          </h2>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          <SimpleCard />
          <DoubleCard />
          <ConsultingCard />
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto"
        >
          <PayrollCard />
          <OtherCard />
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-12 bg-emerald-50 rounded-2xl p-8 border border-emerald-100"
        >
          <p className="text-lg text-slate-700 mb-4">
            Neviete, čo presne potrebujete? Napíšte mi a poradím vám najvhodnejšie riešenie.
          </p>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="btn-primary inline-flex items-center gap-2 cursor-pointer"
            data-testid="services-cta"
          >
            <MessageSquare className="w-5 h-5" />
            Napíšte mi
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
