import React, { useState } from 'react';
import { CAREER_PROGRAMS, COMPANY_DETAILS, PUNJAB_LOCATIONS } from '../data/agencyData';
import { CareerOpportunity } from '../types';
import { 
  Briefcase, 
  GraduationCap, 
  Sparkles, 
  Award, 
  MapPin, 
  DollarSign, 
  Clock, 
  CheckCircle2, 
  Mail, 
  Send, 
  Phone, 
  FileText, 
  Users, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface CareersPortalProps {
  initialJobId?: string;
}

export const CareersPortal: React.FC<CareersPortalProps> = ({ initialJobId }) => {
  const [selectedJob, setSelectedJob] = useState<CareerOpportunity | null>(
    initialJobId ? CAREER_PROGRAMS.find(j => j.id === initialJobId) || CAREER_PROGRAMS[0] : null
  );
  
  const [isApplying, setIsApplying] = useState<boolean>(false);
  const [appliedJob, setAppliedJob] = useState<CareerOpportunity | null>(null);

  // Application Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    collegeOrOrg: '',
    preferredCity: 'Chandigarh / Mohali',
    roleApplyingFor: 'Digital Marketing & Performance Ads Intern',
    experienceLevel: 'Student / Fresher',
    portfolioOrLinkedin: '',
    coverNote: '',
    availability: 'Immediate (Within 1-2 weeks)'
  });

  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleOpenApplication = (job: CareerOpportunity) => {
    setAppliedJob(job);
    setFormData(prev => ({
      ...prev,
      roleApplyingFor: job.title
    }));
    setIsApplying(true);
    setSubmittedSuccess(false);
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // Confetti fallback
    }

    setSubmittedSuccess(true);

    // Construct formatted mailto body for smartviewlabs@gmail.com
    const subject = encodeURIComponent(`[CAREER APPLICATION] ${formData.roleApplyingFor} - ${formData.fullName} (${formData.preferredCity})`);
    const body = encodeURIComponent(
`SMART VIEW LABS - CAREER & INTERNSHIP APPLICATION DETAILS
--------------------------------------------------------
Full Name: ${formData.fullName}
Role Applied: ${formData.roleApplyingFor}
Preferred Punjab City: ${formData.preferredCity}
Phone / WhatsApp: ${formData.phone}
Applicant Email: ${formData.email}
College / Institute / Background: ${formData.collegeOrOrg}
Experience Level: ${formData.experienceLevel}
Availability: ${formData.availability}
Portfolio / LinkedIn / GitHub: ${formData.portfolioOrLinkedin || 'N/A'}

Message / Why Join Smart View Labs:
${formData.coverNote}
--------------------------------------------------------
Sent via Smart View Labs Careers Portal to smartviewlabs@gmail.com`
    );

    // Open direct mail client
    window.location.href = `mailto:${COMPANY_DETAILS.email}?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppSubmission = () => {
    const waText = encodeURIComponent(
`*Job/Internship Application for Smart View Labs*
👤 *Name:* ${formData.fullName}
💼 *Role:* ${formData.roleApplyingFor}
📍 *City:* ${formData.preferredCity}
📱 *Phone:* ${formData.phone}
🎓 *College/Fresher:* ${formData.collegeOrOrg}
🔗 *Portfolio/Links:* ${formData.portfolioOrLinkedin || 'N/A'}
💬 *Note:* ${formData.coverNote || 'Looking forward to joining the Smart View Labs team.'}`
    );

    window.open(`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${waText}`, '_blank');
  };

  return (
    <section id="careers" className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <GraduationCap className="w-3.5 h-3.5 text-violet-600" />
            <span>Students, Professionals & Trainees Welcome</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Join Punjab's Leading Digital & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-indigo-700">
              360° Virtual Tour Agency
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            We are actively hiring passionate students, fresh professionals, and trainees across Chandigarh, Amritsar, Ludhiana, Jalandhar, and Bathinda. Get real industry experience, certified mentorship, and competitive stipends.
          </p>
        </div>

        {/* Perks / Why Join Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {[
            {
              title: "Paid Monthly Stipends",
              desc: "Earn ₹8,000 to ₹35,000/mo while you learn with performance bonuses and project incentives.",
              icon: DollarSign,
              color: "text-emerald-600",
              bgColor: "bg-emerald-50"
            },
            {
              title: "Live 360° Gear Training",
              desc: "Learn to handle professional HDR 360° camera rigs and Google Street View blue line stitching.",
              icon: Sparkles,
              color: "text-indigo-600",
              bgColor: "bg-indigo-50"
            },
            {
              title: "Student Friendly Hours",
              desc: "Flexible schedules tailored for college exams, project submissions, and weekend shoots.",
              icon: Clock,
              color: "text-violet-600",
              bgColor: "bg-violet-50"
            },
            {
              title: "PPO & Fast Career Growth",
              desc: "Top performing interns and trainees transition straight into full-time leadership roles.",
              icon: Award,
              color: "text-orange-600",
              bgColor: "bg-orange-50"
            }
          ].map((perk, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className={`w-10 h-10 rounded-xl ${perk.bgColor} flex items-center justify-center mb-3`}>
                  <perk.icon className={`w-5 h-5 ${perk.color}`} />
                </div>
                <h4 className="text-base font-bold text-slate-900 font-heading">{perk.title}</h4>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{perk.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Current Open Positions & Internship Tracks */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 font-heading">
                Open Positions & Internship Tracks
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                All roles dispatched across our Punjab regional centers or hybrid/remote.
              </p>
            </div>
            <button
              onClick={() => handleOpenApplication(CAREER_PROGRAMS[0])}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-200"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Direct Application Form</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAREER_PROGRAMS.map((job) => (
              <div
                key={job.id}
                className="rounded-3xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-indigo-300 hover:shadow-lg transition-all duration-200 shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                      job.type === 'Internship' 
                        ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' 
                        : job.type === 'Trainee'
                        ? 'bg-violet-50 text-violet-700 border border-violet-200'
                        : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    }`}>
                      {job.type}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {job.openings} Openings
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 font-heading mb-2">
                    {job.title}
                  </h4>

                  <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3 mb-4">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="font-bold text-emerald-600">{job.stipendOrSalary}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                      <span>{job.location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-violet-600 shrink-0" />
                      <span>Target: {job.targetAudience}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={() => handleOpenApplication(job)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-200 transition-all text-center"
                  >
                    Apply Now
                  </button>
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="py-2.5 px-3 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900 font-bold text-xs text-center hover:bg-slate-200"
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dedicated Job Details Modal */}
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
            <div className="relative w-full max-w-2xl rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
              
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-violet-50 text-violet-700 border border-violet-200">
                    {selectedJob.type} • {selectedJob.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mt-2">
                    {selectedJob.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 mt-2">
                    <span className="text-emerald-600 font-bold">{selectedJob.stipendOrSalary}</span>
                    <span>•</span>
                    <span>{selectedJob.location}</span>
                    <span>•</span>
                    <span>{selectedJob.openings} Openings</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-slate-400 hover:text-slate-600 p-1 bg-slate-100 rounded-lg"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {selectedJob.description}
              </p>

              {/* Responsibilities */}
              <div className="mb-5">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Key Responsibilities:</h4>
                <div className="space-y-1.5">
                  {selectedJob.responsibilities.map((r, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements & Perks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs font-bold text-violet-700 uppercase tracking-wider mb-2">Who We Are Looking For:</h4>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {selectedJob.requirements.map((req, i) => (
                      <li key={i}>• {req}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">Program Perks:</h4>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {selectedJob.perks.map((perk, i) => (
                      <li key={i}>• {perk}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-3 border-t border-slate-100">
                <button
                  onClick={() => {
                    const job = selectedJob;
                    setSelectedJob(null);
                    handleOpenApplication(job);
                  }}
                  className="flex-1 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-200"
                >
                  Apply For This Position
                </button>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="py-3 px-6 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold text-sm"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Interactive Application Modal & Form */}
        {isApplying && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
            <div className="relative w-full max-w-2xl rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[92vh]">
              
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-indigo-600" />
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                      Career & Internship Application
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Details will be forwarded directly to <span className="text-indigo-600 font-semibold">smartviewlabs@gmail.com</span> & WhatsApp hiring team.
                  </p>
                </div>
                <button
                  onClick={() => setIsApplying(false)}
                  className="text-slate-400 hover:text-slate-600 p-1.5 bg-slate-100 rounded-lg"
                >
                  ✕
                </button>
              </div>

              {submittedSuccess ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 font-heading">
                    Application Ready & Dispatched!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <span className="text-slate-900 font-bold">{formData.fullName}</span>. Your application for <span className="text-indigo-600 font-bold">{formData.roleApplyingFor}</span> has been formatted and triggered for <span className="text-slate-900 font-semibold">smartviewlabs@gmail.com</span>.
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-left text-xs text-slate-600 space-y-2">
                    <div className="text-slate-500 font-bold uppercase text-[10px]">Speed Up Review:</div>
                    <p>Send a direct notification to our hiring managers on WhatsApp for same-day interview scheduling.</p>
                    <button
                      onClick={handleWhatsAppSubmission}
                      className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
                    >
                      <span>Notify Hiring Team on WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => setIsApplying(false)}
                      className="px-6 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-bold"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmitApplication} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Navdeep Singh"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                      />
                    </div>

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
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. applicant@gmail.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Preferred Punjab City *
                      </label>
                      <select
                        value={formData.preferredCity}
                        onChange={(e) => setFormData({ ...formData, preferredCity: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                      >
                        <option value="Chandigarh / Mohali / Tricity">Chandigarh / Mohali / Tricity</option>
                        <option value="Amritsar">Amritsar</option>
                        <option value="Ludhiana">Ludhiana</option>
                        <option value="Jalandhar">Jalandhar</option>
                        <option value="Bathinda">Bathinda</option>
                        <option value="Patiala">Patiala</option>
                        <option value="Remote / Hybrid Punjab">Remote / Hybrid Punjab</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Role Applying For *
                      </label>
                      <select
                        value={formData.roleApplyingFor}
                        onChange={(e) => setFormData({ ...formData, roleApplyingFor: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                      >
                        {CAREER_PROGRAMS.map((job) => (
                          <option key={job.id} value={job.title}>{job.title} ({job.type})</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Current Status *
                      </label>
                      <select
                        value={formData.experienceLevel}
                        onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                      >
                        <option value="Current College Student (1st-4th Year)">Current College Student (1st-4th Year)</option>
                        <option value="Fresh Graduate (2024-2026)">Fresh Graduate (2024-2026)</option>
                        <option value="Trainee Seeking Practical Skills">Trainee Seeking Practical Skills</option>
                        <option value="Experienced Professional (1+ Years)">Experienced Professional (1+ Years)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        College / University / Degree
                      </label>
                      <input
                        type="text"
                        value={formData.collegeOrOrg}
                        onChange={(e) => setFormData({ ...formData, collegeOrOrg: e.target.value })}
                        placeholder="e.g. Panjab University / GNDU / Thapar / PTU"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Portfolio / Instagram / LinkedIn / GitHub Link
                      </label>
                      <input
                        type="url"
                        value={formData.portfolioOrLinkedin}
                        onChange={(e) => setFormData({ ...formData, portfolioOrLinkedin: e.target.value })}
                        placeholder="e.g. https://instagram.com/your_handle or drive link"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Why are you interested in joining Smart View Labs? (Short Note)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.coverNote}
                      onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                      placeholder="Tell us about your interests in digital marketing, 360 photography, reels editing, or web coding..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                    />
                  </div>

                  <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-200 text-[11px] text-indigo-800 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Submission automatically sends structured details to <strong>smartviewlabs@gmail.com</strong>.</span>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-200 flex items-center justify-center gap-2 transition-all active:scale-95"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Application to smartviewlabs@gmail.com</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsApplying(false)}
                      className="py-3 px-5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-bold"
                    >
                      Cancel
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
