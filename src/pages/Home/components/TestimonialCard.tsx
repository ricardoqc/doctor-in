import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  text: string;
  author: string;
  rating: number;
  reviewUrl?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, author, rating, reviewUrl }) => {
  const CardContent = (
    <div className="bg-white p-8 rounded-[32px] shadow-premium hover:shadow-2xl transition-all duration-500 border border-surface-alt relative h-full flex flex-col justify-between hover:-translate-y-1 cursor-pointer">
      <Quote className="absolute top-6 right-8 text-primary/10 w-10 h-10 pointer-events-none" />
      
      <div>
        {/* Stars */}
        <div className="flex gap-1 mb-5">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < rating ? "text-[#FBBF24] fill-[#FBBF24]" : "text-dark-alt/10"} 
            />
          ))}
        </div>
        
        {/* Review text */}
        <p className="text-secondary/80 font-body text-[14px] leading-relaxed mb-6 whitespace-pre-line line-clamp-6">
          "{text}"
        </p>
      </div>

      {/* Author Details */}
      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-surface-alt">
        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold font-heading text-sm">
          {author ? author[0].toUpperCase() : 'G'}
        </div>
        <div>
          <h4 className="text-secondary font-heading font-bold text-[14px]">{author}</h4>
          <span className="text-[#10B981] text-xs font-semibold flex items-center gap-1 font-body">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block" />
            Verified Google Reviewer
          </span>
        </div>
      </div>
    </div>
  );

  if (reviewUrl) {
    return (
      <a href={reviewUrl} target="_blank" rel="noopener noreferrer" className="block h-full focus:outline-none">
        {CardContent}
      </a>
    );
  }

  return CardContent;
};
