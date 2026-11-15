import { FeatureSection } from '../Common/FeatureSection';
import { PROJECTS, type Project } from '../../data/portfolio';

const years = PROJECTS.map((p) => Number(p.year));
const range = `${Math.min(...years)} — ${Math.max(...years)}`;

// No screenshot yet: a quiet tile with the app's name stands in.
const Cover = ({ project }: { project: Project }) =>
  project.image ? (
    <img
      src={project.image}
      alt={`${project.name} screenshot`}
      className='block aspect-[4/3] w-full rounded-md bg-chip object-cover'
    />
  ) : (
    <div
      aria-hidden='true'
      className='flex aspect-[4/3] w-full items-end rounded-md bg-chip p-6 text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-[-0.03em] text-muted'
    >
      {project.name}
    </div>
  );

const Work = () => (
  <FeatureSection
    id='work'
    title="Projects I've shipped"
    layout='stacked'
    className='pt-[72px] md:pt-28'
    meta={<span className='font-mono text-[13px] text-muted'>{range}</span>}
  >
    <ul className='m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-x-8 gap-y-14 p-0'>
      {PROJECTS.map((project) => (
        <li key={project.name} className='group flex flex-col gap-4'>
          <Cover project={project} />
          <div className='flex flex-col gap-1'>
            <div className='flex items-baseline justify-between gap-4'>
              <h3 className='m-0 text-[19px] font-medium tracking-[-0.01em] underline-offset-4 decoration-1 group-hover:underline'>
                {project.link ? (
                  <a href={project.link} target='_blank' rel='noopener noreferrer'>
                    {project.name} <span aria-hidden='true'>↗</span>
                    <span className='sr-only'> (opens in a new tab)</span>
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <span className='font-mono text-[13px] text-muted'>{project.year}</span>
            </div>
            <span className='text-sm text-muted'>{project.meta}</span>
            <p className='mt-1.5 mb-0 max-w-lg'>{project.description}</p>
          </div>
        </li>
      ))}
    </ul>
  </FeatureSection>
);

export default Work;
