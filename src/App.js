import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Connect from './components/Connect';
import Skills from './components/Skills';
import Explorations from './components/Explorations';
import Footer from './components/Footer';
import GlowCursor from './components/Glowcursor'; // ✅ Import glow cursor

import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // ✅ Apply dark mode class to <body>
  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  // ✅ Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    AOS.refresh();
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <GlowCursor /> {/* ✅ Glow effect near top */}
      <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} isDark={darkMode} />
      <About />
      <Projects />
      <Skills />
      <Explorations />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
