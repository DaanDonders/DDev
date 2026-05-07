import "dotenv/config";
import prisma from "../lib/prisma";

async function testDatabase() {
    console.log("🔍 Testing Prisma Postgres connection...\n");

    try {
        console.log("✅ Connected to database!");

        // Test a simple query
        const projects = await prisma.project.findMany();
        console.log(`✅ Found ${projects.length} project(s)`);

        console.log("\n🎉 All tests passed! Your database is working.\n");
    } catch (error) {
        console.error("❌ Error:", error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

testDatabase();
