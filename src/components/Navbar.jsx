import { motion } from 'framer-motion';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4"
    >
      <div className="glass-card px-6 py-3 max-w-full overflow-x-auto flex gap-4 md:gap-8 flex-nowrap items-center justify-start md:justify-center" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-sm font-medium text-slate-300 hover:text-white hover:text-glow-blue transition-all whitespace-nowrap"
          >
            {item.name}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
