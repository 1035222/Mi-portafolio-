import { motion } from "framer-motion";
import { info } from "../data/portfolio";
import ProfilePhoto from "./ProfilePhoto";

export default function About() {
  return (
    <section id="about" className="py-24 px-8 md:px-20 bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-accent font-mono text-sm mb-2">01.</p>
          <h2 className="text-3xl font-bold text-white mb-10">Sobre mí</h2>

          <div className="grid md:grid-cols-[auto_1fr] gap-12 items-center">
            <ProfilePhoto />

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>{info.about}</p>
              <p>
                Actualmente estoy enfocado en desarrollar habilidades reales para crear productos completos, desde el frontend hasta la lógica del backend. Me interesa trabajar con tecnologías modernas y aportar soluciones simples pero bien pensadas.
              </p>
              <p>
                He trabajado con proyectos que combinan React, Node.js, bases de datos y diseño de interfaces, y estoy en búsqueda de una oportunidad para crecer en un entorno profesional y aportar con disciplina, creatividad y compromiso.
              </p>

              <div className="grid gap-3 md:grid-cols-2 bg-dark/80 p-6 rounded-xl border border-primary/20 text-sm shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                <div>
                  <p className="text-gray-500 uppercase text-xs tracking-[0.16em]">Universidad</p>
                  <p className="text-white">IUE · Envigado</p>
                </div>
                <div>
                  <p className="text-gray-500 uppercase text-xs tracking-[0.16em]">Carrera</p>
                  <p className="text-white">Ing. Informática</p>
                </div>
                <div>
                  <p className="text-gray-500 uppercase text-xs tracking-[0.16em]">Semestre</p>
                  <p className="text-white">8vo</p>
                </div>
                <div>
                  <p className="text-gray-500 uppercase text-xs tracking-[0.16em]">Estado</p>
                  <p className="text-accent">Disponible para prácticas</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}