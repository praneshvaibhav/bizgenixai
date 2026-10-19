import React from 'react';
import { 
  BarChart3, 
  Clock, 
  TrendingDown, 
  Quote, 
  Building, 
  ShieldCheck, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export const MetricsAndTestimonials: React.FC = () => {
  const stats = [
    {
      metric: "₹120+ Cr",
      label: "Tally Receivables & Inventory Analyzed",
      subtext: "Across 240+ Indian manufacturing and trading firms",
      icon: BarChart3
    },
    {
      metric: "85%",
      label: "Reduction in MIS Preparation Time",
      subtext: "From 3 days of manual Excel pivoting down to instant mobile queries",
      icon: Clock
    },
    {
      metric: "14 Days",
      label: "Average DSO Improvement",
      subtext: "Accelerated cash collection cycle freeing working capital from aging ledgers",
      icon: TrendingDown
    }
  ];

  const industries = [
    "Textiles & Garment Weaving (Surat / Tirupur)",
    "Specialty Chemicals & Polymers (GIDC / Ankleshwar)",
    "Auto-Ancillary Fabrication (Pune / Chennai)",
    "FMCG Wholesale & Multi-State Distribution",
    "Packaging & Corrugated Box Converters",
    "Pharma Active Pharmaceutical Ingredients (APIs)"
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3 Large Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-[#2E7D4E]/20 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F2F9F4] text-[#2E7D4E] flex items-center justify-center mb-4 border border-[#2E7D4E]/20">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight tabular-nums">
                  {stat.metric}
                </div>
                <div className="text-sm font-bold text-slate-800 mt-2">
                  {stat.label}
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>

        {/* Featured Testimonial Card */}
        <div className="mt-12 bg-white rounded-2xl border border-[#2E7D4E]/25 p-8 sm:p-10 shadow-lg shadow-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-48 h-48 bg-[#2E7D4E]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2E7D4E]">
                <Quote className="w-4 h-4 text-[#2E7D4E]" />
                <span>Textile Manufacturer Case Study</span>
              </div>
              
              <blockquote className="text-lg sm:text-xl font-medium text-slate-900 leading-relaxed italic">
                “Before Bizgenix, we waited until month-end for our accountant to give us an outdated debtor list. Within 3 weeks of connecting Growth Intelligence to our Tally, we recovered <span className="text-[#25663F] font-bold not-italic">₹84 Lakhs of 60+ day old dues</span> via automated WhatsApp reminders. Our cash balance actually went up by 35% without taking an extra rupee from our bank overdraft.”
              </blockquote>

              <div className="pt-2 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#2E7D4E] text-white flex items-center justify-center font-bold text-sm">
                  RS
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Rajesh Shah</div>
                  <div className="text-xs text-slate-500">Managing Director · Vardhman Tex-Fab Industries (Surat, Gujarat)</div>
                </div>
              </div>
            </div>

            {/* Verifiable Impact Badge Box */}
            <div className="lg:col-span-4 bg-[#F2F9F4] p-5 rounded-xl border border-[#2E7D4E]/30 space-y-3 text-xs">
              <div className="font-bold text-slate-900 text-xs uppercase tracking-wider text-[#25663F]">
                Verified 30-Day Transformation:
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-[#2E7D4E]/15">
                <span className="text-slate-600">Old Debtor Dues Recovered:</span>
                <span className="font-bold text-slate-900 tabular-nums">₹84,20,000</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-[#2E7D4E]/15">
                <span className="text-slate-600">Receivables DSO Reduction:</span>
                <span className="font-bold text-[#2E7D4E] tabular-nums">-16 Days</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-[#2E7D4E]/15">
                <span className="text-slate-600">Bank Overdraft Interest Saved:</span>
                <span className="font-bold text-slate-900 tabular-nums">₹1.15 Lakhs / Mo</span>
              </div>
              <div className="text-[11px] text-slate-500 pt-1 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2E7D4E]" />
                <span>Audited via Tally Bank Reconciliation Voucher</span>
              </div>
            </div>

          </div>
        </div>

        {/* Industry Trust Strip */}
        <div className="mt-12 text-center">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
            Trusted by Leaders Across High-Volume Indian Sectors
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {industries.map((ind, idx) => (
              <span
                key={idx}
                className="text-xs font-medium text-slate-700 bg-white px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-2xs"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
