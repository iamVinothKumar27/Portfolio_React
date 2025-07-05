import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12 border-t border-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Text Section */}
          <div className="text-center md:text-left">
            <p className="text-blue-100 text-sm">
              © {new Date().getFullYear()} <span className="font-semibold">Vinoth Kumar</span>. All rights reserved.
            </p>
            
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            {[
              { icon: Github, href: "https://github.com/iamVinothKumar27" },
              { icon: Linkedin, href: "https://linkedin.com/in/vinothkumarts" },
              { icon: Mail, href: "mailto:t.s.vinoth27@gmail.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                className="text-blue-100 hover:text-white transition-colors"
              >
                <social.icon size={22} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
