"use client"

import { motion } from "framer-motion"

export function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 py-8 text-center"
        >
            <div className="bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 h-1 w-24 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} Jesus Anthony Flores Condori. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">Desarrollado con Next.js y Tailwind CSS</p>
        </motion.footer>
    )
}
