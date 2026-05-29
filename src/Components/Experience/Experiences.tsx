import { FeatureSection } from '../Common/FeatureSection';

const MyExperiences = [
  {
    position: 'Flutter Mobile App Development Intern',
    company: 'Z1 Flexible Solution Co., Ltd',
    date: 'Dec 2021 - March 2022',
    description:
      'Contributed to the development of scalable business software solutions across industries such as finance, retail, and entertainment. Gained hands-on experience in Flutter mobile app development, UI/UX implementation, and integration with backend services.',
  },
  {
    position: 'Senior Officer, Flutter Mobile App Development',
    company: 'Z1 Flexible Solution Co., Ltd',
    date: 'March 2022 - Aug 2023',
    description:
      'Led the design and development of high-performance Flutter applications, ensuring scalability and seamless user experiences. Collaborated with cross-functional teams to deliver innovative business solutions tailored to client needs.',
  },
  {
    position: 'Software Developer',
    company: 'BIC Bank',
    date: 'Aug 2023 - Aug 2025',
    description:
      'Developed and maintained the BIC Mobile V3 application, focusing on enhancing performance, security, and usability for banking customers.',
  },
  {
    position: 'Software Developer',
    company: 'iBank Cambodia Plc',
    date: 'Aug 2025 - Present',
    description:
      'Working on the iBank Kh mobile banking platform, building secure, user-friendly, and feature-rich digital banking solutions.',
    present: true,
  },
];

const Experience = () => {
  return (
    <FeatureSection
      id='experience'
      title='Experiences'
      subtitle='A Detailed Chronicle of My Professional Journey, Roles, Responsibilities, and Achievements in Software Development.'
    >
      <div className='flex flex-col-reverse w-full gap-4'>
        {MyExperiences.map((value, index) => {
          return (
            <div key={index} className='flex items-stretch w-full gap-4'>
              <div
                className={`w-full px-4 py-3 flex flex-col border-1 shadow-xl border-black dark:border-zinc-700 rounded-2xl ${value.present ? 'bg-gray-50 dark:bg-zinc-800' : 'dark:bg-zinc-800/50'}`}
              >
                {value.present && (
                  <i className='fa-solid fa-map-pin text-red-600 text-lg'></i>
                )}
                <h3 className='text-lg font-display font-semibold'>
                  {value.position}
                </h3>

                <span className='flex flex-wrap w-full gap-2'>
                  <h3 className='text-md font-semibold font-base'>
                    {value.company}
                  </h3>
                  <p className='text-base font-normal'>( {value.date} )</p>
                </span>
                <p className='text-base font-light'>{value.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </FeatureSection>
  );
};

export default Experience;
