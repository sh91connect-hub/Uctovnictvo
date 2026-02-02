import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const ProcessSection = () => {
  const steps = [
    { number: "01", title: "Kontakt", description: "Zavolajte mi alebo napíšte. Rád zodpoviem vaše otázky." },
    { number: "02", title: "Analýza", description: "Zhodnotíme vašu situáciu a potreby vášho podnikania." },
    { number: "03", title: "Návrh riešenia", description: "Pripravím cenovú ponuku a podmienky spolupráce." },
    { number: "04", title: "Spolupráca", description: "Začneme spolupracovať a vy sa môžete venovať podnikaniu." },
  ];

  return (
    <section className="section-padding bg-emerald-800" data-testid="process-section">
      <div className="container-custom">
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
          <span className="inline-block bg-emerald-700 text-emerald-100 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Ako to funguje</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Jednoduchý proces spolupráce</h2>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto">V 4 krokoch k bezstarostnému účtovníctvu.</p>
        </motion.div>
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div key={index} variants={fadeInUp} className="relative" data-testid={`step-${index}`}>
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

export default ProcessSection;
