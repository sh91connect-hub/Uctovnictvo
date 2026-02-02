import { motion } from "framer-motion";
import { Shield, Clock, FileText, HeadphonesIcon, Award, Briefcase } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const BenefitsSection = () => {
  const benefits = [
    { icon: Shield, title: "Zastupovanie pred úradmi", description: "Komunikácia s daňovým úradom, sociálnou a zdravotnými poisťovňami." },
    { icon: Clock, title: "Úspora času", description: "Venujte sa svojmu podnikaniu, účtovníctvo nechajte na nás." },
    { icon: FileText, title: "Kompletná dokumentácia", description: "Zabezpečenie a archivácia všetkých účtovných dokumentov." },
    { icon: HeadphonesIcon, title: "Osobný prístup", description: "Individuálne riešenia a poradenstvo pre vašu situáciu." },
    { icon: Award, title: "Dlhoročné skúsenosti", description: "V odbore pôsobím od roku 2004 s osvedčenou kvalitou." },
    { icon: Briefcase, title: "Komplexné služby", description: "Od založenia firmy až po daňové priznania na jednom mieste." },
  ];

  return (
    <section id="benefits" className="section-padding" data-testid="benefits-section">
      <div className="container-custom">
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
          <span className="inline-block bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Výhody spolupráce</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Prečo si vybrať práve mňa?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Ponúkam viac než len vedenie účtovníctva. Získate spoľahlivého partnera pre vaše podnikanie.</p>
        </motion.div>
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={fadeInUp} className="text-center group" data-testid={`benefit-${index}`}>
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

export default BenefitsSection;
