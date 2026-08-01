import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import NotFound from './pages/NotFound';
import CustomCursor from './components/ui/CustomCursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LoadingScreen from './components/layout/LoadingScreen';
import { useLenis } from './hooks/useLenis';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

function App() {
  useLenis(); // Initialize smooth scrolling
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial loading time to show the cinematic loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500); // Wait 4.5 seconds to complete the loading sequence
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <Navbar />
      
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      <Footer />
    </Router>
  );
}

export default App;
