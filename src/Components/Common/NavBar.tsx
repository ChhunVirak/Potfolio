import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SECTION_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Tech Stack', id: 'tech-stack' },
  { label: 'Contact', id: 'contact' },
];

type Props = { dark: boolean; toggle: () => void };

const NavBar = ({ dark, toggle }: Props) => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isPortfolio = pathname === '/potfolio' || pathname === '/';

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className='fixed top-0 left-0 z-10 w-screen bg-white dark:bg-zinc-900 shadow-lg'>
      <div className='h-[60px] px-[5%] max-w-6xl mx-auto flex flex-row justify-between items-center'>
        <Link to='/potfolio' className='font-bold font-display text-2xl'>
          Potfolio
        </Link>

        <div className='flex items-center gap-4'>
          {/* Desktop links */}
          <ul className='hidden md:flex gap-6 font-normal items-center'>
            {isPortfolio &&
              SECTION_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className='hover:text-lime-400 transition-colors'
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            <li>
              <Link
                to='/blog'
                className={`hover:text-lime-400 transition-colors ${pathname === '/blog' ? 'text-lime-400' : ''}`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to='/profile'
                className={`hover:text-lime-400 transition-colors ${pathname === '/profile' ? 'text-lime-400' : ''}`}
              >
                Profile
              </Link>
            </li>
          </ul>

          {/* Dark mode toggle */}
          <button
            onClick={toggle}
            aria-label='Toggle dark mode'
            className='w-8 h-8 flex items-center justify-center rounded-full border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors'
          >
            <i className={`fa-solid ${dark ? 'fa-sun' : 'fa-moon'} text-sm`} />
          </button>

          {/* Mobile hamburger */}
          <button
            className='md:hidden flex flex-col gap-1.5 p-2'
            onClick={() => setOpen((o) => !o)}
            aria-label='Toggle menu'
          >
            <span className={`block w-6 h-0.5 bg-black dark:bg-white transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block w-6 h-0.5 bg-black dark:bg-white transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-black dark:bg-white transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className='md:hidden flex flex-col border-t border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900'>
          {isPortfolio &&
            SECTION_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className='block w-full text-left px-[5%] py-3 hover:text-lime-400 transition-colors'
                >
                  {link.label}
                </button>
              </li>
            ))}
          <li>
            <Link
              to='/blog'
              className='block px-[5%] py-3 hover:text-lime-400 transition-colors'
              onClick={() => setOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to='/profile'
              className='block px-[5%] py-3 hover:text-lime-400 transition-colors'
              onClick={() => setOpen(false)}
            >
              Profile
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
