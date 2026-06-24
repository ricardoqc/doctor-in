import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  slug: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({ 
  title, 
  excerpt, 
  category, 
  date, 
  image, 
  slug 
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col h-full bg-surface-alt rounded-3xl overflow-hidden group border border-surface-alt hover:border-accent/30 transition-all focus-within:ring-2 focus-within:ring-accent">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="specialty" className="!bg-secondary !text-surface">{category}</Badge>
        </div>
      </div>

      <div className="p-8 flex flex-col justify-between flex-grow">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-dark-alt/40 text-xs font-bold uppercase tracking-widest">
            <Clock size={14} />
            {date}
          </div>
          <h3 className="text-xl font-heading font-bold text-secondary group-hover:text-primary transition-colors leading-tight">
            <Link to={`/blog/${slug}`} className="hover:underline focus:outline-none">
              {title}
            </Link>
          </h3>
          <p className="text-dark-alt/60 font-body text-sm leading-relaxed line-clamp-3">
            {excerpt}
          </p>
        </div>

        <Link 
          to={`/blog/${slug}`} 
          className="flex items-center gap-2 text-primary hover:text-secondary font-bold font-body text-sm mt-6 group/btn cursor-pointer focus:outline-none focus-visible:underline"
        >
          {t('common.readMore')} 
          <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
