type FeatureSectionProps = React.PropsWithChildren<{
  id: string;
  title: string;
  subtitle?: string | undefined;
}>;
export const FeatureSection = ({
  id,
  title,
  subtitle,
  children,
}: FeatureSectionProps) => {
  return (
    <section
      id={id}
      className='pt-[calc(60px+5%)] w-full flex flex-col items-start px-[5%] gap-3'
    >
      <h2 className='bg-lime-400 px-3 py-2 font-display font-semibold text-2xl animate-slide'>
        {title}
      </h2>
      {subtitle && <p className='italic font-light text-base'>{subtitle}</p>}
      {children}
    </section>
  );
};
