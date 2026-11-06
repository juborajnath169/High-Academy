import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SITE_CONFIG } from '../config/siteConfig';
import { UserCheck, BookOpen, Atom, FlaskConical, Calculator, Dna, Info, Phone, Award, Star, Monitor, Languages } from 'lucide-react';

export const Teachers: React.FC = () => {
  const { language, t } = useLanguage();
  const isBn = language === 'bn';

  const getSubjectIcon = (id: string) => {
    switch (id) {
      case 'faculty-physics':
        return <Atom className="w-8 h-8 text-[#0B224E]" />;
      case 'faculty-chemistry':
        return <FlaskConical className="w-8 h-8 text-[#0B224E]" />;
      case 'faculty-math':
        return <Calculator className="w-8 h-8 text-[#0B224E]" />;
      case 'faculty-biology':
        return <Dna className="w-8 h-8 text-[#0B224E]" />;
      default:
        return <BookOpen className="w-8 h-8 text-[#0B224E]" />;
    }
  };

  // Pastel circular backgrounds for avatars matching the reference image
  const circleColors = [
    'bg-[#BFDBFE] border-blue-300', // Blue
    'bg-[#FECDD3] border-rose-300', // Coral / Red-orange
    'bg-[#A7F3D0] border-emerald-300', // Teal
    'bg-[#C7D2FE] border-indigo-300', // Indigo / Purple
  ];

  const featured = SITE_CONFIG.featuredMentor;

  return (
    <section id="teachers" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Signature Yellow Lines from Reference Image */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-[2.5px] w-12 sm:w-20 bg-[#FFC107] rounded-full" />
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B224E] tracking-tight">
              {isBn ? 'আমাদের শিক্ষকমণ্ডলী' : 'Our Faculty'}
            </h2>
            <span className="h-[2.5px] w-12 sm:w-20 bg-[#FFC107] rounded-full" />
          </div>
          <p className="text-xs sm:text-sm font-semibold text-[#0B224E]/80 tracking-wide">
            {isBn ? 'সেরাদের কাছ থেকে শিখুন, সেরা হোন (Learn from the best, be the best)' : 'Learn from the best, be the best'}
          </p>
        </div>

        {/* Informational Faculty Notice */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-[#EEF4FB] border border-[#CFE1F3] flex items-start gap-3.5 text-xs sm:text-sm text-slate-700 text-left">
          <Info className="w-5 h-5 text-[#0B224E] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-[#0B224E]">
              {isBn ? 'শিক্ষক তালিকা সংক্রান্ত তথ্য' : 'Faculty Roster Information'}
            </p>
            <p className="text-slate-600 leading-relaxed">
              {isBn ? SITE_CONFIG.facultyNotice.bn : SITE_CONFIG.facultyNotice.en}
            </p>
          </div>
        </div>

        {/* FEATURED LEADERSHIP PROFILE: Abdul Hai (Preserved ABOVE All Other Teachers) */}
        <div className="mb-12 rounded-3xl bg-gradient-to-r from-[#0B224E] via-[#0E3572] to-[#124285] text-white p-6 sm:p-8 shadow-xl border border-white/10 text-left">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Featured Avatar / Emblem Lockup */}
            <div className="md:col-span-4 lg:col-span-3 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-white/10 border-2 border-[#FFC107] p-2 shadow-md flex items-center justify-center shrink-0 overflow-hidden">
                {featured.photoUrl ? (
                  <img
                    src={featured.photoUrl}
                    alt={isBn ? featured.nameBn : featured.nameEn}
                    className="w-full h-full object-cover object-top rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full rounded-xl bg-white flex flex-col items-center justify-center text-[#0B224E]">
                    <Award className="w-12 h-12 text-[#FFC107] mb-1" />
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#0B224E]">
                      CHIEF MENTOR
                    </span>
                  </div>
                )}
                <div className="absolute -top-2.5 -right-2.5 bg-[#FFC107] text-[#0B224E] text-[10px] font-black py-0.5 px-2.5 rounded-full shadow">
                  ESTD 2012
                </div>
              </div>
            </div>

            {/* Featured Details */}
            <div className="md:col-span-8 lg:col-span-9 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFC107] text-[#0B224E] text-xs font-black uppercase tracking-wider shadow-xs">
                <Star className="w-3.5 h-3.5 fill-[#0B224E]" />
                <span>{isBn ? 'প্রতিষ্ঠাতা ও প্রধান মেন্টর' : 'Founder & Chief Academic Mentor'}</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {isBn ? featured.nameBn : featured.nameEn}
                </h3>
                <p className="text-xs sm:text-sm text-blue-200 mt-0.5 font-medium">
                  {isBn ? 'প্রতিষ্ঠাতা ও প্রধান মেন্টর, হাই একাডেমি' : 'Founder & Chief Academic Mentor, HIGH ACADEMY'}
                </p>
              </div>

              {/* Teaching Subjects Box: Main Subject + Additional Classes */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/10 border border-white/15 space-y-3 max-w-xl">
                
                {/* Highlighted Primary Subject */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFC107] shrink-0">
                    {isBn ? 'মূল পাঠদান বিষয়:' : 'Main Subject:'}
                  </span>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#FFC107] text-[#0B224E] font-extrabold text-xs sm:text-sm shadow-xs">
                    <Calculator className="w-4 h-4 text-[#0B224E]" />
                    <span>{isBn ? 'উচ্চতর গণিত (Higher Mathematics)' : 'Higher Mathematics'}</span>
                  </div>
                </div>

                {/* Additional Classes: ICT & English */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 pt-2.5 border-t border-white/15">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-200 shrink-0">
                    {isBn ? 'অতিরিক্ত ক্লাস:' : 'Additional Classes:'}
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/15 border border-white/20 text-xs font-bold text-white shadow-xs">
                      <Monitor className="w-3.5 h-3.5 text-sky-300" />
                      <span>{isBn ? 'আইসিটি (ICT)' : 'ICT'}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/15 border border-white/20 text-xs font-bold text-white shadow-xs">
                      <Languages className="w-3.5 h-3.5 text-amber-300" />
                      <span>{isBn ? 'ইংরেজি (English)' : 'English'}</span>
                    </div>
                  </div>
                </div>

              </div>

              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed pt-0.5">
                {isBn ? featured.bioBn : featured.bioEn}
              </p>

              <div className="pt-2 border-t border-white/15 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-blue-200">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FFC107]" />
                  {isBn ? 'হাই একাডেমি প্রতিষ্ঠাতা • ২০১২' : 'Founder, HIGH ACADEMY • 2012'}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  {isBn ? 'সিলেটের শিক্ষার্থীদের মেধা বিকাশ' : 'Dedicated Mentorship in Sylhet'}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Subject Faculty Profile Cards with Circular Avatar Frames (From Reference) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {SITE_CONFIG.teachers.map((teacher, index) => {
            const name = isBn ? teacher.nameBn : teacher.nameEn;
            const subject = isBn ? teacher.subjectBn : teacher.subjectEn;
            const designation = isBn ? teacher.designationBn : teacher.designationEn;
            const bio = isBn ? teacher.bioBn : teacher.bioEn;
            const circleColor = circleColors[index % circleColors.length];

            return (
              <div
                key={teacher.id}
                className="group p-6 rounded-2xl bg-gradient-to-b from-white to-[#F8FAFD] border border-[#CFE1F3] hover:border-[#0B224E]/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex flex-col items-center">
                  
                  {teacher.photoUrl ? (
                    /* Professional 4:5 Vertical Rounded Rectangular Portrait Frame */
                    <div className="relative mb-4 flex justify-center">
                      <div className="relative w-28 h-35 sm:w-32 sm:h-40 rounded-2xl bg-white border-2 border-[#0B224E] ring-2 ring-[#FFC107] p-1.5 shadow-md shadow-blue-950/15 group-hover:scale-105 transition-transform overflow-hidden">
                        <img
                          src={teacher.photoUrl}
                          alt={name}
                          className="w-full h-full object-cover object-top rounded-xl"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  ) : !teacher.isPlaceholder ? (
                    /* Professional 4:5 Vertical Rounded Rectangular Portrait Frame (Awaiting Photo) */
                    <div className="relative mb-4 flex justify-center">
                      <div className="relative w-28 h-35 sm:w-32 sm:h-40 rounded-2xl bg-[#EEF4FB] border-2 border-[#0B224E] ring-2 ring-[#FFC107] p-1.5 shadow-md shadow-blue-950/15 group-hover:scale-105 transition-transform overflow-hidden flex flex-col items-center justify-center">
                        <div className="w-full h-full rounded-xl bg-white flex flex-col items-center justify-center p-3 text-center">
                          {getSubjectIcon(teacher.id)}
                          <span className="text-[10px] font-black uppercase tracking-wider text-[#0B224E] mt-2">
                            {name}
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Circular Avatar Placeholder with Colorful Pastel Ring (For Generic Department Slots) */
                    <div className="relative mb-4">
                      <div className={`w-24 h-24 rounded-full ${circleColor} border-2 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform overflow-hidden`}>
                        <div className="flex flex-col items-center justify-center text-[#0B224E]">
                          {getSubjectIcon(teacher.id)}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Subject Kicker */}
                  <span className="text-[11px] font-bold text-[#0E3572] bg-blue-100/70 px-2.5 py-0.5 rounded-full mb-1.5 uppercase tracking-wider">
                    {designation}
                  </span>

                  {/* Name Title in Deep Navy */}
                  <h3 className="text-base sm:text-lg font-black text-[#0B224E] mb-1">
                    {name}
                  </h3>

                  <p className="text-xs font-bold text-[#0E3572] mb-2">
                    {subject}
                  </p>

                  {/* Bio */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 text-left">
                    {bio}
                  </p>
                </div>

                {/* Card Footer Callout */}
                <div className="pt-3 border-t border-blue-100/80 text-[11px] text-slate-500 flex items-center justify-between">
                  <span>{isBn ? 'রুটিন:' : 'Routine:'}</span>
                  <span className="text-[#0B224E] font-bold">
                    {isBn ? 'কেন্দ্রীয় শিডিউল' : 'As Per Schedule'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA to consult faculty in person */}
        <div className="mt-10 text-center">
          <a
            href={`tel:${SITE_CONFIG.contact.phoneTel}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-[#0B224E] bg-[#EEF4FB] hover:bg-blue-100 border border-[#CFE1F3] transition-colors shadow-xs"
          >
            <Phone className="w-4 h-4 text-[#0B224E]" />
            <span>{t('teachers.inquireFaculty')}</span>
            <span className="font-mono text-[#0B224E] font-extrabold">({SITE_CONFIG.contact.phoneDisplay})</span>
          </a>
        </div>

      </div>
    </section>
  );
};
