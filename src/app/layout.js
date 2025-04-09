import { Inter } from "next/font/google"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/Theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "Portfolio - Jesus Anthony Flores Condori",
    description: "Portfolio profesional de Jesus Anthony Flores Condori, Desarrollador de Software",
}

export default function RootLayout({ children }) {
    return (
        <html lang="es" suppressHydrationWarning>
        <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}
