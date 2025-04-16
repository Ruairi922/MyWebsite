import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import DevTerminal from './pages/DevTerminal'; // ✅ Add this
import About from './pages/About'; // ✅ Add this

function App() {
  const location = useLocation(); 
  const [showTerminal, setShowTerminal] = useState(false); // ✅ Terminal toggle state

  return (
    <div>
      <Navbar toggleTerminal={() => setShowTerminal(true)} /> {/* ✅ Pass toggle fn */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
      <DevTerminal visible={showTerminal} onClose={() => setShowTerminal(false)} />
    </div>
  );
}

export default App;
