import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SECTION_LINKS = [
  { label: 'Home', id: 'home', icon: 'fa-house' },
  { label: 'Experience', id: 'experience', icon: 'fa-briefcase' },
  { label: 'Education', id: 'education', icon: 'fa-graduation-cap' },
  { label: 'Achievements', id: 'achievements', icon: 'fa-trophy' },
  { label: 'Tech Stack', id: 'tech-stack', icon: 'fa-layer-group' },
  { label: 'Contact', id: 'contact', icon: 'fa-envelope' },
];

type Props = { dark: boolean; toggle: () => void };

const NavBar = ({ dark, toggle }: Props) => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [homeVisible, setHomeVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const isPortfolio = pathname === '/potfolio' || pathname === '/';

  useEffect(() => {
    const el = document.getElementById('home');
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHomeVisible(entry.isIntersecting),
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [pathname]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <nav className='fixed top-0 left-0 z-10 w-screen bg-white dark:bg-zinc-900 shadow-lg'>
      <div className='h-[60px] px-[5%] flex flex-row justify-between items-center'>
        <Link to='/potfolio' className='font-bold font-display text-2xl transition-all'>
          {homeVisible ? 'Potfolio' : 'Chhoeung Chhun Virak'}
        </Link>

        <div className='flex items-center gap-4'>
          {/* Desktop links */}
          <ul className='hidden md:flex gap-6 font-normal items-center'>
            {/* Sections dropdown (portfolio page only) */}
            {isPortfolio && (
              <li className='relative' ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen((v) => !v)}
                  className='flex items-center gap-1 hover:text-lime-400 transition-colors'
                >
                  Potfolio
                  <i className={`fa-solid fa-chevron-down text-xs transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {dropdownOpen && (
                  <ul className='absolute top-full left-0 mt-2 w-40 bg-white dark:bg-zinc-900 shadow-lg rounded-md border border-gray-100 dark:border-zinc-800 py-1'>
                    {SECTION_LINKS.map((link) => (
                      <li key={link.id}>
                        <button
                          onClick={() => scrollTo(link.id)}
                          className='flex items-center gap-2 w-full text-left px-4 py-2 hover:text-lime-400 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors'
                        >
                          <i className={`fa-solid ${link.icon} w-4 text-center text-xs`} />
                          {link.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )}
            <li>
              <Link
                to='/blog'
                className={`flex items-center gap-1.5 hover:text-lime-400 transition-colors ${pathname === '/blog' ? 'text-lime-400' : ''}`}
              >
                <i className='fa-solid fa-rss text-xs' />
                Blog
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
                  className='flex items-center gap-2 w-full text-left px-[5%] py-3 hover:text-lime-400 transition-colors'
                >
                  <i className={`fa-solid ${link.icon} w-4 text-center text-xs`} />
                  {link.label}
                </button>
              </li>
            ))}
          <li>
            <Link
              to='/blog'
              className='flex items-center gap-2 px-[5%] py-3 hover:text-lime-400 transition-colors'
              onClick={() => setOpen(false)}
            >
              <i className='fa-solid fa-rss w-4 text-center text-xs' />
              Blog
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
