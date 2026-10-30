import { useState, type FC } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { SectionHeading } from '../components/SectionHeading';
import { projectItems } from '../data/projects';
import type { ProjectItem } from '../types';
import { useLanguage } from '../hooks/useLanguage';
import { Code2, CheckCircle2, Clock } from 'lucide-react';

export const ProjectsSection: FC = () => {
  const { language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filter, setFilter] = useState<'all' | 'completed' | 'in-progress'>('all');

  const filteredProjects = projectItems.filter((project) => {
    if (filter === 'all') return true;
    return project.status === filter;
  });

  return (
    <section id="projects" className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={language === 'vi' ? 'Sản phẩm & Đồ án' : 'Featured Work'}
          title={language === 'vi' ? 'Các dự án tiêu biểu' : 'Featured Projects'}
          subtitle={
            language === 'vi'
              ? 'Mỗi đồ án gắn liền với bài toán thực tiễn, phân rõ vai trò cá nhân, giải pháp kỹ thuật và kiến trúc hệ thống đã thực thi.'
              : 'Coursework and practical systems with detailed problem analysis, personal contribution, and concrete architectural solutions.'
          }
        />

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter('all')}
            type="button"
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
              filter === 'all'
                ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md shadow-indigo-500/25 scale-105'
                : 'glass-panel text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>{language === 'vi' ? 'Tất cả (3)' : 'All Projects (3)'}</span>
          </button>

          <button
            onClick={() => setFilter('completed')}
            type="button"
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
              filter === 'completed'
                ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md shadow-indigo-500/25 scale-105'
                : 'glass-panel text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>{language === 'vi' ? 'Đã hoàn thành' : 'Completed'}</span>
          </button>

          <button
            onClick={() => setFilter('in-progress')}
            type="button"
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
              filter === 'in-progress'
                ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md shadow-indigo-500/25 scale-105'
                : 'glass-panel text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>{language === 'vi' ? 'Đang thực hiện' : 'In Progress'}</span>
          </button>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Modal for detail view */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
