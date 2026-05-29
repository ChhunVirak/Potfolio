import { useEffect, useState } from 'react';
import MeSunset from '../../assets/png/Me-sunset.jpg';
import RoundedButton from '../Common/RoundedButton';

const ROLES = [
  'Flutter Developer',
  'Dart Developer',
  'Figma Designer',
  'React Developer',
  'NodeJS Developer',
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
      className='w-full h-screen pt-[calc(60px+5%)] p-[5%] flex flex-col-reverse md:items-center justify-end md:flex-row gap-5'
    >
      {/* Left */}
      <div className='w-full md:w-1/2 flex md:flex-1 flex-col items-start justify-center'>
        <div className='w-full flex flex-col wrap-anywhere gap-1'>
          <h1 className='text-black dark:text-white text-3xl font-thin'>CHHOEUNG</h1>
          <h1 className='text-black dark:text-white text-5xl md:text-7xl font-display font-semibold'>
            CHHUNVIRAK
          </h1>
        </div>

        <p className='font-light mt-2'>
          I'm a{' '}
          <span className='font-medium'>
            {role}
            <span className='inline-block w-px h-4 bg-black dark:bg-white ml-0.5 align-middle animate-[blink_1s_step-end_infinite]' />
          </span>
        </p>

        {/* <p className='font-light mt-1 max-w-md text-sm text-gray-500'>
          Software developer specializing in Flutter mobile apps. Currently
          building digital banking solutions at iBank KH.
        </p> */}

        <div className='mt-4 space-x-1'>
          <RoundedButton text='Contact' />
          {/* <RoundedButton text='Hire Me' /> */}
        </div>
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
