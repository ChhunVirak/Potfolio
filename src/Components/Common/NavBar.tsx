import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isPortfolio = pathname === '/';
  const isBlog = pathname.startsWith('/blog');

  const navTitle = isBlog ? 'Blog' : 'Potfolio';

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
    setMobilePortfolioOpen(false);
  };

  return (
    <nav className='fixed top-0 left-0 z-10 w-screen bg-white dark:bg-zinc-900 shadow-lg'>
      <div className='h-[60px] px-[5%] flex flex-row justify-between items-center'>
        <Link
          to='/'
          className='font-bold font-display text-xl transition-all'
          onClick={() => setOpen(false)}
        >
          {navTitle}
        </Link>

        <div className='flex items-center gap-4'>
          {/* Desktop links */}
          <ul className='hidden md:flex gap-6 font-normal items-center'>
            {/* Potfolio sections dropdown */}
            <li className='relative group'>
              <button
                className={`flex items-center gap-1 hover:text-lime-400 transition-colors ${isPortfolio ? 'text-lime-400' : ''}`}
              >
                Potfolio
                <i className='fa-solid fa-chevron-down text-xs transition-transform group-hover:rotate-180' />
              </button>
              <ul className='absolute top-full left-0 mt-2 w-40 bg-white dark:bg-zinc-900 shadow-lg rounded-md border border-gray-100 dark:border-zinc-800 py-1 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150'>
                  {SECTION_LINKS.map((link) => (
                    <li key={link.id}>
                      {isPortfolio ? (
                        <button
                          onClick={() => scrollTo(link.id)}
                          className='flex items-center gap-2 w-full text-left px-4 py-2 hover:text-lime-400 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors'
                        >
                          <i className={`fa-solid ${link.icon} w-4 text-center text-xs`} />
                          {link.label}
                        </button>
                      ) : (
                        <button
                          onClick={() => navigate('/', { state: { scrollTo: link.id } })}
                          className='flex items-center gap-2 w-full text-left px-4 py-2 hover:text-lime-400 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors'
                        >
                          <i className={`fa-solid ${link.icon} w-4 text-center text-xs`} />
                          {link.label}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
            </li>

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
            <span
              className={`block w-6 h-0.5 bg-black dark:bg-white transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-black dark:bg-white transition-opacity ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-black dark:bg-white transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className='md:hidden flex flex-col border-t border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900'>
          {/* Potfolio group */}
          <li>
            <button
              onClick={() => setMobilePortfolioOpen((v) => !v)}
              className={`flex items-center gap-2 w-full text-left px-[5%] py-3 hover:text-lime-400 transition-colors ${isPortfolio ? 'text-lime-400' : ''}`}
            >
              <i className='fa-solid fa-folder w-4 text-center text-xs' />
              Potfolio
              <i
                className={`fa-solid fa-chevron-down text-xs ml-auto transition-transform ${mobilePortfolioOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {mobilePortfolioOpen && (
              <ul className='flex flex-col bg-gray-50 dark:bg-zinc-800/50 border-t border-gray-100 dark:border-zinc-700'>
                {SECTION_LINKS.map((link) => (
                  <li key={link.id}>
                    {isPortfolio ? (
                      <button
                        onClick={() => scrollTo(link.id)}
                        className='flex items-center gap-2 w-full text-left pl-[calc(5%+1rem)] pr-[5%] py-2.5 hover:text-lime-400 transition-colors text-sm'
                      >
                        <i className={`fa-solid ${link.icon} w-4 text-center text-xs`} />
                        {link.label}
                      </button>
                    ) : (
                      <button
                        onClick={() => { navigate('/', { state: { scrollTo: link.id } }); setOpen(false); setMobilePortfolioOpen(false); }}
                        className='flex items-center gap-2 w-full text-left pl-[calc(5%+1rem)] pr-[5%] py-2.5 hover:text-lime-400 transition-colors text-sm'
                      >
                        <i className={`fa-solid ${link.icon} w-4 text-center text-xs`} />
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link
              to='/blog'
              className={`flex items-center gap-2 px-[5%] py-3 hover:text-lime-400 transition-colors ${pathname === '/blog' ? 'text-lime-400' : ''}`}
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
