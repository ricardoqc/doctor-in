import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Send, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { GeoHead } from '@/seo/GeoHead';

export const ContactPage: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="w-full">
      <GeoHead 
        title="Contact Us | 24/7 Medical Assistance in Latin America"
        description="We are available 24/7 for medical emergencies and standard consultations across Latin America. Contact our English-speaking team today."
      />

      {/* Contact Hero */}
      <section className="relative w-full bg-secondary pt-[140px] pb-[80px] lg:pt-[180px] lg:pb-[100px] px-6 lg:px-20 overflow-hidden text-center">
        {/* Background Decorative elements */}
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-50px] right-[-50px] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />

        <div className="max-w-[1440px] mx-auto relative z-10">
          <h1 className="text-surface text-[42px] lg:text-[56px] font-heading font-bold mb-6">Contact Us</h1>
          <p className="text-white/70 text-base lg:text-[18px] font-body leading-[1.6] max-w-[700px] mx-auto">
            We are available 24/7 for medical emergencies and standard consultations across major cities in Latin America.
          </p>
        </div>
      </section>

      {/* Content Wrapper */}
      <section className="w-full py-20 lg:py-[100px] px-6 lg:px-20 bg-surface-alt">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-20">
          
          {/* Left: Info */}
          <div className="flex-1 lg:max-w-[450px] space-y-12">
            <div className="space-y-6">
              <h2 className="text-secondary text-[32px] lg:text-[40px] font-heading font-bold leading-tight">Direct Contact</h2>
              <p className="text-dark-alt/60 font-body text-lg">
                Our support team speaks English, French, and Spanish. Call us anytime.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Phone, title: 'Call 24/7', detail: '+51 987 654 321', color: 'text-primary', bgColor: 'bg-primary/10' },
                { icon: Mail, title: 'Email Support', detail: 'care@doctorin.pe', color: 'text-accent', bgColor: 'bg-accent/10' },
                { icon: Clock, title: 'Availability', detail: '365 Days / 24 Hours', color: 'text-secondary', bgColor: 'bg-secondary/10' }
              ].map((info, idx) => (
                <div key={idx} className="flex items-center gap-6 p-6 bg-white rounded-[24px] shadow-premium border border-white hover:border-accent/30 transition-all duration-300 group">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${info.bgColor} ${info.color} group-hover:scale-110 transition-transform`}>
                    <info.icon size={24} />
                  </div>
                  <div>
                    <p className="text-dark-alt/40 text-[12px] font-bold uppercase tracking-widest mb-1 font-body">{info.title}</p>
                    <p className="text-secondary font-heading font-bold text-lg">{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-secondary rounded-[32px] text-surface shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
               <h4 className="text-xl font-heading font-bold mb-3 relative z-10">WhatsApp Help</h4>
               <p className="text-white/60 font-body text-sm mb-6 relative z-10">Quickest response for non-emergencies.</p>
               <Button variant="accent" className="w-full flex gap-2 items-center justify-center text-surface font-bold relative z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent">
                 <MessageCircle size={20} />
                 Chat on WhatsApp
               </Button>
            </div>
          </div>

          {/* Right: Form */}
          <div className="flex-1 bg-white p-8 lg:p-12 rounded-[32px] shadow-premium border border-surface-alt flex flex-col justify-center">
            {isSuccess ? (
              <div className="text-center py-12 space-y-6 flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent animate-bounce">
                  <CheckCircle size={44} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-heading font-bold text-secondary">Message Sent!</h3>
                  <p className="text-sm font-body text-[#4A5568] leading-relaxed max-w-[340px] mx-auto">
                    Thank you for reaching out to Doctor In. Our support team has received your message and will get back to you via email within <strong className="text-primary">1 to 2 hours</strong>.
                  </p>
                </div>
                <Button 
                  onClick={() => setIsSuccess(false)}
                  variant="outline" 
                  className="!rounded-full px-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-secondary text-[28px] font-heading font-bold mb-8">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="text-secondary text-sm font-bold font-heading ml-1 block">Full Name</label>
                      <input 
                        required
                        id="contact-name"
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full bg-surface-alt border border-surface-alt rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors font-body text-secondary focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="text-secondary text-sm font-bold font-heading ml-1 block">Email Address</label>
                      <input 
                        required
                        id="contact-email"
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full bg-surface-alt border border-surface-alt rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors font-body text-secondary focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-subject" className="text-secondary text-sm font-bold font-heading ml-1 block">Subject</label>
                    <input 
                      required
                      id="contact-subject"
                      type="text" 
                      placeholder="Medical Consultation, Inquiry, etc." 
                      className="w-full bg-surface-alt border border-surface-alt rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors font-body text-secondary focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-secondary text-sm font-bold font-heading ml-1 block">Your Message</label>
                    <textarea 
                      required
                      id="contact-message"
                      rows={5}
                      placeholder="How can we help you?" 
                      className="w-full bg-surface-alt border border-surface-alt rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors font-body text-secondary resize-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
                    />
                  </div>
                  <Button type="submit" variant="primary" size="lg" className="w-full flex gap-3 items-center justify-center font-bold shadow-urgent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent">
                    <Send size={20} />
                    Send Message
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[450px] relative overflow-hidden">
        <img 
          src="/images/generated-1778256073774.png" 
          alt="Latam Operations Map" 
          className="w-full h-full object-cover grayscale brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-alt/20 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center animate-pulse mb-4 mx-auto">
            <div className="w-6 h-6 bg-primary rounded-full" />
          </div>
          <span className="bg-secondary text-surface px-6 py-2 rounded-full font-heading font-bold text-sm shadow-2xl">
            Latam Operations Center
          </span>
        </div>
      </section>
    </div>
  );
};
export default ContactPage;
