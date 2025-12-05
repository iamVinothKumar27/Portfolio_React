import { motion } from 'framer-motion';
import { Briefcase, ExternalLink } from 'lucide-react';

const experiences = [
  {
    position: "Full Stack Developer",
    company: "Freelancer.com",
    logo: "/freelancer.png",
    duration: "June 2025 – Present",
    description:
      "Working with international clients to deliver full-stack solutions, integrating frontend design with scalable backend and database systems. Focused on performance, responsiveness, and clean UX across web platforms.",
    technologies: ["ReactJS", "Node.js", "MongoDB", "Tailwind CSS", "Firebase"],
  },
  {
    position: "Full Stack Developer",
    company: "TCE APPS",
    logo: "/tce.jpeg",
    duration: "Apr 2025 – Present",
    description:
      "Developed and deployed the official apps for our college using ReactJS, Tailwind CSS, and Firebase. Included speaker bios, schedules, and registration.",
    technologies: ["ReactJS", "Firebase", "Tailwind CSS"],
    link: "https://tceapps.in",
  },
  {
    position: "Frontend Developer",
    company: "STAR Blind Welfare Trust",
    logo: "/logo.png",
    duration: "Jan 2025 – Feb 2025",
    description:
      "Created and launched a responsive website to highlight the services and activities of the STAR Blind Welfare Trust. Implemented accessible design and contact forms to support visually impaired individuals.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "GitHub Pages"],
    link: "https://www.sbwtrust.org/",
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-blue-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-blue-700 mb-4">
            Work Experience
          </h2>
          <p className="text-blue-900 max-w-2xl mx-auto text-lg">
            My professional journey and the experiences that shaped my career.
          </p>
        </motion.div>

        <div className="space-y-10">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-blue-200 shadow-xl rounded-2xl p-8 transition hover:scale-[1.01]"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {experience.position}
                  </h3>
                  <div className="flex items-center gap-3 mt-1">
                    <img
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      className="h-6 w-6 object-contain"
                    />
                    <p className="text-blue-700 font-medium">{experience.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Briefcase className="w-5 h-5" />
                  {experience.duration}
                </div>
              </div>

              <p className="text-gray-800 mb-4">{experience.description}</p>

              <div className="flex flex-wrap gap-3 mb-3">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="inline-flex items-center rounded-full bg-blue-600/20 text-blue-700 px-3 py-1 text-sm font-medium shadow-sm"
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
                  className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium text-sm transition"
                >
                  <ExternalLink size={16} />
                  View Site
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
