import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SECTION_LINKS } from '../../data/portfolio';

type Props = { dark: boolean; toggle: () => void };

const SunIcon = () => (
  <svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' aria-hidden='true'>
    <circle cx='12' cy='12' r='4' />
    <path d='M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4' />
  </svg>
);

const MoonIcon = () => (
  <svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
    <path d='M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z' />
  </svg>
);

// Two bars that rotate into an X when the menu is open.
const MenuIcon = ({ open }: { open: boolean }) => (
  <span aria-hidden='true' className='relative block h-3.5 w-[22px]'>
    <span
      className={`absolute left-0 h-[2px] w-full rounded-full bg-current transition-transform duration-300 ${open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-[2px]'}`}
    />
    <span
      className={`absolute left-0 h-[2px] w-full rounded-full bg-current transition-transform duration-300 ${open ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-[2px]'}`}
    />
  </span>
);

const NavBar = ({ dark, toggle }: Props) => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isPortfolio = pathname === '/';
  const isBlog = pathname.startsWith('/blog');

  // Close on route change, lock page scroll while open, close on Escape.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

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

  // Sliding switch: the thumb carries the current mode's icon.
  const themeButton = (
    <button
      type='button'
      role='switch'
      aria-checked={dark}
      aria-label='Dark mode'
      onClick={toggle}
      className='group flex h-11 cursor-pointer items-center border-0 bg-transparent p-0'
    >
      <span className='relative block h-6 w-11 rounded-full border border-line bg-chip transition-colors group-hover:border-muted'>
        <span
          className={`absolute top-1/2 left-[2px] flex h-[18px] w-[18px] -translate-y-1/2 items-center justify-center rounded-full bg-fg text-bg shadow-sm transition-transform duration-300 ${dark ? 'translate-x-5' : 'translate-x-0'}`}
        >
          {dark ? <MoonIcon /> : <SunIcon />}
        </span>
      </span>
    </button>
  );

  return (
    <header className='sticky top-0 z-20 border-b border-line bg-bg'>
      <div className='mx-auto flex h-16 max-w-[1120px] items-center justify-between gap-6 px-5 md:h-[68px] md:px-8'>
        <div className='flex items-center gap-1'>
          <button
            type='button'
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls='mobile-menu'
            aria-label={open ? 'Close menu' : 'Open menu'}
            className='-ml-3 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent text-fg transition-colors hover:bg-chip md:hidden'
          >
            <MenuIcon open={open} />
          </button>
          <Link
            to='/'
            onClick={() => {
              setOpen(false);
              if (isPortfolio) window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className='text-xl font-bold tracking-[0.02em] md:text-[17px] md:tracking-[-0.01em]'
          >
            VIRAK
          </Link>
        </div>

        <nav aria-label='Primary' className='flex items-center gap-8 text-[15px] font-[450]'>
          <span className='hidden items-center gap-8 md:flex'>
            {SECTION_LINKS.map((link) => (
              <a key={link.id} href={`#${link.id}`} onClick={(e) => goTo(e, link.id)} className='link-ul text-muted'>
                {link.label}
              </a>
            ))}
            <Link
              to='/blog'
              aria-current={isBlog ? 'page' : undefined}
              className={`link-ul ${isBlog ? 'text-fg' : 'text-muted'}`}
            >
              Blog
            </Link>
          </span>
          {themeButton}
        </nav>
      </div>

      {/* Mobile menu: full-height sheet under the bar */}
      <nav
        id='mobile-menu'
        aria-label='Mobile'
        hidden={!open}
        className='fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-bg px-5 pt-4 pb-10 md:hidden'
      >
        <ul className='m-0 flex list-none flex-col p-0'>
          {SECTION_LINKS.map((link, i) => (
            <li key={link.id} className='border-b border-line'>
              <a
                href={`#${link.id}`}
                onClick={(e) => goTo(e, link.id)}
                className='flex h-16 items-center justify-between text-[28px] font-medium tracking-[-0.03em]'
              >
                {link.label}
                <span className='font-mono text-xs font-normal tracking-normal text-muted'>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </a>
            </li>
          ))}
          <li>
            <Link
              to='/blog'
              aria-current={isBlog ? 'page' : undefined}
              className='flex h-16 items-center justify-between text-[28px] font-medium tracking-[-0.03em]'
            >
              Blog
              <span aria-hidden='true' className='text-xl text-muted'>→</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
