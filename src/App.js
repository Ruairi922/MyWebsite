import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import DevTerminal from './pages/DevTerminal';
import About from './pages/About';

function App() {
  const location = useLocation();
  const [showTerminal, setShowTerminal] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <Navbar toggleTerminal={() => isDesktop && setShowTerminal(true)} /> {/* ✅ Only allow toggle if desktop */}
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>

      {/* ✅ Only render terminal on desktop */}
      {isDesktop && (
        <DevTerminal visible={showTerminal} onClose={() => setShowTerminal(false)} />
      )}
    </div>
  );
}

export default App;
