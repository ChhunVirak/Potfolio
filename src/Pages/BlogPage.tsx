import { useEffect, useState } from 'react';
import { FeatureSection } from '../Components/Common/FeatureSection';
import PostList from '../Components/Common/PostList';
import Footer from '../Components/Footer/Footer';
import { fetchBlogs, type BlogPost } from '../firebase/blog';

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchBlogs()
      .then(setPosts)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className='mx-auto min-h-[70vh] max-w-[1120px] px-5 pb-24 md:px-8'>
        <FeatureSection
          id='blog'
          title='Field notes'
          layout='stacked'
          subtitle='Thoughts, learnings and updates.'
          badge={!loading && !error ? posts.length : undefined}
          className='pt-14 md:pt-24'
        >
          {loading && <p className='py-16 font-mono text-[13px] text-muted'>Loading posts…</p>}

          {error && (
            <p role='alert' className='py-16 text-muted'>
              Posts couldn't be loaded. Refresh the page to try again.
            </p>
          )}

          {!loading && !error && posts.length === 0 && (
            <p className='py-16 text-muted'>No posts yet — check back soon.</p>
          )}

          {!loading && !error && posts.length > 0 && <PostList posts={posts} showExcerpt />}
        </FeatureSection>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
