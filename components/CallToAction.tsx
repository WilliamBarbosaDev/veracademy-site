import React from 'react';
import { Button } from './Button';

export const CallToAction: React.FC = () => {
  return (
    <section className="py-32 relative bg-ver-dark overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-ver-green/5 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
          Pronto para dominar a <br />
          <span className="text-ver-green">Inteligência Artificial na prática?</span>
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg" glow>
            Ver Curso Disponível
          </Button>
          <Button variant="outline" size="lg">
            Falar com Consultor
          </Button>
        </div>
      </div>
    </section>
  );
};