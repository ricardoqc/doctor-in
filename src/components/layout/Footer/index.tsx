import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, MessageCircle, Camera, Share2, Send } from 'lucide-react';


export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

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
              {[MessageCircle, Camera, Share2].map((Icon, i) => (
 
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 bg-surface/5 hover:bg-accent/20 hover:text-accent rounded-full flex items-center justify-center transition-all duration-300 border border-surface/10 hover:border-accent/30"
                >
                  <Icon size={18} />
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
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-8 lg:pl-10">
            <h4 className="text-lg font-heading font-bold text-accent">{t('footer.contactCare')}</h4>
            <ul className="space-y-5">
              <li className="flex gap-4 items-start">
                <div className="mt-1 text-accent"><Phone size={18} /></div>
                <div className="font-body">
                  <p className="text-surface/40 text-xs font-bold uppercase tracking-widest mb-1">{t('footer.phone247')}</p>
                  <p className="text-surface font-semibold hover:text-accent transition-colors">+51 987 654 321</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="mt-1 text-accent"><Mail size={18} /></div>
                <div className="font-body">
                  <p className="text-surface/40 text-xs font-bold uppercase tracking-widest mb-1">{t('footer.emailSupport')}</p>
                  <p className="text-surface font-semibold hover:text-accent transition-colors">care@doctorin.pe</p>
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
            <div className="flex bg-surface/5 border border-surface/10 rounded-2xl p-1 focus-within:border-accent/30 transition-colors">
              <label htmlFor="footer-newsletter-email" className="sr-only">Email Address</label>
              <input 
                id="footer-newsletter-email"
                type="email" 
                placeholder={t('footer.emailPlaceholder')}
                className="bg-transparent border-none focus:outline-none px-4 py-2 w-full text-sm font-body focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 text-surface"
              />
              <button aria-label="Subscribe to newsletter" className="bg-accent hover:bg-accent/80 text-surface p-2.5 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                <Send size={18} />
              </button>
            </div>
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
          </div>
        </div>
      </div>
    </footer>
  );
};
