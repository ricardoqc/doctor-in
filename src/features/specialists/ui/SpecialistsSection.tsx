import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Languages, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface SpecialistsSectionProps {
  id?: string;
  className?: string;
}

export const SpecialistsSection: React.FC<SpecialistsSectionProps> = ({
  id = 'specialists',
  className = ''
}) => {
  const { t } = useTranslation();

  return (
    <section id={id} className={`bg-surface-alt py-20 px-6 lg:px-20 ${className}`}>
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-12 mb-16">
          <div className="text-center lg:text-left space-y-6 max-w-[700px]">
            {/* Flag Banner */}
            <div className="flex justify-center lg:justify-start flex-wrap gap-3 lg:gap-4">
              {['ar', 'bo', 'br', 'cl', 'co', 'ec', 'py', 'pe', 'uy', 've'].map((code, i) => (
                <img
                  key={i}
                  src={`https://flagcdn.com/${code}.svg`}
                  alt={code}
                  className="w-6 lg:w-8 h-auto rounded shadow-sm"
                  loading="lazy"
                />
              ))}
            </div>

            <div className="space-y-4">
              <h2 className="text-[32px] lg:text-[48px] font-heading font-bold text-secondary leading-tight">
                {t('home.specTitle')}
              </h2>
              <p className="text-lg text-dark-alt/60 font-body">
                {t('home.specDesc')}
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <Button
              href="https://app.doctor-in.com/"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="!rounded-[30px] !px-12 !py-5 !text-lg !font-bold shadow-xl hover:shadow-primary/20 transition-all hover:-translate-y-1 w-full lg:w-auto flex gap-3 items-center justify-center"
            >
              <Calendar size={22} />
              {t('common.bookNow')}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Certified Experts */}
          <div className="bg-white p-8 rounded-[24px] shadow-premium hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-surface-alt flex flex-col items-start text-left">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-[20px] font-heading font-bold text-secondary mb-3">
              {t('home.specialistCard1Title')}
            </h3>
            <p className="text-dark-alt/75 font-body text-sm leading-relaxed">
              {t('home.specialistCard1Desc')}
            </p>
          </div>
          
          {/* Card 2: Multilingual Support */}
          <div className="bg-white p-8 rounded-[24px] shadow-premium hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-surface-alt flex flex-col items-start text-left">
            <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
              <Languages size={24} />
            </div>
            <h3 className="text-[20px] font-heading font-bold text-secondary mb-3">
              {t('home.specialistCard2Title')}
            </h3>
            <p className="text-dark-alt/75 font-body text-sm leading-relaxed">
              {t('home.specialistCard2Desc')}
            </p>
          </div>

          {/* Card 3: Care Anywhere */}
          <div className="bg-white p-8 rounded-[24px] shadow-premium hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-surface-alt flex flex-col items-start text-left">
            <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6">
              <MapPin size={24} />
            </div>
            <h3 className="text-[20px] font-heading font-bold text-secondary mb-3">
              {t('home.specialistCard3Title')}
            </h3>
            <p className="text-dark-alt/75 font-body text-sm leading-relaxed">
              {t('home.specialistCard3Desc')}
            </p>
          </div>
        </div>

        {/* Join Us Banner/Callout */}
        <div className="mt-12 bg-white/80 backdrop-blur-md rounded-[32px] p-8 lg:p-10 border border-primary/10 flex flex-col md:flex-row justify-between items-center gap-8 shadow-premium">
          <div className="text-center md:text-left space-y-2 max-w-[750px]">
            <h4 className="text-xl font-heading font-bold text-secondary">
              {t('home.specialistJoinTitle')}
            </h4>
            <p className="text-sm font-body text-dark-alt/75 leading-relaxed">
              {t('home.specialistJoinDesc')}
            </p>
          </div>
          <Button
            href="https://management.doctor-in.com/?from=candidates"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            className="!rounded-[30px] !px-8 !py-4 !text-base !font-bold hover:shadow-lg transition-all shrink-0 w-full md:w-auto text-center"
          >
            {t('common.joinUs')}
          </Button>
        </div>
      </div>
    </section>
  );
};
