import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "A VerAcademy mudou completamente como gerencio minha agência. Tarefas que levavam horas agora faço em minutos.",
    author: "Ricardo S.",
    role: "Dono de Agência de Marketing"
  },
  {
    text: "Fui ao curso presencial sem saber nada de IA. Saí de lá com meu planejamento de vendas automatizado.",
    author: "Fernanda L.",
    role: "Diretora Comercial"
  },
  {
    text: "Direto ao ponto. Sem teoria chata, só prática. É disso que o mercado precisava.",
    author: "André M.",
    role: "Designer Gráfico"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-ver-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold text-white mb-16">O impacto real</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 relative"
            >
              <Quote className="text-ver-green/20 absolute top-6 right-6" size={40} />
              <p className="text-slate-300 mb-6 relative z-10 italic">"{t.text}"</p>
              <div>
                <strong className="block text-white font-medium">{t.author}</strong>
                <span className="text-xs text-slate-500 uppercase tracking-wide">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};