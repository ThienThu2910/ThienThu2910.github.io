import { useState, useEffect, type FC } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export const BackToTop: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      type="button"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-slate-900/90 dark:bg-[#0B1220]/90 text-cyan-400 border border-slate-700/80 dark:border-white/[0.12] shadow-2xl backdrop-blur-xl hover:bg-slate-800 dark:hover:bg-white/[0.1] hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none"
      aria-label={language === 'vi' ? 'Cuộn lên đầu trang' : 'Scroll back to top'}
      title={language === 'vi' ? 'Lên đầu trang' : 'Back to top'}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
