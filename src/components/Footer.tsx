import type { FC, MouseEvent } from 'react';
import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { profileData } from '../data/profile';
import { GithubIcon, LinkedinIcon } from './Icons';

const currentYear = new Date().getFullYear();

export const Footer: FC = () => {
  const { language, t } = useLanguage();

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
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
    <footer className="border-t border-slate-200 dark:border-white/[0.08] bg-slate-100/50 dark:bg-[#030712]/90 py-12 transition-colors relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Identity & Campus */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center text-white font-mono font-bold text-xs shadow-md shadow-indigo-500/20">
                TT
              </div>
              <span className="font-heading font-extrabold text-slate-900 dark:text-white text-base">
                {profileData.name}
              </span>
            </div>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
              {t(profileData.university)} · {t(profileData.academicYear)}
            </p>
          </div>

          {/* Quick Nav Anchors */}
          <nav className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-300">
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-cyan-400 transition-colors">
              {language === 'vi' ? 'Giới thiệu' : 'About'}
            </a>
            <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="hover:text-cyan-400 transition-colors">
              {language === 'vi' ? 'Kỹ năng' : 'Skills'}
            </a>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-cyan-400 transition-colors">
              {language === 'vi' ? 'Dự án' : 'Projects'}
            </a>
            <a href="#education" onClick={(e) => handleNavClick(e, 'education')} className="hover:text-cyan-400 transition-colors">
              {language === 'vi' ? 'Học vấn' : 'Education'}
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-cyan-400 transition-colors">
              {language === 'vi' ? 'Liên hệ' : 'Contact'}
            </a>
          </nav>

          {/* Social Links & Trust Notice */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-2">
              {profileData.contact.githubUrl ? (
                <a
                  href={profileData.contact.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl text-slate-500 hover:text-cyan-400 hover:bg-slate-200 dark:hover:bg-white/[0.08] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              ) : (
                <span className="p-2 rounded-xl text-slate-400 dark:text-slate-600 cursor-not-allowed">
                  <GithubIcon className="w-4 h-4 opacity-40" />
                </span>
              )}

              {profileData.contact.linkedinUrl ? (
                <a
                  href={profileData.contact.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl text-slate-500 hover:text-cyan-400 hover:bg-slate-200 dark:hover:bg-white/[0.08] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              ) : (
                <span className="p-2 rounded-xl text-slate-400 dark:text-slate-600 cursor-not-allowed">
                  <LinkedinIcon className="w-4 h-4 opacity-40" />
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>
                {language === 'vi'
                  ? 'Hồ sơ kỹ thuật trung thực'
                  : 'Authentic student portfolio'}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2">
          <p>© {currentYear} {profileData.name}. All rights reserved.</p>
          <p className="flex items-center gap-1 font-mono text-[11px]">
            Designed with Modern Minimal Developer Aesthetics
          </p>
        </div>
      </div>
    </footer>
  );
};
