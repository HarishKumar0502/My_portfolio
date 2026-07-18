import { motion } from 'framer-motion';
import { Brain, Cpu, Globe, Code2, Zap, Target } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: Brain, label: 'AI Engineer', desc: 'Deep Learning & Neural Networks', color: 'text-primary' },
    { icon: Cpu, label: 'Computer Vision', desc: 'YOLO, OpenCV & Image Processing', color: 'text-accent' },
    { icon: Globe, label: 'Web Developer', desc: 'React, FastAPI & Full-Stack', color: 'text-neon' },
  ];

  const stats = [
    { icon: Code2, value: '11+', label: 'Repositories' },
    { icon: Zap, value: '5+', label: 'Projects Built' },
    { icon: Target, value: '7.5', label: 'CGPA' },
  ];

  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest mb-4 block">Get to know me</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            About <span className="text-glow-green text-primary">Me</span>
          </h2>
          <div className="glass-card p-8 md:p-10 text-lg text-slate-300 leading-relaxed text-left md:text-center shadow-lg">
            <p className="mb-4">
              Motivated Computer Science student specializing in <span className="text-primary font-semibold">AI</span> and <span className="text-accent font-semibold">Computer Vision</span>, with hands-on experience in deep learning, web development, and real-world problem solving.
            </p>
            <p className="text-slate-400">
              I enjoy building intelligent systems that solve practical problems — from detecting engineering symbols in blueprints to forecasting electricity demand. Currently a <span className="text-white font-medium">Freelance AI Engineer</span> delivering end-to-end AI solutions.
            </p>
          </div>
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 flex flex-col items-center justify-center gap-4 text-center group"
              >
                <div className="p-4 rounded-2xl bg-zinc-900/80 border border-white/5 group-hover:border-primary/30 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                  <Icon size={32} className={`${item.color} group-hover:scale-110 transition-transform`} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{item.label}</h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-center p-4 rounded-xl bg-cardDark/40 border border-white/5"
              >
                <Icon size={18} className="text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-white font-mono">{stat.value}</div>
                <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        <div className="section-line"></div>
      </div>
    </section>
  );
}
