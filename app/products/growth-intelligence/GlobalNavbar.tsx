import React, { useState } from 'react';
import { 
  Layers, 
  ChevronDown, 
  Compass, 
  Kanban, 
  PhoneCall, 
  MessageSquare, 
  ArrowUpRight, 
  Menu, 
  X, 
  CheckCircle2, 
  Sparkles,
  Bot,
  Factory,
  Scissors,
  Building,
  Stethoscope,
  GraduationCap,
  Briefcase,
  ShoppingCart,
  Hotel
} from 'lucide-react';
import { mockIndustries } from '../data/mockIndustryData';

export type ActivePage = 'gi' | 'crm' | 'voice' | 'chat' | 'products' | 'industry';

interface GlobalNavbarProps {
  currentPage: ActivePage;
  currentIndustryId?: string;
  onNavigate: (page: ActivePage, industryId?: string) => void;
  onOpenDemo: () => void;
}

export const GlobalNavbar: React.FC<GlobalNavbarProps> = ({
  currentPage,
  currentIndustryId = 'manufacturing',
  onNavigate,
  onOpenDemo
}) => {
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [syncPopoverOpen, setSyncPopoverOpen] = useState(false);

  const getPageLabel = () => {
    switch (currentPage) {
      case 'gi': return 'Growth Intelligence (gi.bizgenix.ai)';
      case 'crm': return 'Bizgenix CRM (crm.bizgenix.ai)';
      case 'voice': return 'Voice AI (voice.bizgenix.ai)';
      case 'chat': return 'Chat AI (chat.bizgenix.ai)';
      case 'products': return 'All Products (bizgenix.ai/products)';
      case 'industry': {
        const found = mockIndustries.find(i => i.id === currentIndustryId);
        return `Industry: ${found?.shortName || 'Manufacturing'}`;
      }
    }
  };

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'manufacturing': return Factory;
      case 'textile': return Scissors;
      case 'real-estate': return Building;
      case 'healthcare': return Stethoscope;
      case 'education': return GraduationCap;
      case 'finance': return Briefcase;
      case 'retail': return ShoppingCart;
      case 'hospitality': return Hotel;
      default: return Factory;
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        
        {/* Brand Zone */}
        <div className="flex items-center gap-4 shrink-0">
          <button 
            onClick={() => onNavigate('products')}
            className="flex items-center gap-2.5 text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#2E7D4E] flex items-center justify-center text-white shadow-md shadow-[#2E7D4E]/25 transition-transform group-hover:scale-105">
              <Layers className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg text-slate-900 tracking-tight">Bizgenix</span>
                <span className="text-xs font-semibold text-[#2E7D4E] tracking-wider uppercase bg-[#F2F9F4] px-1.5 py-0.5 rounded border border-[#2E7D4E]/20">
                  AI
                </span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 tracking-tight -mt-0.5">
                Enterprise Business OS
              </span>
            </div>
          </button>

          {/* Current Page Tag */}
          <div className="hidden xl:flex items-center pl-3 border-l border-slate-200">
            <span className="text-xs font-semibold text-[#25663F] bg-[#F2F9F4] px-2.5 py-1 rounded-full border border-[#2E7D4E]/20 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D4E]" />
              <span>{getPageLabel()}</span>
            </span>
          </div>
        </div>

        {/* Navigation Zone */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
          
          {/* Products Dropdown Menu */}
          <div className="relative">
            <button
              onClick={() => {
                setProductsDropdownOpen(!productsDropdownOpen);
                setIndustriesDropdownOpen(false);
              }}
              onMouseEnter={() => {
                setProductsDropdownOpen(true);
                setIndustriesDropdownOpen(false);
              }}
              className="flex items-center gap-1 text-slate-900 font-bold hover:text-[#25663F] transition-colors py-2 cursor-pointer"
            >
              <span>Products</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Panel with All 4 Products */}
            {productsDropdownOpen && (
              <div
                onMouseLeave={() => setProductsDropdownOpen(false)}
                className="absolute left-0 mt-1 w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2.5 z-50 animate-in fade-in slide-in-from-top-2"
              >
                <div className="space-y-1">
                  
                  {/* Growth Intelligence */}
                  <button
                    onClick={() => {
                      onNavigate('gi');
                      setProductsDropdownOpen(false);
                    }}
                    className={`w-full p-2.5 rounded-xl text-left transition-all flex items-start gap-3 cursor-pointer ${
                      currentPage === 'gi' ? 'bg-[#F2F9F4] border border-[#2E7D4E]/30' : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#2E7D4E]/10 text-[#2E7D4E] flex items-center justify-center shrink-0 mt-0.5">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 text-xs">Growth Intelligence</span>
                        <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded font-mono">gi.bizgenix.ai</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                        Tally ERP intelligence, aging buckets, cash runway &amp; Virtual CFO.
                      </p>
                    </div>
                  </button>

                  {/* Bizgenix CRM */}
                  <button
                    onClick={() => {
                      onNavigate('crm');
                      setProductsDropdownOpen(false);
                    }}
                    className={`w-full p-2.5 rounded-xl text-left transition-all flex items-start gap-3 cursor-pointer ${
                      currentPage === 'crm' ? 'bg-[#F2F9F4] border border-[#2E7D4E]/30' : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Kanban className="w-4 h-4 text-[#2E7D4E]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 text-xs">Bizgenix CRM</span>
                        <span className="text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.2 rounded font-mono">crm.bizgenix.ai</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                        Lead capture, shared WhatsApp inbox &amp; Tally Sales Order sync.
                      </p>
                    </div>
                  </button>

                  {/* Bizgenix Voice AI */}
                  <button
                    onClick={() => {
                      onNavigate('voice');
                      setProductsDropdownOpen(false);
                    }}
                    className={`w-full p-2.5 rounded-xl text-left transition-all flex items-start gap-3 cursor-pointer ${
                      currentPage === 'voice' ? 'bg-[#F2F9F4] border border-[#2E7D4E]/30' : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <PhoneCall className="w-4 h-4 text-[#2E7D4E]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 text-xs">Bizgenix Voice AI</span>
                        <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded font-mono">voice.bizgenix.ai</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                        Sub-2s Indic voice receptionist &amp; automated receivables chaser.
                      </p>
                    </div>
                  </button>

                  {/* Bizgenix Chat AI */}
                  <button
                    onClick={() => {
                      onNavigate('chat');
                      setProductsDropdownOpen(false);
                    }}
                    className={`w-full p-2.5 rounded-xl text-left transition-all flex items-start gap-3 cursor-pointer ${
                      currentPage === 'chat' ? 'bg-[#F2F9F4] border border-[#2E7D4E]/30' : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-4 h-4 text-[#2E7D4E]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 text-xs">Bizgenix Chat AI</span>
                        <span className="text-[10px] text-purple-700 bg-purple-50 px-1.5 py-0.2 rounded font-mono">chat.bizgenix.ai</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                        Zero-hallucination RAG chatbot trained on catalogs &amp; Tally stock.
                      </p>
                    </div>
                  </button>

                  {/* Suite Overview */}
                  <button
                    onClick={() => {
                      onNavigate('products');
                      setProductsDropdownOpen(false);
                    }}
                    className={`w-full p-2 rounded-xl text-left transition-all flex items-center justify-between text-xs font-semibold text-[#25663F] hover:bg-slate-50 border-t border-slate-100 pt-2 ${
                      currentPage === 'products' ? 'font-bold' : ''
                    }`}
                  >
                    <span>View All Products Overview</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                </div>
              </div>
            )}
          </div>

          {/* NEW: Industries Dropdown Menu */}
          <div className="relative">
            <button
              onClick={() => {
                setIndustriesDropdownOpen(!industriesDropdownOpen);
                setProductsDropdownOpen(false);
              }}
              onMouseEnter={() => {
                setIndustriesDropdownOpen(true);
                setProductsDropdownOpen(false);
              }}
              className="flex items-center gap-1 text-slate-900 font-bold hover:text-[#25663F] transition-colors py-2 cursor-pointer"
            >
              <span>Industries</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${industriesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Panel with All 8 Industries */}
            {industriesDropdownOpen && (
              <div
                onMouseLeave={() => setIndustriesDropdownOpen(false)}
                className="absolute left-0 mt-1 w-[460px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 z-50 animate-in fade-in slide-in-from-top-2"
              >
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 pb-1.5 border-b border-slate-100">
                  Custom Industry Architectures
                </div>
                <div className="grid grid-cols-2 gap-1.5 pt-2">
                  {mockIndustries.map((ind) => {
                    const IndIcon = getIndustryIcon(ind.id);
                    const isActive = currentPage === 'industry' && currentIndustryId === ind.id;
                    return (
                      <button
                        key={ind.id}
                        onClick={() => {
                          onNavigate('industry', ind.id);
                          setIndustriesDropdownOpen(false);
                        }}
                        className={`p-2 rounded-xl text-left transition-all flex items-start gap-2.5 cursor-pointer ${
                          isActive ? 'bg-[#F2F9F4] border border-[#2E7D4E]/30 font-bold' : 'hover:bg-slate-50'
                        }`}
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#2E7D4E]/10 text-[#2E7D4E] flex items-center justify-center shrink-0 mt-0.5">
                          <IndIcon className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-bold text-slate-900 text-xs truncate">{ind.shortName}</div>
                          <div className="text-[10px] text-slate-500 truncate">{ind.tagline.split('&')[0]}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Direct Product Quick Links */}
          <button
            onClick={() => onNavigate('gi')}
            className={`transition-colors whitespace-nowrap cursor-pointer text-xs ${
              currentPage === 'gi' ? 'text-[#25663F] font-bold border-b-2 border-[#2E7D4E] pb-0.5' : 'hover:text-slate-900'
            }`}
          >
            Growth Intelligence
          </button>

          <button
            onClick={() => onNavigate('crm')}
            className={`transition-colors whitespace-nowrap cursor-pointer text-xs ${
              currentPage === 'crm' ? 'text-[#25663F] font-bold border-b-2 border-[#2E7D4E] pb-0.5' : 'hover:text-slate-900'
            }`}
          >
            CRM
          </button>

          <button
            onClick={() => onNavigate('voice')}
            className={`transition-colors whitespace-nowrap cursor-pointer text-xs ${
              currentPage === 'voice' ? 'text-[#25663F] font-bold border-b-2 border-[#2E7D4E] pb-0.5' : 'hover:text-slate-900'
            }`}
          >
            Voice AI
          </button>

          <button
            onClick={() => onNavigate('chat')}
            className={`transition-colors whitespace-nowrap cursor-pointer text-xs ${
              currentPage === 'chat' ? 'text-[#25663F] font-bold border-b-2 border-[#2E7D4E] pb-0.5' : 'hover:text-slate-900'
            }`}
          >
            Chat AI
          </button>
        </nav>

        {/* Right CTA & Sync Status */}
        <div className="hidden sm:flex items-center gap-3.5 shrink-0 relative">
          
          {/* Tally Sync Indicator */}
          <div className="relative">
            <button
              onClick={() => setSyncPopoverOpen(!syncPopoverOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-[#F2F9F4] text-[#25663F] border border-[#2E7D4E]/25 hover:bg-[#e4f3e8] transition-colors cursor-pointer"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2E7D4E]"></span>
              </span>
              <span className="font-semibold">Tally Connected</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#2E7D4E]" />
            </button>

            {syncPopoverOpen && (
              <div 
                className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 text-xs z-50 animate-in fade-in"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="font-bold text-slate-900">ERP Connection Status</span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-mono">Port 9000</span>
                </div>
                <div className="mt-2.5 space-y-1.5 text-slate-600">
                  <div className="font-medium text-slate-800">Apex Synthetics &amp; Polymers Ltd</div>
                  <div className="text-[11px] text-slate-500">TallyPrime 4.1 Gold · Real-Time Sync</div>
                  <div className="text-[11px] text-slate-500">Active across all 8 industry modules</div>
                  <div className="flex items-center gap-1.5 text-[#2E7D4E] pt-1 font-semibold text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Read-Only Connector Verified</span>
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 text-right">
                  <button
                    onClick={() => setSyncPopoverOpen(false)}
                    className="text-[11px] text-[#2E7D4E] hover:underline font-medium cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={onOpenDemo}
            className="px-5 py-2.5 rounded-xl bg-[#2E7D4E] hover:bg-[#25663F] text-white text-xs font-semibold tracking-wide shadow-sm hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>Book a Demo</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenDemo}
            className="px-3 py-1.5 rounded-lg bg-[#2E7D4E] text-white text-xs font-semibold sm:hidden"
          >
            Demo
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
          
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2">
            Products:
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <button
              onClick={() => {
                onNavigate('gi');
                setMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-xl text-left text-xs font-semibold bg-slate-50 text-slate-800"
            >
              Growth Intelligence
            </button>
            <button
              onClick={() => {
                onNavigate('crm');
                setMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-xl text-left text-xs font-semibold bg-slate-50 text-slate-800"
            >
              Bizgenix CRM
            </button>
            <button
              onClick={() => {
                onNavigate('voice');
                setMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-xl text-left text-xs font-semibold bg-slate-50 text-slate-800"
            >
              Bizgenix Voice AI
            </button>
            <button
              onClick={() => {
                onNavigate('chat');
                setMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-xl text-left text-xs font-semibold bg-slate-50 text-slate-800"
            >
              Bizgenix Chat AI
            </button>
          </div>

          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 pt-2 border-t border-slate-100">
            Industry Solutions:
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {mockIndustries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => {
                  onNavigate('industry', ind.id);
                  setMobileMenuOpen(false);
                }}
                className={`p-2 rounded-xl text-left text-xs font-medium ${
                  currentPage === 'industry' && currentIndustryId === ind.id
                    ? 'bg-[#2E7D4E] text-white font-bold'
                    : 'bg-slate-50 text-slate-700'
                }`}
              >
                {ind.shortName}
              </button>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3 rounded-xl bg-[#2E7D4E] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow"
            >
              <span>Book 20-Min Live Demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
