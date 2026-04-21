import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquareCode } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Contact() {
  const contactLinks = [
    { icon: Mail, label: 'Email', value: 'harishkumar522004@gmail.com', href: 'mailto:harishkumar522004@gmail.com', color: 'hover:text-spideyRed hover:border-spideyRed' },
    { icon: Phone, label: 'Phone', value: '+91 7904958584', href: 'tel:+917904958584', color: 'hover:text-spideyBlue hover:border-spideyBlue' },
    { icon: FiGithub, label: 'GitHub', value: 'github.com/HarishKumar0502', href: 'https://github.com/HarishKumar0502/', color: 'hover:text-white hover:border-white' },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/harish-kumar-r-719076297', href: 'https://www.linkedin.com/in/harish-kumar-r-719076297/', color: 'hover:text-spideyBlue hover:border-spideyBlue' },
  ];

  return (
    <footer id="contact" className="relative z-10 bg-zinc-950/80 backdrop-blur-xl border-t border-white/5 pt-20 pb-8 mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-12"
        >
          <div className="flex justify-center mb-4 text-spideyRed opacity-80">
            <MessageSquareCode size={40} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Let's Connect
          </h2>
          <p className="text-slate-400">
            Open for opportunities and interesting computer vision projects!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
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
                <div className="p-3 bg-zinc-900 rounded-lg group-hover:bg-zinc-800 transition-colors">
                  <Icon size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">{link.label}</p>
                  <p className="text-white font-medium group-hover:text-glow-blue transition-all">{link.value}</p>
                </div>
              </motion.a>
            )
          })}
        </div>

        <div className="text-center text-sm text-slate-500 pt-8 border-t border-white/5">
          <p>© {new Date().getFullYear()} Harish Kumar R. Designed with React & Tailwind.</p>
        </div>
      </div>
    </footer>
  );
}
