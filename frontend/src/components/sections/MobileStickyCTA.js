import { Link } from "react-scroll";
import { Phone, MessageSquare } from "lucide-react";

const MobileStickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-3 md:hidden z-40" data-testid="mobile-sticky-cta">
      <div className="flex gap-3">
        <a href="tel:+421904295670" className="flex-1 bg-emerald-700 text-white rounded-xl py-3 flex items-center justify-center gap-2 font-semibold">
          <Phone className="w-5 h-5" />Zavolať
        </a>
        <Link to="contact" smooth={true} duration={500} offset={-80} className="flex-1 border-2 border-emerald-700 text-emerald-700 rounded-xl py-3 flex items-center justify-center gap-2 font-semibold cursor-pointer">
          <MessageSquare className="w-5 h-5" />Dopyt
        </Link>
      </div>
    </div>
  );
};

export default MobileStickyCTA;
