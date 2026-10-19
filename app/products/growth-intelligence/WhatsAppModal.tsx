import React, { useState } from 'react';
import { X, Send, CheckCircle2, Shield, Smartphone, FileText, ArrowRight, Sparkles } from 'lucide-react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  debtorName?: string;
  amount?: string;
  billRef?: string;
  phone?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  debtorName = "Krystal Tex-Fab Pvt Ltd",
  amount = "₹28,40,000",
  billRef = "INV-2026/0419, INV-2026/0488",
  phone = "+91 98251 44321"
}) => {
  const [tone, setTone] = useState<'courteous' | 'formal' | 'escalation'>('formal');
  const [includePdf, setIncludePdf] = useState(true);
  const [includeUpi, setIncludeUpi] = useState(true);
  const [status, setStatus] = useState<'draft' | 'sending' | 'sent'>('draft');

  if (!isOpen) return null;

  const messagesByTone = {
    courteous: `Dear Mr. Mahesh Agarwal,\n\nGreetings from Apex Synthetics & Polymers Ltd.\n\nThis is a gentle reminder regarding our ledger statement. As per our Tally records, bills totaling ${amount} (${billRef}) are now awaiting clearance.\n\nWe kindly request you to schedule the payment at your earliest convenience. Thank you for your continued partnership!`,
    formal: `To,\nThe Accounts Manager\n${debtorName}\n\nSubject: Outstanding Payment Due — ${amount}\n\nDear Sir/Madam,\n\nOur accounts records indicate that payment of ${amount} against invoice(s) ${billRef} is overdue by 78 days as per agreed credit terms.\n\nPlease find attached the verified ledger extract. Kindly arrange payment via NEFT/RTGS or the instant UPI link below by Oct 20, 2026 to avoid credit limit hold.\n\nBank: HDFC Bank | A/C: 502000889211 | IFSC: HDFC0000123\nInstant UPI: apexpoly@hdfcbank`,
    escalation: `URGENT NOTICE: Overdue Payment Escalation\n\nAttention: Promoter / CFO, ${debtorName}\n\nReference: Overdue bills ${billRef} for total amount ${amount} (Overdue 78+ Days).\n\nDespite previous reminders, this account has crossed the maximum credit threshold. Dispatch for new orders is temporarily paused pending clearance.\n\nPlease remit immediately or contact our Finance Controller at +91 98200 11223.`
  };

  const handleSend = () => {
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setTimeout(() => {
        // keep open for confirmation
      }, 500);
    }, 900);
  };

  const handleReset = () => {
    setStatus('draft');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-xl rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#2E7D4E] flex items-center justify-center text-white">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-base text-white">Automated WhatsApp Collection Dispatch</h3>
                <span className="text-[11px] font-medium bg-[#2E7D4E]/40 text-emerald-300 px-2 py-0.5 rounded-full">Tally Linked</span>
              </div>
              <p className="text-xs text-slate-400">Verified debtor ledger extract with instant payment trigger</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm">
          {status === 'sent' ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-[#2E7D4E] rounded-full mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900">WhatsApp Message Dispatched!</h4>
                <p className="text-slate-600 mt-1 max-w-md mx-auto">
                  Statement and payment link successfully transmitted to <span className="font-semibold text-slate-800">{debtorName}</span> ({phone}).
                </p>
              </div>

              <div className="bg-[#F2F9F4] border border-[#2E7D4E]/20 p-4 rounded-xl text-left max-w-md mx-auto space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Delivery Status:</span>
                  <span className="font-semibold text-[#2E7D4E]">Delivered (Double Tick)</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Ledger PDF Attached:</span>
                  <span className="font-medium text-slate-800">Yes (Auto-generated from Tally)</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>UPI Payment Link:</span>
                  <span className="font-medium text-slate-800">apexpoly@hdfcbank</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Audit Trail Logged:</span>
                  <span className="font-medium text-slate-800">Yes (Logged in Bizgenix activity)</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 bg-[#2E7D4E] hover:bg-[#25663F] text-white rounded-xl font-medium transition-colors"
              >
                Close & Return to Dashboard
              </button>
            </div>
          ) : (
            <>
              {/* Recipient Overview */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-xs text-slate-500 font-medium">Debtor Account</div>
                  <div className="font-semibold text-slate-900">{debtorName}</div>
                  <div className="text-xs text-slate-500">{phone} · GSTIN: 24AAACK1234F1Z8</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500 font-medium">Total Overdue</div>
                  <div className="text-lg font-bold text-rose-600 tabular-nums">{amount}</div>
                  <div className="text-[11px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-block">78 Days Overdue</div>
                </div>
              </div>

              {/* Tone Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Select Communication Tone
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setTone('courteous')}
                    className={`py-2 px-3 text-xs font-medium rounded-xl border transition-all text-center ${
                      tone === 'courteous' 
                        ? 'border-[#2E7D4E] bg-[#F2F9F4] text-[#25663F] font-semibold ring-1 ring-[#2E7D4E]' 
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    1. Friendly Gentle
                  </button>
                  <button
                    type="button"
                    onClick={() => setTone('formal')}
                    className={`py-2 px-3 text-xs font-medium rounded-xl border transition-all text-center ${
                      tone === 'formal' 
                        ? 'border-[#2E7D4E] bg-[#F2F9F4] text-[#25663F] font-semibold ring-1 ring-[#2E7D4E]' 
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    2. Formal Statement
                  </button>
                  <button
                    type="button"
                    onClick={() => setTone('escalation')}
                    className={`py-2 px-3 text-xs font-medium rounded-xl border transition-all text-center ${
                      tone === 'escalation' 
                        ? 'border-rose-500 bg-rose-50 text-rose-800 font-semibold ring-1 ring-rose-500' 
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    3. Notice / Escalation
                  </button>
                </div>
              </div>

              {/* Message Preview (WhatsApp Bubble) */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    WhatsApp Message Preview
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#2E7D4E]" />
                    Auto-populated from Tally Ledger
                  </span>
                </div>
                <div className="bg-[#EFEAE2] p-4 rounded-xl border border-slate-300/80 shadow-inner">
                  <div className="bg-white rounded-xl p-3.5 text-xs text-slate-800 shadow-sm border border-slate-200 max-w-md ml-auto space-y-2 relative">
                    <div className="whitespace-pre-line leading-relaxed font-sans">
                      {messagesByTone[tone]}
                    </div>
                    {includePdf && (
                      <div className="bg-slate-50 p-2 rounded-lg border border-slate-200 flex items-center gap-2 text-[11px] text-slate-700">
                        <FileText className="w-4 h-4 text-rose-500 shrink-0" />
                        <span className="truncate">Ledger_Extract_Krystal_TexFab_Oct2026.pdf (142 KB)</span>
                      </div>
                    )}
                    <div className="text-[10px] text-slate-400 text-right">
                      10:14 AM ✓✓
                    </div>
                  </div>
                </div>
              </div>

              {/* Options */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer p-2 rounded-lg bg-slate-50 border border-slate-200">
                  <input
                    type="checkbox"
                    checked={includePdf}
                    onChange={(e) => setIncludePdf(e.target.checked)}
                    className="accent-[#2E7D4E] w-4 h-4 rounded"
                  />
                  <span>Attach Tally Ledger PDF</span>
                </label>
                <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer p-2 rounded-lg bg-slate-50 border border-slate-200">
                  <input
                    type="checkbox"
                    checked={includeUpi}
                    onChange={(e) => setIncludeUpi(e.target.checked)}
                    className="accent-[#2E7D4E] w-4 h-4 rounded"
                  />
                  <span>Include Instant UPI / QR</span>
                </label>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-500 bg-emerald-50/60 p-2.5 rounded-lg border border-emerald-100">
                <Shield className="w-4 h-4 text-[#2E7D4E] shrink-0" />
                <span>Dispatches via official WhatsApp Business API with zero phone ban risk. Read-only log saved to Tally activity notes.</span>
              </div>
            </>
          )}
        </div>

        {/* Footer Actions */}
        {status !== 'sent' && (
          <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
            <button
              type="button"
              onClick={onClose}
              className="text-xs font-medium text-slate-600 hover:text-slate-900 px-3 py-2"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSend}
              disabled={status === 'sending'}
              className="px-5 py-2.5 bg-[#2E7D4E] hover:bg-[#25663F] text-white rounded-xl text-xs font-semibold flex items-center gap-2 shadow-sm transition-all disabled:opacity-50"
            >
              {status === 'sending' ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Connecting to WhatsApp Gateway...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send WhatsApp Follow-up</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
