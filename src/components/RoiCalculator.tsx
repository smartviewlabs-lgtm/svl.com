import React, { useState } from 'react';
import { Calculator, TrendingUp, Users, DollarSign, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenQuoteModal: (details?: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenQuoteModal }) => {
  const [industry, setIndustry] = useState<'restaurant' | 'hotel' | 'showroom' | 'clinic' | 'fitness'>('restaurant');
  const [currentMonthlyViews, setCurrentMonthlyViews] = useState<number>(3000);
  const [avgTicketPrice, setAvgTicketPrice] = useState<number>(800);

  const industryProfiles = {
    restaurant: {
      name: 'Restaurant / Cafe / Lounge',
      conversionMultiplier: 2.3,
      avgTicketDefault: 800,
      footfallBoostPercent: 85,
      description: 'Guests browse food ambience and seating layouts in 360° before reserving tables.'
    },
    hotel: {
      name: 'Hotel / Resort / Banquet Hall',
      conversionMultiplier: 2.8,
      avgTicketDefault: 4500,
      footfallBoostPercent: 110,
      description: 'Destination wedding planners and tourists book high-ticket rooms after full virtual walkthroughs.'
    },
    showroom: {
      name: 'Retail / Auto Showroom / Boutique',
      conversionMultiplier: 2.1,
      avgTicketDefault: 3500,
      footfallBoostPercent: 70,
      description: 'Showcasing luxury aisles and inventory on Google Street View drives high-intent walk-ins.'
    },
    clinic: {
      name: 'Hospital / Diagnostic / Dental Clinic',
      conversionMultiplier: 2.5,
      avgTicketDefault: 1500,
      footfallBoostPercent: 90,
      description: 'Patients verify sanitized state-of-the-art facilities, removing hesitation for medical consultations.'
    },
    fitness: {
      name: 'Gym / Salon / Co-working Space',
      conversionMultiplier: 2.4,
      avgTicketDefault: 2000,
      footfallBoostPercent: 80,
      description: 'Prospective members inspect modern gym gear and premium interior aesthetics.'
    }
  };

  const currentProfile = industryProfiles[industry];

  // Calculations
  const projectedViews = Math.round(currentMonthlyViews * 3.4);
  const additionalMonthlyViews = projectedViews - currentMonthlyViews;
  const estimatedNewWalkIns = Math.round((additionalMonthlyViews * 0.045) * (currentProfile.footfallBoostPercent / 100));
  const estimatedMonthlyRevenueBoost = estimatedNewWalkIns * avgTicketPrice;

  return (
    <section id="roi-calculator" className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            <span>Google 360° & Marketing ROI Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Calculate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-indigo-600">Footfall & Revenue Surge</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            See how much extra monthly revenue certified Google Street View blue lines and local performance campaigns can generate for your Punjab business.
          </p>
        </div>

        {/* Interactive Calculator Grid */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Controls Side */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Select Industry */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  1. Select Your Business Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {(Object.keys(industryProfiles) as (keyof typeof industryProfiles)[]).map((key) => (
                    <button
                      key={key}
                      onClick={() => {
                        setIndustry(key);
                        setAvgTicketPrice(industryProfiles[key].avgTicketDefault);
                      }}
                      className={`p-2.5 rounded-xl text-xs font-bold text-left transition-all ${
                        industry === key
                          ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 border border-indigo-600'
                          : 'bg-slate-50 text-slate-600 hover:text-indigo-600 border border-slate-200 hover:border-indigo-200'
                      }`}
                    >
                      {industryProfiles[key].name.split('/')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider: Monthly Google Searches/Views */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    2. Estimated Monthly Google Map Views
                  </label>
                  <span className="text-indigo-600 font-bold font-mono text-sm">
                    {currentMonthlyViews.toLocaleString('en-IN')} views/mo
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="25000"
                  step="500"
                  value={currentMonthlyViews}
                  onChange={(e) => setCurrentMonthlyViews(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>500 (New Listing)</span>
                  <span>10,000 (Established)</span>
                  <span>25,000+ (High Traffic)</span>
                </div>
              </div>

              {/* Slider: Average Customer Spend */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    3. Average Customer Spend / Order Value
                  </label>
                  <span className="text-emerald-600 font-bold font-mono text-sm">
                    ₹{avgTicketPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="15000"
                  step="200"
                  value={avgTicketPrice}
                  onChange={(e) => setAvgTicketPrice(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
              </div>

              <div className="p-3.5 rounded-2xl bg-indigo-50/50 border border-indigo-100 text-xs text-slate-600 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span>{currentProfile.description}</span>
              </div>

            </div>

            {/* Projected Output Card */}
            <div className="lg:col-span-6 rounded-3xl bg-gradient-to-br from-indigo-50/60 via-white to-emerald-50/40 border border-indigo-100 p-6 sm:p-8 relative overflow-hidden shadow-md">
              
              <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-2">
                Projected 90-Day Impact
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading mb-6">
                Estimated Growth for {currentProfile.name.split('/')[0]}
              </h3>

              <div className="space-y-4">
                
                {/* Projected Revenue */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-between shadow-xs">
                  <div>
                    <span className="text-xs text-slate-500 font-medium">Estimated Monthly Revenue Boost</span>
                    <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-heading">
                      +₹{estimatedMonthlyRevenueBoost.toLocaleString('en-IN')}<span className="text-sm font-normal text-slate-500">/mo</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>

                {/* Additional Walk-ins */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <span className="text-xs text-slate-500 font-medium">New Monthly Walk-Ins</span>
                    <div className="text-xl font-black text-indigo-600 font-heading mt-1">
                      +{estimatedNewWalkIns} Customers
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <span className="text-xs text-slate-500 font-medium">Total Monthly Map Views</span>
                    <div className="text-xl font-black text-slate-800 font-heading mt-1">
                      {projectedViews.toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>

              </div>

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenQuoteModal(`ROI Projection for ${currentProfile.name}: +₹${estimatedMonthlyRevenueBoost.toLocaleString('en-IN')}/mo`)}
                  className="w-full py-3.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <span>Claim This Growth Strategy</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
