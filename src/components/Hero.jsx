import { motion } from "framer-motion";
import { info } from "../data/portfolio";
import { playButtonSound } from "../utils/sound";

export default function Hero() {
    return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-20 bg-dark relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(127,63,191,0.12),_transparent_35%)] pointer-events-none"
      />
      <div className="max-w-4xl relative z-10">
        <motion.p
          className="text-accent font-mono text-sm mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hola, soy
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-3 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Miguel Valencia
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-4xl font-semibold text-primary mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Estudiante de Ingeniería Informática · Full Stack en formación
        </motion.h2>

        <motion.p
          className="text-gray-400 max-w-xl font-mono text-sm leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Me encanta crear productos digitales con buena experiencia, código claro y una base sólida en desarrollo web. Actualmente estudio en la IUE y estoy construyendo mi camino en React, Node.js y diseño de interfaces. 
          <br />
          <span className="text-primary">Siempre aprendiendo, siempre creando.</span>
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a
            href="#projects"
            onClick={playButtonSound}
            className="bg-primary text-white px-6 py-3 rounded font-mono text-sm hover:bg-primary/80 hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-primary/20"
          >
            Ver proyectos →
          </a>
          <a
            href={info.github}
            target="_blank"
            rel="noreferrer"
            onClick={playButtonSound}
            className="border border-accent text-accent px-6 py-3 rounded font-mono text-sm hover:bg-accent hover:text-dark hover:-translate-y-0.5 transition-all duration-200"
          >
            GitHub
          </a>
          <a
            href={info.linkedin}
            target="_blank"
            rel="noreferrer"
            onClick={playButtonSound}
            className="border border-primary/40 text-gray-400 px-6 py-3 rounded font-mono text-sm hover:border-primary hover:text-white hover:-translate-y-0.5 transition-all duration-200"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}