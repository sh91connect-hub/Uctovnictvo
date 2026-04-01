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
            
            <div className="space-y-8 text-slate-600 leading-relaxed">
              <p>
                Záleží mi na ochrane vášho súkromia a s vašimi osobnými údajmi narábam zodpovedne, transparentne a v súlade s platnou legislatívou (Nariadenie EÚ 2016/679 – GDPR a Zákon č. 18/2018 Z. z. o ochrane osobných údajov). Nižšie nájdete prehľadné informácie o tom, ako a prečo vaše údaje spracúvam.
              </p>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">1. Kto spracúva vaše údaje? (Prevádzkovateľ)</h2>
                <p>Prevádzkovateľom vašich osobných údajov som ja:</p>
                <ul className="mt-2 space-y-1">
                  <li><strong>Ing. Zuzana Jedináková</strong></li>
                  <li>Adresa: Ľ. Podjavorinskej 1373/59, 053 11 Smižany</li>
                  <li>IČO: 41316614</li>
                  <li>DIČ: 1037849362</li>
                  <li>E-mail: jedinacik68@gmail.com</li>
                  <li>Telefón: 0904 295 670</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">2. Aké osobné údaje zbieram a prečo?</h2>
                <p className="mb-2">Cez tento web zbieram len tie údaje, ktoré mi sami dobrovoľne poskytnete prostredníctvom kontaktného formulára alebo e-mailu. Ide výlučne o:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li><strong>Meno a priezvisko:</strong> Aby som vedela, s kým komunikujem.</li>
                  <li><strong>E-mailová adresa a telefónne číslo:</strong> Aby som vám mohla odpovedať na vašu otázku, dopyt alebo vám zaslať cenovú ponuku.</li>
                  <li><strong>Obsah správy:</strong> Informácie, ktoré mi dobrovoľne napíšete ohľadom vašich požiadaviek na účtovníctvo.</li>
                </ul>
                <p><strong>Účel a právny základ spracovania:</strong><br />Vaše údaje spracúvam výlučne za účelom vybavenia vášho dopytu a komunikácie pred uzatvorením zmluvy. Právnym základom tohto spracovania je článok 6 ods. 1 písm. b) GDPR (opatrenia pred uzatvorením zmluvy) a môj oprávnený záujem odpovedať na vaše správy.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">3. Ako dlho vaše údaje uchovávam?</h2>
                <p>Vaše údaje z kontaktného formulára uchovávam len na nevyhnutný čas. Ak sa dohodneme na spolupráci, údaje sa stanú súčasťou našej zmluvnej dokumentácie. Ak k spolupráci nedôjde, vašu správu a osobné údaje z nej vymažem najneskôr do 1 roka od našej poslednej komunikácie.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">4. Kto má k údajom prístup?</h2>
                <p>K vašim údajom mám prístup výhradne ja. Vaše osobné údaje nikdy nepredávam, neprenajímam a neposkytujem tretím stranám na marketingové účely. Údaje môžu byť spracúvané len preverenými poskytovateľmi IT služieb (napr. poskytovateľ webhostingu), ktorí zabezpečujú bezpečný chod tejto webstránky.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">5. Aké sú vaše práva?</h2>
                <p className="mb-2">Podľa GDPR máte vo vzťahu k svojim osobným údajom nasledujúce práva:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li><strong>Právo na prístup:</strong> Môžete ma požiadať o informáciu, aké vaše údaje spracúvam.</li>
                  <li><strong>Právo na opravu:</strong> Ak sú vaše údaje nesprávne, máte právo požiadať o ich opravu.</li>
                  <li><strong>Právo na výmaz:</strong> Môžete ma požiadať, aby som vaše údaje vymazala.</li>
                  <li><strong>Právo na obmedzenie spracúvania a právo namietať.</strong></li>
                </ul>
                <p>Ak si chcete uplatniť ktorékoľvek z týchto práv, stačí mi napísať na e-mail: <strong>jedinacik68@gmail.com</strong>.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">6. Používanie súborov Cookies</h2>
                <p className="mb-2">Naša webová stránka používa súbory cookies. Cookies sú malé textové súbory, ktoré sa ukladajú vo vašom prehliadači a pomáhajú nám zabezpečiť správne fungovanie webu a analyzovať návštevnosť.</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li><strong>Nevyhnutné cookies:</strong> Sú potrebné pre základné technické fungovanie webu (napr. zapamätanie si vášho súhlasu s cookies na lište). Tieto cookies sa nedajú vypnúť.</li>
                  <li><strong>Analytické cookies:</strong> Pomáhajú nám pochopiť, ako návštevníci používajú web. Ukladajú sa len, ak kliknete na "Prijať všetky".</li>
                </ul>
                <p>Svoje preferencie môžete kedykoľvek zmeniť vymazaním cookies vo vašom prehliadači.</p>
              </section>

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
