import {
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { db } from './config';

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  createdAt: Timestamp;
};

export async function fetchBlogs(): Promise<BlogPost[]> {
  try {
    const q = query(collection(db, 'blog'), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }) as BlogPost);
  } catch {
    // fallback: fetch without ordering (e.g. createdAt field missing)
    const snapshot = await getDocs(collection(db, 'blog'));
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }) as BlogPost);
  }
}

export async function fetchBlog(id: string): Promise<BlogPost | null> {
  const snapshot = await getDoc(doc(db, 'blog', id));
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...snapshot.data() } as BlogPost;
}

export type NewBlogPost = Omit<BlogPost, 'id' | 'createdAt'>;

function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function updateBlog(id: string, data: NewBlogPost): Promise<void> {
  await updateDoc(doc(db, 'blog', id), { ...data });
}

export async function createBlog(data: NewBlogPost): Promise<string> {
  const id = slugify(data.title);
  await setDoc(doc(db, 'blog', id), {
    ...data,
    createdAt: serverTimestamp(),
  });
  return id;
}
