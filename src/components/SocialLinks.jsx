import { Github, Linkedin, Youtube } from 'lucide-react'

export function SocialLinks() {
    return (
        <div className="flex gap-6 mt-8">

            <a
                href="https://github.com/jafcthedevp"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
            >
                <Github className="w-6 h-6" />
            </a>

        </div>
    )
}

