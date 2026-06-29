import { motion } from "framer-motion";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 md:px-20 bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-accent font-mono text-sm mb-2">03.</p>
          <h2 className="text-3xl font-bold text-white mb-10">Proyectos</h2>

          <div className="space-y-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                className={`bg-dark rounded-xl p-6 border transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] ${
                  project.featured
                    ? "border-primary/30"
                    : "border-primary/10"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    {project.featured && (
                      <span className="text-xs font-mono text-primary border border-primary/30 px-2 py-0.5 rounded">
                        destacado
                      </span>
                    )}
                    <h3 className="text-white font-bold text-xl">
                      {project.name}
                    </h3>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500 hover:text-accent transition-colors duration-200 font-mono text-sm"
                  >
                    GitHub →
                  </a>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}