import { BookOpen } from 'lucide-react';
import { useBlog } from '../hooks/useBlog';

export default function BlogDetail({ blogId }: { blogId: number | null }) {
  const { blog, isLoading, error } = useBlog(blogId);

  if (!blogId) {
    return (
      <div className="flex items-center justify-center h-full text-gray-400">
        <BookOpen className="w-12 h-12" />
      </div>
    );
  }

  if (isLoading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-500">{error.message}</div>;
  if (!blog) return null;

  return (
    <div className="p-8">
      <img src={blog.coverImage} className="rounded mb-6" />
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="whitespace-pre-line text-gray-700">{blog.content}</p>
    </div>
  );
}
