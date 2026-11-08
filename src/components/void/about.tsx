"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

const statements = [
  "Software que resuelve problemas reales.",
  "Del análisis a producción.",
  "TypeScript. Node.js. AWS.",
  "Procesos que se convierten en soluciones.",
  "Web, móvil e integraciones.",
]

export function About() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])
  const smoothX = useSpring(x, { stiffness: 100, damping: 30 })

  return (
    <section id="about" ref={containerRef} className="relative py-32 overflow-hidden md:py-0">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-8 md:px-12 mb-0 py-20"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">03 — SOBRE MÍ</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic">Jesús Anthony Flores Condori</h2>
      </motion.div>

      <div className="px-8 md:px-12 max-w-4xl pb-16 font-mono text-sm md:text-base leading-relaxed text-muted-foreground">
        <p>Desarrollador de software con experiencia freelance desde el análisis de necesidades hasta la puesta en producción de aplicaciones web e integraciones. Automatizo procesos de pedidos, pagos y postventa con TypeScript, Node.js y AWS.</p>
        <p className="mt-6 text-xs">SENATI · Desarrollo de Software · 2021–2024<br />Español nativo · Inglés B1 · Preparación AWS Solutions Architect Associate</p>
        <a className="inline-block mt-8 border-b border-white/40 pb-2 text-foreground" href="/CVJesusFlores.pdf" download>Descargar CV ↗</a>
      </div>
      {/* Horizontal Scroll Container */}
      <div className="relative flex items-center overflow-hidden py-0 gap-0 h-16">
        <motion.div style={{ x: smoothX }} className="flex gap-16 md:gap-24 px-8 md:px-12 whitespace-nowrap">
          {statements.map((statement, index) => (
            <motion.p
              key={index}
              className="text-4xl md:text-6xl lg:text-7xl font-sans font-light tracking-tight text-white/90"
              style={{
                WebkitTextStroke: index % 2 === 0 ? "none" : "1px rgba(255,255,255,0.3)",
                color: index % 2 === 0 ? "inherit" : "transparent",
              }}
            >
              {statement}
            </motion.p>
          ))}
        </motion.div>
      </div>

      {/* Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mt-16 mx-8 md:mx-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent origin-left"
      />
    </section>
  )
}
