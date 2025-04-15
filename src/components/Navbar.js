import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ toggleTerminal }) => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Ruairi Mulhall</Link>
      </div>
      <ul className="navbar-links">
        <li className={location.pathname === '/' ? 'active' : ''}><Link to="/">Home</Link></li>
        <li className={location.pathname === '/projects' ? 'active' : ''}><Link to="/projects">Projects</Link></li>
        <li className={location.pathname === '/contact' ? 'active' : ''}><Link to="/contact">Contact</Link></li>
      </ul>

      {/* ✅ Terminal Toggle Button */}
      <button
        className="terminal-button"
        onClick={toggleTerminal}
      >
        ⌨ Terminal
      </button>
    </nav>
  );
};

export default Navbar;
