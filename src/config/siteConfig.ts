/**
 * HIGH ACADEMY — Central Site Configuration
 * 
 * Edit this file to customize:
 * - Brand Details
 * - Social Media URLs
 * - Contact Numbers & WhatsApp links
 * - Google Maps URL
 * - Academic Programs & Faculty details
 */

export interface TeacherProfile {
  id: string;
  nameEn: string;
  nameBn: string;
  subjectEn: string;
  subjectBn: string;
  designationEn: string;
  designationBn: string;
  bioEn: string;
  bioBn: string;
  photoUrl?: string; // Leave empty or null to use the elegant typographic placeholder
  isPlaceholder: boolean;
}

export interface ProgramItem {
  id: string;
  titleEn: string;
  titleBn: string;
  categoryEn: string;
  categoryBn: string;
  shortDescEn: string;
  shortDescBn: string;
  fullDescEn: string;
  fullDescBn: string;
  iconName: 'atom' | 'graduation-cap' | 'stethoscope' | 'compass';
  featuresEn: string[];
  featuresBn: string[];
}

export const SITE_CONFIG = {
  brand: {
    name: "HIGH ACADEMY",
    establishedYear: 2012,
    establishedTextEn: "ESTD. 2012",
    establishedTextBn: "স্থাপিত ২০১২",
    taglineBn: "স্বপ্ন জয়ের অগ্রগামী, আমরা থামবো না !!!",
    taglineEn: "Pioneering the Dream of Victory, We Will Not Stop!",
    logoUrl: "/assets/aistudio/FB_IMG_1793824087269_9faa9d99.jpg",
  },

  contact: {
    // Official contact phone number in Sylhet
    phoneDisplay: "01737481523",
    phoneTel: "+8801737481523",
    
    // Address location
    addressEn: "Niloy-3, Chowhatta Point, Sylhet, Bangladesh",
    addressBn: "নিলয়-৩, চৌহাট্টা পয়েন্ট, সিলেট, বাংলাদেশ",
    
    // WhatsApp direct chat (uses wa.me format)
    // When clicked, it opens WhatsApp with pre-filled greeting message
    whatsappNumber: "8801737481523",
    whatsappUrl: "https://wa.me/8801737481523",
    
    // Public WhatsApp Group Invitation URL
    whatsappGroupInviteUrl: "https://chat.whatsapp.com/CQd9jy475IuDVz2ddLlopq?s=cl&p=a&iam=2",
    
    // Official Social Media Links
    facebookPageUrl: "https://www.facebook.com/share/1C9xr3SADk/",
    youtubeChannelUrl: "https://youtube.com/@highacademy?si=d3joDeUuC3gQX3xV",
    
    // Google Maps link placeholder pointing to Chowhatta Point, Sylhet
    googleMapsUrl: "https://maps.google.com/?q=Chowhatta+Point+Sylhet+Bangladesh",
    
    // Office hours
    hoursEn: "Saturday – Thursday: 9:00 AM – 8:00 PM (Friday Closed / Special Sessions)",
    hoursBn: "শনিবার – বৃহস্পতিবার: সকাল ৯:০০ – রাত ৮:০০ (শুক্রবার বন্ধ / বিশেষ ক্লাস)",
  },

  // Academic Programs (Strictly matching the 4 required programs)
  programs: [
    {
      id: "hsc-science",
      titleEn: "HSC Science",
      titleBn: "এইচএসসি বিজ্ঞান",
      categoryEn: "Academic Foundation",
      categoryBn: "একাডেমিক ভিত্তি",
      iconName: "atom",
      shortDescEn: "Comprehensive conceptual mastery of Physics, Chemistry, Higher Mathematics, and Biology for Board examination excellence.",
      shortDescBn: "পদার্থবিজ্ঞান, রসায়ন, উচ্চতর গণিত এবং জীববিজ্ঞান বিষয়ের গভীর ধারণাগত প্রস্তুতি ও বোর্ড পরীক্ষার পূর্ণাঙ্গ পাঠদান।",
      fullDescEn: "Our HSC Science program is structured to bridge foundational textbook understanding with higher-order creative analytical problem-solving. Students receive rigorous topic-wise breakdowns, standard question evaluation, and disciplined practice sessions.",
      fullDescBn: "এইচএসসি বিজ্ঞান প্রোগ্রামে বোর্ড সিলেবাসের প্রতিটি অধ্যায় সূক্ষ্মভাবে বিশ্লেষণ করে মৌলিক ধারণা স্পষ্ট করা হয়। সৃজনশীল প্রশ্নের সমাধান ও নিয়মিত মূল্যায়ন পরীক্ষার মাধ্যমে শিক্ষার্থীদের আত্মবিশ্বাস বৃদ্ধি করা হয়।",
      featuresEn: [
        "Rigorous topic-wise conceptual coverage",
        "Creative & Analytical CQ solving techniques",
        "Speed & accuracy practice for MCQs",
        "Chapter-wise comprehensive evaluation tests"
      ],
      featuresBn: [
        "অধ্যায়ভিত্তিক মৌলিক ধারণার গভীর পাঠদান",
        "সৃজনশীল প্রশ্ন সমাধানের কৌশল ও অনুশীলন",
        "এমসিকিউ সমাধানের গতি ও নির্ভুলতা বৃদ্ধি",
        "নিয়মিত সাপ্তাহিক ও অধ্যায়ভিত্তিক মূল্যায়ন পরীক্ষা"
      ]
    },
    {
      id: "university-admission",
      titleEn: "University Admission",
      titleBn: "বিশ্ববিদ্যালয় ভর্তি প্রস্তুতি",
      categoryEn: "Public University & Science Units",
      categoryBn: "পাবলিক বিশ্ববিদ্যালয় ও বিজ্ঞান ইউনিট",
      iconName: "graduation-cap",
      shortDescEn: "Targeted admission preparation for top public universities and Science ('Ka'/'A') unit examinations.",
      shortDescBn: "দেশের শীর্ষস্থানীয় পাবলিক বিশ্ববিদ্যালয় ও বিজ্ঞান ইউনিটের (ক/এ ইউনিট) ভর্তি পরীক্ষার নিখুঁত প্রস্তুতি।",
      fullDescEn: "Designed for science students aiming for premier general and science & technology universities (DU, SUST, JU, RU, CU, and GST). Focuses on high-yield question patterns, analytical shortcuts, and negative-marking risk mitigation.",
      fullDescBn: "পাবলিক বিশ্ববিদ্যালয় ও প্রযুক্তি বিশ্ববিদ্যালয়গুলোতে (ঢাবি, সাস্ট, জাবি, রাবি, চবি এবং জিএসটি) কাঙ্ক্ষিত সাফল্যের জন্য বিশেষ প্রস্তুতি। প্রশ্ন বিশ্লেষণের মাধ্যমে নিখুঁত সমাধান ও নেগেটিভ মার্কিং এড়ানোর কৌশল শেখানো হয়।",
      featuresEn: [
        "Previous year question bank analysis",
        "Short-cut techniques and time management strategies",
        "Negative marking avoidance drills",
        "Full-length model tests matching university patterns"
      ],
      featuresBn: [
        "বিগত বছরের বিশ্ববিদ্যালয় প্রশ্নব্যাংক পুঙ্খানুপুঙ্খ বিশ্লেষণ",
        "সময় সাশ্রয়ী শর্টকাট টেকনিক ও নির্ভুল সমাধান",
        "নেগেটিভ মার্কিং প্রতিরোধের কার্যকর কৌশল",
        "বিশ্ববিদ্যালয় স্ট্যান্ডার্ড পূর্ণাঙ্গ মডেল টেস্ট"
      ]
    },
    {
      id: "medical-admission",
      titleEn: "Medical Admission",
      titleBn: "মেডিকেল ভর্তি প্রস্তুতি",
      categoryEn: "MBBS & Dental Entrance",
      categoryBn: "এমবিবিএস ও ডেন্টাল ভর্তি পরীক্ষা",
      iconName: "stethoscope",
      shortDescEn: "Intensive preparation for Medical (MBBS) & Dental entrance tests, emphasizing precision memorization and high-speed accuracy.",
      shortDescBn: "এমবিবিএস ও ডেন্টাল ভর্তি পরীক্ষার জন্য নিখুঁত তথ্য মুখস্থকরণ, গতিশীলতা এবং নির্ভুল উত্তরের নিবিড় প্রস্তুতি।",
      fullDescEn: "Medical admission demands razor-sharp memory of Biology, precise theoretical Chemistry, core conceptual Physics, and reliable General Knowledge & English. Our curriculum emphasizes repetitive revision and standard OMR model tests.",
      fullDescBn: "মেডিকেল ভর্তি পরীক্ষায় সাফল্যের চাবিকাঠি হলো জীববিজ্ঞানের নির্ভুল স্মৃতিচারণ, রসায়ন ও পদার্থবিজ্ঞানের মূল তথ্য এবং সাধারণ জ্ঞান ও ইংরেজি দক্ষতা। নিয়মিত ওএমআর শিটে পরীক্ষা গ্রহণের মাধ্যমে প্রস্তুতিকে নিখুঁত করা হয়।",
      featuresEn: [
        "Intensive Biology diagram & taxonomy drills",
        "Chemistry information & reaction flashcards",
        "Physics formula mastery without calculators",
        "Standard OMR sheet timed model tests"
      ],
      featuresBn: [
        "জীববিজ্ঞান ও উদ্ভিদের নিখুঁত তথ্যভিত্তিক নিবিড় চর্চা",
        "রসায়নের বিক্রিয়া ও গুরুত্বপূর্ণ তথ্যাবলীর রিভিশন",
        "ক্যালকুলেটর ছাড়া পদার্থবিজ্ঞানের দ্রুত হিসাব কৌশল",
        "প্রকৃত মেডিকেল পরীক্ষার অনুরূপ নিয়মিত ওএমআর টেস্ট"
      ]
    },
    {
      id: "engineering-admission",
      titleEn: "Engineering Admission",
      titleBn: "ইঞ্জিনিয়ারিং ভর্তি প্রস্তুতি",
      categoryEn: "BUET, CKET & Tech Units",
      categoryBn: "বুয়েট, রুয়েট, চুয়েট, কুয়েট ও প্রযুক্তি",
      iconName: "compass",
      shortDescEn: "Advanced mathematical modeling, conceptual physics derivations, and rigorous written problem solving.",
      shortDescBn: "উচ্চতর গাণিতিক বিশ্লেষণ, পদার্থবিজ্ঞানের গভীর সূত্র প্রতিপাদন এবং লিখিত সমস্যার নিখুঁত সমাধান।",
      fullDescEn: "Tailored for aspirants targeting BUET, CKET, and specialized engineering institutes. Focuses heavily on multi-concept written mathematical problem solving, calculus integration, and advanced physics mechanics.",
      fullDescBn: "বুয়েট, কুয়েট, রুয়েট, চুয়েটসহ অন্যান্য প্রকৌশল বিশ্ববিদ্যালয়ের লিখিত পরীক্ষার জন্য বিশেষভাবে প্রণীত। জটিল গাণিতিক সমস্যা দ্রুত সমাধানের গভীর প্রশিক্ষণ প্রদান করা হয়।",
      featuresEn: [
        "Multi-step written problem-solving mastery",
        "Advanced Physics mechanics & electrodynamics",
        "Higher Mathematics calculus & coordinate geometry",
        "Standard written engineering pattern model tests"
      ],
      featuresBn: [
        "লিখিত পরীক্ষার জন্য মাল্টি-স্টেপ জটিল গাণিতিক সমস্যার সমাধান",
        "পদার্থবিজ্ঞানের গতিবিদ্যা ও তড়িৎবিজ্ঞানের গভীর বিশ্লেষণ",
        "উচ্চতর গণিতের ক্যালকুলাস ও জ্যামিতির নিখুঁত দক্ষতা",
        "প্রকৌশল বিশ্ববিদ্যালয়ের অনুরূপ স্ট্যান্ডার্ড লিখিত মডেল টেস্ট"
      ]
    }
  ] as ProgramItem[],

  // Educational Values / Why Choose HIGH ACADEMY
  whyChooseUs: [
    {
      id: "guidance",
      titleEn: "Focused Academic Guidance",
      titleBn: "সুনির্দিষ্ট একাডেমিক দিকনির্দেশনা",
      descEn: "Structured syllabus progression designed to keep every student focused on high-priority topics without cognitive overload.",
      descBn: "পরিকল্পিত সিলেবাস ও পাঠ্যসূচি যা অতিরিক্ত চাপ ছাড়া শিক্ষার্থীদের প্রয়োজনীয় বিষয়ে সর্বোচ্চ মনোযোগ ধরে রাখতে সহায়তা করে।"
    },
    {
      id: "concepts",
      titleEn: "Concept-Based Learning",
      titleBn: "ধারণাভিত্তিক শিক্ষা ও বোধগম্যতা",
      descEn: "Moving beyond rote memorization to instill deep fundamental clarity, enabling students to solve unfamiliar exam questions with composure.",
      descBn: "কেবলমাত্র মুখস্থ না করে প্রতিটি বিষয়ের মৌলিক ধারণা সুস্পষ্ট করা, যাতে যেকোনো নতুন ও কঠিন প্রশ্নের আত্মবিশ্বাসের সাথে সমাধান সম্ভব হয়।"
    },
    {
      id: "support",
      titleEn: "Continuous Student Support",
      titleBn: "নিয়মিত শিক্ষার্থী পর্যবেক্ষণ ও সহায়তা",
      descEn: "Dedicated academic mentoring, problem-solving discussion circles, and individual attention to address learning bottlenecks.",
      descBn: "শিক্ষার্থীদের যেকোনো বিষয়ে দুর্বলতা কাটিয়ে ওঠার জন্য নিয়মিত সমস্যা সমাধান সেশন এবং যত্নশীল মেন্টরিং সহায়তা।"
    },
    {
      id: "exam-prep",
      titleEn: "Realistic Exam Preparation",
      titleBn: "বাস্তবধর্মী পরীক্ষা প্রস্তুতি",
      descEn: "Timed evaluations mirroring real board and university question formats to build speed, accuracy, and examination temperament.",
      descBn: "বোর্ড ও বিশ্ববিদ্যালয় পরীক্ষার অনুরূপ সময়সীমায় নিয়মিত পরীক্ষা গ্রহণের মাধ্যমে পরীক্ষার ভয় দূরীকরণ ও নির্ভুলতা বৃদ্ধি।"
    },
    {
      id: "environment",
      titleEn: "Disciplined Learning Environment",
      titleBn: "শৃঙ্খলাপরায়ণ ও অনুকূল শিক্ষার পরিবেশ",
      descEn: "A serene, scholarly coaching atmosphere at Chowhatta Point, fostering mutual focus, academic camaraderie, and regular study habits.",
      descBn: "সিলেটের কেন্দ্রস্থল চৌহাট্টা পয়েন্টে অবস্থিত এক সুশৃঙ্খল, অনুপ্রেরণাদায়ী ও নিরিবিলি শিক্ষার পরিবেশ।"
    }
  ],

  // Teachers Section — Featured Mentor & Configurable Department Rosters
  featuredMentor: {
    id: "abdul-hai",
    nameEn: "Abdul Hai",
    nameBn: "আব্দুল হাই",
    roleEn: "Founder & Chief Academic Mentor",
    roleBn: "প্রতিষ্ঠাতা ও প্রধান মেন্টর",
    primarySubjectEn: "Higher Mathematics",
    primarySubjectBn: "উচ্চতর গণিত",
    additionalSubjectsEn: ["ICT", "English"],
    additionalSubjectsBn: ["আইসিটি (ICT)", "ইংরেজি (English)"],
    subjectEn: "Higher Mathematics (Primary) • ICT & English",
    subjectBn: "উচ্চতর গণিত (প্রধান) • আইসিটি ও ইংরেজি",
    bioEn: "Pioneering HIGH ACADEMY since 2012. Dedicated to instilling concept-first mastery in Higher Mathematics, rigorous examination temperament, and guiding students across Sylhet towards board and university admission excellence.",
    bioBn: "২০১২ সাল থেকে হাই একাডেমির প্রতিষ্ঠালগ্ন থেকে শিক্ষার্থীদের উচ্চতর গণিতে মেধা বিকাশ, ধারণাগত স্পষ্টতা ও সুশৃঙ্খল পাঠদানের অগ্রগামী কাণ্ডারী।",
    photoUrl: "/assets/aistudio/IMG-20260522-WA0035_9c1c244f.jpg",
  },
  facultyNotice: {
    en: "Our dedicated faculty roster is being finalized for the upcoming academic session. Qualified mentors for Physics, Chemistry, Higher Mathematics, and Biology lead our classrooms. Contact the center for specific faculty schedules.",
    bn: "আসন্ন শিক্ষাবর্ষের জন্য আমাদের অভিজ্ঞ শিক্ষক মণ্ডলীর তালিকা হালনাগাদ করা হচ্ছে। পদার্থবিজ্ঞান, রসায়ন, উচ্চতর গণিত এবং জীববিজ্ঞানের নিবেদিতপ্রাণ মেন্টরগণ নিয়মিত পাঠদান পরিচালনা করেন। ক্লাস রুটিন জানতে সরাসরি কেন্দ্রে যোগাযোগ করুন।"
  },
  teachers: [
    {
      id: "faculty-physics",
      nameEn: "Rimon Acharya",
      nameBn: "রিমন আচার্য",
      subjectEn: "Physics",
      subjectBn: "পদার্থবিজ্ঞান",
      designationEn: "Physics Teacher",
      designationBn: "পদার্থবিজ্ঞান শিক্ষক",
      bioEn: "Dedicated instruction in Physics for HSC and admission excellence, focusing on deep conceptual understanding and problem-solving mastery.",
      bioBn: "এইচএসসি ও ভর্তি পরীক্ষার জন্য পদার্থবিজ্ঞানের মৌলিক ধারণা ও সমস্যা সমাধানে নিবেদিত পাঠদান।",
      photoUrl: "/assets/aistudio/IMG-20260522-WA0036_408a7160.jpg",
      isPlaceholder: false
    },
    {
      id: "faculty-chemistry",
      nameEn: "Faculty Department: Chemistry",
      nameBn: "শিক্ষক বিভাগ: রসায়ন",
      subjectEn: "Chemistry (HSC & Admission)",
      subjectBn: "রসায়ন (এইচএসসি ও ভর্তি)",
      designationEn: "Senior Academic Mentor",
      designationBn: "সিনিয়র একাডেমিক মেন্টর",
      bioEn: "Guiding students through organic mechanisms, chemical equilibrium, and high-yield medical admission notes. Mentor profile to be updated with current session details.",
      bioBn: "জৈব রসায়ন, রাসায়নিক পরিবর্তন এবং মেডিকেল ভর্তির গুরুত্বপূর্ণ তথ্যাবলীর বিশেষজ্ঞ গাইড।",
      isPlaceholder: true
    },
    {
      id: "faculty-math",
      nameEn: "Abdul Hai",
      nameBn: "আব্দুল হাই",
      subjectEn: "Higher Math",
      subjectBn: "উচ্চতর গণিত",
      designationEn: "Higher Math",
      designationBn: "উচ্চতর গণিত",
      bioEn: "Dedicated higher mathematics instruction emphasizing conceptual calculus, coordinate geometry, and analytical problem-solving.",
      bioBn: "ক্যালকুলাস, স্থানাঙ্ক জ্যামিতি এবং দ্রুত গণিত সমাধানের বিশ্লেষণী দক্ষতায় নিবেদিত পাঠদান।",
      photoUrl: "/assets/aistudio/IMG-20260522-WA0035_9c1c244f.jpg",
      isPlaceholder: false
    },
    {
      id: "faculty-biology",
      nameEn: "Tawhid Hasan",
      nameBn: "তৌহিদ হাসান",
      subjectEn: "Biology",
      subjectBn: "জীববিজ্ঞান",
      designationEn: "Biology Teacher",
      designationBn: "জীববিজ্ঞান শিক্ষক",
      bioEn: "Dedicated instruction in Biology for HSC and medical admission preparation, focusing on botany, zoology, and precision recall.",
      bioBn: "এইচএসসি ও মেডিকেল ভর্তি পরীক্ষার জন্য জীববিজ্ঞান বিষয়ের মৌলিক ধারণা ও নিবিড় পাঠদান।",
      photoUrl: "/assets/aistudio/IMG-20260522-WA0034_383e76f9.jpg",
      isPlaceholder: false
    }
  ] as TeacherProfile[],
};
