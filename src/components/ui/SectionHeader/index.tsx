import React from 'react';

interface SectionHeaderProps {
  title: string;
  description?: string;
  label?: string;
  className?: string;
  isLight?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description, label, className = '', isLight = false }) => {
  return (
    <div className={`text-center max-w-[800px] mx-auto mb-12 ${className}`}>
      {label && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${isLight ? 'bg-accent/20 text-accent' : 'bg-accent/10 text-accent'}`}>
          {label}
        </span>
      )}
      <h2 className={`text-3xl md:text-[40px] font-heading font-bold mb-5 leading-tight ${isLight ? 'text-surface' : 'text-secondary'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base md:text-lg font-body leading-relaxed ${isLight ? 'text-white/60' : 'text-dark-alt/60'}`}>
          {description}
        </p>
      )}
    </div>
  );
};
