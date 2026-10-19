import React, { useState } from 'react';
import { 
  XCircle, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  FileSpreadsheet, 
  Monitor, 
  Smartphone, 
  MessageSquare, 
  Sparkles,
  Zap,
  TrendingDown,
  TrendingUp,
  ShieldCheck,
  AlertOctagon
} from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  const [persona, setPersona] = useState<'promoter' | 'cfo'>('promoter');

  return (
    <section className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold text-[#2E7D4E] uppercase tracking-wider mb-2">
            The Executive Reality Check
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Tally Was Built for Bookkeeping. <br />
            Not for Running Working Capital.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
            Every growing business in India reaches a ceiling where accounting software alone cannot tell you what decisions to take on Monday morning.
          </p>

          {/* Persona Switcher Toggle */}
          <div className="mt-8 inline-flex items-center p-1 bg-slate-100 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setPersona('promoter')}
              className={`px-4 py-2 rounded-lg transition-all ${
                persona === 'promoter'
                  ? 'bg-white text-slate-900 shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Business Promoter / MD Perspective
            </button>
            <button
              onClick={() => setPersona('cfo')}
              className={`px-4 py-2 rounded-lg transition-all ${
                persona === 'cfo'
                  ? 'bg-white text-slate-900 shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Accountant &amp; CFO Team Perspective
            </button>
          </div>
        </div>

        {/* 2-Column Comparative Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: The Tally Grind (Before) */}
          <div className="rounded-2xl border border-rose-200/90 bg-rose-50/20 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-32 h-32 bg-rose-100/40 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-rose-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">The Traditional Tally Grind</h3>
                    <span className="text-xs text-rose-600 font-medium">Status quo manual operations</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold text-rose-700 bg-rose-100/80 px-2.5 py-1 rounded-md">
                  High Friction
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {persona === 'promoter' ? (
                  <>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</div>
                      <div>
                        <strong className="text-slate-900 font-semibold block text-sm">Chained to the Desktop PC</strong>
                        <p className="text-slate-600 text-xs mt-0.5">Can't check client outstandings during customer meetings or when travelling without calling your accountant.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</div>
                      <div>
                        <strong className="text-slate-900 font-semibold block text-sm">3 Days Lost Rebuilding Excel MIS</strong>
                        <p className="text-slate-600 text-xs mt-0.5">Accountants spend hours pulling Vouchers, aging ledgers, and pivot tables. By the time it reaches you, the numbers are already 5 days stale.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</div>
                      <div>
                        <strong className="text-slate-900 font-semibold block text-sm">Zero Follow-up Automation</strong>
                        <p className="text-slate-600 text-xs mt-0.5">Payment reminders depend on phone calls from junior staff. No automated WhatsApp dispatch or proof of delivery.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</div>
                      <div>
                        <strong className="text-slate-900 font-semibold block text-sm">Delayed Cash Recovery &amp; Unplanned CC Borrowing</strong>
                        <p className="text-slate-600 text-xs mt-0.5">Receivables cross 60-90+ days without trigger warnings, forcing expensive working capital loan interest.</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</div>
                      <div>
                        <strong className="text-slate-900 font-semibold block text-sm">Endless Promoter Interruptions</strong>
                        <p className="text-slate-600 text-xs mt-0.5">"Kitna baki hai?", "Kisko cheque dena hai?" — constant ad-hoc ledger queries interrupt daily bookkeeping and GST filings.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</div>
                      <div>
                        <strong className="text-slate-900 font-semibold block text-sm">Tedious Manual PDF Generation</strong>
                        <p className="text-slate-600 text-xs mt-0.5">Printing or exporting 80 separate ledger PDFs in Tally, renaming them, and manually sending them on WhatsApp one-by-one.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</div>
                      <div>
                        <strong className="text-slate-900 font-semibold block text-sm">No Predictive Cash Runway Buffer</strong>
                        <p className="text-slate-600 text-xs mt-0.5">Struggling to foresee whether next week's vendor clearance and advance tax cheque will bounce the overdraft limit.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</div>
                      <div>
                        <strong className="text-slate-900 font-semibold block text-sm">Multi-Branch Sync Headaches</strong>
                        <p className="text-slate-600 text-xs mt-0.5">Consolidating separate Tally companies across Surat, Bhiwandi, and Ahmedabad requires painful weekend manual merges.</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-rose-200/60 flex items-center justify-between text-xs text-rose-700 font-medium">
              <span>Result: Working capital stuck in dead stock and aged debtors</span>
              <span className="font-bold">Avg DSO: 68 Days</span>
            </div>
          </div>

          {/* Card 2: With Growth Intelligence (After) */}
          <div className="rounded-2xl border-2 border-[#2E7D4E]/40 bg-gradient-to-b from-[#F2F9F4] to-white p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-[#2E7D4E]/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-32 h-32 bg-[#2E7D4E]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#2E7D4E]/20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#2E7D4E] text-white flex items-center justify-center font-bold shadow-xs">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">With Growth Intelligence</h3>
                    <span className="text-xs text-[#2E7D4E] font-semibold">Bizgenix AI Connected Architecture</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold text-[#25663F] bg-[#2E7D4E]/15 px-2.5 py-1 rounded-md border border-[#2E7D4E]/20">
                  Autopilot
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#2E7D4E] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</div>
                  <div>
                    <strong className="text-slate-900 font-semibold block text-sm">Instant Mobile &amp; Web Executive View</strong>
                    <p className="text-slate-600 text-xs mt-0.5">Live receivables, bank balances, and supplier liabilities at your fingertips anywhere in the world on iOS, Android, or desktop.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#2E7D4E] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</div>
                  <div>
                    <strong className="text-slate-900 font-semibold block text-sm">Automated Aging Notifications &amp; WhatsApp Dispatch</strong>
                    <p className="text-slate-600 text-xs mt-0.5">One-click WhatsApp statements with attached ledger PDFs and instant UPI / NEFT payment links. Recover funds 14 days faster.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#2E7D4E] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</div>
                  <div>
                    <strong className="text-slate-900 font-semibold block text-sm">Virtual CFO Decision Cards &amp; Rolling Runway</strong>
                    <p className="text-slate-600 text-xs mt-0.5">Plain-English recommendations: which vendor discounts to capture, cash surplus/deficit flags, and dead stock liquidation alerts.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#2E7D4E] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</div>
                  <div>
                    <strong className="text-slate-900 font-semibold block text-sm">Ask GI Natural Language Tally Queries</strong>
                    <p className="text-slate-600 text-xs mt-0.5">Simply ask: &quot;Who owes &gt;₹10L over 60 days?&quot; and get structured data tables in seconds without waiting for MIS reports.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#2E7D4E]/20 flex items-center justify-between text-xs text-[#25663F] font-semibold">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#2E7D4E]" />
                <span>Result: ₹80L+ Cash unlocked into bank balance</span>
              </span>
              <span className="font-extrabold text-sm">Avg DSO: 40 Days (-14 Days)</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
