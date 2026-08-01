import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, ArrowRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } }
};

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = portfolioData.projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="min-h-screen flex items-center justify-center text-white">
        Project not found. <Link to="/" className="text-primary ml-2 hover:underline">Go back home</Link>
      </motion.div>
    );
  }

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="bg-background min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Navigation */}
        <Link to="/#projects" className="inline-flex items-center gap-2 text-secondary hover:text-white transition-colors mb-12 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-mono">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full glass text-secondary text-sm font-mono border border-white/5">
              {project.status}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-semibold text-white mb-6 leading-tight">
            {project.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary max-w-3xl leading-relaxed">
            {project.longDescription}
          </p>
        </motion.div>

        {/* Image / Video Header */}
        {project.image && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden glass border border-white/10 mb-20 relative"
          >
            <img src={project.image} alt={project.name} className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          
          {/* Main Content */}
          <div className="md:col-span-8 space-y-12">
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-serif italic text-white mb-6">Overview</h2>
              <p className="text-secondary leading-relaxed text-lg">
                The {project.name} was built to solve critical problems in the {project.category} domain. 
                By leveraging modern architectural patterns and robust engineering practices, this project 
                stands as a testament to building scalable, intelligent systems.
              </p>
            </motion.div>

            {/* Metrics */}
            {project.metrics && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-serif italic text-white mb-6">Performance & Impact</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="glass p-6 rounded-2xl border border-white/5">
                      <p className="text-3xl font-semibold text-white mb-2">{metric.value}</p>
                      <p className="text-sm font-mono text-muted uppercase tracking-wider">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-serif italic text-white mb-6">Architecture & Challenges</h2>
              <p className="text-secondary leading-relaxed text-lg mb-6">
                One of the main challenges was ensuring high availability while maintaining low latency. 
                This was achieved by implementing a microservices architecture and utilizing caching layers 
                effectively.
              </p>
            </motion.div>

          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 space-y-10">
            
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="glass p-8 rounded-3xl border border-white/5">
              <h3 className="text-lg font-medium text-white mb-6 uppercase tracking-widest font-mono">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-4 py-2 bg-surface text-secondary text-sm rounded-lg border border-white/5 hover:border-primary/50 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="glass p-8 rounded-3xl border border-white/5 flex flex-col gap-4">
              <h3 className="text-lg font-medium text-white mb-2 uppercase tracking-widest font-mono">Links</h3>
              
              <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-xl bg-surface border border-white/5 hover:border-primary/50 transition-colors group">
                <span className="flex items-center gap-3 text-white font-medium"><Github size={20} /> GitHub Repository</span>
                <ArrowRight size={18} className="text-muted group-hover:text-primary transition-colors" />
              </a>
              
              <a href={project.liveDemo} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-xl bg-surface border border-white/5 hover:border-primary/50 transition-colors group">
                <span className="flex items-center gap-3 text-white font-medium"><ExternalLink size={20} /> Live Deployment</span>
                <ArrowRight size={18} className="text-muted group-hover:text-primary transition-colors" />
              </a>
            </motion.div>
            
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default ProjectDetails;
