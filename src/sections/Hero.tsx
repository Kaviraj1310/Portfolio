import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Terminal, Code2, Database } from 'lucide-react';

const TypewriterText = ({ text, delay = 0, speed = 50 }: { text: string, delay?: number, speed?: number }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    let timer: NodeJS.Timeout;
    
    const startTyping = () => {
      timer = setInterval(() => {
        setDisplayedText(text.substring(0, i));
        i++;
        if (i > text.length) clearInterval(timer);
      }, speed);
    };

    const initialDelay = setTimeout(startTyping, delay);
    
    return () => {
      clearInterval(timer);
      clearTimeout(initialDelay);
    };
  }, [text, delay, speed]);

  return (
    <span>
      {displayedText}
      <span className="animate-blink inline-block w-2 h-5 bg-primary align-middle ml-1 -mt-1"></span>
    </span>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background" id="home">
      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
        <div className="scanline"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="terminal-panel p-6 md:p-8 relative"
          >
            {/* Terminal Header */}
            <div className="absolute top-0 left-0 w-full h-8 bg-primary/20 border-b border-primary flex items-center px-4 justify-between">
              <div className="text-xs text-primary font-bold">root@kaviraj-ai-core:~</div>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-background border border-primary"></div>
                <div className="w-3 h-3 bg-background border border-primary"></div>
                <div className="w-3 h-3 bg-primary"></div>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="pt-8 space-y-6">
              
              <div className="text-sm md:text-base text-primary/80">
                <span className="text-secondary">$</span> ./initialize_system.sh
                <br/>
                <span className="text-muted">[INFO] Loading core modules... OK</span>
                <br/>
                <span className="text-muted">[INFO] Establishing neural link... OK</span>
              </div>

              <div>
                <span className="text-secondary">$</span> whoami
                <h1 className="text-4xl md:text-6xl font-bold text-white mt-2 mb-4 tracking-tighter uppercase glitch-hover">
                  <TypewriterText text={portfolioData.profile.name} delay={1000} />
                </h1>
              </div>

              <div className="space-y-2 text-lg md:text-2xl text-primary font-bold">
                <span className="text-secondary">$</span> cat current_roles.txt
                <div className="pl-4 mt-2 border-l-2 border-primary/50 text-secondary">
                  {portfolioData.profile.roles.map((role, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2.5 + (i * 0.2) }}
                    >
                      {'>'} {role}
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }}
                className="pt-6 border-t border-primary/30 text-sm md:text-base text-white/80 leading-relaxed max-w-2xl"
              >
                <span className="text-secondary">$</span> ./describe_profile.py
                <p className="mt-2 text-muted-foreground">
                  "{portfolioData.profile.description}"
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4 }}
                className="flex flex-wrap gap-4 pt-8"
              >
                <a href="#projects" className="group px-6 py-3 bg-primary text-background font-bold hover:bg-white transition-colors uppercase text-sm tracking-wider flex items-center gap-2 border border-transparent">
                  <Code2 size={16} /> Execute_Projects
                </a>
                <a href="/Kaviraj%20Thangapandian%20Resume.pdf" target="_blank" rel="noreferrer" className="group px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-background transition-colors uppercase text-sm tracking-wider flex items-center gap-2">
                  <Terminal size={16} /> Download_Resume.pdf
                </a>
                <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="group px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-background transition-colors uppercase text-sm tracking-wider flex items-center gap-2">
                  <Database size={16} /> Git_Clone
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.5 }}
                className="grid grid-cols-3 gap-4 pt-8 border-t border-primary/30"
              >
                {[
                  { label: 'Projects', value: portfolioData.stats.projects },
                  { label: 'Internships', value: portfolioData.stats.internships },
                  { label: 'Certs', value: portfolioData.stats.certifications }
                ].map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-2xl md:text-3xl font-bold text-secondary">
                      {stat.value}
                    </span>
                    <span className="text-xs text-primary uppercase tracking-widest">{stat.label}</span>
                  </div>
                ))}
              </motion.div>

            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
