"use client"

import { useState, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"

export function Footer() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = new Intl.DateTimeFormat("es-PE", { timeZone: "America/Lima", hour: "2-digit", hour12: false }).format(now)
      const minutes = now.getMinutes().toString().padStart(2, "0")
      const seconds = now.getSeconds().toString().padStart(2, "0")

      setTime(`${hours}:${minutes}:${seconds}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer id="contact" className="relative">
      <div className="py-16 md:py-24 px-8 md:px-12 border-t border-white/10">
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-8">06 — CONTACTO</p>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <h2 className="font-sans text-4xl md:text-6xl font-light tracking-tight">
              Jesús <span className="italic">Flores</span>
            </h2>
            <p className="font-mono text-xs tracking-widest text-muted-foreground mt-6">SOFTWARE DEVELOPER · LIMA, PERÚ</p>
          </div>

          <address className="not-italic min-w-0">
            {[
              { label: "CORREO", value: "flores.anthony.489@gmail.com", href: "mailto:flores.anthony.489@gmail.com" },
              { label: "TELÉFONO", value: "+51 986 132 628", href: "tel:+51986132628" },
            ].map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                data-cursor-hover
                className="group flex items-center justify-between gap-4 border-b border-white/15 py-6 first:pt-0 hover:text-accent transition-colors"
              >
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] tracking-[0.2em] text-muted-foreground mb-3">{contact.label}</span>
                  <span className="font-mono text-sm md:text-base break-words">{contact.value}</span>
                </span>
                <ArrowUpRight aria-hidden="true" className="w-5 h-5 shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            ))}
          </address>
        </div>
      </div>

      {/* Footer Info */}
      <div className="px-8 md:px-12 py-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Local Time */}
          <div className="font-mono text-xs tracking-widest text-muted-foreground">
            <span className="mr-2">LIMA, PE</span>
            <span className="text-white tabular-nums">{time}</span>
          </div>

          {/* Links */}
          <div className="flex gap-8">
            {["LinkedIn", "GitHub", "CV"].map((link) => (
              <a
                key={link}
                href={link === "LinkedIn" ? "https://www.linkedin.com/in/jesus-flores-condori-2a72b0224" : link === "GitHub" ? "https://github.com/jafcthedevp" : "/CVJesusFlores.pdf"}
                data-cursor-hover
                className="font-mono text-xs tracking-widest text-muted-foreground hover:text-white transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-mono text-xs tracking-widest text-muted-foreground">© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
