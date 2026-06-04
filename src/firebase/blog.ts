import {
  collection,
  doc,
  getDocs,
  getDoc,
  orderBy,
  query,
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
