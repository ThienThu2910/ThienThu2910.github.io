import { useState, useEffect, type FC } from 'react';
import { Cpu, Terminal, Radio, Sparkles, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

/**
 * AITelemetryBar
 * --------------
 * Fixed info strip rendered BELOW the Navbar inside orbit-header-fixed.
 * Height is controlled by CSS var --telebar-h (36px desktop, 32px mobile).
 */
export const AITelemetryBar: FC = () => {
  const { language } = useLanguage();
  const [latency, setLatency] = useState(24);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(18 + Math.random() * 12));
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="orbit-telebar"
      role="status"
      aria-label="System telemetry"
    >
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6 whitespace-nowrap text-[11px] font-mono select-none" style={{ color: 'rgba(255,255,255,0.48)' }}>

        {/* Core Node Status */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.85)' }}>
            {language === 'vi' ? 'HỆ THỐNG: SẴN SÀNG' : 'SYSTEM: ONLINE'}
          </span>
        </div>

        {/* AI Engine & Environment */}
        <div className="hidden sm:flex items-center gap-2 flex-shrink-0" style={{ color: 'rgba(255,255,255,0.60)' }}>
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse flex-shrink-0" />
          <span>
            {language === 'vi'
              ? 'AI COPILOT: TÍCH HỢP HỖ TRỢ PHÁT TRIỂN'
              : 'AI ASSISTANT: INTEGRATED & ACTIVE'}
          </span>
        </div>

        {/* Tech Runtime Matrix */}
        <div className="hidden md:flex items-center gap-2 flex-shrink-0" style={{ color: 'rgba(255,255,255,0.55)' }}>
          <Terminal className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
          <span>STACK: REACT 19 · TS · TAILWIND 4</span>
        </div>

        {/* Live Latency & Security */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <span className="flex items-center gap-1.5" style={{ color: 'var(--color-cyan)' }}>
            <Radio className="w-3.5 h-3.5 animate-pulse flex-shrink-0" />
            <span>PING: {latency}ms</span>
          </span>

          <span className="hidden lg:flex items-center gap-1.5" style={{ color: 'rgba(52,211,153,0.80)' }}>
            <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
            <span>ENCRYPTED</span>
          </span>

          <span className="hidden xl:flex items-center gap-1.5" style={{ color: 'rgba(255,255,255,0.38)' }}>
            <Cpu className="w-3.5 h-3.5 flex-shrink-0" />
            <span>BDU-CM NODE</span>
          </span>
        </div>
      </div>
    </div>
  );
};
