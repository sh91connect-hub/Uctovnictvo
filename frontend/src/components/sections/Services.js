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

const ServiceCard = ({ icon: Icon, title, description, features, index }) => (
  <motion.div
    variants={fadeInUp}
    className="bg-stone-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-emerald-200 group"
    data-testid={`service-card-${index}`}
  >
    <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-700 transition-colors">
      <Icon className="w-7 h-7 text-emerald-700 group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 mb-4">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-2 text-sm text-slate-500">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const ServiceCardWithSections = ({ icon: Icon, title, description, sections, index }) => (
  <motion.div
    variants={fadeInUp}
    className="bg-stone-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-emerald-200 group"
    data-testid={`service-card-${index}`}
  >
    <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-700 transition-colors">
      <Icon className="w-7 h-7 text-emerald-700 group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 mb-4">{description}</p>
    {sections.map((section, sIdx) => (
      <div key={sIdx} className={sIdx > 0 ? "mt-4" : ""}>
        <p className="text-sm font-semibold text-slate-700 mb-2">{section.title}</p>
        <ul className="space-y-2">
          {section.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-slate-500">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </motion.div>
);

const ServicesSection = () => {
  const services = [
    {
      icon: Calculator,
      title: "Vedenie jednoduchého účtovníctva",
      description: "Kompletné spracovanie jednoduchého účtovníctva vrátane evidencií, závierky a daňového priznania.",
      features: [
        "Peňažný denník",
        "Pokladničná kniha (v tuzemskej aj cudzej mene)",
        "Knihy pohľadávok a záväzkov",
        "Evidencia hmotného a nehmotného majetku, výpočet odpisov",
        "Evidencia sociálneho fondu",
        "Evidencia DPH – spracovanie daňového priznania",
        "Spracovanie účtovnej závierky, výkazov k účtovnej závierke, daňové priznanie",
        "Poradenstvo v oblasti jednoduchého účtovníctva"
      ]
    },
    {
      icon: Building2,
      title: "Vedenie podvojného účtovníctva",
      description: "Podvojné účtovníctvo pre firmy s kompletnými výstupmi a ročnou závierkou.",
      features: [
        "Účtovný denník",
        "Hlavná kniha, kniha analytickej evidencie",
        "Evidencia pohľadávok a záväzkov, saldokonto",
        "Evidencia DPH – spracovanie daňového priznania",
        "Evidencia hmotného a nehmotného majetku, výpočet odpisov",
        "Ročná účtovná závierka, výkaz ziskov a strát, súvaha, poznámky, daňové priznanie k dani z príjmov",
        "Poradenstvo v oblasti podvojného účtovníctva",
        "Spracovanie štatistických výkazov"
      ]
    },
    {
      icon: Briefcase,
      title: "Podnikateľské poradenstvo",
      description: "Praktické poradenstvo v daniach a účtovníctve – zrozumiteľne a podľa aktuálnych predpisov.",
      features: [
        "Komplexné poradenstvo v oblasti daní a účtovníctva",
        "Spracovanie daňových priznaní",
        "Informácie o aktuálnych zmenách daňových predpisov",
        "Informácie o daňových povinnostiach",
        "Poradenstvo pri zakladaní a transformáciách spoločností",
        "Zastupovanie pri daňových kontrolách"
      ]
    },
    {
      icon: Users,
      title: "Mzdová agenda",
      description: "Spracovanie miezd a povinnej personalistiky vrátane prihlášok, odvodov a ročných výstupov.",
      features: [
        "Prihlášky a odhlášky zamestnancov do Sociálnej poisťovne a zdravotných poisťovní",
        "Spracovanie mesačných miezd pracovníkov",
        "Mzdové listy",
        "Spracovanie príkazov na úhradu pri výplate miezd, odvodov a daní",
        "Ročné zúčtovanie preddavkov na daň z príjmu zo závislej činnosti",
        "Vyhotovenie potvrdení pre zamestnancov"
      ]
    }
  ];

  const otherServices = {
    icon: FolderOpen,
    title: "Ostatné služby",
    description: "Doplnkové služby a administratíva, ktoré vám ušetria čas a starosti.",
    sections: [
      {
        title: "Výhody spolupráce (komfort a zastupovanie):",
        items: [
          "Komunikácia s úradmi – daňový úrad, zdravotné poisťovne, sociálna poisťovňa",
          "Zastupovanie pred miestne príslušným daňovým úradom",
          "Zastupovanie pred sociálnou a zdravotnými poisťovňami",
          "Sekretárske a administratívne služby",
          "Zabezpečenie uloženia dokumentov do zbierky listín"
        ]
      },
      {
        title: "Doplnkové služby (jednorazové výstupy):",
        items: [
          "Spracovanie finančných a ekonomických analýz",
          "Spracovanie podnikateľského zámeru"
        ]
      }
    ]
  };

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
            Služby
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Služby
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Zabezpečujem kompletné vedenie účtovníctva, mzdovú agendu aj podnikateľské poradenstvo. 
            Vyberte si, s čím potrebujete pomôcť – všetko riešim prehľadne, načas a s dôrazom na presnosť.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
          <ServiceCardWithSections
            index={4}
            icon={otherServices.icon}
            title={otherServices.title}
            description={otherServices.description}
            sections={otherServices.sections}
          />
        </motion.div>

        {/* CTA Section */}
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
