import React, { useState } from 'react';
import { PUNJAB_LOCATIONS, COMPANY_DETAILS } from '../data/agencyData';
import { PunjabLocation } from '../types';
import { MapPin, Phone, MessageCircle, Clock, CheckCircle2, Building2, Compass, ShieldCheck } from 'lucide-react';

interface LocationsHubProps {
  onBookShootForCity: (city: string) => void;
}

export const LocationsHub: React.FC<LocationsHubProps> = ({ onBookShootForCity }) => {
  const [selectedCity, setSelectedCity] = useState<PunjabLocation>(PUNJAB_LOCATIONS[0]);

  return (
    <section id="locations" className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-indigo-600" />
            <span>State-Wide Punjab Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Punjab Based Work Offices & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700">
              Rapid 24-48 Hr On-Site Shoot Dispatch
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Certified Google Street View photography and digital marketing teams operating across Chandigarh, Amritsar, Ludhiana, Jalandhar, Bathinda, and throughout Punjab.
          </p>
        </div>

        {/* City Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {PUNJAB_LOCATIONS.map((loc) => (
            <button
              key={loc.city}
              onClick={() => setSelectedCity(loc)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCity.city === loc.city
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105'
                  : 'bg-slate-50 text-slate-600 hover:text-indigo-600 border border-slate-200'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{loc.city}</span>
              {loc.badge && (
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-indigo-100 text-indigo-800 font-bold">
                  {loc.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Active City Feature Showcase Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                  {selectedCity.district}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Photographers Available Now
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                Smart View Labs - {selectedCity.city}
              </h3>

              <p className="text-sm text-indigo-600 font-bold">
                {selectedCity.tagline}
              </p>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 border-t border-slate-200 pt-3">
                <div className="flex items-start gap-2">
                  <Building2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Office / Regional Point:</span> {selectedCity.address}
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Coverage Zone:</span> {selectedCity.coverageRadius}
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Shoot Dispatch Time:</span> 24 to 48 Hours On-Site
                  </div>
                </div>
              </div>

              {/* Services available in this city */}
              <div className="pt-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Services Provided in {selectedCity.city}:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedCity.servicesAvailable.map((srv, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-xl bg-white text-slate-700 border border-slate-200 text-xs font-medium flex items-center gap-1.5 shadow-2xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Quick Connect & Book for This City */}
            <div className="md:col-span-5 rounded-2xl bg-white p-5 sm:p-6 border border-slate-200 shadow-sm flex flex-col justify-between h-full space-y-4">
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Book Local Shoot / Consultation
                </div>
                <div className="text-lg font-bold text-slate-900 font-heading">
                  Schedule in {selectedCity.city}
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Our certified local photographer will visit your property with HDR 360° gear.
                </p>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => onBookShootForCity(selectedCity.city)}
                  className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-200 transition-all active:scale-95"
                >
                  Book 360° Shoot in {selectedCity.city}
                </button>

                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-bold text-xs sm:text-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Call {COMPANY_DETAILS.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=Hi%20Smart%20View%20Labs%2C%20I%20want%20to%20book%20a%20360%C2%B0%20Virtual%20Tour%20for%20my%20business%20in%20${encodeURIComponent(selectedCity.city)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-100" />
                  <span>WhatsApp for {selectedCity.city}</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Punjab City Grid Mini Cards */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {PUNJAB_LOCATIONS.map((loc) => (
            <div
              key={loc.city}
              onClick={() => setSelectedCity(loc)}
              className={`p-3.5 rounded-2xl border text-center cursor-pointer transition-all ${
                selectedCity.city === loc.city
                  ? 'bg-indigo-50 border-indigo-300 shadow-md scale-102'
                  : 'bg-white border-slate-200 hover:border-indigo-200 shadow-2xs'
              }`}
            >
              <div className="text-sm font-bold text-slate-900 font-heading">{loc.city}</div>
              <div className="text-[10px] text-slate-500 mt-0.5">{loc.district}</div>
              <div className="text-[10px] text-indigo-600 font-bold mt-1">24h Shoot Dispatch</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
