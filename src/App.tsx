import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import NotFound from './pages/NotFound';
import CustomCursor from './components/ui/CustomCursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { useLenis } from './hooks/useLenis';

import { AnimatePresence } from 'framer-motion';

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  useLenis(); // Initialize smooth scrolling
  return (
    <Router>
      <CustomCursor />
      <Navbar />
      <main className="min-h-screen">
        <AppRoutes />
      </main>
      
      <Footer />
    </Router>
  );
}

export default App;
