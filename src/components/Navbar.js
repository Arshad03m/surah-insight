import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState)
  }
  return (
    <>
      <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <div className="main-title">
          <div className="nav-title">
            <Link to="/"><h1>Surah Insight</h1></Link>
          </div>
          <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="menubar bar1"></div>
            <div className="menubar bar2"></div>
            <div className="menubar bar3"></div>
          </div>

        </div>
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <Link to="/">Home</Link>
          <Link to="/quran">Quran</Link>
          <Link to="/hadees">Hadees</Link>
        </div>
      </div>

    </>
  )
}

export default Navbar;
