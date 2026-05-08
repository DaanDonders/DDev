import {
    getAllProjects,
    getFeaturedProjects,
    getProjectBySlug,
} from "../repositories/projectRepository";
import { projectSchema } from "@/lib/validators/projectSchema";


export async function fetchProjects() {
    const projects = await getAllProjects();

    return projects.map((project) =>
        projectSchema.parse(project)
    );
}

export async function fetchFeaturedProjects() {
    const projects = await getFeaturedProjects();

    return projects.map((project) =>
        projectSchema.parse(project)
    );
}

export async function fetchProject(slug: string) {
    const project = await getProjectBySlug(slug);

    return projectSchema.parse(project);
}