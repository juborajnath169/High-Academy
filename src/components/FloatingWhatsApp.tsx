import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SITE_CONFIG } from '../config/siteConfig';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const defaultGreeting = encodeURIComponent(
    `Hello HIGH ACADEMY, I am interested in your academic programs in Sylhet. Can you provide more information?`
  );
  const waUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${defaultGreeting}`;

  return (
    <aside aria-label="WhatsApp Support" className="fixed bottom-20 sm:bottom-6 right-5 sm:right-6 z-40 flex flex-col items-end">
      {/* Quick Greeting Popup */}
      {isOpen && (
        <div className="mb-3 w-72 bg-white border border-[#CFE1F3] rounded-3xl shadow-2xl p-4 text-left animate-fadeIn">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                <MessageCircle className="w-4 h-4" />
              </div>
              <span className="text-xs font-black text-[#0B224E]">HIGH ACADEMY</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-[#14233F] p-1"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 mb-3 leading-relaxed">
            {language === 'bn'
              ? 'আসসালামু আলাইকুম। ভর্তি বা ব্যাচ সংক্রান্ত তথ্যের জন্য সরাসরি আমাদের হোয়াটসঅ্যাপে বার্তা পাঠান।'
              : 'Hello! How can we assist you with our academic batches in Sylhet today?'}
          </p>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'হোয়াটসঅ্যাপে চ্যাট শুরু করুন' : 'Start WhatsApp Chat'}</span>
          </a>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="flex items-center gap-2.5">
        <span className="hidden sm:inline-block px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-800 text-xs font-bold shadow-md">
          {language === 'bn' ? 'হোয়াটসঅ্যাপে সরাসরি কথা বলুন' : 'Chat on WhatsApp'}
        </span>

        <button
          onClick={() => {
            window.open(waUrl, '_blank', 'noopener,noreferrer');
          }}
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-700/20 transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          title="Direct WhatsApp Chat with HIGH ACADEMY"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      </div>
    </aside>
  );
};
