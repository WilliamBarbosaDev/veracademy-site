import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-ver-green/10 rounded-full blur-[120px] -z-10 pointer-events-none opacity-50 mix-blend-screen" />
      <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -z-10 pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-ver-green text-sm font-medium mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ver-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-ver-green"></span>
          </span>
          Nova era da produtividade
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white max-w-5xl mb-8 leading-[1.1]"
        >
          Educação para transformar <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-ver-green to-blue-400">
            resultados com IA.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed"
        >
          Ajudamos empreendedores, líderes e profissionais a dominarem a Inteligência Artificial na prática, eliminando a complexidade e focando no crescimento.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Button variant="primary" size="lg" icon={<ArrowRight size={18} />}>
            Conhecer Programas
          </Button>
          <Button variant="outline" size="lg" icon={<PlayCircle size={18} />}>
            Entrar na Plataforma
          </Button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-slate-500 to-transparent" />
      </motion.div>
    </section>
  );
};