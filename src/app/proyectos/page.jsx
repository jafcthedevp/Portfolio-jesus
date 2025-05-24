"use client";

import { Experience } from "@/components/Experience";

export default function ExperienceProjectsPage() {
  return (
    <main className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-primary-600 dark:text-primary-400">
        Proyectos de Experiencia Laboral
      </h1>
      <Experience />
    </main>
  );
}
