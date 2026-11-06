import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SITE_CONFIG, ProgramItem } from '../config/siteConfig';
import { FlaskConical, GraduationCap, Stethoscope, Settings, ArrowRight, MessageCircle } from 'lucide-react';
import { ProgramModal } from './ProgramModal';

interface ProgramsProps {
  onOpenInquiry: (programId?: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onOpenInquiry }) => {
  const { language, t } = useLanguage();
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);

  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'atom':
        return <FlaskConical className="w-8 h-8 text-[#0B224E]" />;
      case 'graduation-cap':
        return <GraduationCap className="w-8 h-8 text-[#0B224E]" />;
      case 'stethoscope':
        return <Stethoscope className="w-8 h-8 text-[#0B224E]" />;
      case 'compass':
        return <Settings className="w-8 h-8 text-[#0B224E]" />;
      default:
        return <GraduationCap className="w-8 h-8 text-[#0B224E]" />;
    }
  };

  return (
    <section id="programs" className="py-16 sm:py-20 bg-[#EEF4FB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Signature Navy Pill + Yellow Side Lines from Reference */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[2.5px] w-10 sm:w-16 bg-[#FFC107] rounded-full" />
            <span className="bg-[#0B224E] text-white px-6 py-2 rounded-full text-sm font-bold shadow-md tracking-wide">
              {language === 'bn' ? 'আমাদের কোর্সসমূহ (Our Courses)' : 'Our Courses'}
            </span>
            <span className="h-[2.5px] w-10 sm:w-16 bg-[#FFC107] rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B224E] tracking-tight mt-2">
            {t('programs.heading')}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
            {t('programs.subheading')}
          </p>
        </div>

        {/* 4 Program Cards Grid Matching Reference Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.programs.map((program) => {
            const isBn = language === 'bn';
            const title = isBn ? program.titleBn : program.titleEn;
            const category = isBn ? program.categoryBn : program.categoryEn;
            const shortDesc = isBn ? program.shortDescBn : program.shortDescEn;

            const waText = encodeURIComponent(
              `Hello HIGH ACADEMY, I would like to inquire about the "${program.titleEn}" batch details.`
            );
            const waUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${waText}`;

            return (
              <div
                key={program.id}
                className="group flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-b from-white to-[#F6F9FD] border border-[#CFE1F3] hover:border-[#0B224E]/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="flex flex-col items-center">
                  {/* Rounded Icon Slot with Blue Outline Icon from Reference */}
                  <div className="w-16 h-16 rounded-2xl bg-[#E8F1FC] border border-[#BFD9F5] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-xs">
                    {getProgramIcon(program.iconName)}
                  </div>

                  {/* Program Title in Deep Navy */}
                  <h3 className="text-lg sm:text-xl font-black text-[#0B224E] mb-1.5 leading-snug">
                    {title}
                  </h3>

                  {/* Kicker */}
                  <span className="text-[11px] font-bold text-[#0E3572] bg-blue-100/70 px-2.5 py-0.5 rounded-full mb-3 uppercase tracking-wider">
                    {category}
                  </span>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 text-left">
                    {shortDesc}
                  </p>
                </div>

                {/* Card Action Controls */}
                <div className="pt-4 border-t border-blue-100/80 flex flex-col gap-2">
                  <button
                    onClick={() => setSelectedProgram(program)}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold rounded-xl bg-[#0B224E] hover:bg-[#0E3572] text-white shadow-xs transition-colors"
                  >
                    <span>{t('programs.learnMore')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold rounded-xl text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{t('programs.inquireNow')}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Course Registration */}
        <div className="mt-12 p-4 rounded-2xl bg-white border border-[#CFE1F3] text-xs sm:text-sm text-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
          <p>
            {language === 'bn'
              ? 'ভর্তি ফি, সময়সূচি ও ব্যাচের আসন সংখ্যা জানতে সরাসরি আমাদের চৌহাট্টা কার্যালয়ে আসুন অথবা ফোন করুন।'
              : 'For current batch schedules, seat capacity, and admission formalities, visit our Chowhatta center or call directly.'}
          </p>
          <a
            href={`tel:${SITE_CONFIG.contact.phoneTel}`}
            className="text-[#0B224E] font-black font-mono text-base hover:text-[#0E3572] transition-colors whitespace-nowrap shrink-0"
          >
            {SITE_CONFIG.contact.phoneDisplay}
          </a>
        </div>

      </div>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <ProgramModal
          program={selectedProgram}
          onClose={() => setSelectedProgram(null)}
          onOpenInquiry={onOpenInquiry}
        />
      )}
    </section>
  );
};
