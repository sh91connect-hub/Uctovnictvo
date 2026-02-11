import { useState } from "react";
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

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "Ako často je potrebné dodávať doklady?", answer: "Doklady je ideálne odovzdávať mesačne, aby sme mohli priebežne spracovávať účtovníctvo. Môžete ich priniesť osobne, poslať poštou alebo elektronicky." },
    { question: "Aké doklady potrebujete pre vedenie účtovníctva?", answer: "Potrebujeme všetky faktúry (vydané aj prijaté), bankové výpisy, pokladničné doklady, zmluvy a iné dokumenty súvisiace s vaším podnikaním." },
    { question: "Zastupujete aj pri daňovej kontrole?", answer: "Áno, zastupujem klientov pred daňovým úradom, sociálnou poisťovňou aj zdravotnými poisťovňami. V prípade kontroly pripravím všetky potrebné dokumenty." },
    { question: "Ako dlho trvá spracovanie podnikateľského zámeru?", answer: "Spracovanie podnikateľského zámeru pre ÚPSVaR trvá zvyčajne 3-5 pracovných dní, v závislosti od komplexnosti vášho projektu." },
    { question: "Ponúkate aj online konzultácie?", answer: "Áno, okrem osobných stretnutí ponúkam aj telefonické a online konzultácie. Stačí sa dohodnúť na vhodnom termíne." },
    { question: "V akom účtovnom programe pracujete?", answer: "Pracujem v programe Kross – pre jednoduché účtovníctvo používam Alfa+, pre podvojné účtovníctvo Omega a pre mzdy program Olymp." },
  ];

  return (
    <section id="faq" className="section-padding" data-testid="faq-section">
      <div className="container-custom">
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
          <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Často kladené otázky</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Máte otázky?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Tu nájdete odpovede na najčastejšie otázky.</p>
        </motion.div>
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer} className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={fadeInUp} className="bg-white rounded-xl border border-stone-200 overflow-hidden" data-testid={`faq-item-${index}`}>
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full px-6 py-4 flex items-center justify-between text-left" data-testid={`faq-toggle-${index}`}>
                <span className="font-semibold text-slate-900">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              {openIndex === index && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="px-6 pb-4">
                  <p className="text-slate-600">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
