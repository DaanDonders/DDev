import { fetchProjects } from "@/lib/services/projectService";

import {
    successResponse,
    errorResponse,
} from "@/lib/api/apiResponse";

export const revalidate = 100; // Revalidate every 100 seconds

export async function GET() {
    try {
        const projects = await fetchProjects();

        return successResponse(projects);
    } catch (error) {
        console.error(error);

        return errorResponse(
            "Failed to fetch projects"
        );
    }
}