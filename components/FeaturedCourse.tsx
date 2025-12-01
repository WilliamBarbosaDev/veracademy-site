import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, BellRing } from 'lucide-react';
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
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-ver-green/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20">
                <span className="relative flex h-2 w-2 mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Fique Atento
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Próxima Turma <br />
                <span className="text-ver-green">Em Breve</span>
              </h2>
              
              <p className="text-slate-300 text-lg leading-relaxed">
                Estamos preparando a nova edição do treinamento intensivo presencial. Entre na lista de espera para receber a data e condições especiais em primeira mão.
              </p>

              <div className="flex flex-col gap-4 text-slate-300 pt-4">
                <div className="flex items-center gap-3 text-slate-400">
                  <Calendar className="text-ver-green" size={20} />
                  <span>Data a ser anunciada</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <Clock className="text-ver-green" size={20} />
                  <span>Horário a definir</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <MapPin className="text-ver-green" size={20} />
                  <span>Auditório Central (Presencial)</span>
                </div>
              </div>

              <div className="pt-6">
                <Button variant="primary" size="lg" icon={<BellRing size={18} />} glow>
                  Entrar na Lista de Espera
                </Button>
              </div>
            </div>

            {/* Visual Element representing Course */}
            <div className="w-full md:w-2/5 aspect-square md:aspect-auto md:h-full min-h-[300px] relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 flex items-center justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                 <div className="absolute inset-0 bg-gradient-to-tr from-ver-dark to-transparent opacity-80 z-10" />
                 <img 
                    src="https://picsum.photos/800/800?grayscale&blur=2" 
                    alt="Course Atmosphere" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
                 />
                 <div className="relative z-20 text-center p-6">
                    <span className="block text-5xl font-bold text-white mb-2 tracking-tighter">Prepare-se</span>
                    <span className="text-slate-400 uppercase tracking-widest text-sm">para a próxima imersão</span>
                 </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};