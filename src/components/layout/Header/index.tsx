import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/Button';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const isDarkHeroPage = pathname === '/about' || pathname === '/contact';

  useEffect(() => {
    let timeoutId: number;
    const handleScroll = () => {
      if (timeoutId) {
        window.cancelAnimationFrame(timeoutId);
      }
      timeoutId = window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) window.cancelAnimationFrame(timeoutId);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-alt/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center group" aria-label="Go to homepage">
          <img 
            src={isScrolled || isDarkHeroPage ? "/images/brands/doctor-in-logo-1.png" : "/images/brands/doctor-in-logo-2.png"} 
            alt="Doctor In Logo" 
            className="h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {[
            { key: 'about', href: '/about' },
            { key: 'services', href: '/#services' },
            { key: 'specialists', href: '/#specialists' },
            { key: 'blog', href: '/blog' },
            { key: 'contact', href: '/contact' },
          ].map((link) => (
            <Link 
              key={link.key} 
              to={link.href}
              className={`font-body text-[15px] font-semibold transition-all hover:text-accent ${
                isScrolled || isDarkHeroPage ? 'text-white/70' : 'text-secondary/70'
              }`}
            >
              {t(`nav.${link.key}`)}
            </Link>
          ))}
        </nav>


        {/* CTA & Language */}
        <div className="hidden lg:flex items-center gap-4">
          <div className={isScrolled || isDarkHeroPage ? 'text-surface' : 'text-secondary'}>
            <LanguageSwitcher />
          </div>
          <Button variant="primary" className="!px-7 !py-3 !text-sm flex gap-2 items-center shadow-lg">
            {t('common.bookNow')}
          </Button>
        </div>

        {/* Mobile controls (visible directly on mobile) */}
        <div className="flex lg:hidden items-center gap-3">
          <div className={isScrolled || isDarkHeroPage ? 'text-surface' : 'text-secondary'}>
            <LanguageSwitcher />
          </div>
          <button 
            className={`p-2 transition-colors ${isScrolled || isDarkHeroPage ? 'text-surface' : 'text-secondary'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 top-[88px] bg-dark-alt z-40 lg:hidden transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex flex-col gap-8 p-10 items-center">
          {[
            { key: 'about', href: '/about' },
            { key: 'services', href: '/#services' },
            { key: 'specialists', href: '/#specialists' },
            { key: 'blog', href: '/blog' },
            { key: 'contact', href: '/contact' },
          ].map((link) => (
            <Link 
              key={link.key} 
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-surface text-3xl font-heading font-bold hover:text-accent transition-colors"
            >
              {t(`nav.${link.key}`)}
            </Link>
          ))}

          <Button variant="primary" size="lg" className="w-full flex gap-3 items-center mt-4">
            {t('common.bookNow')}
          </Button>
        </div>
      </div>
    </header>
  );
};
