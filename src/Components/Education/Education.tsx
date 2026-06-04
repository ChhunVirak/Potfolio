import { FeatureSection } from '../Common/FeatureSection';

const MyEducation = [
  {
    degree: 'BacII',
    institution: 'Hun Sen Angtasom High School',
    date: '2016 - 2019',
  },
  {
    degree: 'Bachelor of Computer Science',
    institution: 'Royal University of Cambodia',
    date: '2019 - 2023',
    description:
      'Studied core computer science fundamentals including data structures, algorithms, software engineering, and mobile application development.',
  },
  {
    degree: 'ADF Elite Scholarship',
    institution: 'Asian Development Fund',
    date: '2019 - 2023',
    description:
      'ADF Scholarship Cambodia provides educational opportunities for Cambodian students to develop academic and leadership skills. The program supports personal growth, professional development, and community impact. It aims to empower future leaders to contribute to Cambodia’s progress.',
    scholarship: 'ADF Fund Scholarship',
  },
];

const Education = () => {
  return (
    <FeatureSection
      id='education'
      title='Educations'
      icon='fa-graduation-cap'
      subtitle='Academic Background and Scholarships That Shaped My Technical Foundation.'
    >
      <div className='flex flex-col w-full gap-4'>
        {MyEducation.map((item, index) => (
          <div
            key={index}
            className='w-full px-4 py-3 flex flex-col border-1 border-black dark:border-zinc-700 dark:bg-zinc-800/50 shadow-xl rounded-2xl gap-1'
          >
            <h3 className='text-lg font-display font-semibold'>
              {item.degree}
            </h3>
            <span className='flex flex-wrap gap-2'>
              <p className='font-semibold'>{item.institution}</p>
              <p className='font-normal'>( {item.date} )</p>
            </span>
            <p className='text-base font-light'>{item.description}</p>
            {item.scholarship && (
              <span className='mt-1 self-start flex items-center gap-1.5 text-sm font-medium bg-lime-400 text-black px-2 py-0.5 rounded-full'>
                <i className='fa-solid fa-award text-xs' />
                {item.scholarship}
              </span>
            )}
          </div>
        ))}
      </div>
    </FeatureSection>
  );
};

export default Education;
