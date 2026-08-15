import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} <span className="font-semibold text-foreground">Vinoth Kumar</span>. All rights reserved.
          </p>

          <div className="flex space-x-6">
            {[
              { icon: Github, href: 'https://github.com/iamVinothKumar27' },
              { icon: Linkedin, href: 'https://linkedin.com/in/vinothkumarts' },
              { icon: Mail, href: 'mailto:t.s.vinoth27@gmail.com' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                className="text-muted hover:text-primary-light transition-colors"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
