import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Instagram, Download } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  const roles = ["Full Stack Developer", "Mobile Application Developer", "Freelancer"];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-2">Vinoth Kumar T S</h1>
            <div className="h-10 flex items-center justify-center">
              <p className="text-xl md:text-2xl font-semibold text-blue-800">
                <Typewriter
                  words={roles}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Developer with hands-on experience building engaging, user-centric digital products that balance aesthetics and functionality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-indigo-500 cursor-pointer text-white px-8 py-3 rounded-full font-medium shadow-md hover:opacity-90 transition"
            >
              View My Work
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Gokul_Priyan_CV.pdf"
              download
              className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-8 py-3 rounded-full font-medium shadow-md flex items-center gap-2 transition"
            >
              <Download size={18} />
              Download CV
            </motion.a>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            {[
              { icon: Github, href: "https://github.com/iamVinothKumar27" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/vinothkumarts/" },
              { icon: Instagram, href: "https://www.instagram.com/vk._.27.05/" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-blue-600 hover:text-indigo-500 transition"
              >
                <social.icon size={26} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-blue-500"
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
