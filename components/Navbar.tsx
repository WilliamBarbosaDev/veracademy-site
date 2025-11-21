import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from './Button';
import { Logo } from './Logo';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-ver-dark/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Area */}
        <a href="#" className="flex items-center gap-2 cursor-pointer group hover:opacity-90 transition-opacity">
          <Logo />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Sobre</a>
          <a href="#solutions" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Soluções</a>
          <a href="#course" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Curso Presencial</a>
          <Button variant="primary" size="sm" icon={<ChevronRight size={16} />}>
            Plataforma
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-ver-dark border-b border-white/5 px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top-4">
          <a href="#about" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-300">Sobre</a>
          <a href="#solutions" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-300">Soluções</a>
          <a href="#course" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-300">Curso Presencial</a>
          <Button variant="primary" fullWidth onClick={() => setIsOpen(false)}>
            Acessar Plataforma
          </Button>
        </div>
      )}
    </nav>
  );
};