import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  MessageSquare, 
  FileText, 
  Table, 
  CheckCircle2, 
  ArrowRight, 
  Bot, 
  RefreshCw,
  Search,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { mockAIQueries } from './mockTallyData';
import { AIQueryOption } from '../types';

interface AskGIDemoProps {
  onOpenWhatsApp: (debtorName?: string, amount?: string, billRef?: string, phone?: string) => void;
}

export const AskGIDemo: React.FC<AskGIDemoProps> = ({ onOpenWhatsApp }) => {
  const [selectedQueryId, setSelectedQueryId] = useState<string>("q1");
  const [customInput, setCustomInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuery, setCurrentQuery] = useState<AIQueryOption>(mockAIQueries[0]);

  const handleSelectPrompt = (option: AIQueryOption) => {
    if (isLoading) return;
    setIsLoading(true);
    setSelectedQueryId(option.id);
    
    setTimeout(() => {
      setCurrentQuery(option);
      setIsLoading(false);
    }, 450);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim() || isLoading) return;

    setIsLoading(true);
    const queryText = customInput;
    setCustomInput("");

    setTimeout(() => {
      // Find matching query or construct dynamic CFO response
      const matched = mockAIQueries.find(q => 
        queryText.toLowerCase().includes("cash") || 
        queryText.toLowerCase().includes("balance") || 
        queryText.toLowerCase().includes("friday")
      ) || mockAIQueries.find(q => 
        queryText.toLowerCase().includes("inventory") || 
        queryText.toLowerCase().includes("stock") || 
        queryText.toLowerCase().includes("godown")
      ) || mockAIQueries[0];

      setCurrentQuery({
        ...matched,
        id: "custom-" + Date.now(),
        query: queryText,
        summary: `Query processed against TallyPrime ledger database for: "${queryText}". Found matching financial insights.`,
      });
      setIsLoading(false);
    }, 600);
  };

  return (
    <section id="ask-gi" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 -z-0 w-96 h-96 bg-[#2E7D4E]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 -z-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Interactive Generative AI Feature Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            "Ask GI" — Conversational Tally Intelligence
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            No SQL queries. No waiting 3 days for your accountant. Just ask questions in natural English or Hindi, and get verified tabular executive breakdowns in seconds.
          </p>
        </div>

        {/* Interactive Chat Console Window */}
        <div className="max-w-4xl mx-auto bg-slate-800/90 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden backdrop-blur-md">
          
          {/* Top Window Bar */}
          <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#2E7D4E] flex items-center justify-center text-white">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-white">Ask GI Engine</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono border border-emerald-500/30">
                    ODBC Ready
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">Context: Apex Synthetics (Surat Unit) · 1,842 Ledgers</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="hidden sm:inline">Zero Data Hallucination Mode</span>
              <div className="w-2 h-2 rounded-full bg-[#2E7D4E] animate-pulse" />
            </div>
          </div>

          {/* Prompt Selection Bubbles */}
          <div className="p-4 sm:p-5 bg-slate-900/60 border-b border-slate-700/80">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2.5">
              Click to run example executive queries:
            </span>
            <div className="flex flex-wrap gap-2">
              {mockAIQueries.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleSelectPrompt(option)}
                  className={`text-left text-xs px-3.5 py-2 rounded-xl border transition-all flex items-center gap-2 ${
                    currentQuery.id === option.id
                      ? 'bg-[#2E7D4E] text-white border-emerald-400 shadow-md shadow-[#2E7D4E]/30 font-semibold'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <Search className="w-3.5 h-3.5 shrink-0 opacity-70" />
                  <span>"{option.query}"</span>
                </button>
              ))}
            </div>
          </div>

          {/* AI Response Display Area */}
          <div className="p-5 sm:p-7 min-h-[360px] flex flex-col justify-between">
            {isLoading ? (
              <div className="py-20 flex flex-col items-center justify-center space-y-4">
                <div className="w-10 h-10 border-3 border-[#2E7D4E] border-t-transparent rounded-full animate-spin" />
                <div className="text-center">
                  <span className="font-semibold text-sm text-white block">Querying Tally Ledger XML Schema...</span>
                  <span className="text-xs text-slate-400">Aggregating aging tables and bill-wise outstandings</span>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in duration-200">
                
                {/* User Query Echo */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-200 shrink-0 mt-0.5">
                    MD
                  </div>
                  <div className="bg-slate-700/70 border border-slate-600/70 px-4 py-2.5 rounded-2xl rounded-tl-none text-xs sm:text-sm text-slate-100 font-medium">
                    {currentQuery.query}
                  </div>
                </div>

                {/* AI CFO Answer */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#2E7D4E] flex items-center justify-center text-xs text-white shrink-0 mt-0.5 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div className="space-y-4 flex-1">
                    
                    {/* Summary Card */}
                    <div className="bg-slate-900/80 border border-slate-700 p-4 rounded-2xl text-xs sm:text-sm space-y-2">
                      <p className="font-semibold text-emerald-400">
                        {currentQuery.summary}
                      </p>
                      <p className="text-slate-300 text-xs leading-relaxed">
                        {currentQuery.explanation}
                      </p>
                    </div>

                    {/* Structured Result Table */}
                    <div className="rounded-xl border border-slate-700 overflow-x-auto bg-slate-900/90 shadow-inner">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-slate-800/90 border-b border-slate-700 text-slate-300 font-semibold">
                            {currentQuery.tableData.headers.map((header, idx) => (
                              <th key={idx} className="py-2.5 px-3.5 whitespace-nowrap">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800 text-slate-200">
                          {currentQuery.tableData.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-slate-800/50 transition-colors">
                              {row.map((cell, cIdx) => (
                                <td 
                                  key={cIdx} 
                                  className={`py-2.5 px-3.5 whitespace-nowrap ${
                                    cIdx === 1 ? 'font-bold tabular-nums text-slate-100' : ''
                                  } ${
                                    String(cell).includes("Critical") || String(cell).includes("High Risk")
                                      ? 'text-rose-400 font-semibold'
                                      : ''
                                  }`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Action Execution Button */}
                    <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-[11px] text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Data verified directly from Tally company master</span>
                      </div>

                      <button
                        onClick={() => {
                          if (currentQuery.actionPayload) {
                            onOpenWhatsApp(
                              currentQuery.actionPayload.recipient,
                              currentQuery.actionPayload.amount,
                              currentQuery.actionPayload.billRef,
                              currentQuery.actionPayload.phone
                            );
                          } else {
                            onOpenWhatsApp(
                              "Krystal Tex-Fab Pvt Ltd",
                              "₹28,40,000",
                              "INV-2026/0419",
                              "+91 98251 44321"
                            );
                          }
                        }}
                        className="px-4 py-2.5 bg-[#2E7D4E] hover:bg-[#25663F] text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-[#2E7D4E]/30 flex items-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Action: {currentQuery.actionLabel}</span>
                      </button>
                    </div>

                  </div>
                </div>

              </div>
            )}

            {/* Custom Natural Language Input Form */}
            <form onSubmit={handleCustomSubmit} className="mt-8 pt-4 border-t border-slate-700/80">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Ask any question on your Tally data (e.g. 'Show me pending sales orders over 30 days old')..."
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl py-3 pl-4 pr-24 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#2E7D4E] focus:ring-1 focus:ring-[#2E7D4E]"
                />
                <button
                  type="submit"
                  disabled={!customInput.trim() || isLoading}
                  className="absolute right-1.5 px-4 py-2 bg-[#2E7D4E] hover:bg-[#25663F] disabled:opacity-40 disabled:hover:bg-[#2E7D4E] text-white rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5"
                >
                  <span>Query</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
