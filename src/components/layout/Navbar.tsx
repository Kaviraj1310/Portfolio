import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Terminal, X } from 'lucide-react';

const navLinks = [
  { name: 'sys.home', path: '/' },
  { name: 'sys.about', path: '/#about' },
  { name: 'sys.experience', path: '/#experience' },
  { name: 'sys.projects', path: '/#projects' },
  { name: 'sys.modules', path: '/#skills' },
  { name: 'sys.contact', path: '/#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/#')) {
      if (location.pathname !== '/') return;
      e.preventDefault();
      const id = path.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled ? 'bg-background border-primary shadow-[0_4px_20px_rgba(0,255,65,0.15)]' : 'bg-transparent border-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            
            {/* System Status / Logo */}
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm">
              <Terminal size={16} />
              <span className="hidden sm:inline">Kaviraj_AI_Core_v2.0</span>
              <span className="sm:hidden">Kaviraj_AI</span>
              <span className="animate-blink">_</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleScrollTo(e, link.path)}
                  className="px-3 py-1.5 text-xs font-bold text-muted-foreground hover:text-background hover:bg-primary uppercase tracking-widest transition-colors"
                >
                  [{link.name}]
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-primary border border-primary p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <span className="px-2 text-xs font-bold uppercase">Menu</span>}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-14 z-40 bg-background border-b border-primary flex flex-col"
          >
            <nav className="flex flex-col p-6 space-y-4">
              <div className="text-secondary text-xs mb-4">{'// SELECT_MODULE'}</div>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={(e) => handleScrollTo(e, link.path)}
                    className="block text-xl font-bold text-primary uppercase hover:bg-primary hover:text-background p-2 transition-colors border-l-2 border-primary/30 hover:border-primary"
                  >
                    {'>'} {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
