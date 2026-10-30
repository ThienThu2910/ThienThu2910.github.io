import { useState, type FC, type MouseEvent } from 'react';
import { ArrowDown, Mail, MapPin, GraduationCap, Copy, Check, Play, FileCode } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { profileData } from '../data/profile';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

export const HeroSection: FC = () => {
  const { language, t } = useLanguage();
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState<'code' | 'output'>('code');

  const developerCodeSnippet = `// developer.config.ts
export const candidate = {
  name: "Trương Thiện Thư",
  role: "IT Student / Web Developer",
  university: "BDU Ca Mau Campus",
  academicYear: "Year 2 (2024 - Present)",
  coreStack: ["PHP", "React", "C++", "MySQL", "Docker"],
  philosophy: "Modular design & robust logic",
  availableForInternship: true,
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
      className="relative min-h-[88vh] flex items-center justify-center pt-8 pb-12 sm:pb-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Core Positioning & Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Live Availability Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>
                {language === 'vi'
                  ? 'Sinh viên năm 2 CNTT · Sẵn sàng thực tập Web & Software'
                  : '2nd-Year IT Student · Open to Web & Software Roles'}
              </span>
            </div>

            {/* Name with Gradient Shine */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-3">
              <span className="block text-slate-800 dark:text-slate-100">
                {language === 'vi' ? 'Xin chào, tôi là' : "Hi, I'm"}
              </span>
              <span className="bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                {profileData.name}
              </span>
            </h1>

            {/* Sub-headline: Role & Direction */}
            <div className="flex flex-wrap items-center gap-2 text-base sm:text-xl font-heading font-semibold text-slate-700 dark:text-slate-300 mb-4">
              <span>{t(profileData.role)}</span>
              <span className="text-cyan-500 dark:text-cyan-400">·</span>
              <span className="text-indigo-600 dark:text-cyan-400">
                {language === 'vi' ? 'Định hướng Kỹ thuật Phần mềm & Web' : 'Web & Software Engineering Focus'}
              </span>
            </div>

            {/* Institution & Location Pills */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-mono text-slate-600 dark:text-slate-400 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-200/60 dark:bg-white/[0.05] border border-slate-300/70 dark:border-white/[0.08]">
                <GraduationCap className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                {t(profileData.university)}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-200/60 dark:bg-white/[0.05] border border-slate-300/70 dark:border-white/[0.08]">
                <MapPin className="w-4 h-4 text-cyan-500" />
                {t(profileData.location)}
              </span>
            </div>

            {/* Concise Bio */}
            <p className="max-w-xl text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              {t(profileData.shortBio)}
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <a
                href="#projects"
                onClick={(e) => handleScrollToSection(e, 'projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-500/25 hover:shadow-cyan-500/30 transition-all hover:scale-105 active:scale-95 focus:outline-none"
              >
                <span>{language === 'vi' ? 'Xem các dự án thực tế' : 'Explore Featured Projects'}</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollToSection(e, 'contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-[#111827] border border-slate-300 dark:border-white/[0.12] hover:bg-slate-100 dark:hover:bg-white/[0.06] shadow-sm transition-all hover:scale-105 active:scale-95"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{language === 'vi' ? 'Liên hệ với tôi' : 'Get in Touch'}</span>
              </a>
            </div>

            {/* Social Proof & Quick Channels */}
            <div className="flex items-center gap-3 pt-3 border-t border-slate-200 dark:border-white/[0.08] w-full max-w-md">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                {language === 'vi' ? 'Kênh kỹ thuật:' : 'Technical Links:'}
              </span>

              {profileData.contact.githubUrl ? (
                <a
                  href={profileData.contact.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              ) : (
                <span
                  className="px-2.5 py-0.5 rounded text-[11px] font-mono text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-white/[0.04]"
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
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              ) : (
                <span
                  className="px-2.5 py-0.5 rounded text-[11px] font-mono text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-white/[0.04]"
                  title="LinkedIn link: Cần bổ sung"
                >
                  LinkedIn (TODO)
                </span>
              )}
            </div>
          </div>

          {/* Right Column: High-End Interactive IDE Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-[#090E1A] border border-slate-700/80 dark:border-white/[0.12] shadow-2xl shadow-indigo-950/40 overflow-hidden backdrop-blur-xl">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#0d1527] border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 text-xs font-mono">
                  <button
                    onClick={() => setActiveTab('code')}
                    type="button"
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
                      activeTab === 'code'
                        ? 'bg-white/[0.08] text-cyan-300 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <FileCode className="w-3 h-3 text-cyan-400" />
                    <span>developer.ts</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('output')}
                    type="button"
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
                      activeTab === 'output'
                        ? 'bg-white/[0.08] text-emerald-300 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Play className="w-3 h-3 text-emerald-400" />
                    <span>console.sh</span>
                  </button>
                </div>

                {/* Action: Copy */}
                <button
                  onClick={handleCopyCode}
                  type="button"
                  className="p-1 rounded-md text-slate-400 hover:text-cyan-300 transition-colors focus:outline-none"
                  title="Sao chép đoạn mã"
                  aria-label="Sao chép đoạn mã"
                >
                  {copiedCode ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Window Content */}
              {activeTab === 'code' ? (
                <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto selection:bg-cyan-500/30 flex">
                  {/* Line Numbers */}
                  <div className="select-none pr-3 text-right text-slate-600 space-y-1 font-mono text-[11px]" aria-hidden="true">
                    <div>01</div>
                    <div>02</div>
                    <div>03</div>
                    <div>04</div>
                    <div>05</div>
                    <div>06</div>
                    <div>07</div>
                    <div>08</div>
                    <div>09</div>
                    <div>10</div>
                  </div>

                  {/* Code Lines */}
                  <div className="space-y-1">
                    <p>
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-cyan-300">candidate</span> = &#123;
                    </p>
                    <p className="pl-3">
                      <span className="text-indigo-300">name</span>:{' '}
                      <span className="text-emerald-300">"Trương Thiện Thư"</span>,
                    </p>
                    <p className="pl-3">
                      <span className="text-indigo-300">role</span>:{' '}
                      <span className="text-emerald-300">"IT Student / Web Developer"</span>,
                    </p>
                    <p className="pl-3">
                      <span className="text-indigo-300">university</span>:{' '}
                      <span className="text-emerald-300">"BDU Ca Mau Campus"</span>,
                    </p>
                    <p className="pl-3">
                      <span className="text-indigo-300">year</span>:{' '}
                      <span className="text-amber-400">2</span>,
                    </p>
                    <p className="pl-3">
                      <span className="text-indigo-300">coreStack</span>: [
                      <span className="text-emerald-300">"PHP"</span>,{' '}
                      <span className="text-emerald-300">"React"</span>,{' '}
                      <span className="text-emerald-300">"C++"</span>,{' '}
                      <span className="text-emerald-300">"MySQL"</span>,{' '}
                      <span className="text-emerald-300">"Docker"</span>
                      ],
                    </p>
                    <p className="pl-3">
                      <span className="text-indigo-300">mindset</span>:{' '}
                      <span className="text-emerald-300">"Clean Code & Architecture"</span>,
                    </p>
                    <p className="pl-3">
                      <span className="text-indigo-300">readyForInternship</span>:{' '}
                      <span className="text-emerald-400 font-bold">true</span>,
                    </p>
                    <p>&#125;;<span className="inline-block w-1.5 h-3 bg-cyan-400 ml-1 animate-cursor" /></p>
                  </div>
                </div>
              ) : (
                /* Simulated Console Output */
                <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed text-slate-300 space-y-2 bg-[#060A13]">
                  <p className="text-slate-500">$ pnpm run verify:candidate-profile</p>
                  <p className="text-cyan-400 flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> Target: Trương Thiện Thư (Year 2 IT)
                  </p>
                  <p className="text-cyan-400 flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> Campus: Đại học Bình Dương – Phân hiệu Cà Mau
                  </p>
                  <p className="text-cyan-400 flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> Core Projects: ALTF4 Hotel, EquipTrack, CPU Scheduler
                  </p>
                  <p className="text-emerald-400 flex items-center gap-2 font-bold pt-2 border-t border-slate-800">
                    <span>STATUS: 0 ERRORS · READY FOR OPPORTUNITIES</span>
                  </p>
                </div>
              )}

              {/* Status bar */}
              <div className="px-4 py-2 border-t border-slate-800 text-[11px] font-mono text-slate-500 flex items-center justify-between bg-[#080d1a]">
                <span className="text-cyan-400">TypeScript 5 · Ready</span>
                <span>UTF-8 · LF</span>
              </div>
            </div>

            {/* Floating Satellite Badges */}
            <div className="absolute -top-3 -right-3 px-3 py-1 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-mono shadow-xl backdrop-blur-md animate-float hidden sm:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Fullstack Web Logic</span>
            </div>

            <div className="absolute -bottom-3 -left-3 px-3 py-1 rounded-xl bg-slate-900/90 border border-indigo-500/40 text-indigo-300 text-xs font-mono shadow-xl backdrop-blur-md animate-float-reverse hidden sm:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              <span>Relational Databases</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
