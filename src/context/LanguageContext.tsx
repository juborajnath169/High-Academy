import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'bn' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<string, { bn: string; en: string }> = {
  // Navigation
  'nav.home': { bn: 'হোম', en: 'Home' },
  'nav.about': { bn: 'পরিচিতি', en: 'About' },
  'nav.programs': { bn: 'প্রোগ্রামসমূহ', en: 'Programs' },
  'nav.whyUs': { bn: 'কেন আমরা', en: 'Why Choose Us' },
  'nav.teachers': { bn: 'শিক্ষকমণ্ডলী', en: 'Teachers' },
  'nav.contact': { bn: 'যোগাযোগ', en: 'Contact' },
  'nav.inquiryBtn': { bn: 'ভর্তি তথ্য ও অনুসন্ধান', en: 'Admission Inquiry' },
  
  // Hero
  'hero.kicker': { bn: '— আপনার স্বপ্ন • আমাদের অঙ্গীকার —', en: '— Your Dream • Our Commitment —' },
  'hero.script': { bn: 'স্বপ্ন দেখো বড়... লক্ষ্য রাখো উঁচুতে...', en: 'Dream Big... Aim High...' },
  'hero.tagline': { bn: 'স্বপ্ন জয়ের অগ্রগামী, আমরা থামবো না !!!', en: 'Pioneering the Dream of Victory, We Will Not Stop!' },
  'hero.title': { bn: 'এইচএসসি ও ভর্তি পরীক্ষার শীর্ষস্থানীয় কোচিং সেন্টার', en: 'Premier Coaching Center for HSC & University Admission' },
  'hero.mainBn1': { bn: 'সাফল্যের পথে,', en: 'On the Path to Success,' },
  'hero.mainBn2': { bn: 'সবসময় পাশে!', en: 'Always by Your Side!' },
  'hero.subtext': { 
    bn: 'HSC Preparation & University Admission-এর জন্য বিশ্বস্ত ও আধুনিক কোচিং প্রতিষ্ঠান।', 
    en: 'Trusted and modern educational coaching institution for HSC Preparation & University Admission.' 
  },
  'hero.ctaInquiry': { bn: 'ভর্তি সম্পর্কে জানুন', en: 'Learn About Admission' },
  'hero.ctaPrograms': { bn: 'আমাদের সম্পর্কে দেখুন', en: 'About Our Academy' },
  'hero.locationChip': { bn: 'চৌহাট্টা পয়েন্ট, সিলেট', en: 'Chowhatta Point, Sylhet' },
  'hero.academicExcellence': { bn: '১২+ বছরের নিরবচ্ছিন্ন পাঠদান অভিজ্ঞতা', en: 'Over a Decade of Educational Dedication' },

  // Stats Strip (from reference image)
  'stats.happyStudentsCount': { bn: '৫,০০০+', en: '5K+' },
  'stats.happyStudentsLabel': { bn: 'কৃতী শিক্ষার্থী', en: 'Happy Students' },
  'stats.yearsCount': { bn: '১২+ বছর', en: '12+ Years' },
  'stats.yearsLabel': { bn: 'শিক্ষা অভিজ্ঞতা', en: 'of Excellence' },
  'stats.successCount': { bn: '৯৯%+', en: '99%+' },
  'stats.successLabel': { bn: 'সাফল্যের হার', en: 'Success Rate' },
  'teachers.quote': { bn: 'সেরাদের কাছ থেকে শিখুন, সেরা হোন', en: 'Learn from the best, be the best' },
  'bar.callNow': { bn: 'কল দিন', en: 'Call Now' },
  'bar.getAdmission': { bn: 'ভর্তি তথ্য', en: 'Get Admission' },

  // About
  'about.badge': { bn: 'হাই একাডেমি সম্পর্কে', en: 'About HIGH ACADEMY' },
  'about.heading': { bn: 'স্বপ্নকে বাস্তবে রূপ দিতে নিবেদিত এক বিশ্বস্ত বিদ্যাপীঠ', en: 'A Dedicated Institution Committed to Turning Aspirations into Reality' },
  'about.p1': { 
    bn: '২০১২ সালে সিলেটের শিক্ষানুরাগী শিক্ষক ও শুভানুধ্যায়ীদের সম্মিলিত উদ্যোগে হাই একাডেমি প্রতিষ্ঠিত হয়। চৌহাট্টা পয়েন্টের নিলয়-৩ এ অবস্থিত আমাদের ক্যাম্পাসটি দীর্ঘদিন ধরে বিজ্ঞান বিভাগের শিক্ষার্থীদের নির্ভরযোগ্য আশ্রয়স্থল হিসেবে পরিচিত।', 
    en: 'HIGH ACADEMY was established in 2012 at Niloy-3, Chowhatta Point, Sylhet. Over the years, it has stood as a beacon of academic rigor for students aiming for board supremacy and competitive university placements.' 
  },
  'about.p2': { 
    bn: 'আমরা বিশ্বাস করি প্রতিটি শিক্ষার্থীর মধ্যেই অপার সম্ভাবনা রয়েছে। সঠিক দিকনির্দেশনা, নিয়মিত অনুশীলন এবং শৃঙ্খলাপরায়ণ পরিবেশের সমন্বয়ে আমরা শিক্ষার্থীদের পরীক্ষার ভয় দূর করে তাদের আত্মবিশ্বাসী করে তুলি।', 
    en: 'We believe genuine success stems from structured conceptual mastery rather than passive memorization. Our mentors cultivate clarity, analytical thinking, and disciplined study habits.' 
  },
  'about.visionTitle': { bn: 'আমাদের দৃষ্টিভঙ্গি (Vision)', en: 'Our Vision' },
  'about.visionDesc': { 
    bn: 'বিজ্ঞান শিক্ষার প্রতি অনুরাগ সৃষ্টি এবং শিক্ষার্থীদের মেধা ও পরিশ্রমের সমন্বয় ঘটিয়ে তাদের কাঙ্ক্ষিত উচ্চশিক্ষা প্রতিষ্ঠানে পৌঁছানোর পথ সুগম করা।', 
    en: 'To nurture academic curiosity and empower every science student with rock-solid conceptual foundations to achieve their dream university and medical admissions.' 
  },
  'about.missionTitle': { bn: 'আমাদের লক্ষ্য (Mission)', en: 'Our Mission' },
  'about.missionDesc': { 
    bn: 'গুণগত পাঠদান, নিয়মিত মডেল টেস্ট, সময়োপযোগী পরামর্শ এবং আন্তরিক শিক্ষক সহযোগিতার মাধ্যমে প্রতিটি শিক্ষার্থীর মেধার সর্বোচ্চ বিকাশ ঘটানো।', 
    en: 'To provide high-standard classroom instruction, structured evaluation routines, and compassionate mentorship tailored to evolving examination standards.' 
  },
  'about.locationLabel': { bn: 'ক্যাম্পাস ঠিকানা:', en: 'Campus Location:' },

  // Programs
  'programs.badge': { bn: 'আমাদের পাঠ্যক্রম', en: 'Academic Offerings' },
  'programs.heading': { bn: 'বিজ্ঞান ও উচ্চশিক্ষার জন্য বিশেষায়িত কোর্সসমূহ', en: 'Specialized Programs for Science & Admissions' },
  'programs.subheading': { 
    bn: 'এইচএসসি বিজ্ঞান থেকে শুরু করে মেডিকেল, প্রকৌশল এবং বিশ্ববিদ্যালয় ভর্তি পরীক্ষার জন্য পরিকল্পিত কোর্সসমূহ।', 
    en: 'Engineered specifically for HSC Science students and candidates aspiring for top-tier competitive admissions.' 
  },
  'programs.learnMore': { bn: 'বিস্তারিত দেখুন', en: 'Learn More' },
  'programs.inquireNow': { bn: 'কোর্স সম্পর্কে জানুন', en: 'Inquire on WhatsApp' },

  // Why Us
  'whyUs.badge': { bn: 'আমাদের বিশেষত্ব', en: 'Our Educational Philosophy' },
  'whyUs.heading': { bn: 'কেন শিক্ষার্থীরা হাই একাডেমিকে বেছে নেয়?', en: 'Why Students & Parents Choose HIGH ACADEMY' },
  'whyUs.subheading': { 
    bn: 'কোনো অবাস্তব প্রতিশ্রুতি নয়, বরং সুশৃঙ্খল পাঠদান ও মেধা বিকাশের নির্ভরযোগ্য পরিবেশই আমাদের পরিচয়।', 
    en: 'Built on uncompromised academic discipline, transparent mentoring, and concept-first pedagogy.' 
  },

  // Teachers
  'teachers.badge': { bn: 'দক্ষ শিক্ষকমণ্ডলী', en: 'Our Faculty Roster' },
  'teachers.heading': { bn: 'অভিজ্ঞ ও নিবেদিত মেন্টরদের তত্ত্বাবধান', en: 'Mentored by Dedicated Subject Experts' },
  'teachers.subheading': { 
    bn: 'আসন্ন শিক্ষাবর্ষের জন্য বিষয়ভিত্তিক অভিজ্ঞ শিক্ষকগণের সমন্বয়ে প্রতিটি ব্যাচে পাঠদান পরিচালিত হয়।', 
    en: 'Our subject-specific educators lead rigorous classes in Physics, Chemistry, Mathematics, and Biology.' 
  },
  'teachers.updateNotice': { 
    bn: 'আসন্ন সেশনের শিক্ষক প্রোফাইল ও বিস্তারিত ক্লাস শিডিউল সরাসরি আমাদের কার্যালয়ে এসে সংগ্রহ করা যাবে।', 
    en: 'Final faculty rosters and individual mentor consultation hours are available at our Chowhatta branch.' 
  },
  'teachers.inquireFaculty': { bn: 'ক্লাস শিডিউল ও শিক্ষক তথ্য জানতে যোগাযোগ করুন', en: 'Inquire About Faculty Schedule' },

  // Contact
  'contact.badge': { bn: 'যোগাযোগ ও তথ্য', en: 'Get In Touch' },
  'contact.heading': { bn: 'ভর্তি তথ্য ও সরাসরি পরামর্শের জন্য আসুন', en: 'Visit Us or Reach Out for Admission Inquiries' },
  'contact.subheading': { 
    bn: 'যেকোনো কোর্স, ব্যাচ সময়সূচি বা ভর্তি সংক্রান্ত তথ্যের জন্য সরাসরি আমাদের নম্বরে ফোন করুন অথবা হোয়াটসঅ্যাপে বার্তা পাঠান।', 
    en: 'Have questions regarding our academic batches, seat capacity, or syllabi? Reach out directly via call or WhatsApp.' 
  },
  'contact.directPhone': { bn: 'সরাসরি ফোন কল', en: 'Direct Phone Call' },
  'contact.directWhatsApp': { bn: 'হোয়াটসঅ্যাপে চ্যাট করুন', en: 'Chat on WhatsApp' },
  'contact.joinGroup': { bn: 'হোয়াটসঅ্যাপ গ্রুপে যুক্ত হন', en: 'Join WhatsApp Group' },
  'contact.facebook': { bn: 'অফিসিয়াল ফেসবুক পেজ', en: 'Official Facebook Page' },
  'contact.youtube': { bn: 'ইউটিউব চ্যানেল', en: 'YouTube Channel' },
  'contact.maps': { bn: 'গুগল ম্যাপে লোকেশন', en: 'Location on Google Maps' },
  'contact.formTitle': { bn: 'ভর্তি অনুসন্ধান ফর্ম', en: 'Admission Inquiry Form' },
  'contact.formSub': { 
    bn: 'আপনার তথ্য লিখুন, সরাসরি আমাদের হোয়াটসঅ্যাপ বা মেসেজের মাধ্যমে যোগাযোগ করতে পারবেন।', 
    en: 'Fill in your details below to generate a pre-formatted inquiry directly sent via WhatsApp.' 
  },
  'contact.nameLabel': { bn: 'শিক্ষার্থীর পুরো নাম *', en: 'Student Full Name *' },
  'contact.phoneLabel': { bn: 'যোগাযোগের মোবাইল নম্বর *', en: 'Contact Mobile Number *' },
  'contact.programLabel': { bn: 'আগ্রহী প্রোগ্রাম বা কোর্স *', en: 'Interested Academic Program *' },
  'contact.messageLabel': { bn: 'আপনার জিজ্ঞাসা বা বার্তা (ঐচ্ছিক)', en: 'Your Question or Message (Optional)' },
  'contact.submitBtn': { bn: 'হোয়াটসঅ্যাপে বার্তা পাঠান', en: 'Send via WhatsApp' },
  'contact.callBtn': { bn: 'সরাসরি কল দিন', en: 'Call Directly: 01737481523' },
  'contact.placeholderNotice': { 
    bn: 'দ্রষ্টব্য: এই ফর্মটি কোনো অনলাইন অ্যাকাউন্ট বা পেমেন্ট প্রক্রিয়া করে না। এটি সরাসরি একাডেমির হোয়াটসঅ্যাপে আপনার তথ্য পৌঁছে দেবে।', 
    en: 'Note: This form does not create an online account or process payments. It connects you directly with our admissions counselor via WhatsApp.' 
  },

  // Footer
  'footer.quickLinks': { bn: 'দ্রুত লিংকসমূহ', en: 'Quick Navigation' },
  'footer.programsTitle': { bn: 'কোর্সসমূহ', en: 'Key Programs' },
  'footer.contactTitle': { bn: 'ঠিকানা ও যোগাযোগ', en: 'Office & Contact' },
  'footer.copyright': { 
    bn: '© ২০২৬ হাই একাডেমি (HIGH ACADEMY)। সর্বস্বত্ব সংরক্ষিত।', 
    en: '© 2026 HIGH ACADEMY. All rights reserved.' 
  },
  'footer.madeWith': { 
    bn: 'সিলেটের শিক্ষার্থীদের স্বপ্নজয়ের বিশ্বস্ত সহযোগী।', 
    en: 'Guiding dedicated students towards academic success in Sylhet.' 
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('bn');

  useEffect(() => {
    const saved = localStorage.getItem('high_academy_lang') as Language;
    if (saved === 'bn' || saved === 'en') {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('high_academy_lang', lang);
  };

  const toggleLanguage = () => {
    const nextLang = language === 'bn' ? 'en' : 'bn';
    handleSetLanguage(nextLang);
  };

  const t = (key: string): string => {
    if (!translations[key]) {
      return key;
    }
    return translations[key][language] || translations[key].en || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
