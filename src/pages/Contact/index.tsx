import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Send, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { GeoHead } from '@/seo/GeoHead';
import { sendContactEmail } from '@/services/emailService';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';


export const ContactPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    try {
      const success = await sendContactEmail({ name, email, subject, message });
      if (success) {
        setIsSuccess(true);
      } else {
        setErrorMessage(
          i18n.language.startsWith('es')
            ? 'Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo.'
            : 'There was an error sending your message. Please try again.'
        );
      }
    } catch (error) {
      setErrorMessage(
        i18n.language.startsWith('es')
          ? 'Error de conexión. Intente por WhatsApp o por correo directamente.'
          : 'Connection error. Please try via WhatsApp or direct email.'
      );
    } finally {
      setIsSending(false);
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://doctor-in.com/contact/#webpage",
        "url": "https://doctor-in.com/contact",
        "name": "Contact Us | Doctor In",
        "description": "We are available 24/7 for urgent medical consultations and standard care across Latin America. Contact our multilingual team today."
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://doctor-in.com/contact/#breadcrumb",
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
            "name": "Contact Us",
            "item": "https://doctor-in.com/contact"
          }
        ]
      }
    ]
  };

  return (
    <div className="w-full">
      <GeoHead 
        title="Contact Us | 24/7 Medical Assistance in Latin America"
        description="Contact Doctor In for urgent medical consultations across Latin America. Available 24/7, multilingual team. Serving travelers & expats."
        jsonLd={jsonLd}
      />

      {/* Contact Hero */}
      <section className="relative w-full bg-secondary pt-[140px] pb-[80px] lg:pt-[180px] lg:pb-[100px] px-6 lg:px-20 overflow-hidden text-center">
        {/* Background Decorative elements */}
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-50px] right-[-50px] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />

        <div className="max-w-[1440px] mx-auto relative z-10">
          <h1 className="text-surface text-[42px] lg:text-[56px] font-heading font-bold mb-6">{t('contact.heroTitle')}</h1>
          <p className="text-white/70 text-base lg:text-[18px] font-body leading-[1.6] max-w-[700px] mx-auto">
            {t('contact.heroDesc')}
          </p>
        </div>
      </section>

      {/* Content Wrapper */}
      <section className="w-full py-20 lg:py-[100px] px-6 lg:px-20 bg-surface-alt">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-20">
          
          {/* Left: Info */}
          <div className="flex-1 lg:max-w-[450px] space-y-12">
            <div className="space-y-6">
              <h2 className="text-secondary text-[32px] lg:text-[40px] font-heading font-bold leading-tight">{t('contact.directTitle')}</h2>
              <p className="text-dark-alt/60 font-body text-lg">
                {t('contact.directDesc')}
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: WhatsAppIcon, title: t('contact.waTitle'), detail: '+51 966 386 803', href: t('common.whatsappGeneralLink'), color: 'text-primary', bgColor: 'bg-primary/10' },
                { icon: Mail, title: t('contact.emailTitle'), detail: 'doctorin.health@gmail.com', href: 'mailto:doctorin.health@gmail.com', color: 'text-accent', bgColor: 'bg-accent/10' },
                { icon: Clock, title: t('contact.availTitle'), detail: t('contact.availDesc'), href: undefined, color: 'text-secondary', bgColor: 'bg-secondary/10' }
              ].map((info, idx) => {
                const content = (
                  <>
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${info.bgColor} ${info.color} group-hover:scale-110 transition-transform`}>
                      <info.icon size={24} />
                    </div>
                    <div>
                      <p className="text-dark-alt/40 text-[12px] font-bold uppercase tracking-widest mb-1 font-body">{info.title}</p>
                      <p className="text-secondary font-heading font-bold text-lg">{info.detail}</p>
                    </div>
                  </>
                );
                const wrapperClass = "flex items-center gap-6 p-6 bg-white rounded-[24px] shadow-premium border border-white hover:border-accent/30 transition-all duration-300 group w-full text-left";
                if (info.href) {
                  const isExternal = info.href.startsWith('http');
                  return (
                    <a 
                      key={idx} 
                      href={info.href} 
                      className={wrapperClass}
                      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {content}
                    </a>
                  );
                }
                return (
                  <div key={idx} className={wrapperClass}>
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="p-8 bg-secondary rounded-[32px] text-surface shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
               <h4 className="text-xl font-heading font-bold mb-3 relative z-10">{t('contact.waTitle')}</h4>
               <p className="text-white/60 font-body text-sm mb-6 relative z-10">{t('contact.waDesc')}</p>
               <Button 
                 href={t('common.whatsappGeneralLink')}
                 target="_blank"
                 rel="noopener noreferrer"
                 variant="accent" 
                 className="w-full flex gap-2.5 items-center justify-center text-surface font-bold relative z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
               >
                 <WhatsAppIcon className="text-white" />
                 {t('contact.waBtn')}
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
                  <h3 className="text-2xl font-heading font-bold text-secondary">{t('contact.successTitle')}</h3>
                  <p className="text-sm font-body text-[#4A5568] leading-relaxed max-w-[340px] mx-auto">
                    {t('contact.successDesc')} <strong className="text-primary">{t('contact.successTime')}</strong>.
                  </p>
                </div>
                <Button 
                  onClick={() => setIsSuccess(false)}
                  variant="outline" 
                  className="!rounded-full px-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  {t('contact.successBtn')}
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-secondary text-[28px] font-heading font-bold mb-8">{t('contact.formTitle')}</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-4 bg-red-50 text-red-700 text-sm font-semibold rounded-2xl border border-red-150">
                      {errorMessage}
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="text-secondary text-sm font-bold font-heading ml-1 block">{t('contact.nameLabel')}</label>
                      <input 
                        required
                        id="contact-name"
                        name="name"
                        type="text" 
                        placeholder={t('contact.namePlaceholder')}
                        className="w-full bg-surface-alt border border-surface-alt rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors font-body text-secondary focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="text-secondary text-sm font-bold font-heading ml-1 block">{t('contact.emailLabel')}</label>
                      <input 
                        required
                        id="contact-email"
                        name="email"
                        type="email" 
                        placeholder={t('contact.emailPlaceholder')}
                        className="w-full bg-surface-alt border border-surface-alt rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors font-body text-secondary focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-subject" className="text-secondary text-sm font-bold font-heading ml-1 block">{t('contact.subjectLabel')}</label>
                    <input 
                      required
                      id="contact-subject"
                      name="subject"
                      type="text" 
                      placeholder={t('contact.subjectPlaceholder')}
                      className="w-full bg-surface-alt border border-surface-alt rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors font-body text-secondary focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-secondary text-sm font-bold font-heading ml-1 block">{t('contact.messageLabel')}</label>
                    <textarea 
                      required
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder={t('contact.messagePlaceholder')}
                      className="w-full bg-surface-alt border border-surface-alt rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors font-body text-secondary resize-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    disabled={isSending}
                    className="w-full flex gap-3 items-center justify-center font-bold shadow-urgent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent disabled:opacity-50"
                  >
                    {isSending ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <Send size={20} />
                    )}
                    {isSending ? (i18n.language.startsWith('es') ? 'Enviando...' : 'Sending...') : t('contact.submitBtn')}
                  </Button>
                  <p className="text-[11px] text-center text-dark-alt/50 font-body mt-4">
                    {i18n.language.startsWith('es') ? (
                      <>
                        Al enviar este formulario, aceptas nuestros{' '}
                        <Link to="/terms" className="text-primary font-semibold hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent">Términos de Uso</Link>
                        {' '}y nuestra{' '}
                        <Link to="/privacy" className="text-primary font-semibold hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent">Política de Privacidad</Link>.
                      </>
                    ) : (
                      <>
                        By submitting this form, you agree to our{' '}
                        <Link to="/terms" className="text-primary font-semibold hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent">Terms of Use</Link>
                        {' '}and{' '}
                        <Link to="/privacy" className="text-primary font-semibold hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent">Privacy Policy</Link>.
                      </>
                    )}
                  </p>
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
            {t('contact.mapMarker')}
          </span>
        </div>
      </section>
    </div>
  );
};
