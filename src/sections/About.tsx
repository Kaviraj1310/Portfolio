import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="about" className="relative min-h-screen py-32 flex items-center" ref={containerRef}>
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <motion.div style={{ opacity }} className="container mx-auto px-6 relative z-10">
        
        {/* Section Intro */}
        <div className="mb-16 flex flex-col items-start gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex items-center gap-2 glass px-3 py-1.5 rounded-md text-xs font-mono text-primary bg-primary/5"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            INITIALIZING PROFILE...
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white max-w-3xl"
          >
            Engineering intelligent products with purpose.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          <div className="flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="glass p-8 md:p-10 rounded-3xl"
            >
              <h3 className="text-sm font-mono text-muted mb-4 uppercase tracking-wider">Summary</h3>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
                {portfolioData.profile.description}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="glass p-8 md:p-10 rounded-3xl"
            >
              <h3 className="text-sm font-mono text-muted mb-4 uppercase tracking-wider">Education</h3>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
                {portfolioData.profile.education} at <br/>
                <span className="font-medium text-white">{portfolioData.profile.university}</span>
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="glass p-8 md:p-10 rounded-3xl"
            >
              <h3 className="text-sm font-mono text-muted mb-4 uppercase tracking-wider">Philosophy & Focus</h3>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light mb-6">
                {portfolioData.about.philosophy}
              </p>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
                {portfolioData.about.currentFocus}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
              className="glass p-8 md:p-10 rounded-3xl"
            >
              <h3 className="text-sm font-mono text-muted mb-6 uppercase tracking-wider">Interests</h3>
              <div className="flex flex-wrap gap-3">
                {portfolioData.about.interests.map((interest, i) => (
                  <span key={i} className="px-4 py-2 rounded-full glass text-sm text-secondary hover:text-white transition-colors cursor-default border-white/10 hover:border-primary/50 hover:bg-primary/5">
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

        </div>

      </motion.div>
    </section>
  );
};

export default About;
