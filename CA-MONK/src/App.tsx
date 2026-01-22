import { useState } from 'react';
import { useBlogs } from './hooks/blogsHook';
import BlogListItem from './components/BlogListItem';
import BlogDetail from './components/BlogDetail';
import Header from './layout/Header';
import Footer from './layout/Footer';

export default function App() {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);
  const { blogs } = useBlogs();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6 p-6">
        <div className="bg-white rounded">
          {blogs.map((blog) => (
            <BlogListItem
              key={blog.id}
              blog={blog}
              isSelected={blog.id === selectedBlogId}
              onClick={() => setSelectedBlogId(blog.id)}
            />
          ))}
        </div>

        <div className="col-span-2 bg-white rounded">
          <BlogDetail blogId={selectedBlogId} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
