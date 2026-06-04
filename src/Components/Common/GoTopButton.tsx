import { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';

const GoTopButton = () => {
  const [currentSection, setCurrentSection] = useState<string>('home');
  const debouncedSection = useDebounce(currentSection, 200);

  const sectionIds = [
    'home',
    'experience',
    'education',
    'achievements',
    'tech-stack',
    'contact',
  ];

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    const currentIndex = sectionIds.indexOf(debouncedSection);
    const nextIndex = currentIndex + 1;

    if (nextIndex < sectionIds.length) {
      document
        .getElementById(sectionIds[nextIndex])
        ?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // 👉 calculate the NEXT section label
  const currentIndex = sectionIds.indexOf(debouncedSection);
  const nextLabel =
    currentIndex + 1 < sectionIds.length ? sectionIds[currentIndex + 1] : 'top';

  return (
    <div className='fixed bottom-[6%] right-[2%] flex flex-col items-end z-[999] gap-2 transition-transform ease-in-out md:scale-[0.9] hover:scale-[1] duration-200'>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className='bg-white/90 dark:bg-zinc-800/90 backdrop-blur-2xl px-4 aspect-square border border-gray-50 dark:border-zinc-700 flex gap-2 items-center rounded-full shadow-xl'
      >
        <i className='fa-solid fa-arrow-up'></i>
      </button>

      {nextLabel !== 'top' && (
        <button
          onClick={handleClick}
          className='bg-white/90 dark:bg-zinc-800/90 backdrop-blur-2xl px-4 py-2 border border-gray-50 dark:border-zinc-700 flex gap-2 items-center rounded-full shadow-lg cursor-pointer after:animate-bounce'
        >
          <p className='font-semibold'>{nextLabel.toLocaleUpperCase()}</p>
          <i className='fa-solid fa-arrow-down'></i>
        </button>
      )}
    </div>
  );
};

export default GoTopButton;
