import { motion } from 'framer-motion';
import { Brain, Cpu, Globe } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: Brain, label: 'AI Engineer', color: 'text-spideyRed' },
    { icon: Cpu, label: 'Computer Vision', color: 'text-spideyBlue' },
    { icon: Globe, label: 'Web Developer', color: 'text-white' },
  ];

  return (
    <section id="about" className="py-20 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-glow-red inline-block">
            About Me
          </h2>
          <div className="glass-card p-8 text-lg text-slate-300 leading-relaxed text-left md:text-center shadow-lg border-white/5">
            <p>
              Motivated Computer Science student specializing in AI and Computer Vision, with hands-on experience in deep learning, web development, and real-world problem solving.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 flex flex-col items-center justify-center gap-4 group"
              >
                <div className={`p-4 rounded-full bg-zinc-950 border border-white/10 group-hover:border-${item.color.split('-')[1]} transition-colors duration-300`}>
                  <Icon size={32} className={`${item.color} drop-shadow-lg group-hover:scale-110 transition-transform`} />
                </div>
                <h3 className="text-xl font-semibold text-slate-200">{item.label}</h3>
              </motion.div>
            )
          })}
        </div>
        
        {/* Subtle separator string */}
        <div className="w-px h-24 bg-gradient-to-b from-spideyRed/0 via-spideyRed/50 to-spideyRed/0 mx-auto mt-20 opacity-50"></div>
      </div>
    </section>
  );
}
