import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Layout, PenTool, Zap, Briefcase } from 'lucide-react';

const areas = [
  { icon: ShoppingBag, title: "IA para Vendas", desc: "Scripts, automação de CRM e prospecção." },
  { icon: Layout, title: "IA para Web Design", desc: "Geração de código, layouts e wireframes." },
  { icon: PenTool, title: "IA para Design Gráfico", desc: "Criação de imagens e edição avançada." },
  { icon: Zap, title: "IA para Produtividade", desc: "Gestão de tempo e organização pessoal." },
  { icon: Briefcase, title: "IA para Negócios", desc: "Análise de dados e tomada de decisão." },
];

export const KnowledgeAreas: React.FC = () => {
  return (
    <section className="py-24 bg-ver-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Áreas de Conhecimento</h2>
          <p className="text-slate-400">Onde aplicamos a inteligência para gerar valor real.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-ver-green/30 hover:bg-white/[0.04] transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-ver-green/10 text-ver-green flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <area.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-ver-green transition-colors">{area.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {area.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};