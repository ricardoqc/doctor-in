import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outline' | 'light';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', children, ...props }, ref) => {
    
    // Base classes
    const baseClasses = "inline-flex items-center justify-center font-heading font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-full";
    
    // Size classes
    const sizeClasses = size === 'lg' ? "px-10 py-4 text-lg" : size === 'sm' ? "px-5 py-2 text-sm" : "px-8 py-3.5 text-base";
    
    // Variant classes
    const variantClasses = {
      primary: "bg-primary text-surface shadow-[0_4px_14px_rgba(244,36,52,0.4)] hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(244,36,52,0.6)] focus:ring-primary",
      secondary: "bg-secondary text-surface shadow-[0_4px_14px_rgba(7,31,93,0.3)] hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(7,31,93,0.5)] focus:ring-secondary",
      accent: "bg-accent text-dark-alt shadow-[0_4px_14px_rgba(46,212,192,0.3)] hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(46,212,192,0.5)] focus:ring-accent",
      outline: "bg-transparent text-secondary border-2 border-secondary hover:bg-secondary hover:text-surface focus:ring-secondary",
      light: "bg-surface text-primary shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] focus:ring-surface"
    };

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${sizeClasses} ${variantClasses[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

