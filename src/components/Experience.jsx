import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: "Freelance AI Engineer",
    company: "Self-Employed",
    period: "Jan-2026 — Mar-2026",
    location: "Remote",
    type: "Full-Time",
    responsibilities: [
      "Built and deployed custom computer vision models using YOLO architectures for real-world clients",
      "Handled complex data preprocessing, augmentation, and developed robust training pipelines",
      "Delivered end-to-end AI solutions across multiple domains including document processing and infrastructure",
      "Collaborated with cross-functional teams to translate business requirements into technical solutions"
    ],
    tags: ["YOLO", "OpenCV", "Python", "Deep Learning", "FastAPI"]
  },
  {
    role: "AI Engineer",
    company: "Global Tech Professionals",
    period: "June-2026 — Present",
    location: "Remote",
    type: "Internship",
    responsibilities: [
      "Built and deployed custom computer vision models using YOLO architectures for real-world clients",
      "Handled complex data preprocessing, augmentation, and developed robust training pipelines",
      "Delivered end-to-end AI solutions across multiple domains including document processing and infrastructure",
      "Collaborated with cross-functional teams to translate business requirements into technical solutions"
    ],
    tags: ["YOLO", "OpenCV", "Python", "Deep Learning", "FastAPI"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative z-10 bg-zinc-950/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest mb-4 block">Career Path</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Work <span className="text-glow-green text-primary">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative ml-6 md:ml-8 mb-12 last:mb-0"
            >
              {/* Timeline Dot */}
              <span className="absolute flex items-center justify-center w-5 h-5 bg-primary rounded-full -left-[26px] md:-left-[29px] top-8 ring-4 ring-zinc-950 shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                <Briefcase size={10} className="text-white" />
              </span>

              <div className="glass-card p-8 group">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                      <Calendar size={12} /> {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-zinc-800/50 border border-white/5 px-3 py-1 rounded-full">
                      <MapPin size={12} /> {exp.location}
                    </span>
                  </div>
                </div>

                <div className="h-px bg-white/5 my-4"></div>

                {/* Responsibilities */}
                <ul className="space-y-3 mb-6">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <span className="text-primary mt-1.5 text-xs font-bold">▸</span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="tech-tag bg-primary/5 text-primary/80 border-primary/15">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="section-line"></div>
      </div>
    </section>
  );
}
