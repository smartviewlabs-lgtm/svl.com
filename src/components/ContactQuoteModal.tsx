import React, { useState } from 'react';
import { COMPANY_DETAILS, PUNJAB_LOCATIONS, SERVICES } from '../data/agencyData';
import { 
  Compass, 
  Send, 
  MessageCircle, 
  Phone, 
  Mail, 
  CheckCircle2, 
  MapPin, 
  Sparkles, 
  Calendar,
  Building2
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialCity?: string;
  initialBusinessName?: string;
}

export const ContactQuoteModal: React.FC<ContactQuoteModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialCity,
  initialBusinessName
}) => {
  const [formData, setFormData] = useState({
    businessName: initialBusinessName || '',
    contactPerson: '',
    phone: '',
    email: '',
    city: initialCity || 'Chandigarh',
    serviceNeeded: initialService || 'Google Trusted 360° Virtual Tours & Street View',
    propertyType: 'Restaurant / Cafe',
    approximateArea: '1,000 - 3,000 sq.ft.',
    preferredShootDate: '',
    specialNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {}

    setSubmitted(true);

    // Formatted mailto to smartviewlabs@gmail.com
    const subject = encodeURIComponent(`[360° SHOOT & MARKETING INQUIRY] ${formData.businessName} (${formData.city})`);
    const body = encodeURIComponent(
`SMART VIEW LABS - 360° SHOOT & DIGITAL MARKETING LEAD DETAILS
--------------------------------------------------------------
Business Name: ${formData.businessName}
Contact Person: ${formData.contactPerson}
Mobile / WhatsApp: ${formData.phone}
Email: ${formData.email || 'Not Provided'}
Punjab City / Location: ${formData.city}
Service Required: ${formData.serviceNeeded}
Property / Business Category: ${formData.propertyType}
Approx. Area / Scale: ${formData.approximateArea}
Preferred Shoot Date: ${formData.preferredShootDate || 'Flexible / ASAP'}

Special Requirements / Queries:
${formData.specialNotes || 'None'}
--------------------------------------------------------------
Sent to smartviewlabs@gmail.com via Smart View Labs Web Portal.`
    );

    window.location.href = `mailto:${COMPANY_DETAILS.email}?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppDirect = () => {
    const waText = encodeURIComponent(
`*New 360° Shoot / Marketing Inquiry - Smart View Labs*
🏢 *Business:* ${formData.businessName || 'Business Owner'}
👤 *Contact:* ${formData.contactPerson}
📍 *City:* ${formData.city}
📱 *Phone:* ${formData.phone}
🛠️ *Service:* ${formData.serviceNeeded}
🏷️ *Category:* ${formData.propertyType}
📐 *Area:* ${formData.approximateArea}
📅 *Preferred Date:* ${formData.preferredShootDate || 'Earliest available'}
📝 *Notes:* ${formData.specialNotes || 'Please send quotation.'}`
    );

    window.open(`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${waText}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white border border-slate-200 p-5 sm:p-8 shadow-2xl overflow-y-auto max-h-[94vh]">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-2xl font-black text-slate-900 font-heading">
                Book 360° Virtual Tour & Marketing Shoot
              </h3>
              <p className="text-xs text-slate-500">
                Inquiries dispatched to <span className="text-indigo-600 font-bold">{COMPANY_DETAILS.email}</span> & WhatsApp.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-2 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
          >
            ✕
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-black text-slate-900 font-heading">
              Shoot Inquiry Registered!
            </h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Thank you, <span className="text-slate-900 font-bold">{formData.contactPerson || 'valued client'}</span>. Your request for <span className="text-indigo-600 font-bold">{formData.businessName}</span> in <span className="text-slate-900 font-bold">{formData.city}</span> is formatted for <span className="text-indigo-600 font-bold">{COMPANY_DETAILS.email}</span>.
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-left text-xs text-slate-600 space-y-3 shadow-xs">
              <div className="text-emerald-700 font-bold uppercase text-[10px] tracking-wider">Instant 5-Minute Confirmation:</div>
              <p>Connect with our Punjab Shoot Coordinator directly on WhatsApp for an immediate date lock and customized pricing:</p>
              <button
                onClick={handleWhatsAppDirect}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm on WhatsApp ({COMPANY_DETAILS.phone})</span>
              </button>
            </div>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Business / Store / Property Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="e.g. Grand Amber Banquet & Resort"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Name / Designation *
                </label>
                <input
                  type="text"
                  required
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  placeholder="e.g. Gurmukh Singh (Owner)"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-hidden"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Mobile / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 7508094760"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Punjab City / Region *
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-hidden"
                >
                  {PUNJAB_LOCATIONS.map((loc) => (
                    <option key={loc.city} value={loc.city}>{loc.city} ({loc.district})</option>
                  ))}
                  <option value="Other Punjab Location">Other Punjab District</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Primary Service Needed *
                </label>
                <select
                  value={formData.serviceNeeded}
                  onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-hidden"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Complete All-in-One Growth Bundle">Complete All-in-One Growth Bundle</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Business Category
                </label>
                <select
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-hidden"
                >
                  <option value="Hotel / Resort / Banquet">Hotel / Resort / Banquet</option>
                  <option value="Restaurant / Cafe / Bar">Restaurant / Cafe / Bar</option>
                  <option value="Automobile / Retail Showroom">Automobile / Retail Showroom</option>
                  <option value="Hospital / Clinic / Diagnostic">Hospital / Clinic / Diagnostic</option>
                  <option value="Gym / Spa / Salon">Gym / Spa / Salon</option>
                  <option value="School / College / Institute">School / College / Institute</option>
                  <option value="Industrial / Factory / Real Estate">Industrial / Factory / Real Estate</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Approximate Carpet Area (sq.ft.)
                </label>
                <select
                  value={formData.approximateArea}
                  onChange={(e) => setFormData({ ...formData, approximateArea: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-hidden"
                >
                  <option value="Under 1,000 sq.ft. (Small Boutique / Cafe)">Under 1,000 sq.ft. (Small Boutique / Cafe)</option>
                  <option value="1,000 - 3,000 sq.ft. (Standard Restaurant / Clinic)">1,000 - 3,000 sq.ft. (Standard Restaurant / Clinic)</option>
                  <option value="3,000 - 10,000 sq.ft. (Showroom / Multi-Floor)">3,000 - 10,000 sq.ft. (Showroom / Multi-Floor)</option>
                  <option value="10,000+ sq.ft. (Resort / Hotel / Large Campus)">10,000+ sq.ft. (Resort / Hotel / Large Campus)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Target Shoot Date / Timing
                </label>
                <input
                  type="text"
                  value={formData.preferredShootDate}
                  onChange={(e) => setFormData({ ...formData, preferredShootDate: e.target.value })}
                  placeholder="e.g. This upcoming Tuesday morning"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-hidden"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Additional Notes / Specific Questions
              </label>
              <textarea
                rows={2}
                value={formData.specialNotes}
                onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                placeholder="Mention if you want street view blue lines, Instagram reels, or website redesign..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-hidden"
              />
            </div>

            <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200 text-[11px] text-indigo-900 flex items-center gap-2">
              <Mail className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>Details will be formatted and dispatched directly to <strong>{COMPANY_DETAILS.email}</strong>.</span>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-xl shadow-indigo-600/25 flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Submit Shoot Request to {COMPANY_DETAILS.email}</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="py-3 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
              >
                Cancel
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
