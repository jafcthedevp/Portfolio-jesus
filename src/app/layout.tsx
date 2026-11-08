import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Geist_Mono } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Jesús Flores | Software Developer",
  description: "Desarrollador de software en Lima, Perú. TypeScript, Node.js y AWS. Aplicaciones web, móviles e integraciones que automatizan procesos reales.",
}

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  )
}
