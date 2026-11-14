import { FeatureSection } from '../Common/FeatureSection';
import { STACK, STACK_INTRO } from '../../data/portfolio';

const TechStack = () => (
  <FeatureSection id='stack' title='Stack'>
    <p className='mt-0 mb-8 max-w-xl text-muted'>{STACK_INTRO}</p>
    <dl className='m-0 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5'>
      {STACK.map(({ group, items }) => (
        <div key={group} className='flex flex-col gap-2.5'>
          <dt className='font-mono text-xs text-muted'>{group}</dt>
          <dd className='m-0 flex flex-col gap-1'>
            {items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  </FeatureSection>
);

export default TechStack;
