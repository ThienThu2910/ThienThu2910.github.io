import { useState, useEffect, type FC, type MouseEvent } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Command } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';

interface NavItem {
  id: string;
  label: { vi: string; en: string };
}

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

const navItems: NavItem[] = [
  { id: 'about', label: { vi: 'Về tôi', en: 'About' } },
  { id: 'skills', label: { vi: 'Kỹ năng', en: 'Skills' } },
  { id: 'projects', label: { vi: 'Dự án', en: 'Projects' } },
  { id: 'education', label: { vi: 'Học vấn', en: 'Education' } },
  { id: 'contact', label: { vi: 'Liên hệ', en: 'Contact' } },
];

export const Navbar: FC<NavbarProps> = ({ onOpenCommandPalette }) => {
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
            ? 'backdrop-blur-xl border shadow-2xl'
            : 'backdrop-blur-md border'
        }`}
        style={{
          background: isScrolled ? 'rgba(7,6,15,0.82)' : 'rgba(7,6,15,0.45)',
          borderColor: isScrolled ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.06)',
          boxShadow: isScrolled ? '0 8px 40px rgba(0,0,0,0.60), inset 0 1px 0 rgba(255,255,255,0.06)' : 'none',
        }}
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
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2" style={{ borderColor: 'rgba(7,6,15,0.9)' }} />
            </div>

            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm sm:text-base text-white group-hover:text-cyan-300 transition-colors">
                Trương Thiện Thư
              </span>
              <span className="text-[10px] font-mono flex items-center gap-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
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
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
                  style={{
                    color: isActive ? 'var(--color-cyan)' : 'rgba(255,255,255,0.65)',
                    background: isActive ? 'rgba(112,224,255,0.10)' : 'transparent',
                    fontWeight: isActive ? '600' : '450',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff';
                  }}
                  onMouseLeave={e => {
                    if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.65)';
                  }}
                >
                  {t(item.label)}
                </a>
              );
            })}
          </nav>

          {/* Action Tools & Contact CTA */}
          <div className="hidden sm:flex items-center gap-2">
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                type="button"
                className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all hover:scale-105"
                style={{
                  color: 'rgba(255,255,255,0.55)',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                title="Mở bảng điều khiển nhanh (Ctrl + K)"
                aria-label="Mở bảng điều khiển nhanh"
              >
                <Command className="w-3.5 h-3.5 text-cyan-400" />
                <span className="font-semibold text-white/80">⌘K</span>
              </button>
            )}
            <LanguageToggle />
            <ThemeToggle />
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="ember-btn ml-1 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md shadow-indigo-500/20 transition-all hover:scale-[1.03] active:scale-95"
            >
              <span>{language === 'vi' ? 'Liên hệ' : 'Contact'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-1.5">
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                type="button"
                className="p-1.5 rounded-xl transition-colors font-mono text-xs flex items-center gap-1"
                style={{
                  color: 'rgba(255,255,255,0.60)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                title="Mở Quick Actions"
                aria-label="Mở Quick Actions"
              >
                <Command className="w-3.5 h-3.5 text-cyan-400" />
              </button>
            )}
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-1.5 rounded-xl transition-colors focus:outline-none"
              style={{ color: 'rgba(255,255,255,0.75)' }}
              aria-label={isOpen ? 'Đóng menu' : 'Mở menu'}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {isOpen && (
          <div className="sm:hidden mt-3 pt-3 pb-2 animate-fadeIn" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className="px-3 py-2 rounded-xl text-sm font-medium transition-colors"
                    style={{
                      color: isActive ? 'var(--color-cyan)' : 'rgba(255,255,255,0.70)',
                      background: isActive ? 'rgba(112,224,255,0.08)' : 'transparent',
                    }}
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
