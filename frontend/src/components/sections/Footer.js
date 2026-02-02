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
              <div className="w-10 h-10 bg-emerald-700 rounded-lg flex items-center justify-center">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-lg">Účtovníctvo</p>
                <p className="text-xs text-slate-400">Ing. Zuzana Jedináková</p>
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
