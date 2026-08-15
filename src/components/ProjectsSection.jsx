import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import projects from '../data/projects';

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Web App');
  const categories = ['Web App', 'Prototype', 'Mobile App'];

  const filteredProjects = projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="section-eyebrow mb-4">Selected Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted max-w-3xl mx-auto text-lg mt-4">
            A showcase of my recent work and personal projects that demonstrate my skills and creativity.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 text-sm rounded-full font-semibold border transition-all duration-300 cursor-pointer
                ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary to-accent text-white border-transparent shadow-md shadow-primary/20'
                    : 'bg-surface-2 text-muted hover:text-foreground border-border hover:border-border-strong'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="card-surface rounded-2xl overflow-hidden hover:border-border-strong hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-background/0 md:group-hover:bg-background/70 transition-colors duration-300 flex items-center justify-center gap-4 z-10">
                  <div className="opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-4">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-background p-2.5 rounded-full shadow"
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-background p-2.5 rounded-full shadow"
                      >
                        <Github size={18} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>

                <p className="text-sm text-muted mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-surface-2 border border-border text-muted rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
