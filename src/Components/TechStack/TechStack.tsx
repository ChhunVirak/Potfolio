import { FeatureSection } from '../Common/FeatureSection';

const Skills = [
  { name: 'Flutter', icon: 'fa-brands fa-flutter text-sky-500' },
  { name: 'Dart', icon: 'fa-brands fa-dart-lang text-sky-500' },
  { name: 'Figma', icon: 'fa-brands fa-figma text-red-500' },
  { name: 'React', icon: 'fa-brands fa-react text-sky-400' },
  { name: 'Javascript', icon: 'fa-brands fa-js text-yellow-400' },
  { name: 'Firebase', icon: 'fa-solid fa-fire text-yellow-500' },
  { name: 'NodeJs', icon: 'fa-brands fa-node text-green-500' },
  { name: 'Java', icon: 'fa-brands fa-java text-gray-500' },
];

const TechStack = () => {
  return (
    <FeatureSection
      id='tech-stack'
      title='Tech Stack'
      subtitle='An In-Depth Look at the Technologies, Tools, and Frameworks We Use to Build High-Quality Solutions'
    >
      <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
        {Skills.map((e) => (
          <div
            key={e.name}
            className='rounded-[calc(var(--radius-2xl)+1px)] border-1 border-transparent hover:border-black hover:cursor-pointer'
          >
            <div className='w-full h-full px-4 py-3 flex flex-col border-[1px] border-black shadow-xl justify-end rounded-2xl box-border gap-2'>
              {e.icon && (
                <i
                  className={`${e.icon} text-shadow-2xs text-black text-3xl`}
                ></i>
              )}
              <h3 className='text-lg font-normal font-display'>{e.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </FeatureSection>
  );
};

export default TechStack;
