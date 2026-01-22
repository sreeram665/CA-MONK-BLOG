const API_URL = 'http://localhost:3001';

export const getBlogs = async () => {
  const res = await fetch(`${API_URL}/blogs`);
  if (!res.ok) throw new Error('Failed to fetch blogs');
  return res.json();
};

export const getBlogById = async (id: number) => {
  const res = await fetch(`${API_URL}/blogs/${id}`);
  if (!res.ok) throw new Error('Failed to fetch blog');
  return res.json();
};

export const createBlog = async (blog: any) => {
  const res = await fetch(`${API_URL}/blogs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(blog),
  });

  if (!res.ok) throw new Error('Failed to create blog');
};
