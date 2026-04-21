import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', level: 90 },
  { name: 'Machine Learning', level: 85 },
  { name: 'YOLO & OpenCV', level: 85 },
  { name: 'FastAPI', level: 80 },
  { name: 'MySQL', level: 75 },
  { name: 'HTML & CSS', level: 75 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 relative z-10 bg-zinc-950/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-glow-blue inline-block">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex justify-between items-end mb-2">
                <h3 className="text-lg font-medium text-slate-200">{skill.name}</h3>
                <span className="text-sm font-mono text-spideyBlue">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden border border-white/5">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-spideyRed to-spideyBlue relative"
                >
                  <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 blur-sm"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Subtle separator string */}
        <div className="w-px h-24 bg-gradient-to-b from-spideyBlue/0 via-spideyBlue/50 to-spideyBlue/0 mx-auto mt-20 opacity-50"></div>
      </div>
    </section>
  );
}
