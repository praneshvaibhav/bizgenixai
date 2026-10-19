import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookDemoModal: React.FC<BookDemoModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    tallyVersion: 'TallyPrime 4.x / 3.x',
    turnover: '₹15 Cr – ₹50 Cr',
    slotTime: 'Today at 4:30 PM IST'
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-lg rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Bizgenix AI</span>
              <span className="text-slate-400">·</span>
              <span className="text-xs text-slate-300">20-Min Executive Walkthrough</span>
            </div>
            <h3 className="font-bold text-lg text-white mt-0.5">Book Your Growth Intelligence Demo</h3>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-[#2E7D4E] rounded-full mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Demo Walkthrough Confirmed!</h4>
              <p className="text-slate-600 text-sm max-w-sm mx-auto">
                Thank you <span className="font-semibold text-slate-800">{formData.name}</span>. Our Tally ERP Solution Architect will connect with you on <span className="font-semibold text-slate-800">{formData.phone}</span>.
              </p>

              <div className="bg-[#F2F9F4] border border-[#2E7D4E]/20 p-4 rounded-xl text-left text-xs space-y-2">
                <div className="flex justify-between text-slate-600">
                  <span>Scheduled Time:</span>
                  <span className="font-semibold text-slate-900">{formData.slotTime}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Company:</span>
                  <span className="font-semibold text-slate-900">{formData.company || 'Not specified'}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Tally Setup:</span>
                  <span className="font-semibold text-slate-900">{formData.tallyVersion}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Google Meet / Screen Share:</span>
                  <span className="font-semibold text-[#2E7D4E]">Calendar invite sent to {formData.email || 'WhatsApp'}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#2E7D4E] hover:bg-[#25663F] text-white rounded-xl text-sm font-semibold transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Shah"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#2E7D4E] focus:ring-1 focus:ring-[#2E7D4E] text-slate-900"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">WhatsApp Mobile *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98250 12345"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#2E7D4E] focus:ring-1 focus:ring-[#2E7D4E] text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Business Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="rajesh@apexpolymers.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#2E7D4E] focus:ring-1 focus:ring-[#2E7D4E] text-slate-900"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Company / Firm Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Apex Synthetics Ltd"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#2E7D4E] focus:ring-1 focus:ring-[#2E7D4E] text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Current Tally Version</label>
                  <select
                    value={formData.tallyVersion}
                    onChange={(e) => setFormData({ ...formData, tallyVersion: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#2E7D4E] text-slate-900 bg-white"
                  >
                    <option value="TallyPrime 4.x / 3.x">TallyPrime (Latest 4.x / 3.x)</option>
                    <option value="TallyPrime 1.x / 2.x">TallyPrime (Earlier 1.x / 2.x)</option>
                    <option value="Tally.ERP 9 Release 6.x">Tally.ERP 9 (Release 6.x)</option>
                    <option value="Tally Server 9">Tally Server 9 / Multi-User</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Annual Turnover Bracket</label>
                  <select
                    value={formData.turnover}
                    onChange={(e) => setFormData({ ...formData, turnover: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#2E7D4E] text-slate-900 bg-white"
                  >
                    <option value="₹5 Cr – ₹15 Cr">₹5 Cr – ₹15 Cr</option>
                    <option value="₹15 Cr – ₹50 Cr">₹15 Cr – ₹50 Cr</option>
                    <option value="₹50 Cr – ₹150 Cr">₹50 Cr – ₹150 Cr</option>
                    <option value="₹150 Cr+">₹150 Cr+ (Group Conglomerate)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Preferred Time Slot</label>
                <div className="grid grid-cols-3 gap-2">
                  {['Today 4:30 PM IST', 'Tomorrow 11:30 AM', 'Tomorrow 3:00 PM'].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setFormData({ ...formData, slotTime: slot })}
                      className={`p-2 rounded-xl border text-center transition-all ${
                        formData.slotTime === slot
                          ? 'border-[#2E7D4E] bg-[#F2F9F4] text-[#25663F] font-semibold'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5 text-[11px] text-slate-600">
                <ShieldCheck className="w-4 h-4 text-[#2E7D4E] shrink-0 mt-0.5" />
                <span>
                  <strong>100% On-Premise Guarantee:</strong> During the demo, you can choose to connect your actual Tally or test on our dummy manufacturing dataset. No credit card required.
                </span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#2E7D4E] hover:bg-[#25663F] text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-[#2E7D4E]/20 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Reserving Demo Slot...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Confirm 20-Minute Live Demo</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
