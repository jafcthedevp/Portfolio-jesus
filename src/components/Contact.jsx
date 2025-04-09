"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, User, Cpu } from "lucide-react"
import { motion } from "framer-motion"

export function Contact() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 },
    }

    return (
        <section>
            <div className="flex items-center gap-4 mb-8" id="contacto-title">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-accent-500 to-secondary-500 flex items-center justify-center text-white">
                    <Cpu className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-accent-600 to-secondary-600 text-transparent bg-clip-text">
                    CONTACTO
                </h2>
            </div>

            <Card className="border border-gray-100 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        <div className="space-y-6">
                            <motion.div variants={item} className="flex items-center gap-4">
                                <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-3 rounded-lg text-white shadow-md">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Teléfono</p>
                                    <p className="font-semibold text-lg text-gray-800 dark:text-gray-200">+51 954-142-285</p>
                                </div>
                            </motion.div>

                            <motion.div variants={item} className="flex items-center gap-4">
                                <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 p-3 rounded-lg text-white shadow-md">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Email Personal</p>
                                    <p className="font-semibold text-lg text-gray-800 dark:text-gray-200">flores.anthony.489@gmail.com</p>
                                </div>
                            </motion.div>

                            <motion.div variants={item} className="flex items-center gap-4">
                                <div className="bg-gradient-to-br from-accent-500 to-accent-600 p-3 rounded-lg text-white shadow-md">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Email Institucional</p>
                                    <p className="font-semibold text-lg text-gray-800 dark:text-gray-200">1275435@senati.pe</p>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            variants={item}
                            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl"
                        >
                            <div className="flex items-start gap-4">
                                <div className="bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500 p-3 rounded-lg text-white shadow-md mt-1">
                                    <User className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Aptitudes</p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-2">
                                            <span className="h-2 w-2 rounded-full bg-primary-500"></span>
                                            <span className="text-gray-700 dark:text-gray-300">Persona motivada y disciplinada</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="h-2 w-2 rounded-full bg-accent-500"></span>
                                            <span className="text-gray-700 dark:text-gray-300">
                        Encuentra placer asistiendo a otras personas
                      </span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="h-2 w-2 rounded-full bg-secondary-500"></span>
                                            <span className="text-gray-700 dark:text-gray-300">Buen trabajador en equipo</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </CardContent>
            </Card>
        </section>
    )
}
