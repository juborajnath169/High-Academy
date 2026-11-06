import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SITE_CONFIG } from '../config/siteConfig';
import { Target, Compass, MapPin, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  const { language, t } = useLanguage();
  const isBn = language === 'bn';

  return (
    <section id="about" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Card Wrapper (Matching the reference image style) */}
        <div className="rounded-3xl bg-[#F4F8FD] border border-[#CFE1F3] p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Campus Building Showcase (From Reference) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-white shadow-lg bg-gradient-to-br from-[#0B224E] to-[#124285] aspect-4/3 flex flex-col justify-between p-6 text-white">
                
                {/* Visual architectural wave & building mockup */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-600/40 via-transparent to-transparent pointer-events-none" />
                
                <div className="relative z-10 flex items-center justify-between">
                  <span className="bg-[#FFC107] text-[#0B224E] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                    CAMPUS SYLHET
                  </span>
                  <span className="text-xs font-mono font-bold text-blue-200">
                    ESTD. 2012
                  </span>
                </div>

                {/* Building Signboard Representation */}
                <div className="relative z-10 my-auto text-center py-6 px-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-inner">
                  <div className="w-12 h-12 rounded-xl bg-white p-1 mx-auto mb-2 shadow">
                    <img
                      src={SITE_CONFIG.brand.logoUrl}
                      alt="HIGH ACADEMY"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="inline-block bg-[#0B224E] text-white px-5 py-2 rounded-lg border border-blue-400 font-black tracking-tight text-lg shadow">
                    HIGH ACADEMY
                  </div>
                  <p className="text-xs text-blue-100 font-medium mt-2">
                    Niloy-3, Chowhatta Point, Sylhet
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between text-[11px] text-blue-100 pt-2 border-t border-white/15">
                  <span>{isBn ? 'আধুনিক শিক্ষা অবকাঠামো' : 'Modern Academic Infrastructure'}</span>
                  <span className="text-[#FFC107] font-bold">12+ Years</span>
                </div>

              </div>
            </div>

            {/* Right Column: Content matching the reference image */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Badge: About HIGH ACADEMY (Navy pill with yellow HIGH ACADEMY) */}
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0B224E] text-white text-xs font-bold shadow-sm mb-4">
                <span>{isBn ? 'পরিচিতি' : 'About'}</span>
                <span className="text-[#FFC107]">HIGH ACADEMY</span>
              </div>

              {/* Main Headline from Reference: A Trusted Name in Education */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B224E] tracking-tight leading-tight mb-4">
                {isBn ? 'শিক্ষায় এক বিশ্বস্ত ও শীর্ষস্থানীয় নাম' : 'A Trusted Name in Education'}
              </h2>

              {/* Description Prose from Reference */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                {isBn
                  ? '২০১২ সাল থেকে সিলেটের কেন্দ্রস্থল চৌহাট্টা পয়েন্টে অবস্থিত হাই একাডেমি অগণিত শিক্ষার্থীর মেধা বিকাশ ও উজ্জ্বল ভবিষ্যৎ গঠনে নিবেদিতপ্রাণ। অভিজ্ঞ শিক্ষকমণ্ডলী, আধুনিক পাঠদান পদ্ধতি এবং শিক্ষার্থীবান্ধব পরিবেশের সমন্বয়ে আমরা আপনার একাডেমিক স্বপ্নজয়ে সর্বদা প্রতিজ্ঞাবদ্ধ।'
                  : 'Since 2012, HIGH ACADEMY has been dedicated to shaping a bright future for countless students. With experienced faculty, modern teaching methods and a student-friendly environment, we are committed to your academic success.'}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {t('about.p2')}
              </p>

              {/* Verified Points Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-6">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#CFE1F3]">
                  <Target className="w-5 h-5 text-[#0B224E] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#0B224E] block">
                      {t('about.visionTitle')}
                    </span>
                    <span className="text-xs text-slate-600 leading-tight block mt-0.5">
                      {t('about.visionDesc')}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#CFE1F3]">
                  <Compass className="w-5 h-5 text-[#0B224E] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#0B224E] block">
                      {t('about.missionTitle')}
                    </span>
                    <span className="text-xs text-slate-600 leading-tight block mt-0.5">
                      {t('about.missionDesc')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button from Reference: Know More → */}
              <a
                href="#programs"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#0B224E] hover:bg-[#0E3572] shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <span>{isBn ? 'আরো জানুন (Know More) →' : 'Know More →'}</span>
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
