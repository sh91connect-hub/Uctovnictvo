import { useState } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const PricingSection = () => {
  const [accountingType, setAccountingType] = useState("simple");

  const simpleAccountingPrices = [
    { type: "Neplatca DPH", items: "1-100 položiek", price: "60 €" },
    { type: "Neplatca DPH", items: "101+ položiek", price: "80 €" },
    { type: "Platca DPH", items: "1-100 položiek", price: "70 €" },
    { type: "Platca DPH", items: "101+ položiek", price: "80-100 €" },
  ];

  const doubleAccountingPrices = [
    { type: "Neplatca DPH", items: "1-100 položiek", price: "80 €" },
    { type: "Neplatca DPH", items: "101+ položiek", price: "100 €" },
    { type: "Platca DPH", items: "1-100 položiek", price: "100 €" },
    { type: "Platca DPH", items: "101+ položiek", price: "140 €" },
  ];

  const additionalServices = [
    { name: "Mzdová evidencia a personalistika", price: "15 €/pracovník" },
    { name: "Poradenské a konzultačné služby", price: "15 €/hod" },
    { name: "Vypracovanie účt. závierky a daň. priznania pre JÚ", price: "100 €" },
    { name: "Vypracovanie účt. závierky a daň. priznania pre PÚ", price: "200 €" },
    { name: "Vypracovanie podnikateľského zámeru (ÚPSVaR)", price: "100 €" },
    { name: "Vybavenie živnostenského listu", price: "50 €" },
  ];

  const prices = accountingType === "simple" ? simpleAccountingPrices : doubleAccountingPrices;

  return (
    <section id="pricing" className="section-padding bg-white" data-testid="pricing-section">
      <div className="container-custom">
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
          <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Cenník</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Transparentné ceny</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Mesačné paušálne ceny za vedenie účtovníctva.</p>
        </motion.div>

        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} className="flex justify-center mb-8">
          <div className="bg-stone-100 p-1 rounded-xl inline-flex" data-testid="pricing-toggle">
            <button onClick={() => setAccountingType("simple")} className={`px-6 py-3 rounded-lg font-semibold transition-all ${accountingType === "simple" ? "bg-emerald-700 text-white shadow-md" : "text-slate-600 hover:text-slate-900"}`} data-testid="toggle-simple">
              Jednoduché účtovníctvo (JÚ)
            </button>
            <button onClick={() => setAccountingType("double")} className={`px-6 py-3 rounded-lg font-semibold transition-all ${accountingType === "double" ? "bg-emerald-700 text-white shadow-md" : "text-slate-600 hover:text-slate-900"}`} data-testid="toggle-double">
              Podvojné účtovníctvo (PÚ)
            </button>
          </div>
        </motion.div>

        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} className="max-w-3xl mx-auto mb-16">
          <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200">
            <div className="grid grid-cols-3 bg-emerald-700 text-white font-semibold">
              <div className="p-4">Typ</div>
              <div className="p-4">Položky</div>
              <div className="p-4 text-right">Cena/mesiac</div>
            </div>
            {prices.map((item, index) => (
              <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? "bg-white" : "bg-stone-50"}`} data-testid={`price-row-${index}`}>
                <div className="p-4 font-medium text-slate-700">{item.type}</div>
                <div className="p-4 text-slate-600">{item.items}</div>
                <div className="p-4 text-right font-bold text-emerald-700">{item.price}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Doplnkové služby</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-stone-50 rounded-xl p-4 flex justify-between items-center border border-stone-100" data-testid={`additional-service-${index}`}>
                <span className="text-slate-700">{service.name}</span>
                <span className="font-bold text-emerald-700 whitespace-nowrap ml-4">{service.price}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
