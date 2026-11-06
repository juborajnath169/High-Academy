import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SITE_CONFIG } from '../config/siteConfig';
import { Phone, Send } from 'lucide-react';

interface MobileActionBarProps {
  onOpenInquiry: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenInquiry }) => {
  const { language } = useLanguage();
  const isBn = language === 'bn';

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B224E] border-t-2 border-[#FFC107] p-2 shadow-2xl">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        
        {/* Left Action: 📞 Call Now (Deep Navy with White text) */}
        <a
          href={`tel:${SITE_CONFIG.contact.phoneTel}`}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-extrabold text-xs sm:text-sm transition-colors active:scale-98"
        >
          <Phone className="w-4 h-4 text-[#FFC107]" />
          <span>{isBn ? 'সরাসরি কল দিন' : 'Call Now'}</span>
        </a>

        {/* Right Action: 🎓 Get Admission (Golden Yellow with Deep Navy text) */}
        <button
          onClick={onOpenInquiry}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#FFC107] hover:bg-[#F59E0B] text-[#0B224E] font-extrabold text-xs sm:text-sm shadow-md transition-colors active:scale-98"
        >
          <Send className="w-4 h-4 text-[#0B224E]" />
          <span>{isBn ? 'ভর্তি তথ্য নিন' : 'Get Admission'}</span>
        </button>

      </div>
    </div>
  );
};
