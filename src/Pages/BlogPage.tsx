import { FeatureSection } from '../Components/Common/FeatureSection';
import Footer from '../Components/Footer/Footer';

const BlogPage = () => (
  <>
    <FeatureSection id='blog' title='Blog' subtitle='Thoughts, learnings, and updates'>
      <div className='w-full py-20 flex flex-col items-center gap-4 text-gray-500 dark:text-gray-400'>
        <i className='fa-regular fa-newspaper text-5xl' />
        <p className='text-lg'>No posts yet — check back soon!</p>
      </div>
    </FeatureSection>
    <Footer />
  </>
);

export default BlogPage;
