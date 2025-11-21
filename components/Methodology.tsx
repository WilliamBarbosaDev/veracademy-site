import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { number: "01", title: "Aprenda", desc: "Aulas práticas focadas no 'como fazer'." },
  { number: "02", title: "Use", desc: "Materiais prontos para copiar e colar." },
  { number: "03", title: "Aplique", desc: "Implemente no seu trabalho imediatamente." },
  { number: "04", title: "Evolua", desc: "Suporte contínuo para dúvidas reais." },
];

export const Methodology: React.FC = () => {
  return (
    <section className="py-24 bg-[#050B14] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Nossa Metodologia</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-full h-[1px] bg-gradient-to-r from-ver-green/30 to-transparent" />
              )}
              
              <div className="text-6xl font-bold text-white/5 mb-4">{step.number}</div>
              <h3 className="text-xl font-bold text-ver-green mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm pr-4">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};