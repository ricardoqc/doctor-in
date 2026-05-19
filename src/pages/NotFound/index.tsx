import React from 'react';
import { useTranslation } from 'react-i18next';
import { GeoHead } from '@/seo/GeoHead';
import { Button } from '@/components/ui/Button';
import { Home, ArrowRight, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full min-h-screen bg-secondary text-surface flex flex-col justify-center items-center px-6 relative overflow-hidden">
      <GeoHead
        title="404 Page Not Found | Doctor In"
        description="The page you are looking for does not exist. Return to Doctor In home for South American medical care."
      />

      {/* Premium Decorative Blobs */}
      <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] bg-[#f4243410] rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] bg-[#F4243415] rounded-full blur-[100px] pointer-events-none" />

      {/* Core card layout */}
      <div className="max-w-[500px] text-center space-y-8 relative z-10 py-12 px-8 bg-surface/5 backdrop-blur-md border border-surface/10 rounded-[32px]">
        {/* Animated Brand Alert Icon */}
        <div className="w-20 h-20 rounded-[24px] bg-accent/20 border border-accent/30 flex items-center justify-center text-accent mx-auto animate-bounce">
          <ShieldAlert size={40} />
        </div>

        <div className="space-y-3">
          <h1 className="text-8xl font-heading font-black text-accent tracking-widest leading-none">404</h1>
          <h2 className="text-2xl font-heading font-bold text-surface">{t('notFound.title')}</h2>
          <p className="text-white/60 font-body text-sm max-w-[320px] mx-auto leading-relaxed">
            {t('notFound.desc')}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/" className="w-full sm:w-auto">
            <Button variant="accent" className="w-full !rounded-full !px-8 flex items-center justify-center gap-2 font-bold shadow-lg shadow-accent/20">
              <Home size={16} />
              {t('notFound.backHome')}
            </Button>
          </Link>
          <Link to="/contact" className="w-full sm:w-auto">
            <Button variant="light" className="w-full !rounded-full !px-8 flex items-center justify-center gap-2 font-bold text-secondary">
              {t('notFound.contactSupport')}
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NotFoundPage;
