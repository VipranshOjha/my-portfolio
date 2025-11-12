import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  // State to manage the theme
  const [theme, setTheme] = useState(() => {
    // Get saved theme from localStorage or default to "light"
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  // Effect to apply the theme to the body and save to localStorage
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]); 

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme}/>
      <Header />
      <About />
      
      <Experience />

      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;