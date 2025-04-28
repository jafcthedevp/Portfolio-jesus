"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github, Code } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Datos de los proyectos
const projectsData = {
  condorland: {
    title: "API de Administración - CONDORLAND S.A.C",
    description: "API desarrollada con Node.js y Express para la administración eficiente de usuarios y tareas.",
    repository: "https://github.com/jafcthedevp/Backend-CL-SAC",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL", "Node.js", "Express.js"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    liveDemo: null,
    isBackend: true,
    endpoints: [
      {
        category: "Autenticación",
        endpoints: [
          {
            method: "POST",
            path: "/login",
            description: "Permite al usuario iniciar sesión con su username y password.",
            request: {
              username: "usuario123",
              password: "contraseña123",
            },
            response: {
              status: 200,
              body: {
                id: 1,
                username: "usuario123",
                email: "correo@example.com",
              },
              notes: "El token JWT se almacena en una cookie segura (httpOnly, secure, sameSite: none).",
            },
            errorResponses: [
              { status: 400, description: "Usuario no encontrado o contraseña incorrecta." },
              { status: 500, description: "Error en el servidor o en la base de datos." },
            ],
          },
          {
            method: "POST",
            path: "/register",
            description: "Permite registrar un nuevo usuario con un username, email y password.",
            request: {
              username: "nuevoUsuario",
              email: "correo@example.com",
              password: "contraseña123",
            },
            response: {
              status: 200,
              body: {
                id: 2,
                username: "nuevoUsuario",
                email: "correo@example.com",
              },
              notes: "La contraseña es protegida mediante hash con bcrypt antes de ser almacenada.",
            },
            errorResponses: [
              { status: 400, description: "El correo ya está en uso." },
              { status: 500, description: "Error en el servidor o en la base de datos." },
            ],
          },
          {
            method: "GET",
            path: "/verify",
            description: "Verifica si el usuario tiene una sesión activa mediante el token en la cookie.",
            request: "No requiere body. Se requiere que el token esté presente en las cookies.",
            response: {
              status: 200,
              body: {
                id: 1,
                username: "usuario123",
                email: "correo@example.com",
              },
            },
            errorResponses: [
              { status: 401, description: "Token inválido o expirado." },
              { description: "false: Si no se envía token." },
            ],
          },
        ],
      },
      {
        category: "Tareas",
        endpoints: [
          {
            method: "GET",
            path: "/tasks",
            description: "Obtiene todas las tareas asociadas al usuario autenticado.",
            request: "No requiere body. Se requiere token JWT para identificar el user_id.",
            response: {
              status: 200,
              body: [
                {
                  id: 1,
                  title: "Título de la tarea 1",
                  description: "Descripción de la tarea 1",
                  date: "2025-05-01",
                  user_id: 1,
                },
                {
                  id: 2,
                  title: "Título de la tarea 2",
                  description: "Descripción de la tarea 2",
                  date: "2025-05-02",
                  user_id: 1,
                },
              ],
            },
            errorResponses: [{ status: 500, description: "Error en la base de datos." }],
          },
          {
            method: "POST",
            path: "/tasks",
            description: "Crea una nueva tarea para el usuario autenticado.",
            request: {
              title: "Título de la tarea",
              description: "Descripción de la tarea",
              date: "2025-05-01",
            },
            response: {
              status: 200,
              body: {
                id: 3,
                title: "Título de la tarea",
                description: "Descripción de la tarea",
                date: "2025-05-01",
                user_id: 1,
              },
            },
            errorResponses: [{ status: 500, description: "Error en la base de datos." }],
          },
          {
            method: "GET",
            path: "/tasks/:id",
            description: "Obtiene una tarea específica por su id.",
            request: "id: ID de la tarea.",
            response: {
              status: 200,
              body: {
                id: 1,
                title: "Título de la tarea 1",
                description: "Descripción de la tarea 1",
                date: "2025-05-01",
                user_id: 1,
              },
            },
            errorResponses: [
              { status: 404, description: "Tarea no encontrada." },
              { status: 500, description: "Error en la base de datos." },
            ],
          },
          {
            method: "PUT",
            path: "/tasks/:id",
            description: "Actualiza una tarea existente con nuevos datos.",
            request: {
              title: "Nuevo título",
              description: "Nueva descripción",
              date: "2025-05-03",
            },
            response: {
              status: 200,
              body: {
                id: 1,
                title: "Nuevo título",
                description: "Nueva descripción",
                date: "2025-05-03",
                user_id: 1,
              },
            },
            errorResponses: [
              { status: 404, description: "Tarea no encontrada." },
              { status: 500, description: "Error en la base de datos." },
            ],
          },
          {
            method: "DELETE",
            path: "/tasks/:id",
            description: "Elimina una tarea por su id.",
            request: "id: ID de la tarea.",
            response: {
              status: 204,
              body: "No Content: Tarea eliminada exitosamente.",
            },
            errorResponses: [
              { status: 404, description: "Tarea no encontrada." },
              { status: 500, description: "Error en la base de datos." },
            ],
          },
        ],
      },
    ],
  },
  ecoin: {
    title: "Aplicación Móvil - ECOIN HOLDING",
    description: "Aplicación móvil desarrollada con React Native para el registro y gestión de tareas.",
    repository: "https://github.com/jafcthedevp/frontend",
    technologies: ["JavaScript", "React Native-expo", "Express.js", "MySQL"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    liveDemo: null,
    isBackend: false,
  },
  uni: {
    title: "Sistema de Gestión de Proyectos - UNI",
    description:
      "Aplicación web para la gestión de proyectos divididos en fases, con integración de bases de datos y manejo de interfaces de usuario dinámicas.",
    repository: "https://github.com/jafcthedevp/cine-nextjs",
    technologies: ["HTML", "CSS", "JavaScript", "Supabase", "Shadcn", "React", "Nextjs"],
    images: ["/landingpage.png", "/login.png", "/register.png", "/perfil.png"],
    liveDemo: "https://cine-nextjs.vercel.app/",
    isBackend: false,
  },
}

// Componente para mostrar código JSON con formato
function JsonDisplay({ data }) {
  // Si data es una cadena, mostrarla directamente
  if (typeof data === "string") {
    return (
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
        <pre className="text-sm text-gray-800 dark:text-gray-200 font-mono">{data}</pre>
      </div>
    )
  }

  // Si es un objeto, convertirlo a JSON formateado
  const jsonString = JSON.stringify(data, null, 2)

  return (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
      <pre className="text-sm text-gray-800 dark:text-gray-200 font-mono">{jsonString}</pre>
    </div>
  )
}

// Componente para mostrar un endpoint de API
function ApiEndpoint({ endpoint }) {
  const [showRequest, setShowRequest] = useState(false)
  const [showResponse, setShowResponse] = useState(true)
  const [showErrors, setShowErrors] = useState(false)

  const methodColors = {
    GET: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    POST: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    PUT: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    DELETE: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    PATCH: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  }

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg mb-6">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <div className="flex items-center gap-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${methodColors[endpoint.method] || "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"}`}
          >
            {endpoint.method}
          </span>
          <code className="text-sm font-mono">{endpoint.path}</code>
        </div>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{endpoint.description}</p>
      </div>

      <div className="p-4">
        {endpoint.request && (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Request Body</h4>
              <Button variant="ghost" size="sm" onClick={() => setShowRequest(!showRequest)} className="text-xs">
                {showRequest ? "Ocultar" : "Mostrar"}
              </Button>
            </div>
            {showRequest && <JsonDisplay data={endpoint.request} />}
          </div>
        )}

        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Response <span className="text-xs text-gray-500">Status: {endpoint.response.status}</span>
            </h4>
            <Button variant="ghost" size="sm" onClick={() => setShowResponse(!showResponse)} className="text-xs">
              {showResponse ? "Ocultar" : "Mostrar"}
            </Button>
          </div>
          {showResponse && (
            <>
              <JsonDisplay data={endpoint.response.body} />
              {endpoint.response.notes && (
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 bg-yellow-50 dark:bg-yellow-900/20 p-2 rounded border-l-2 border-yellow-400">
                  <strong>Nota:</strong> {endpoint.response.notes}
                </div>
              )}
            </>
          )}
        </div>

        {endpoint.errorResponses && endpoint.errorResponses.length > 0 && (
          <div>
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Posibles errores</h4>
              <Button variant="ghost" size="sm" onClick={() => setShowErrors(!showErrors)} className="text-xs">
                {showErrors ? "Ocultar" : "Mostrar"}
              </Button>
            </div>
            {showErrors && (
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <ul className="space-y-2">
                  {endpoint.errorResponses.map((error, idx) => (
                    <li key={idx} className="text-sm">
                      {error.status && <span className="font-mono text-red-600 dark:text-red-400">{error.status}</span>}{" "}
                      {error.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// Componente para mostrar una categoría de endpoints
function ApiCategory({ category }) {
  return (
    <div className="mb-10">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">{category.category}</h3>
      <div className="space-y-6">
        {category.endpoints.map((endpoint, index) => (
          <ApiEndpoint key={index} endpoint={endpoint} />
        ))}
      </div>
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

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    if (params.id && projectsData[params.id]) {
      setProject(projectsData[params.id])
      // Si es un proyecto de backend, establecer la pestaña activa como "api"
      if (projectsData[params.id].isBackend) {
        setActiveTab("api")
      }
    } else {
      // Si el proyecto no existe, redirigir a la página principal
      router.push("/")
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
    ...(project.isBackend
      ? [{ value: "api", label: "API Endpoints", icon: <Code size={14} className="inline-block" /> }]
      : []),
  ]

  return (
    <div className="min-h-screen bg-pattern pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <Link
          href="/#experiencia"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-6"
        >
          <ArrowLeft size={16} />
          <span>Volver a experiencia</span>
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

              {/*{project.liveDemo && (
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    Ver demo en vivo
                  </a>
                </Button>
              )} */}
            </div>

            <SimpleTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

            {activeTab === "overview" && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Imágenes del proyecto</h2>

                <div className="relative">
                  <div className="aspect-video relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
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

            {activeTab === "api" && project.isBackend && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white">
                    <Code className="h-4 w-4" />
                  </div>
                  <h2 className="text-xl font-semibold">API Endpoints</h2>
                </div>

                {project.endpoints &&
                  project.endpoints.map((category, index) => <ApiCategory key={index} category={category} />)}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
