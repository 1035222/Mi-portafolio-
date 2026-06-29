import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-8 md:px-20 bg-dark">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-accent font-mono text-sm mb-2">02.</p>
          <h2 className="text-3xl font-bold text-white mb-10">Skills</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                className="bg-card rounded-lg p-6 border border-primary/10 hover:border-primary/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-accent font-mono text-sm font-medium mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="bg-dark text-gray-300 font-mono text-xs px-3 py-1 rounded border border-primary/20 hover:border-accent/50 hover:text-accent transition-all duration-200"
                    >
                      {item}
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