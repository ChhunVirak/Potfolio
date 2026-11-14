import { PROFILE } from '../../data/portfolio';

const Footer = () => (
  <footer className='border-t border-line'>
    <div className='mx-auto flex max-w-[1120px] flex-wrap justify-between gap-3 px-5 py-7 font-mono text-xs text-muted md:px-8'>
      <span>© {new Date().getFullYear()} Chhoeung Chhun Virak</span>
      <span className='flex gap-6'>
        <a className='link-ul text-muted' href={PROFILE.sourceCode} target='_blank' rel='noopener noreferrer'>
          Source code ↗
        </a>
        <button
          type='button'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='link-ul cursor-pointer border-0 bg-transparent p-0 font-mono text-xs text-muted'
        >
          Back to top ↑
        </button>
      </span>
    </div>
  </footer>
);

export default Footer;
