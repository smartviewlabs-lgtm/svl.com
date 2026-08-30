import React, { useState } from 'react';
import { 
  Navigation, 
  ShieldCheck, 
  MapPin, 
  Sparkles, 
  Eye, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Layers,
  Search,
  Maximize2
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/agencyData';

interface StreetViewSectionProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const StreetViewSection: React.FC<StreetViewSectionProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<'blue-lines' | 'instant-verification' | 'local-pack'>('blue-lines');

  return (
    <section id="street-view" className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Navigation className="w-3.5 h-3.5 -rotate-45 text-indigo-600" />
            <span>Certified Google Street View Integration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Certified <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">360° Blue Lines</span> on Google Street View
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Boost your Google Business Profile rankings and footfall. We capture, stitch, and link certified 360° blue navigation lines directly from the street into your interior.
          </p>
        </div>

        {/* Feature Grid & Interactive Blueprint Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Tabbed Details */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Tab 1: Blue Lines */}
            <div 
              onClick={() => setActiveTab('blue-lines')}
              className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                activeTab === 'blue-lines'
                  ? 'bg-white border-indigo-500 shadow-xl shadow-indigo-100/60'
                  : 'bg-white/80 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Navigation className="w-5 h-5 -rotate-45" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                      1. Continuous 360° Blue Line Connectivity
                    </h4>
                    {activeTab === 'blue-lines' && (
                      <span className="text-[10px] bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-bold">
                        Active Feature
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Users navigating roads on Google Maps can step seamlessly across the sidewalk directly into your restaurant tables, hotel suites, or showroom aisles without friction.
                  </p>
                  {activeTab === 'blue-lines' && (
                    <div className="mt-3 flex flex-wrap gap-2 text-xs">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-semibold">8K Spherical Resolution</span>
                      <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-semibold">Auto-Nadir Patching</span>
                      <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-semibold">Google Certified Geolocation</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Tab 2: Instant Verification */}
            <div 
              onClick={() => setActiveTab('instant-verification')}
              className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                activeTab === 'instant-verification'
                  ? 'bg-white border-emerald-500 shadow-xl shadow-emerald-100/60'
                  : 'bg-white/80 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                      2. Instant Google Business Profile Verification
                    </h4>
                    {activeTab === 'instant-verification' && (
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                        Verified
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Struggling with postcard delays or video verification failures on Google? Our Google Street View Trusted Photographer status assists in authenticating your physical storefront swiftly.
                  </p>
                  {activeTab === 'instant-verification' && (
                    <div className="mt-3 flex flex-wrap gap-2 text-xs">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-emerald-700 font-semibold">Direct Google Trusted Ingest</span>
                      <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-emerald-700 font-semibold">Zero Postcard Waiting</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Tab 3: Local 3-Pack SEO Dominance */}
            <div 
              onClick={() => setActiveTab('local-pack')}
              className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                activeTab === 'local-pack'
                  ? 'bg-white border-orange-500 shadow-xl shadow-orange-100/60'
                  : 'bg-white/80 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                      3. Massive Organic Reach & 2X Footfall
                    </h4>
                    {activeTab === 'local-pack' && (
                      <span className="text-[10px] bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full font-bold">
                        High Conversion
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Google algorithms strongly reward listings with rich 360° media. Listings with virtual tours receive 200% more interest and generate significantly higher direction requests.
                  </p>
                  {activeTab === 'local-pack' && (
                    <div className="mt-3 flex flex-wrap gap-2 text-xs">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-semibold">Top 3 Map Pack Elevation</span>
                      <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-semibold">+85% Footfall Surge</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <button
                onClick={() => onOpenQuoteModal("Google Street View Blue Line Shoot")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-xl shadow-indigo-200 transition-all active:scale-95"
              >
                <span>Schedule Street View Shoot For Your Location</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Visual Demonstration of Google Maps Blue Line Interface */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-white border border-slate-200 p-4 sm:p-6 shadow-xl overflow-hidden">
              
              {/* Top Fake Google Maps UI */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs text-slate-500 font-mono ml-2">maps.google.com/streetview</span>
                </div>
                <span className="text-xs text-indigo-700 font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200">
                  Certified Ingest
                </span>
              </div>

              {/* Map Preview Canvas with Blue Line */}
              <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=1200&q=80"
                  alt="Google Street View 360 Blue Line demonstration"
                  className="w-full h-full object-cover opacity-70"
                />
                
                {/* Visual Street View Blue Line overlay curve */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M 20 260 Q 180 220, 260 140 T 480 50"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="8"
                    strokeLinecap="round"
                    className="animate-pulse"
                    filter="drop-shadow(0 0 10px #3b82f6)"
                  />
                  <path
                    d="M 20 260 Q 180 220, 260 140 T 480 50"
                    fill="none"
                    stroke="#60a5fa"
                    strokeWidth="3"
                    strokeDasharray="8 6"
                  />
                </svg>

                {/* Nodes with Street View Icons */}
                <div className="absolute left-6 bottom-10 flex items-center gap-2 bg-slate-950/90 border border-slate-700 px-3 py-1.5 rounded-lg text-xs text-white shadow-xl">
                  <Navigation className="w-4 h-4 text-blue-400 -rotate-45" />
                  <span>Main Road (Street View)</span>
                </div>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 bg-blue-600 border-2 border-white px-3.5 py-2 rounded-xl text-xs text-white shadow-2xl animate-bounce">
                  <Sparkles className="w-4 h-4 text-cyan-200" />
                  <span className="font-bold">Storefront Entrance (Blue Node)</span>
                </div>

                <div className="absolute right-8 top-8 flex items-center gap-2 bg-emerald-600 border border-emerald-400 px-3 py-1.5 rounded-lg text-xs text-white shadow-xl">
                  <MapPin className="w-4 h-4 text-white" />
                  <span>Interior Showroom Floor</span>
                </div>
              </div>

              {/* Bottom Verification Legend */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-indigo-600 font-bold">100% Guaranteed</div>
                  <div className="text-[10px] text-slate-500 font-medium">Maps Verification</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-emerald-600 font-bold">2.4x</div>
                  <div className="text-[10px] text-slate-500 font-medium">Higher Booking Intent</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-orange-600 font-bold">Lifetime</div>
                  <div className="text-[10px] text-slate-500 font-medium">Google Maps Hosting</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
