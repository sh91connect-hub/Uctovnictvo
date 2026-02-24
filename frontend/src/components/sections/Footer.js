import { Link } from "react-scroll";
import { Calculator } from "lucide-react";

const Footer = () => {
  const usefulLinks = [
    { name: "Daňové riaditeľstvo SR", href: "https://www.financnasprava.sk" },
    { name: "Živnostenský register SR", href: "https://www.zrsr.sk" },
    { name: "Obchodný register SR", href: "https://www.orsr.sk" },
    { name: "Sociálna poisťovňa", href: "https://www.socpoist.sk" },
  ];

  const quickLinks = [
    { name: "Služby", to: "services" },
    { name: "Cenník", to: "pricing" },
    { name: "O mne", to: "about" },
    { name: "Kontakt", to: "contact" },
  ];

  return (
    <footer className="bg-slate-950 py-12" data-testid="footer">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
  <img src="/uctologo.svg" alt="Logo" className="h-14 w-auto brightness-0 invert" />
  <div>
    <p className="font-bold text-white text-lg">Vedenie účtovníctva</p>
    <p className="text-xs text-slate-400">a ekonomické poradenstvo</p>
  </div>
</div>
            <p className="text-slate-400 text-sm">Profesionálne účtovnícke služby pre živnostníkov a firmy od roku 2004.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Rýchle odkazy</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <Link key={link.to} to={link.to} smooth={true} duration={500} offset={-80} className="block text-slate-400 hover:text-emerald-400 cursor-pointer transition-colors text-sm">
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Užitočné odkazy</h4>
            <nav className="space-y-2">
              {usefulLinks.map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Ing. Zuzana Jedináková. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
