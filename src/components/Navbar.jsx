import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'GitHub', href: '#github' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className={`max-w-5xl mx-auto px-4 transition-all duration-500 ${
        scrolled ? 'glass-card px-6 py-3 mx-4 md:mx-auto' : ''
      }`}>
        {/* Desktop */}
        <div className="hidden md:flex justify-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-medium px-4 py-2 rounded-xl transition-all duration-300 ${
                activeSection === item.href
                  ? 'text-primary bg-primary/10 text-glow-green'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center justify-between">
          <span className="text-lg font-bold gradient-text">RHK</span>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-slate-300 hover:text-white p-2"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-3 flex flex-col gap-1 overflow-hidden"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-medium px-4 py-2.5 rounded-xl transition-all ${
                    activeSection === item.href
                      ? 'text-primary bg-primary/10'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
