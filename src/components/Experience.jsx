'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export function Experience() {
    const experiences = [
        {
            company: "CONDORLAND S.A.C",
            position: "Practicante de Desarrollo Back-end",
            date: "Agosto 2024 - Diciembre 2024",
            details: [
                "Creé una API con Node.js y Express para administración de usuarios y tareas.",
                "Implementé autenticación segura utilizando JWT y bcrypt.",
                "Integré Swagger para documentación interactiva de la API.",
                "Gestioné base de datos MySQL para manipulación eficiente de datos.",
                "Configuré políticas CORS y manejo de cookies para comunicación segura.",
                "Utilicé Zod para validación robusta de datos en las solicitudes API."
            ]
        },
        {
            company: "ECOIN HOLDING BUSINESS SOCIEDAD COMERCIAL DE RESPONSABILIDAD LIMITADA",
            position: "Practicante de sistemas",
            date: "Agosto 2023 - Diciembre 2023",
            details: [
                "Implementé funcionalidades en aplicación móvil para registro de tareas.",
                "Optimicé el rendimiento y corregí errores en la aplicación.",
                "Trabajé con JavaScript, React Native-expo, Express.js y MySQL."
            ]
        },
        {
            company: "UNIVERSIDAD NACIONAL DE INGENIERIA - Facultad de Ingenieria Mecatronica",
            position: "Desarrollador android",
            date: "Agosto 2022 - Marzo 2023",
            details: [
                "Desarrollé una aplicación web de gestión de proyectos con fases.",
                "Integré bases de datos y manejé interfaces de usuario dinámicas.",
                "Utilicé HTML, CSS, JavaScript, MySQL y PHP."
            ]
        }
    ];

    const [expandedExperiences, setExpandedExperiences] = useState({});

    const toggleExperience = (index) => {
        setExpandedExperiences(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <section id="experience" className="mb-24 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8">Experience</h2>
            <div className="space-y-6">
                {experiences.map((exp, index) => (
                    <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 transition-all duration-300 ease-in-out">
                        <h3 className="text-xl font-bold mb-2">{exp.company}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.position} | {exp.date}</p>
                        {expandedExperiences[index] ? (
                            <>
                                <ul className="list-disc list-inside space-y-2 mb-4">
                                    {exp.details.map((detail, idx) => (
                                        <li key={idx}>{detail}</li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => toggleExperience(index)}
                                    className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-200"
                                >
                                    Mostrar menos <ChevronUp className="ml-1 w-4 h-4" />
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={() => toggleExperience(index)}
                                className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-200"
                            >
                                Mostrar más <ChevronDown className="ml-1 w-4 h-4" />
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

