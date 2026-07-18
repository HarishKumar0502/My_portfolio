import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: 'Python', level: 60 },
      { name: 'HTML & CSS', level: 60 },
    ]
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: 'Machine Learning', level: 60 },
      { name: 'Deep Learning (CNN)', level: 40 },
      { name: 'YOLO & Object Detection', level: 60 },
      { name: 'OpenCV', level: 60 },
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: 'FastAPI', level: 55},
      { name: 'Git & GitHub', level: 50 },
      { name: 'MySQL', level: 50 },
      { name: 'PyTorch / TensorFlow', level: 50 },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative z-10 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-accent uppercase tracking-widest mb-4 block">What I work with</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Technical <span className="text-glow-cyan text-accent">Skills</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-sm font-mono text-primary uppercase tracking-wider mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-end mb-2">
                      <h4 className="text-sm font-medium text-slate-300">{skill.name}</h4>
                      <span className="text-xs font-mono text-accent">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-800/80 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                        className="skill-bar-fill"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="section-line"></div>
      </div>
    </section>
  );
}
