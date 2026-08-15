// src/components/LeetCodeSection.jsx
import { motion } from "framer-motion";

const leetcodeUsername = "vinoth_2005"; // ← your username

const LeetCodeSection = () => {
  return (
    <section id="leetcode" className="py-24 bg-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="section-eyebrow mb-4">Problem Solving</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            LeetCode <span className="text-gradient">Profile</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg mt-4">
            I regularly practice Data Structures &amp; Algorithms on LeetCode to
            strengthen my problem-solving and coding skills.
          </p>
        </motion.div>

        {/* Centered API stats card only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="card-surface rounded-2xl p-4 md:p-6 max-w-xl w-full">
            <img
              src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=dark&ext=heatmap`}
              alt="LeetCode Stats Card"
              className="w-full rounded-xl border border-border"
              loading="lazy"
            />
            <p className="text-xs text-muted mt-3 text-center">
              Live LeetCode stats fetched via leetcard.jacoblin.cool
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeetCodeSection;
