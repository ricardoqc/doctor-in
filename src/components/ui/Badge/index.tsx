import React from 'react';

type BadgeVariant = 'urgent' | 'available' | 'specialty';

interface BadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ variant, children, className = '' }) => {
  const variantClasses = {
    urgent: "bg-primary/10 text-primary",
    available: "bg-accent/10 text-accent",
    specialty: "bg-secondary/10 text-secondary"
  };

  return (
    <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold font-body uppercase tracking-wider ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};
