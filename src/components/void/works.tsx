"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

const projects = [
  { title: "Dllish", year: "MAR — NOV 2026", tags: ["NextJS", "React Native", "Edge Functions - Supabase","Auth - Supabase","S3 Bucket - Supabase","Git","Github Actions","Expo EAS CLI","Playwright","Typescript"], image: "/project-dllish.svg", description: "Implementé una solución con plataforma web y móvil para centralizar la operación de Dllish, integrando la gestión de pedidos, mesas, stock y pagos con reportes en PDF y Excel. Implementé una vista de cocina en tiempo real y una aplicación móvil para registrar y dar seguimiento a el estado de los pedidos." },
  { title: "Zazu Express", year: "ENE — FEB 2026", tags: ["Odoo", "WhatsApp API", "Integraciones","Git","Python","Docker","SSH"], image: "/project-zazu.svg", description: "Cree un Módulo de Odoo integrado con WhatsApp Cloud API para notificaciones de postventa y seguimiento de pedidos mediante flujos que el cliente." },
  { title: "Overshark", year: "NOV 2025 — ENE 2026", tags: ["AWS Lambda", "API Gateway", "S3", "DynamoDB", "Textract OCR", "Serverless Framework", "AWS Cloudformation", "WhatsApp Cloud API", "React Native - Typescript","Git","Playwright"], image: "/project-overshark.svg", description: "Consolide la validación de pagos con infraestructura en la nube. Para el procesamiento de aproximadamente 2,500 comprobantes mensuales utilizando un OCR obteniendo una reducción del 93% del tiempo operativo. Además de crear dashboard para poder administrar, gestionar, observar la información recolectada y una aplicación hecha con Expo - React Native" },
  { title: "Condorland", year: "AGO — DIC 2024", tags: ["JavaScript", "Node.js", "Express.js", "MySQL", "Docker", "Git", "CI/CD"], image: "/project-condorland.svg", description: " Diseñe y estructure la RestAPI y la base de datos para monitoreo de flota en tiempo real. Reducción del 50% de la carga operativa, aplicación en contenedores y flujo de integración y despliegue continuo." },
]

export function Works() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }
  }

  return (
    <section id="works" className="relative py-32 px-8 md:px-12 md:py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">04 — EXPERIENCIA SELECCIONADA</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic">De la idea a producción</h2>
      </motion.div>

      {/* Projects List */}
      <div ref={containerRef} onMouseMove={handleMouseMove} className="relative">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            id={`experience-${index}`} className="relative border-t border-white/10 py-8 md:py-12"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <button
              type="button" aria-expanded={expandedIndex === index} aria-controls={`details-${index}`} onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              data-cursor-hover
              className="group w-full text-left flex flex-col xl:flex-row xl:items-center justify-between gap-4"
            >
              {/* Year */}
              <span className="font-mono text-xs text-muted-foreground tracking-widest order-1 xl:order-none">
                {project.year}
              </span>

              {/* Title */}
              <motion.h3
                className="font-sans text-4xl md:text-6xl lg:text-7xl font-light tracking-tight group-hover:text-white/70 transition-colors duration-300 flex-1"
                animate={{
                  x: hoveredIndex === index ? 20 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {project.title}
              </motion.h3>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap order-2 xl:order-none xl:max-w-[42%] xl:justify-end">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] tracking-wider px-3 py-1 border border-white/20 rounded-full text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </button>
            <p id={`details-${index}`} hidden={expandedIndex !== index} className="mt-6 max-w-3xl font-mono text-xs md:text-sm leading-relaxed text-muted-foreground">{project.description}</p>
          </motion.div>
        ))}

        {/* Floating Image */}
        <motion.div
          className="hidden md:block absolute pointer-events-none z-50 w-64 h-40 md:w-80 md:h-48 overflow-hidden rounded-lg"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-320%",
          }}
          animate={{
            opacity: hoveredIndex !== null ? 1 : 0,
            scale: hoveredIndex !== null ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
        >
          {hoveredIndex !== null && (
            <motion.img
              src={projects[hoveredIndex].image}
              alt={`Arquitectura de ${projects[hoveredIndex].title}`}
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              style={{
                filter: "grayscale(50%) contrast(1.1)",
              }}
            />
          )}
          {/* Glitch overlay */}
          <div className="absolute inset-0 bg-[#2563eb]/10 mix-blend-overlay" />
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-white/10" />
    </section>
  )
}
