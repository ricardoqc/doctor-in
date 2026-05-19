import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const current = i18n.language || 'en';
    const newLang = current.startsWith('en') ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  const currentLang = (i18n.language || 'en').startsWith('en') ? 'EN' : 'ES';

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-surface/20 hover:border-surface/50 transition-colors text-sm font-bold font-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 focus-visible:ring-offset-dark-alt"
      aria-label={`Current language is ${currentLang}. Click to switch language.`}
    >
      <Globe size={16} />
      <span>{currentLang}</span>
    </button>
  );
};
