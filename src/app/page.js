"use client"

import { Header } from "@/components/Header"
import { Skills } from "@/components/Skills"
import { Experience } from "@/components/Experience"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"
import { useEffect, useState } from "react"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
      <div className="min-h-screen bg-pattern">
        <Navbar />
        <div className="container mx-auto px-4 py-8 max-w-5xl pt-24">
          <section id="inicio">
            <Header />
          </section>
          <main className="mt-12 space-y-16">
            <section id="habilidades">
              <Skills />
            </section>
            <section id="experiencia">
              <Experience />
            </section>
            <section id="contacto">
              <Contact />
            </section>
          </main>
          <Footer />
        </div>
      </div>
  )
}
