import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 bg-background border-t border-primary/20">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="inline-block terminal-panel p-8 md:p-12"
        >
          <div className="text-xs text-secondary mb-4 uppercase tracking-widest text-left">{'// ESTABLISH_CONNECTION'}</div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter uppercase glitch-hover">
            PING <span className="text-primary">ME</span>
          </h2>
          
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto font-mono text-sm md:text-base">
            SYSTEM READY. WAITING FOR INCOMING CONNECTIONS.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-3 border border-primary/40 bg-surface hover:bg-primary text-white hover:text-background transition-colors uppercase font-bold tracking-wider text-sm">
              <Github size={18} /> GitHub
            </a>

            <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-3 border border-primary/40 bg-surface hover:bg-primary text-white hover:text-background transition-colors uppercase font-bold tracking-wider text-sm">
              <Linkedin size={18} /> LinkedIn
            </a>

            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.socials.email}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-3 border border-primary/40 bg-surface hover:bg-primary text-white hover:text-background transition-colors uppercase font-bold tracking-wider text-sm">
              <Mail size={18} /> Email
            </a>

            {portfolioData.socials.leetcode && (
              <a href={portfolioData.socials.leetcode} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-3 border border-primary/40 bg-surface hover:bg-primary text-white hover:text-background transition-colors uppercase font-bold tracking-wider text-sm">
                <Code2 size={18} /> LeetCode
              </a>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
