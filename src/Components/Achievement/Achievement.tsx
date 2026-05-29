import { FeatureSection } from '../Common/FeatureSection';

const MyAchievements = [
  {
    title: 'iBank KH',
    issuer: 'iBank (Cambodia) Plc',
    date: '2025',
    description:
      'Developed and maintained digital banking features for the iBank KH mobile application.',
  },
  {
    title: 'Personal and Professional Certificate',
    issuer: 'iBank (Cambodia) Plc',
    date: '2023 - 2026',
    description:
      'Received internal certifications for professional development and technical excellence.',
  },
  {
    title: 'BIC Mobile V3',
    issuer: 'BIC Bank Cambodia Plc.',
    date: '2023',
    description:
      'Contributed to the development and enhancement of the BIC Mobile V3 banking application.',
  },
  {
    title: 'CIC App',
    issuer: 'Z1 Flexible Solution',
    date: '2022',
    description:
      'Worked on mobile application features and improvements for the CIC App project.',
  },
  {
    title: 'Internship Trainer',
    issuer: 'Z1 Flexible Solution',
    date: '2022',
    description:
      'Mentored and trained 8 internship trainees, with all trainees successfully completing the program.',
  },
  {
    title: 'Json To Freezed',
    issuer: 'Personal Tools',
    date: '2022',
    description:
      'Built a utility tool to convert JSON models into Freezed classes for Flutter development.',
  },
];

const Achievement = () => {
  return (
    <FeatureSection
      id='achievements'
      title='Achievements'
      subtitle='Certifications, Awards, and Milestones That Mark My Professional Growth.'
    >
      <div className='flex flex-col w-full gap-4'>
        {MyAchievements.map((item, index) => (
          <div
            key={index}
            className='w-full px-4 py-3 flex flex-col border-1 border-black dark:border-zinc-700 dark:bg-zinc-800/50 shadow-xl rounded-2xl gap-1'
          >
            <h3 className='text-lg font-display font-semibold'>{item.title}</h3>
            <span className='flex flex-wrap gap-2'>
              <p className='font-semibold font-base'>{item.issuer}</p>
              <p className='font-normal'>( {item.date} )</p>
            </span>
            <p className='text-base font-light'>{item.description}</p>
          </div>
        ))}
      </div>
    </FeatureSection>
  );
};

export default Achievement;
