import { motion } from 'framer-motion';
import { ExternalLink, Terminal, Star } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: "BUDDY AI Interviewer",
    stack: ["Groq API", "LLM", "React", "HTML"],
    bullets: [
      "Smart AI agent that simulates real-time technical interviews",
      "Evaluates user answers and provides constructive feedback",
      "Helps students practice for job interviews with AI guidance"
    ],
    github: "https://github.com/HarishKumar0502/BUDDY-AI-INTERVIEWER",
    featured: true,
    color: "from-primary to-accent",
  },
  {
    title: "Blueprint Symbol Detection",
    stack: ["YOLOv8", "OpenCV", "Python", "JavaScript"],
    bullets: [
      "Computer vision model for engineering architecture blueprints",
      "Detects and classifies engineering symbols from complex drawings",
      "Forked and enhanced with custom training pipeline"
    ],
    github: "https://github.com/HarishKumar0502/blueprint_symbol_detection",
    featured: true,
    color: "from-accent to-neon",
  },
  {
    title: "Electricity Demand Forecasting",
    stack: ["Machine Learning", "Python", "Data Science"],
    bullets: [
      "Predictive ML model for power grid management",
      "Utilizes historical usage and weather data for high accuracy",
      "Helps utilities optimize energy distribution"
    ],
    github: "https://github.com/HarishKumar0502/electricity-demand-forecasting-",
    featured: true,
    color: "from-neon to-primary",
  },
  {
    title: "Passport Extraction",
    stack: ["Python", "OCR", "Computer Vision"],
    bullets: [
      "Automated passport data extraction using computer vision",
      "Extracts key fields from passport images accurately",
      "Built for document processing automation"
    ],
    github: "https://github.com/HarishKumar0502/passport_extraction",
    color: "from-primary to-accent",
  },
  {
    title: "Student Management System",
    stack: ["HTML", "CSS", "JavaScript"],
    bullets: [
      "Full student and parent management system",
      "CRUD operations for student records",
      "Clean, responsive web interface"
    ],
    github: "https://github.com/HarishKumar0502/student-management-system",
    color: "from-accent to-neon",
  },
  {
    title: "Student Attendance System",
    stack: ["FastAPI", "Python", "SMS API"],
    bullets: [
      "Automated attendance tracking with FastAPI backend",
      "Sends real-time SMS alerts to parents",
      "Robust API design with database integration"
    ],
    github: "https://github.com/HarishKumar0502/student-attendance",
    color: "from-neon to-primary",
  },
  {
    title: "My Portfolio",
    stack: ["React", "Tailwind CSS", "Vite"],
    bullets: [
      "Personal portfolio website with modern design",
      "Animated UI with Framer Motion",
      "Deployed on GitHub Pages"
    ],
    github: "https://github.com/HarishKumar0502/My_portfolio",
    live: "https://harishkumar0502.github.io/My_portfolio",
    color: "from-primary to-accent",
  },
  {
    title: "Snake Game",
    stack: ["HTML", "CSS", "JavaScript"],
    bullets: [
      "Classic snake game with web technologies",
      "Smooth controls and responsive design",
      "Score tracking and game mechanics"
    ],
    github: "https://github.com/HarishKumar0502/snake-game",
    color: "from-accent to-neon",
  },
  {
    title: "Mini Game Collection",
    stack: ["Python", "CLI"],
    bullets: [
      "Collection of fun text-based mini games",
      "Python CLI entertainment projects",
      "Demonstrates core Python programming"
    ],
    github: "https://github.com/HarishKumar0502/mini-game",
    color: "from-neon to-primary",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-neon uppercase tracking-widest mb-4 block">My work</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Featured <span className="text-glow-purple text-neon">Projects</span>
          </h2>
          <p className="text-slate-500 max-w-md mx-auto mt-4">
            A selection of projects from my GitHub showcasing AI, CV, and web development work.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 flex flex-col h-full group relative overflow-hidden"
            >
              {/* Top gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`}></div>

              <div className="mb-4 flex items-center justify-between">
                <div className="p-2.5 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Terminal size={22} className="text-primary" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded-md flex items-center gap-1">
                    <Star size={10} /> Featured
                  </span>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                    <FiGithub size={18} />
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-accent transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <ul className="text-slate-400 text-sm mb-6 flex-grow space-y-2">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1 text-xs">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                {project.stack.map((tech, i) => (
                  <span key={i} className="tech-tag bg-zinc-900/80 text-slate-400 border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-lg font-mono text-slate-500 uppercase tracking-wider mb-6 text-center">Other Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-card p-5 flex flex-col group"
            >
              <div className="flex items-center justify-between mb-3">
                <Terminal size={18} className="text-accent" />
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-white transition-colors">
                  <FiGithub size={16} />
                </a>
              </div>

              <h4 className="text-base font-bold text-white mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h4>

              <p className="text-slate-500 text-sm mb-4 flex-grow">
                {project.bullets[0]}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-white/5">
                {project.stack.map((tech, i) => (
                  <span key={i} className="text-[10px] font-mono px-2 py-1 bg-zinc-900/60 rounded text-slate-500 border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All on GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/HarishKumar0502?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass-card text-slate-300 hover:text-primary hover:border-primary/30 transition-all font-medium group"
          >
            <FiGithub size={18} className="group-hover:rotate-12 transition-transform" />
            View All Repos on GitHub
            <ExternalLink size={14} className="opacity-50" />
          </a>
        </motion.div>

        <div className="section-line"></div>
      </div>
    </section>
  );
}
