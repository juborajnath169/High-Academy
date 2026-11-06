import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Trophy, BookOpen, BarChart3, Users, Star, Award, CheckCircle } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const { language, t } = useLanguage();
  const isBn = language === 'bn';

  const pillars = [
    {
      id: 'faculty',
      titleEn: 'Experienced & Dedicated Faculty',
      titleBn: 'অভিজ্ঞ ও নিবেদিতপ্রাণ শিক্ষকমণ্ডলী',
      descEn: 'Led by seasoned academic mentors with deep subject mastery.',
      descBn: 'বিষয়ভিত্তিক অভিজ্ঞ ও নিবেদিত শিক্ষকগণের সার্বক্ষণিক তত্ত্বাবধান।',
      icon: <Trophy className="w-8 h-8 text-[#FFC107]" />,
    },
    {
      id: 'curriculum',
      titleEn: 'Structured & Result-Oriented Curriculum',
      titleBn: 'পরিকল্পিত ও ফলাফলমুখী পাঠ্যক্রম',
      descEn: 'Comprehensive board syllabus and competitive admission strategies.',
      descBn: 'বোর্ড পরীক্ষা ও বিশ্ববিদ্যালয় ভর্তি পরীক্ষার পূর্ণাঙ্গ প্রস্তুতি।',
      icon: <BookOpen className="w-8 h-8 text-[#0B224E]" />,
    },
    {
      id: 'tests',
      titleEn: 'Regular Mock Tests & Performance Analysis',
      titleBn: 'নিয়মিত মডেল টেস্ট ও পারফরম্যান্স যাচাই',
      descEn: 'Real exam pattern simulations to build speed and accuracy.',
      descBn: 'প্রকৃত পরীক্ষার আদলে ওএমআর ও সৃজনশীল লিখিত মূল্যায়ন।',
      icon: <BarChart3 className="w-8 h-8 text-[#0B224E]" />,
    },
    {
      id: 'environment',
      titleEn: 'Student-Friendly Environment',
      titleBn: 'শিক্ষার্থীবান্ধব ও শৃঙ্খলাপরায়ণ পরিবেশ',
      descEn: 'Serene, disciplined learning halls in the center of Sylhet.',
      descBn: 'সিলেটের কেন্দ্রস্থল চৌহাট্টা পয়েন্টে নিরিবিলি ও অনুকূল পরিবেশ।',
      icon: <Users className="w-8 h-8 text-[#0B224E]" />,
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-[#F4F8FD] border-t border-[#CFE1F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Signature Navy Pill + Yellow Side Lines from Reference */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[2.5px] w-10 sm:w-16 bg-[#FFC107] rounded-full" />
            <div className="bg-[#0B224E] text-white px-6 py-2 rounded-full text-xs sm:text-sm font-black shadow-md tracking-wide">
              <span>{isBn ? 'কেন বেছে নেবেন ' : 'Why Choose '}</span>
              <span className="text-[#FFC107]">HIGH ACADEMY?</span>
            </div>
            <span className="h-[2.5px] w-10 sm:w-16 bg-[#FFC107] rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-[#0B224E] tracking-tight mt-1">
            {t('whyUs.heading')}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
            {t('whyUs.subheading')}
          </p>
        </div>

        {/* 4 Feature Cards Grid (Matching Reference Image) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((pillar) => {
            const title = isBn ? pillar.titleBn : pillar.titleEn;
            const desc = isBn ? pillar.descBn : pillar.descEn;

            return (
              <div
                key={pillar.id}
                className="p-6 rounded-2xl bg-white border border-[#CFE1F3] hover:border-[#0B224E]/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center justify-between"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#E8F1FC] border border-[#BFD9F5] flex items-center justify-center mb-4 shadow-xs">
                    {pillar.icon}
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-[#0B224E] mb-2 leading-snug">
                    {title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-[#0E3572]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#FFC107]" />
                  <span>{isBn ? 'হাই একাডেমি মানদণ্ড' : 'Core Benchmark'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* PROMINENT DEEP NAVY METRICS STRIP (Directly from Reference Image) */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#0B224E] text-white p-5 sm:p-7 shadow-xl border border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/15 text-center">
            
            {/* Stat 1: 5K+ Happy Students */}
            <div className="flex items-center justify-center gap-3.5 pt-2 sm:pt-0">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-[#FFC107]" />
              </div>
              <div className="text-left">
                <p className="text-2xl sm:text-3xl font-black text-white font-mono leading-none">
                  {t('stats.happyStudentsCount')}
                </p>
                <p className="text-xs font-semibold text-blue-200 mt-1 uppercase tracking-wider">
                  {t('stats.happyStudentsLabel')}
                </p>
              </div>
            </div>

            {/* Stat 2: 12+ Years of Excellence */}
            <div className="flex items-center justify-center gap-3.5 pt-4 sm:pt-0">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <Trophy className="w-6 h-6 text-[#FFC107]" />
              </div>
              <div className="text-left">
                <p className="text-2xl sm:text-3xl font-black text-white font-mono leading-none">
                  {t('stats.yearsCount')}
                </p>
                <p className="text-xs font-semibold text-blue-200 mt-1 uppercase tracking-wider">
                  {t('stats.yearsLabel')}
                </p>
              </div>
            </div>

            {/* Stat 3: 99%+ Success Rate */}
            <div className="flex items-center justify-center gap-3.5 pt-4 sm:pt-0">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <Star className="w-6 h-6 text-[#FFC107] fill-[#FFC107]" />
              </div>
              <div className="text-left">
                <p className="text-2xl sm:text-3xl font-black text-white font-mono leading-none">
                  {t('stats.successCount')}
                </p>
                <p className="text-xs font-semibold text-blue-200 mt-1 uppercase tracking-wider">
                  {t('stats.successLabel')}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
