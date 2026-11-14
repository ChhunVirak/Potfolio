import type { BlogPost } from '../firebase/blog';

/** "Nov 2026" in lists, "November 14, 2026" on the post itself. */
export function formatPostDate(post: BlogPost, style: 'short' | 'long' = 'short'): string {
  const date = post.createdAt?.toDate?.();
  if (!date) return '';
  return style === 'short'
    ? date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    : date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

/** Reading time at ~220 words a minute, from the post's HTML content. */
export function readMinutes(post: BlogPost): number {
  const words = (post.content ?? '')
    .replace(/<[^>]*>/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}
