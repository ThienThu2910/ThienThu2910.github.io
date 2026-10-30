import { useState, type FC } from 'react';
import {
  Code2,
  Server,
  Database,
  Sparkles,
  Layers,
  Terminal,
  Cpu,
  Boxes,
  FileCode,
  Globe,
  GitBranch,
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { SectionHeading } from '../components/SectionHeading';
import { skillCategories } from '../data/skills';
import type { SkillProficiency } from '../types';

export const SkillsSection: FC = () => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getSkillIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'html5 / css3':
      case 'bootstrap':
        return <Globe className="w-5 h-5 text-indigo-400" />;
      case 'javascript (es6+)':
      case 'typescript':
        return <FileCode className="w-5 h-5 text-amber-400" />;
      case 'react':
      case 'tailwind css':
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'php':
      case 'c# / .net':
      case 'node.js':
        return <Server className="w-5 h-5 text-purple-400" />;
      case 'c++':
        return <Cpu className="w-5 h-5 text-teal-400" />;
      case 'mysql':
      case 'microsoft sql server':
      case 'minio object storage':
        return <Database className="w-5 h-5 text-blue-400" />;
      case 'docker':
        return <Boxes className="w-5 h-5 text-sky-400" />;
      case 'git & github':
        return <GitBranch className="w-5 h-5 text-orange-400" />;
      case 'vs code':
      case 'postman':
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      default:
        return <Code2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  const proficiencyMeta: Record<
    SkillProficiency,
    { vi: string; en: string; badge: string }
  > = {
    comfortable: {
      vi: 'Thành thạo trong đồ án',
      en: 'Coursework Proficient',
      badge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25',
    },
    familiar: {
      vi: 'Đã thực hành / Nắm vững',
      en: 'Practiced & Familiar',
      badge: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/25',
    },
    learning: {
      vi: 'Đang tiếp tục rèn luyện',
      en: 'Currently Exploring',
      badge: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/25',
    },
  };

  const displayedCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={language === 'vi' ? 'Công nghệ & Năng lực' : 'Tech Stack & Skills'}
          title={language === 'vi' ? 'Hệ thống kỹ năng chuyên môn' : 'Technologies & Tools'}
          subtitle={
            language === 'vi'
              ? 'Phân loại chân thực dựa trên kinh nghiệm thực hành và triển khai đồ án thực tế, không dùng thanh phần trăm ảo.'
              : 'Classified honestly based on coursework experience, lab exercises, and practical implementations.'
          }
        />

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            type="button"
            className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md shadow-indigo-500/25 scale-105'
                : 'glass-panel text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {language === 'vi' ? 'Tất cả lĩnh vực' : 'All Categories'}
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              type="button"
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md shadow-indigo-500/25 scale-105'
                  : 'glass-panel text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t(cat.title)}
            </button>
          ))}
        </div>

        {/* Skills Grid by Category */}
        <div className="space-y-10">
          {displayedCategories.map((cat) => (
            <div key={cat.id} className="p-6 sm:p-8 rounded-3xl glass-panel relative overflow-hidden">
              {/* Category Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-white/[0.08]">
                <div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 dark:text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>{t(cat.title)}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {t(cat.description)}
                  </p>
                </div>

                <span className="text-xs font-mono text-cyan-500 dark:text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                  {cat.skills.length} {language === 'vi' ? 'công nghệ' : 'technologies'}
                </span>
              </div>

              {/* Skills Tiles Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                {cat.skills.map((skill) => {
                  const meta = proficiencyMeta[skill.proficiency];
                  return (
                    <div
                      key={skill.name}
                      className="p-4 rounded-2xl bg-slate-100/60 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06] hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-all hover:-translate-y-1 hover:shadow-lg flex items-center justify-between gap-3 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/[0.08] shadow-sm group-hover:scale-110 transition-transform">
                          {getSkillIcon(skill.name)}
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-slate-100 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                            {skill.name}
                          </h4>
                          <span
                            className={`inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-mono border ${meta.badge}`}
                          >
                            {meta[language]}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
