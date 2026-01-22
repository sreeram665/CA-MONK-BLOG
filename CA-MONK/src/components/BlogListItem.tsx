import { Blog } from '../hooks/blogsHook';
import { Badge } from '@/components/ui/badge';
import { CategoryIcon } from './CategoryIcon';

export default function BlogListItem({
  blog,
  isSelected,
  onClick,
}: {
  blog: Blog;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`p-4 cursor-pointer border-l-4 ${
        isSelected ? 'border-l-blue-600 bg-blue-50' : 'hover:bg-gray-50'
      }`}
    >
      <div className="flex gap-3">
        <CategoryIcon category={blog.category[0]} />
        <div>
          <h3 className="font-semibold">{blog.title}</h3>
          <p className="text-sm text-gray-600">{blog.description}</p>
          <Badge className="mt-2">{blog.category[0]}</Badge>
        </div>
      </div>
    </div>
  );
}
