import React, { useState } from 'react';
import { Layers, Database, ChevronDown, Menu, X, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSyncPopover, setShowSyncPopover] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-[#2E7D4E] flex items-center justify-center text-white shadow-md shadow-[#2E7D4E]/25 transition-transform group-hover:scale-105">
              <Layers className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-lg text-slate-900 tracking-tight">Bizgenix</span>
                <span className="text-xs font-semibold text-[#2E7D4E] tracking-wider uppercase bg-[#F2F9F4] px-1.5 py-0.5 rounded border border-[#2E7D4E]/20">AI</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 tracking-tight -mt-0.5">Growth Intelligence</span>
            </div>
          </a>
        </div>

        {/* Zone 2: Navigation Links (single-line, clean hover underlines) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#overview" className="hover:text-[#25663F] transition-colors whitespace-nowrap">
            Overview
          </a>
          <a href="#features" className="hover:text-[#25663F] transition-colors whitespace-nowrap">
            Features
          </a>
          <a href="#ask-gi" className="hover:text-[#25663F] text-slate-900 font-semibold flex items-center gap-1.5 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-[#2E7D4E]" />
            Ask GI (AI Demo)
          </a>
          <a href="#how-it-works" className="hover:text-[#25663F] transition-colors whitespace-nowrap">
            How It Works
          </a>
          <a href="#security" className="hover:text-[#25663F] transition-colors whitespace-nowrap">
            Security
          </a>
          <a href="#pricing" className="hover:text-[#25663F] transition-colors whitespace-nowrap">
            Pricing & ROI
          </a>
        </nav>

        {/* Zone 3: Actions & Tally Sync Status */}
        <div className="hidden sm:flex items-center gap-4 shrink-0 relative">
          {/* Tally Sync Status Trigger */}
          <div className="relative">
            <button
              onClick={() => setShowSyncPopover(!showSyncPopover)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-[#F2F9F4] text-[#25663F] border border-[#2E7D4E]/25 hover:bg-[#e4f3e8] transition-colors"
              title="Click for Tally Connection Details"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2E7D4E]"></span>
              </span>
              <span className="whitespace-nowrap font-semibold">Tally Sync: Live</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#2E7D4E]" />
            </button>

            {/* Sync Status Popover */}
            {showSyncPopover && (
              <div 
                className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 text-xs z-50 animate-in fade-in slide-in-from-top-2"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="font-bold text-slate-900">Connected Company</span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium border border-emerald-200">2-Min Sync</span>
                </div>
                <div className="mt-2.5 space-y-1.5 text-slate-600">
                  <div className="font-medium text-slate-800">Apex Synthetics & Polymers Ltd</div>
                  <div className="text-[11px] text-slate-500">TallyPrime 4.1 Gold · Single Server ODBC</div>
                  <div className="text-[11px] text-slate-500">Ledger Count: 1,842 accounts synced</div>
                  <div className="flex items-center gap-1.5 text-[#2E7D4E] pt-1 font-semibold text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Read-Only Connector Verified (Port 9000)</span>
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 text-right">
                  <button
                    onClick={() => setShowSyncPopover(false)}
                    className="text-[11px] text-[#2E7D4E] hover:underline font-medium"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Book Demo Primary CTA */}
          <button
            onClick={onOpenDemo}
            className="px-5 py-2.5 rounded-xl bg-[#2E7D4E] hover:bg-[#25663F] text-white text-xs font-semibold tracking-wide shadow-sm hover:shadow-md transition-all flex items-center gap-1.5"
          >
            <span>Book a Demo</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenDemo}
            className="px-3.5 py-1.5 rounded-lg bg-[#2E7D4E] text-white text-xs font-semibold sm:hidden"
          >
            Demo
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between p-2.5 bg-[#F2F9F4] rounded-xl border border-[#2E7D4E]/20 text-xs">
            <span className="font-medium text-[#25663F] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2E7D4E] inline-block animate-ping" />
              Tally Sync Status: Live (Demo)
            </span>
            <span className="text-[10px] text-slate-500 font-mono">TallyPrime 4.1</span>
          </div>
          <div className="flex flex-col space-y-2 text-sm font-medium text-slate-700 pt-1">
            <a 
              href="#overview" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#2E7D4E]"
            >
              Overview
            </a>
            <a 
              href="#features" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#2E7D4E]"
            >
              Features
            </a>
            <a 
              href="#ask-gi" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#2E7D4E] font-semibold text-[#2E7D4E]"
            >
              Ask GI (AI Demo)
            </a>
            <a 
              href="#how-it-works" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#2E7D4E]"
            >
              How It Works
            </a>
            <a 
              href="#security" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#2E7D4E]"
            >
              Security
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#2E7D4E]"
            >
              Pricing & ROI
            </a>
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3 rounded-xl bg-[#2E7D4E] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow"
            >
              <span>Book a 20-Min Demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
