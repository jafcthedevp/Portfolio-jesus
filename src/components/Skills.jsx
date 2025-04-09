"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
    Code2,
    Database,
    Layout,
    Smartphone,
    Server,
    GitBranch,
    LineChart,
    Languages,
    FigmaIcon,
    Zap,
} from "lucide-react"
import { motion } from "framer-motion"

export function Skills() {
    const skillCategories = [
        {
            name: "Frontend",
            icon: <Layout className="h-6 w-6" />,
            color: "from-blue-500 to-blue-600",
            items: ["JavaScript", "React.js", "HTML & CSS", "Tailwind CSS", "UI/UX"],
        },
        {
            name: "Backend",
            icon: <Server className="h-6 w-6" />,
            color: "from-green-500 to-green-600",
            items: ["Express.js", "RESTful APIs", "Node.js"],
        },
        {
            name: "Mobile",
            icon: <Smartphone className="h-6 w-6" />,
            color: "from-purple-500 to-purple-600",
            items: ["React Native"],
        },
        {
            name: "Bases de Datos",
            icon: <Database className="h-6 w-6" />,
            color: "from-orange-500 to-orange-600",
            items: ["MySQL", "MongoDB"],
        },
        {
            name: "Herramientas",
            icon: <GitBranch className="h-6 w-6" />,
            color: "from-red-500 to-red-600",
            items: ["Git", "GitHub"],
        },
        {
            name: "Diseño",
            icon: <FigmaIcon className="h-6 w-6" />,
            color: "from-pink-500 to-pink-600",
            items: ["Figma"],
        },
        {
            name: "Análisis de Datos",
            icon: <LineChart className="h-6 w-6" />,
            color: "from-cyan-500 to-cyan-600",
            items: ["PowerBI"],
        },
        {
            name: "Lenguajes",
            icon: <Languages className="h-6 w-6" />,
            color: "from-yellow-500 to-yellow-600",
            items: ["Español (Nativo)", "Inglés (Medianamente fluido)"],
        },
        {
            name: "Programación",
            icon: <Code2 className="h-6 w-6" />,
            color: "from-indigo-500 to-indigo-600",
            items: ["JavaScript"],
        },
    ]

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
            <div className="flex items-center gap-4 mb-8" id="habilidades-title">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white">
                    <Zap className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 text-transparent bg-clip-text">
                    HABILIDADES
                </h2>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {skillCategories.map((category, index) => (
                    <motion.div key={index} variants={item}>
                        <Card className="card-hover border border-gray-100 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm h-full">
                            <CardContent className="p-6">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`bg-gradient-to-br ${category.color} p-3 rounded-lg text-white shadow-md`}>
                                            {category.icon}
                                        </div>
                                        <h3 className="text-lg font-semibold dark:text-white">{category.name}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {category.items.map((item, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                            >
                        {item}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
