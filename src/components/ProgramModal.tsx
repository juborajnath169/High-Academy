import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ProgramItem, SITE_CONFIG } from '../config/siteConfig';
import { X, CheckCircle, MessageCircle, Phone, ArrowRight, BookOpen } from 'lucide-react';

interface ProgramModalProps {
  program: ProgramItem | null;
  onClose: () => void;
  onOpenInquiry: (programId: string) => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({ program, onClose, onOpenInquiry }) => {
  const { language } = useLanguage();

  if (!program) return null;

  const isBn = language === 'bn';
  const title = isBn ? program.titleBn : program.titleEn;
  const category = isBn ? program.categoryBn : program.categoryEn;
  const fullDesc = isBn ? program.fullDescBn : program.fullDescEn;
  const features = isBn ? program.featuresBn : program.featuresEn;

  // Pre-filled WhatsApp message for this program
  const whatsappText = encodeURIComponent(
    `Hello HIGH ACADEMY, I am interested in inquiring about the "${program.titleEn}" program. Could you please share the batch details and admission procedure?`
  );
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${whatsappText}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B224E]/80 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white border border-[#CFE1F3] rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-[#0B224E] hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-8">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0E3572] bg-blue-100/70 px-2.5 py-0.5 rounded-full inline-block mb-1.5">
            {category}
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#0B224E]">
            {title}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            {isBn ? 'হাই একাডেমি • চৌহাট্টা পয়েন্ট, সিলেট' : 'HIGH ACADEMY • Chowhatta Point, Sylhet'}
          </p>
        </div>

        {/* Description */}
        <div className="space-y-4 mb-6 text-sm sm:text-base text-slate-700 leading-relaxed">
          <p>{fullDesc}</p>
        </div>

        {/* Curriculum & Key Focus Points */}
        <div className="mb-8 p-5 rounded-2xl bg-[#EEF4FB] border border-[#CFE1F3]">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B224E] mb-3 flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-[#0B224E]" />
            {isBn ? 'এই কোর্সের মূল বৈশিষ্ট্যসমূহ:' : 'Key Academic Focus Areas:'}
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#0B224E] shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-slate-100">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{isBn ? 'হোয়াটসঅ্যাপে তথ্য জানুন' : 'Inquire on WhatsApp'}</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onOpenInquiry(program.id);
            }}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-black text-[#0B224E] bg-[#FFC107] hover:bg-[#F59E0B] shadow-sm transition-colors"
          >
            <span>{isBn ? 'ভর্তি অনুসন্ধান ফর্ম' : 'Fill Inquiry Form'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-4 text-center">
          <a
            href={`tel:${SITE_CONFIG.contact.phoneTel}`}
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-[#0B224E] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#0B224E]" />
            <span>{isBn ? 'অথবা সরাসরি ফোন করুন:' : 'Or Call Directly:'} <span className="font-mono text-[#0B224E] font-black">{SITE_CONFIG.contact.phoneDisplay}</span></span>
          </a>
        </div>
      </div>
    </div>
  );
};
