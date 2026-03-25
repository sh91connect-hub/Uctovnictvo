import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Footer from "./Footer";

const Gdpr = () => {
  // Tento kúsok zabezpečí, že po kliknutí na odkaz sa stránka načíta pekne zhora
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen flex flex-col">
      {/* Zjednodušená hlavička s tlačidlom Späť */}
      <header className="glassmorphism sticky top-0 z-50 py-4 border-b border-slate-200/60">
        <div className="container-custom flex items-center">
          <a href="/" className="flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-semibold transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Späť na hlavnú stránku
          </a>
        </div>
      </header>

      {/* Samotný obsah GDPR */}
      <main className="flex-grow section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Ochrana osobných údajov (GDPR)
            </h1>
            
            {/* Tu si neskôr vložíš/prepíšeš reálny text zmluvy */}
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                <strong>1. Základné ustanovenia</strong><br/>
                Prevádzkovateľom osobných údajov podľa čl. 4 bod 7 nariadenia Európskeho parlamentu a Rady (EÚ) 2016/679 o ochrane fyzických osôb pri spracúvaní osobných údajov a o voľnom pohybe takýchto údajov (ďalej len: "GDPR") je Ing. Zuzana Jedináková, IČO: 41316614.
              </p>

              <p>
                <strong>2. Zdroje a kategórie spracovávaných osobných údajov</strong><br/>
                Spracovávame osobné údaje, ktoré ste nám poskytli prostredníctvom kontaktného formulára za účelom vybavenia vášho dopytu.
              </p>

              <p>
                <strong>3. Doba uchovávania údajov</strong><br/>
                Uchovávame osobné údaje po dobu nevyhnutnú k výkonu práv a povinností vyplývajúcich zo zmluvného vzťahu, resp. na vybavenie dopytu.
              </p>
              
              <p>
                <strong>4. Vaše práva</strong><br/>
                Máte právo na prístup k svojim osobným údajom, právo na ich opravu, vymazanie alebo obmedzenie spracovania.
              </p>
            </div>

          </motion.div>
        </div>
      </main>

      {/* Pätička webu */}
      <Footer />
    </div>
  );
};

export default Gdpr;
