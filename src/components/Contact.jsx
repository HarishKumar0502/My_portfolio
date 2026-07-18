import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquareCode, Send, MapPin } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Contact() {
  const contactLinks = [
    { icon: Mail, label: 'Email', value: 'harishkumar522004@gmail.com', href: 'mailto:harishkumar522004@gmail.com', color: 'hover:text-primary hover:border-primary/30' },
    { icon: Phone, label: 'Phone', value: '+91 7904958584', href: 'tel:+917904958584', color: 'hover:text-accent hover:border-accent/30' },
    { icon: FiGithub, label: 'GitHub', value: 'HarishKumar0502', href: 'https://github.com/HarishKumar0502/', color: 'hover:text-white hover:border-white/30' },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'Harish Kumar R', href: 'https://www.linkedin.com/in/harish-kumar-r-719076297/', color: 'hover:text-accent hover:border-accent/30' },
  ];

  return (
    <footer id="contact" className="relative z-10 bg-zinc-950/80 backdrop-blur-xl border-t border-white/5 pt-24 pb-8 mt-12">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest mb-4 block">Get in Touch</span>
          <div className="flex justify-center mb-4 text-primary opacity-80">
            <MessageSquareCode size={40} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Let's <span className="text-glow-green text-primary">Connect</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto mt-4">
            Open for opportunities, collaborations, and interesting AI/Computer Vision projects!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16 max-w-3xl mx-auto">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={index}
                href={link.href}
                target={link.label !== 'Email' && link.label !== 'Phone' ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center gap-4 p-4 glass-card border border-white/5 ${link.color} group transition-all`}
              >
                <div className="p-3 bg-zinc-800/50 rounded-xl group-hover:bg-zinc-800 transition-colors">
                  <Icon size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 font-mono uppercase">{link.label}</p>
                  <p className="text-white font-medium truncate group-hover:text-glow-green transition-all">{link.value}</p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-white/5">
          <div className="flex items-center justify-center gap-4 mb-4">
            <a href="https://github.com/HarishKumar0502" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-primary transition-colors">
              <FiGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/harish-kumar-r-719076297/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-accent transition-colors">
              <FiLinkedin size={18} />
            </a>
            <a href="mailto:harishkumar522004@gmail.com" className="text-slate-600 hover:text-primary transition-colors">
              <Mail size={18} />
            </a>
          </div>
          <p className="text-sm text-slate-600">
            &copy; {new Date().getFullYear()} R. Harish Kumar. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
