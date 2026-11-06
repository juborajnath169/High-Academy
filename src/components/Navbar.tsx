import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SITE_CONFIG } from '../config/siteConfig';
import { Menu, X, Phone, Globe, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: (programId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#programs', label: t('nav.programs') },
    { href: '#teachers', label: t('nav.teachers') },
    { href: '#why-us', label: t('nav.whyUs') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <>
      {/* Top Banner with Contact & Location (Deep Navy Blue from Reference) */}
      <div className="bg-[#071938] border-b border-white/10 text-xs text-blue-100 py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="text-[#FFC107] font-semibold shrink-0">
              {language === 'bn' ? 'ঠিকানা:' : 'Location:'}
            </span>
            <span className="truncate text-slate-200 font-medium">
              {language === 'bn' ? SITE_CONFIG.contact.addressBn : SITE_CONFIG.contact.addressEn}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 shrink-0 text-blue-100">
            <a
              href={`tel:${SITE_CONFIG.contact.phoneTel}`}
              className="flex items-center gap-1.5 text-white font-semibold hover:text-[#FFC107] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFC107]" />
              <span className="font-mono">{SITE_CONFIG.contact.phoneDisplay}</span>
            </a>
            <span className="text-white/20">|</span>
            <span className="text-blue-200 font-medium">
              {language === 'bn' ? SITE_CONFIG.brand.establishedTextBn : SITE_CONFIG.brand.establishedTextEn}
            </span>
          </div>
        </div>
      </div>

      {/* Main Header (Deep Navy Blue matching the Reference Image) */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B224E]/95 backdrop-blur-md shadow-md border-b border-white/10'
            : 'bg-[#0B224E] border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
          {/* Zone 1: Brand Wordmark & Official Shield Logo (From Reference) */}
          <a
            href="#home"
            className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC107] rounded-lg"
          >
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/20 bg-white/10 p-0.5 shadow-sm group-hover:border-[#FFC107] transition-colors">
              <img
                src={SITE_CONFIG.brand.logoUrl}
                alt="HIGH ACADEMY Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-[#FFC107] transition-colors whitespace-nowrap">
                HIGH ACADEMY
              </span>
              <span className="text-xs text-blue-200 font-medium tracking-wide">
                Learn • Prepare • Excel
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-white/90">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#FFC107] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#FFC107] after:transition-all whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Language Toggle & CTA Button */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg border border-white/20 bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC107]"
              title={language === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন'}
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-[#FFC107]" />
              <span>{language === 'bn' ? 'English' : 'বাংলা'}</span>
            </button>

            {/* Primary Action Button (Bright Golden Yellow from Reference) */}
            <button
              onClick={() => onOpenInquiry()}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold rounded-full text-[#0B224E] bg-[#FFC107] hover:bg-[#F59E0B] shadow-sm hover:shadow transition-all transform active:scale-98 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC107]"
            >
              <span>{t('nav.inquiryBtn')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile Menu Hamburger Button (Rounded box with hamburger icon from Reference) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC107]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu (Deep Navy matching reference) */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0B224E] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 shadow-2xl text-left">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full font-bold text-[#0B224E] bg-[#FFC107] hover:bg-[#F59E0B] text-sm shadow-md"
              >
                <span>{t('nav.inquiryBtn')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between text-xs text-blue-200 px-2 pt-1">
                <a
                  href={`tel:${SITE_CONFIG.contact.phoneTel}`}
                  className="flex items-center gap-1.5 text-[#FFC107] font-bold font-mono"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{SITE_CONFIG.contact.phoneDisplay}</span>
                </a>
                <span>Chowhatta Point, Sylhet</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
