import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { Star, GitBranch, Users, Trophy, Code2 } from 'lucide-react';

const stats = [
  { icon: GitBranch, label: 'Repositories', value: '11', color: 'text-primary' },
  { icon: Star, label: 'Stars Earned', value: '3', color: 'text-yellow-400' },
  { icon: Users, label: 'Followers', value: '2', color: 'text-accent' },
  { icon: Trophy, label: 'Achievements', value: 'Pull Shark', color: 'text-neon' },
];

const pinnedRepos = [
  { name: 'HARISH-KUMAR-R', desc: 'Personal resume repository', lang: 'Markdown' },
  { name: 'BUDDY-AI-INTERVIEWER', desc: 'AI-powered interview simulator', lang: 'HTML' },
  { name: 'blueprint_symbol_detection', desc: 'CV model for engineering blueprints', lang: 'JavaScript' },
  { name: 'passport_extraction', desc: 'Automated passport data extraction', lang: 'Python' },
  { name: 'student-management-system', desc: 'Student & parent management', lang: 'HTML' },
];

const languages = [
  { name: 'Python', percentage: 60, color: 'bg-blue-500' },
  { name: 'HTML/CSS', percentage: 60, color: 'bg-orange-500' },
];

export default function GitHubStats() {
  return (
    <section id="github" className="py-24 px-6 relative z-10 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest mb-4 block">Open Source</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            GitHub <span className="text-glow-green text-primary">Profile</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-4"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-4 flex items-center gap-4 group"
                >
                  <div className="p-3 bg-zinc-900/80 rounded-xl border border-white/5 group-hover:border-primary/20 transition-all">
                    <Icon size={20} className={stat.color} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-mono uppercase">{stat.label}</div>
                    <div className={`text-lg font-bold ${stat.color} font-mono`}>{stat.value}</div>
                  </div>
                </motion.div>
              );
            })}

            {/* Languages */}
            <div className="glass-card p-5">
              <h4 className="text-sm font-mono text-slate-500 uppercase mb-4 flex items-center gap-2">
                <Code2 size={14} /> Top Languages
              </h4>
              <div className="space-y-3">
                {languages.map((lang, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">{lang.name}</span>
                      <span className="text-slate-500 font-mono">{lang.percentage}%</span>
                    </div>
                    <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                        className={`h-full rounded-full ${lang.color}`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Pinned Repos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h3 className="text-sm font-mono text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
              <FiGithub size={14} /> Pinned Repositories
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pinnedRepos.map((repo, index) => (
                <motion.a
                  key={index}
                  href={`https://github.com/HarishKumar0502/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="glass-card p-5 group flex flex-col"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <FiGithub size={14} className="text-slate-500 group-hover:text-primary transition-colors" />
                      <span className="text-sm font-mono text-slate-300 group-hover:text-primary transition-colors truncate">
                        {repo.name}
                      </span>
                    </div>
                    <FiExternalLink size={12} className="text-slate-600 group-hover:text-slate-400 transition-colors shrink-0" />
                  </div>
                  <p className="text-xs text-slate-500 flex-grow mb-3">{repo.desc}</p>
                  <span className="text-[10px] font-mono text-slate-600 bg-zinc-800/50 self-start px-2 py-0.5 rounded">
                    {repo.lang}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* View Profile CTA */}
            <motion.a
              href="https://github.com/HarishKumar0502"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-6 glass-card p-5 flex items-center justify-center gap-3 text-slate-400 hover:text-primary hover:border-primary/30 transition-all group"
            >
              <FiGithub size={20} className="group-hover:rotate-12 transition-transform" />
              <span className="font-medium">View Full Profile on GitHub</span>
              <FiExternalLink size={14} className="opacity-50" />
            </motion.a>
          </motion.div>
        </div>

        <div className="section-line"></div>
      </div>
    </section>
  );
}
