import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';

export default function CreateBlogForm({
  onClose,
  onSuccess,
}: {
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const submit = async () => {
    await createBlog({
      title,
      description: content.slice(0, 100),
      content,
      category: ['TECH'],
      date: new Date().toISOString(),
      coverImage:
        'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg',
    });

    onSuccess();
    onClose();
  };

  return (
    <div className="space-y-4">
      <Input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <Textarea
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)}
      />
      <Button onClick={submit}>Create Blog</Button>
    </div>
  );
}
