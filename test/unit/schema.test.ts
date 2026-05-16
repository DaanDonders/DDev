import { describe, expect, it } from "vitest";
import { projectSchema } from "@/lib/validators/projectSchema";

describe("projectSchema", () => {
    it("accepts a valid project", () => {
        const validProject = {
            id: "1",

            title: "Personal Portfolio Website",
            slug: "personal-portfolio-website",

            summary: "Portfolio summary",
            description: "Full project description",

            thumbnail: "/images/portfolio.png",

            technologies: ["Next.js", "TypeScript"],

            role: "Developer",

            features: ["Responsive design"],

            githubUrl: "https://github.com/example/repo",
            liveUrl: "https://example.com",

            featured: true,
        };

        const result = projectSchema.safeParse(validProject);

        expect(result.success).toBe(true);
    });

    it("rejects an invalid project", () => {
        const invalidProject = {
            id: "1",

            title: "",
            slug: "",

            summary: "",
            description: "",

            thumbnail: "",

            technologies: "Next.js",

            featured: "true",
        };

        const result = projectSchema.safeParse(invalidProject);

        expect(result.success).toBe(false);
    });
});