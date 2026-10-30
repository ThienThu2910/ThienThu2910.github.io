import type { FC } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../hooks/useLanguage';

export const ThemeToggle: FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="p-2 rounded-full transition-all duration-200 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-cyan-300 hover:bg-slate-200/60 dark:hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
      aria-label={
        language === 'vi'
          ? theme === 'dark'
            ? 'Chuyển sang giao diện Sáng'
            : 'Chuyển sang giao diện Tối'
          : theme === 'dark'
          ? 'Switch to Light Mode'
          : 'Switch to Dark Mode'
      }
      title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-amber-300 transition-transform hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-slate-700 transition-transform hover:-rotate-12" />
      )}
    </button>
  );
};
