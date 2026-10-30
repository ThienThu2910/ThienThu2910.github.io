import type { FC } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Globe } from 'lucide-react';

export const LanguageToggle: FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      type="button"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wide transition-all duration-200 border border-slate-300/60 dark:border-white/[0.1] bg-slate-100/70 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 hover:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
      aria-label="Toggle language (VI/EN)"
      title="Chuyển đổi ngôn ngữ / Switch Language"
    >
      <Globe className="w-3.5 h-3.5 text-cyan-400" />
      <span className="uppercase">{language}</span>
    </button>
  );
};
