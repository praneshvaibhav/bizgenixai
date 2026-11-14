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
      metric: "Review",
      label: "Receivables & Inventory",
      subtext: "Discuss the records needed for your operating view",
      icon: BarChart3
    },
    {
      metric: "Prepare",
      label: "Management Reports",
      subtext: "Compare report preparation and review effort against your baseline",
      icon: Clock
    },
    {
      metric: "Track",
      label: "Collection Follow-up",
      subtext: "Measure changes in receivables using consistent definitions",
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
                <span>Suggested Receivables Review</span>
              </div>
              
              <p className="text-lg sm:text-xl font-medium text-slate-900 leading-relaxed italic">
                Start with an agreed receivables report. Identify the accounts that need attention, assign follow-up responsibility and record actual receipts. Compare the results with your baseline before attributing an improvement to a new workflow.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#2E7D4E] text-white flex items-center justify-center font-bold text-sm">
                  GI
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Growth Intelligence</div>
                  <div className="text-xs text-slate-500">A proposed workflow discussion, not a client testimonial</div>
                </div>
              </div>
            </div>

            {/* Verifiable Impact Badge Box */}
            <div className="lg:col-span-4 bg-[#F2F9F4] p-5 rounded-xl border border-[#2E7D4E]/30 space-y-3 text-xs">
              <div className="font-bold text-slate-900 text-xs uppercase tracking-wider text-[#25663F]">
                What to Measure:
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-[#2E7D4E]/15">
                <span className="text-slate-600">Collection progress:</span>
                <span className="font-bold text-slate-900 tabular-nums">Actual receipts</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-[#2E7D4E]/15">
                <span className="text-slate-600">Collection period:</span>
                <span className="font-bold text-[#2E7D4E] tabular-nums">Baseline vs current</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-[#2E7D4E]/15">
                <span className="text-slate-600">Borrowing cost:</span>
                <span className="font-bold text-slate-900 tabular-nums">Actual statements</span>
              </div>
              <div className="text-[11px] text-slate-500 pt-1 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2E7D4E]" />
                <span>Validate against your accounting records</span>
              </div>
            </div>

          </div>
        </div>

        {/* Industry Trust Strip */}
        <div className="mt-12 text-center">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
            Example Sectors for a Workflow Discussion
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
