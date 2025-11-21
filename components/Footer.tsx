import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020617] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="opacity-90 hover:opacity-100 transition-opacity">
          <Logo />
        </div>
        
        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} VerAcademy. Todos os direitos reservados.
        </p>
        
        <div className="flex gap-6">
          <a href="#" className="text-slate-500 hover:text-ver-green transition-colors text-sm">Instagram</a>
          <a href="#" className="text-slate-500 hover:text-ver-green transition-colors text-sm">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};