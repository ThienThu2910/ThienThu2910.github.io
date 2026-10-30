import { useState, useEffect, type FC } from 'react';
import {
  Search,
  Sparkles,
  ArrowRight,
  Sun,
  Moon,
  Globe,
  Copy,
  Check,
  Code2,
  FolderGit2,
  GraduationCap,
  X,
  Bot,
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useTheme } from '../hooks/useTheme';
import { profileData } from '../data/profile';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AIAnswer {
  q: { vi: string; en: string };
  a: { vi: string; en: string };
}

const AI_KNOWLEDGE: AIAnswer[] = [
  {
    q: {
      vi: 'Điểm mạnh kỹ thuật cốt lõi của Thiện Thư là gì?',
      en: "What are Thiện Thư's core technical strengths?",
    },
    a: {
      vi: 'Tư duy cấu trúc dữ liệu & giải thuật chắc chắn, kinh nghiệm lập trình backend với PHP/MySQL và frontend với React/TypeScript/Tailwind, kiến trúc hệ thống module hóa sạch sẽ.',
      en: 'Solid CS fundamentals in data structures & algorithms, full-stack hands-on experience (PHP, MySQL, React, TypeScript, Tailwind CSS), and clean modular system architecture.',
    },
  },
  {
    q: {
      vi: 'Thiện Thư có sẵn sàng tham gia thực tập không?',
      en: 'Is Thiện Thư open for internships?',
    },
    a: {
      vi: 'Có! Thiện Thư là sinh viên năm thứ 2/3 ngành CNTT tại ĐH Bình Dương (Cà Mau), rất tích cực tìm kiếm cơ hội thực tập Web Development hoặc Software Engineering.',
      en: 'Yes! Thiện Thư is an IT undergraduate student at BDU Ca Mau Campus, actively seeking internship opportunities in Web Development and Software Engineering.',
    },
  },
  {
    q: {
      vi: 'Dự án nào tiêu biểu nhất trong portfolio?',
      en: 'Which project is the most prominent showcase?',
    },
    a: {
      vi: 'ALTF4 HOTEL (quản lý khách sạn hoàn chỉnh với PHP & MySQL), EquipTrack (quản lý thiết bị với MinIO S3 & Docker Compose), và CPU Scheduling Simulator (mô phỏng điều phối tiến trình HĐH).',
      en: 'ALTF4 HOTEL (full hotel workflow with PHP & MySQL), EquipTrack (asset management with MinIO S3 & Docker Compose), and CPU Scheduling Simulator (OS process algorithms).',
    },
  },
];

export const CommandPalette: FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [query, setQuery] = useState('');
  const [selectedAIAnswer, setSelectedAIAnswer] = useState<AIAnswer | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or state
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const navigateTo = (sectionId: string) => {
    onClose();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyEmail = async () => {
    if (!profileData.contact.email) return;
    try {
      await navigator.clipboard.writeText(profileData.contact.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 pb-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        aria-hidden="true"
      />

      {/* Palette Window */}
      <div className="relative w-full max-w-2xl rounded-2xl bg-white dark:bg-[#080d19] border border-slate-200 dark:border-white/[0.12] shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-white/[0.08] bg-slate-50/50 dark:bg-white/[0.02]">
          <Search className="w-5 h-5 text-cyan-500 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              language === 'vi'
                ? 'Tìm kiếm section, thao tác nhanh, hoặc hỏi AI...'
                : 'Search sections, quick actions, or ask AI copilot...'
            }
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none font-mono"
            autoFocus
          />
          <button
            onClick={onClose}
            type="button"
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white"
            aria-label="Close Command Palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Palette Content Area */}
        <div className="p-4 sm:p-5 max-h-[65vh] overflow-y-auto space-y-6">
          {/* AI Copilot Knowledge Section */}
          <div>
            <div className="flex items-center justify-between mb-3 text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <Bot className="w-4 h-4 text-cyan-400" />
                <span>{language === 'vi' ? 'Hỏi nhanh AI Copilot' : 'AI Copilot Quick Queries'}</span>
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                GPT / GEMINI READY
              </span>
            </div>

            <div className="space-y-2">
              {AI_KNOWLEDGE.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedAIAnswer(item)}
                  type="button"
                  className="w-full text-left p-3 rounded-xl bg-slate-100/70 dark:bg-white/[0.03] hover:bg-cyan-500/10 dark:hover:bg-cyan-500/10 border border-slate-200/80 dark:border-white/[0.06] hover:border-cyan-500/30 transition-all flex items-center justify-between group"
                >
                  <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-cyan-500 dark:group-hover:text-cyan-400">
                    {t(item.q)}
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
                </button>
              ))}
            </div>

            {/* Display Selected AI Answer */}
            {selectedAIAnswer && (
              <div className="mt-3 p-4 rounded-xl bg-indigo-500/10 dark:bg-cyan-500/10 border border-indigo-500/20 dark:border-cyan-500/30 text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200 animate-fadeIn">
                <div className="flex items-center gap-2 mb-1.5 font-mono font-bold text-xs text-indigo-600 dark:text-cyan-400">
                  <Bot className="w-3.5 h-3.5" />
                  <span>AI SYNTHESIS:</span>
                </div>
                <p>{t(selectedAIAnswer.a)}</p>
              </div>
            )}
          </div>

          {/* Quick Navigation Sections */}
          <div>
            <span className="text-[11px] font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2.5">
              {language === 'vi' ? 'Điều hướng trang' : 'Navigation'}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              <button
                onClick={() => navigateTo('about')}
                type="button"
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/[0.05] text-slate-700 dark:text-slate-300 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-indigo-500" />
                  <span>{language === 'vi' ? 'Về bản thân' : 'About Me'}</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>

              <button
                onClick={() => navigateTo('skills')}
                type="button"
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/[0.05] text-slate-700 dark:text-slate-300 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-500" />
                  <span>{language === 'vi' ? 'Kỹ năng chuyên môn' : 'Tech Stack'}</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>

              <button
                onClick={() => navigateTo('projects')}
                type="button"
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/[0.05] text-slate-700 dark:text-slate-300 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <FolderGit2 className="w-4 h-4 text-emerald-500" />
                  <span>{language === 'vi' ? 'Dự án thực tế' : 'Featured Projects'}</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>

              <button
                onClick={() => navigateTo('education')}
                type="button"
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/[0.05] text-slate-700 dark:text-slate-300 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-amber-500" />
                  <span>{language === 'vi' ? 'Học vấn & Đào tạo' : 'Education'}</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Quick Controls */}
          <div className="pt-3 border-t border-slate-200 dark:border-white/[0.08]">
            <span className="text-[11px] font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2.5">
              {language === 'vi' ? 'Thao tác nhanh' : 'Quick Actions'}
            </span>

            <div className="flex flex-wrap gap-2 text-xs">
              <button
                onClick={toggleTheme}
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-white/[0.05] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-300 transition-colors font-mono"
              >
                {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-500" />}
                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </button>

              <button
                onClick={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-white/[0.05] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-300 transition-colors font-mono"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>{language === 'vi' ? 'Chuyển sang English' : 'Chuyển sang Tiếng Việt'}</span>
              </button>

              {profileData.contact.email && (
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-white/[0.05] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-300 transition-colors font-mono"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied Email' : 'Copy Email'}</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Footer Shortcut Bar */}
        <div className="px-4 py-2.5 bg-slate-100/60 dark:bg-black/40 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/[0.1] text-slate-700 dark:text-slate-300">
                ESC
              </kbd>{' '}
              đóng
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/[0.1] text-slate-700 dark:text-slate-300">
                ⌘K
              </kbd>{' '}
              toggle
            </span>
          </div>
          <span className="text-cyan-600 dark:text-cyan-400 font-semibold">AI HUD v2.5</span>
        </div>
      </div>
    </div>
  );
};
