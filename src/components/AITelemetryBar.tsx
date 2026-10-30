import { useState, useEffect, type FC } from 'react';
import { Cpu, Terminal, Radio, Sparkles, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export const AITelemetryBar: FC = () => {
  const { language } = useLanguage();
  const [latency, setLatency] = useState(24);

  // Micro jitter for realistic live telemetry ping
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(18 + Math.random() * 12));
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full border-y border-slate-200/60 dark:border-white/[0.06] bg-slate-100/40 dark:bg-[#070b14]/70 backdrop-blur-md py-2 overflow-x-auto text-[11px] font-mono select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-6 whitespace-nowrap text-slate-500 dark:text-slate-400">
        {/* Core Node Status */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
            {language === 'vi' ? 'HỆ THỐNG: SẴN SÀNG' : 'SYSTEM: ONLINE'}
          </span>
        </div>

        {/* AI Engine & Environment */}
        <div className="hidden sm:flex items-center gap-2 text-slate-600 dark:text-slate-300">
          <Sparkles className="w-3.5 h-3.5 text-cyan-500 animate-pulse" />
          <span>
            {language === 'vi'
              ? 'AI COPILOT: TÍCH HỢP HỖ TRỢ PHÁT TRIỂN'
              : 'AI ASSISTANT: INTEGRATED & ACTIVE'}
          </span>
        </div>

        {/* Tech Runtime Matrix */}
        <div className="hidden md:flex items-center gap-2 text-slate-600 dark:text-slate-400">
          <Terminal className="w-3.5 h-3.5 text-indigo-400" />
          <span>STACK: REACT 19 · TS · TAILWIND 4</span>
        </div>

        {/* Live Latency & Security */}
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>PING: {latency}ms</span>
          </span>

          <span className="hidden lg:flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ENCRYPTED</span>
          </span>

          <span className="hidden xl:flex items-center gap-1.5 text-slate-400 dark:text-slate-500">
            <Cpu className="w-3.5 h-3.5" />
            <span>BDU-CM NODE</span>
          </span>
        </div>
      </div>
    </div>
  );
};
