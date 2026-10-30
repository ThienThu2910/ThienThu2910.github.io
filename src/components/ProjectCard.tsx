import type { FC } from 'react';
import { ExternalLink, ArrowUpRight, Cpu, Wrench } from 'lucide-react';
import type { ProjectItem } from '../types';
import { useLanguage } from '../hooks/useLanguage';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: FC<ProjectCardProps> = ({ project, onSelect }) => {
  const { language, t } = useLanguage();

  const renderMockupBanner = () => {
    if (project.id === 'altf4-hotel') {
      return (
        <div className="w-full h-full p-4 sm:p-5 flex flex-col justify-between bg-gradient-to-br from-indigo-950 via-slate-900 to-[#080d1a] relative overflow-hidden font-mono text-xs text-slate-300">
          {/* Mockup Window Top */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[10px] sm:text-[11px] text-cyan-400 font-semibold ml-1.5 tracking-wider truncate max-w-[120px] sm:max-w-none">
                ALTF4 HOTEL DASHBOARD
              </span>
            </div>
            <span className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
              MySQL Active
            </span>
          </div>

          {/* Room Inventory Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 my-2 sm:my-3">
            <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] flex flex-col justify-between">
              <span className="text-[9px] text-slate-400">ROOM #101</span>
              <span className="text-emerald-400 font-bold text-xs truncate">Deluxe Suite</span>
              <span className="text-[9px] text-emerald-400/80">Booked</span>
            </div>
            <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] flex flex-col justify-between">
              <span className="text-[9px] text-slate-400">ROOM #102</span>
              <span className="text-cyan-400 font-bold text-xs truncate">Standard King</span>
              <span className="text-[9px] text-cyan-400/80">Available</span>
            </div>
            <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] col-span-2 sm:col-span-1 flex flex-col justify-between">
              <span className="text-[9px] text-slate-400">BILLING</span>
              <span className="text-amber-400 font-bold text-xs truncate">Invoicing Engine</span>
              <span className="text-[9px] text-slate-400">Session Auth</span>
            </div>
          </div>

          {/* Mockup Subbar */}
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 pt-2 border-t border-white/[0.06]">
            <span>PHP Backend · Role-Based Auth</span>
            <span className="text-cyan-300">Bootstrap 5</span>
          </div>
        </div>
      );
    }

    if (project.id === 'equiptrack') {
      return (
        <div className="w-full h-full p-4 sm:p-5 flex flex-col justify-between bg-gradient-to-br from-cyan-950 via-slate-900 to-[#080d1a] relative overflow-hidden font-mono text-xs text-slate-300">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[10px] sm:text-[11px] text-cyan-300 font-semibold tracking-wider truncate max-w-[140px] sm:max-w-none">
                EQUIPTRACK NODE
              </span>
            </div>
            <span className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shrink-0">
              Docker Compose: UP
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-3 my-2 sm:my-3">
            <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
              <span className="text-[9px] text-indigo-300 block mb-0.5">OBJECT STORAGE</span>
              <p className="text-xs font-bold text-white truncate">MinIO S3 Buckets</p>
              <p className="text-[9px] text-slate-400 mt-0.5">Asset Receipt Photos</p>
            </div>
            <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
              <span className="text-[9px] text-emerald-300 block mb-0.5">LOAN VALIDATOR</span>
              <p className="text-xs font-bold text-white truncate">State Machine</p>
              <p className="text-[9px] text-slate-400 mt-0.5">Zero Double Loans</p>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 pt-2 border-t border-white/[0.06]">
            <span>Asset Handover Workflow</span>
            <span className="text-cyan-300">MinIO · MySQL · API</span>
          </div>
        </div>
      );
    }

    // CPU Process Scheduling Simulator
    return (
      <div className="w-full h-full p-4 sm:p-5 flex flex-col justify-between bg-gradient-to-br from-teal-950 via-slate-900 to-[#080d1a] relative overflow-hidden font-mono text-xs text-slate-300">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5">
          <div className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-teal-400" />
            <span className="text-[10px] sm:text-[11px] text-teal-300 font-semibold tracking-wider truncate max-w-[130px] sm:max-w-none">
              CPU SCHEDULER ENGINE
            </span>
          </div>
          <span className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] bg-teal-500/20 text-teal-300 border border-teal-500/30 shrink-0">
            FCFS & SJF Algorithms
          </span>
        </div>

        {/* Gantt Bar Visualization */}
        <div className="my-2 sm:my-3 space-y-1.5">
          <div className="flex items-center justify-between text-[9px] text-slate-400">
            <span>Execution Timeline</span>
            <span className="text-teal-400 font-bold">Avg Wait: 4.2ms</span>
          </div>
          <div className="flex w-full h-7 rounded-lg overflow-hidden border border-slate-700/80">
            <div className="w-1/3 bg-indigo-600/80 flex items-center justify-center font-bold text-[9px] sm:text-[10px] text-white">
              P1 [0-5]
            </div>
            <div className="w-1/4 bg-cyan-600/80 flex items-center justify-center font-bold text-[9px] sm:text-[10px] text-white border-l border-slate-700">
              P2 [5-9]
            </div>
            <div className="w-5/12 bg-teal-600/80 flex items-center justify-center font-bold text-[9px] sm:text-[10px] text-white border-l border-slate-700">
              P3 [9-16]
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 pt-2 border-t border-white/[0.06]">
          <span>Operating System Simulation</span>
          <span className="text-teal-300">C++ · Queues & Structs</span>
        </div>
      </div>
    );
  };

  return (
    <article className="group rounded-3xl glass-panel hover-lift flex flex-col overflow-hidden border border-slate-200/80 dark:border-white/[0.08] shadow-sm hover:shadow-2xl transition-all duration-300">
      {/* Mockup Preview Banner */}
      <div className="relative h-52 w-full border-b border-slate-200 dark:border-white/[0.08] overflow-hidden">
        {renderMockupBanner()}

        {/* Status Badge */}
        <div className="absolute top-3 right-3 z-10">
          <span
            className={`px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-medium border shadow-md backdrop-blur-md ${
              project.status === 'completed'
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
            }`}
          >
            {t(project.statusText)}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Category */}
          <span className="text-xs font-mono font-semibold text-indigo-600 dark:text-cyan-400 mb-2 block uppercase tracking-wider">
            {t(project.category)}
          </span>

          {/* Project Title */}
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors mb-3">
            {project.title}
          </h3>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
            {t(project.shortDescription)}
          </p>

          {/* Personal Role Box */}
          <div className="p-3 rounded-2xl bg-indigo-50/60 dark:bg-white/[0.03] border border-indigo-100 dark:border-white/[0.05] mb-5">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
              <Wrench className="w-3.5 h-3.5" />
              <span>{language === 'vi' ? 'Vai trò cá nhân:' : 'Personal Contribution:'}</span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-normal line-clamp-2">
              {t(project.personalRole)}
            </p>
          </div>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between gap-3">
          {/* Details CTA */}
          <button
            onClick={() => onSelect(project)}
            type="button"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-heading font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-md shadow-indigo-500/20 transition-all hover:scale-105 active:scale-95"
          >
            <span>{language === 'vi' ? 'Chi tiết giải pháp' : 'View Case Study'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {/* External links */}
          <div className="flex items-center gap-2">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-colors"
                title="Mã nguồn GitHub"
                aria-label="GitHub Repository"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            ) : (
              <span
                className="px-2.5 py-1 rounded-md text-[10px] font-mono text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-white/[0.04]"
                title="Mã nguồn đang hoàn thiện"
              >
                Code (TODO)
              </span>
            )}

            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-colors"
                title="Live Demo"
                aria-label="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
};
