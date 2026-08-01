import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Briefcase, ChevronRight, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const [expandedId, setExpandedId] = useState<string | null>(portfolioData.experience[0].id);

  return (
    <section id="experience" className="relative py-32" ref={containerRef}>
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        
        {/* Section Title */}
        <div className="mb-20 text-center flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif italic text-white mb-4"
          >
            Experience Timeline
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-muted max-w-md"
          >
            Building software that solves real-world problems.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2">
            <motion.div 
              className="absolute top-0 w-full bg-accent-gradient shadow-[0_0_15px_rgba(93,174,255,0.5)]"
              style={{ height: useTransform(scrollYProgress, [0, 0.8], ['0%', '100%']) }}
            />
          </div>

          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedId === exp.id;

              return (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-start md:items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 pl-12 md:pl-0`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-8 md:top-auto flex items-center justify-center z-10 w-8 h-8 rounded-full bg-background border border-primary/50 shadow-[0_0_10px_rgba(93,174,255,0.2)]">
                    <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${isExpanded ? 'bg-primary shadow-[0_0_10px_rgba(93,174,255,0.8)]' : 'bg-primary/20'}`} />
                  </div>

                  {/* Card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div 
                      className={`glass rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer border ${isExpanded ? 'border-primary/30 shadow-[0_8px_32px_0_rgba(93,174,255,0.1)]' : 'border-white/5 hover:border-white/20'}`}
                      onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                    >
                      {/* Header (Always visible) */}
                      <div className="p-6">
                        <div className={`flex items-center gap-4 mb-4 ${isEven ? 'md:flex-row-reverse md:justify-start' : 'justify-start'}`}>
                          <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center p-2 border border-white/5">
                            {exp.logo.includes('http') ? (
                              <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain opacity-80" />
                            ) : (
                              <Briefcase size={24} className="text-muted" />
                            )}
                          </div>
                          <div>
                            <h3 className="text-xl font-medium text-white">{exp.role}</h3>
                            <p className="text-primary text-sm font-mono">{exp.company}</p>
                          </div>
                        </div>

                        <div className={`flex flex-wrap gap-4 text-xs text-muted font-mono ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                          <div className="flex items-center gap-1.5"><Calendar size={14} />{exp.duration}</div>
                          <div className="flex items-center gap-1.5"><MapPin size={14} />{exp.location}</div>
                        </div>
                      </div>

                      {/* Expanded Content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="p-6 pt-0 border-t border-white/5 space-y-6">
                              <ul className="space-y-3 text-left">
                                {exp.responsibilities.map((resp, i) => (
                                  <li key={i} className="text-secondary text-sm flex gap-3">
                                    <ChevronRight size={16} className="text-primary/50 shrink-0 mt-0.5" />
                                    <span>{resp}</span>
                                  </li>
                                ))}
                              </ul>
                              
                              <div className="flex flex-wrap gap-2 text-left justify-start">
                                {exp.techStack.map((tech, i) => (
                                  <span key={i} className="px-3 py-1 rounded-full bg-white/5 text-white/70 text-xs border border-white/5">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
