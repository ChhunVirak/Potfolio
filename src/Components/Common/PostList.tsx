import { Link } from 'react-router-dom';
import type { BlogPost } from '../../firebase/blog';
import { formatPostDate, readMinutes } from '../../utils/post';

/** Hairline-separated rows: title, optional excerpt, then date · read time; arrow on the right. */
const PostList = ({ posts, showExcerpt = false }: { posts: BlogPost[]; showExcerpt?: boolean }) => (
  <ul className='m-0 list-none border-t border-line p-0'>
    {posts.map((post) => {
      const date = formatPostDate(post);
      return (
        <li key={post.id} className='border-b border-line'>
          <Link to={`/blog/${post.id}`} className='group flex items-start justify-between gap-6 py-7'>
            <span className='flex min-w-0 flex-col gap-2'>
              <span className='text-[19px] leading-snug font-medium tracking-[-0.01em] underline-offset-4 decoration-1 group-hover:underline md:text-[21px]'>
                {post.title}
              </span>
              {showExcerpt && post.excerpt && (
                <span className='line-clamp-2 max-w-2xl text-muted'>{post.excerpt}</span>
              )}
              <span className='flex flex-wrap items-center gap-x-2 font-mono text-[13px] text-muted'>
                {date && (
                  <>
                    <span>{date}</span>
                    <span aria-hidden='true'>·</span>
                  </>
                )}
                <span>{readMinutes(post)} min read</span>
                {post.tags?.length > 0 && (
                  <>
                    <span aria-hidden='true'>·</span>
                    <span>{post.tags.join(', ')}</span>
                  </>
                )}
              </span>
            </span>
            <span
              aria-hidden='true'
              className='mt-1 shrink-0 text-lg text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-fg'
            >
              →
            </span>
          </Link>
        </li>
      );
    })}
  </ul>
);

export default PostList;
