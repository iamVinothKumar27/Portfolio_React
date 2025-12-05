import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, GitFork, Star } from "lucide-react";
import { Github } from "lucide-react";

const GITHUB_USERNAME = "iamVinothKumar27";

const GitHubSection = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 6;

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`
        );
        const data = await res.json();
        setRepos(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching repos", err);
      }
    };

    fetchRepos();
  }, []);

  const totalPages = Math.ceil(repos.length / perPage) || 1;
  const visible = repos.slice((page - 1) * perPage, page * perPage);

  return (
    <section id="github" className="py-24 bg-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            My Repositories
          </h2>
          <p className="text-blue-900 max-w-3xl mx-auto text-xl mt-4">
            A curated list of my public GitHub repositories showcasing my work,
            experiments, and open-source contributions.
          </p>
        </motion.div>

        {/* Repo Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {visible.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-blue-200 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.02] cursor-pointer border border-blue-200 transition-transform duration-300"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Title + Link */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-800 truncate pr-4">
                    {repo.name}
                  </h3>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white text-blue-600 p-2 rounded-full shadow hover:bg-blue-50 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>

                {/* Description */}
                <p className="text-base text-gray-700 mb-4 line-clamp-3">
                  {repo.description || "No description available"}
                </p>

                {/* Topics / Language */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.topics && repo.topics.length > 0 ? (
                    repo.topics.slice(0, 3).map(topic => (
                      <span
                        key={topic}
                        className="px-3 py-1 bg-blue-300 text-blue-700 rounded-full text-sm"
                      >
                        {topic}
                      </span>
                    ))
                  ) : (
                    repo.language && (
                      <span className="px-3 py-1 bg-blue-300 text-blue-700 rounded-full text-sm">
                        {repo.language}
                      </span>
                    )
                  )}
                </div>

                {/* Stats */}
                <div className="mt-auto pt-2 flex items-center justify-between text-sm text-blue-900">
                  <span className="flex items-center gap-1">
                    <Star size={16} /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={16} /> {repo.forks}
                  </span>
                  <span className="text-xs">
                    {repo.language || "Misc"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

          {visible.length === 0 && (
            <p className="col-span-full text-center text-blue-900">
              No repositories found. Please check the username or try again later.
            </p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mb-8">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-1 rounded-full border border-blue-300 bg-white text-blue-700 disabled:opacity-40"
            >
              ‹
            </button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-4 py-1 rounded-full text-sm font-medium border transition-all duration-200 ${
                  page === i + 1
                    ? "bg-gradient-to-r from-blue-600 to-indigo-500 text-white border-transparent"
                    : "bg-white text-blue-600 hover:bg-blue-100 border-blue-300"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-3 py-1 rounded-full border border-blue-300 bg-white text-blue-700 disabled:opacity-40"
            >
              ›
            </button>
          </div>
        )}

        {/* View all button */}
        <div className="text-center">
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 justify-center px-8 py-3 rounded-full
                    bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold
                    shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform"
        >
          <Github size={20} className="text-white" />
          View All on GitHub
        </a>
       </div>

      </div>
    </section>
  );
};

export default GitHubSection;
