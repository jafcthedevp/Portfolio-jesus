'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-600 dark:text-gray-300"
                aria-label="Toggle menu"
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            {isOpen && (
                <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 py-2 px-4">
                    <a href="#skills" className="block py-2 hover:text-gray-600 dark:hover:text-gray-300">Skills</a>
                    <a href="#experience" className="block py-2 hover:text-gray-600 dark:hover:text-gray-300">Experience</a>
                    <a href="#projects" className="block py-2 hover:text-gray-600 dark:hover:text-gray-300">Projects</a>
                    <a href="#contact" className="block py-2 hover:text-gray-600 dark:hover:text-gray-300">Contact</a>
                </div>
            )}
        </div>
    )
}

