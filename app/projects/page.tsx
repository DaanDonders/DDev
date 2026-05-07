"use client";

import { useEffect, useState } from "react";
import { Project } from "@/lib/types/project";

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        async function load() {
            const res = await fetch("/api/projects");
            const data = await res.json();
            setProjects(data);
        }

        load();
    }, []);

    return (
        <main className="p-10">
            <h1 className="text-3xl font-semibold mb-6">Projects</h1>

            <div className="grid gap-4">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="rounded-lg border border-zinc-800 p-4"
                    >
                        <h2 className="text-xl font-medium">{project.title}</h2>
                        <p className="text-zinc-400">{project.summary}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}