import { motion } from 'framer-motion';
import { Briefcase, ExternalLink } from 'lucide-react';

const workExperience = {
  position: 'Associate Software Engineer',
  company: 'Accenture',
  logo: '/Accenture-Logo.png',
  duration: 'July 2026 – Present',
};

const internshipExperience = [
  {
    position: 'Full Stack Developer',
    company: 'Freelancer.com',
    logo: '/freelancer.png',
    duration: 'June 2025 – Apr 2026',
    description:
      'Worked with international clients to deliver full-stack solutions, integrating frontend design with scalable backend and database systems. Focused on performance, responsiveness, and clean UX across web platforms.',
    technologies: ['ReactJS', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Firebase'],
  },
  {
    position: 'Full Stack Developer',
    company: 'TCE APPS',
    logo: '/tce.jpeg',
    duration: 'Apr 2025 – Apr 2026',
    description:
      'Developed and deployed the official apps for our college using ReactJS, Tailwind CSS, and Firebase. Included speaker bios, schedules, and registration.',
    technologies: ['ReactJS', 'Firebase', 'Tailwind CSS'],
    link: 'https://tceapps.in',
  },
  {
    position: 'Frontend Developer',
    company: 'STAR Blind Welfare Trust',
    logo: '/logo.png',
    duration: 'Jan 2025 – Feb 2025',
    description:
      'Created and launched a responsive website to highlight the services and activities of the STAR Blind Welfare Trust. Implemented accessible design and contact forms to support visually impaired individuals.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'GitHub Pages'],
    link: 'https://www.sbwtrust.org/',
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-eyebrow mb-4">Career Path</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-3">
            My Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            My professional journey and the experiences that shaped my career.
          </p>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-14">
          <h3 className="text-xl font-semibold text-foreground mb-6">Work Experience</h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-surface-2/60 to-transparent p-8 shadow-lg shadow-primary/5 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
          >
            {/* decorative glow */}
            <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />

            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-5">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl">
                  <img
                    src={workExperience.logo}
                    alt={`${workExperience.company} logo`}
                    className="h-full w-full object-contain"
                  />
                </span>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    {workExperience.position}
                  </h3>
                  <p className="text-primary-light font-medium">{workExperience.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-border bg-surface-2/60 px-3 py-1.5 text-sm text-muted">
                  <Briefcase className="h-4 w-4" />
                  {workExperience.duration}
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1.5 text-xs font-medium text-green-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                  </span>
                  Current
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Internship Experience */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-6">Internship Experience</h3>
          <div className="relative space-y-8 border-l border-border pl-8 md:pl-10">
            {internshipExperience.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative card-surface rounded-2xl p-8 hover:border-border-strong transition-colors"
              >
                <span className="absolute -left-[calc(2rem+5px)] md:-left-[calc(2.5rem+5px)] top-9 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-primary/20" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">{experience.position}</h3>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="h-7 w-7 rounded-md bg-white flex items-center justify-center overflow-hidden shrink-0">
                        {experience.logo ? (
                          <img
                            src={experience.logo}
                            alt={`${experience.company} logo`}
                            className="h-full w-full object-contain"
                          />
                        ) : (
                          <span className="text-xs font-bold text-primary">
                            {experience.company.charAt(0)}
                          </span>
                        )}
                      </span>
                      <p className="text-primary-light font-medium">{experience.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <Briefcase className="w-4 h-4" />
                    {experience.duration}
                  </div>
                </div>

                <p className="text-muted leading-relaxed mb-5">{experience.description}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-flex items-center rounded-full bg-primary/10 text-primary-light px-3 py-1 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {experience.link && (
                  <a
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-foreground hover:text-primary-light font-medium text-sm transition"
                  >
                    <ExternalLink size={16} />
                    View Site
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
