// DevTerminal.js
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/DevTerminal.css';

const terminalResponses = {
  'whoami': 'Ruairi Mulhall – Full-stack developer, Java & PERN stack enthusiast, Microsoft mentored engineer.',
  'list skills': 'Java, JavaScript, React, Node.js, Express, PostgreSQL, MongoDB, Azure, Python, OAuth2',
  'show projects': '1. Subtitle Translator App\n2. MobileSaunas.ie',
  'help': 'Commands: whoami, list skills, show projects, clear',
  'clear': ''
};

const DevTerminal = ({ visible, onClose }) => {
  const [lines, setLines] = useState(['Type `help` to begin']);
  const [input, setInput] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    if (visible) inputRef.current?.focus();
  }, [visible]);

  const handleCommand = () => {
    const trimmed = input.trim().toLowerCase();
    if (trimmed === '') return;

    const response = terminalResponses[trimmed] || `Command not recognized: "${trimmed}"`;
    const responseLines = response.split('\n');
    const newLines = [...lines, `> ${trimmed}`, ...responseLines];

    setLines(trimmed === 'clear' ? [] : newLines);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleCommand();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div 
          className="terminal-overlay"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.3 }}
        >
          <div className="terminal-header">
            <span>Dev Terminal</span>
            <button onClick={onClose}>✕</button>
          </div>
          <div className="terminal-body">
            {lines.map((line, i) => (
              <div key={i} className="terminal-line">{line}</div>
            ))}
            <div className="terminal-input">
              <span>&gt;</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DevTerminal;
