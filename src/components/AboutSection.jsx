import { motion } from 'framer-motion';
import {
  User,
  Code,
  GraduationCap,
  Briefcase,
  Layers3,
  Users,
  BookOpen 
} from 'lucide-react';


const AboutSection = () => {
  const stats = [
    { label: "Internships", value: "3", icon: <Briefcase size={28} /> },
    { label: "Projects", value: "11", icon: <Layers3 size={28} /> },
    { label: "Hackathons", value: "5", icon: <Users size={28} /> },
    { label: "Publications", value: "1", icon: <BookOpen size={28} /> } // changed icon
  ];

  

  const education = [
    {
      degree: "B.Tech in Information Technology",
      institution: "Thiagarajar College of Engineering",
      year: "2022 - 2026"
    },
    {
      degree: "Higher Secondary Education",
      institution: "CEOA Matriculation Higher Secondary School",
      year: "2020 - 2022"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-blue-50 to-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4">About Me</h2>
          <h3 className="text-lg text-gray-700 max-w-2xl mx-auto">
          Turning imagination into innovation through code.
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <User className="text-blue-500" size={28} />
              <h2 className="text-2xl font-semibold text-gray-900">My Story</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a tech enthusiast pursuing B.Tech IT at TCE with a focus on AI, ML, and Web Development. I love building real-world solutions through smart and scalable applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From AI-driven learning tools to document QA bots, my work blends innovation with practical impact, shaped by internships, hackathons, and live projects.
            </p>



            {/* Education Section */}
            <div className="mt-8">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-blue-500" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Education</h3>
              </div>
              <ul className="space-y-4 pl-2">
                {education.map((edu, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-l-2 border-blue-400 pl-4"
                  >
                    <p className="text-md font-semibold text-gray-800">{edu.degree}</p>
                    <p className="text-sm text-gray-600">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.year}</p>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center justify-center text-center p-5 rounded-xl shadow-md bg-gradient-to-r from-blue-500 to-blue-400 text-white"
                >
                  <div className="mb-2">{stat.icon}</div>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-base font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side with Personal Photo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-400 to-white p-4 flex items-center justify-center shadow-lg">
              <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/vin.jpeg"
                  alt="Your Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
