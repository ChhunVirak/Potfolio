import { useEffect, useState } from 'react';
import MeSunset from '../../assets/png/Me-sunset.jpg';
import RoundedButton from '../Common/RoundedButton';

const ROLES = [
  'Flutter Development',
  'Dart Development',
  'Figma Design',
  'React Development',
  'NodeJS Development',
];

function useTypewriter(words: string[]) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(t);
    }
    if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () =>
        setText(
          deleting
            ? word.slice(0, text.length - 1)
            : word.slice(0, text.length + 1),
        ),
      deleting ? 40 : 80,
    );
    return () => clearTimeout(t);
  }, [text, index, deleting, words]);

  return text;
}

const Home = () => {
  const role = useTypewriter(ROLES);

  return (
    <section
      id='home'
      className='w-full max-w-6xl mx-auto h-screen pt-[calc(60px+5%)] p-[5%] flex flex-col-reverse md:items-center justify-end md:flex-row gap-5'
    >
      {/* Left */}
      <div className='w-full md:w-1/2 flex md:flex-1 flex-col items-start justify-center gap-6'>
        <div className='flex flex-col gap-1'>
          <p className='text-black dark:text-white text-2xl font-thin tracking-widest uppercase'>Chhoeung</p>
          <h1 className='text-black dark:text-white text-6xl md:text-8xl font-display font-bold leading-none'>
            Chhun<br />Virak
          </h1>
        </div>

        <p className='text-lg font-light'>
          I do{' '}
          <span className='font-semibold'>
            {role}
            <span className='inline-block w-px h-5 bg-black dark:bg-white ml-0.5 align-middle animate-[blink_1s_step-end_infinite]' />
          </span>
        </p>

        <RoundedButton text='Contact' href='#contact' />
      </div>

      {/* Right */}
      <div className='w-full md:w-1/2 max-h-1/2 flex items-start justify-center md:flex-1 md:items-center'>
        <img
          src={MeSunset}
          className='h-full w-full object-cover aspect-auto md:aspect-square object-center rounded-3xl'
          alt='Chhoeung Chhunvirak'
        />
      </div>
    </section>
  );
};

export default Home;
