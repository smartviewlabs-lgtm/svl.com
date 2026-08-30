import React, { useState } from 'react';
import { SERVICES } from '../data/agencyData';
import { ServiceItem } from '../types';
import { 
  Camera, 
  TrendingUp, 
  Layout, 
  Search, 
  Video, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Layers,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenQuoteModal: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Camera': return <Camera className="w-6 h-6 text-indigo-600" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-emerald-600" />;
      case 'Layout': return <Layout className="w-6 h-6 text-indigo-600" />;
      case 'Search': return <Search className="w-6 h-6 text-orange-600" />;
      case 'Video': return <Video className="w-6 h-6 text-purple-600" />;
      default: return <Sparkles className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Complete Digital Marketing & 360° Growth Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Full-Spectrum <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700">Digital Marketing</span>, Web Design & Google 360° Solutions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            From high-ROI Google & Meta Performance Ads and lightning-fast custom websites to viral social media management and certified Google Street View 360° virtual tours across Punjab.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`relative rounded-3xl bg-white border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                service.popular
                  ? 'border-indigo-400 shadow-lg shadow-indigo-100/70 ring-1 ring-indigo-400/30'
                  : 'border-slate-200 hover:border-slate-300 shadow-xs'
              }`}
            >
              {/* Badge if present */}
              {service.badge && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-2xs">
                    <ShieldCheck className="w-3 h-3 text-indigo-600" />
                    {service.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-indigo-50/80 border border-indigo-100 flex items-center justify-center mb-5">
                  {getServiceIcon(service.iconName)}
                </div>

                <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
                  {service.tag}
                </div>

                <h3 className="text-xl font-bold text-slate-900 font-heading tracking-tight mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Key Features Bullet List */}
                <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={() => onOpenQuoteModal(service.title)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-200 transition-all active:scale-95"
                >
                  <span>Inquire / Get Shoot Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full py-1.5 px-3 rounded-lg text-xs font-semibold text-slate-500 hover:text-slate-800 text-center hover:bg-slate-50 transition-colors"
                >
                  View Full Deliverables & Features
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Selected Service Detailed Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
            <div className="relative w-full max-w-2xl rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
              
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                    {getServiceIcon(selectedService.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 font-heading">{selectedService.title}</h3>
                    <span className="text-xs text-indigo-600 font-semibold">{selectedService.tag}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-slate-400 hover:text-slate-700 p-1.5 rounded-xl bg-slate-100"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {selectedService.fullDescription}
              </p>

              {/* Complete Features List */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">All Inclusions:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Guaranteed Deliverables:</h4>
                <div className="space-y-1.5">
                  {selectedService.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-indigo-700 font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Inside Modal */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onOpenQuoteModal(title);
                  }}
                  className="flex-1 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-200 text-center"
                >
                  Book This Service
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="py-3 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm text-center"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
