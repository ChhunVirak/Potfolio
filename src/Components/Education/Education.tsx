import { FeatureSection } from '../Common/FeatureSection';
import Timeline from '../Common/Timeline';
import { EDUCATION } from '../../data/portfolio';

const Education = () => (
  <FeatureSection id='education' title='Education'>
    <Timeline items={EDUCATION} />
  </FeatureSection>
);

export default Education;
