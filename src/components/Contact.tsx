import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SITE_CONFIG } from '../config/siteConfig';
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Users, 
  ExternalLink, 
  Send, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';

interface ContactProps {
  initialProgramId?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialProgramId }) => {
  const { language, t } = useLanguage();
  const isBn = language === 'bn';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    program: initialProgramId || 'HSC Science',
    message: '',
  });

  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg(isBn ? 'অনুগ্রহ করে নাম এবং মোবাইল নম্বর দিন।' : 'Please enter your name and phone number.');
      return;
    }

    setErrorMsg('');
    
    // Construct WhatsApp message with formatted inquiry details
    const text = encodeURIComponent(
      `*HIGH ACADEMY Admission Inquiry*\n\n` +
      `*Student Name:* ${formData.name.trim()}\n` +
      `*Phone:* ${formData.phone.trim()}\n` +
      `*Interested Program:* ${formData.program}\n` +
      (formData.message.trim() ? `*Message:* ${formData.message.trim()}\n` : '') +
      `\n_Sent via HIGH ACADEMY Website_`
    );

    const waUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${text}`;
    
    // Open WhatsApp
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSuccess(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Signature Navy Pill + Yellow Lines */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-[2.5px] w-10 sm:w-16 bg-[#FFC107] rounded-full" />
            <span className="bg-[#0B224E] text-white px-6 py-2 rounded-full text-xs sm:text-sm font-black shadow-md tracking-wide">
              {isBn ? 'যোগাযোগ ও তথ্য (Get In Touch)' : 'Contact & Admissions'}
            </span>
            <span className="h-[2.5px] w-10 sm:w-16 bg-[#FFC107] rounded-full" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B224E] tracking-tight mt-1">
            {t('contact.heading')}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
            {t('contact.subheading')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start text-left">
          
          {/* Left Column: Contact Details, Social Channels & Google Maps */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Address & Phone Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#EEF4FB] border border-[#CFE1F3] shadow-xs space-y-5">
              <h3 className="text-lg font-black text-[#0B224E] flex items-center gap-2">
                <span>{isBn ? 'অফিস ও ক্যাম্পাস তথ্য' : 'Campus & Helpline'}</span>
              </h3>

              <div className="space-y-4 text-sm">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#BFD9F5] flex items-center justify-center text-[#0B224E] shadow-xs shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#0B224E]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-slate-500 font-bold block">
                      {isBn ? 'ঠিকানা' : 'Address'}
                    </span>
                    <p className="font-bold text-[#0B224E] mt-0.5">
                      {isBn ? SITE_CONFIG.contact.addressBn : SITE_CONFIG.contact.addressEn}
                    </p>
                    <a
                      href={SITE_CONFIG.contact.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#0E3572] font-bold hover:underline mt-1.5"
                    >
                      <span>{t('contact.maps')}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#BFD9F5] flex items-center justify-center text-[#0B224E] shadow-xs shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-[#0B224E]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-slate-500 font-bold block">
                      {isBn ? 'হেল্পলাইন নম্বর' : 'Helpline Number'}
                    </span>
                    <a
                      href={`tel:${SITE_CONFIG.contact.phoneTel}`}
                      className="text-xl font-black text-[#0B224E] font-mono hover:text-[#0E3572] transition-colors block mt-0.5"
                    >
                      {SITE_CONFIG.contact.phoneDisplay}
                    </a>
                    <span className="text-xs text-slate-600">
                      {isBn ? 'ভর্তি তথ্য ও আসন সংখ্যা জানতে সরাসরি কল দিন' : 'For admission updates & seat inquiry'}
                    </span>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#BFD9F5] flex items-center justify-center text-slate-500 shadow-xs shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-[#0B224E]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-slate-500 font-bold block">
                      {isBn ? 'অফিস সময়' : 'Office Hours'}
                    </span>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {isBn ? SITE_CONFIG.contact.hoursBn : SITE_CONFIG.contact.hoursEn}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="p-6 rounded-3xl bg-[#EEF4FB] border border-[#CFE1F3] space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#0B224E] mb-3">
                {isBn ? 'সোশ্যাল ও অনলাইন মাধ্যম' : 'Online & Social Channels'}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* WhatsApp Direct Chat */}
                <a
                  href={SITE_CONFIG.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-xs group"
                >
                  <MessageCircle className="w-4 h-4 text-white shrink-0" />
                  <span className="truncate">{t('contact.directWhatsApp')}</span>
                  <ExternalLink className="w-3 h-3 ml-auto opacity-70 group-hover:opacity-100" />
                </a>

                {/* WhatsApp Group Invite */}
                <a
                  href={SITE_CONFIG.contact.whatsappGroupInviteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white hover:bg-slate-50 border border-[#CFE1F3] text-[#0B224E] text-xs font-bold transition-colors group shadow-xs"
                >
                  <Users className="w-4 h-4 text-[#0B224E] shrink-0" />
                  <span className="truncate">{t('contact.joinGroup')}</span>
                  <ExternalLink className="w-3 h-3 ml-auto opacity-70 group-hover:opacity-100" />
                </a>

                {/* Facebook Page */}
                <a
                  href={SITE_CONFIG.contact.facebookPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[#1877F2] hover:bg-blue-700 text-white text-xs font-bold transition-colors shadow-xs group"
                >
                  <span className="w-4 h-4 flex items-center justify-center font-black">f</span>
                  <span className="truncate">{t('contact.facebook')}</span>
                  <ExternalLink className="w-3 h-3 ml-auto opacity-70 group-hover:opacity-100" />
                </a>

                {/* YouTube Channel */}
                <a
                  href={SITE_CONFIG.contact.youtubeChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FF0000] hover:bg-red-700 text-white text-xs font-bold transition-colors shadow-xs group"
                >
                  <span className="w-4 h-4 flex items-center justify-center font-black">▶</span>
                  <span className="truncate">{t('contact.youtube')}</span>
                  <ExternalLink className="w-3 h-3 ml-auto opacity-70 group-hover:opacity-100" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Admission Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-white border-2 border-[#CFE1F3] shadow-lg relative">
              
              <div className="mb-6">
                <span className="text-xs font-black uppercase tracking-wider text-[#0B224E] bg-blue-100/70 px-3 py-1 rounded-full inline-block mb-2">
                  {isBn ? 'ভর্তি অনুসন্ধান' : 'Admission Inquiry'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0B224E]">
                  {t('contact.formTitle')}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
                  {t('contact.formSub')}
                </p>
              </div>

              {/* Informational banner explaining WhatsApp bridge */}
              <div className="mb-6 p-3.5 rounded-2xl bg-[#EEF4FB] border border-[#CFE1F3] text-xs text-slate-700">
                {t('contact.placeholderNotice')}
              </div>

              {errorMsg && (
                <div className="mb-6 p-3 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {success && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-sm text-emerald-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>{isBn ? 'তথ্য তৈরি হয়েছে!' : 'Inquiry Prepared!'}</span>
                  </div>
                  <p>
                    {isBn
                      ? 'হোয়াটসঅ্যাপ উইন্ডোটি না খুলে থাকলে নিচের বাটনে ক্লিক করে সরাসরি বার্তা পাঠান।'
                      : 'If WhatsApp did not launch automatically, you can send your inquiry directly via WhatsApp or call us.'}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B224E] mb-1.5">
                    {t('contact.nameLabel')}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={isBn ? 'যেমন: মোহাম্মদ তানভীর' : 'e.g. Tanvir Ahmed'}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFD] border border-[#CFE1F3] focus:bg-white focus:border-[#0B224E] focus:ring-1 focus:ring-[#0B224E] text-[#0B224E] text-sm outline-none transition-colors placeholder:text-slate-400"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B224E] mb-1.5">
                    {t('contact.phoneLabel')}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="01XXXXXXXXX"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFD] border border-[#CFE1F3] focus:bg-white focus:border-[#0B224E] focus:ring-1 focus:ring-[#0B224E] text-[#0B224E] text-sm font-mono outline-none transition-colors placeholder:text-slate-400"
                  />
                </div>

                {/* Program Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B224E] mb-1.5">
                    {t('contact.programLabel')}
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFD] border border-[#CFE1F3] focus:bg-white focus:border-[#0B224E] focus:ring-1 focus:ring-[#0B224E] text-[#0B224E] text-sm outline-none transition-colors font-medium"
                  >
                    <option value="HSC Science">HSC Science (এইচএসসি বিজ্ঞান)</option>
                    <option value="University Admission">University Admission (বিশ্ববিদ্যালয় ভর্তি)</option>
                    <option value="Medical Admission">Medical Admission (মেডিকেল ভর্তি)</option>
                    <option value="Engineering Admission">Engineering Admission (ইঞ্জিনিয়ারিং ভর্তি)</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B224E] mb-1.5">
                    {t('contact.messageLabel')}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={isBn ? 'আপনার ব্যাচ বা যেকোনো জিজ্ঞাসা থাকলে লিখুন...' : 'Any specific question regarding batch timing or subject focus...'}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFD] border border-[#CFE1F3] focus:bg-white focus:border-[#0B224E] focus:ring-1 focus:ring-[#0B224E] text-[#0B224E] text-sm outline-none transition-colors placeholder:text-slate-400 resize-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-black text-[#0B224E] bg-[#FFC107] hover:bg-[#F59E0B] text-sm shadow-md transition-all active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t('contact.submitBtn')}</span>
                  </button>

                  <a
                    href={`tel:${SITE_CONFIG.contact.phoneTel}`}
                    className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-bold text-white bg-[#0B224E] hover:bg-[#0E3572] text-xs sm:text-sm transition-colors whitespace-nowrap shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-[#FFC107]" />
                    <span className="font-mono">{SITE_CONFIG.contact.phoneDisplay}</span>
                  </a>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
