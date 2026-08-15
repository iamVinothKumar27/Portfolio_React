import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const achievements = [
  {
    title: "Winner - HackFest INFINIX'25",
    subtitle: 'Thiagarajar College of Engineering',
    description: 'Developed an innovative web solution.',
  },
  {
    title: "Runner (2nd Prize) - NeonHacks'25",
    subtitle: 'Velammal College of Engineering and Technology',
    description: 'Built an AI-integrated personalized learning system.',
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-eyebrow mb-4">Recognition</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-3">
            <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Recognitions and awards from national-level tech and creative competitions.
          </p>
        </motion.div>

        <div className="relative border-l border-border pl-8 space-y-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[calc(2rem+5px)] top-6 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <Trophy size={16} />
              </div>
              <div className="card-surface p-6 rounded-2xl hover:border-border-strong transition-colors">
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-md text-primary-light mt-1">{item.subtitle}</p>
                <p className="text-sm text-muted mt-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
