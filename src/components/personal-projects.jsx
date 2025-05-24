"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink, Folder, Eye } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function PersonalProjects() {
  const projects = [
    {
      id: "restapi-tienda",
      title: "API REST tienda",
      description:
        "API REST para la gestión completa de una tienda, incluyendo productos, stock, categorías, clientes y empresas con funcionalidades de búsqueda y filtrado.",
      images: [
        "/placeholder.svg?height=200&width=400",
        "/placeholder.svg?height=200&width=400",
        "/placeholder.svg?height=200&width=400"
      ],
      technologies: ["Node.js", "Express", "MongoDB", "REST API","Swagger","Mongoose","JWT","bcryptjs"],
      repository: "https://github.com/jafcthedevp/Backend-tienda-mongodb",
      liveDemo: null,
      isBackend: true,
    },
    {
      id: "notes-app",
      title: "Sitio web de administracion",
      description: "Administra los productos, stock, categorías, clientes y empresas con funcionalidades de búsqueda y filtrado.",
      images: [
        "/webadmin1.webp?height=200&width=400",
        "/webadmin2.webp?height=200&width=400",
        "/webadmin3.webp?height=200&width=400"
        
      ],
      technologies: ["React-vite", "axios", "Tailwind CSS", "shadcn/ui"],
      repository: "https://github.com/jafcthedevp/Frontend-web-shop",
      liveDemo: null,
      isBackend: false,
    },
    {
      id: "weather-api",
      title: "Aplicacion movil de pedidos",
      description: "El usuario puede realizar pedidos e incluirlos en su carrito de compras. segun la categoria que busque",
      images: [
        "/mobileshop1.webp?height=200&width=400",
        "/mobileshop2.webp?height=200&width=400",
        "/mobileshop3.webp?height=200&width=400"
      ],
      technologies: ["React Native","Expo", "Axios","Tailwind CSS","shadcn/ui"],  
      repository: "https://github.com/jafcthedevp/App-movil-tienda",
      liveDemo: null,
      isBackend: true,
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
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <section>
      <div className="flex items-center gap-4 mb-8" id="proyectos-title">
        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-accent-500 to-primary-500 flex items-center justify-center text-white">
          <Folder className="h-6 w-6" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-accent-600 to-primary-600 text-transparent bg-clip-text">
          PROYECTOS PERSONALES
        </h2>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={item} className="h-full">
            <Card className="card-hover border border-gray-100 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm h-full overflow-hidden flex flex-col">
              {/* Galería de imágenes en abanico centrada */}
              <div className="relative h-40 w-full flex items-center justify-center mb-2">
                {(
                  project.isBackend &&
                  !project.technologies.some(tech => ["react native", "expo"].includes(tech.toLowerCase())) &&
                  (project.title.toLowerCase().includes("api") || project.technologies.some(tech => tech.toLowerCase().includes("api")))
                ) ? (
                  <div className="flex items-center justify-center w-full h-full">
                    <span className="text-5xl font-extrabold text-primary-700 dark:text-primary-400 tracking-wide bg-gradient-to-r from-accent-500 to-primary-500 text-transparent bg-clip-text select-none">
                      API
                    </span>
                  </div>
                ) : (
                  (project.images ?? ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"])
                    .slice(0, 3)
                    .map((img, idx) => (
                      <div
                        key={img + idx}
                        className="absolute left-1/2"
                        style={{
                          transform: `translateX(-50%) rotate(${(idx - 1) * 12}deg)` ,
                          zIndex: 10 - idx,
                          boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
                          borderRadius: "8px",
                          overflow: "hidden",
                          left: `calc(50% + ${(idx - 1) * 55}px)`
                        }}
                      >
                        <Image
                          src={img}
                          alt={`Imagen ${idx + 1} de ${project.title}`}
                          width={project.technologies.includes("React Native") || project.technologies.includes("Expo") ? 80 : 140}
                          height={project.technologies.includes("React Native") || project.technologies.includes("Expo") ? 140 : 100}
                          className="object-cover rounded-xl"
                        />
                      </div>
                  ))
                )}
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-auto">
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href={project.repository} target="_blank" rel="noopener noreferrer">
                      <Github size={14} />
                      Repositorio
                    </a>
                  </Button>

                  {project.liveDemo && (
                    <Button variant="default" size="sm" className="gap-2 bg-accent-500 hover:bg-accent-600" asChild>
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    </Button>
                  )}

                  {project.id && (
                    <Link href={`/proyectos-personales/${project.id}`} passHref>
                      <Button variant="default" size="sm" className="gap-2 bg-primary-500 hover:bg-primary-600">
                        <Eye size={14} />
                        Ver proyecto
                      </Button>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
