import { FeatureSection } from '../Common/FeatureSection';

const MyAchievements = [
  {
    title: 'iBank KH',
    issuer: 'iBank (Cambodia) Plc',
    date: '2025',
    description: 'Short description of the achievement or award.',
  },
  {
    title: 'Personal and Profesional Certificate.',
    issuer: 'iBank (Cambodia) Plc',
    date: '2023 - 2026',
    description: 'Short description of the achievement or award.',
  },
  {
    title: 'BIC Mobile V3',
    issuer: 'BIC Bank Cambodia Plc.',
    date: '2023',
    description: 'Short description of the achievement or award.',
  },
  {
    title: 'CIC App',
    issuer: 'Z1 Flexible Solution',
    date: '2022',
    description: 'Short description of the achievement or award.',
  },
  {
    title: 'Internship Trainer',
    issuer: 'Z1 Flexible Solution',
    date: '2022',
    description: 'Trained 8 trainees, All passed',
  },
  {
    title: 'Json To Freezed',
    issuer: 'Personal Tools',
    date: '2022',
    description: 'Short description of the achievement or award.',
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
            className='w-full px-4 py-3 flex flex-col border-1 border-black shadow-xl rounded-2xl gap-1'
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
