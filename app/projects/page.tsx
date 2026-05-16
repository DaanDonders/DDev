import type { Metadata } from "next";

import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

import { fetchProjects } from "../../lib/services/projectService";

export const metadata: Metadata = {
    title: "Projects",
};

export default async function ProjectsPage() {
    const projects = await fetchProjects();

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