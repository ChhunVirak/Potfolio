import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FeatureSection } from '../Common/FeatureSection';
import PostList from '../Common/PostList';
import { fetchBlogs, type BlogPost } from '../../firebase/blog';

/** Latest three posts from Firestore. Renders nothing until there's something to show. */
const Writing = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetchBlogs()
      .then((all) => setPosts(all.slice(0, 3)))
      .catch(() => setPosts([]));
  }, []);

  if (posts.length === 0) return null;

  return (
    <FeatureSection
      id='writing'
      title='Blog'
      layout='stacked'
      meta={
        <Link to='/blog' className='link-ul text-[15px] font-medium'>
          All posts →
        </Link>
      }
    >
      <PostList posts={posts} />
    </FeatureSection>
  );
};

export default Writing;
