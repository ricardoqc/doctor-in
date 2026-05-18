import React from 'react';
import { Button } from '@/components/ui/Button';

interface DoctorCardProps {
  name: string;
  specialty: string;
  image: string;
  info: string; // Used for languages/experience
  onBook: () => void;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ 
  name, 
  specialty, 
  image, 
  info,
  onBook 
}) => {
  return (
    <div className="bg-surface rounded-2xl overflow-hidden shadow-premium group transition-all duration-300 hover:shadow-2xl border border-surface-alt flex flex-col h-full w-full max-w-[320px] mx-auto">
      {/* Image Section */}
      <div className="h-[200px] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow gap-2">
        <h3 className="text-xl font-heading font-bold text-secondary">{name}</h3>
        <p className="text-sm font-body font-bold text-accent">{specialty}</p>
        <p className="text-sm font-body text-dark-alt/70 mb-4">{info}</p>
        
        <div className="mt-auto">
          <Button 
            onClick={onBook}
            variant="secondary" 
            className="w-full !rounded-[30px] !py-3 !text-sm !font-bold flex items-center justify-center gap-2"
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </div>
  );
};
