import type { FC } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center' : 'text-left'}`}>
      <div
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-wider uppercase mb-3.5 border ${
          isCenter ? 'mx-auto' : ''
        } bg-indigo-500/10 text-indigo-500 dark:text-cyan-400 border-indigo-500/20 shadow-sm`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        <span>{eyebrow}</span>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="max-w-2xl text-sm sm:text-base text-slate-600 dark:text-slate-400 mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
