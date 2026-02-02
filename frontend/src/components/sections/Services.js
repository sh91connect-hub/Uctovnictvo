import { motion } from "framer-motion";
import { Calculator, Building2, Users, TrendingUp, CheckCircle2 } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const ServicesSection = () => {
  const services = [
    { icon: Calculator, title: "Jednoduché účtovníctvo", description: "Kompletné spracovanie pre živnostníkov a SZČO.", features: ["Peňažný denník", "Evidencia DPH", "Daňové priznanie", "Poradenstvo"] },
    { icon: Building2, title: "Podvojné účtovníctvo", description: "Pre s.r.o. a väčšie obchodné spoločnosti.", features: ["Hlavná kniha", "Výkaz ziskov a strát", "Súvaha", "Štatistické výkazy"] },
    { icon: Users, title: "Mzdová agenda", description: "Výplaty, odvody a komunikácia s úradmi.", features: ["Mesačné mzdy", "Odvody a dane", "Ročné zúčtovanie", "Potvrdenia"] },
    { icon: TrendingUp, title: "Daňové poradenstvo", description: "Optimalizácia a komplexné poradenstvo.", features: ["Daňové priznania", "Zastupovanie pri kontrole", "Aktuálne zmeny", "Zakladanie firiem"] },
  ];

  return (
    <section id="services" className="section-padding bg-white" data-testid="services-section">
      <div className="container-custom">
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
          <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Naše služby</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Komplexné účtovnícke služby</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Ponúkame široké spektrum ekonomických služieb pre živnostníkov aj firmy.</p>
        </motion.div>
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp} className="bg-stone-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-emerald-200 group" data-testid={`service-card-${index}`}>
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-700 transition-colors">
                <service.icon className="w-7 h-7 text-emerald-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />{feature}
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

export default ServicesSection;
