import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* GitHub Card */}
          <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="group glass p-10 rounded-3xl flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(93,174,255,0.15)]">
            <div className="w-20 h-20 rounded-full bg-surface/50 border border-white/5 flex items-center justify-center text-white group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:text-primary transition-all duration-500">
              <Github size={36} />
            </div>
            <div className="flex items-center gap-2 text-white font-medium text-xl mt-4">
              GitHub <ArrowUpRight size={20} className="text-muted group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
            </div>
            <span className="text-sm text-secondary font-mono">View my code</span>
          </a>

          {/* LinkedIn Card */}
          <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="group glass p-10 rounded-3xl flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(93,174,255,0.15)]">
            <div className="w-20 h-20 rounded-full bg-surface/50 border border-white/5 flex items-center justify-center text-white group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:text-primary transition-all duration-500">
              <Linkedin size={36} />
            </div>
            <div className="flex items-center gap-2 text-white font-medium text-xl mt-4">
              LinkedIn <ArrowUpRight size={20} className="text-muted group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
            </div>
            <span className="text-sm text-secondary font-mono">Professional network</span>
          </a>

          {/* Email Card */}
          <a href={`mailto:${portfolioData.socials.email}`} className="group glass p-10 rounded-3xl flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(93,174,255,0.15)]">
            <div className="w-20 h-20 rounded-full bg-surface/50 border border-white/5 flex items-center justify-center text-white group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:text-primary transition-all duration-500">
              <Mail size={36} />
            </div>
            <div className="flex items-center gap-2 text-white font-medium text-xl mt-4">
              Email <ArrowUpRight size={20} className="text-muted group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
            </div>
            <span className="text-sm text-secondary font-mono">Say hello directly</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
