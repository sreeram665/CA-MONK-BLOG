import { useEffect, useState } from 'react';
import { getBlogById } from '../api/blogApi';
import type { Blog } from './blogsHook';

export function useBlog(id: number | null) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        setIsLoading(true);
        setBlog(await getBlogById(id));
        setError(null);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  return { blog, isLoading, error };
}
import { useEffect, useState } from 'react';
import { getBlogById } from '../api/blogApi';
import type { Blog } from './blogsHook';

export function useBlog(id: number | null) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        setIsLoading(true);
        setBlog(await getBlogById(id));
        setError(null);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  return { blog, isLoading, error };
}
