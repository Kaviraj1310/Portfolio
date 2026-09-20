import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Terminal, Database } from 'lucide-react';

const Experience = () => {
  const [expandedId, setExpandedId] = useState<string | null>(portfolioData.experience[0].id);

  return (
    <section id="experience" className="relative py-32 bg-background border-t border-primary/20">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Section Title */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="text-secondary text-xl">$</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter">
              cat /var/log/experience.log
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-muted font-mono"
          >
            System execution history and deployment records.
          </motion.p>
        </div>

        {/* Execution Log List */}
        <div className="space-y-6">
          {portfolioData.experience.map((exp, index) => {
            const isExpanded = expandedId === exp.id;

            return (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`terminal-panel-muted transition-all duration-300 ${isExpanded ? 'border-primary shadow-[4px_4px_0px_0px_rgba(0,255,65,1)]' : 'hover:border-primary/60'}`}
              >
                {/* Header Row */}
                <div 
                  className="p-4 md:p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
                  onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-primary">
                      {isExpanded ? <Terminal size={20} /> : <Database size={20} />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-secondary text-xs">[{exp.duration}]</span>
                        <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide">{exp.role}</h3>
                      </div>
                      <p className="text-primary mt-1">@ {exp.company} <span className="text-muted text-xs ml-2">({exp.location})</span></p>
                    </div>
                  </div>
                  
                  <div className="text-xs text-muted md:text-right">
                    Status: <span className={isExpanded ? "text-primary" : "text-secondary"}>{isExpanded ? "EXPANDED" : "COLLAPSED"}</span>
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden border-t border-primary/20 bg-surface/50"
                    >
                      <div className="p-4 md:p-6 space-y-6">
                        
                        <div>
                          <div className="text-xs text-secondary mb-3">{'// RESPONSIBILITIES'}</div>
                          <ul className="space-y-3 font-mono text-sm text-muted-foreground">
                            {exp.responsibilities.map((resp, i) => (
                              <li key={i} className="flex gap-3">
                                <span className="text-primary mt-0.5">{'>'}</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <div className="text-xs text-secondary mb-3">{'// TECH_STACK_MODULES'}</div>
                          <div className="flex flex-wrap gap-2">
                            {exp.techStack.map((tech, i) => (
                              <span key={i} className="px-2 py-1 bg-background border border-primary/40 text-primary text-xs uppercase">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;
