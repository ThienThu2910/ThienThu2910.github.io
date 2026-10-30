import { useState, useEffect, type FC, type MouseEvent } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';

interface NavItem {
  id: string;
  label: { vi: string; en: string };
}

const navItems: NavItem[] = [
  { id: 'about', label: { vi: 'Về tôi', en: 'About' } },
  { id: 'skills', label: { vi: 'Kỹ năng', en: 'Skills' } },
  { id: 'projects', label: { vi: 'Dự án', en: 'Projects' } },
  { id: 'education', label: { vi: 'Học vấn', en: 'Education' } },
  { id: 'contact', label: { vi: 'Liên hệ', en: 'Contact' } },
];

export const Navbar: FC = () => {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', ...navItems.map((item) => item.id)];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6 max-w-6xl mx-auto transition-all duration-300">
      <div
        className={`w-full rounded-2xl sm:rounded-full px-4 sm:px-6 py-2.5 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/85 dark:bg-[#0b1220]/80 backdrop-blur-xl border border-slate-200/80 dark:border-white/[0.1] shadow-xl shadow-slate-200/50 dark:shadow-2xl dark:shadow-black/40'
            : 'bg-white/60 dark:bg-[#0b1220]/50 backdrop-blur-md border border-slate-200/50 dark:border-white/[0.05]'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, 'hero')}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Trương Thiện Thư"
          >
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white font-mono font-bold text-sm shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
                TT
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white dark:border-[#0b1220]" />
            </div>

            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                Trương Thiện Thư
              </span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                IT Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-900/10 dark:bg-white/[0.08] text-indigo-600 dark:text-cyan-300 font-semibold shadow-inner'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-white/[0.04]'
                  }`}
                >
                  {t(item.label)}
                </a>
              );
            })}
          </nav>

          {/* Action Tools & Contact CTA */}
          <div className="hidden sm:flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="ml-1 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-md shadow-indigo-500/20 hover:shadow-cyan-500/25 transition-all hover:scale-[1.03] active:scale-95"
            >
              <span>{language === 'vi' ? 'Liên hệ' : 'Contact'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-1.5">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-1.5 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-white/[0.08] transition-colors focus:outline-none"
              aria-label={isOpen ? 'Đóng menu' : 'Mở menu'}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {isOpen && (
          <div className="sm:hidden mt-3 pt-3 border-t border-slate-200/60 dark:border-white/[0.08] pb-2 animate-fadeIn">
            <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-indigo-500/10 text-indigo-600 dark:text-cyan-400 font-semibold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.04]'
                    }`}
                  >
                    {t(item.label)}
                  </a>
                );
              })}
              <div className="pt-2 mt-1">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-500"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
                  <span>{language === 'vi' ? 'Liên hệ với tôi' : 'Get in Touch'}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
