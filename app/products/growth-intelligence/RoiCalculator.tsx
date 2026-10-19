import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  Check, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Coins, 
  HelpCircle,
  Zap
} from 'lucide-react';
import { mockPricingPlans } from './mockTallyData';

interface RoiCalculatorProps {
  onOpenDemo: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenDemo }) => {
  const [turnoverCrores, setTurnoverCrores] = useState<number>(30); // ₹30 Cr default
  const [currentDso, setCurrentDso] = useState<number>(65); // 65 days
  const [interestRate, setInterestRate] = useState<number>(10.5); // 10.5%
  const [isAnnual, setIsAnnual] = useState<boolean>(true);

  // Calculations
  const dailyTurnover = (turnoverCrores * 10000000) / 365;
  const currentReceivables = dailyTurnover * currentDso;
  
  // Assuming a conservative 14-day DSO reduction with Bizgenix
  const dsoReduction = Math.min(14, Math.max(7, Math.round(currentDso * 0.22)));
  const freedWorkingCapital = dailyTurnover * dsoReduction;
  const annualInterestSaved = freedWorkingCapital * (interestRate / 100);

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-[#F2F9F4]/40 via-white to-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold text-[#2E7D4E] uppercase tracking-wider mb-2">
            Measurable Cash Return on Investment
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Calculate How Much Bank Interest &amp; Cash <br className="hidden sm:inline" />
            Bizgenix Unlocks From Your Tally
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
            Reducing receivables by just 14 days frees up substantial liquidity and slashes your monthly Cash Credit (CC) / overdraft interest expense.
          </p>
        </div>

        {/* Interactive ROI Calculator Card */}
        <div className="bg-white rounded-2xl border-2 border-[#2E7D4E]/30 p-6 sm:p-9 shadow-xl shadow-[#2E7D4E]/10 mb-20 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sliders Input Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Slider 1: Annual Turnover */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <span>1. Annual Turnover (Revenue)</span>
                  </label>
                  <span className="text-base font-extrabold text-[#25663F] tabular-nums">
                    ₹{turnoverCrores} Crores
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="150"
                  step="5"
                  value={turnoverCrores}
                  onChange={(e) => setTurnoverCrores(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#2E7D4E]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>₹5 Cr</span>
                  <span>₹75 Cr</span>
                  <span>₹150 Cr+</span>
                </div>
              </div>

              {/* Slider 2: Current DSO */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <span>2. Current Debtors Aging / DSO</span>
                  </label>
                  <span className="text-base font-extrabold text-slate-900 tabular-nums">
                    {currentDso} Days
                  </span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="120"
                  step="5"
                  value={currentDso}
                  onChange={(e) => setCurrentDso(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#2E7D4E]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>30 Days (Fast)</span>
                  <span>65 Days (Indian Mfg Avg)</span>
                  <span>120 Days (Stressed)</span>
                </div>
              </div>

              {/* Slider 3: Bank CC / OD Interest Rate */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <span>3. Bank CC / Overdraft Interest Rate</span>
                  </label>
                  <span className="text-base font-extrabold text-slate-900 tabular-nums">
                    {interestRate}% p.a.
                  </span>
                </div>
                <input
                  type="range"
                  min="8.0"
                  max="14.0"
                  step="0.5"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#2E7D4E]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>8.5% (Prime)</span>
                  <span>10.5% (SME Average)</span>
                  <span>14.0% (NBFC)</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center gap-2">
                <Coins className="w-4 h-4 text-[#2E7D4E] shrink-0" />
                <span>Calculations benchmarked against audited Indian manufacturing receivables cycles.</span>
              </div>
            </div>

            {/* Projected Result Callout Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
                  Estimated 90-Day Financial Impact
                </span>

                <div className="mt-4 pt-4 border-t border-slate-800 space-y-4">
                  <div>
                    <span className="text-xs text-slate-400 block">Working Capital Freed Back to Bank:</span>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums mt-0.5">
                      ₹{(freedWorkingCapital / 100000).toFixed(2)} Lakhs
                    </div>
                    <span className="text-[11px] text-emerald-400">
                      via {dsoReduction}-day recovery acceleration
                    </span>
                  </div>

                  <div className="pt-3 border-t border-slate-800">
                    <span className="text-xs text-slate-400 block">Annual Bank Interest Slashed:</span>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#2E7D4E] tabular-nums mt-0.5">
                      ₹{(annualInterestSaved / 100000).toFixed(2)} Lakhs / Yr
                    </div>
                    <span className="text-[11px] text-slate-400">
                      Direct cash straight to net profit bottom line
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenDemo}
                className="w-full py-3 bg-[#2E7D4E] hover:bg-[#25663F] text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Unlock This Capital on Your Tally</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Pricing Tiers Section */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
            Transparent, Predictable Investment
          </h3>
          <p className="text-slate-600 text-sm mt-2">
            No per-invoice fees or surprise add-ons. 100% money-back guarantee if you don't recover at least 5x the subscription value in 60 days.
          </p>

          {/* Billing Frequency Toggle */}
          <div className="mt-6 inline-flex items-center gap-3 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                !isAnnual ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'
              }`}
            >
              Billed Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                isAnnual ? 'bg-[#2E7D4E] text-white shadow-sm' : 'text-slate-600'
              }`}
            >
              <span>Annual (Save 17%)</span>
              <span className="text-[10px] bg-white/20 px-1.5 py-0.2 rounded-full font-mono">2 Months Free</span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {mockPricingPlans.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`rounded-2xl bg-white p-7 sm:p-8 flex flex-col justify-between border transition-all ${
                  plan.recommended
                    ? 'border-2 border-[#2E7D4E] shadow-xl shadow-[#2E7D4E]/15 relative ring-1 ring-[#2E7D4E]/30'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between min-h-[26px]">
                    <span className="font-bold text-lg text-slate-900">{plan.name}</span>
                    {plan.badge && (
                      <span className="text-[11px] font-bold text-white bg-[#2E7D4E] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-2xs">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tabular-nums">
                        ₹{price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">/ month</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      {isAnnual ? 'Billed annually' : 'Billed month-to-month'}
                    </div>

                    <div className="mt-3 inline-block text-[11px] font-semibold text-[#25663F] bg-[#F2F9F4] px-2.5 py-1 rounded-md border border-[#2E7D4E]/20">
                      {plan.turnoverLimit} · {plan.tallyCompanies}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mt-6 space-y-3 text-xs text-slate-700">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#2E7D4E] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    onClick={onOpenDemo}
                    className={`w-full py-3 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 ${
                      plan.recommended
                        ? 'bg-[#2E7D4E] hover:bg-[#25663F] text-white shadow-[#2E7D4E]/20'
                        : 'bg-white hover:bg-slate-50 text-[#25663F] border border-[#2E7D4E]/40'
                    }`}
                  >
                    <span>Get Started with {plan.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
