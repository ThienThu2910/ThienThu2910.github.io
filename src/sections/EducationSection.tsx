import type { FC } from 'react';
import { Calendar, MapPin, BookCheck, Building2 } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { SectionHeading } from '../components/SectionHeading';
import { educationItems } from '../data/education';

export const EducationSection: FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="education" className="py-16 sm:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={language === 'vi' ? 'Học vấn & Đào tạo' : 'Academic Path'}
          title={language === 'vi' ? 'Quá trình học vấn' : 'Education & Training'}
          subtitle={
            language === 'vi'
              ? 'Nền tảng đào tạo chính quy ngành Công nghệ Thông tin tại trường Đại học, kết hợp tinh thần kỷ luật và tự nghiên cứu.'
              : 'Formal undergraduate Computer Science education paired with rigorous self-learning and coursework projects.'
          }
        />

        <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/30 dark:border-cyan-500/20 space-y-8">
          {educationItems.map((item) => (
            <div key={item.id} className="relative group">
              {/* Glowing Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-4 border-cyan-500 dark:border-cyan-400 group-hover:scale-125 transition-transform duration-300 shadow-md shadow-cyan-500/50" />

              <div className="p-6 sm:p-8 rounded-3xl glass-panel hover-lift border border-slate-200/80 dark:border-white/[0.08]">
                {/* Period & Status Badges */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 font-medium">
                    {t(item.status)}
                  </span>
                </div>

                {/* Degree & Institution */}
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900 dark:text-white mb-2">
                  {t(item.degree)}
                </h3>

                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300 mb-6 font-medium">
                  <span className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-cyan-400">
                    <Building2 className="w-4 h-4" />
                    <span className="font-semibold">{t(item.institution)}</span>
                  </span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    {t(item.location)}
                  </span>
                </div>

                {/* Key Coursework Focus */}
                <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08]">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                    <BookCheck className="w-4 h-4 text-cyan-500" />
                    <span>{language === 'vi' ? 'Nội dung đào tạo trọng tâm' : 'Key Coursework & Competencies'}</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {item.highlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                        <span className="leading-relaxed">{t(hl)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
