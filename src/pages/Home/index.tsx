import React from 'react';
import { useTranslation } from 'react-i18next';
import { GeoHead } from '@/seo/GeoHead';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DoctorCard } from './components/DoctorCard';
import { TestimonialCard } from './components/TestimonialCard';
import { BlogCard } from '@/features/articles/ui/BlogCard';
import { BookingModal } from './components/BookingModal';
import { useTypewriter } from '@/hooks/useTypewriter';
import {
  CITIES,
  TRUST_BAR_ITEMS,
  SERVICES,
  DOCTORS,
  TESTIMONIALS,
  MOCK_ARTICLES
} from '@/config/mockData';
import { ShieldCheck } from 'lucide-react';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedDoctor, setSelectedDoctor] = React.useState('');

  // Bulletproof typewriter loop decoupled using custom hook
  const displayText = useTypewriter(CITIES);

  const openBooking = (name: string) => {
    setSelectedDoctor(name);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full overflow-x-hidden">
      <GeoHead
        title="Doctor In | 24/7 Certified Doctors across Latin America"
        description="Certified doctors — at your hotel, home or anywhere in Latin America. Available 24/7 in English, French, German & more."
      />

      {/* Hero Section - Full Height Viewport */}
      <section className="relative w-full lg:h-screen min-h-[600px] bg-white overflow-hidden pt-20 lg:pt-0">
        <div className="relative max-w-[1440px] mx-auto h-full flex flex-col lg:block">

          {/* Decorative glow elements */}
          <div className="absolute top-[-120px] lg:left-[900px] left-[50%] -translate-x-1/2 lg:translate-x-0 w-[700px] h-[700px] bg-[#071f5d08] rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-[300px] left-[-80px] w-[320px] h-[320px] bg-[#F4243408] rounded-full blur-[60px] pointer-events-none" />

          {/* Hero Content */}
          <div className="relative lg:absolute top-0 left-0 lg:left-[80px] w-full lg:w-[580px] h-full flex flex-col justify-center items-center lg:items-start gap-8 py-10 lg:py-[100px] z-20 px-6 lg:px-0 text-center lg:text-left">
            {/* Hero Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <ShieldCheck size={15} className="text-accent" />
              <span className="text-accent font-bold text-[11px] lg:text-[13px]">{t('home.badge')}</span>
            </div>

            {/* Title */}
            <h1 className="text-[40px] lg:text-[62px] leading-[1.1] text-secondary font-heading font-bold w-full max-w-[350px] lg:max-w-[650px]">
              {t('home.title1')} <span className="text-primary italic">{t('home.title2')}</span> <br />
              <span className="text-secondary min-h-[1.2em]">
                {displayText}
                <span className="inline-block w-[3px] h-[0.8em] bg-primary ml-1 animate-pulse" />
              </span>
            </h1>

            {/* Description */}
            <p className="text-base lg:text-[17px] leading-[1.6] lg:leading-[1.7] text-[#4A5568] w-full max-w-[320px] lg:max-w-[500px]">
              {t('home.desc')}
            </p>

            {/* Hero Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto px-10 lg:px-0">
              <Button
                onClick={() => openBooking('Emergency')}
                variant="secondary"
                size="lg"
                className="w-full lg:w-auto !rounded-full !px-10 shadow-lg"
              >
                {t('home.emergencyBtn')}
              </Button>
              <Button
                onClick={() => openBooking('Appointment')}
                variant="primary"
                size="lg"
                className="w-full lg:w-auto !rounded-full !px-10 shadow-xl"
              >
                {t('common.bookNow')}
              </Button>
            </div>
          </div>

          {/* Hero Image - Balanced size and positioning */}
          <div className="relative lg:absolute top-0 lg:top-0 right-0 w-full lg:w-[800px] h-[400px] lg:h-full z-10 flex justify-center items-center lg:items-end mt-10 lg:mt-0">
            {/* Illustration Blob Bg */}
            <div className="absolute w-[300px] h-[300px] lg:w-[800px] lg:h-[800px] bg-gradient-to-br from-[#f0f4f8] to-[#e2ebf4] rounded-full blur-[40px] opacity-60" />

            <img
              src="/images/generated-1778253582567.png"
              alt="Medical professional and traveler"
              className="relative w-full h-[65%] object-contain z-20 pointer-events-none"
            />
          </div>
        </div>
      </section>

      {/* Trust Bar - Responsive */}
      <div className="w-full bg-secondary lg:h-20 py-8 lg:py-0 flex items-center px-6 lg:px-20">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between items-center w-full gap-8 lg:gap-x-16">
          {[
            { icon: TRUST_BAR_ITEMS[0].icon, title: t('home.trustBar.emergency'), sub: t('home.trustBar.emergencySub') },
            { icon: TRUST_BAR_ITEMS[1].icon, title: t('home.trustBar.multilingual'), sub: t('home.trustBar.multilingualSub') },
            { icon: TRUST_BAR_ITEMS[2].icon, title: t('home.trustBar.location'), sub: t('home.trustBar.locationSub') },
            { icon: TRUST_BAR_ITEMS[3].icon, title: t('home.trustBar.certified'), sub: t('home.trustBar.certifiedSub') },
          ].map((item, i) => (
            <React.Fragment key={i}>
              <div className="flex items-center gap-3 shrink-0">
                <item.icon size={22} className="text-surface" />
                <div className="flex flex-col">
                  <span className="text-surface font-heading font-bold text-[15px] leading-tight whitespace-nowrap">{item.title}</span>
                  <span className="text-surface/60 font-body text-[12px] leading-tight whitespace-nowrap">{item.sub}</span>
                </div>
              </div>
              {i < 3 && <div className="hidden lg:block w-px h-8 bg-surface/20"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* How It Works - Step-by-step from .pen */}
      <section className="bg-surface py-20 px-6 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeader
            title={t('home.stepsTitle')}
            description={t('home.stepsDesc')}
            className="!mb-[64px]"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {[
              { num: '01', title: t('home.step1Title'), desc: t('home.step1Desc') },
              { num: '02', title: t('home.step2Title'), desc: t('home.step2Desc') },
              { num: '03', title: t('home.step3Title'), desc: t('home.step3Desc') },
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className={`w-16 h-16 text-surface text-xl font-heading font-black flex items-center justify-center rounded-full mb-5 shadow-lg border-surface transition-transform duration-500 group-hover:scale-110 ${idx === 0 ? 'bg-primary shadow-primary/40' : idx === 1 ? 'bg-secondary shadow-secondary/40' : 'bg-accent shadow-accent/40'}`}>
                  {step.num}
                </div>
                <h3 className="text-xl font-heading font-bold text-secondary mb-4">{step.title}</h3>
                <p className="text-dark-alt/60 text-[15px] leading-relaxed max-w-[280px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section id="specialists" className="bg-surface-alt py-20 px-6 lg:px-20">
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
                onClick={() => openBooking('a Specialist')}
                variant="primary"
                className="!rounded-[30px] !px-12 !py-5 !text-lg !font-bold shadow-xl hover:shadow-primary/20 transition-all hover:-translate-y-1 w-full lg:w-auto"
              >
                {t('common.bookNow')}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DOCTORS.map((doc, idx) => (
              <DoctorCard
                key={idx}
                name={doc.name}
                specialty={doc.specialty}
                info={doc.info}
                image={doc.image}
                onBook={() => openBooking(doc.name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Beautiful single render with id="services" */}
      <section id="services" className="w-full py-20 lg:py-[100px] px-6 lg:px-20 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeader
            title={t('home.servicesTitle')}
            description={t('home.servicesDesc')}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">
            {[
              { ...SERVICES[0], title: t('home.services.emergencyCare'), desc: t('home.services.emergencyCareDesc') },
              { ...SERVICES[1], title: t('home.services.appointment'), desc: t('home.services.appointmentDesc') },
              { ...SERVICES[2], title: t('home.services.specialist'), desc: t('home.services.specialistDesc') },
              { ...SERVICES[3], title: t('home.services.labs'), desc: t('home.services.labsDesc') },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group bg-surface-alt p-10 rounded-[32px] border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-premium transition-all duration-500 hover:-translate-y-2 cursor-default flex flex-col h-full"
              >
                <div className={`w-16 h-16 rounded-2xl ${service.bgColor} ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon size={32} />
                </div>
                <h3 className="text-secondary text-[24px] font-heading font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-dark-alt/70 text-[16px] font-body leading-relaxed mb-8 flex-grow">{service.desc}</p>
                <button
                  onClick={() => openBooking(service.title)}
                  className="flex items-center gap-2 text-primary font-bold font-body group/btn mt-auto"
                >
                  {t('common.bookNow')}
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        doctorName={selectedDoctor}
      />

      {/* Testimonials Section */}
      <section className="bg-secondary py-20 px-6 lg:px-20 overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto relative z-10">
          <SectionHeader
            isLight
            title={t('home.testTitle')}
            description={t('home.testDesc')}
            className="!mb-[48px]"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((test, idx) => (
              <TestimonialCard
                key={idx}
                text={test.text}
                author={test.author}
                location={test.location}
                rating={test.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-6 lg:px-20 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-[600px] text-center md:text-left">
            <h2 className="text-4xl lg:text-[40px] font-heading font-bold text-secondary mb-3">{t('home.blogTitle')}</h2>
            <p className="text-lg text-dark-alt/60 font-body">{t('home.blogDesc')}</p>
          </div>
          <Button variant="outline" className="!px-6 !py-2.5 !text-sm">{t('home.viewAll')}</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_ARTICLES.map((art) => (
            <BlogCard
              key={art.id}
              title={art.title}
              category={art.category}
              excerpt={art.excerpt}
              image={art.image}
              date={art.date}
              slug={art.slug}
            />
          ))}
        </div>
      </section>

      {/* Emergency CTA Band */}
      <section className="w-full bg-primary py-10 lg:py-[60px] px-6 lg:px-20 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-surface text-[28px] lg:text-[40px] font-heading font-bold mb-3 leading-tight">{t('home.ctaTitle')}</h2>
            <p className="text-white/80 text-base lg:text-lg font-body max-w-[600px] mx-auto lg:mx-0 leading-relaxed">
              {t('home.ctaDesc')}
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 w-full lg:w-auto">
            <Button variant="light" size="lg" className="w-full lg:w-auto !text-primary font-bold shadow-2xl">
              {t('home.callEmergency')}
            </Button>
            <span className="text-white/60 font-body text-sm font-medium">{t('home.orWhatsapp')}</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
