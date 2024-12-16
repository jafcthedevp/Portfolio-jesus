import { Code, Database, FileJson, Figma, Github, Globe, Layout, Smartphone, Zap } from 'lucide-react'

export function Skills() {
    const skills = [
        { name: "JavaScript", icon: <FileJson className="w-6 h-6" /> },
        { name: "React.js", icon: <Code className="w-6 h-6" /> },
        { name: "React Native", icon: <Smartphone className="w-6 h-6" /> },
        { name: "Express.js", icon: <Zap className="w-6 h-6" /> },
        { name: "RESTful APIs", icon: <Globe className="w-6 h-6" /> },
        { name: "MySQL", icon: <Database className="w-6 h-6" /> },
        { name: "MongoDB", icon: <Database className="w-6 h-6" /> },
        { name: "UI/UX", icon: <Layout className="w-6 h-6" /> },
        { name: "Figma", icon: <Figma className="w-6 h-6" /> },
        { name: "Tailwind CSS", icon: <Code className="w-6 h-6" /> },
        { name: "HTML & CSS", icon: <Code className="w-6 h-6" /> },
        { name: "Git", icon: <Github className="w-6 h-6" /> },
        { name: "GitHub", icon: <Github className="w-6 h-6" /> },
        { name: "PowerBI", icon: <Layout className="w-6 h-6" /> },
        { name: "Redux", icon: <Code className="w-6 h-6" /> }
    ];

    return (
        <section id="skills" className="mb-24 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8">Habilidades</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                    <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center space-x-3">
                        <div className="text-gray-600 dark:text-gray-400">
                            {skill.icon}
                        </div>
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

