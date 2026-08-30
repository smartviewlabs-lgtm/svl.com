import React, { useState } from 'react';
import { CASE_STUDIES, FAQS, COMPANY_DETAILS } from '../data/agencyData';
import { 
  Star, 
  MapPin, 
  TrendingUp, 
  Eye, 
  Compass, 
  Quote, 
  ChevronDown, 
  CheckCircle2,
  Sparkles,
  Phone,
  MessageCircle
} from 'lucide-react';

interface CaseStudiesProps {
  onOpenQuoteModal: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenQuoteModal }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section id="case-studies" className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Star className="w-3.5 h-3.5 text-emerald-600" />
            <span>Proven Punjab Business Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Transforming Local Businesses Across <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-indigo-600 to-violet-600">
              Chandigarh, Amritsar, Ludhiana & Beyond
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Real footfall and revenue surges powered by Google Trusted 360° blue lines, local SEO domination, and performance ad campaigns.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-lg flex flex-col justify-between hover:border-indigo-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Image with Stats Overlay */}
              <div className="relative h-60 sm:h-64 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.businessName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                
                {/* Location Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-900 text-xs font-bold shadow-xs">
                  <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                  <span>{study.city}</span>
                </div>

                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-indigo-600 text-white text-[11px] font-bold shadow-xs">
                  {study.category}
                </div>

                {/* Growth Highlights */}
                <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
                  <div className="p-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-center shadow-xs">
                    <div className="text-xs sm:text-sm font-black text-emerald-600 font-heading">{study.results.viewsGrowth}</div>
                    <div className="text-[10px] text-slate-500 font-medium">Map Views</div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-center shadow-xs">
                    <div className="text-xs sm:text-sm font-black text-indigo-600 font-heading">{study.results.footfallIncrease}</div>
                    <div className="text-[10px] text-slate-500 font-medium">Footfall</div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-center shadow-xs">
                    <div className="text-[11px] sm:text-xs font-bold text-orange-600 font-heading truncate">{study.results.rankingJump}</div>
                    <div className="text-[10px] text-slate-500 font-medium">Rank</div>
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading mb-2">
                    {study.businessName}
                  </h3>

                  <div className="relative pl-6 italic text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    <Quote className="w-4 h-4 text-indigo-600 absolute left-0 top-0 opacity-60" />
                    "{study.quote}"
                  </div>

                  <div className="text-xs text-slate-500 font-medium">
                    <span className="text-slate-900 font-bold">{study.clientName}</span> — {study.clientRole}
                  </div>
                </div>

                {/* Services Used */}
                <div className="border-t border-slate-100 pt-4 flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] text-slate-500 mr-1 font-medium">Services:</span>
                  {study.servicesUsed.map((srv, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                      {srv}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Frequently Asked Questions Accordion */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Everything you need to know about Google Trusted 360° virtual tours, blue line integration, and our digital campaigns.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-bold text-slate-900 hover:text-indigo-600 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-indigo-600 shrink-0 transition-transform ${
                    openFaqIndex === idx ? 'rotate-180' : ''
                  }`} />
                </button>

                {openFaqIndex === idx && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/80 pt-3 animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Booking Banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 border border-indigo-500 p-8 sm:p-12 text-center relative overflow-hidden shadow-xl">
          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-4xl font-black text-white font-heading">
              Ready to Put Your Business on the Google 360° Map?
            </h3>
            <p className="text-sm sm:text-base text-indigo-100">
              Schedule your on-site shoot with Punjab's certified Google Trusted photographers. Instant verification, lifetime hosting on Google Maps, and measurable footfall.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-indigo-700 font-extrabold text-sm shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                Book Your 360° Shoot Today
              </button>

              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp ({COMPANY_DETAILS.phone})</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
