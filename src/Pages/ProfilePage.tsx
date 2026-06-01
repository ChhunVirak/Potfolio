import MeSunset from '../assets/png/Me-sunset.jpg';
import Footer from '../Components/Footer/Footer';

const SOCIALS = [
  { icon: 'fa-brands fa-github', link: 'https://github.com/ChhunVirak', label: 'GitHub' },
  { icon: 'fa-brands fa-telegram', link: 'https://t.me/VirakChhun', label: 'Telegram' },
  { icon: 'fa-brands fa-facebook', link: 'https://www.facebook.com/somnang.chan.52', label: 'Facebook' },
];

const ProfilePage = () => (
  <>
    <div className='pt-[60px] min-h-screen w-full max-w-6xl mx-auto px-[5%]'>
      <div className='flex flex-col md:flex-row gap-10 py-[5%] items-center md:items-start'>
        <img
          src={MeSunset}
          alt='Chhoeung Chhun Virak'
          className='w-64 h-64 md:w-80 md:h-80 object-cover object-center rounded-3xl flex-shrink-0'
        />

        <div className='flex flex-col gap-4'>
          <div>
            <p className='text-sm tracking-widest uppercase text-gray-500 dark:text-gray-400'>
              Chhoeung
            </p>
            <h1 className='text-5xl font-display font-bold leading-none'>
              Chhun Virak
            </h1>
          </div>

          <p className='text-base font-light leading-relaxed max-w-prose text-gray-700 dark:text-gray-300'>
            Flutter &amp; React developer with a passion for clean UI and smooth user experiences.
            I build mobile and web applications — from design to deployment.
          </p>

          <div className='flex gap-3 mt-2'>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.link}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={s.label}
                className='w-10 h-10 border dark:border-zinc-600 grid place-items-center rounded-full hover:border-black dark:hover:border-white transition-colors'
              >
                <i className={`${s.icon} text-xl`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default ProfilePage;
