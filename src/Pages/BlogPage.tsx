import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FeatureSection } from '../Components/Common/FeatureSection';
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
      <FeatureSection id='blog' title='Blog' icon='fa-rss' subtitle='Thoughts, learnings, and updates'>
        {loading && (
          <div className='w-full py-20 flex justify-center'>
            <i className='fa-solid fa-spinner animate-spin text-3xl text-lime-400' />
          </div>
        )}

        {error && (
          <div className='w-full py-20 flex flex-col items-center gap-3 text-red-500'>
            <i className='fa-solid fa-triangle-exclamation text-4xl' />
            <p>Failed to load posts. Try refreshing.</p>
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className='w-full py-20 flex flex-col items-center gap-4 text-gray-500 dark:text-gray-400'>
            <i className='fa-regular fa-newspaper text-5xl' />
            <p className='text-lg'>No posts yet — check back soon!</p>
          </div>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className='flex flex-col w-full gap-4'>
            {posts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className='w-full px-4 py-4 flex flex-col gap-2 border border-black dark:border-zinc-700 dark:bg-zinc-800/50 shadow-xl rounded-2xl hover:border-lime-400 dark:hover:border-lime-400 transition-colors'
              >
                <div className='flex items-start justify-between gap-4'>
                  <h2 className='text-lg font-display font-semibold'>{post.title}</h2>
                  <span className='text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap mt-1'>
                    {post.createdAt?.toDate().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </span>
                </div>
                {post.excerpt && (
                  <p className='text-sm font-light text-gray-600 dark:text-gray-300 line-clamp-2'>{post.excerpt}</p>
                )}
                {post.tags?.length > 0 && (
                  <div className='flex flex-wrap gap-1.5 mt-1'>
                    {post.tags.map((tag) => (
                      <span key={tag} className='text-xs bg-lime-400 text-black px-2 py-0.5 rounded-full font-medium'>
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}
      </FeatureSection>
      <Footer />
    </>
  );
};

export default BlogPage;
