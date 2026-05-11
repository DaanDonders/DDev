"use client";

import { useEffect, useState } from "react";

import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

import ProjectsGrid from "@/components/projects/ProjectsGrid";

import { Project } from "@/lib/types/project";

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        async function loadProjects() {
            const res = await fetch("/api/projects");

            const result = await res.json();

            setProjects(result.data);
        }

        loadProjects();
    }, []);

    return (
        <main>
            <Section>
                <div className="space-y-12">
                    <div className="space-y-3">
                        <Heading level="h1">
                            Projects
                        </Heading>

                        <p className="max-w-2xl text-lg text-zinc-400">
                            A collection of projects focused on
                            scalability, architecture, and clean
                            user experience.
                        </p>
                    </div>

                    <ProjectsGrid projects={projects} />
                </div>
            </Section>
        </main>
    );
}