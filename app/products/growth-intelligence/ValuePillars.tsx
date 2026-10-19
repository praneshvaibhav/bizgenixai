import React, { useState } from 'react';
import { 
  Compass, 
  Clock, 
  Package, 
  Network, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Percent, 
  Building2, 
  ChevronDown, 
  ChevronUp, 
  MessageSquare,
  TrendingUp,
  FileText
} from 'lucide-react';

interface ValuePillarsProps {
  onOpenWhatsApp: (debtorName?: string, amount?: string, billRef?: string, phone?: string) => void;
}

export const ValuePillars: React.FC<ValuePillarsProps> = ({ onOpenWhatsApp }) => {
  const [expandedCard, setExpandedCard] = useState<number | null>(0); // First expanded by default

  const pillars = [
    {
      id: 0,
      title: "Virtual CFO Guidance",
      kicker: "Strategic Capital Protection",
      icon: Compass,
      summary: "Plain-English recommendations on working capital, cash runway alerts, and supplier early-payment cash discounts.",
      description: "Bizgenix continuously scans your Tally vouchers to identify high-impact financial moves. It calculates whether taking a 2% 10-day cash discount from your chemical supplier beats keeping cash in a 7% bank deposit, and flags dangerous cash troughs 3 weeks ahead.",
      scenario: {
        title: "Live Virtual CFO Recommendation Detected:",
        details: [
          "Supplier 'Reliance Petrochem' offers 2% discount if paid within 7 days (by Oct 21).",
          "Bill Value: ₹24,50,000 → Net Discount Captured: ₹49,000.",
          "Annualized ROI on cash utilized: 36.5% vs Bank FD 7.2%.",
          "Recommendation: Approve immediate clearance — cash runway remains safe at ₹72.5L."
        ],
        actionText: "Approve Supplier Early Payment Voucher"
      }
    },
    {
      id: 1,
      title: "Receivables & Automated Collections",
      kicker: "Cash Acceleration Engine",
      icon: Clock,
      summary: "Granular aging buckets (0-30, 31-60, 60-90+ days) with automated WhatsApp statement dispatch and payment tracking.",
      description: "Stop relying on memory or Excel spreadsheets to chase payments. Categorize outstandings by invoice date or due date, assign account managers, and send verified ledger extracts directly to customer WhatsApp with embedded UPI/bank details.",
      scenario: {
        title: "Automated Aging Rule Triggered:",
        details: [
          "Rule: When overdue exceeds 45 days AND amount > ₹5 Lakhs.",
          "Debtor: Maruti Polyblend Processors (₹19,80,000 overdue by 64 days).",
          "Previous touchpoint: Automated reminder sent on Day 30 (Opened & Viewed).",
          "Next Action: Trigger Formal Ledger Statement with UPI Payment Link."
        ],
        actionText: "Simulate WhatsApp Statement Dispatch",
        isWhatsAppAction: true
      }
    },
    {
      id: 2,
      title: "Dead Stock & Inventory Intelligence",
      kicker: "Warehouse Working Capital",
      icon: Package,
      summary: "Identifies non-moving and slow-moving stock locking up capital in godowns across multiple warehouses.",
      description: "Indian manufacturing and trading companies often have 15-25% of their working capital tied up in slow-moving raw materials or finished goods. Bizgenix flags items with zero movement over 60, 90, or 120 days, calculates daily carrying costs, and suggests liquidation targets.",
      scenario: {
        title: "Non-Moving Inventory Audit (Surat Godown #4):",
        details: [
          "Batch: Poly Ester Microfilament 75D/72F Raw White (4,200 Kg).",
          "Idle Duration: 134 Days with zero sales orders.",
          "Locked Capital: ₹38,20,000 | Monthly Holding Cost: ₹41,800.",
          "Suggested Action: Liquidate at 3.5% discount to unlock ₹36.8L cash into bank."
        ],
        actionText: "Generate Inventory Liquidation Memo"
      }
    },
    {
      id: 3,
      title: "Multi-Branch & Group Consolidation",
      kicker: "Conglomerate View",
      icon: Network,
      summary: "One unified login for multiple Tally companies, sister concerns, branches, and inter-company ledger matching.",
      description: "If you operate multiple GSTINs or sister entities (e.g., manufacturing in Gujarat, trading in Mumbai, logistics in Delhi), Bizgenix merges them into a single consolidated financial cockpit while eliminating duplicate inter-company balances.",
      scenario: {
        title: "Multi-Entity Group Health Check:",
        details: [
          "Connected Entities: Apex Synthetics (Surat) + Apex Polymer Trading (Mumbai).",
          "Combined Receivables: ₹11.42 Cr | Inter-company Contra Cleared: ₹1.85 Cr.",
          "Net Group Liquidity: ₹1.64 Cr across 4 bank accounts.",
          "Feature: Single sign-on with role-based restriction per company entity."
        ],
        actionText: "Switch Group Entity View"
      }
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white via-[#F2F9F4]/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold text-[#2E7D4E] uppercase tracking-wider mb-2">
            Engineered for Fast-Growing Indian Enterprises
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Four Core Pillars That Turn Accounting <br className="hidden sm:inline" />
            Into Cash Flow Dominance
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
            Built from the ground up for Indian promoters, MDs, and finance heads who demand real-time visibility without replacing their beloved Tally.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isExpanded = expandedCard === pillar.id;

            return (
              <div
                key={pillar.id}
                className={`rounded-2xl border transition-all duration-200 bg-white p-6 sm:p-7 flex flex-col justify-between ${
                  isExpanded 
                    ? 'border-[#2E7D4E] shadow-xl shadow-[#2E7D4E]/10 ring-1 ring-[#2E7D4E]/20' 
                    : 'border-[#2E7D4E]/20 hover:border-[#2E7D4E]/50 hover:shadow-lg'
                }`}
              >
                <div>
                  {/* Top Icon & Kicker */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#F2F9F4] text-[#2E7D4E] flex items-center justify-center border border-[#2E7D4E]/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#2E7D4E] uppercase tracking-wider bg-[#F2F9F4] px-2.5 py-1 rounded-full border border-[#2E7D4E]/20">
                      {pillar.kicker}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-xl font-bold text-[#0F172A] tracking-tight mt-5">
                    {pillar.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-800 mt-2">
                    {pillar.summary}
                  </p>
                  <p className="text-xs text-[#475569] leading-relaxed mt-2.5">
                    {pillar.description}
                  </p>
                </div>

                {/* Interactive Scenario Expander */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setExpandedCard(isExpanded ? null : pillar.id)}
                    className="w-full flex items-center justify-between text-xs font-semibold text-[#25663F] hover:text-[#2E7D4E] transition-colors py-1 group"
                  >
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#2E7D4E]" />
                      <span>{isExpanded ? "Hide Real Tally Scenario" : "See Live Ledger Scenario"}</span>
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 transition-transform" />
                    ) : (
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                    )}
                  </button>

                  {/* Scenario Drawer Content */}
                  {isExpanded && (
                    <div className="mt-3.5 p-4 rounded-xl bg-[#F2F9F4] border border-[#2E7D4E]/20 text-xs space-y-2.5 animate-in fade-in duration-200">
                      <div className="font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D4E]" />
                        <span>{pillar.scenario.title}</span>
                      </div>
                      
                      <ul className="space-y-1.5 text-slate-700">
                        {pillar.scenario.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#2E7D4E] font-bold">›</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => {
                            if (pillar.scenario.isWhatsAppAction) {
                              onOpenWhatsApp(
                                "Maruti Polyblend Processors",
                                "₹19,80,000",
                                "INV-2026/0512, INV-2026/0544",
                                "+91 98190 23112"
                              );
                            } else {
                              alert(`Simulated Action: ${pillar.scenario.actionText}\nVerified ledger export generated.`);
                            }
                          }}
                          className="px-3 py-1.5 bg-[#2E7D4E] hover:bg-[#25663F] text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-xs"
                        >
                          {pillar.scenario.isWhatsAppAction ? (
                            <MessageSquare className="w-3.5 h-3.5" />
                          ) : (
                            <ArrowRight className="w-3.5 h-3.5" />
                          )}
                          <span>{pillar.scenario.actionText}</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
