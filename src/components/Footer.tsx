import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SITE_CONFIG } from '../config/siteConfig';
import { Phone, MapPin, MessageCircle, ExternalLink, ArrowUp, Users } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const isBn = language === 'bn';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B224E] text-blue-100 border-t border-white/10 text-sm text-left pb-20 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          
          {/* Brand Column (Col Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/20 bg-white/10 p-1 shadow-sm">
                <img
                  src={SITE_CONFIG.brand.logoUrl}
                  alt="HIGH ACADEMY Crest"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-white block">
                  HIGH ACADEMY
                </span>
                <span className="text-xs text-[#FFC107] font-bold tracking-wide">
                  {SITE_CONFIG.brand.establishedTextEn} · SYLHET
                </span>
              </div>
            </div>

            <p className="font-bengali text-base text-[#FFC107] font-bold italic">
              "{SITE_CONFIG.brand.taglineBn}"
            </p>

            <p className="text-xs text-blue-200 leading-relaxed max-w-sm font-normal">
              {isBn
                ? 'সিলেটের প্রাণকেন্দ্র চৌহাট্টা পয়েন্টে অবস্থিত এইচএসসি বিজ্ঞান ও বিশ্ববিদ্যালয় ভর্তি প্রস্তুতির বিশেষায়িত কোচিং প্রতিষ্ঠান।'
                : 'Premier coaching institution in Chowhatta Point, Sylhet, dedicated to HSC Science and University Admission excellence.'}
            </p>

            <div className="pt-2 flex items-center gap-3">
              {/* WhatsApp Direct */}
              <a
                href={SITE_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-emerald-600 border border-white/15 flex items-center justify-center text-emerald-400 hover:text-white shadow-xs transition-colors"
                title="WhatsApp Direct Chat"
                aria-label="WhatsApp Direct Chat"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              {/* WhatsApp Group */}
              <a
                href={SITE_CONFIG.contact.whatsappGroupInviteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-emerald-700 border border-white/15 flex items-center justify-center text-emerald-300 hover:text-white shadow-xs transition-colors"
                title="Public WhatsApp Group"
                aria-label="Public WhatsApp Group"
              >
                <Users className="w-4 h-4" />
              </a>

              {/* Facebook */}
              <a
                href={SITE_CONFIG.contact.facebookPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#1877F2] border border-white/15 flex items-center justify-center text-blue-300 hover:text-white shadow-xs transition-colors"
                title="Official Facebook Page"
                aria-label="Official Facebook Page"
              >
                <span className="font-black text-xs">f</span>
              </a>

              {/* YouTube */}
              <a
                href={SITE_CONFIG.contact.youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#FF0000] border border-white/15 flex items-center justify-center text-red-400 hover:text-white shadow-xs transition-colors"
                title="Official YouTube Channel"
                aria-label="Official YouTube Channel"
              >
                <span className="font-black text-xs">▶</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-[#FFC107] transition-colors">{t('nav.home')}</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FFC107] transition-colors">{t('nav.about')}</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-[#FFC107] transition-colors">{t('nav.programs')}</a>
              </li>
              <li>
                <a href="#teachers" className="hover:text-[#FFC107] transition-colors">{t('nav.teachers')}</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#FFC107] transition-colors">{t('nav.whyUs')}</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FFC107] transition-colors">{t('nav.contact')}</a>
              </li>
            </ul>
          </div>

          {/* Academic Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              {t('footer.programsTitle')}
            </h4>
            <ul className="space-y-2 text-xs">
              {SITE_CONFIG.programs.map((p) => (
                <li key={p.id}>
                  <a href="#programs" className="hover:text-[#FFC107] transition-colors block">
                    {isBn ? p.titleBn : p.titleEn}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              {t('footer.contactTitle')}
            </h4>
            <div className="space-y-2.5 text-xs text-blue-100">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FFC107] shrink-0 mt-0.5" />
                <span>
                  {isBn ? SITE_CONFIG.contact.addressBn : SITE_CONFIG.contact.addressEn}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FFC107] shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.contact.phoneTel}`}
                  className="font-mono text-white font-bold hover:text-[#FFC107] transition-colors"
                >
                  {SITE_CONFIG.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={SITE_CONFIG.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 font-bold hover:underline"
                >
                  WhatsApp: {SITE_CONFIG.contact.phoneDisplay}
                </a>
              </div>
              <div className="pt-1">
                <a
                  href={SITE_CONFIG.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-[#FFC107] font-bold hover:underline"
                >
                  <span>Google Maps Location</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-300">
          <p>{t('footer.copyright')}</p>
          <div className="flex items-center gap-4">
            <span>{t('footer.madeWith')}</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-colors"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-[#FFC107]" />
            </button>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="mt-6 pt-4 border-t border-white/5 text-center">
          <p className="text-[12px] sm:text-[13px] text-blue-200/60 font-normal tracking-wide">
            Created by <span className="text-[#FFC107]/90 font-medium">Juboraj</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
