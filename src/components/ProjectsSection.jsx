import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react';
import projects from '../data/projects';

const DESCRIPTION_PREVIEW_LIMIT = 140;

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Web App');
  const [activeProject, setActiveProject] = useState(null);
  const categories = ['Web App', 'Prototype', 'Mobile App'];
  const sliderRef = useRef(null);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    isHoveringRef.current = !!activeProject;
  }, [activeProject]);

  useEffect(() => {
    if (!activeProject) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveProject(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeProject]);

  const filteredProjects = projects.filter((p) => p.category === selectedCategory);
  const showArrows = filteredProjects.length > 3;

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0 });
    }
  }, [selectedCategory]);

  // 1 card per slide on mobile, 2 on tablet, 3 on laptop/desktop — matches the
  // card widths below (w-[85%] sm:w-[46%] lg:w-[31%]) so each slide moves a
  // whole page of cards instead of an arbitrary pixel amount.
  const getSlideStep = () => {
    const slider = sliderRef.current;
    if (!slider) return 0;
    const card = slider.querySelector('[data-project-card]');
    const cardWidth = card ? card.getBoundingClientRect().width : slider.clientWidth;
    const gap = parseFloat(getComputedStyle(slider).columnGap) || 32;
    const cardsPerView = window.matchMedia('(min-width: 1024px)').matches
      ? 3
      : window.matchMedia('(min-width: 640px)').matches
      ? 2
      : 1;
    return (cardWidth + gap) * cardsPerView;
  };

  const scrollByPage = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.scrollBy({ left: direction * getSlideStep(), behavior: 'smooth' });
  };

  useEffect(() => {
    if (!showArrows) return;

    const interval = setInterval(() => {
      const slider = sliderRef.current;
      if (!slider || isHoveringRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = slider;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: getSlideStep(), behavior: 'smooth' });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [selectedCategory, showArrows]);

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

        {/* Project Slider */}
        <div className="relative">
          {showArrows && (
            <div className="flex justify-end gap-3 mb-5">
              <button
                type="button"
                onClick={() => scrollByPage(-1)}
                aria-label="Previous projects"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-2 border border-border text-foreground hover:border-border-strong hover:text-primary shadow-md cursor-pointer transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => scrollByPage(1)}
                aria-label="Next projects"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-2 border border-border text-foreground hover:border-border-strong hover:text-primary shadow-md cursor-pointer transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}

          <div
            ref={sliderRef}
            onMouseEnter={() => (isHoveringRef.current = true)}
            onMouseLeave={() => (isHoveringRef.current = false)}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              data-project-card
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="card-surface rounded-2xl overflow-hidden hover:border-border-strong hover:-translate-y-1 transition-all duration-300 group flex-none w-[85%] sm:w-[46%] lg:w-[31%] snap-start"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-background/40 md:bg-background/0 md:group-hover:bg-background/70 transition-colors duration-300 flex items-center justify-center gap-4 z-10">
                  <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-4">
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

                <p className="text-sm text-muted mb-2 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {project.description.length > DESCRIPTION_PREVIEW_LIMIT && (
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="text-sm font-medium text-primary-light hover:text-primary mb-4 inline-block cursor-pointer"
                  >
                    Read more
                  </button>
                )}

                <div className="flex flex-wrap gap-2 mt-2">
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
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="card-surface w-full max-w-lg rounded-2xl overflow-hidden max-h-[85vh] overflow-y-auto"
            >
              <div className="relative">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-56 object-cover"
                />
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  aria-label="Close"
                  className="absolute top-3 right-3 flex items-center justify-center w-9 h-9 rounded-full bg-background/70 text-foreground hover:bg-background/90 cursor-pointer transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{activeProject.title}</h3>

                <p className="text-sm text-muted leading-relaxed mb-5">
                  {activeProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {activeProject.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-surface-2 border border-border text-muted rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent text-white px-4 py-2 text-sm font-medium shadow-md shadow-primary/20 hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink size={16} />
                      Live Site
                    </a>
                  )}
                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-surface-2 border border-border text-foreground px-4 py-2 text-sm font-medium hover:border-border-strong transition-colors"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
