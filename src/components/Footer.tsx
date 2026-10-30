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
    <footer className="relative py-12 mt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.07)', background: 'rgba(7,6,15,0.70)', backdropFilter: 'blur(20px)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Identity & Campus */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center text-white font-mono font-bold text-xs shadow-md shadow-indigo-500/20">
                TT
              </div>
              <span className="font-heading font-extrabold text-white text-base">
                {profileData.name}
              </span>
            </div>
            <p className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.40)' }}>
              {t(profileData.university)} · {t(profileData.academicYear)}
            </p>
          </div>

          {/* Quick Nav Anchors */}
          <nav className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono" style={{ color: 'rgba(255,255,255,0.50)' }}>
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
                  className="p-2 rounded-xl transition-colors"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#70E0FF')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              ) : (
                <span className="p-2 rounded-xl" style={{ color: 'rgba(255,255,255,0.20)' }}>
                  <GithubIcon className="w-4 h-4 opacity-40" />
                </span>
              )}

              {profileData.contact.linkedinUrl ? (
                <a
                  href={profileData.contact.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl transition-colors"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#70E0FF')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              ) : (
                <span className="p-2 rounded-xl" style={{ color: 'rgba(255,255,255,0.20)' }}>
                  <LinkedinIcon className="w-4 h-4 opacity-40" />
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5 text-[11px] font-mono" style={{ color: 'rgba(255,255,255,0.38)' }}>
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
        <div className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs gap-2" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.30)' }}>
          <p>© {currentYear} {profileData.name}. All rights reserved.</p>
          <p className="flex items-center gap-1 font-mono text-[11px]">
            Orbit Space Portfolio — Built with React &amp; Vite
          </p>
        </div>
      </div>
    </footer>
  );
};
