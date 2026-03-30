import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Skontrolujeme, či už návštevník v minulosti klikol na nejakú voľbu
  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true); // Ak nie, zobrazíme lištu
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-0 left-0 right-0 z-[100] bg-slate-900 text-slate-300 p-4 sm:p-6 shadow-2xl border-t border-slate-800"
    >
      <div className="container-custom flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          <p>
            Tento web používa súbory cookies na zlepšenie používateľského zážitku a analytiku návštevnosti. 
            Môžete prijať všetky cookies, alebo len tie nevyhnutné pre fungovanie webu. 
            Viac informácií nájdete v sekcii <a href="/gdpr" className="text-emerald-400 hover:text-emerald-300 underline transition-colors">Ochrana osobných údajov</a>.
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0 w-full lg:w-auto">
          <button 
            onClick={handleAcceptNecessary}
            className="flex-1 lg:flex-none px-5 py-2.5 border border-slate-600 rounded-xl text-sm hover:bg-slate-800 transition-colors font-medium text-white"
          >
            Len nevyhnutné
          </button>
          <button 
            onClick={handleAcceptAll}
            className="flex-1 lg:flex-none px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-sm hover:bg-emerald-500 transition-colors font-semibold shadow-lg shadow-emerald-900/20"
          >
            Prijať všetky
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CookieBanner;
