import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { FileDown, Mail, Github, ArrowRight } from 'lucide-react';

const AnimatedWords = () => {
  const words = portfolioData.profile.roles;
  return (
    <div className="h-[40px] md:h-[60px] overflow-hidden relative mt-2">
      <motion.div
        animate={{
          y: [0, -100 * (words.length - 1)],
        }}
        transition={{
          duration: words.length * 2,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col"
      >
        {words.map((word, i) => (
          <span 
            key={i} 
            className="h-[40px] md:h-[60px] flex items-center text-2xl md:text-4xl text-primary font-medium bg-clip-text text-transparent bg-accent-gradient"
          >
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const AICore = () => {
  return (
    <div className="w-full h-[500px] relative pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <directionalLight position={[-10, -10, -5]} color="#5DAEFF" intensity={2} />
        
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Sphere args={[1.5, 64, 64]}>
            <MeshDistortMaterial 
              color="#0B0B0B" 
              attach="material" 
              distort={0.4} 
              speed={2} 
              roughness={0.2}
              metalness={0.8}
              wireframe={true}
            />
          </Sphere>
          <Sphere args={[1.3, 64, 64]}>
            <MeshDistortMaterial 
              color="#5DAEFF" 
              attach="material" 
              distort={0.5} 
              speed={3} 
              roughness={0.1}
              metalness={0.9}
              transparent
              opacity={0.8}
            />
          </Sphere>
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
      </Canvas>

      {/* Floating Cards around AI Core */}
      <motion.div 
        className="absolute top-10 left-10 glass px-4 py-2 rounded-full text-sm font-mono text-white/80 backdrop-blur-md"
        animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        React / Vite
      </motion.div>
      <motion.div 
        className="absolute bottom-20 right-10 glass px-4 py-2 rounded-full text-sm font-mono text-white/80 backdrop-blur-md"
        animate={{ y: [0, 10, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        Python / AI
      </motion.div>
      <motion.div 
        className="absolute top-1/2 -left-4 glass px-4 py-2 rounded-full text-sm font-mono text-white/80 backdrop-blur-md"
        animate={{ x: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        Backend / Cloud
      </motion.div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="home">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-primary/10 rounded-full blur-[150px] opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-2"
            >
              <span className="uppercase tracking-[0.4em] text-xs font-bold text-muted">
                Hello I'm
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-bold text-white tracking-tight drop-shadow-2xl">
                {portfolioData.profile.name}
              </h1>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <AnimatedWords />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
              className="inline-flex glass-panel px-4 py-2 rounded-full w-max text-xs md:text-sm text-secondary border border-primary/20 bg-primary/5"
            >
              {portfolioData.profile.education} • {portfolioData.profile.specialization}
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
              className="text-muted max-w-lg text-sm md:text-base leading-relaxed"
            >
              {portfolioData.profile.description}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a href="#projects" className="group glass px-6 py-3 rounded-full flex items-center gap-2 text-white hover:bg-white/10 transition-all hover:scale-105 active:scale-95 border-primary/30 shadow-[0_0_15px_rgba(93,174,255,0.15)]">
                Explore Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/Kaviraj_Thangapandian_Resume.pdf" target="_blank" rel="noreferrer" className="glass px-6 py-3 rounded-full flex items-center gap-2 text-white hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
                Resume <FileDown size={16} />
              </a>
              <div className="flex gap-2">
                <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="glass p-3 rounded-full text-white hover:bg-white/10 transition-all hover:scale-110 active:scale-95">
                  <Github size={20} />
                </a>
                <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.socials.email}`} target="_blank" rel="noreferrer" className="glass p-3 rounded-full text-white hover:bg-white/10 transition-all hover:scale-110 active:scale-95">
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }}
              className="flex gap-8 pt-8 border-t border-white/5"
            >
              {[
                { label: 'Projects', value: portfolioData.stats.projects },
                { label: 'Internships', value: portfolioData.stats.internships },
                { label: 'Awards', value: portfolioData.stats.awards }
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-3xl font-serif italic text-white">
                    {stat.value}+
                  </span>
                  <span className="text-xs text-muted uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - AI Core */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <AICore />
          </motion.div>
          
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-xs text-muted uppercase tracking-widest font-mono">Explore</span>
        <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
            animate={{ y: [0, 50, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
