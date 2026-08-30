import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Compass, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/agencyData';

interface HeroProps {
  onOpenQuoteModal: (businessName?: string, city?: string) => void;
  onOpenCareersModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onOpenCareersModal }) => {
  const [auditBusinessName, setAuditBusinessName] = useState('');
  const [auditCity, setAuditCity] = useState('Chandigarh');

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenQuoteModal(auditBusinessName, auditCity);
  };

  const citiesList = [
    'Chandigarh / Tricity',
    'Amritsar',
    'Ludhiana',
    'Jalandhar',
    'Bathinda',
    'Patiala',
    'Mohali',
    'Other Punjab City'
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-gradient-to-b from-indigo-50/40 via-white to-slate-50 border-b border-slate-200/80">
      
      {/* Background Lighting & Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-800 text-xs font-bold shadow-xs">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <ShieldCheck className="w-4 h-4 text-indigo-600" />
            <span>Google Trusted Street View Certified Agency</span>
          </div>

          <button
            onClick={onOpenCareersModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-800 hover:text-orange-950 text-xs font-bold transition-all hover:bg-orange-100/80 shadow-xs"
          >
            <span>🎓 Hiring Students & Trainees</span>
            <span className="text-[10px] bg-orange-200 text-orange-900 px-2 py-0.5 rounded-full font-extrabold">New Openings</span>
          </button>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50/90 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Punjab's #1 Complete Digital Growth Agency</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] font-heading">
            Dominant <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700">Digital Marketing</span>, High-Speed <span className="text-indigo-900">Web Design</span> & <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Google Trusted 360°</span> Street View Agency
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto">
            Scale your business with <span className="text-slate-900 font-bold">Performance Digital Marketing</span>, high-converting <span className="text-slate-900 font-bold">Custom Websites</span>, viral <span className="text-slate-900 font-bold">All Social Media Campaigns</span>, and certified <span className="text-indigo-600 font-bold">Google 360° Virtual Tours with Street View Blue Lines</span> across Punjab.
          </p>

          {/* 5-Pillar Value Proposition Chips */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
            {[
              "1. Performance Digital Marketing",
              "2. High-Speed Web Design",
              "3. All Social Media Management",
              "4. Google Trusted 360° Tours",
              "5. Complete Digital Solutions"
            ].map((pill, idx) => (
              <span key={idx} className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-bold shadow-2xs">
                {pill}
              </span>
            ))}
          </div>

          {/* Quick Direct CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            
            {/* Primary Shoot Booking */}
            <button
              id="hero-book-shoot-cta"
              onClick={() => onOpenQuoteModal()}
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm sm:text-base shadow-xl shadow-indigo-200 transition-all duration-200 hover:scale-[1.02] active:scale-95 group"
            >
              <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              <span>Get Free Digital Marketing & 360° Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Direct WhatsApp */}
            <a
              id="hero-whatsapp-cta"
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base shadow-xl shadow-emerald-200 transition-all hover:scale-[1.02] active:scale-95"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span>WhatsApp: {COMPANY_DETAILS.phone}</span>
            </a>

            {/* Direct Call */}
            <a
              id="hero-call-cta"
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-indigo-950 border border-slate-200 font-bold text-sm sm:text-base shadow-xs transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 text-indigo-600" />
              <span>Direct Call: {COMPANY_DETAILS.formattedPhone}</span>
            </a>

          </div>

        </div>

        {/* Free Instant Business Audit Card Box */}
        <div className="mt-12 max-w-3xl mx-auto rounded-3xl bg-white border border-indigo-100 p-5 sm:p-7 shadow-xl shadow-indigo-100/60">
          <div className="flex items-center justify-between gap-2 mb-4 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              <h2 className="text-slate-900 font-bold text-sm sm:text-base font-heading">
                Instant Free Growth & 360° Readiness Audit (30 Seconds)
              </h2>
            </div>
            <span className="text-xs text-emerald-800 font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 border border-emerald-200">
              100% Free
            </span>
          </div>

          <form onSubmit={handleAuditSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Business / Shop Name
              </label>
              <input
                type="text"
                required
                value={auditBusinessName}
                onChange={(e) => setAuditBusinessName(e.target.value)}
                placeholder="e.g. Royal Grand Hotel & Banquet"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Punjab City / District
              </label>
              <select
                value={auditCity}
                onChange={(e) => setAuditCity(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
              >
                {citiesList.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-200 transition-all flex items-center justify-center gap-1.5 active:scale-95"
              >
                <span>Get Free Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2 border-t border-slate-100 pt-3">
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
              Includes Google Maps 3-Pack rank test
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
              360° Street View Blue Line feasibility report
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
              Direct report to your WhatsApp/Email
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
