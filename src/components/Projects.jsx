export function Projects() {
    const projects = [
        {
            name: "Backend API",
            description: "API con Node.js y Express para administración de usuarios y tareas.",
            technologies: ["Node.js", "Express", "MySQL", "JWT", "Swagger"],
            repo: "https://github.com/jafcthedevp/Aplicaciones-react-native-expo/tree/main/backend-app1"
        },
        {
            name: "Frontend Mobile App",
            description: "Aplicación móvil desarrollada con React Native-expo.",
            technologies: ["React Native", "Expo", "JavaScript"],
            repo: "https://github.com/jafcthedevp/frontend"
        }
    ];

    return (
        <section id="projects" className="mb-24 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8">Proyectos</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, idx) => (
                                <span key={idx} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full text-sm">
                  {tech}
                </span>
                            ))}
                        </div>
                        <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            View Repository
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

