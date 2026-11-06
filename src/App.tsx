/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Teachers } from './components/Teachers';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AdmissionModal } from './components/AdmissionModal';
import { MobileActionBar } from './components/MobileActionBar';

function MainLayout() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [inquiryProgramId, setInquiryProgramId] = useState<string | undefined>(undefined);

  const handleOpenInquiry = (programId?: string) => {
    setInquiryProgramId(programId);
    setIsInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#EEF4FB] text-[#0B224E] flex flex-col font-sans selection:bg-[#FFC107] selection:text-[#0B224E]">
      {/* Navigation matching reference */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main One-Page Content */}
      <main className="flex-1">
        <Hero onOpenInquiry={() => handleOpenInquiry()} />
        <About />
        <Programs onOpenInquiry={handleOpenInquiry} />
        <Teachers />
        <WhyChooseUs />
        <Contact initialProgramId={inquiryProgramId} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Direct WhatsApp Floating Bubble (Above mobile docked bar) */}
      <FloatingWhatsApp />

      {/* Mobile Fixed Bottom Action Bar (📞 Call Now | 🎓 Get Admission from Reference) */}
      <MobileActionBar onOpenInquiry={() => handleOpenInquiry()} />

      {/* Global Admission Inquiry Modal */}
      <AdmissionModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        defaultProgramId={inquiryProgramId}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainLayout />
    </LanguageProvider>
  );
}
