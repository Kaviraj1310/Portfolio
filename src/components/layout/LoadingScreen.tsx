import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = [
  "Thinking", "Learning", "Building", "Reasoning", "Creating", "Scaling", "Engineering", "Deploying"
];

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let start: number;
    const duration = 3500; // 3.5s for the counter
    const animateProgress = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const current = Math.min((elapsed / duration) * 100, 100);
      setProgress(current);
      if (elapsed < duration) {
        requestAnimationFrame(animateProgress);
      }
    };
    requestAnimationFrame(animateProgress);

    const wordInterval = setInterval(() => {
      setWordIndex(prev => (prev + 1) % words.length);
    }, 700);

    return () => clearInterval(wordInterval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[999999] bg-[#040404] overflow-hidden flex flex-col justify-between p-12"
      exit={{ opacity: 0, filter: "blur(20px)", scale: 1.05 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Background FX */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#89AACC]/20 blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="h-24 overflow-hidden relative w-full max-w-2xl text-center">
          <AnimatePresence mode="popLayout">
            <motion.h1
              key={wordIndex}
              initial={{ y: 100, filter: "blur(10px)", opacity: 0, scale: 0.9 }}
              animate={{ y: 0, filter: "blur(0px)", opacity: 1, scale: 1 }}
              exit={{ y: -100, filter: "blur(10px)", opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl font-serif italic text-white absolute inset-0 flex items-center justify-center"
            >
              {words[wordIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>

      <div className="relative z-10">
        <div className="flex justify-end mb-4">
          <span className="text-6xl md:text-8xl font-mono text-white font-light tracking-tighter">
            {Math.floor(progress).toString().padStart(3, '0')}
          </span>
        </div>
        
        <div className="h-[3px] w-full bg-white/10 overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-accent-gradient shadow-[0_0_15px_rgba(93,174,255,0.5)]"
            style={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.1 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
