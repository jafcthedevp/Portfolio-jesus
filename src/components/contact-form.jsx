"use client"

import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, MessageSquare, CheckCircle, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // null, 'success', 'error'
  const formRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Limpiar error cuando el usuario comienza a escribir
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido"
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "El asunto es requerido"
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Usar el método tradicional de envío de formulario HTML
    if (formRef.current) {
      formRef.current.submit()

      // Mostrar mensaje de éxito
      setSubmitStatus("success")

      // Limpiar el formulario
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Resetear después de 5 segundos
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } else {
      console.error("Referencia del formulario no disponible")
      setSubmitStatus("error")
    }

    setIsSubmitting(false)
  }

  return (
    <section>
      <div className="flex items-center gap-4 mb-8" id="contactame-title">
        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-secondary-500 to-accent-500 flex items-center justify-center text-white">
          <MessageSquare className="h-6 w-6" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-secondary-600 to-accent-600 text-transparent bg-clip-text">
          CONTÁCTAME
        </h2>
      </div>

      <Card className="border border-gray-100 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm overflow-hidden">
        <CardContent className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Envíame un mensaje</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                ¿Tienes alguna pregunta o propuesta? No dudes en contactarme. Estaré encantado de escuchar tus ideas y
                responder a tus consultas.
              </p>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl">
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-4">Información de contacto</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full mt-0.5">
                      <span className="block h-1.5 w-1.5 rounded-full bg-primary-500"></span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Email:</p>
                      <p className="text-gray-600 dark:text-gray-400">flores.anthony.489@gmail.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-accent-100 dark:bg-accent-900/30 p-2 rounded-full mt-0.5">
                      <span className="block h-1.5 w-1.5 rounded-full bg-accent-500"></span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Teléfono:</p>
                      <p className="text-gray-600 dark:text-gray-400">+51 907-616-015</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-secondary-100 dark:bg-secondary-900/30 p-2 rounded-full mt-0.5">
                      <span className="block h-1.5 w-1.5 rounded-full bg-secondary-500"></span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Ubicación:</p>
                      <p className="text-gray-600 dark:text-gray-400">Lima, Perú</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              {submitStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800 h-full flex flex-col items-center justify-center text-center"
                >
                  <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-2">¡Mensaje enviado!</h3>
                  <p className="text-green-700 dark:text-green-400">
                    Gracias por contactarme. Te responderé lo antes posible.
                  </p>
                </motion.div>
              ) : submitStatus === "error" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800 h-full flex flex-col items-center justify-center text-center"
                >
                  <AlertCircle className="h-16 w-16 text-red-500 mb-4" />
                  <h3 className="text-xl font-semibold text-red-800 dark:text-red-300 mb-2">Error al enviar</h3>
                  <p className="text-red-700 dark:text-red-400">
                    Ha ocurrido un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.
                  </p>
                </motion.div>
              ) : (
                <>
                  {/* Formulario visible para el usuario */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Nombre
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu.email@ejemplo.com"
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Asunto
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Asunto del mensaje"
                        className={errors.subject ? "border-red-500" : ""}
                      />
                      {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Mensaje
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Escribe tu mensaje aquí..."
                        rows={5}
                        className={errors.message ? "border-red-500" : ""}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    <Button
                      type="submit"
                      className="w-full gap-2 bg-gradient-to-r from-secondary-500 to-accent-500 hover:from-secondary-600 hover:to-accent-600"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Enviar mensaje
                        </>
                      )}
                    </Button>
                  </form>

                  {/* Formulario oculto que se enviará directamente a Formspree */}
                  <form
                    ref={formRef}
                    action="https://formspree.io/f/mqaqogwv"
                    method="POST"
                    target="_blank"
                    style={{ display: "none" }}
                  >
                    <input type="text" name="name" value={formData.name} readOnly />
                    <input type="email" name="email" value={formData.email} readOnly />
                    <input type="text" name="subject" value={formData.subject} readOnly />
                    <textarea name="message" value={formData.message} readOnly />
                    <input type="text" name="_replyto" value={formData.email} readOnly />
                    <input type="text" name="_subject" value="Mensaje desde Portfolio" readOnly />
                    <input type="hidden" name="_form_name" value="portfolio" />
                  </form>
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
