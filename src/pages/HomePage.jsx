import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Education from '../components/education';
function HomePage() {
  return (
    <div>
      <Home />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Navbar/>
      
    </div>
  )
}

export default HomePage
