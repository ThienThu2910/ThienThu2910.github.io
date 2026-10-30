import type { FC } from 'react';
import { BookOpen, Target, CheckCircle2, Cpu, Database, Code2, Compass } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { SectionHeading } from '../components/SectionHeading';
import { profileData } from '../data/profile';

export const AboutSection: FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={language === 'vi' ? 'Hành trình & Tư duy' : 'Background & Mindset'}
          title={language === 'vi' ? 'Về bản thân tôi' : 'About Me'}
          subtitle={
            language === 'vi'
              ? 'Tập trung rèn luyện tư duy lập trình vững chắc, kiến trúc phần mềm chuẩn mực và không ngừng cải thiện kỹ năng qua từng đồ án.'
              : 'Focused on solid computer science fundamentals, modular software architecture, and continuous growth through hands-on coursework.'
          }
        />

        {/* Modern Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {/* Bento Card 1: Main Story (8 Cols) */}
          <div className="md:col-span-7 lg:col-span-8 p-6 sm:p-8 rounded-3xl glass-panel hover-lift relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center mb-5">
                <BookOpen className="w-5 h-5" />
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white mb-4">
                {language === 'vi' ? 'Đam mê xây dựng phần mềm thực tế' : 'Turning Logic into Reliable Software'}
              </h3>

              <div className="space-y-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  {language === 'vi'
                    ? 'Tôi là sinh viên năm thứ hai chuyên ngành Công nghệ Thông tin tại Đại học Bình Dương (Phân hiệu Cà Mau). Trong học tập, tôi đặc biệt chú trọng việc nắm vững bản chất của cấu trúc dữ liệu, giải thuật và các mô hình kiến trúc phần mềm.'
                    : 'I am a 2nd-year Information Technology student at Binh Duong University (Ca Mau Campus). I dedicate myself to mastering foundational data structures, algorithmic design, and standardized software patterns.'}
                </p>
                <p>
                  {language === 'vi'
                    ? 'Thay vì chỉ học lý thuyết, tôi chủ động hiện thực hóa các bài toán quản trị và mô phỏng thực tế qua đồ án như hệ thống quản lý khách sạn ALTF4, quản lý thiết bị EquipTrack và chương trình mô phỏng điều phối CPU.'
                    : 'Rather than purely theoretical learning, I actively translate real-world workflows into practical coursework implementations, ranging from hotel management systems and equipment tracking to OS CPU schedulers.'}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200 dark:border-white/[0.08] flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5 text-indigo-500 dark:text-indigo-400">
                <Code2 className="w-4 h-4" />
                Clean Code Architecture
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 text-cyan-500 dark:text-cyan-400">
                <Database className="w-4 h-4" />
                Relational Modeling
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 text-emerald-500 dark:text-emerald-400">
                <Cpu className="w-4 h-4" />
                Systems Logic
              </span>
            </div>
          </div>

          {/* Bento Card 2: Academic Profile & Snapshot (5 Cols) */}
          <div className="md:col-span-5 lg:col-span-4 p-6 sm:p-8 rounded-3xl glass-panel hover-lift flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center mb-5">
                <Compass className="w-5 h-5" />
              </div>

              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-4">
                {language === 'vi' ? 'Hồ sơ học thuật' : 'Academic Snapshot'}
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06]">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                    {language === 'vi' ? 'Trường Đại học' : 'Institution'}
                  </span>
                  <p className="font-semibold text-slate-800 dark:text-slate-100">
                    {t(profileData.university)}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06]">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                    {language === 'vi' ? 'Tiến độ' : 'Status'}
                  </span>
                  <p className="font-semibold text-cyan-600 dark:text-cyan-400">
                    {t(profileData.academicYear)} · CNTT
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06]">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                    {language === 'vi' ? 'Mục tiêu' : 'Career Focus'}
                  </span>
                  <p className="font-semibold text-indigo-600 dark:text-indigo-400">
                    {t(profileData.direction)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 3: Engineering Approach (6 Cols) */}
          <div className="md:col-span-6 p-6 sm:p-8 rounded-3xl glass-panel hover-lift">
            <div className="flex items-center gap-2.5 mb-5 text-indigo-600 dark:text-indigo-400">
              <Target className="w-5 h-5" />
              <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                {language === 'vi' ? 'Quy trình giải quyết bài toán' : 'Engineering Workflow'}
              </h3>
            </div>

            <div className="space-y-3">
              {profileData.aboutDetails.approach.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-100/50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.05]"
                >
                  <span className="w-6 h-6 rounded-lg bg-indigo-500/10 text-indigo-500 dark:text-cyan-400 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-normal">
                    {t(step)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bento Card 4: Technical Strengths (6 Cols) */}
          <div className="md:col-span-6 p-6 sm:p-8 rounded-3xl glass-panel hover-lift">
            <div className="flex items-center gap-2.5 mb-5 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
              <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                {language === 'vi' ? 'Điểm mạnh & Nguyên tắc làm việc' : 'Core Principles & Strengths'}
              </h3>
            </div>

            <div className="space-y-3">
              {profileData.aboutDetails.highlights.map((hl, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-100/50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.05]"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 mt-2" />
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-normal">
                    {t(hl)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
