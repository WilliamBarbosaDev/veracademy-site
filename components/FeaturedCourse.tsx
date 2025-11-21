import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const FeaturedCourse: React.FC = () => {
  return (
    <section id="course" className="py-24 relative overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-ver-dark via-[#061225] to-ver-dark -z-20" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] -z-10" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-ver-green/20 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decoration */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-ver-green/20 blur-[100px] rounded-full pointer-events-none" />

          <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ver-green/10 text-ver-green text-xs font-bold uppercase tracking-wider border border-ver-green/20">
                Inscrições Abertas
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Inteligência Artificial <br />
                <span className="text-ver-green">na Prática</span>
              </h2>
              
              <p className="text-slate-300 text-lg leading-relaxed">
                Um treinamento intensivo presencial desenhado para profissionais que não podem perder tempo. Saia do zero e automatize seu trabalho em uma única noite.
              </p>

              <div className="flex flex-col gap-4 text-slate-300 pt-4">
                <div className="flex items-center gap-3">
                  <Calendar className="text-ver-green" size={20} />
                  <span>27 de Novembro</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-ver-green" size={20} />
                  <span>18h30 às 21h30</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-ver-green" size={20} />
                  <span>Auditório Central (Presencial)</span>
                </div>
              </div>

              <div className="pt-6">
                <Button variant="primary" size="lg" glow>
                  Garantir Minha Vaga
                </Button>
              </div>
            </div>

            {/* Visual Element representing Course */}
            <div className="w-full md:w-2/5 aspect-square md:aspect-auto md:h-full min-h-[300px] relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 flex items-center justify-center">
                 <div className="absolute inset-0 bg-gradient-to-tr from-ver-dark to-transparent opacity-80 z-10" />
                 <img 
                    src="https://picsum.photos/800/800?grayscale&blur=2" 
                    alt="Course Atmosphere" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
                 />
                 <div className="relative z-20 text-center p-6">
                    <span className="block text-6xl font-bold text-white mb-2">3h</span>
                    <span className="text-slate-400 uppercase tracking-widest text-sm">de imersão total</span>
                 </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};