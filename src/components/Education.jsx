import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-accent uppercase tracking-widest mb-4 block">Academic Background</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            <span className="text-glow-cyan text-accent">Education</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-10 group"
        >
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            {/* Icon */}
            <div className="p-5 bg-primary/10 rounded-2xl border border-primary/20 group-hover:bg-primary/15 group-hover:border-primary/40 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] shrink-0">
              <GraduationCap size={40} className="text-primary" />
            </div>

            {/* Details */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                  M.Tech in Computer Science & Engineering
                </h3>
                <span className="text-xs font-mono text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full w-fit mx-auto md:mx-0">
                  Integrated
                </span>
              </div>

              <p className="text-lg text-slate-300 mb-4">Erode Sengunthar Engineering College</p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <span className="inline-flex items-center gap-2 text-sm font-mono text-slate-400 bg-zinc-800/50 border border-white/5 px-4 py-2 rounded-xl">
                  <Calendar size={14} className="text-accent" /> 2021 — 2026
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-mono text-slate-400 bg-zinc-800/50 border border-white/5 px-4 py-2 rounded-xl">
                  Full-Time Program
                </span>
              </div>

              {/* CGPA */}
              <div className="mt-6 inline-flex items-center gap-3 p-4 bg-zinc-900/50 rounded-xl border border-white/5">
                <Award size={20} className="text-primary" />
                <div>
                  <span className="text-xs text-slate-500 block font-mono uppercase tracking-wider">CGPA</span>
                  <span className="text-2xl font-bold text-primary font-mono">7.5</span>
                  <span className="text-xs text-slate-500 ml-1">/ 10</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="section-line"></div>
      </div>
    </section>
  );
}
