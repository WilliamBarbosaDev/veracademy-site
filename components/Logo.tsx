import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean; // Mantido para compatibilidade, mas a imagem já contém o texto
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <img 
        src="https://i.postimg.cc/LXbS0JrV/Group.png" 
        alt="VerAcademy" 
        className="h-10 w-auto object-contain"
      />
    </div>
  );
};