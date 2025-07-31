"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Github, Download, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function Header() {
    const [expanded, setExpanded] = useState(false)

    return (
        <Card className="border-none shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
            <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    

                    <div className="flex-1">
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 text-transparent bg-clip-text">
                            JESUS ANTHONY FLORES CONDORI
                        </h1>
                        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-1">DESARROLLADOR DE SOFTWARE</h2>

                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: expanded ? "auto" : "80px", opacity: 1 }}
                            className="mt-4 text-gray-600 dark:text-gray-300 overflow-hidden relative"
                        >
                            <p>
                                Desarrollador de software con enfoque en crear soluciones funcionales y centradas en el usuario. Me apasiona construir productos digitales que no solo cumplan con su propósito técnico, sino que también brinden una experiencia clara, intuitiva y efectiva.
A lo largo de mi formación y experiencia profesional, he trabajado en proyectos que van desde el diseño de interfaces hasta el desarrollo de sistemas backend completos, siempre con el objetivo de aportar valor real a los usuarios. Me motiva aprender constantemente, adaptarme a nuevos retos y colaborar con equipos comprometidos en construir productos de calidad.
                            </p>
                            {!expanded && (
                                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white dark:from-gray-800 to-transparent"></div>
                            )}
                        </motion.div>

                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setExpanded(!expanded)}
                            className="mt-2 text-primary-500  hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center gap-1"
                        >
                            {expanded ? "Leer menos" : "Leer más"}
                            <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
                        </Button>

                        <div className="mt-4 flex flex-wrap gap-3">
                            <Button variant="default" size="sm" className="gap-2 bg-primary-500 hover:bg-primary-600" asChild>
                                <a href="https://github.com/jafcthedevp" target="_blank" rel="noopener noreferrer">
                                    <Github size={16} />
                                    GitHub
                                </a>
                            </Button>
                            <Button variant="default" size="sm" className="gap-2 bg-secondary-500 hover:bg-secondary-600" asChild>
                                <a href="CVJesusFlores.pdf" download="CVJesusFlores.pdf">
                                    <Download size={16} />
                                    Descargar CV
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
