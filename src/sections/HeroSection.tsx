import { useState, type FC, type MouseEvent } from 'react';
import { ArrowDown, Mail, MapPin, GraduationCap, Copy, Check, Terminal, Sparkles } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { profileData } from '../data/profile';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

export const HeroSection: FC = () => {
  const { language, t } = useLanguage();
  const [copiedCode, setCopiedCode] = useState(false);

  const developerCodeSnippet = `const developer = {
  name: "Trương Thiện Thư",
  title: "IT Student / Web Developer",
  university: "ĐH Bình Dương – Phân hiệu Cà Mau",
  academicYear: "Year 2",
  coreStack: ["PHP", "React", "C++", "MySQL", "Docker"],
  focus: "Building real-world software with clean logic",
  available: true
};`;

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(developerCodeSnippet);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch (err) {
      console.error('Failed to copy code snippet', err);
    }
  };

  const handleScrollToSection = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-12 sm:pb-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Intro & Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>
                {language === 'vi'
                  ? 'Sẵn sàng cho cơ hội thực tập & đồ án'
                  : 'Open for internships & project collaboration'}
              </span>
            </div>

            {/* Name & Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-4">
              <span>{language === 'vi' ? 'Xin chào, tôi là ' : "Hi, I'm "}</span>
              <span className="bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent block mt-1">
                {profileData.name}
              </span>
            </h1>

            {/* Role & Direction */}
            <div className="flex flex-wrap items-center gap-2 text-base sm:text-xl font-heading font-semibold text-slate-700 dark:text-slate-300 mb-4">
              <span>{t(profileData.role)}</span>
              <span className="text-cyan-500 dark:text-cyan-400">·</span>
              <span className="text-indigo-600 dark:text-cyan-400">
                {language === 'vi' ? 'Định hướng Web Development' : 'Aspiring Software Developer'}
              </span>
            </div>

            {/* University & Location Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono text-slate-600 dark:text-slate-400 mb-6">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-200/50 dark:bg-white/[0.05] border border-slate-300/60 dark:border-white/[0.08]">
                <GraduationCap className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                {t(profileData.university)}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-200/50 dark:bg-white/[0.05] border border-slate-300/60 dark:border-white/[0.08]">
                <MapPin className="w-4 h-4 text-cyan-500" />
                {t(profileData.location)}
              </span>
            </div>

            {/* Short Bio */}
            <p className="max-w-xl text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              {t(profileData.shortBio)}
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <a
                href="#projects"
                onClick={(e) => handleScrollToSection(e, 'projects')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-heading font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-500/25 hover:shadow-cyan-500/30 transition-all hover:scale-105 active:scale-95 focus:outline-none"
              >
                <span>{language === 'vi' ? 'Xem các dự án' : 'View My Projects'}</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollToSection(e, 'contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-heading font-bold text-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-[#111827] border border-slate-300 dark:border-white/[0.12] hover:bg-slate-100 dark:hover:bg-white/[0.06] shadow-sm transition-all hover:scale-105 active:scale-95"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{language === 'vi' ? 'Liên hệ với tôi' : 'Contact Me'}</span>
              </a>
            </div>

            {/* Social Proof & Quick Channels */}
            <div className="flex items-center gap-3 pt-2 border-t border-slate-200 dark:border-white/[0.08] w-full max-w-md">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                {language === 'vi' ? 'Kênh kỹ thuật:' : 'Connect:'}
              </span>

              {profileData.contact.githubUrl ? (
                <a
                  href={profileData.contact.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              ) : (
                <span
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-white/[0.04]"
                  title="GitHub link: Cần bổ sung"
                >
                  GitHub (TODO)
                </span>
              )}

              {profileData.contact.linkedinUrl ? (
                <a
                  href={profileData.contact.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              ) : (
                <span
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-white/[0.04]"
                  title="LinkedIn link: Cần bổ sung"
                >
                  LinkedIn (TODO)
                </span>
              )}
            </div>
          </div>

          {/* Right Column: High-Tech Terminal Window & Floating Badges */}
          <div className="lg:col-span-5 relative">
            {/* Terminal Mockup Card */}
            <div className="relative rounded-2xl bg-[#090E1A] border border-slate-700/80 dark:border-white/[0.12] shadow-2xl shadow-indigo-950/40 overflow-hidden backdrop-blur-xl">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0d1527] border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>thienthu.config.ts</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  type="button"
                  className="p-1 rounded-md text-slate-400 hover:text-cyan-300 transition-colors focus:outline-none"
                  title="Sao chép mã"
                  aria-label="Sao chép đoạn mã"
                >
                  {copiedCode ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Code Editor Body */}
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto selection:bg-cyan-500/30">
                <p className="text-slate-500">// Personal developer configuration</p>
                <p>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-cyan-300">developer</span> = &#123;
                </p>
                <div className="pl-4 space-y-1">
                  <p>
                    <span className="text-indigo-400">name</span>:{' '}
                    <span className="text-emerald-300">"Trương Thiện Thư"</span>,
                  </p>
                  <p>
                    <span className="text-indigo-400">role</span>:{' '}
                    <span className="text-emerald-300">"IT Student / Web Developer"</span>,
                  </p>
                  <p>
                    <span className="text-indigo-400">university</span>:{' '}
                    <span className="text-emerald-300">"BDU Ca Mau Campus"</span>,
                  </p>
                  <p>
                    <span className="text-indigo-400">year</span>:{' '}
                    <span className="text-amber-400">2</span>,
                  </p>
                  <p>
                    <span className="text-indigo-400">coreStack</span>: [
                    <span className="text-emerald-300">"PHP"</span>,{' '}
                    <span className="text-emerald-300">"React"</span>,{' '}
                    <span className="text-emerald-300">"C++"</span>,{' '}
                    <span className="text-emerald-300">"MySQL"</span>,{' '}
                    <span className="text-emerald-300">"Docker"</span>
                    ],
                  </p>
                  <p>
                    <span className="text-indigo-400">approach</span>:{' '}
                    <span className="text-emerald-300">"Modular & Reliable"</span>,
                  </p>
                  <p>
                    <span className="text-indigo-400">status</span>:{' '}
                    <span className="text-emerald-400 font-semibold">"Ready for challenge"</span>
                  </p>
                </div>
                <p>&#125;;</p>
                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    UTF-8 · TypeScript 5
                  </span>
                  <span>LN 10, COL 1</span>
                </div>
              </div>
            </div>

            {/* Floating Orbiting Tech Badges */}
            <div className="absolute -top-4 -right-4 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-mono shadow-xl backdrop-blur-md animate-float hidden sm:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Fullstack & Logic</span>
            </div>

            <div className="absolute -bottom-5 -left-4 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-indigo-500/40 text-indigo-300 text-xs font-mono shadow-xl backdrop-blur-md animate-float-reverse hidden sm:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              <span>Database & Systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
