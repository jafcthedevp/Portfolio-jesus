"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Briefcase, Code, Github, Layers } from "lucide-react"
import { motion } from "framer-motion"

export function Experience() {
    const jobs = [
        {
            company: "CONDORLAND S.A.C",
            position: "Practicante de Desarrollo Back-end",
            period: "Agosto 2024 - Diciembre 2024",
            technologies: ["HTML", "CSS", "JavaScript", "MySQL", "Node.js", "Express.js"],
            repository: "https://github.com/jafcthedevp/Backend-CL-SAC",
            details: "Creé una API con Node.js y Express que permite la administración eficiente de usuarios y tareas.",
        },
        {
            company: "ECOIN HOLDING BUSINESS SOCIEDAD COMERCIAL DE RESPONSABILIDAD LIMITADA",
            position: "Desarrollador android",
            period: "Agosto 2023 - Diciembre 2023",
            technologies: ["JavaScript", "React Native-expo", "Express.js", "MySQL"],
            repository: "https://github.com/jafcthedevp/frontend",
            details:
                "Implementación de funcionalidades en la aplicación móvil para el registro de tareas, optimización del rendimiento y corrección de errores.",
        },
        {
            company: "UNIVERSIDAD NACIONAL DE INGENIERIA - Facultad de Ingenieria Mecatronica",
            position: "Practicante de sistemas",
            period: "Agosto 2022 - Marzo 2023",
            technologies: ["HTML", "CSS", "JavaScript", "Supabase", "Shadcn", "React", "Nextjs"],
            repository: "https://github.com/jafcthedevp/cine-nextjs",
            details:
                "Desarrollo de una aplicación web que consistía en un sistema de gestión de proyectos dividido en fases, incluyendo la integración de bases de datos y el manejo de interfaces de usuario dinámicas.",
        },
    ]

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const item = {
        hidden: { x: -20, opacity: 0 },
        show: { x: 0, opacity: 1 },
    }

    return (
        <section>
            <div className="flex items-center gap-4 mb-8" id="experiencia-title">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-secondary-500 to-primary-500 flex items-center justify-center text-white">
                    <Layers className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-secondary-600 to-primary-600 text-transparent bg-clip-text">
                    EXPERIENCIA LABORAL
                </h2>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-8"
            >
                {jobs.map((job, index) => (
                    <motion.div key={index} variants={item}>
                        <Card className="experience-card card-hover border border-gray-100 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm overflow-hidden">
                            <CardContent className="p-6 pl-8">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400">{job.position}</h3>
                                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full mt-2 md:mt-0">
                                        <Calendar className="h-4 w-4" />
                                        <span className="text-sm font-medium">{job.period}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 mb-3">
                                    <Briefcase className="h-5 w-5 text-secondary-600 dark:text-secondary-400" />
                                    <span className="text-gray-800 dark:text-gray-200 font-medium">{job.company}</span>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    <Code className="h-5 w-5 text-accent-600 dark:text-accent-400 mr-1" />
                                    {job.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>

                                {job.repository && (
                                    <div className="flex items-center gap-2 mb-4">
                                        <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                                        <a
                                            href={job.repository}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 hover:underline text-sm font-medium transition-colors"
                                        >
                                            {job.repository}
                                        </a>
                                    </div>
                                )}

                                <p className="text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border-l-4 border-primary-500">
                                    {job.details}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
