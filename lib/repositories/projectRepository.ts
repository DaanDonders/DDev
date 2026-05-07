import { prisma } from "@/lib/prisma";

export async function getAllProjects() {
    return prisma.project.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
}

export async function getFeaturedProjects() {
    return prisma.project.findMany({
        where: {
            featured: true,
        },
    });
}

export async function getProjectBySlug(slug: string) {
    return prisma.project.findUnique({
        where: {
            slug,
        },
    });
}