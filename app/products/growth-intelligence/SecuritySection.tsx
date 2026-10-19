import React from 'react';
import { Lock, ShieldAlert, KeyRound, Server, CheckCircle2, ShieldCheck, FileCheck } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const securityPillars = [
    {
      title: "256-Bit TLS Bank Encryption",
      subtitle: "In-Transit & At-Rest Security",
      description: "Every byte transferred between your local Tally PC and the Bizgenix executive cloud uses banking-grade SHA-256 TLS 1.3 encryption. Impossible to intercept on local office Wi-Fi.",
      icon: Lock
    },
    {
      title: "Strict Read-Only Architecture",
      subtitle: "Zero Ledger Write-Back",
      description: "Our connector is hardcoded to execute read-only XML and ODBC export queries. It possesses no write, modify, or delete commands. Your Tally books remain 100% sacred and uncorrupted.",
      icon: ShieldAlert
    },
    {
      title: "Role-Based Access Control (RBAC)",
      subtitle: "Protect Margins & Sensitive Ledgers",
      description: "Give field sales agents access to their clients' payment outstandings while completely hiding company profit margins, supplier purchase rates, and bank account balances.",
      icon: KeyRound
    },
    {
      title: "Local Indian Data Governance",
      subtitle: "On-Premise Privacy Compliance",
      description: "Data is processed strictly in accordance with Indian Digital Personal Data Protection (DPDP) standards. Your financial vouchers are never shared, sold, or used to train third-party public models.",
      icon: Server
    }
  ];

  return (
    <section id="security" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2F9F4] border border-[#2E7D4E]/30 text-[#25663F] text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-[#2E7D4E]" />
            <span>Zero-Compromise Security Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Your Accounting Data Is Your Most Sacred Asset. <br />
            We Keep It Untouchable.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
            Designed for Indian business promoters who would never risk unauthorized access, ledger alteration, or staff leaking confidential purchase margins.
          </p>
        </div>

        {/* 4-Column Badge Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200 hover:border-[#2E7D4E]/40 hover:bg-[#F2F9F4]/30 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white text-[#2E7D4E] flex items-center justify-center border border-slate-200/80 shadow-2xs mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <span className="text-[11px] font-semibold text-[#2E7D4E] uppercase tracking-wider block">
                    {item.subtitle}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-1">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D4E]" />
                  <span>Enterprise Hardened</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security Summary Guarantee Bar */}
        <div className="mt-10 p-5 rounded-xl bg-[#F2F9F4] border border-[#2E7D4E]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-700">
          <div className="flex items-center gap-3">
            <FileCheck className="w-5 h-5 text-[#2E7D4E] shrink-0" />
            <span>
              <strong>Non-Disclosure &amp; Data Isolation:</strong> Every customer instance runs in an isolated tenant environment with automated token rotation and IP-whitelisting options.
            </span>
          </div>
          <span className="text-slate-500 font-mono text-[11px] shrink-0">
            Audit Standard: ISO 27001 &amp; SOC2 Type II Aligned
          </span>
        </div>

      </div>
    </section>
  );
};
