import { useState, useEffect, type FC, type MouseEvent } from 'react';
import {
  ArrowDown,
  Mail,
  MapPin,
  GraduationCap,
  Copy,
  Check,
  Play,
  FileCode,
  Bot,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useScrambleText } from '../hooks/useScrambleText';
import { profileData } from '../data/profile';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

export const HeroSection: FC = () => {
  const { language, t } = useLanguage();
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState<'code' | 'output' | 'ai'>('code');
  const [isCompiling, setIsCompiling] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([
    '$ pnpm run verify:candidate-profile',
    '✓ Target: Trương Thiện Thư (IT Student)',
    '✓ Campus: Đại học Bình Dương – Phân hiệu Cà Mau',
    '✓ Architecture: Modular Systems & Clean Code',
    '✓ Core Projects: ALTF4 Hotel, EquipTrack, CPU Simulator',
    'STATUS: 0 ERRORS · ALL CHECKS PASSED',
  ]);

  const rawRoleText =
    language === 'vi'
      ? 'Định hướng Kỹ thuật Phần mềm & AI'
      : 'Web, Software & AI Engineering Focus';

  const { displayText: scrambledRole, replay: replayScramble } = useScrambleText(rawRoleText, 30);

  // ── Orbit entrance animation (runs once on mount) ──────────────────────────
  useEffect(() => {
    const html = document.documentElement;
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mql.matches) return; // Respect reduced-motion

    html.classList.add('orbit-intro');

    // Failsafe: remove after 5 s even if fonts never load
    const failsafe = setTimeout(() => {
      html.classList.remove('orbit-intro', 'orbit-play');
    }, 5000);

    const start = () => {
      html.classList.add('orbit-play');

      // Clean up after last CTA button animation ends (~1.69 s)
      const cleanup = setTimeout(() => {
        html.classList.remove('orbit-intro', 'orbit-play');
      }, 3000);

      return cleanup;
    };

    let cleanupTimer: ReturnType<typeof setTimeout>;

    document.fonts.ready.then(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          cleanupTimer = start();
        });
      });
    }).catch(() => {
      // Font API unavailable — start immediately
      setTimeout(() => {
        cleanupTimer = start();
      }, 700);
    });

    return () => {
      clearTimeout(failsafe);
      clearTimeout(cleanupTimer);
      html.classList.remove('orbit-intro', 'orbit-play');
    };
  }, []);

  const developerCodeSnippet = `// developer.config.ts
export const candidate = {
  name: "Trương Thiện Thư",
  role: "IT Student / Web Developer",
  university: "BDU Ca Mau Campus",
  academicYear: "Year 2/3 (2024 - Present)",
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

  const handleRunScript = () => {
    setIsCompiling(true);
    setConsoleLogs(['$ initiating live simulation build...']);
    setTimeout(() => {
      setConsoleLogs((prev) => [
        ...prev,
        '> analyzing software modules: [ALTF4_HOTEL, EQUIPTRACK, CPU_SCHEDULER]',
        '> database migrations: MySQL relational schema verified',
        '> docker container runtime: MinIO object storage connected',
        '✓ ALL COMPILATION TARGETS BUILT IN 128ms',
        'STATUS: PRODUCTION READY · CANDIDATE VERIFIED',
      ]);
      setIsCompiling(false);
    }, 600);
  };

  const handleScrollToSection = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    /*
     * NOTE: id="hero" is on the <section> in App.tsx, NOT here.
     * This component only renders its internal layout.
     * Padding-top is 0 because orbit-scroll-body already accounts
     * for the fixed header height.
     */
    <div className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* ── Left Column ── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Live Status Pill */}
            <div className="orbit-anim-brand orbit-status-pill mb-6">
              <span className="orbit-dot" />
              <span>
                {language === 'vi'
                  ? 'Sinh viên CNTT · Sẵn sàng thực tập Web & Software'
                  : 'IT Undergraduate · Open to Web & Software Roles'}
              </span>
            </div>

            {/* Name — line reveal */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-[1.1] mb-4"
              style={{ color: '#ffffff' }}
            >
              <span className="orbit-ln block">
                <span className="orbit-ln-i" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  {language === 'vi' ? 'Xin chào, tôi là' : "Hi, I'm"}
                </span>
              </span>
              <span className="orbit-ln block">
                <span className="orbit-ln-i orbit-headline-gradient">
                  {profileData.name}
                </span>
              </span>
            </h1>

            {/* Sub-headline: Role & Direction */}
            <div
              onMouseEnter={replayScramble}
              className="flex flex-wrap items-center gap-2 text-base sm:text-xl font-heading font-semibold mb-4 cursor-pointer group"
              style={{ color: 'rgba(255,255,255,0.75)' }}
              title="Click hoặc rê chuột để kích hoạt Matrix Decoding"
            >
              <span>{t(profileData.role)}</span>
              <span style={{ color: 'var(--color-cyan)' }}>·</span>
              <span className="font-mono tracking-wide underline underline-offset-4 group-hover:decoration-cyan-400" style={{ color: 'var(--color-cyan)', textDecorationColor: 'rgba(112,224,255,0.35)' }}>
                {scrambledRole}
              </span>
            </div>

            {/* Institution & Location Pills */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-mono mb-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}>
                <GraduationCap className="w-4 h-4" style={{ color: 'var(--color-indigo)' }} />
                {t(profileData.university)}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}>
                <MapPin className="w-4 h-4" style={{ color: 'var(--color-cyan)' }} />
                {t(profileData.location)}
              </span>
            </div>

            {/* Concise Bio — Orbit sub animation */}
            <p className="orbit-anim-p max-w-xl text-sm sm:text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.60)' }}>
              {t(profileData.shortBio)}
            </p>

            {/* Dual CTAs — Orbit btn animation */}
            <div className="orbit-anim-cta flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <a
                href="#projects"
                onClick={(e) => handleScrollToSection(e, 'projects')}
                className="orbit-btn-solid ember-btn inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading font-bold text-xs sm:text-sm focus:outline-none"
              >
                <span>{language === 'vi' ? 'Xem các dự án thực tế' : 'Explore Featured Projects'}</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollToSection(e, 'contact')}
                className="orbit-btn-ghost ember-btn inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading font-bold text-xs sm:text-sm"
              >
                <Mail className="w-4 h-4" style={{ color: 'var(--color-cyan)' }} />
                <span>{language === 'vi' ? 'Liên hệ với tôi' : 'Get in Touch'}</span>
              </a>
            </div>

            {/* Social Proof & Quick Channels */}
            <div className="flex items-center gap-3 pt-2 text-xs font-mono" style={{ color: 'rgba(255,255,255,0.45)' }}>
              <span className="text-[11px] uppercase tracking-wider">
                {language === 'vi' ? 'Kênh kết nối:' : 'Channels:'}
              </span>

              {profileData.contact.githubUrl ? (
                <a
                  href={profileData.contact.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl transition-colors"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-cyan)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              ) : (
                <span
                  className="px-2.5 py-0.5 rounded text-[11px] font-mono"
                  style={{ color: 'rgba(255,255,255,0.30)', background: 'rgba(255,255,255,0.04)' }}
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
                  className="p-2 rounded-xl transition-colors"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-cyan)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              ) : (
                <span
                  className="px-2.5 py-0.5 rounded text-[11px] font-mono"
                  style={{ color: 'rgba(255,255,255,0.30)', background: 'rgba(255,255,255,0.04)' }}
                  title="LinkedIn link: Cần bổ sung"
                >
                  LinkedIn (TODO)
                </span>
              )}
            </div>
          </div>

          {/* Right Column: Interactive Cyber IDE & AI Copilot Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Space glow accents */}
            <div className="orbit-glow-cyan absolute -top-12 -right-12 w-52 h-52 -z-10 opacity-60" />
            <div className="orbit-glow-indigo absolute -bottom-12 -left-12 w-48 h-48 -z-10 opacity-50" />

            <div className="relative rounded-2xl overflow-hidden cyber-corners glass-panel" style={{ border: '1px solid rgba(112,224,255,0.18)', boxShadow: '0 0 40px rgba(112,224,255,0.05), 0 24px 60px rgba(0,0,0,0.5)' }}>
              {/* Animated Radar Scanning Line */}
              <div className="cyber-scanline" />

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
                    onClick={() => setActiveTab('ai')}
                    type="button"
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
                      activeTab === 'ai'
                        ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Bot className="w-3 h-3 text-cyan-400 animate-pulse" />
                    <span>copilot.ai</span>
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
                    <Terminal className="w-3 h-3 text-emerald-400" />
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
              {activeTab === 'code' && (
                <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto selection:bg-cyan-500/30 flex min-h-[220px]">
                  {/* Line Numbers */}
                  <div
                    className="select-none pr-3 text-right text-slate-600 space-y-1 font-mono text-[11px]"
                    aria-hidden="true"
                  >
                    <div>01</div>
                    <div>02</div>
                    <div>03</div>
                    <div>04</div>
                    <div>05</div>
                    <div>06</div>
                    <div>07</div>
                    <div>08</div>
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
                      <span className="text-indigo-300">coreStack</span>: [
                      <span className="text-emerald-300">"PHP"</span>,{' '}
                      <span className="text-emerald-300">"React"</span>,{' '}
                      <span className="text-emerald-300">"MySQL"</span>,{' '}
                      <span className="text-emerald-300">"Docker"</span>],
                    </p>
                    <p className="pl-3">
                      <span className="text-indigo-300">mindset</span>:{' '}
                      <span className="text-emerald-300">"Clean Code & Architecture"</span>,
                    </p>
                    <p className="pl-3">
                      <span className="text-indigo-300">readyForInternship</span>:{' '}
                      <span className="text-emerald-400 font-bold">true</span>,
                    </p>
                    <p>
                      &#125;;
                      <span className="inline-block w-1.5 h-3 bg-cyan-400 ml-1 animate-cursor" />
                    </p>
                  </div>
                </div>
              )}

              {/* AI Copilot Tab Content */}
              {activeTab === 'ai' && (
                <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed text-slate-300 space-y-3 bg-[#060A13] min-h-[220px]">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-cyan-400">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>NEURAL SYNTHESIS ENGINE</span>
                    </span>
                    <span className="text-emerald-400">MODEL: GEMINI-PRO / AGY</span>
                  </div>

                  <p className="text-slate-400">
                    <span className="text-purple-400 font-bold">PROMPT &gt;</span> "Analyze Thiện Thư engineering suitability for web/software projects"
                  </p>

                  <div className="space-y-1.5 pl-3 border-l-2 border-cyan-500/40 text-slate-300">
                    <p className="text-cyan-300 font-semibold">&gt; KEY CAPABILITIES DETECTED:</p>
                    <p>• Multi-tier Coursework: ALTF4 Hotel (PHP/MySQL), EquipTrack (MinIO/Docker)</p>
                    <p>• Systems & Algorithms: CPU Scheduling Simulator</p>
                    <p>• Learning Velocity: High adaptation to modern stacks</p>
                  </div>

                  <div className="pt-2 text-emerald-400 font-bold flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>RECOMMENDATION: QUALIFIED FOR INTERNSHIP & TEAM INTEGRATION</span>
                  </div>
                </div>
              )}

              {/* Console Output Tab */}
              {activeTab === 'output' && (
                <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed text-slate-300 space-y-2 bg-[#060A13] min-h-[220px]">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px]">
                    <span className="text-slate-400">TERMINAL SESSION #01</span>
                    <button
                      onClick={handleRunScript}
                      disabled={isCompiling}
                      type="button"
                      className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 border border-emerald-500/30 flex items-center gap-1 font-semibold transition-colors disabled:opacity-50"
                    >
                      <Play className="w-3 h-3" />
                      <span>{isCompiling ? 'Running...' : 'Run Simulation'}</span>
                    </button>
                  </div>

                  <div className="space-y-1">
                    {consoleLogs.map((log, idx) => (
                      <p
                        key={idx}
                        className={
                          log.startsWith('✓') || log.startsWith('STATUS:')
                            ? 'text-emerald-400 font-bold'
                            : log.startsWith('>')
                            ? 'text-cyan-400'
                            : 'text-slate-400'
                        }
                      >
                        {log}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Window Status Bar */}
              <div className="px-4 py-2 border-t border-slate-800 text-[11px] font-mono text-slate-500 flex items-center justify-between bg-[#080d1a]">
                <span className="text-cyan-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  <span>TypeScript 5.8 · Copilot Active</span>
                </span>
                <span>UTF-8 · LF</span>
              </div>
            </div>

            {/* Floating Satellite Badges */}
            <div className="absolute -top-3 -right-3 px-3 py-1 rounded-xl bg-slate-900/95 border border-cyan-500/50 text-cyan-300 text-xs font-mono shadow-2xl backdrop-blur-md animate-float hidden sm:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Full-Stack Web Logic</span>
            </div>

            <div className="absolute -bottom-3 -left-3 px-3 py-1 rounded-xl bg-slate-900/95 border border-indigo-500/50 text-indigo-300 text-xs font-mono shadow-2xl backdrop-blur-md animate-float-reverse hidden sm:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              <span>AI & CS Fundamentals</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
