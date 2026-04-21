import { motion } from 'framer-motion';
import { ExternalLink, Terminal } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: "Attendance System",
    stack: ["FastAPI", "Python", "SMS API"],
    bullets: [
      "Automated attendance tracking system.",
      "Sends real-time SMS alerts to parents."
    ]
  },
  {
    title: "Blueprint Symbol Detection",
    stack: ["YOLOv8", "OpenCV", "Python"],
    bullets: [
      "Computer vision model for engineering architecture.",
      "Detects and classifies engineering symbols from complex blueprints."
    ]
  },
  {
    title: "BUDDY AI Interviewer",
    stack: ["Groq API", "LLM", "React"],
    bullets: [
      "Smart AI agent that simulates technical interviews.",
      "Evaluates user answers and provides constructive feedback."
    ]
  },
  {
    title: "Electricity Demand Forecasting",
    stack: ["Machine Learning", "Data Science", "Python"],
    bullets: [
      "Predictive ML model for grid management.",
      "Utilizes historical usage and weather data for high accuracy."
    ]
  },
  {
    title: "Fingerprint Blood Group Prediction",
    stack: ["CNN", "PyTorch", "Streamlit"],
    bullets: [
      "Deep learning model to predict blood groups based on fingerprint ridges.",
      "Interactive Streamlit web interface for easy inference."
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-glow-red inline-block">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 flex flex-col h-full group"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="p-2 bg-zinc-800/50 rounded-lg group-hover:bg-spideyRed/20 transition-colors">
                  <Terminal size={24} className="text-spideyRed" />
                </div>
                <div className="flex gap-2">
                  <a href="#" className="text-slate-400 hover:text-white transition-colors"><FiGithub size={20} /></a>
                  <a href="#" className="text-slate-400 hover:text-spideyBlue transition-colors"><ExternalLink size={20} /></a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-spideyBlue transition-colors">
                {project.title}
              </h3>
              
              <ul className="text-slate-400 text-sm mb-6 flex-grow space-y-2">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-spideyRed mt-1">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                {project.stack.map((tech, i) => (
                  <span key={i} className="text-xs font-mono px-2 py-1 bg-zinc-900 rounded border border-white/5 text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Subtle separator string */}
        <div className="w-px h-24 bg-gradient-to-b from-spideyRed/0 via-spideyRed/50 to-spideyRed/0 mx-auto mt-20 opacity-50"></div>
      </div>
    </section>
  );
}
