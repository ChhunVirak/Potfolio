import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SECTION_LINKS } from '../../data/portfolio';

type Props = { dark: boolean; toggle: () => void };

const SunIcon = () => (
  <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.6' strokeLinecap='round' aria-hidden='true'>
    <circle cx='12' cy='12' r='4' />
    <path d='M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4' />
  </svg>
);

const MoonIcon = () => (
  <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.6' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
    <path d='M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z' />
  </svg>
);

const NavBar = ({ dark, toggle }: Props) => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isPortfolio = pathname === '/';

  // On the portfolio page, scroll in place; elsewhere, go home and let PortfolioPage scroll.
  const goTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setOpen(false);
    if (isPortfolio) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  return (
    <header className='sticky top-0 z-10 border-b border-line bg-bg'>
      <div className='mx-auto flex h-[68px] max-w-[1120px] items-center justify-between gap-6 px-5 md:px-8'>
        <Link
          to='/'
          onClick={() => {
            setOpen(false);
            if (isPortfolio) window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className='text-[15px] font-semibold tracking-[-0.01em]'
        >
          VIRAK
        </Link>

        <nav aria-label='Primary' className='flex items-center gap-7 text-sm'>
          <span className='hidden items-center gap-7 md:flex'>
            {SECTION_LINKS.map((link) => (
              <a key={link.id} href={`#${link.id}`} onClick={(e) => goTo(e, link.id)} className='link-ul text-muted'>
                {link.label}
              </a>
            ))}
            <Link
              to='/blog'
              aria-current={pathname.startsWith('/blog') ? 'page' : undefined}
              className={`link-ul ${pathname.startsWith('/blog') ? 'text-fg' : 'text-muted'}`}
            >
              Blog
            </Link>
          </span>

          <button
            type='button'
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls='mobile-menu'
            className='flex h-11 cursor-pointer items-center border-0 bg-transparent px-1 font-medium text-fg md:hidden'
          >
            {open ? 'Close' : 'Menu'}
          </button>

          <button
            type='button'
            onClick={toggle}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className='-mr-3 flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border-0 bg-transparent text-fg'
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
        </nav>
      </div>

      {open && (
        <nav id='mobile-menu' aria-label='Mobile' className='flex flex-col border-t border-line px-5 pt-2 pb-5 md:hidden'>
          {SECTION_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => goTo(e, link.id)}
              className='flex h-[52px] items-center border-b border-line text-[22px] font-medium tracking-[-0.02em]'
            >
              {link.label}
            </a>
          ))}
          <Link
            to='/blog'
            onClick={() => setOpen(false)}
            className='flex h-[52px] items-center text-[22px] font-medium tracking-[-0.02em]'
          >
            Blog
          </Link>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
