import type { FC } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../hooks/useLanguage';

export const ThemeToggle: FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();

  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="p-2 rounded-full transition-all duration-300 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-cyan-300 hover:bg-slate-200/70 dark:hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
      aria-label={
        language === 'vi'
          ? isDark
            ? 'Chuyển sang giao diện Sáng'
            : 'Chuyển sang giao diện Tối'
          : isDark
          ? 'Switch to Light Mode'
          : 'Switch to Dark Mode'
      }
      title={
        language === 'vi'
          ? isDark
            ? 'Chuyển sang giao diện Sáng'
            : 'Chuyển sang giao diện Tối'
          : isDark
          ? 'Switch to Light Mode'
          : 'Switch to Dark Mode'
      }
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 hover:rotate-90 hover:scale-110" />
      ) : (
        <Moon className="w-4 h-4 text-indigo-600 transition-transform duration-300 hover:-rotate-12 hover:scale-110" />
      )}
    </button>
  );
};
