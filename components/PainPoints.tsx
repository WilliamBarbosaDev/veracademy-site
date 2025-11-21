import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle } from 'lucide-react';

export const PainPoints: React.FC = () => {
  return (
    <section className="py-24 bg-[#050B14]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Por que a VerAcademy?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Identificamos os maiores obstáculos do mercado e desenhamos uma metodologia para superá-los.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* The Problem */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-red-500/10 bg-red-500/5 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-red-500/10 text-red-400">
                <XCircle size={24} />
              </div>
              <h3 className="text-xl font-semibold text-red-200">O Cenário Comum</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Excesso de informações desconexas",
                "Medo de ficar obsoleto no mercado",
                "Ferramentas complexas sem tutorial",
                "Baixa produtividade em tarefas repetitivas"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500/50 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* The Solution */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-2xl border border-ver-green/20 bg-ver-green/5 backdrop-blur-sm relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-ver-green/10 blur-[50px] -z-10" />
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-ver-green/10 text-ver-green">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white">A Solução VerAcademy</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Treinamentos diretos ao ponto e curadoria",
                "Estratégias de diferenciação profissional",
                "Tutoriais práticos passo a passo",
                "Foco total em produzir mais e vender melhor"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-200">
                  <CheckCircle size={16} className="mt-1 text-ver-green shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};