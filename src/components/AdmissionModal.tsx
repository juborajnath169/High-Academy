import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SITE_CONFIG } from '../config/siteConfig';
import { X, Send, Phone, CheckCircle2, AlertCircle } from 'lucide-react';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgramId?: string;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({
  isOpen,
  onClose,
  defaultProgramId,
}) => {
  const { language } = useLanguage();
  const isBn = language === 'bn';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    program: defaultProgramId || 'HSC Science',
    message: '',
  });

  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg(isBn ? 'অনুগ্রহ করে শিক্ষার্থীর নাম ও মোবাইল নম্বর দিন।' : 'Please enter student name and mobile number.');
      return;
    }

    setErrorMsg('');

    const text = encodeURIComponent(
      `*HIGH ACADEMY Admission Inquiry*\n\n` +
      `*Student Name:* ${formData.name.trim()}\n` +
      `*Phone:* ${formData.phone.trim()}\n` +
      `*Interested Program:* ${formData.program}\n` +
      (formData.message.trim() ? `*Note:* ${formData.message.trim()}\n` : '') +
      `\n_Sent via HIGH ACADEMY Website_`
    );

    const waUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${text}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSuccess(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B224E]/80 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white border border-[#CFE1F3] rounded-3xl shadow-2xl p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-[#0B224E] hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6 pr-6">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0E3572] bg-blue-100/70 px-3 py-1 rounded-full inline-block mb-1.5">
            {isBn ? 'ভর্তি অনুসন্ধান ও পরামর্শ' : 'Admission Inquiry'}
          </span>
          <h3 className="text-2xl font-black text-[#0B224E]">
            HIGH ACADEMY
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Niloy-3, Chowhatta Point, Sylhet • {SITE_CONFIG.contact.phoneDisplay}
          </p>
        </div>

        {errorMsg && (
          <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
            <span>{errorMsg}</span>
          </div>
        )}

        {success ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-black text-[#0B224E]">
              {isBn ? 'ধন্যবাদ! আপনার অনুসন্ধান পাঠানো হচ্ছে' : 'Thank You! Inquiry Prepared'}
            </h4>
            <p className="text-xs text-slate-600 max-w-sm mx-auto">
              {isBn
                ? 'হোয়াটসঅ্যাপের মাধ্যমে সরাসরি আপনার বার্তাটি আমাদের ভর্তি সমন্বয়কের কাছে পৌঁছে গেছে।'
                : 'Your admission inquiry has been forwarded via WhatsApp to our counselor.'}
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={onClose}
                className="px-6 py-2.5 text-xs font-bold rounded-full bg-[#0B224E] hover:bg-[#0E3572] text-white"
              >
                {isBn ? 'উইন্ডো বন্ধ করুন' : 'Close Window'}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0B224E] mb-1">
                {isBn ? 'শিক্ষার্থীর নাম *' : 'Student Name *'}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={isBn ? 'যেমন: তাসনিম রহমান' : 'e.g. Tasnim Rahman'}
                className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFD] border border-[#CFE1F3] focus:bg-white focus:border-[#0B224E] focus:ring-1 focus:ring-[#0B224E] text-[#0B224E] text-sm outline-none placeholder:text-slate-400"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0B224E] mb-1">
                {isBn ? 'মোবাইল নম্বর *' : 'Mobile Number *'}
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="01XXXXXXXXX"
                className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFD] border border-[#CFE1F3] focus:bg-white focus:border-[#0B224E] focus:ring-1 focus:ring-[#0B224E] text-[#0B224E] text-sm font-mono outline-none placeholder:text-slate-400"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0B224E] mb-1">
                {isBn ? 'কোর্স নির্বাচন করুন' : 'Select Program'}
              </label>
              <select
                value={formData.program}
                onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFD] border border-[#CFE1F3] focus:bg-white focus:border-[#0B224E] focus:ring-1 focus:ring-[#0B224E] text-[#0B224E] text-sm outline-none"
              >
                <option value="HSC Science">HSC Science (এইচএসসি বিজ্ঞান)</option>
                <option value="University Admission">University Admission (বিশ্ববিদ্যালয় ভর্তি)</option>
                <option value="Medical Admission">Medical Admission (মেডিকেল ভর্তি)</option>
                <option value="Engineering Admission">Engineering Admission (ইঞ্জিনিয়ারিং ভর্তি)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0B224E] mb-1">
                {isBn ? 'মন্তব্য বা জিজ্ঞাসা (ঐচ্ছিক)' : 'Message / Note (Optional)'}
              </label>
              <textarea
                rows={2}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={isBn ? 'আপনার কোনো প্রশ্ন থাকলে লিখুন...' : 'Any question about timing, batch, or syllabus...'}
                className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFD] border border-[#CFE1F3] focus:bg-white focus:border-[#0B224E] focus:ring-1 focus:ring-[#0B224E] text-[#0B224E] text-sm outline-none placeholder:text-slate-400 resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full font-black text-[#0B224E] bg-[#FFC107] hover:bg-[#F59E0B] text-sm shadow-md transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>{isBn ? 'হোয়াটসঅ্যাপে পাঠান' : 'Send via WhatsApp'}</span>
              </button>

              <a
                href={`tel:${SITE_CONFIG.contact.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full font-bold text-white bg-[#0B224E] hover:bg-[#0E3572] text-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FFC107]" />
                <span className="font-mono">{SITE_CONFIG.contact.phoneDisplay}</span>
              </a>
            </div>

            <p className="text-[11px] text-slate-500 text-center pt-2">
              {isBn
                ? 'হোয়াটসঅ্যাপের মাধ্যমে সরাসরি আপনার আবেদন আমাদের নম্বরে চলে যাবে।'
                : 'Direct connection to our admission hotline via WhatsApp.'}
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
