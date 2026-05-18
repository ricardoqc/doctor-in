import React from 'react';
import { GeoHead } from '@/seo/GeoHead';
import { BlogCard } from '@/features/articles/ui/BlogCard';

export const BlogList: React.FC = () => {
  return (
    <div className="w-full bg-surface-alt">
      <GeoHead 
        title="Blog | Doctor In"
        description="Health tips and guides for travelers and expats in Latin America."
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 pt-[120px] pb-20">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h1 className="text-secondary text-[40px] lg:text-[56px] font-heading font-bold leading-tight mb-6">
            Health & Travel <span className="text-primary">Insights</span>
          </h1>
          <p className="text-lg text-dark-alt/60 font-body">
            Expert advice on staying healthy during your Latin American adventure. Essential tips, vaccination guides, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCard 
            title="How to Deal with Altitude Sickness in Latam"
            category="Travel Health"
            excerpt="A complete guide on recognizing and treating 'soroche' across high-altitude destinations in Latin America."
            image="/images/blog_travel_health_1778509526333.png"
            date="May 10, 2026"
            slug="altitude-sickness-guide"
          />
          <BlogCard 
            title="Staying Safe in the Amazon: Vaccination Guide"
            category="Safety"
            excerpt="Essential health precautions and mandatory vaccinations for travelers exploring the Amazon basin."
            image="/images/blog_travel_health_1778509526333.png"
            date="May 8, 2026"
            slug="amazon-vaccination-guide"
          />
          <BlogCard 
            title="Finding English Speaking Doctors in Major Cities"
            category="Resources"
            excerpt="How to access international-standard medical care in your language while traveling through Latin America."
            image="/images/blog_travel_health_1778509526333.png"
            date="May 5, 2026"
            slug="english-speaking-doctors-latam"
          />
          <BlogCard 
            title="Food Safety Tips for Travelers"
            category="Travel Health"
            excerpt="Enjoy local cuisines safely. How to prevent and treat traveler's diarrhea during your trip."
            image="/images/blog_travel_health_1778509526333.png"
            date="April 20, 2026"
            slug="food-safety-tips"
          />
          <BlogCard 
            title="Understanding Healthcare Systems in Latam"
            category="Resources"
            excerpt="A brief overview of public vs private healthcare options across major South American countries."
            image="/images/blog_travel_health_1778509526333.png"
            date="April 15, 2026"
            slug="healthcare-systems-latam"
          />
          <BlogCard 
            title="Emergency Numbers You Should Know"
            category="Safety"
            excerpt="A comprehensive list of emergency contacts for every country in Latin America."
            image="/images/blog_travel_health_1778509526333.png"
            date="April 5, 2026"
            slug="emergency-numbers-latam"
          />
        </div>
      </div>
    </div>
  );
};
