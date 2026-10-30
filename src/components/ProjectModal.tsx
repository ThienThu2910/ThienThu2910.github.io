import { useEffect, type FC } from 'react';
import { X, ExternalLink, CheckCircle2, AlertCircle, Wrench, FileCode2 } from 'lucide-react';
import type { ProjectItem } from '../types';
import { useLanguage } from '../hooks/useLanguage';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: FC<ProjectModalProps> = ({ project, onClose }) => {
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-[#0A101D] border border-slate-200 dark:border-white/[0.12] shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-200 dark:border-white/[0.08]">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                {t(project.category)}
              </span>
              <span
                className={`text-xs font-mono px-3 py-1 rounded-full border ${
                  project.status === 'completed'
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
                    : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30'
                }`}
              >
                {t(project.statusText)}
              </span>
            </div>
            <h3
              id="modal-project-title"
              className="text-xl sm:text-3xl font-heading font-extrabold text-slate-900 dark:text-white"
            >
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-2 rounded-2xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-colors focus:outline-none"
            aria-label="Đóng cửa sổ"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-6 py-5 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
          {/* Problem Statement */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20">
            <h4 className="font-heading font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2 text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <AlertCircle className="w-4 h-4 text-amber-500" />
              {language === 'vi' ? 'Bối cảnh & Bài toán cần giải quyết' : 'Problem Statement'}
            </h4>
            <p className="text-slate-700 dark:text-slate-200">
              {t(project.problemStatement)}
            </p>
          </div>

          {/* Solution & Features */}
          <div>
            <h4 className="font-heading font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3 text-xs uppercase tracking-wider text-indigo-600 dark:text-cyan-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              {language === 'vi' ? 'Giải pháp & Chức năng chính' : 'Key Solutions & Features'}
            </h4>
            <ul className="space-y-2.5">
              {project.solutionAndFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/[0.05]">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span>{t(feat)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Personal Role */}
          <div className="p-4 sm:p-5 rounded-2xl bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-500/20">
            <h4 className="font-heading font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2 text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              <Wrench className="w-4 h-4 text-indigo-500" />
              {language === 'vi' ? 'Vai trò cá nhân trong đồ án' : 'Personal Contribution'}
            </h4>
            <p className="text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
              {t(project.personalRole)}
            </p>
          </div>

          {/* Technical Highlights */}
          <div>
            <h4 className="font-heading font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3 text-xs uppercase tracking-wider text-indigo-600 dark:text-cyan-400">
              <FileCode2 className="w-4 h-4 text-cyan-400" />
              {language === 'vi' ? 'Điểm kỹ thuật đáng chú ý' : 'Technical Highlights'}
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.technicalHighlights.map((hl, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/[0.05] flex items-start gap-3"
                >
                  <span className="font-mono text-xs font-bold text-cyan-500 mt-0.5">
                    0{idx + 1}.
                  </span>
                  <span className="text-sm">{t(hl)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.08]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="pt-5 border-t border-slate-200 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 transition-opacity"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] cursor-not-allowed"
                title="Mã nguồn đang được bảo vệ nội bộ hoặc hoàn thiện"
              >
                <GithubIcon className="w-3.5 h-3.5 opacity-50" />
                <span>{language === 'vi' ? 'Mã nguồn: Cần bổ sung link' : 'Source: Pending'}</span>
              </span>
            )}

            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-600 to-cyan-500 text-white"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            ) : (
              <span
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] cursor-not-allowed"
                title="Bản demo môi trường cục bộ"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{language === 'vi' ? 'Demo: Cần bổ sung link' : 'Demo: Pending'}</span>
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            type="button"
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-colors"
          >
            {language === 'vi' ? 'Đóng lại' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
