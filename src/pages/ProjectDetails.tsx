import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { ArrowLeft, Github, ExternalLink, Terminal } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } }
};

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = portfolioData.projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-primary font-mono">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404: MODULE_NOT_FOUND</h1>
          <p className="text-muted-foreground mb-8">The requested module could not be located in the directory.</p>
          <button onClick={() => navigate('/')} className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-background transition-colors uppercase tracking-widest font-bold">
            cd ..
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-background pt-32 pb-24 font-mono"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        
        <Link to="/#projects" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-12 uppercase tracking-widest text-sm font-bold">
          <ArrowLeft size={16} /> return_to_projects()
        </Link>

        <div className="terminal-panel p-8 md:p-12 mb-16 relative">
          <div className="absolute top-0 left-0 w-full h-8 bg-primary/20 border-b border-primary flex items-center px-4 justify-between text-xs text-primary font-bold">
            <div><Terminal size={14} className="inline mr-2"/> project_details.sh</div>
          </div>
          
          <div className="pt-8">
            <span className="text-primary px-2 py-1 border border-primary/40 bg-surface text-xs uppercase tracking-widest mb-6 inline-block">
              {project.category}
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter">
              {project.name}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-primary text-background font-bold uppercase tracking-wider hover:bg-white transition-colors text-sm">
                  <Github size={18} /> View_Source
                </a>
              )}
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 border border-primary text-primary font-bold uppercase tracking-wider hover:bg-primary hover:text-background transition-colors text-sm">
                  <ExternalLink size={18} /> Execute_Demo
                </a>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-secondary text-xs uppercase tracking-widest mb-4">{'// LONG_DESCRIPTION'}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {project.longDescription}
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-secondary text-xs uppercase tracking-widest mb-4">{'// TECH_STACK'}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-surface border border-primary/30 text-primary text-sm uppercase">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-secondary text-xs uppercase tracking-widest mb-4">{'// SYSTEM_METRICS'}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="border-l-2 border-primary/50 pl-4">
                        <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                        <div className="text-xs text-primary uppercase tracking-widest">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default ProjectDetails;
