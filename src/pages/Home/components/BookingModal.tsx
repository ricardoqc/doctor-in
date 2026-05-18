import React, { useState } from 'react';
import { X, Send, ShieldCheck, MapPin, Phone, Mail, User, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctorName: string;
}

const SA_COUNTRIES = [
  'Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 
  'Ecuador', 'Paraguay', 'Peru', 'Uruguay', 'Venezuela', 
  'Other country'
];

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, doctorName }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-secondary/90 backdrop-blur-md">
      <div className="bg-white w-full max-w-[550px] rounded-[32px] shadow-2xl overflow-hidden relative border border-white/20">
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          aria-label="Close booking modal"
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-surface-alt flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          <X size={20} />
        </button>

        {isSuccess ? (
          /* Premium Inline Success Feedback */
          <div className="p-8 lg:p-12 text-center space-y-6 flex flex-col items-center justify-center min-h-[400px]">
            <div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent animate-bounce">
              <CheckCircle size={44} />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-heading font-bold text-secondary">Request Received!</h3>
              <p className="text-sm font-body text-[#4A5568] leading-relaxed max-w-[340px] mx-auto">
                Thank you! Your request for coordinator assistance with <strong className="text-primary">{doctorName}</strong> has been received. Our medical team will reach out to you via WhatsApp or Email within <strong className="text-primary">15 minutes</strong>.
              </p>
            </div>
            <Button 
              onClick={handleClose}
              variant="primary" 
              className="!rounded-full px-10 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Great, thank you!
            </Button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="bg-secondary p-8 text-surface">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck size={28} className="text-accent" />
                <h2 className="text-2xl font-heading font-bold">Book Consultation</h2>
              </div>
              <p className="text-white/60 font-body text-sm">
                Requesting a visit with <span className="text-accent font-bold">{doctorName}</span>. 
                We coordinate via WhatsApp or Email immediately.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-5 overflow-y-auto max-h-[75vh]">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="booking-name" className="text-secondary text-xs font-bold font-heading ml-1 uppercase opacity-50 block">Full Name</label>
                    <div className="relative">
                      <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" />
                      <input 
                        required 
                        id="booking-name"
                        type="text" 
                        placeholder="e.g. John Doe" 
                        className="w-full bg-surface-alt border-none rounded-2xl pl-12 pr-6 py-4 focus:ring-2 focus:ring-primary transition-all font-body text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" 
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="booking-email" className="text-secondary text-xs font-bold font-heading ml-1 uppercase opacity-50 block">Email Address</label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" />
                      <input 
                        required 
                        id="booking-email"
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full bg-surface-alt border-none rounded-2xl pl-12 pr-6 py-4 focus:ring-2 focus:ring-primary transition-all font-body text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" 
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="booking-phone" className="text-secondary text-xs font-bold font-heading ml-1 uppercase opacity-50 block">Phone / WhatsApp</label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" />
                      <input 
                        required 
                        id="booking-phone"
                        type="tel" 
                        placeholder="+51 XXX XXX XXX" 
                        className="w-full bg-surface-alt border-none rounded-2xl pl-12 pr-6 py-4 focus:ring-2 focus:ring-primary transition-all font-body text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" 
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="booking-location" className="text-secondary text-xs font-bold font-heading ml-1 uppercase opacity-50 block">Current Location</label>
                    <div className="relative">
                      <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" />
                      <select 
                        required 
                        id="booking-location"
                        className="w-full bg-surface-alt border-none rounded-2xl pl-12 pr-6 py-4 focus:ring-2 focus:ring-primary transition-all font-body text-secondary appearance-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        <option value="">Select country...</option>
                        {SA_COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="booking-description" className="text-secondary text-xs font-bold font-heading ml-1 uppercase opacity-50 block">Brief Medical Description</label>
                  <textarea 
                    required 
                    id="booking-description"
                    rows={3} 
                    placeholder="How can our specialist help you today?" 
                    className="w-full bg-surface-alt border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all font-body text-secondary resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" 
                  />
                </div>
              </div>

              <div className="flex gap-3 items-start p-4 bg-accent/5 rounded-2xl border border-accent/10">
                <input required type="checkbox" id="privacy" className="mt-1 w-4 h-4 accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" />
                <label htmlFor="privacy" className="text-[11px] text-secondary/70 font-body leading-relaxed select-none">
                  I agree to the processing of my data for medical care purposes. View our{' '}
                  <Link to="/terms" className="text-primary font-bold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Terms</Link> and{' '}
                  <Link to="/privacy" className="text-primary font-bold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Privacy Policy</Link>.
                </label>
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                className="w-full !rounded-2xl !py-5 flex gap-3 items-center justify-center font-bold shadow-xl shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Send size={18} />
                Confirm Booking Request
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
