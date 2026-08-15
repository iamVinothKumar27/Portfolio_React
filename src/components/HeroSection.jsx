import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  const roles = ['Full Stack Developer', 'Mobile Application Developer', 'Freelancer'];

  const sectionRef = useRef(null);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const glowSpring = { damping: 30, stiffness: 90, mass: 0.6 };
  const trailSpring = { damping: 40, stiffness: 50, mass: 1 };
  const glowX = useSpring(cursorX, glowSpring);
  const glowY = useSpring(cursorY, glowSpring);
  const trailX = useSpring(cursorX, trailSpring);
  const trailY = useSpring(cursorY, trailSpring);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || window.matchMedia('(pointer: coarse)').matches) return;

    const rect = el.getBoundingClientRect();
    cursorX.set(rect.width / 2);
    cursorY.set(rect.height / 2);

    const handleMove = (e) => {
      const bounds = el.getBoundingClientRect();
      cursorX.set(e.clientX - bounds.left);
      cursorY.set(e.clientY - bounds.top);
    };

    el.addEventListener('mousemove', handleMove);
    return () => el.removeEventListener('mousemove', handleMove);
  }, [cursorX, cursorY]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24 pb-16"
    >
      {/* Backdrop: grid + glow */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/20 blur-[110px]" />

      {/* Cursor-reactive glow */}
      <motion.div
        className="pointer-events-none absolute h-[26rem] w-[26rem] rounded-full bg-primary-light/25 blur-[100px] mix-blend-screen"
        style={{ left: glowX, top: glowY, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="pointer-events-none absolute h-64 w-64 rounded-full bg-accent-2/20 blur-[90px] mix-blend-screen"
        style={{ left: trailX, top: trailY, translateX: '-50%', translateY: '-50%' }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-7"
        >
          <span className="section-eyebrow">Welcome to my portfolio</span>

          <div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-3">
              Vinoth Kumar <span className="text-gradient whitespace-nowrap">T S</span>
            </h1>
            <div className="h-9 flex items-center justify-center">
              <p className="text-xl md:text-2xl font-medium text-primary-light">
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

          <p className="text-lg text-muted max-w-2xl mx-auto">
            Developer with hands-on experience building engaging, user-centric digital products
            that balance aesthetics and functionality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary to-accent cursor-pointer text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-primary/20 hover:shadow-primary/30 transition"
            >
              View My Work
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/VinothKumarTS_Resume.pdf"
              download
              className="border border-border text-foreground px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:border-border-strong hover:bg-surface-2/60 transition"
            >
              <Download size={18} />
              Download CV
            </motion.a>
          </div>

          <div className="flex justify-center space-x-6 pt-6">
            {[
              { icon: Github, href: 'https://github.com/iamVinothKumar27', external: true },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/vinothkumarts/', external: true },
              { icon: Mail, href: 'mailto:t.s.vinoth27@gmail.com', external: false },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target={social.external ? '_blank' : undefined}
                rel={social.external ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.15, y: -2 }}
                className="text-muted hover:text-primary-light transition"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted"
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
