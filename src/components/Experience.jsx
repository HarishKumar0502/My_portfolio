import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 relative z-10 bg-zinc-950/50">
      <div className="max-w-3xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-glow-blue inline-block">
            Experience
          </h2>
        </motion.div>

        <div className="relative border-l border-zinc-800 ml-4 md:ml-0">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 ml-8 relative glass-card p-8 group"
          >
            {/* Timeline Dot */}
            <span className="absolute flex items-center justify-center w-8 h-8 bg-zinc-900 rounded-full -left-12 ring-4 ring-zinc-950 border border-spideyBlue group-hover:bg-spideyBlue group-hover:shadow-[0_0_10px_rgba(0,191,255,0.8)] transition-all">
              <Briefcase size={14} className="text-white" />
            </span>
            
            <h3 className="mb-1 text-xl font-bold text-white">Freelance AI Engineer</h3>
            <time className="block mb-4 text-sm font-normal leading-none text-spideyBlue font-mono">2026 – Present</time>
            <ul className="text-base font-normal text-slate-400 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-spideyBlue mt-1">•</span>
                <span>Built and deployed custom computer vision models using YOLO architectures.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-spideyBlue mt-1">•</span>
                <span>Handled complex data preprocessing and developed robust training pipelines.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-spideyBlue mt-1">•</span>
                <span>Delivered end-to-end real-world AI solutions to clients across multiple domains.</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        {/* Subtle separator string */}
        <div className="w-px h-24 bg-gradient-to-b from-spideyBlue/0 via-spideyBlue/50 to-spideyBlue/0 mx-auto mt-20 opacity-50"></div>
      </div>
    </section>
  );
}
