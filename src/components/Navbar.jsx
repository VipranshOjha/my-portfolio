import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Lightbulb, LightbulbOff } from 'lucide-react'; 

function Navbar({ toggleTheme, theme }) {
  const [isAffixed, setIsAffixed] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsAffixed(true);
      } else {
        setIsAffixed(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={`custom-navbar ${isAffixed ? 'affix' : ''}`} data-spy="affix" data-offset-top="20">
      <div className="container">
        <a className="logo" href="#">Vipransh</a>
        <ul className={`nav ${isNavOpen ? 'show' : ''}`}>
          <li className="item">
            <Link className="link" to="home" smooth={true} duration={700} offset={-60} onClick={() => setIsNavOpen(false)}>Home</Link>
          </li>
          <li className="item">
            <Link className="link" to="about" smooth={true} duration={700} offset={-60} onClick={() => setIsNavOpen(false)}>About</Link>
          </li>
          <li className="item">
            <Link className="link" to="experience" smooth={true} duration={700} offset={-60} onClick={() => setIsNavOpen(false)}>Experience</Link>
          </li>
          <li className="item">
            <Link className="link" to="portfolio" smooth={true} duration={700} offset={-60} onClick={() => setIsNavOpen(false)}>Projects</Link>
          </li>
          <li className="item">
            <Link className="link" to="contact" smooth={true} duration={700} offset={-60} onClick={() => setIsNavOpen(false)}>Contact</Link>
          </li>
        </ul>
        
        {/* CHANGED: Swapped <a> for <button> to fix the warning */}
        <button 
          id="nav-toggle" 
          className={`hamburger hamburger--elastic ${isNavOpen ? 'is-active' : ''}`}
          onClick={handleNavToggle}
          type="button"
          aria-label="Menu"
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }} // Reset button styles
        >
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </button>

        <button 
          id="dark-mode-toggle" 
          className="theme-toggle-btn" 
          aria-label="Toggle theme"
          onClick={toggleTheme}
        >
          {theme === 'light' ? <Lightbulb size={20} /> : <LightbulbOff size={20} />}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;