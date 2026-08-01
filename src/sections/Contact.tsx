import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 bg-surface/30">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Let's <span className="text-primary">Connect.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-xl text-secondary mb-16 max-w-2xl mx-auto"
        >
          Currently open for new opportunities. Whether you have a question or just want to say hi, feel free to reach out across any of these platforms!
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
        >
          {/* GitHub Link */}
          <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="group flex items-center gap-3 px-6 py-3 glass rounded-full hover:bg-white/5 border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(93,174,255,0.2)]">
            <Github size={20} className="text-secondary group-hover:text-primary transition-colors duration-300" />
            <span className="text-white font-medium group-hover:text-primary transition-colors duration-300">GitHub</span>
          </a>

          {/* LinkedIn Link */}
          <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="group flex items-center gap-3 px-6 py-3 glass rounded-full hover:bg-white/5 border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(93,174,255,0.2)]">
            <Linkedin size={20} className="text-secondary group-hover:text-primary transition-colors duration-300" />
            <span className="text-white font-medium group-hover:text-primary transition-colors duration-300">LinkedIn</span>
          </a>

          {/* Email Link */}
          <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.socials.email}`} target="_blank" rel="noreferrer" className="group flex items-center gap-3 px-6 py-3 glass rounded-full hover:bg-white/5 border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(93,174,255,0.2)]">
            <Mail size={20} className="text-secondary group-hover:text-primary transition-colors duration-300" />
            <span className="text-white font-medium group-hover:text-primary transition-colors duration-300">Email</span>
          </a>

          {/* LeetCode Link */}
          {portfolioData.socials.leetcode && (
            <a href={portfolioData.socials.leetcode} target="_blank" rel="noreferrer" className="group flex items-center gap-3 px-6 py-3 glass rounded-full hover:bg-white/5 border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(93,174,255,0.2)]">
              <Code2 size={20} className="text-secondary group-hover:text-primary transition-colors duration-300" />
              <span className="text-white font-medium group-hover:text-primary transition-colors duration-300">LeetCode</span>
            </a>
          )}
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
