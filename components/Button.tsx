import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  glow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  icon,
  glow = false,
  className = '',
  ...props 
}) => {
  
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-ver-green text-ver-dark hover:bg-ver-green-light active:scale-95",
    secondary: "bg-white text-ver-dark hover:bg-slate-200 active:scale-95",
    outline: "bg-transparent border border-white/20 text-white hover:bg-white/10 active:scale-95",
    ghost: "bg-transparent text-slate-300 hover:text-white"
  };

  const sizes = {
    sm: "text-sm px-4 py-2 gap-2",
    md: "text-base px-6 py-3 gap-2",
    lg: "text-lg px-8 py-4 gap-3"
  };

  const glowStyles = glow ? "shadow-[0_0_20px_-5px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.6)]" : "";
  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${glowStyles} ${widthStyles} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
};