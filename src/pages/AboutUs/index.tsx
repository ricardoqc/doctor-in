import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GeoHead } from '@/seo/GeoHead';
import { ABOUT_VALUES as values } from '@/config/mockData';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { SpecialistsSection } from '@/features/specialists/ui/SpecialistsSection';


export const AboutUs: React.FC = () => {
  const { t, i18n } = useTranslation();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://doctor-in.com/about-us/#webpage",
        "url": "https://doctor-in.com/about-us",
        "name": "About Us | Doctor In",
        "description": "Learn about our mission to provide seamless, premium medical assistance to international travelers and expats across Latin America."
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://doctor-in.com/about-us/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://doctor-in.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About Us",
            "item": "https://doctor-in.com/about-us"
          }
        ]
      }
    ]
  };

  return (
    <div className="w-full">
      <GeoHead 
        title="About Doctor In | Premium Healthcare for Travelers in Latam"
        description="Learn about Doctor In's mission to provide premium, accessible medical care to international travelers and expats across Latin America."
        jsonLd={jsonLd}
      />

      {/* About Hero */}
      <section className="relative w-full bg-secondary pt-[140px] pb-[100px] lg:pt-[180px] lg:pb-[140px] px-6 lg:px-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-50px] left-[-50px] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px]" />

        <div className="max-w-[1440px] mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-8">
            <ShieldCheck size={16} className="text-accent" />
            <span className="text-accent text-[13px] font-bold">{t('about.heroBadge')}</span>
          </div>
          <h1 className="text-surface text-[42px] lg:text-[56px] font-heading font-bold mb-6 leading-[1.1] max-w-[900px] mx-auto">
            {t('about.heroTitle')}
          </h1>
          <p className="text-white/70 text-base lg:text-[18px] font-body leading-[1.6] max-w-[700px] mx-auto">
            {t('about.heroDesc')}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-20 lg:py-[100px] px-6 lg:px-20 bg-white">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-[100px]">
          <div className="flex-1 space-y-8">
            <h2 className="text-secondary text-[32px] lg:text-[40px] font-heading font-bold leading-tight">{t('about.missionTitle')}</h2>
            <p className="text-dark-alt/70 text-[18px] font-body leading-[1.7]">
              {t('about.missionP1')}
            </p>
            <p className="text-dark-alt/70 text-[18px] font-body leading-[1.7]">
              {t('about.missionP2')}
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Award size={20} />
                </div>
                <span className="font-heading font-bold text-secondary">{t('about.missionPremium')}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Heart size={20} />
                </div>
                <span className="font-heading font-bold text-secondary">{t('about.missionPatient')}</span>
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
            title={t('about.valuesTitle')}
            className="!mb-[64px]"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { ...values[0], title: t('about.values.languageTitle'), desc: t('about.values.languageDesc') },
              { ...values[1], title: t('about.values.timeTitle'), desc: t('about.values.timeDesc') },
              { ...values[2], title: t('about.values.certTitle'), desc: t('about.values.certDesc') }
            ].map((value, idx) => (
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

      <SpecialistsSection />

      {/* Legal Pages Links */}
      <div className="w-full bg-white pb-16 px-6 text-center">
        <div className="max-w-[600px] mx-auto border-t border-surface-alt pt-8">
          <p className="text-xs text-dark-alt/50 font-body">
            {i18n.language.startsWith('es') 
              ? 'Para obtener más información sobre nuestras prácticas legales, consulte nuestros '
              : 'For more information on our legal practices, please view our '}
            <Link to="/terms" className="text-primary font-semibold hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent">{i18n.language.startsWith('es') ? 'Términos de Uso' : 'Terms of Use'}</Link>
            {', '}
            <Link to="/privacy" className="text-primary font-semibold hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent">{i18n.language.startsWith('es') ? 'Política de Privacidad' : 'Privacy Policy'}</Link>
            {i18n.language.startsWith('es') ? ' y ' : ' and '}
            <Link to="/cookie-policy" className="text-primary font-semibold hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent">{i18n.language.startsWith('es') ? 'Política de Cookies' : 'Cookie Policy'}</Link>.
          </p>
        </div>
      </div>

      {/* Contact CTA Band */}
      <section className="w-full bg-primary py-10 lg:py-[60px] px-6 lg:px-20 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-surface text-[28px] lg:text-[40px] font-heading font-bold mb-3 leading-tight">{t('about.ctaTitle')}</h2>
            <p className="text-white/80 text-base lg:text-lg font-body max-w-[600px] mx-auto lg:mx-0 leading-relaxed">
              {t('about.ctaDesc')}
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 w-full lg:w-auto">
            <Button 
              href={t('common.whatsappEmergencyLink')}
              target="_blank"
              rel="noopener noreferrer"
              variant="light" 
              size="lg" 
              className="w-full lg:w-auto !text-primary font-bold shadow-2xl flex gap-2.5 items-center justify-center"
            >
              <WhatsAppIcon className="text-primary" />
              {t('about.whatsappSupport')}
            </Button>
            <span className="text-white/60 font-body text-sm font-medium">{t('about.availableIn')}</span>
            <p className="text-white/40 text-xs text-center max-w-[320px] leading-relaxed">
              {t('home.emergencyDisclaimer')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
