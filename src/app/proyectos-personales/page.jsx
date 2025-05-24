"use client";

import { PersonalProjects } from "@/components/personal-projects";

export default function PersonalProjectsPage() {
  return (
    <main className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-primary-600 dark:text-primary-400">
        Proyectos Personales
      </h1>
      <PersonalProjects />
    </main>
  );
}
