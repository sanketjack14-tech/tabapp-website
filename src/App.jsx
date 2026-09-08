import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ScreenshotsSection } from './components/ScreenshotsSection';
import { ComparisonSection } from './components/ComparisonSection';
import { FoundersSection } from './components/FoundersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RequestDemoModal } from './components/RequestDemoModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemoModal = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-primary selection:text-white">
      <Navbar onRequestDemo={handleOpenDemoModal} />
      <main>
        <Hero onRequestDemo={handleOpenDemoModal} />
        <AboutSection />
        <FeaturesSection />
        <ScreenshotsSection />
        <ComparisonSection />
        <FoundersSection />
        <ContactSection onRequestDemo={handleOpenDemoModal} />
      </main>
      <Footer />
      <RequestDemoModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemoModal}
      />
    </div>
  );
}
