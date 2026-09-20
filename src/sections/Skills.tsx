import { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Download, ExternalLink, Terminal } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = Object.keys(portfolioData.skills) as Array<keyof typeof portfolioData.skills>;
  
  const categoryLabels: Record<string, string> = {
    programming: "CORE_LANGUAGES",
    backend: "BACKEND_SYSTEMS",
    frontend: "FRONTEND_INTERFACES",
    ai_ml: "AI_ML_MODELS",
    tools: "DEV_TOOLS",
    databases: "DATABASES",
    cloud: "CLOUD_INFRA"
  };

  return (
    <section id="skills" className="relative py-32 bg-background border-t border-primary/20">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="text-secondary text-xl">$</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter">
              sys.get_capabilities()
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-muted font-mono"
          >
            Installed packages and technological competencies.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          
          {/* Categories Sidebar */}
          <div className="w-full md:w-1/3 flex flex-col gap-2">
            {categories.map((cat, i) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                onMouseEnter={() => setActiveCategory(cat)}
                onClick={() => setActiveCategory(cat)}
                className={`p-4 text-left transition-all duration-200 border ${
                  activeCategory === cat || (activeCategory === null && i === 0)
                    ? 'bg-primary text-background border-primary font-bold'
                    : 'bg-surface border-primary/30 text-primary hover:bg-primary/10'
                }`}
              >
                <h3 className="text-sm uppercase tracking-widest">{categoryLabels[cat]}</h3>
              </motion.button>
            ))}
          </div>

          {/* Nodes View */}
          <div className="w-full md:w-2/3 terminal-panel bg-surface flex flex-col min-h-[400px]">
            <div className="bg-primary/20 border-b border-primary p-2 px-4 flex items-center justify-between text-xs text-primary font-bold">
              <span>OUTPUT: {categoryLabels[activeCategory || categories[0]]}</span>
              <span>{portfolioData.skills[(activeCategory || categories[0]) as keyof typeof portfolioData.skills].length} MODULES</span>
            </div>
            
            <div className="p-6 md:p-8 flex-1 content-start">
              <div className="text-secondary mb-4 text-sm font-mono">
                {'>'} Scanning registry for {activeCategory || categories[0]}...
                <br/>
                {'>'} Found packages:
              </div>
              <div className="flex flex-wrap gap-3">
                {portfolioData.skills[(activeCategory || categories[0]) as keyof typeof portfolioData.skills].map((skill: string, idx: number) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="px-4 py-2 border border-primary/50 text-white font-bold bg-background text-sm uppercase tracking-wide hover:border-primary hover:text-primary transition-colors cursor-crosshair"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Resume Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-24 terminal-panel p-8 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div id="resume">
            <div className="flex items-center gap-2 mb-2 text-primary">
              <Terminal size={20} />
              <h3 className="text-xl font-bold uppercase tracking-widest">Profile_Export</h3>
            </div>
            <p className="text-muted-foreground text-sm">Download binary format of experience and education data.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <a 
              href="/Kaviraj%20Thangapandian%20Resume.pdf" target="_blank" rel="noreferrer"
              className="px-6 py-3 bg-primary text-background font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white transition-colors w-full sm:w-auto"
            >
              <Download size={18} /> .PDF
            </a>
            <a 
              href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer"
              className="px-6 py-3 border border-primary text-primary font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-primary/20 transition-colors w-full sm:w-auto"
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
