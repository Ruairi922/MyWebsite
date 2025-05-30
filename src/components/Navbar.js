import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ toggleTerminal }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Detect screen size to conditionally render terminal button
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>Ruairi Mulhall</Link>
      </div>

      {/* 🍔 Burger Icon */}
      <div className={`burger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* 🌐 Nav Links */}
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li className={location.pathname === '/projects' ? 'active' : ''}>
          <Link to="/projects" onClick={closeMenu}>Projects</Link>
        </li>
        <li className={location.pathname === '/contact' ? 'active' : ''}>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </li>
        <li className={location.pathname === '/about' ? 'active' : ''}>
          <Link to="/about" onClick={closeMenu}>About</Link>
        </li>

        {/* ⌨ Terminal button (inside nav list, only for desktop) */}
        {menuOpen && isDesktop && (
          <li>
            <button className="terminal-button" onClick={() => { toggleTerminal(); closeMenu(); }}>
              ⌨ Terminal
            </button>
          </li>
        )}
      </ul>

      {/* 🖥 Terminal button (outside menu, always visible on desktop) */}
      {isDesktop && (
        <button className="terminal-button desktop-only" onClick={toggleTerminal}>
          ⌨ Terminal
        </button>
      )}
    </nav>
  );
};

export default Navbar;
