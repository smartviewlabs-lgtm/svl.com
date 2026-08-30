import React, { useState } from 'react';
import { Phone, Sparkles, X, ChevronUp } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/agencyData';

interface StickyBottomBarProps {
  onOpenQuoteModal: () => void;
  onOpenCareersModal: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({
  onOpenQuoteModal,
  onOpenCareersModal
}) => {
  const [minimized, setMinimized] = useState(false);

  return (
    <div 
      id="sticky-bottom-contact-bar"
      className="fixed bottom-0 left-0 right-0 z-40 px-2 sm:px-4 pb-2 sm:pb-3 pointer-events-none"
    >
      <div className="max-w-4xl mx-auto pointer-events-auto">
        {minimized ? (
          <div className="flex justify-end mb-2">
            <button
              onClick={() => setMinimized(false)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-300 text-slate-800 text-xs font-bold shadow-xl hover:bg-slate-50 transition-all backdrop-blur-md"
            >
              <span>Quick Contact</span>
              <ChevronUp className="w-3.5 h-3.5 text-indigo-600" />
            </button>
          </div>
        ) : (
          <div className="relative rounded-2xl bg-white/95 border border-slate-200 p-2 sm:p-2.5 shadow-2xl backdrop-blur-xl shadow-slate-900/10">
            {/* Top tiny ticker on desktop */}
            <div className="hidden md:flex items-center justify-between px-3 py-1 mb-1.5 text-[11px] text-slate-500 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-slate-800 font-bold">Photographers Ready in Punjab</span>
                <span>• Chandigarh, Amritsar, Ludhiana, Jalandhar, Bathinda</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={onOpenCareersModal}
                  className="text-indigo-600 hover:text-indigo-700 font-bold underline-offset-2 hover:underline flex items-center gap-1"
                >
                  🎓 Hiring Students & Trainees
                </button>
                <button
                  onClick={() => setMinimized(true)}
                  className="text-slate-400 hover:text-slate-600 p-0.5"
                  title="Minimize bar"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Core Action Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-1.5 sm:gap-2">
              
              {/* Original Call Button */}
              <a
                id="bottom-call-button"
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-600/25 active:scale-95 transition-all"
                title={`Direct Call ${COMPANY_DETAILS.phone}`}
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[10px] text-blue-100 font-normal hidden sm:block">Call Now</span>
                  <span className="truncate">{COMPANY_DETAILS.phone}</span>
                </div>
              </a>

              {/* Original Official WhatsApp Button */}
              <a
                id="bottom-whatsapp-button"
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/25 active:scale-95 transition-all group"
                title="Chat on WhatsApp"
              >
                {/* Official WhatsApp SVG Icon */}
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-3.5 h-3.5 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </div>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[10px] text-emerald-100 font-normal hidden sm:block">Official Chat</span>
                  <span>WhatsApp</span>
                </div>
              </a>

              {/* Instant 360° Quote / Shoot Booking */}
              <button
                id="bottom-book-shoot-button"
                onClick={onOpenQuoteModal}
                className="flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/20 active:scale-95 transition-all"
              >
                <Sparkles className="w-4 h-4 text-orange-200 shrink-0" />
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[10px] text-orange-200 font-normal hidden sm:block">Free Estimation</span>
                  <span>Book Shoot</span>
                </div>
              </button>

              {/* Career Portal Button on Mobile / Desktop */}
              <button
                id="bottom-career-portal-button"
                onClick={onOpenCareersModal}
                className="hidden sm:flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-violet-50 hover:bg-violet-100 text-violet-700 border border-violet-200 font-bold text-xs sm:text-sm active:scale-95 transition-all"
              >
                <span className="text-sm">💼</span>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[10px] text-violet-600 font-normal">We're Hiring</span>
                  <span>Apply Now</span>
                </div>
              </button>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};
