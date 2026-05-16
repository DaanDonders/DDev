import { prisma } from "@/lib/db/prisma";

export async function getAllProjects() {
    if (!process.env.DATABASE_URL) {
        return [];
    }

    return prisma.project.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
}

export async function getFeaturedProjects() {
    if (!process.env.DATABASE_URL) {
        return [];
    }
    return prisma.project.findMany({
        where: {
            featured: true,
        },
    });
}

export async function getProjectBySlug(slug: string) {
    if (!process.env.DATABASE_URL) {
        return null;
    }
    return prisma.project.findUnique({
        where: {
            slug,
        },
    });
}