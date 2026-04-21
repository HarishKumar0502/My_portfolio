import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-glow-red inline-block">
            Education
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 group flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left"
        >
          <div className="p-4 bg-zinc-900 rounded-full border border-spideyRed/30 group-hover:bg-spideyRed/10 group-hover:border-spideyRed transition-all shadow-[0_0_15px_rgba(139,0,0,0.2)]">
            <GraduationCap size={40} className="text-spideyRed" />
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-spideyRed transition-colors">
              M.Tech CSE <span className="text-lg font-normal text-slate-400 border border-slate-600 rounded-full px-3 py-1 ml-2 inline-block">Integrated</span>
            </h3>
            <p className="text-lg text-slate-300 mb-1">Erode Sengunthar Engineering College</p>
            <p className="text-spideyBlue font-mono font-bold mt-2 bg-spideyBlue/10 max-w-max px-4 py-1 rounded inline-block mx-auto md:mx-0">
              CGPA: 7.5
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
