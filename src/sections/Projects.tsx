import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['All', 'AI', 'Backend', 'Frontend'];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = portfolioData.projects.filter(p => 
    filter === 'All' ? true : p.category === filter
  );

  const featuredProject = filteredProjects.find(p => p.featured) || filteredProjects[0];
  const remainingProjects = filteredProjects.filter(p => p.id !== featuredProject?.id);

  return (
    <section id="projects" className="relative py-32 bg-surface/50">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="mb-16 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif italic text-white mb-4"
          >
            Selected Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-muted"
          >
            Software engineered to solve real-world problems.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat 
                  ? 'bg-white text-black' 
                  : 'glass text-secondary hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[400px]">
          <AnimatePresence mode="popLayout">
            
            {/* Featured Project */}
            {featuredProject && (
              <motion.div 
                key={featuredProject.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="col-span-1 md:col-span-12 lg:col-span-8 group project-card"
              >
                <div className="w-full h-full glass rounded-3xl overflow-hidden relative block transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(93,174,255,0.2)] hover:border-primary/30 border border-white/5">
                  {featuredProject.image && (
                    <img src={featuredProject.image} alt={featuredProject.name} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" loading="lazy" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-primary font-mono text-sm mb-3 block">{featuredProject.category}</span>
                        <h3 className="text-3xl md:text-4xl font-semibold text-white mb-3">{featuredProject.name}</h3>
                        <p className="text-secondary max-w-lg mb-6">{featuredProject.description}</p>
                        
                        <div className="flex gap-2 flex-wrap mb-6">
                          {featuredProject.techStack.slice(0, 4).map(tech => (
                            <span key={tech} className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs backdrop-blur-md border border-white/10">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="hidden md:flex gap-3">
                        <Link to={`/project/${featuredProject.id}`} className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white text-black transition-colors">
                          <ArrowRight size={20} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Remaining Projects */}
            {remainingProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="col-span-1 md:col-span-6 lg:col-span-4 group project-card"
              >
                <div className="w-full h-full glass rounded-3xl overflow-hidden relative block transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(93,174,255,0.2)] hover:border-primary/30 border border-white/5">
                  <div className="absolute inset-0 p-8 flex flex-col">
                    <div className="flex justify-between items-start mb-auto">
                      <span className="text-primary font-mono text-xs px-2 py-1 bg-primary/10 rounded-md border border-primary/20">{project.category}</span>
                      <div className="flex gap-2 text-muted">
                        <a href={project.github} className="hover:text-white transition-colors" target="_blank" rel="noreferrer"><Github size={18} /></a>
                        <a href={project.liveDemo} className="hover:text-white transition-colors" target="_blank" rel="noreferrer"><ExternalLink size={18} /></a>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2">{project.name}</h3>
                      <p className="text-secondary text-sm mb-6 line-clamp-2">{project.description}</p>
                      
                      <div className="flex gap-2 flex-wrap mb-4">
                        {project.techStack.slice(0, 3).map(tech => (
                          <span key={tech} className="text-xs text-muted">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <Link to={`/project/${project.id}`} className="text-white text-sm flex items-center gap-2 group-hover:text-primary transition-colors mt-4">
                        View Case Study <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

          </AnimatePresence>
        </div>

        {/* Recruiter CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-24"
        >
          <a 
            href={portfolioData.socials.github} target="_blank" rel="noreferrer"
            className="group block w-full max-w-4xl mx-auto glass p-8 rounded-3xl text-center border border-white/5 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(93,174,255,0.1)] transition-all duration-500"
          >
            <p className="text-secondary text-lg mb-2">Interested in how I built these?</p>
            <h3 className="text-2xl md:text-3xl text-white font-serif italic flex items-center justify-center gap-4 group-hover:text-primary transition-colors">
              View my GitHub profile <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </h3>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
