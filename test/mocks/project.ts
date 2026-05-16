import type { Project } from "../../lib/types/project";

export const mockProject: Project = {
    id: "1",
    title: "DDev",
    slug: "ddev",

    summary: "Personal portfolio website",
    description: "Full portfolio case study",

    thumbnail: "/images/ddev.png",

    technologies: ["Next.js", "TypeScript"],

    featured: true,
};