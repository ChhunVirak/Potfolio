import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import { fetchBlog, type BlogPost } from '../firebase/blog';
import { formatPostDate, readMinutes } from '../utils/post';

const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
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
      <div className='mx-auto min-h-[70vh] max-w-[720px] px-5 pt-10 pb-24 md:px-8 md:pt-16'>
        <div className='mb-12 flex items-center justify-between'>
          <Link to='/blog' className='link-ul font-mono text-[13px] text-muted'>
            ← All posts
          </Link>
          {import.meta.env.DEV && id && (
            <button
              type='button'
              onClick={() => navigate(`/admin/edit/${id}`)}
              className='h-9 cursor-pointer rounded-full border border-line bg-transparent px-4 font-mono text-xs text-muted hover:text-fg'
            >
              Edit
            </button>
          )}
        </div>

        {loading && <p className='font-mono text-[13px] text-muted'>Loading…</p>}

        {notFound && (
          <div className='flex flex-col gap-4'>
            <h1 className='m-0 text-3xl font-semibold tracking-[-0.03em]'>Post not found</h1>
            <p className='m-0 text-muted'>It may have been moved or unpublished.</p>
          </div>
        )}

        {post && (
          <article className='flex flex-col gap-10'>
            <header className='flex flex-col gap-5 border-b border-line pb-10'>
              <div className='flex flex-wrap gap-x-6 gap-y-1 font-mono text-[13px] text-muted'>
                <time dateTime={post.createdAt?.toDate?.().toISOString()}>{formatPostDate(post, 'long')}</time>
                <span>{readMinutes(post)} min read</span>
              </div>
              <h1 className='m-0 text-[clamp(2rem,5vw,3rem)] leading-[1.08] font-semibold tracking-[-0.035em]'>
                {post.title}
              </h1>
              {post.excerpt && <p className='m-0 text-lg text-muted'>{post.excerpt}</p>}
              {post.tags?.length > 0 && (
                <ul aria-label='Tags' className='m-0 flex list-none flex-wrap gap-2 p-0'>
                  {post.tags.map((tag) => (
                    <li key={tag} className='rounded-full bg-chip px-2.5 py-0.5 font-mono text-xs text-muted'>
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </header>

            <div className='post-body' dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        )}
      </div>
      <Footer />
    </>
  );
};

export default BlogDetailPage;
