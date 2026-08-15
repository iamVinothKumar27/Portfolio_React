import { motion } from 'framer-motion';
import {
  User,
  GraduationCap,
  Briefcase,
  Users,
} from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { label: 'Internships', value: '3', icon: <Briefcase size={24} /> },
    { label: 'Hackathons', value: '5', icon: <Users size={24} /> },
  ];

  const education = [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'Thiagarajar College of Engineering',
      year: '2022 - 2026',
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'CEOA Matriculation Higher Secondary School',
      year: '2020 - 2022',
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-eyebrow mb-4">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-3">
            Turning Imagination Into <span className="text-gradient">Innovation</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">Through code, curiosity, and craft.</p>
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
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary/10 text-primary-light">
                <User size={22} />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">My Story</h3>
            </div>

            <p className="text-lg text-muted leading-relaxed">
              I'm an Associate Software Engineer at Accenture, working on enterprise-scale
              software solutions with a focus on AI, ML, and Web Development. I love building
              real-world, user-centric applications that balance smart engineering with clean
              design.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              My journey so far, shaped by internships, hackathons, and freelance work, has
              blended innovation with practical impact and continues to fuel my growth as a
              developer.
            </p>

            {/* Education Section */}
            <div className="pt-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary-light">
                  <GraduationCap size={20} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Education</h3>
              </div>
              <ul className="space-y-4 pl-1">
                {education.map((edu, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-l-2 border-primary/40 pl-4"
                  >
                    <p className="text-md font-semibold text-foreground">{edu.degree}</p>
                    <p className="text-sm text-muted">{edu.institution}</p>
                    <p className="text-sm text-muted/70">{edu.year}</p>
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
                  className="card-surface flex flex-col items-center justify-center text-center p-5 rounded-xl hover:border-border-strong transition-colors"
                >
                  <div className="mb-2 text-primary-light">{stat.icon}</div>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm font-medium text-muted">{stat.label}</p>
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
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/30 to-accent/20 blur-2xl" />
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-primary/40 to-accent/30 p-[2px] shadow-xl">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-surface">
                <img
                  src="/vin.jpeg"
                  alt="Vinoth Kumar T S portrait"
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
