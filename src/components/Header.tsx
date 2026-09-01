import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Briefcase, Phone } from 'lucide-react';
import { SVLLogo } from './SVLLogo';
import { COMPANY_DETAILS } from '../data/agencyData';

interface HeaderProps {
  onOpenQuoteModal: (service?: string) => void;
  onOpenCareersModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal, onOpenCareersModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Digital Marketing', href: '#services' },
    { label: 'Website Design', href: '#services' },
    { label: 'Social Media', href: '#services' },
    { label: 'Google 360° Street View', href: '#virtual-tours' },
    { label: 'Punjab Offices', href: '#locations' },
    { label: 'ROI Calculator', href: '#roi-calculator' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Careers & Internships', href: '#careers', highlight: true },
  ];

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-2 sm:py-3' 
          : 'bg-white/95 backdrop-blur-sm border-b border-slate-200/80 py-2.5 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Brand Logo with Uploaded SVL Logo */}
          <a href="#" className="flex items-center shrink-0 group">
            <SVLLogo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors duration-200 hover:text-indigo-600 py-1 relative ${
                  link.highlight 
                    ? 'text-indigo-600 font-bold' 
                    : ''
                }`}
              >
                {link.label}
                {link.highlight && (
                  <span className="ml-1.5 px-2 py-0.5 rounded-full text-[10px] bg-indigo-100 text-indigo-700 font-extrabold">
                    We're Hiring
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Header Action: Desktop Actions & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Desktop Direct Call Button */}
            <a
              id="header-call-button"
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="hidden xl:flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs active:scale-95 transition-all"
              title={`Direct Call ${COMPANY_DETAILS.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>Call {COMPANY_DETAILS.phone}</span>
            </a>

            {/* Desktop Direct WhatsApp Button */}
            <a
              id="header-whatsapp-button"
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-xs active:scale-95 transition-all"
              title="Official WhatsApp Chat"
            >
              <svg className="w-3.5 h-3.5 fill-current text-white" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>WhatsApp</span>
            </a>

            {/* Desktop Free Audit / Book Shoot button */}
            <button
              id="header-quote-button"
              onClick={() => onOpenQuoteModal()}
              className="hidden xl:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-200 transition-all duration-200 active:scale-95"
            >
              <span>Book Shoot</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Menu Button (Clean & prominent on mobile) */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 text-white hover:bg-indigo-600 shadow-sm transition-all duration-200"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <>
                  <X className="w-5 h-5" />
                  <span className="text-xs font-bold">Close</span>
                </>
              ) : (
                <>
                  <Menu className="w-5 h-5" />
                  <span className="text-xs font-bold">Menu</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
          
          {/* Navigation Links inside Drawer */}
          <div className="grid grid-cols-1 gap-1 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-800 hover:bg-indigo-50 hover:text-indigo-700 font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span>{link.label}</span>
                  {link.highlight && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] bg-indigo-100 text-indigo-700 font-extrabold normal-case">
                      We're Hiring
                    </span>
                  )}
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          {/* Quick Contact & Action Buttons inside Drawer */}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            
            {/* Call Button */}
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Call: {COMPANY_DETAILS.phone}</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-md shadow-emerald-600/20 active:scale-95 transition-all"
            >
              <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>WhatsApp Chat</span>
            </a>

            {/* Careers Link */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCareersModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-violet-50 hover:bg-violet-100 border border-violet-200 text-violet-700 font-bold text-xs transition-colors"
            >
              <Briefcase className="w-4 h-4" />
              <span>Careers & Student Internships (We're Hiring)</span>
            </button>

            {/* Book Shoot Quote CTA */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-lg shadow-indigo-200 transition-colors"
            >
              Get Free Digital Marketing & 360° Quote / Book Shoot
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
