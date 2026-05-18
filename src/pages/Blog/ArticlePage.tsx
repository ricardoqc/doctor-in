import React from 'react';
import { Calendar, Clock, ChevronRight, PhoneCall, MessageCircle, Share2, Info } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { GeoHead } from '@/seo/GeoHead';

export const ArticlePage: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <GeoHead 
        title="Altitude Sickness Guide for Latam | Doctor In Blog"
        description="A complete traveler's guide on how to deal with altitude sickness in Cusco and other high-altitude destinations across Latin America."
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 pt-[120px] pb-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          
          {/* Main Content Area */}
          <article className="flex-1 max-w-[800px]">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 mb-8 text-sm font-body">
              <span className="text-primary hover:underline cursor-pointer">Home</span>
              <ChevronRight size={14} className="text-dark-alt/30" />
              <span className="text-primary hover:underline cursor-pointer">Blog</span>
              <ChevronRight size={14} className="text-dark-alt/30" />
              <span className="text-dark-alt/60">Health & Travel in Latam</span>
            </nav>

            {/* Title */}
            <h1 className="text-secondary text-[32px] lg:text-[48px] font-heading font-bold leading-[1.2] mb-8">
              How to Deal with Altitude Sickness in Latam: A Complete Traveler's Guide
            </h1>

            {/* Author Row */}
            <div className="flex items-center gap-4 mb-10 pb-10 border-b border-surface-alt">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center overflow-hidden">
                <img src="/images/generated-1778086207159.png" alt="Author" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-secondary font-heading font-bold">Dr. Maria Gonzalez</p>
                <div className="flex items-center gap-4 text-dark-alt/50 text-xs mt-1 font-body">
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> May 15, 2025</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} /> 8 min read</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="mb-12">
              <img 
                src="/images/generated-1778255629702.png" 
                alt="Traveler in Latam" 
                className="w-full h-[300px] lg:h-[450px] object-cover rounded-[32px] shadow-premium"
              />
            </div>

            {/* Article Body */}
            <div className="space-y-8 text-dark-alt/80 text-[18px] font-body leading-[1.8]">
              <p>
                Many iconic destinations in Latin America, from Cusco to La Paz or Bogota, sit at high elevations. While these cities offer magnificent experiences, the high altitude can pose a significant challenge for many international visitors. Known locally as 'Soroche', altitude sickness is a common ailment that shouldn't be underestimated.
              </p>

              <h2 className="text-secondary text-[28px] font-heading font-bold mt-12 mb-4">Recognizing the Symptoms</h2>
              <p>
                Symptoms usually develop within 6 to 24 hours of reaching high altitude. Look out for headache, nausea, dizziness, fatigue, and shortness of breath. If you experience these, it's crucial to stop ascending and rest.
              </p>

              {/* Quote Block */}
              <div className="bg-accent/10 border border-accent/30 rounded-[24px] p-8 lg:p-10 my-12 relative">
                <div className="absolute top-[-20px] left-8 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-secondary shadow-lg">
                  <Info size={20} />
                </div>
                <p className="text-secondary text-[20px] lg:text-[22px] font-body font-bold italic leading-relaxed">
                  "The key to beating altitude sickness is acclimatization. Give your body at least 24 to 48 hours of rest upon arriving in a high-altitude city before engaging in strenuous activities."
                </p>
              </div>

              <h2 className="text-secondary text-[28px] font-heading font-bold mt-12 mb-4">When to Seek Medical Help</h2>
              <p>
                If symptoms worsen or you experience severe shortness of breath at rest, confusion, or inability to walk, seek immediate medical attention. Our English-speaking doctors across Latin America are available 24/7 to provide oxygen therapy and necessary medications right at your hotel.
              </p>

              {/* Comparison Table */}
              <div className="my-12 overflow-hidden rounded-[24px] border border-surface-alt shadow-premium">
                <div className="bg-secondary p-6">
                  <h3 className="text-surface font-heading font-bold text-xl">Mild Soroche vs. Severe Altitude Sickness</h3>
                </div>
                <div className="grid grid-cols-2 bg-surface-alt font-bold p-4 border-b border-surface-alt text-secondary">
                  <div>Mild Symptoms</div>
                  <div>Severe Warnings</div>
                </div>
                <div className="grid grid-cols-2 p-6 gap-6">
                  <ul className="space-y-3 list-disc pl-4 text-sm">
                    <li>Slight headache</li>
                    <li>Loss of appetite</li>
                    <li>Difficulty sleeping</li>
                    <li>Nausea</li>
                  </ul>
                  <ul className="space-y-3 list-disc pl-4 text-sm text-primary font-medium">
                    <li>Persistent vomiting</li>
                    <li>Confusion / Disorientation</li>
                    <li>Difficulty breathing at rest</li>
                    <li>Fluid in lungs (HEOP)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Social Share */}
            <div className="mt-16 pt-8 border-t border-surface-alt flex items-center justify-between">
              <span className="text-secondary font-heading font-bold flex items-center gap-2">
                <Share2 size={18} /> Share this guide
              </span>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full bg-surface-alt hover:bg-accent/20 transition-all flex items-center justify-center text-secondary">
                  <MessageCircle size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-surface-alt hover:bg-accent/20 transition-all flex items-center justify-center text-secondary">
                  <Share2 size={18} />
                </button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="w-full lg:w-[380px] space-y-10">
            
            {/* Help Widget */}
            <div className="bg-primary p-8 lg:p-10 rounded-[32px] text-surface shadow-urgent relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-125 transition-transform duration-700" />
              <h3 className="text-[24px] lg:text-[28px] font-heading font-bold mb-4 relative z-10 leading-tight">
                Medical Emergency?
              </h3>
              <p className="text-white/80 font-body text-base mb-8 relative z-10">
                Our English-speaking doctors can assist you directly at your hotel across Latin America. 24/7 Availability.
              </p>
              <Button variant="light" size="lg" className="w-full !text-primary font-bold shadow-2xl flex gap-3 items-center relative z-10">
                <PhoneCall size={20} />
                Call Doctor Now
              </Button>
            </div>

            {/* Popular Articles */}
            <div className="bg-surface-alt p-8 rounded-[32px] border border-surface-alt/50">
              <h4 className="text-secondary text-[20px] font-heading font-bold mb-6">Popular Articles</h4>
              <div className="space-y-6">
                {[
                  { title: 'Vaccinations for Latin America', date: 'April 12, 2025', image: '/images/generated-1778253582567.png' },
                  { title: 'Safe Street Food Guide', date: 'March 28, 2025', image: '/images/generated-1778253582567.png' }
                ].map((art, idx) => (
                  <div key={idx} className="flex gap-4 group cursor-pointer">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                      <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h5 className="text-secondary font-heading font-bold text-sm leading-tight group-hover:text-primary transition-colors">{art.title}</h5>
                      <span className="text-dark-alt/40 text-[12px] mt-1 font-body">{art.date}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full text-primary font-heading font-bold text-sm mt-8 hover:underline">View All Articles</button>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
};
