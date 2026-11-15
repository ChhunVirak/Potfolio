import type { ReactNode } from 'react';

type FeatureSectionProps = React.PropsWithChildren<{
  id: string;
  title: string;
  /**
   * `aside`: small label in a left column, content to its right (timeline sections).
   * `stacked`: large heading above the content (Work, Writing, Blog).
   */
  layout?: 'aside' | 'stacked';
  /** Right-aligned extra next to a stacked heading — a date range or a link. */
  meta?: ReactNode;
  subtitle?: string;
  /** Article count shown next to a stacked heading, as "N articles". */
  badge?: number;
  /** Override top spacing; defaults to 72px on mobile, 96px from md up. */
  className?: string;
}>;

export const FeatureSection = ({
  id,
  title,
  layout = 'aside',
  meta,
  subtitle,
  badge,
  className = 'pt-[72px] md:pt-24',
  children,
}: FeatureSectionProps) => {
  const headingId = `${id}-h`;

  if (layout === 'aside') {
    return (
      <section
        id={id}
        aria-labelledby={headingId}
        className={`flex flex-wrap gap-x-16 gap-y-8 ${className}`}
      >
        <h2 id={headingId} className='m-0 basis-full md:basis-[200px] shrink-0 grow-0 text-[15px] font-medium leading-relaxed'>
          {title}
        </h2>
        <div className='min-w-0 grow-[999] basis-[560px]'>{children}</div>
      </section>
    );
  }

  return (
    <section id={id} aria-labelledby={headingId} className={`flex flex-col gap-8 ${className}`}>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3'>
          <h2
            id={headingId}
            className='m-0 flex items-baseline gap-3 text-[clamp(1.75rem,3vw,2.25rem)] leading-tight font-semibold tracking-[-0.03em]'
          >
            {title}
            {badge !== undefined && (
              <span className='font-mono text-[13px] font-normal tracking-normal text-muted'>
                {badge} {badge === 1 ? 'article' : 'articles'}
              </span>
            )}
          </h2>
          {meta}
        </div>
        {subtitle && <p className='m-0 max-w-xl text-muted'>{subtitle}</p>}
      </div>
      {children}
    </section>
  );
};
