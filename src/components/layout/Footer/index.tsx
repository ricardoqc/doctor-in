import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Send } from 'lucide-react';
import { sendNewsletterEmail } from '@/services/emailService';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/Doctorin.health/',
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/doctorin.health?igsh=MTM2cTNpdjUybWN1ZQ%3D%3D&utm_source=qr',
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@doctorin.health?_r=1&_t=ZS-97IEdoHSqhd',
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    )
  }
];



export const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await sendNewsletterEmail(email);
      if (res) {
        setSuccess(true);
        setEmail('');
      } else {
        setError(
          i18n.language.startsWith('es')
            ? 'Error al suscribirse. Intente de nuevo.'
            : 'Error subscribing. Please try again.'
        );
      }
    } catch (err) {
      setError(
        i18n.language.startsWith('es')
          ? 'Error de red. Intente de nuevo.'
          : 'Network error. Please try again.'
      );
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-dark-alt text-surface pt-20 pb-10 overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand & Mission */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center group">
              <img 
                src="/images/brands/doctor-in-logo-1.png" 
                alt="Doctor In Logo" 
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-surface/60 font-body leading-relaxed max-w-[280px]">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((item, i) => (
                <a 
                  key={i} 
                  href={item.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-surface/5 hover:bg-accent/20 hover:text-accent rounded-full flex items-center justify-center transition-all duration-300 border border-surface/10 hover:border-accent/30"
                  aria-label={`Visit our ${item.name}`}
                >
                  <item.icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8 lg:pl-10">
            <h4 className="text-lg font-heading font-bold text-accent">{t('footer.quickLinks')}</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-surface/60 hover:text-surface transition-colors font-body">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-surface/60 hover:text-surface transition-colors font-body">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/#specialists" className="text-surface/60 hover:text-surface transition-colors font-body">
                  {t('nav.ourSpecialists')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-surface/60 hover:text-surface transition-colors font-body">
                  {t('nav.healthBlog')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-surface/60 hover:text-surface transition-colors font-body">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <a 
                  href="https://management.doctor-in.com/?from=candidates" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-surface/60 hover:text-surface transition-colors font-body"
                >
                  {t('nav.joinUsMenu')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-8 lg:pl-10">
            <h4 className="text-lg font-heading font-bold text-accent">{t('footer.contactCare')}</h4>
            <ul className="space-y-5">
              <li className="flex gap-4 items-start">
                <div className="mt-1 text-accent"><WhatsAppIcon size={18} /></div>
                <div className="font-body">
                  <p className="text-surface/40 text-xs font-bold uppercase tracking-widest mb-1">{t('footer.whatsapp247')}</p>
                  <a 
                    href={t('common.whatsappGeneralLink')} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-surface font-semibold hover:text-accent transition-colors"
                  >
                    +51 941 667 151
                  </a>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="mt-1 text-accent"><Mail size={18} /></div>
                <div className="font-body">
                  <p className="text-surface/40 text-xs font-bold uppercase tracking-widest mb-1">{t('footer.emailSupport')}</p>
                  <a href="mailto:doctorin.health@gmail.com" className="text-surface font-semibold hover:text-accent transition-colors">doctorin.health@gmail.com</a>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="mt-1 text-accent"><MapPin size={18} /></div>
                <div className="font-body">
                  <p className="text-surface/40 text-xs font-bold uppercase tracking-widest mb-1">{t('footer.headquarters')}</p>
                  <p className="text-surface font-semibold">{t('footer.latamOps')}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
            <h4 className="text-lg font-heading font-bold text-accent">{t('footer.stayHealthy')}</h4>
            <p className="text-surface/60 font-body text-sm leading-relaxed">
              {t('footer.newsletterDesc')}
            </p>
            {success ? (
              <div className="p-4 bg-accent/10 border border-accent/20 rounded-2xl text-accent text-sm font-semibold font-body">
                {i18n.language.startsWith('es') 
                  ? '¡Suscrito con éxito! Gracias por unirte.' 
                  : 'Subscribed successfully! Thank you for joining.'}
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="flex bg-surface/5 border border-surface/10 rounded-2xl p-1 focus-within:border-accent/30 transition-colors">
                  <label htmlFor="footer-newsletter-email" className="sr-only">Email Address</label>
                  <input 
                    id="footer-newsletter-email"
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubscribing}
                    placeholder={t('footer.emailPlaceholder')}
                    className="bg-transparent border-none focus:outline-none px-4 py-2 w-full text-sm font-body focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 text-surface disabled:opacity-50"
                  />
                  <button 
                    type="submit"
                    disabled={isSubscribing}
                    aria-label="Subscribe to newsletter" 
                    className="bg-accent hover:bg-accent/80 text-surface p-2.5 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50 flex items-center justify-center min-w-[38px]"
                  >
                    {isSubscribing ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <Send size={18} />
                    )}
                  </button>
                </div>
                {error && (
                  <p className="text-red-400 text-xs font-semibold ml-2">{error}</p>
                )}
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-surface/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-surface/40 text-sm font-body">
            {t('footer.copyright', { year: currentYear })}
          </p>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-surface/40 hover:text-surface text-sm transition-colors font-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">{t('footer.privacyPolicy')}</Link>
            <Link to="/terms" className="text-surface/40 hover:text-surface text-sm transition-colors font-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">{t('footer.termsOfService')}</Link>
            <Link to="/cookie-policy" className="text-surface/40 hover:text-surface text-sm transition-colors font-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">{t('footer.cookiePolicy')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
