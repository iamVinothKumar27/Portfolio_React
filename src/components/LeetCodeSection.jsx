// src/components/LeetCodeSection.jsx
import { motion } from "framer-motion";

const leetcodeUsername = "vinoth_2005"; // ← your username

const LeetCodeSection = () => {
  return (
    <section id="leetcode" className="py-24 bg-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            LeetCode Profile
          </h2>
          <p className="text-blue-900 max-w-2xl mx-auto text-lg mt-4">
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
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-4 md:p-6 max-w-xl w-full">
            <img
              src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=light&ext=heatmap`}
              alt="LeetCode Stats Card"
              className="w-full rounded-xl border border-blue-100"
              loading="lazy"
            />
            <p className="text-xs text-gray-500 mt-3 text-center">
              Live LeetCode stats fetched via leetcard.jacoblin.cool
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeetCodeSection;
