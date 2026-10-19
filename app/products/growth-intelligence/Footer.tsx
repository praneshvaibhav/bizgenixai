import React from 'react';
import { Layers, ShieldCheck, Mail, MapPin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: 'gi' | 'crm' | 'voice' | 'chat' | 'products') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleClick = (e: React.MouseEvent, page: 'gi' | 'crm' | 'voice' | 'chat' | 'products') => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(page);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#2E7D4E] flex items-center justify-center text-white shadow-md">
                <Layers className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-lg text-white tracking-tight">Bizgenix</span>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-950 px-1.5 py-0.5 rounded border border-emerald-800">AI</span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              The Enterprise AI Operating System connecting Indian sales teams, telephony lines, and customer chats directly with Tally ERP and cash flow intelligence.
            </p>

            <div className="pt-2 text-[11px] text-slate-500 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#2E7D4E]" />
                <span>Offices in Surat (Textile Hub) · Mumbai (BKC) · Bengaluru</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#2E7D4E]" />
                <span>enterprise@bizgenix.ai</span>
              </div>
            </div>
          </div>

          {/* Dedicated Product Pages */}
          <div className="space-y-3">
            <div className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">
              Dedicated Products
            </div>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#gi" 
                  onClick={(e) => handleClick(e, 'gi')}
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Growth Intelligence</span>
                  <span className="text-[10px] text-slate-500 font-mono">gi.bizgenix.ai</span>
                </a>
              </li>
              <li>
                <a 
                  href="#crm" 
                  onClick={(e) => handleClick(e, 'crm')}
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Bizgenix CRM</span>
                  <span className="text-[10px] text-slate-500 font-mono">crm.bizgenix.ai</span>
                </a>
              </li>
              <li>
                <a 
                  href="#voice" 
                  onClick={(e) => handleClick(e, 'voice')}
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Bizgenix Voice AI</span>
                  <span className="text-[10px] text-slate-500 font-mono">voice.bizgenix.ai</span>
                </a>
              </li>
              <li>
                <a 
                  href="#chat" 
                  onClick={(e) => handleClick(e, 'chat')}
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Bizgenix Chat AI</span>
                  <span className="text-[10px] text-slate-500 font-mono">chat.bizgenix.ai</span>
                </a>
              </li>
              <li>
                <a 
                  href="#products" 
                  onClick={(e) => handleClick(e, 'products')}
                  className="hover:text-emerald-400 transition-colors font-semibold flex items-center gap-1"
                >
                  <span>All Products Overview</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Integrations & Security */}
          <div className="space-y-3">
            <div className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">
              Integration &amp; Telephony
            </div>
            <ul className="space-y-2">
              <li><a href="#security" className="hover:text-white transition-colors">TallyPrime 4.x / ERP 9 (Port 9000)</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">WhatsApp Business Cloud API</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Exotel &amp; Tata Tele SIP Trunks</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">IndiaMART Webhook Integration</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">256-Bit TLS Bank Encryption</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Strict Read-Only Tally Sync</a></li>
            </ul>
          </div>

          {/* Compliance & Trust */}
          <div className="space-y-3">
            <div className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">
              Compliance &amp; Trust
            </div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">DPDP Act (India) Compliance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TRAI DND Compliance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise SLA Guarantee</a></li>
            </ul>
          </div>

        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Bizgenix AI Technologies Pvt Ltd. All rights reserved.
          </div>
          <div className="text-center sm:text-right max-w-xl text-[10px] text-slate-600 leading-normal">
            Disclaimer: Tally, TallyPrime, and Tally.ERP 9 are registered trademarks of Tally Solutions Pvt. Ltd. Bizgenix AI is an independent software provider offering read-only analytics, CRM bridges, and telephony automation connectors.
          </div>
        </div>

      </div>
    </footer>
  );
};
