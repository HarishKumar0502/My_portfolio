import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import GitHubStats from './components/GitHubStats';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <div className="grid-pattern"></div>

      {/* Ambient Glow Effects */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative min-h-screen selection:bg-primary/30 selection:text-white flex flex-col">
        <Navbar />

        <main className="flex-grow flex flex-col">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <GitHubStats />
        </main>

        <Contact />
      </div>
    </>
  );
}

export default App;
