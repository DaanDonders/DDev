import {
    getAllProjects,
    getFeaturedProjects,
    getProjectBySlug,
} from "../repositories/projectRepository";

export async function fetchProjects() {
    return getAllProjects();
}

export async function fetchFeaturedProjects() {
    return getFeaturedProjects();
}

export async function fetchProject(slug: string) {
    return getProjectBySlug(slug);
}