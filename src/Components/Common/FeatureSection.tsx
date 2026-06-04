type FeatureSectionProps = React.PropsWithChildren<{
  id: string;
  title: string;
  subtitle?: string | undefined;
  icon?: string | undefined;
  badge?: number | undefined;
}>;
export const FeatureSection = ({
  id,
  title,
  subtitle,
  icon,
  badge,
  children,
}: FeatureSectionProps) => {
  return (
    <section
      id={id}
      className='pt-[calc(60px+5%)] w-full max-w-6xl mx-auto flex flex-col items-start px-[5%] gap-3'
    >
      <div className='flex items-center gap-2'>
        <h2 className='flex items-center gap-2 bg-lime-400 text-black px-3 py-2 font-display font-semibold text-2xl'>
          {icon && <i className={`fa-solid ${icon} text-xl`} />}
          {title}
        </h2>
        {badge !== undefined && (
          <span className='text-sm font-semibold bg-black dark:bg-white text-white dark:text-black px-2.5 py-1 rounded-full'>
            {badge}
          </span>
        )}
      </div>
      {subtitle && <p className='italic font-light text-base'>{subtitle}</p>}
      {children}
    </section>
  );
};
