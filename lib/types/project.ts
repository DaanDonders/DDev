export interface Project {
    id: string;
    title: string;
    slug: string;
    summary: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    featured: boolean;
}