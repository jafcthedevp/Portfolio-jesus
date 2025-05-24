"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github, Code } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Datos de los proyectos personales
const personalProjectsData = {
  "restapi-tienda": {
    title: "restAPI tienda - Shop Backend API",
    description:
      "API REST completa para la gestión de una tienda, incluyendo productos, stock, categorías, clientes y empresas con funcionalidades avanzadas de búsqueda y filtrado.",
    repository: "https://github.com/jafcthedevp/restapi-tienda",
    technologies: ["Node.js", "Express", "MySQL", "REST API", "OpenAPI", "Swagger"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    liveDemo: null,
    isBackend: true,
    apiSpec: {
      openapi: "3.0.0",
      info: {
        title: "Shop Backend API",
        version: "1.0.0",
        description: "API para la gestión de productos, stock, categorías, clientes y empresas.",
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
      paths: {
        "/api/products": {
          get: {
            summary: "Obtener lista de productos",
            parameters: [
              {
                in: "query",
                name: "search",
                schema: { type: "string" },
                description: "Texto para buscar productos",
              },
              {
                in: "query",
                name: "categoria_codigo",
                schema: { type: "string" },
                description: "Código de la categoría",
              },
              {
                in: "query",
                name: "estado",
                schema: { type: "string" },
                description: "Estado del producto (A/I)",
              },
              {
                in: "query",
                name: "page",
                schema: { type: "integer" },
              },
              {
                in: "query",
                name: "limit",
                schema: { type: "integer" },
              },
            ],
            responses: {
              200: {
                description: "Lista de productos",
              },
            },
          },
          post: {
            summary: "Crear un nuevo producto",
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Product",
                  },
                },
              },
            },
            responses: {
              201: {
                description: "Producto creado",
              },
            },
          },
        },
        "/api/products/{id}": {
          get: {
            summary: "Obtener detalle de un producto",
            parameters: [
              {
                in: "path",
                name: "id",
                required: true,
                schema: { type: "string" },
              },
            ],
            responses: {
              200: {
                description: "Detalle del producto",
              },
            },
          },
          put: {
            summary: "Actualizar información de un producto",
            parameters: [
              {
                in: "path",
                name: "id",
                required: true,
                schema: { type: "string" },
              },
            ],
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Product",
                  },
                },
              },
            },
            responses: {
              200: {
                description: "Producto actualizado",
              },
            },
          },
        },
        "/api/products/{id}/estado": {
          patch: {
            summary: "Cambiar estado de un producto (activar/desactivar)",
            parameters: [
              {
                in: "path",
                name: "id",
                required: true,
                schema: { type: "string" },
              },
            ],
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      estado: {
                        type: "string",
                        enum: ["A", "I"],
                      },
                    },
                  },
                },
              },
            },
            responses: {
              200: {
                description: "Estado actualizado",
              },
            },
          },
        },
        "/api/products/buscar": {
          get: {
            summary: "Buscar productos por texto",
            parameters: [
              {
                in: "query",
                name: "search",
                schema: { type: "string" },
              },
            ],
            responses: {
              200: {
                description: "Resultados de búsqueda",
              },
            },
          },
        },
      },
      components: {
        schemas: {
          Product: {
            type: "object",
            properties: {
              codigo: { type: "string" },
              descripcion: { type: "string" },
              precio: { type: "number" },
              categoria_codigo: { type: "string" },
              estado: { type: "string" },
            },
          },
        },
      },
    },
  },
  "notes-app": {
    title: "Sitio web de administración",
    description: "Sitio web de administración para la gestión de productos, stock, categorías, clientes y empresas.",
    repository: "https://github.com/jafcthedevp/Frontend-web-shop",
    technologies: ["React","shadcn/ui","axios","Tailwind CSS"],
    images: ["/webadmin1.webp?height=400&width=600", "/webadmin3.webp?height=400&width=600", "/webadmin2.webp?height=400&width=600","/webadmin4.webp?height=400&width=600"],
    liveDemo: null,
    isBackend: false,
  },
  "weather-api": {
    title: "Aplicacion movil de pedidos",
    description: "Aplicacion movil de pedidos para la gestion de pedidos en una tienda.",
    repository: "https://github.com/jafcthedevp/App-movil-tienda",  
    technologies: ["React Native", "Expo", "Axios", "Tailwind CSS", "shadcn/ui"],
    images: ["/mobileshop1.webp?height=400&width=600","/mobileshop4.webp?height=400&width=600", "/mobileshop2.webp?height=400&width=600", "/mobileshop3.webp?height=400&width=600"],
    liveDemo: null,
    isBackend: true,
  },
}

// Componente para mostrar código JSON con formato
function JsonDisplay({ data }) {
  const jsonString = JSON.stringify(data, null, 2)

  return (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
      <pre className="text-sm text-gray-800 dark:text-gray-200 font-mono">{jsonString}</pre>
    </div>
  )
}

// Componente para mostrar un endpoint de API
function ApiEndpoint({ path, methods }) {
  const [showDetails, setShowDetails] = useState(false)

  const methodColors = {
    GET: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    POST: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    PUT: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    DELETE: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    PATCH: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  }

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg mb-4">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              {Object.keys(methods).map((method) => (
                <span
                  key={method}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${methodColors[method.toUpperCase()] || "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"}`}
                >
                  {method.toUpperCase()}
                </span>
              ))}
            </div>
            <code className="text-sm font-mono">{path}</code>
          </div>
          <Button variant="ghost" size="sm" onClick={() => setShowDetails(!showDetails)} className="text-xs">
            {showDetails ? "Ocultar" : "Ver detalles"}
          </Button>
        </div>
      </div>

      {showDetails && (
        <div className="p-4">
          <JsonDisplay data={methods} />
        </div>
      )}
    </div>
  )
}

// Componente de pestañas simplificado
function SimpleTabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="mb-6">
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`py-2 px-4 flex items-center gap-2 text-sm font-medium transition-colors ${
              activeTab === tab.value
                ? "border-b-2 border-primary-500 text-primary-600 dark:text-primary-400"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function PersonalProjectPage() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    if (params.id && personalProjectsData[params.id]) {
      setProject(personalProjectsData[params.id])
      // Si es un proyecto de backend, establecer la pestaña activa como "api"
      if (personalProjectsData[params.id].isBackend && personalProjectsData[params.id].apiSpec) {
        setActiveTab("api")
      }
    } else {
      // Si el proyecto no existe, redirigir a la página principal
      router.push("/#proyectos")
    }
  }, [params.id, router])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-lg">Cargando proyecto...</div>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  // Definir las pestañas disponibles
  const tabs = [
    { value: "overview", label: "Vista general", icon: null },
    ...(project.isBackend && project.apiSpec
      ? [{ value: "api", label: "API Specification", icon: <Code size={14} className="inline-block" /> }]
      : []),
  ]

  return (
    <div className="min-h-screen bg-pattern pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <Link
          href="/#proyectos"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-6"
        >
          <ArrowLeft size={16} />
          <span>Volver a proyectos</span>
        </Link>

        <Card className="border border-gray-100 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm overflow-hidden">
          <CardContent className="p-6 md:p-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 text-transparent bg-clip-text mb-4">
              {project.title}
            </h1>

            <p className="text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button variant="default" size="sm" className="gap-2 bg-primary-500 hover:bg-primary-600" asChild>
                <a href={project.repository} target="_blank" rel="noopener noreferrer">
                  <Github size={16} />
                  Ver repositorio
                </a>
              </Button>

              {project.liveDemo && (
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    Ver demo en vivo
                  </a>
                </Button>
              )}
            </div>

            <SimpleTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

            {activeTab === "overview" && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Imágenes del proyecto</h2>

                <div className="relative">
                  <div className="aspect-video relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-white">
                    <Image
                      src={project.images[currentImageIndex] || "/placeholder.svg"}
                      alt={`Captura de pantalla ${currentImageIndex + 1} del proyecto`}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {project.images.length > 1 && (
                    <div className="flex justify-between mt-4">
                      <Button variant="outline" onClick={prevImage} size="sm">
                        Anterior
                      </Button>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {currentImageIndex + 1} / {project.images.length}
                      </div>
                      <Button variant="outline" onClick={nextImage} size="sm">
                        Siguiente
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === "api" && project.isBackend && project.apiSpec && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white">
                    <Code className="h-4 w-4" />
                  </div>
                  <h2 className="text-xl font-semibold">API Specification (OpenAPI 3.0)</h2>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Información de la API</h3>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <p>
                      <strong>Título:</strong> {project.apiSpec.info.title}
                    </p>
                    <p>
                      <strong>Versión:</strong> {project.apiSpec.info.version}
                    </p>
                    <p>
                      <strong>Descripción:</strong> {project.apiSpec.info.description}
                    </p>
                    <p>
                      <strong>Servidor:</strong> {project.apiSpec.servers[0].url}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4">Endpoints disponibles</h3>
                  {Object.entries(project.apiSpec.paths).map(([path, methods]) => (
                    <ApiEndpoint key={path} path={path} methods={methods} />
                  ))}
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Esquemas de datos</h3>
                  <JsonDisplay data={project.apiSpec.components.schemas} />
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
