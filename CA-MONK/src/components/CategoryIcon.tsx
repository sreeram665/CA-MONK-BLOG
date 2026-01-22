import { TrendingUp, Briefcase, BookOpen, Code } from 'lucide-react';

export function CategoryIcon({ category }: { category: string }) {
  const icons: any = {
    FINANCE: TrendingUp,
    CAREER: Briefcase,
    REGULATIONS: BookOpen,
    SKILLS: BookOpen,
    TECH: Code,
  };

  const Icon = icons[category] || BookOpen;
  return <Icon className="w-3 h-3" />;
}
