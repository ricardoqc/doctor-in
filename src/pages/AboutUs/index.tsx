import React from 'react';
import { ShieldCheck, Award, Heart } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GeoHead } from '@/seo/GeoHead';
import { ABOUT_TEAM as team, ABOUT_VALUES as values } from '@/config/mockData';

export const AboutUs: React.FC = () => {
  return (
    <div className="w-full">
      <GeoHead 
        title="About Doctor In | Premium Healthcare for Travelers in Latam"
        description="Learn about our mission to provide immediate, premium medical assistance to international travelers across Latin America."
      />

      {/* About Hero */}
      <section className="relative w-full bg-secondary pt-[140px] pb-[100px] lg:pt-[180px] lg:pb-[140px] px-6 lg:px-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-50px] left-[-50px] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px]" />

        <div className="max-w-[1440px] mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-8">
            <ShieldCheck size={16} className="text-accent" />
            <span className="text-accent text-[13px] font-bold">About Doctor In</span>
          </div>
          <h1 className="text-surface text-[42px] lg:text-[56px] font-heading font-bold mb-6 leading-[1.1] max-w-[900px] mx-auto">
            Healthcare that speaks your language.
          </h1>
          <p className="text-white/70 text-base lg:text-[18px] font-body leading-[1.6] max-w-[700px] mx-auto">
            We bridge the gap between international travelers and quality medical care across Latin America, ensuring you're never alone when you need help most.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-20 lg:py-[100px] px-6 lg:px-20 bg-white">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-[100px]">
          <div className="flex-1 space-y-8">
            <h2 className="text-secondary text-[32px] lg:text-[40px] font-heading font-bold leading-tight">Our Mission</h2>
            <p className="text-dark-alt/70 text-[18px] font-body leading-[1.7]">
              Traveling in a foreign country is an incredible experience, but a medical emergency can quickly turn it into a stressful ordeal. Language barriers, unfamiliar healthcare systems, and lack of immediate access to trusted professionals are common challenges.
            </p>
            <p className="text-dark-alt/70 text-[18px] font-body leading-[1.7]">
              Our mission is to provide seamless, premium, and immediate medical assistance to expats and tourists across Latin America. Whether it's a minor consultation at your hotel or an urgent emergency, we bring the best doctors directly to you.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Award size={20} />
                </div>
                <span className="font-heading font-bold text-secondary">Premium Standard</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Heart size={20} />
                </div>
                <span className="font-heading font-bold text-secondary">Patient-First Care</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full lg:w-auto">
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/10 rounded-[32px] blur-2xl group-hover:bg-accent/20 transition-all duration-500" />
              <img 
                src="/images/generated-1778255278844.png" 
                alt="Our Medical Team" 
                className="relative w-full aspect-[4/3] lg:h-[500px] object-cover rounded-[24px] shadow-premium z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-20 lg:py-[100px] px-6 lg:px-20 bg-surface-alt">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeader 
            title="Why Choose Doctor In?"
            className="!mb-[64px]"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[24px] shadow-premium border border-surface-alt hover:-translate-y-2 transition-all duration-300">
                <div className={`w-[60px] h-[60px] rounded-[30px] flex items-center justify-center mb-6 ${value.bgColor} ${value.color}`}>
                  <value.icon size={24} />
                </div>
                <h3 className="text-secondary text-[22px] font-heading font-bold mb-4">{value.title}</h3>
                <p className="text-dark-alt/70 text-base font-body leading-[1.6]">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-20 lg:py-[100px] px-6 lg:px-20 bg-white">
        <div className="max-w-[1440px] mx-auto text-center">
          <SectionHeader 
            title="Medical Leadership"
            description="Meet the directors and lead specialists behind our trusted medical network."
            className="!mb-[64px]"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((doc, idx) => (
              <div key={idx} className="bg-white rounded-[16px] overflow-hidden shadow-premium border border-surface-alt group hover:-translate-y-2 transition-all duration-300">
                <div className="h-[240px] overflow-hidden relative">
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <Button variant="light" size="sm" className="w-full !text-secondary font-bold">View Profile</Button>
                  </div>
                </div>
                <div className="p-6 text-left space-y-2">
                  <h4 className="text-secondary text-[20px] font-heading font-bold">{doc.name}</h4>
                  <p className="text-accent text-[14px] font-bold font-body">{doc.specialty}</p>
                  <p className="text-dark-alt/60 text-[14px] font-body">{doc.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Band */}
      <section className="w-full bg-primary py-10 lg:py-[60px] px-6 lg:px-20 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-surface text-[28px] lg:text-[40px] font-heading font-bold mb-3 leading-tight">Need Medical Assistance?</h2>
            <p className="text-white/80 text-base lg:text-lg font-body max-w-[600px] mx-auto lg:mx-0 leading-relaxed">
              Our network covers all major cities in Latin America. Available 24/7 at your doorstep.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 w-full lg:w-auto">
            <Button variant="light" size="lg" className="w-full lg:w-auto !text-primary font-bold shadow-2xl">
              Call Support Now
            </Button>
            <span className="text-white/60 font-body text-sm font-medium">Available in English, French & more</span>
          </div>
        </div>
      </section>
    </div>
  );
};
