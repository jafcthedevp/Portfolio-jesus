import { ThemeToggle } from "@/components/ThemeToggle"
import { ProfileImage } from "@/components/ProfileImage"
import { SocialLinks } from "@/components/SocialLinks"
import { Skills } from "@/components/Skills"
import { Experience } from "@/components/Experience"
import { Projects } from "@/components/Projects"
import { Contact } from "@/components/Contact"
import { MobileMenu } from "@/components/MobileMenu"

const Home = () => {
  return (
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        <div className="absolute inset-0 dark:bg-[url('/stars.svg')] dark:opacity-20 pointer-events-none" />

        <nav className="fixed top-0 left-0 right-0 p-6 z-50 bg-white dark:bg-gray-900">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Jesus</h1>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex gap-8 text-sm">
                <a href="#skills" className="hover:text-gray-600 dark:hover:text-gray-300">Habilidades</a>
                <a href="#experience" className="hover:text-gray-600 dark:hover:text-gray-300">Experiencia</a>
                <a href="#projects" className="hover:text-gray-600 dark:hover:text-gray-300">Proyectos</a>
                <a href="#contact" className="hover:text-gray-600 dark:hover:text-gray-300">Contacto</a>
              </div>
              <ThemeToggle />
              <MobileMenu />
            </div>
          </div>
        </nav>

        {/* <ThemeToggle /> */}

        <main className="container mx-auto px-6 pt-32">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <h2 className="text-lg font-mono mb-2">Desarrollador de Software</h2>
                <h3 className="text-4xl font-bold mb-2">Hola yo soy</h3>
                <h3 className="text-4xl font-bold text-gray-500 dark:text-gray-400 mb-6">
                  Jesus Flores
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Egresado de la carrera en Desarrollo de Software con 2 años de experiencia desarrollando
                  soluciones innovadoras y eficientes. Competente en JavaScript, Restful API, MySQL, Express.js,
                  Redux, MongoDB, React. Fuerte dominio de Power BI para transformar datos complejos en visualizaciones efectivas.
                </p>
                <a
                    href="/CVjesus.pdf"
                    download
                    className="inline-block px-6 py-3 border-2 border-current rounded-full
                         hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Download CV
                </a>
                <SocialLinks />
              </div>
              <ProfileImage />
            </div>

            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </div>
          <footer className="mt-24 py-8 bg-gray-100 dark:bg-gray-800 transition-colors">
            <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
              :D
            </div>
          </footer>
        </main>
      </div>
  )
}
export default Home;

