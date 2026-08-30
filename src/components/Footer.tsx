import React from 'react';
import { COMPANY_DETAILS, PUNJAB_LOCATIONS, SERVICES } from '../data/agencyData';
import { SVLLogo } from './SVLLogo';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  ShieldCheck, 
  Heart, 
  ArrowUp,
  Briefcase
} from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: () => void;
  onOpenCareersModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal, onOpenCareersModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-16 pb-24 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <SVLLogo size="md" />
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Punjab's #1 agency for Performance Digital Marketing, High-Speed Website Design, All Social Media Management, certified Google 360° Virtual Tours with Street View Blue Lines, and complete business growth solutions.
            </p>

            <div className="pt-1 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-700/50 font-medium">
                <ShieldCheck className="w-3 h-3 text-indigo-400" />
                Google Street View Trusted
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-700/50 font-medium">
                Full-Suite Digital Agency
              </span>
            </div>
          </div>

          {/* Quick Contact & Direct Action */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Direct Contact & Booking
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm">
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-indigo-400 transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-indigo-400 group-hover:border-indigo-500">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>Phone: <strong>{COMPANY_DETAILS.formattedPhone}</strong></span>
              </a>

              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500">
                  <MessageCircle className="w-3.5 h-3.5" />
                </div>
                <span>WhatsApp: <strong>+91 {COMPANY_DETAILS.phone}</strong></span>
              </a>

              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-indigo-400 transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-indigo-400 group-hover:border-indigo-500">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="break-all">Email: <strong>{COMPANY_DETAILS.email}</strong></span>
              </a>

              <div className="pt-2">
                <button
                  onClick={onOpenCareersModal}
                  className="w-full py-2.5 px-3 rounded-xl bg-violet-950/60 border border-violet-800 text-violet-300 hover:text-violet-200 text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Student & Trainee Careers Portal</span>
                </button>
              </div>
            </div>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Key Services
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">1. Performance Digital Marketing</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">2. Website Design & Dev</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">3. All Social Media Marketing</a></li>
              <li><a href="#virtual-tours" className="hover:text-indigo-400 transition-colors">4. Google 360° Virtual Tours</a></li>
              <li><a href="#street-view" className="hover:text-indigo-400 transition-colors">5. Google Street View Blue Lines</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">6. All Digital Marketing Solutions</a></li>
            </ul>
          </div>

          {/* Punjab Locations Hub */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Punjab Regional Hubs
            </h4>
            <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-300">
              {PUNJAB_LOCATIONS.map((loc) => (
                <a
                  key={loc.city}
                  href="#locations"
                  className="flex items-center gap-1 hover:text-indigo-400 transition-colors py-0.5"
                >
                  <MapPin className="w-3 h-3 text-indigo-400 shrink-0" />
                  <span>{loc.city}</span>
                </a>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 pt-1">
              On-site photographers deployed across all Punjab cities with 24-48 hr shoot dispatch.
            </p>
          </div>

        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="text-center sm:text-left">
            <p>© {new Date().getFullYear()} Smart View Labs. All Rights Reserved.</p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Google, Google Maps, and Google Street View are trademarks of Google LLC. Smart View Labs provides certified Google Trusted Photography services.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors text-xs font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-indigo-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};
