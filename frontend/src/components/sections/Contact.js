import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await axios.post(`${API}/contact`, formData);
      if (response.data.success) {
        setSubmitStatus({ type: "success", message: response.data.message });
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      setSubmitStatus({ type: "error", message: "Nastala chyba pri odosielaní. Skúste to prosím znova." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Phone, label: "Telefón", value: "0904 295 670", href: "tel:+421904295670" },
    { icon: Mail, label: "Email", value: "jedinacik68@gmail.com", href: "mailto:jedinacik68@gmail.com" },
    { icon: MapPin, label: "Adresa", value: "L'. Podjavorinskej 1373/59, 053 11 Smižany", href: null },
  ];

  return (
    <section id="contact" className="section-padding bg-slate-900" data-testid="contact-section">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="inline-block bg-emerald-800 text-emerald-100 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Kontakt</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Spojte sa so mnou</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">Neváhajte ma kontaktovať. Rada zodpoviem vaše otázky.</p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div>
                <label className="block text-white font-medium mb-2">Meno a priezvisko *</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Vaše meno" data-testid="input-name" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Email *</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="vas@email.sk" data-testid="input-email" />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Telefón</label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="0900 000 000" data-testid="input-phone" />
                </div>
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Správa *</label>
                <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors resize-none" placeholder="Vaša správa..." data-testid="input-message" />
              </div>
              <p className="text-sm text-slate-400">Odoslaním formulára súhlasíte so spracovaním osobných údajov za účelom odpovede na váš dopyt.</p>
              {submitStatus && (
                <div className={`p-4 rounded-xl ${submitStatus.type === "success" ? "bg-emerald-800/50 text-emerald-300" : "bg-red-800/50 text-red-300"}`} data-testid="submit-status">
                  {submitStatus.message}
                </div>
              )}
              <button type="submit" disabled={isSubmitting} className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" data-testid="submit-btn">
                {isSubmitting ? "Odosielam..." : (<><Send className="w-5 h-5" />Odoslať dopyt</>)}
              </button>
            </form>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4" data-testid={`contact-info-${index}`}>
                  <div className="w-12 h-12 bg-emerald-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">{info.label}</p>
                    {info.href ? (<a href={info.href} className="text-white font-medium text-lg hover:text-emerald-400 transition-colors">{info.value}</a>) : (<p className="text-white font-medium text-lg">{info.value}</p>)}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-slate-800 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-4">Fakturačné údaje</h3>
              <div className="space-y-2 text-slate-300">
                <p><span className="text-slate-400">IČO:</span> 41316614</p>
                <p><span className="text-slate-400">DIČ:</span> 1037849362</p>
                <p><span className="text-slate-400">Adresa:</span> L'. Podjavorinskej 1373/59, 053 11 Smižany</p>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="tel:+421904295670" className="flex-1 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl py-4 flex items-center justify-center gap-2 font-semibold transition-colors" data-testid="quick-call-btn">
                <Phone className="w-5 h-5" />Zavolajte
              </a>
              <a href="mailto:jedinacik68@gmail.com" className="flex-1 bg-slate-700 hover:bg-slate-600 text-white rounded-xl py-4 flex items-center justify-center gap-2 font-semibold transition-colors" data-testid="quick-email-btn">
                <Mail className="w-5 h-5" />Napíšte
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
