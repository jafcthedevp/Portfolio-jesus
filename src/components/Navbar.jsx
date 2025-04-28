"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./Theme-toggle"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Experiencia", href: "#experiencia" },
    { name: "Contacto", href: "#contacto" },
  ]

  // Detectar scroll para cambiar el estilo de la navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Detectar sección activa
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100 // Offset para mejor detección

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(`#${sectionId}`)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Ejecutar una vez al cargar para establecer el estado inicial

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Manejar el desplazamiento suave
  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)

    const targetElement = document.querySelector(href)
    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Offset para la navbar
        behavior: "smooth",
      })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 max-w-5xl flex items-center justify-between">
        <a
          href="#inicio"
          className="text-xl font-bold bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 text-transparent bg-clip-text"
          onClick={(e) => handleNavClick(e, "#inicio")}
        >
          JF
        </a>

        {/* Menú de escritorio */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors relative px-1 py-2",
                    activeSection === item.href && "text-primary-600 dark:text-primary-400 font-medium",
                  )}
                >
                  {item.name}
                  {activeSection === item.href && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Botón de menú móvil */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
            aria-label="Menú"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
        >
          <ul className="container mx-auto px-4 py-4 flex flex-col">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "block py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors",
                    activeSection === item.href &&
                      "bg-gray-100 dark:bg-gray-800 text-primary-600 dark:text-primary-400 font-medium",
                  )}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  )
}
