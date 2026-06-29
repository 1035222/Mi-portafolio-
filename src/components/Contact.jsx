import { motion } from "framer-motion";
import { info } from "../data/portfolio";
import { playButtonSound } from "../utils/sound";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8 md:px-20 bg-dark">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-accent font-mono text-sm mb-2">04.</p>
          <h2 className="text-3xl font-bold text-white mb-4">Contacto</h2>
          <p className="text-gray-400 mb-10 leading-relaxed">
            Estoy abierto a oportunidades de prácticas, proyectos freelance o colaboraciones que involucren desarrollo web, interfaces y productos con impacto real. Si te interesa trabajar conmigo, me encantaría conversar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={`mailto:${info.email}`}
              onClick={playButtonSound}
              className="bg-primary text-white px-8 py-3 rounded font-mono text-sm hover:bg-primary/80 hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-primary/20"
            >
              Enviar email →
            </a>
            <a
              href={info.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={playButtonSound}
              className="border border-accent text-accent px-8 py-3 rounded font-mono text-sm hover:bg-accent hover:text-dark hover:-translate-y-0.5 transition-all duration-200"
            >
              LinkedIn
            </a>
          </div>

          {/* Links */}
          <div className="flex justify-center gap-8 font-mono text-sm text-gray-500">
            <a
              href={info.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href={info.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${info.email}`}
              className="hover:text-accent transition-colors duration-200"
            >
              Email
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        className="text-center mt-20 font-mono text-xs text-gray-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p>Construido con React + Tailwind + Framer Motion 🟣</p>
        <p className="mt-1">Miguel Angel Valencia Castaño · {new Date().getFullYear()}</p>
      </motion.div>
    </section>
  );
}