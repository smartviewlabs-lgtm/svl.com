import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VirtualTourViewer } from './components/VirtualTourViewer';
import { StreetViewSection } from './components/StreetViewSection';
import { ServicesSection } from './components/ServicesSection';
import { RoiCalculator } from './components/RoiCalculator';
import { LocationsHub } from './components/LocationsHub';
import { CareersPortal } from './components/CareersPortal';
import { CaseStudies } from './components/CaseStudies';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';
import { ContactQuoteModal } from './components/ContactQuoteModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalService, setModalService] = useState<string | undefined>(undefined);
  const [modalCity, setModalCity] = useState<string | undefined>(undefined);
  const [modalBusinessName, setModalBusinessName] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (serviceOrBusiness?: string, city?: string) => {
    if (city) {
      setModalCity(city);
      setModalBusinessName(serviceOrBusiness);
      setModalService(undefined);
    } else {
      setModalService(serviceOrBusiness);
      setModalCity(undefined);
      setModalBusinessName(undefined);
    }
    setIsQuoteModalOpen(true);
  };

  const handleBookShootForCategory = (category: string) => {
    setModalService(`360° Virtual Tour for ${category}`);
    setIsQuoteModalOpen(true);
  };

  const handleBookShootForCity = (city: string) => {
    setModalCity(city);
    setModalService('Google Street View 360° Shoot');
    setIsQuoteModalOpen(true);
  };

  const handleScrollToCareers = () => {
    const el = document.getElementById('careers');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-600 selection:text-white antialiased relative">
      
      {/* Fixed Sticky Header with direct Call & WhatsApp buttons */}
      <Header
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenCareersModal={handleScrollToCareers}
      />

      {/* Main Content Flow */}
      <main>
        {/* 1. Hero Section with Quick 30s Business Audit */}
        <Hero
          onOpenQuoteModal={handleOpenQuoteModal}
          onOpenCareersModal={handleScrollToCareers}
        />

        {/* 2. Complete Services Suite (1. Digital Marketing, 2. Web Design, 3. Social Media, 4. Google 360 Virtual Tours, 5. Local SEO, 6. All Solutions) */}
        <ServicesSection
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 3. Interactive ROI & Footfall Surge Calculator */}
        <RoiCalculator
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 4. Interactive 360° Virtual Tour & Panorama Demo Viewer (Pannellum Moving 360°) */}
        <VirtualTourViewer
          onBookShootForCategory={handleBookShootForCategory}
        />

        {/* 5. Google Street View Certified Blue Lines & Ranking Deep Dive */}
        <StreetViewSection
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 6. Punjab Regional Offices Hub (Chandigarh, Amritsar, Ludhiana, Jalandhar, Bathinda) */}
        <LocationsHub
          onBookShootForCity={handleBookShootForCity}
        />

        {/* 7. Student, Fresh Graduate & Trainee Careers Portal */}
        <CareersPortal />

        {/* 8. Verified Case Studies & FAQs */}
        <CaseStudies
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      </main>

      {/* Footer with full contact points */}
      <Footer
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onOpenCareersModal={handleScrollToCareers}
      />

      {/* Sticky Bottom Floating Quick Contact Dock (Mobile & Desktop) */}
      <StickyBottomBar
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onOpenCareersModal={handleScrollToCareers}
      />

      {/* Interactive Shoot Booking & Consultation Modal */}
      <ContactQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialService={modalService}
        initialCity={modalCity}
        initialBusinessName={modalBusinessName}
      />

    </div>
  );
}
