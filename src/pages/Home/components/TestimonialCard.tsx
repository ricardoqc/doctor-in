import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  text: string;
  author: string;
  location: string;
  rating: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, author, location, rating }) => {
  return (
    <div className="bg-surface/5 backdrop-blur-md border border-surface/10 p-8 rounded-3xl relative h-full flex flex-col justify-between group hover:bg-surface/10 transition-colors duration-300">
      <Quote className="absolute top-6 right-8 text-accent/20 w-12 h-12" />
      
      <div>
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < rating ? "text-accent fill-accent" : "text-surface/20"} 
            />
          ))}
        </div>
        <p className="text-surface/80 font-body text-lg leading-relaxed italic mb-8">
          "{text}"
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold font-heading">
          {author[0]}
        </div>
        <div>
          <h4 className="text-surface font-heading font-bold">{author}</h4>
          <p className="text-accent text-sm font-medium">{location}</p>
        </div>
      </div>
    </div>
  );
};
