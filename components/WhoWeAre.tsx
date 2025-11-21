import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const pillars = [
  "Aplicabilidade Imediata",
  "Conteúdo Validado",
  "Experiência Prática",
  "Instrutores Especialistas"
];

export const WhoWeAre: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-ver-dark border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold text-ver-green tracking-wider uppercase mb-3">Quem Somos</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              A ponte entre a tecnologia complexa e o seu negócio real.
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              A VerAcademy nasceu para suprir uma lacuna no mercado: a educação prática de IA para quem não é programador. Focamos em empreendedores, líderes de vendas, designers e autônomos que precisam de eficiência hoje.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-ver-green shrink-0" size={20} />
                  <span className="text-slate-200">{pillar}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10 group"
          >
             {/* Imagem de fundo: Ambiente tech/educacional moderno */}
             <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop"
                alt="Alunos aprendendo tecnologia em ambiente moderno"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             
             {/* Overlay Gradiente para manter a identidade visual */}
             <div className="absolute inset-0 bg-gradient-to-t from-ver-dark via-ver-dark/80 to-transparent opacity-90" />
             <div className="absolute inset-0 bg-ver-blue/40 mix-blend-multiply" />

             {/* Elementos flutuantes sobre a imagem */}
             <div className="absolute bottom-8 left-8 right-8 z-10">
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                  <div className="h-10 w-10 rounded-full bg-ver-green flex items-center justify-center text-ver-dark font-bold">
                    AI
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Metodologia Prática</p>
                    <p className="text-slate-300 text-xs">Foco em resultados reais</p>
                  </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};