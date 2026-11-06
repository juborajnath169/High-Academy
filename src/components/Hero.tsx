import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SITE_CONFIG } from '../config/siteConfig';
import { 
  GraduationCap, 
  BookOpen, 
  MapPin, 
  Phone, 
  FlaskConical, 
  Stethoscope, 
  Settings, 
  ArrowRight 
} from 'lucide-react';

interface HeroProps {
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  const { language } = useLanguage();
  const isBn = language === 'bn';

  const programHighlights = [
    {
      id: 'hsc-science',
      titleEn: 'HSC Science',
      titleBn: 'এইচএসসি বিজ্ঞান',
      subEn: 'Board CQ & MCQ Foundation',
      subBn: 'বোর্ড পরীক্ষা ও ধারণা স্পষ্টকরণ',
      icon: <FlaskConical className="w-5 h-5 text-[#0B224E] group-hover:text-[#FFC107] transition-colors" />,
    },
    {
      id: 'university-admission',
      titleEn: 'University Admission',
      titleBn: 'বিশ্ববিদ্যালয় ভর্তি',
      subEn: 'DU, SUST, GST & Science Units',
      subBn: 'ঢাবি, সাস্ট, জিএসটি ও বিজ্ঞান ইউনিট',
      icon: <GraduationCap className="w-5 h-5 text-[#0B224E] group-hover:text-[#FFC107] transition-colors" />,
    },
    {
      id: 'medical-admission',
      titleEn: 'Medical Admission',
      titleBn: 'মেডিকেল ভর্তি',
      subEn: 'MBBS & Dental Entrance Prep',
      subBn: 'এমবিবিএস ও ডেন্টাল ভর্তি পরীক্ষা',
      icon: <Stethoscope className="w-5 h-5 text-[#0B224E] group-hover:text-[#FFC107] transition-colors" />,
    },
    {
      id: 'engineering-admission',
      titleEn: 'Engineering Admission',
      titleBn: 'ইঞ্জিনিয়ারিং ভর্তি',
      subEn: 'BUET, CKET & Written Drills',
      subBn: 'বুয়েট, চুয়েট, কুয়েট ও রুয়েট',
      icon: <Settings className="w-5 h-5 text-[#0B224E] group-hover:text-[#FFC107] transition-colors" />,
    },
  ];

  return (
    <section 
      id="home" 
      className="relative pt-10 pb-16 sm:pt-14 sm:pb-20 md:pt-16 md:pb-24 bg-gradient-to-b from-[#F2F7FC] via-[#FFFFFF] to-[#EEF4FB] text-[#0B224E] overflow-hidden"
    >
      {/* Soft atmospheric lighting and subtle architectural radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/60 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-200/20 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* 1. Official Crest Logo & Subtle ESTD. 2012 Badge */}
        <div className="flex flex-col items-center mb-5 sm:mb-6">
          <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 p-3 sm:p-3.5 md:p-4 rounded-2xl sm:rounded-3xl bg-white border-2 border-[#CFE1F3] shadow-lg shadow-blue-950/10 hover:shadow-xl hover:shadow-blue-950/15 ring-4 ring-white/80 transition-all duration-300 hover:scale-[1.03] mb-3.5 sm:mb-4 flex items-center justify-center">
            <img
              src={SITE_CONFIG.brand.logoUrl}
              alt="HIGH ACADEMY Official Crest"
              className="w-full h-full object-contain select-none drop-shadow-xs"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#CFE1F3] shadow-xs text-xs font-bold text-[#0B224E]">
            <span className="w-2 h-2 rounded-full bg-[#FFC107] animate-pulse" />
            <span className="font-mono tracking-wider">{SITE_CONFIG.brand.establishedTextEn}</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600 font-medium">
              {isBn ? 'চৌহাট্টা পয়েন্ট, সিলেট' : 'Chowhatta Point, Sylhet'}
            </span>
          </div>
        </div>

        {/* 2. Main Hero Branding: Center-Aligned, Prominent HIGH ACADEMY in Premium Deep Navy Blue */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#0B224E] tracking-tight leading-none mb-3 sm:mb-4 select-none">
          HIGH ACADEMY
        </h1>

        {/* 3. Bengali Tagline: "স্বপ্ন জয়ের পথে সঠিক দিকনির্দেশনা" */}
        <div className="mb-4 sm:mb-5 max-w-2xl">
          <p className="font-bengali text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0E3572] tracking-tight leading-snug">
            {isBn ? 'স্বপ্ন জয়ের পথে সঠিক দিকনির্দেশনা' : 'Proper Guidance on the Path to Victory'}
          </p>
          <div className="flex items-center justify-center gap-2 mt-2 text-xs sm:text-sm font-bold text-[#B8860B] tracking-wider">
            <span className="w-6 sm:w-10 h-[1.5px] bg-[#FFC107]" />
            <span>{isBn ? 'Your Dream • Our Commitment' : 'Your Dream • Our Commitment'}</span>
            <span className="w-6 sm:w-10 h-[1.5px] bg-[#FFC107]" />
          </div>
        </div>

        {/* 4. Short Introduction describing HIGH ACADEMY as an educational institution in Sylhet */}
        <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8 sm:mb-10 font-normal">
          {isBn
            ? 'সিলেটের প্রাণকেন্দ্র চৌহাট্টা পয়েন্টে অবস্থিত এক নির্ভরযোগ্য শিক্ষাপ্রতিষ্ঠান। ২০১২ সাল থেকে অভিজ্ঞ মেন্টরদের নিবিড় তত্ত্বাবধানে এইচএসসি বিজ্ঞান এবং বিশ্ববিদ্যালয় ভর্তি পরীক্ষার সুশৃঙ্খল পাঠদান।'
            : 'A premier educational coaching institution located at Chowhatta Point, Sylhet. Dedicated to concept-based learning, examination temperament, and disciplined mentoring for HSC Science and University Admission since 2012.'}
        </p>

        {/* 5. Two Prominent CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto mb-12 sm:mb-14">
          {/* Primary CTA: ভর্তি সংক্রান্ত তথ্য */}
          <button
            onClick={onOpenInquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm sm:text-base font-extrabold text-[#0B224E] bg-[#FFC107] hover:bg-[#F59E0B] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B224E]"
          >
            <GraduationCap className="w-5 h-5 text-[#0B224E]" />
            <span>{isBn ? 'ভর্তি সংক্রান্ত তথ্য' : 'Admission Information'}</span>
            <ArrowRight className="w-4 h-4 text-[#0B224E]" />
          </button>

          {/* Secondary CTA: আমাদের প্রোগ্রামসমূহ */}
          <a
            href="#programs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-bold text-[#0B224E] bg-white hover:bg-slate-50 border-2 border-[#0B224E]/25 hover:border-[#0B224E] shadow-xs transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B224E]"
          >
            <BookOpen className="w-4 h-4 text-[#0B224E]" />
            <span>{isBn ? 'আমাদের প্রোগ্রামসমূহ' : 'Our Academic Programs'}</span>
          </a>
        </div>

        {/* 6. Academic Programs Showcase: 4 Distinctive Cards */}
        <div className="w-full max-w-4xl pt-6 border-t border-[#CFE1F3]">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-[2px] w-8 sm:w-14 bg-[#FFC107] rounded-full" />
            <span className="text-xs font-black uppercase tracking-wider text-[#0B224E] bg-blue-100/70 px-4 py-1.5 rounded-full">
              {isBn ? 'আমাদের মূল শিক্ষাক্রম' : 'Academic Programs'}
            </span>
            <span className="h-[2px] w-8 sm:w-14 bg-[#FFC107] rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
            {programHighlights.map((prog) => (
              <a
                key={prog.id}
                href="#programs"
                className="group p-4 rounded-2xl bg-white border border-[#CFE1F3] hover:border-[#0E3572] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#EEF4FB] group-hover:bg-[#0B224E] flex items-center justify-center transition-colors mb-3">
                    {prog.icon}
                  </div>
                  <h3 className="font-extrabold text-[#0B224E] text-sm sm:text-base group-hover:text-[#0E3572] transition-colors leading-snug">
                    {isBn ? prog.titleBn : prog.titleEn}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                    {isBn ? prog.subBn : prog.subEn}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#0E3572] group-hover:text-[#FFC107] transition-colors">
                  <span>{isBn ? 'বিস্তারিত দেখুন' : 'Explore Program'}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 7. Quick Location & Hotline Indicator */}
        <div className="mt-8 pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-500">
          <span className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#0E3572]" />
            {isBn ? SITE_CONFIG.contact.addressBn : SITE_CONFIG.contact.addressEn}
          </span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <a
            href={`tel:${SITE_CONFIG.contact.phoneTel}`}
            className="flex items-center gap-1.5 font-bold text-[#0B224E] hover:text-[#0E3572] font-mono"
          >
            <Phone className="w-3.5 h-3.5 text-[#FFC107]" />
            <span>{SITE_CONFIG.contact.phoneDisplay}</span>
          </a>
        </div>

      </div>

      {/* Decorative Wave Transition into Programs Section */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-[#EEF4FB] rounded-t-[32px] pointer-events-none" />
    </section>
  );
};
