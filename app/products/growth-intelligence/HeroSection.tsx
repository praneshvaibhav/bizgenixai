import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  AlertTriangle, 
  TrendingUp, 
  TrendingDown, 
  MessageSquare, 
  Layers, 
  Database,
  ArrowUpRight,
  Sparkles,
  ChevronRight,
  Send,
  Building,
  Package
} from 'lucide-react';
import { 
  mockDashboardMetrics, 
  mockDebtors, 
  mockAgingBuckets, 
  mockCashFlowWeeks, 
  mockDeadInventory 
} from './mockTallyData';

interface HeroSectionProps {
  onOpenDemo: () => void;
  onOpenWhatsApp: (debtorName?: string, amount?: string, billRef?: string, phone?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemo, onOpenWhatsApp }) => {
  const [activeTab, setActiveTab] = useState<'cashflow' | 'debtors' | 'inventory'>('debtors');

  return (
    <section id="overview" className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#F2F9F4]/70 via-white to-white">
      {/* Subtle radial emerald background glow */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-[#2E7D4E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-12 left-10 -z-10 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-6 space-y-6 lg:pr-4">
            
            {/* Native Integration Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2F9F4] border border-[#2E7D4E]/30 text-xs font-semibold text-[#25663F] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#2E7D4E] animate-pulse" />
              <span>TallyPrime &amp; Tally ERP 9 Native Integration</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15] text-balance">
              Tally Already Knows Where Your Cash Is Stuck. <br className="hidden sm:inline" />
              <span className="text-[#2E7D4E]">Growth Intelligence</span> Makes It Move.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl">
              Turn raw ledger entries into executive decisions. Track overdue receivables, forecast cash runway, and deploy automated WhatsApp follow-ups without manual MIS rebuilds.
            </p>

            {/* CTA Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenDemo}
                className="px-6 py-3.5 rounded-xl bg-[#2E7D4E] hover:bg-[#25663F] text-white font-semibold text-sm shadow-md hover:shadow-lg shadow-[#2E7D4E]/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Book a 20-Min Demo</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#ask-gi"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#25663F] font-semibold text-sm border border-[#2E7D4E]/30 hover:border-[#2E7D4E] shadow-xs transition-all flex items-center justify-center gap-2 text-center"
              >
                <span>Explore Sample Dashboard</span>
                <ChevronRight className="w-4 h-4 text-[#2E7D4E]" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D4E] shrink-0" />
                <span>Read-only connector</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700">
                <ShieldCheck className="w-4 h-4 text-[#2E7D4E] shrink-0" />
                <span>100% On-Premise Data Privacy</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700">
                <Clock className="w-4 h-4 text-[#2E7D4E] shrink-0" />
                <span>Live in 15 Minutes</span>
              </div>
            </div>

            {/* Promoter Quote Snippet */}
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-[#2E7D4E] font-bold text-xs shrink-0">
                RS
              </div>
              <div className="text-xs text-slate-600 leading-snug">
                <span className="font-semibold text-slate-900">“Recovered ₹84 Lakhs of 60+ day old dues</span> within 3 weeks of connecting our Surat textile unit's Tally.”
                <span className="block text-[11px] text-slate-500 mt-0.5">Rajesh Shah · MD, Vardhman Tex-Fab</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Mini-Dashboard Mockup */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-[#2E7D4E]/25 shadow-xl shadow-slate-200/60 overflow-hidden transition-all hover:border-[#2E7D4E]/40">
              
              {/* Dashboard Window Chrome */}
              <div className="px-5 py-3.5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-semibold tracking-tight text-slate-200 pl-2">
                    {mockDashboardMetrics.companyName}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Tally Live · 2m ago
                  </span>
                </div>
              </div>

              {/* Quick Metrics Bar (3 Cards) */}
              <div className="p-5 bg-slate-50/70 border-b border-slate-200/80 grid grid-cols-3 gap-3 text-center sm:text-left">
                
                {/* Total Receivables */}
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                    Total Receivables
                  </div>
                  <div className="text-lg sm:text-xl font-extrabold text-slate-900 tabular-nums mt-0.5">
                    ₹6.95 Cr
                  </div>
                  <div className="text-[11px] font-semibold text-rose-600 flex items-center gap-0.5 mt-0.5">
                    <AlertTriangle className="w-3 h-3 shrink-0" />
                    <span className="truncate">Overdue: ₹6.19 Cr</span>
                  </div>
                </div>

                {/* Total Payables */}
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                    Total Payables
                  </div>
                  <div className="text-lg sm:text-xl font-extrabold text-slate-900 tabular-nums mt-0.5">
                    ₹1.67 Cr
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 mt-0.5 truncate">
                    Due this week: ₹42.8 L
                  </div>
                </div>

                {/* Bank & Cash Balance */}
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                    Bank &amp; Cash
                  </div>
                  <div className="text-lg sm:text-xl font-extrabold text-[#25663F] tabular-nums mt-0.5">
                    ₹97.08 L
                  </div>
                  <div className="text-[11px] font-semibold text-emerald-700 mt-0.5 truncate">
                    Runway: 19 Days
                  </div>
                </div>

              </div>

              {/* "Decisions Requiring Attention" Alert Card */}
              <div className="m-5 mb-3 p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-amber-950 block">Decisions Requiring Attention</span>
                    <p className="text-amber-900/90 leading-tight mt-0.5">
                      3 high-risk debtor accounts crossed 60-day aging limits. Recommended action: Trigger WhatsApp reminder with statement.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => onOpenWhatsApp(
                    "Krystal Tex-Fab Pvt Ltd",
                    "₹28,40,000",
                    "INV-2026/0419, INV-2026/0488",
                    "+91 98251 44321"
                  )}
                  className="px-3.5 py-2 bg-[#2E7D4E] hover:bg-[#25663F] text-white rounded-lg font-semibold shrink-0 transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Trigger WhatsApp</span>
                </button>
              </div>

              {/* View Switcher Tabs (Cash Flow View | Debtors Aging | Inventory Health) */}
              <div className="px-5 pt-2">
                <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl text-xs font-semibold">
                  <button
                    onClick={() => setActiveTab('debtors')}
                    className={`flex-1 py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                      activeTab === 'debtors'
                        ? 'bg-white text-slate-900 shadow-xs font-bold border border-slate-200/60'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>Debtors Aging</span>
                    <span className="text-[10px] bg-rose-100 text-rose-700 px-1.5 py-0.2 rounded-full font-mono">
                      89% Overdue
                    </span>
                  </button>
                  <button
                    onClick={() => setActiveTab('cashflow')}
                    className={`flex-1 py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                      activeTab === 'cashflow'
                        ? 'bg-white text-slate-900 shadow-xs font-bold border border-slate-200/60'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>Cash Flow View</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('inventory')}
                    className={`flex-1 py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                      activeTab === 'inventory'
                        ? 'bg-white text-slate-900 shadow-xs font-bold border border-slate-200/60'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>Inventory Health</span>
                  </button>
                </div>
              </div>

              {/* Interactive Tab Content Display */}
              <div className="p-5 pt-3">
                {/* 1. Debtors Aging Tab */}
                {activeTab === 'debtors' && (
                  <div className="space-y-3">
                    {/* Aging Buckets Mini Progress */}
                    <div className="grid grid-cols-4 gap-2 text-center text-[11px]">
                      {mockAgingBuckets.map((bucket) => (
                        <div key={bucket.bucket} className="bg-slate-50 p-2 rounded-lg border border-slate-200/80">
                          <span className="text-slate-500 block truncate">{bucket.bucket}</span>
                          <span className="font-bold text-slate-900 tabular-nums">
                            {(bucket.amount / 10000000).toFixed(2)} Cr
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Debtor items list with direct action */}
                    <div className="space-y-2 mt-2">
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider flex items-center justify-between">
                        <span>High-Risk Accounts Over 60 Days</span>
                        <span className="text-slate-400">Ledger balance from Tally</span>
                      </div>
                      
                      {mockDebtors.slice(0, 3).map((deb) => (
                        <div 
                          key={deb.id}
                          className="p-2.5 rounded-xl border border-slate-200 hover:border-[#2E7D4E]/40 hover:bg-[#F2F9F4]/40 transition-all flex items-center justify-between text-xs gap-2"
                        >
                          <div className="min-w-0">
                            <div className="font-bold text-slate-900 truncate">{deb.name}</div>
                            <div className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-0.5">
                              <span>{deb.city}</span>
                              <span>·</span>
                              <span className="text-rose-600 font-semibold">{deb.overdueDays} days overdue</span>
                            </div>
                          </div>
                          
                          <div className="text-right shrink-0 flex items-center gap-2">
                            <div>
                              <div className="font-extrabold text-slate-900 tabular-nums">
                                ₹{(deb.outstanding / 100000).toFixed(2)} L
                              </div>
                              <div className="text-[10px] text-slate-400">Limit: ₹{(deb.creditLimit / 100000).toFixed(1)}L</div>
                            </div>
                            <button
                              onClick={() => onOpenWhatsApp(
                                deb.name,
                                `₹${(deb.outstanding).toLocaleString('en-IN')}`,
                                "INV-2026/0419, INV-2026/0488",
                                deb.phone
                              )}
                              title="Send WhatsApp Payment Follow-up"
                              className="p-2 rounded-lg bg-[#2E7D4E]/10 hover:bg-[#2E7D4E] text-[#2E7D4E] hover:text-white transition-colors"
                            >
                              <Send className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. Cash Flow View Tab */}
                {activeTab === 'cashflow' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-900">4-Week Rolling Cash Flow Runway</span>
                      <span className="text-[11px] text-slate-500 font-mono">Calculated from Ledger Payout Dates</span>
                    </div>

                    <div className="space-y-2">
                      {mockCashFlowWeeks.map((week, idx) => (
                        <div 
                          key={week.week}
                          className="p-2.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between text-xs"
                        >
                          <div>
                            <span className="font-bold text-slate-800 block">{week.week}</span>
                            <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                              <span className="text-emerald-700 font-medium">In: +₹{(week.expectedInflow / 100000).toFixed(1)}L</span>
                              <span>·</span>
                              <span className="text-rose-600 font-medium">Out: -₹{(week.expectedOutflow / 100000).toFixed(1)}L</span>
                            </div>
                          </div>

                          <div className="text-right">
                            <span className={`font-bold tabular-nums text-xs ${week.netCashFlow >= 0 ? 'text-[#2E7D4E]' : 'text-rose-600'}`}>
                              {week.netCashFlow >= 0 ? `+₹${(week.netCashFlow / 100000).toFixed(1)} L` : `-₹${(Math.abs(week.netCashFlow) / 100000).toFixed(1)} L`}
                            </span>
                            <span className="block text-[11px] text-slate-500 font-mono">
                              Bal: ₹{(week.closingBalance / 100000).toFixed(1)}L
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-200 text-[11px] text-emerald-900 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#2E7D4E] shrink-0" />
                      <span><strong>Virtual CFO Insight:</strong> Week 2 GST challan creates temporary dip. Accelerate ₹15L debtor recovery from Krystal to maintain safety cushion.</span>
                    </div>
                  </div>
                )}

                {/* 3. Inventory Health Tab */}
                {activeTab === 'inventory' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-900">Capital Trapped in Non-Moving Stock</span>
                      <span className="text-rose-600 font-bold">₹84.3 Lakhs Dead Capital</span>
                    </div>

                    <div className="space-y-2">
                      {mockDeadInventory.map((item) => (
                        <div 
                          key={item.id}
                          className="p-2.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between text-xs"
                        >
                          <div className="min-w-0 pr-2">
                            <div className="font-bold text-slate-900 truncate">{item.itemName}</div>
                            <div className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-0.5">
                              <span>{item.godown}</span>
                              <span>·</span>
                              <span className="text-amber-700 font-semibold">{item.daysIdle} days idle</span>
                            </div>
                          </div>

                          <div className="text-right shrink-0">
                            <div className="font-extrabold text-slate-900 tabular-nums">
                              ₹{(item.valueLocked / 100000).toFixed(2)} L
                            </div>
                            <span className="text-[10px] text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded font-medium border border-rose-200">
                              {item.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600 flex items-center justify-between">
                      <span>Total Godown Stock Valuation: <strong>₹3.42 Cr</strong></span>
                      <a href="#ask-gi" className="text-[#2E7D4E] font-semibold hover:underline flex items-center gap-1">
                        Query Inventory in AI <ChevronRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Footer strip of Mockup */}
              <div className="px-5 py-3 bg-slate-100/70 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-[#2E7D4E]" />
                  <span>Sync engine: Read-only ODBC loop</span>
                </span>
                <span className="font-semibold text-slate-700">Encrypted AES-256</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
