import React, { useState } from 'react';
import { Download, ShieldCheck, MonitorSmartphone, CheckCircle2, ArrowRight, Lock, Laptop, Cloud, Database } from 'lucide-react';

export const SetupFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: "Install 5MB Desktop Connector",
      time: "Takes ~5 Mins",
      summary: "Lightweight Windows executable that runs in your system tray alongside Tally.",
      details: [
        "Zero server reconfigurations or complex static IP setups required.",
        "Detects running TallyPrime or Tally.ERP 9 on port 9000 automatically.",
        "Enter your company sync token generated during signup.",
        "Zero memory bloat (<45MB RAM footprint on your office PC)."
      ],
      icon: Download
    },
    {
      step: 2,
      title: "Encrypted Read-Only Sync",
      time: "Continuous & Automated",
      summary: "Strict zero write-back architecture. Impossible to corrupt or alter vouchers.",
      details: [
        "Connects via official Tally XML/ODBC read-only data channels.",
        "Outbound-only 256-bit TLS connection (no open incoming ports in firewall).",
        "Pulls Master Ledgers, Closing Balances, Outstandings, and Stock Summaries.",
        "Continuous 15-minute incremental sync keeps numbers fresh."
      ],
      icon: ShieldCheck
    },
    {
      step: 3,
      title: "Instant Web & Mobile Dashboard",
      time: "Immediate Access",
      summary: "Promoters & finance heads get real-time executive visibility on any phone or laptop.",
      details: [
        "Login from any mobile browser or desktop without remote desktop/AnyDesk.",
        "Role-Based Access Control hides gross profit margins from field sales teams.",
        "Automated aging alerts and WhatsApp reminder triggers ready out-of-the-box.",
        "Virtual CFO weekly cash runway intelligence briefed every Monday."
      ],
      icon: MonitorSmartphone
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold text-[#2E7D4E] uppercase tracking-wider mb-2">
            Frictionless Implementation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Live in 15 Minutes. <br />
            Zero Changes to Your Accounting Workflow.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
            Your accountant continues using Tally exactly as they do today. Bizgenix operates quietly in the background as your executive intelligence layer.
          </p>
        </div>

        {/* 3 Step Interactive Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {steps.map((item) => {
            const Icon = item.icon;
            const isSelected = activeStep === item.step;

            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(item.step)}
                className={`cursor-pointer rounded-2xl border transition-all p-6 sm:p-7 flex flex-col justify-between relative bg-white ${
                  isSelected
                    ? 'border-[#2E7D4E] shadow-xl shadow-[#2E7D4E]/10 ring-1 ring-[#2E7D4E]/30 bg-[#F2F9F4]/30'
                    : 'border-slate-200 hover:border-[#2E7D4E]/40 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Step Number & Time Pill */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                      isSelected ? 'bg-[#2E7D4E] text-white shadow-sm' : 'bg-slate-100 text-slate-700'
                    }`}>
                      0{item.step}
                    </div>
                    <span className="text-[11px] font-semibold text-[#25663F] bg-[#F2F9F4] px-2.5 py-1 rounded-full border border-[#2E7D4E]/20">
                      {item.time}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Bullet Details */}
                  <div className="mt-5 space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-700">
                    {item.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D4E] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 flex items-center justify-between text-xs font-semibold text-[#2E7D4E]">
                  <span>Step 0{item.step} of 03</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Architecture Diagram Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs">
          
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-800 shrink-0 shadow-xs">
              <Laptop className="w-5 h-5 text-slate-700" />
            </div>
            <div>
              <div className="font-bold text-slate-900">Your Local Tally PC</div>
              <div className="text-[11px] text-slate-500">TallyPrime 4.x / ERP 9 (Port 9000)</div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[#2E7D4E] font-semibold">
            <span className="h-0.5 w-8 bg-[#2E7D4E] hidden sm:block" />
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-[#2E7D4E]/30 text-[11px]">
              <Lock className="w-3 h-3 text-[#2E7D4E]" />
              <span>5MB Read-Only TLS Connector</span>
            </div>
            <span className="h-0.5 w-8 bg-[#2E7D4E] hidden sm:block" />
          </div>

          <div className="flex items-center gap-3 w-full lg:w-auto">
            <div className="w-10 h-10 rounded-xl bg-[#2E7D4E] flex items-center justify-center text-white shrink-0 shadow-sm">
              <MonitorSmartphone className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-900">Bizgenix Executive Cloud</div>
              <div className="text-[11px] text-slate-500">Web Dashboard + Mobile + WhatsApp Autopilot</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
