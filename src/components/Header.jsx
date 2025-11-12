import React from 'react';
import { Link } from 'react-scroll'; 

function Header() {
  return (
    <header id="home" className="header">
      <div className="overlay"></div>
      <div className="header-content container">
        <h1 className="header-title">
          <span className="up">HI!</span>
          <span className="down">I am Vipransh Ojha</span>
        </h1>
        <p className="header-subtitle">CSE STUDENT | AI & ML SPECIALIZATION</p>

        <Link
          to="portfolio" 
          smooth={true}
          duration={700}
          offset={-60} 
          className="btn btn-primary"
        >
          Visit My Works
        </Link>
      </div>
    </header>
  );
}

export default Header;