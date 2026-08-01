import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Download, ExternalLink } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = Object.keys(portfolioData.skills) as Array<keyof typeof portfolioData.skills>;
  
  const categoryLabels: Record<string, string> = {
    programming: "Languages",
    backend: "Backend",
    frontend: "Frontend",
    ai_ml: "AI & ML",
    tools: "Tools",
    databases: "Databases",
    cloud: "Cloud"
  };

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif italic text-white mb-4"
          >
            Technology Stack
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-muted"
          >
            The technologies I use to build intelligent software.
          </motion.p>
        </div>

        {/* Interactive Knowledge Graph UI Simulation */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
          
          {/* Categories Sidebar */}
          <div className="w-full md:w-1/3 flex flex-col gap-3">
            {categories.map((cat, i) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                onMouseEnter={() => setActiveCategory(cat)}
                onClick={() => setActiveCategory(cat)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 border ${
                  activeCategory === cat || (activeCategory === null && i === 0)
                    ? 'bg-primary/10 border-primary/30 text-white shadow-[0_0_20px_rgba(93,174,255,0.1)]'
                    : 'glass border-white/5 text-secondary hover:bg-white/5'
                }`}
              >
                <h3 className="font-medium text-lg">{categoryLabels[cat]}</h3>
                <p className="text-xs font-mono mt-1 opacity-70">
                  {portfolioData.skills[cat].length} nodes connected
                </p>
              </motion.button>
            ))}
          </div>

          {/* Nodes View */}
          <div className="w-full md:w-2/3 glass rounded-3xl p-8 border border-white/10 min-h-[400px] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(93,174,255,0.1)_0%,transparent_70%)]" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory || categories[0]}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap justify-center gap-4 relative z-10 w-full"
              >
                {portfolioData.skills[activeCategory || categories[0]].map((skill, idx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="px-5 py-3 rounded-xl bg-surface border border-white/10 text-white font-medium shadow-[0_4px_20px_-5px_rgba(0,0,0,0.5)] hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Resume Section integrated here as requested by design flow */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-32 max-w-4xl mx-auto glass p-8 md:p-12 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div id="resume">
            <h3 className="text-2xl font-serif italic text-white mb-2">Experience Snapshot</h3>
            <p className="text-secondary max-w-md">Download my resume to see a detailed overview of my professional experience, education, and skills.</p>
          </div>
          
          <div className="flex gap-4 shrink-0">
            <a 
              href="/Kaviraj%20Thangapandian.pdf" target="_blank" rel="noreferrer"
              className="px-6 py-3 bg-white text-black rounded-full font-medium flex items-center gap-2 hover:bg-white/90 transition-colors"
            >
              <Download size={18} /> Download PDF
            </a>
            <a 
              href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer"
              className="px-6 py-3 glass rounded-full text-white font-medium flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              LinkedIn <ExternalLink size={18} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
