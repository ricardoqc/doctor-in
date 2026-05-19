import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/#services' },
  { label: 'Specialists', href: '/#specialists' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const Header: React.FC = () => {
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
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              to={link.href}
              className={`font-body text-[15px] font-semibold transition-all hover:text-accent ${
                isScrolled || isDarkHeroPage ? 'text-white/70' : 'text-secondary/70'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>


        {/* CTA */}
        <div className="hidden lg:block">
          <Button variant="primary" className="!px-7 !py-3 !text-sm flex gap-2 items-center shadow-lg">
            Book Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden p-2 transition-colors ${isScrolled || isDarkHeroPage ? 'text-surface' : 'text-secondary'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 top-[88px] bg-dark-alt z-40 lg:hidden transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex flex-col gap-8 p-10 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-surface text-3xl font-heading font-bold hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button variant="primary" size="lg" className="w-full flex gap-3 items-center mt-4">
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
};
