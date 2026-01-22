import { useEffect, useState } from 'react';
import { getBlogs } from '../api/blogApi';

export interface Blog {
  id: number;
  title: string;
  category: string[];
  description: string;
  date: string;
  coverImage: string;
  content: string;
  author?: string;
  authorRole?: string;
  readTime?: string;
}

export function useBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchBlogs = async () => {
    try {
      setIsLoading(true);
      setBlogs(await getBlogs());
      setError(null);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return { blogs, isLoading, error, refetch: fetchBlogs };
}
