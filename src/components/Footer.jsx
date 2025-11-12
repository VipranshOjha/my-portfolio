import React from 'react';

function Footer() {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <div className="container-fluid">
      <footer className="footer">
        <p className="mb-0">Copyright {currentYear} &copy; <a href="#">Vipransh Ojha</a></p>
        <div className="social-links text-right m-auto ml-sm-auto">
          <a href="https://github.com/VipranshOjha" className="link" target="_blank" rel="noopener noreferrer"><i className="ti-github"></i></a>
          <a href="https://linkedin.com/in/vipransh-ojha" className="link" target="_blank" rel="noopener noreferrer"><i className="ti-linkedin"></i></a>
          <a href="https://leetcode.com/u/Vipransh-Ojha" className="link" target="_blank" rel="noopener noreferrer"><i className="ti-medall"></i></a>
          <a href="https://www.hackerrank.com/profile/ojhavipransh" className="link" target="_blank" rel="noopener noreferrer"><i className="ti-cup"></i></a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;