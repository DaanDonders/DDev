import {
    getAllProjects,
    getFeaturedProjects,
    getProjectBySlug,
} from "../repositories/projectRepository";

import { projectSchema } from "@/lib/validators/projectSchema";

function normalizeProject(project: any) {
    return {
        ...project,

        githubUrl: project.githubUrl ?? undefined,
        liveUrl: project.liveUrl ?? undefined,
        role: project.role ?? undefined,
        features: project.features ?? undefined,
    };
}

export async function fetchProjects() {
    const projects = await getAllProjects();

    return projects.map((project) =>
        projectSchema.parse(normalizeProject(project))
    );
}

export async function fetchFeaturedProjects() {
    const projects = await getFeaturedProjects();

    return projects.map((project) =>
        projectSchema.parse(normalizeProject(project))
    );
}

export async function fetchProject(slug: string) {
    const project = await getProjectBySlug(slug);

    if (!project) return null;

    return projectSchema.parse(normalizeProject(project));
}