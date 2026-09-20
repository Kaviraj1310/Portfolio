import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Terminal, Github, ExternalLink, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Full Stack AI', 'Machine Learning'];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = portfolioData.projects.filter(p => 
    filter === 'All' ? true : p.category === filter
  );

  return (
    <section id="projects" className="relative py-32 bg-background border-t border-primary/20">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="text-secondary text-xl">$</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter">
              ls -la ./projects
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-muted font-mono"
          >
            Directory listing of deployed architectural implementations.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 border text-sm uppercase tracking-wider font-bold transition-all ${
                filter === cat 
                  ? 'bg-primary text-background border-primary' 
                  : 'bg-transparent text-primary border-primary/40 hover:border-primary'
              }`}
            >
              [ {cat} ]
            </button>
          ))}
        </motion.div>

        {/* Data Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="terminal-panel flex flex-col h-full"
              >
                {/* Header */}
                <div className="bg-primary/10 border-b border-primary p-3 flex justify-between items-center">
                  <div className="text-xs text-primary font-bold tracking-widest">{project.category}</div>
                  <div className="flex gap-3 text-primary">
                    {project.github && (
                      <a href={project.github} className="hover:text-white transition-colors" target="_blank" rel="noreferrer"><Github size={16} /></a>
                    )}
                    {project.liveDemo && (
                      <a href={project.liveDemo} className="hover:text-white transition-colors" target="_blank" rel="noreferrer"><ExternalLink size={16} /></a>
                    )}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wide">{project.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-1">
                    {project.description}
                  </p>
                  
                  {/* JSON output block */}
                  <div className="bg-background border border-primary/30 p-4 text-xs font-mono mb-6">
                    <span className="text-secondary">{`{`}</span><br/>
                    <span className="text-primary pl-4">"status"</span><span className="text-secondary">:</span> <span className="text-white">"{project.status}"</span>,<br/>
                    <span className="text-primary pl-4">"metrics"</span><span className="text-secondary">:</span> <span className="text-secondary">[</span><br/>
                    {project.metrics.map((m, i) => (
                      <div key={i} className="pl-8">
                        <span className="text-white">"{m.label}"</span><span className="text-secondary">:</span> <span className="text-white">"{m.value}"</span>{i < project.metrics.length -1 ? ',' : ''}
                      </div>
                    ))}
                    <span className="text-secondary pl-4">]</span><br/>
                    <span className="text-secondary">{`}`}</span>
                  </div>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-surface border border-primary/20 text-muted-foreground text-xs uppercase">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Link to={`/project/${project.id}`} className="mt-auto group flex items-center justify-center gap-2 w-full py-3 border border-primary text-primary hover:bg-primary hover:text-background transition-colors uppercase text-sm font-bold tracking-wider">
                    <Terminal size={16} /> Run_Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Projects;
