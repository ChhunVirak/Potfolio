import { useState } from 'react';
import { createBlog } from '../firebase/blog';

const EMPTY = { title: '', excerpt: '', content: '', tags: '' };

const AdminBlogPage = () => {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [lastId, setLastId] = useState('');

  const set = (field: keyof typeof EMPTY) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const tags = form.tags.split(',').map((t) => t.trim()).filter(Boolean);
  const slug = form.title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_]+/g, '-').replace(/^-+|-+$/g, '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim()) return;
    setStatus('loading');
    try {
      const id = await createBlog({
        title: form.title.trim(),
        excerpt: form.excerpt.trim(),
        content: form.content.trim(),
        tags,
      });
      setLastId(id);
      setStatus('success');
      setForm(EMPTY);
    } catch {
      setStatus('error');
    }
  };

  const inputCls =
    'w-full px-3 py-2 border border-black dark:border-zinc-600 rounded-xl bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-lime-400 text-sm';
  const labelCls = 'block text-sm font-semibold mb-1';

  return (
    <div className='min-h-screen dark:bg-zinc-900 dark:text-white pt-[calc(60px+2%)] pb-20 px-[3%]'>
      {/* Header */}
      <div className='flex items-center justify-between mb-6'>
        <h1 className='text-2xl font-display font-bold'>
          <span className='bg-lime-400 text-black px-3 py-1'>New Post</span>
        </h1>
        <span className='text-xs text-gray-400 dark:text-gray-500 border border-gray-300 dark:border-zinc-600 px-2 py-1 rounded-full'>
          DEV only
        </span>
      </div>

      {/* Two-column layout */}
      <div className='flex gap-6 items-start'>
        {/* Left — form */}
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 flex-1 min-w-0'>
          <div>
            <label className={labelCls}>Title *</label>
            <input value={form.title} onChange={set('title')} className={inputCls} placeholder='Post title' required />
          </div>

          <div>
            <label className={labelCls}>Excerpt</label>
            <input value={form.excerpt} onChange={set('excerpt')} className={inputCls} placeholder='Short description shown in the list' />
          </div>

          <div>
            <label className={labelCls}>Tags</label>
            <input value={form.tags} onChange={set('tags')} className={inputCls} placeholder='flutter, react, dart  (comma-separated)' />
          </div>

          <div>
            <label className={labelCls}>Content * (HTML)</label>
            <textarea
              value={form.content}
              onChange={set('content')}
              className={inputCls + ' min-h-[400px] font-mono resize-y'}
              placeholder='<p>Write your post content in HTML...</p>'
              required
            />
          </div>

          {status === 'success' && (
            <div className='flex items-center gap-2 text-sm text-lime-600 dark:text-lime-400 bg-lime-50 dark:bg-lime-900/20 px-4 py-3 rounded-xl border border-lime-200 dark:border-lime-800'>
              <i className='fa-solid fa-circle-check' />
              Published! ID: <code className='font-mono'>{lastId}</code>
            </div>
          )}

          {status === 'error' && (
            <div className='flex items-center gap-2 text-sm text-red-600 bg-red-50 dark:bg-red-900/20 px-4 py-3 rounded-xl border border-red-200 dark:border-red-800'>
              <i className='fa-solid fa-triangle-exclamation' />
              Failed to publish. Check Firestore rules or your connection.
            </div>
          )}

          <button
            type='submit'
            disabled={status === 'loading'}
            className='self-start flex items-center gap-2 bg-lime-400 text-black font-semibold px-6 py-2.5 rounded-full hover:bg-lime-300 transition-colors disabled:opacity-50'
          >
            {status === 'loading' ? (
              <><i className='fa-solid fa-spinner animate-spin' /> Publishing...</>
            ) : (
              <><i className='fa-solid fa-paper-plane' /> Publish</>
            )}
          </button>
        </form>

        {/* Right — live preview */}
        <div className='flex-1 min-w-0 sticky top-[calc(60px+2%)]'>
          <p className={labelCls}>Preview</p>
          <div className='border border-black dark:border-zinc-700 rounded-2xl overflow-hidden'>
            {/* Mock blog detail header */}
            <div className='px-5 pt-5 pb-4 flex flex-col gap-2 border-b border-gray-100 dark:border-zinc-700'>
              <h2 className='text-2xl font-display font-bold leading-tight'>
                {form.title || <span className='text-gray-400'>Post title</span>}
              </h2>
              <div className='flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400'>
                <i className='fa-regular fa-calendar' />
                {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
              {slug && (
                <div className='flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500'>
                  <i className='fa-solid fa-link text-[10px]' />
                  <code>/blog/{slug}</code>
                </div>
              )}
              {tags.length > 0 && (
                <div className='flex flex-wrap gap-1.5'>
                  {tags.map((tag) => (
                    <span key={tag} className='text-xs bg-lime-400 text-black px-2 py-0.5 rounded-full font-medium'>
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
              {form.excerpt && (
                <p className='text-sm text-gray-500 dark:text-gray-400 italic'>{form.excerpt}</p>
              )}
            </div>

            {/* Content */}
            <div className='px-5 py-4 max-h-[60vh] overflow-y-auto'>
              {form.content ? (
                <div
                  className='prose dark:prose-invert max-w-none text-sm leading-relaxed'
                  dangerouslySetInnerHTML={{ __html: form.content }}
                />
              ) : (
                <p className='text-sm text-gray-400 dark:text-gray-500 italic'>Content preview appears here...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBlogPage;
