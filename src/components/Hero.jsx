import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, Mail, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center md:justify-end order-2 md:order-1"
        >
          <div className="relative group">
            {/* Gradient Glow Border */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-spideyRed to-spideyBlue rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

            {/* Avatar Container */}
            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-2 border-zinc-800 bg-zinc-900 flex items-center justify-center">
              <img
                src="./assets/profile.jpg"
                alt="Harish Kumar R"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<span class="text-slate-500 flex flex-col items-center"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user mb-2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>Profile Image</span>';
                }}
              />
            </div>

            {/* Minimal Web Icon Decoration */}
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 text-spideyBlue opacity-80"
            >
              <Activity size={32} />
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center md:items-start text-center md:text-left order-1 md:order-2"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            <span className="block mb-2 text-glow-red">Harish Kumar R</span>
            <span className="text-xl md:text-2xl text-spideyBlue font-mono h-12 block mt-4">
              <TypeAnimation
                sequence={[
                  'AI Engineer & Web Developer',
                  2000,
                  'Computer Vision Specialist',
                  2000,
                  'Problem Solver',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl mb-8 max-w-lg">
            Building intelligent systems with AI & Computer Vision. Focus on real-world impact through code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="./assets/Harish_Kumar_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-6 py-3 flex items-center justify-center gap-2 text-white hover:text-spideyRed hover:border-spideyRed transition-all font-semibold"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-2xl flex items-center justify-center gap-2 bg-gradient-to-r from-spideyRed to-spideyRed/80 hover:from-spideyRed hover:to-spideyBlue text-white shadow-[0_0_15px_rgba(139,0,0,0.5)] transition-all font-semibold"
            >
              <Mail size={20} />
              <span>Contact Me</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
