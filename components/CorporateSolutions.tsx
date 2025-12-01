import React from 'react';
import { motion } from 'framer-motion';
import { Workflow, Bot, BarChart3, Users, ArrowRight } from 'lucide-react';
import { Button } from './Button';

const solutions = [
  {
    icon: Workflow,
    title: "Automação de Processos",
    description: "Integração de ferramentas (CRM, ERP, Email) para eliminar tarefas manuais repetitivas e reduzir custos operacionais drasticamente."
  },
  {
    icon: Bot,
    title: "Agentes de Atendimento",
    description: "Implementação de Chatbots Inteligentes treinados na base de conhecimento da sua empresa para suporte e vendas 24/7."
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Dashboards que analisam dados em tempo real e utilizam IA para gerar insights preditivos para tomada de decisão estratégica."
  },
  {
    icon: Users,
    title: "Consultoria & Treinamento",
    description: "Mentoria in-company para aculturar sua equipe e implementar as ferramentas de IA mais adequadas ao seu nicho."
  }
];

export const CorporateSolutions: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-[#020617] relative overflow-hidden border-t border-white/5">
      {/* Background Gradient Effect */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-ver-green/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Content Side */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-500/20">
                VerAcademy Business
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Transforme sua empresa com <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-ver-green">
                  Automação Inteligente
                </span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Não apenas ensinamos IA, nós a implementamos no seu negócio. Atuamos como parceiros estratégicos para identificar gargalos, automatizar fluxos e liberar sua equipe para o que realmente importa.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" icon={<ArrowRight size={18} />}>
                  Agendar Diagnóstico
                </Button>
                <Button variant="ghost">
                  Conhecer Cases
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Grid Side */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {solutions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-ver-green/20 transition-all duration-300 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-lg bg-ver-blue border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-ver-green group-hover:border-ver-green/30 transition-colors mb-4">
                    <item.icon size={20} />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};