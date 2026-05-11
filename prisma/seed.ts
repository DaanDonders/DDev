import "dotenv/config";
import { PrismaClient } from "../lib/generated/prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { projects } from "./projects";

const adapter = new PrismaNeon({
    connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
    if (process.env.NODE_ENV === "development") {
        await prisma.project.deleteMany();
    }

    await prisma.project.createMany({
        data: projects,
        skipDuplicates: true,
    });

    console.log("✅ Seeded projects!");
}

main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });