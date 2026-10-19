import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  ArrowRight,
  PhoneCall,
  Laptop
} from 'lucide-react';

import { mockFaqs } from './mockTallyData';

export const DemoFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    tallyVersion: 'TallyPrime 4.x',
    dataPreference: 'live_tally'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First open by default

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section id="demo" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Block */}
        <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden mb-20">
          <div className="absolute top-0 right-0 -z-0 w-96 h-96 bg-[#2E7D4E]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -z-0 w-80 h-80 bg-emerald-700/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Zero Risk Onboarding</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Stop Flying Blind on Cash Flow.
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Connect your Tally in 15 minutes or test it with our sample dummy dataset. See your overdue receivables, cash runway, and automated collections in action.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>5-minute zero-bloat read-only connector (Port 9000)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No credit card or upfront commitment required</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Live walkthrough with a certified Tally Solution Architect</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4 text-xs text-slate-400">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xs ring-2 ring-slate-900">RS</div>
                  <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-xs ring-2 ring-slate-900">MC</div>
                  <div className="w-8 h-8 rounded-full bg-[#2E7D4E] flex items-center justify-center text-white font-bold text-xs ring-2 ring-slate-900">HS</div>
                </div>
                <span>Joined by 240+ promoters across India</span>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-6 bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-100">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-[#2E7D4E] rounded-full mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">You're All Set!</h3>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    Thank you <span className="font-semibold text-slate-800">{formData.name}</span>. Our team will message you on WhatsApp at <span className="font-semibold text-slate-800">{formData.phone}</span> within 15 minutes with your login credentials and connector token.
                  </p>
                  
                  <div className="p-4 bg-[#F2F9F4] rounded-xl border border-[#2E7D4E]/20 text-xs text-left text-slate-700 space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Company:</span>
                      <span className="font-semibold">{formData.company || 'Not provided'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Selected Tally:</span>
                      <span className="font-semibold">{formData.tallyVersion}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Mode:</span>
                      <span className="font-semibold text-[#2E7D4E]">
                        {formData.dataPreference === 'live_tally' ? 'Live Tally Connector' : 'Sample Dummy Dataset'}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', phone: '', company: '', tallyVersion: 'TallyPrime 4.x', dataPreference: 'live_tally' });
                    }}
                    className="text-xs text-[#2E7D4E] hover:underline font-semibold"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Request Your 20-Min Live Walkthrough</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Experience your actual Tally data or our manufacturing sandbox</p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#2E7D4E] focus:ring-1 focus:ring-[#2E7D4E]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        WhatsApp Mobile *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98250 12345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#2E7D4E] focus:ring-1 focus:ring-[#2E7D4E]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Apex Synthetics Pvt Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#2E7D4E] focus:ring-1 focus:ring-[#2E7D4E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Current Tally Version
                    </label>
                    <select
                      value={formData.tallyVersion}
                      onChange={(e) => setFormData({ ...formData, tallyVersion: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#2E7D4E] bg-white"
                    >
                      <option value="TallyPrime 4.x / 3.x">TallyPrime 4.x / 3.x (Latest)</option>
                      <option value="TallyPrime 1.x / 2.x">TallyPrime 1.x / 2.x</option>
                      <option value="Tally.ERP 9 (Release 6.x)">Tally.ERP 9 (Release 6.x)</option>
                      <option value="Tally Server 9">Tally Server 9</option>
                      <option value="Other / Busy ERP">Other / Busy ERP</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      How would you like to experience the demo?
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <label 
                        className={`p-2.5 rounded-xl border cursor-pointer transition-all flex items-center gap-2 ${
                          formData.dataPreference === 'live_tally' 
                            ? 'border-[#2E7D4E] bg-[#F2F9F4] text-[#25663F] font-semibold' 
                            : 'border-slate-200 text-slate-600'
                        }`}
                      >
                        <input
                          type="radio"
                          name="dataPref"
                          checked={formData.dataPreference === 'live_tally'}
                          onChange={() => setFormData({ ...formData, dataPreference: 'live_tally' })}
                          className="accent-[#2E7D4E]"
                        />
                        <span>Connect My Tally</span>
                      </label>
                      <label 
                        className={`p-2.5 rounded-xl border cursor-pointer transition-all flex items-center gap-2 ${
                          formData.dataPreference === 'dummy_data' 
                            ? 'border-[#2E7D4E] bg-[#F2F9F4] text-[#25663F] font-semibold' 
                            : 'border-slate-200 text-slate-600'
                        }`}
                      >
                        <input
                          type="radio"
                          name="dataPref"
                          checked={formData.dataPreference === 'dummy_data'}
                          onChange={() => setFormData({ ...formData, dataPreference: 'dummy_data' })}
                          className="accent-[#2E7D4E]"
                        />
                        <span>Use Sample Data</span>
                      </label>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-[#2E7D4E] hover:bg-[#25663F] text-white rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-[#2E7D4E]/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Generating Demo Credentials...</span>
                        </>
                      ) : (
                        <>
                          <span>Schedule Demo &amp; Get Token</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#2E7D4E]" />
                    <span>256-Bit TLS · Strict Read-Only · Zero Risk</span>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Frequently Asked Questions Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Everything promoters and accountants ask before connecting Bizgenix to their Tally.
            </p>
          </div>

          <div className="space-y-3">
            {mockFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 overflow-hidden bg-white transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-[#25663F] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="p-1 rounded-lg bg-slate-100 text-slate-600 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
