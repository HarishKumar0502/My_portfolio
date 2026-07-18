import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, Mail, ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 relative">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center md:justify-end order-2 md:order-1"
        >
          <div className="relative group">
            {/* Gradient Glow Ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-neon rounded-full blur opacity-40 group-hover:opacity-70 transition duration-1000 animate-glow-pulse"></div>

            {/* Avatar */}
            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-2 border-white/10 bg-zinc-900 flex items-center justify-center">
              <img
                src="./assets/profile.jpg"
                alt="Harish Kumar R"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<span class="text-slate-500 flex flex-col items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span class="text-sm">Harish Kumar R</span></span>';
                }}
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-2 -right-2 bg-primary/20 border border-primary/30 rounded-full p-2.5 backdrop-blur-sm"
            >
              <Sparkles size={20} className="text-primary" />
            </motion.div>

            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-zinc-900 border border-primary/30 rounded-full px-4 py-1.5 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-medium text-primary">Open to Work</span>
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
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm text-primary font-medium">Available for opportunities</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            <span className="block mb-2">Harish Kumar R</span>
            <span className="text-xl md:text-2xl font-mono h-12 block mt-4 gradient-text font-semibold">
              <TypeAnimation
                sequence={[
                  'AI Engineer',
                  2000,
                  'Computer Vision Engineer',
                  2000,
                  'Machine Learning Engineer',
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

          <p className="text-slate-400 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
            Building intelligent systems with AI & Computer Vision. Passionate about creating real-world impact through code and deep learning.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="./assets/Harish_Kumar_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-7 py-3.5 flex items-center justify-center gap-2.5 text-white hover:text-primary hover:border-primary/40 transition-all font-semibold group"
            >
              <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="px-7 py-3.5 rounded-2xl flex items-center justify-center gap-2.5 bg-gradient-to-r from-primary to-accent hover:from-primaryDark hover:to-accentDark text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all font-semibold"
            >
              <Mail size={18} />
              <span>Contact Me</span>
            </a>
          </div>

          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-12 text-slate-500 hover:text-primary transition-colors flex flex-col items-center gap-1"
          >
            <span className="text-xs font-medium uppercase tracking-widest">Scroll Down</span>
            <ArrowDown size={16} className="animate-bounce" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
