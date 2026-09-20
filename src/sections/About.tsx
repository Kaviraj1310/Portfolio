import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Terminal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-32 bg-background border-t border-primary/20">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="text-secondary text-xl">$</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter">
              cat /etc/profile
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="terminal-panel flex flex-col h-full"
          >
            <div className="bg-primary/20 border-b border-primary p-2 px-4 flex items-center justify-between text-xs text-primary font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2"><Terminal size={14} /> about.json</div>
            </div>
            <div className="p-6 md:p-8 font-mono text-sm leading-loose overflow-x-auto">
              <span className="text-secondary">{`{`}</span><br/>
              <span className="text-primary pl-4">"identity"</span><span className="text-secondary">:</span> <span className="text-white">"{portfolioData.profile.name}"</span>,<br/>
              <span className="text-primary pl-4">"status"</span><span className="text-secondary">:</span> <span className="text-white">"Active"</span>,<br/>
              <span className="text-primary pl-4">"philosophy"</span><span className="text-secondary">:</span> <span className="text-muted-foreground">"{portfolioData.about.philosophy}"</span>,<br/>
              <span className="text-primary pl-4">"current_focus"</span><span className="text-secondary">:</span> <span className="text-muted-foreground">"{portfolioData.about.currentFocus}"</span>,<br/>
              <span className="text-primary pl-4">"interests"</span><span className="text-secondary">:</span> <span className="text-secondary">[</span><br/>
              {portfolioData.about.interests.map((interest, i) => (
                <div key={i} className="pl-8">
                  <span className="text-white">"{interest}"</span>{i < portfolioData.about.interests.length -1 ? ',' : ''}
                </div>
              ))}
              <span className="text-secondary pl-4">]</span><br/>
              <span className="text-secondary">{`}`}</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="terminal-panel flex flex-col h-full"
          >
            <div className="bg-primary/20 border-b border-primary p-2 px-4 flex items-center justify-between text-xs text-primary font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2"><Terminal size={14} /> education.log</div>
            </div>
            <div className="p-6 md:p-8 font-mono text-sm leading-loose text-muted-foreground">
              <span className="text-secondary">[{new Date().getFullYear()}-01-01 00:00:00]</span> INFO: Booting education module...<br/>
              <span className="text-secondary">[{new Date().getFullYear()}-01-01 00:00:01]</span> LOAD: <span className="text-white">{portfolioData.profile.education}</span><br/>
              <span className="text-secondary">[{new Date().getFullYear()}-01-01 00:00:02]</span> ORG: <span className="text-primary">{portfolioData.profile.university}</span><br/>
              <span className="text-secondary">[{new Date().getFullYear()}-01-01 00:00:03]</span> SPEC: {portfolioData.profile.specialization}<br/>
              <span className="text-secondary">[{new Date().getFullYear()}-01-01 00:00:04]</span> STATUS: In Progress (Expected 2028)<br/>
              <br/>
              <span className="text-secondary text-xs">EOF</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
