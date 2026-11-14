import MeSunset from '../../assets/png/Me-sunset.jpg';
import { FACTS, PROFILE } from '../../data/portfolio';

const Home = () => (
  <>
    <section
      id='home'
      aria-labelledby='hero-name'
      className='flex flex-wrap items-end gap-9 pt-10 pb-12 md:gap-14 md:pt-28 md:pb-[88px]'
    >
      <div className='flex min-w-0 grow basis-[480px] flex-col gap-7'>
        <div className='flex items-center gap-2.5 font-mono text-[13px] text-muted'>
          <span aria-hidden='true' className='h-2 w-2 rounded-full bg-accent' />
          <span>{PROFILE.role}</span>
        </div>
        <h1
          id='hero-name'
          className='m-0 text-[clamp(3rem,7vw,5.5rem)] leading-[0.98] font-semibold tracking-[-0.045em]'
        >
          {PROFILE.firstName}
          <br />
          {PROFILE.lastName}
        </h1>
        <p className='m-0 max-w-[34rem] text-lg leading-[1.55] text-muted md:text-xl'>{PROFILE.lede}</p>
        <div className='flex flex-wrap items-center gap-5 pt-2'>
          <a
            href='#contact'
            className='inline-flex h-12 items-center gap-2 rounded-full bg-fg px-[22px] text-[15px] font-medium text-bg transition-opacity hover:opacity-85'
          >
            Get in touch
          </a>
          <a
            href={PROFILE.github}
            target='_blank'
            rel='noopener noreferrer'
            className='link-ul text-[15px] font-medium'
          >
            GitHub ↗
          </a>
        </div>
      </div>
      <figure className='m-0 min-w-[260px] shrink grow basis-full md:grow-0 md:basis-[380px]'>
        <img
          src={MeSunset}
          alt='Virak standing at the shore, watching the sun set over the sea'
          className='block aspect-[4/3] w-full rounded-md object-cover object-[30%_70%] md:aspect-[4/5] md:object-[30%_50%]'
        />
      </figure>
    </section>

    <section
      aria-label='At a glance'
      className='grid grid-cols-2 gap-x-4 gap-y-5 border-y border-line py-7 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] md:gap-6'
    >
      {FACTS.map((fact) => (
        <div key={fact.label} className='flex flex-col gap-1'>
          <span className='font-mono text-xs text-muted'>{fact.label}</span>
          <span className='text-[15px]'>{fact.value}</span>
        </div>
      ))}
    </section>
  </>
);

export default Home;
