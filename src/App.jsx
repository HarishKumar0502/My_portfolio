import React from 'react';
import { GiSpiderAlt } from 'react-icons/gi';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <div className="web-pattern"></div>
      
      {/* Massive Spider Theme Background */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <GiSpiderAlt className="text-spideyRed w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] opacity-[0.03]" />
      </div>
      
      <div className="relative min-h-screen selection:bg-spideyRed/30 selection:text-white flex flex-col">
        <Navbar />
        
        <main className="flex-grow flex flex-col">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
        </main>

        <Contact />
      </div>
    </>
  );
}

export default App;
