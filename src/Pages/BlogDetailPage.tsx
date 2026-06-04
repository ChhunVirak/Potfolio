import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import { fetchBlog, type BlogPost } from '../firebase/blog';

const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!id) return;
    fetchBlog(id)
      .then((data) => {
        if (!data) setNotFound(true);
        else setPost(data);
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      <div className='pt-[calc(60px+5%)] w-full max-w-6xl mx-auto px-[5%] pb-[5%]'>
        <Link
          to='/blog'
          className='inline-flex items-center gap-2 text-sm hover:text-lime-400 transition-colors mb-6'
        >
          <i className='fa-solid fa-arrow-left text-xs' />
          Back to Blog
        </Link>

        {loading && (
          <div className='w-full py-20 flex justify-center'>
            <i className='fa-solid fa-spinner animate-spin text-3xl text-lime-400' />
          </div>
        )}

        {notFound && (
          <div className='w-full py-20 flex flex-col items-center gap-4 text-gray-500 dark:text-gray-400'>
            <i className='fa-solid fa-file-circle-question text-5xl' />
            <p className='text-lg'>Post not found.</p>
          </div>
        )}

        {post && (
          <article className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-3xl md:text-4xl font-display font-bold'>{post.title}</h1>
              <div className='flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400'>
                <i className='fa-regular fa-calendar text-xs' />
                {post.createdAt?.toDate().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
              {post.tags?.length > 0 && (
                <div className='flex flex-wrap gap-1.5'>
                  {post.tags.map((tag) => (
                    <span key={tag} className='text-xs bg-lime-400 text-black px-2 py-0.5 rounded-full font-medium'>
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <hr className='border-gray-200 dark:border-zinc-700' />

            <div
              className='prose dark:prose-invert max-w-none font-light leading-relaxed'
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        )}
      </div>
      <Footer />
    </>
  );
};

export default BlogDetailPage;
