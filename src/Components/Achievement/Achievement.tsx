import { FeatureSection } from '../Common/FeatureSection';
import Timeline from '../Common/Timeline';
import { RECOGNITION } from '../../data/portfolio';

const Achievement = () => (
  <FeatureSection id='recognition' title='Recognition'>
    <Timeline items={RECOGNITION} />
  </FeatureSection>
);

export default Achievement;
