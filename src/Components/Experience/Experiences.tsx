import { FeatureSection } from '../Common/FeatureSection';
import Timeline from '../Common/Timeline';
import { EXPERIENCE } from '../../data/portfolio';

const Experience = () => (
  <FeatureSection id='experience' title='Experience' className='pt-[72px] md:pt-36'>
    <Timeline items={EXPERIENCE} />
  </FeatureSection>
);

export default Experience;
