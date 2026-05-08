import { z } from "zod";

export const projectSchema = z.object({
    id: z.string(),

    title: z.string().min(1),
    slug: z.string().min(1),

    summary: z.string().min(1),
    description: z.string().min(1),

    technologies: z.array(z.string()),

    githubUrl: z.url().optional(),
    liveUrl: z.url().optional(),

    featured: z.boolean(),
});

export type ProjectSchema = z.infer<typeof projectSchema>;