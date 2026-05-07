import "dotenv/config";
import { PrismaClient } from "../lib/generated/prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";

const adapter = new PrismaNeon({
    connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
    await prisma.project.createMany({
        data: [
            {
                title: "Portfolio Website",
                slug: "portfolio-website",
                summary: "Personal resume and portfolio website built with Next.js.",
                description: "A clean minimalist portfolio website showcasing projects and skills.",
                technologies: ["Next.js", "TypeScript", "Tailwind"],
                githubUrl: "https://github.com/example",
                featured: true,
            },
            {
                title: "Heatmap Project",
                slug: "heatmap-project",
                summary: "Geospatial pollen heatmap visualization system.",
                description: "Fullstack system for visualizing pollen data using interpolation.",
                technologies: ["React", "Leaflet", "Node.js"],
                githubUrl: "https://github.com/example",
                featured: true,
            },
        ],
        skipDuplicates: true,
    });

    console.log("✅ Seeded projects!");
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
