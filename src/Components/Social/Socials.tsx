import { FeatureSection } from '../Common/FeatureSection';

const Socials = [
  { id: 1, icon: 'fa-brands fa-github', link: 'https://github.com/ChhunVirak' },
  { id: 2, icon: 'fa-brands fa-telegram', link: 'https://t.me/VirakChhun' },
  { id: 3, icon: 'fa-brands fa-instagram', link: '' },
  {
    id: 4,
    icon: 'fa-brands fa-facebook',
    link: 'https://www.facebook.com/somnang.chan.52',
  },
];

const Contact = () => {
  return (
    <FeatureSection
      title='Contact'
      id='contact'
      subtitle='Get in Touch With Us to Discuss Opportunities, Partnerships, or Any Questions You May Have'
    >
      <div className='flex gap-2'>
        {Socials.map((social) => (
          <a
            key={social.id}
            href={social.link}
            className='aspect-square w-10 border grid place-items-center rounded-full'
            target='_blank'
          >
            <i className={`${social.icon} text-xl`}></i>
          </a>
        ))}
      </div>
    </FeatureSection>
  );
};

export default Contact;
