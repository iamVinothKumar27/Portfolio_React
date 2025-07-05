import { motion } from 'framer-motion';
import {
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaFigma,
  FaPhp,
  FaJava,
  FaAndroid,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiFirebase,
  SiMysql,
  SiAdobephotoshop,
  SiMongodb,
  SiPostman,
  SiFlutter,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';
import { MdOutlineStorage } from 'react-icons/md';
import { BsDatabaseGear } from 'react-icons/bs';

const SkillsSection = () => {
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  const skills = {
    Frontend: [
      { name: 'React', icon: <FaReact /> },
      { name: 'JavaScript', icon: <FaJsSquare /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss /> },
      { name: 'HTML & CSS', icon: <SiHtml5 /> },
      { name: 'Flutter', icon: <SiFlutter /> },
    ],
    Backend: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'PHP', icon: <FaPhp /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'OOPS', icon: <BsDatabaseGear /> },
    ],
    DBMS: [
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'DBMS', icon: <MdOutlineStorage /> },
    ],
    'Other Skills': [
      { name: 'GitHub', icon: <FaGitAlt /> },
      { name: 'Figma', icon: <FaFigma /> },
      { name: 'Photoshop', icon: <SiAdobephotoshop /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'Android Studio', icon: <FaAndroid /> },
    ],
  };

  return (
    <section id="skills" className="py-24 bg-blue-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600">Skills & Technologies</h2>
        </motion.div>

        {/* Skills Box */}
        <div className="rounded-2xl shadow-xl bg-blue-200 p-10 border border-blue-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, i) => (
                    <motion.div
                      key={i}
                      variants={skillVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-center gap-2 text-blue-800 px-5 py-2 bg-blue-300 rounded-full text-sm border border-blue-300 hover:scale-105 transition-transform shadow-sm"
                    >
                      <span className="text-lg">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
