import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import Contact from '../sections/Contact';

const pageVariants = {
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, filter: "blur(10px)", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } }
};

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative overflow-hidden w-full"
    >
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </motion.div>
  );
};

export default Home;
