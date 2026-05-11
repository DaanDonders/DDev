import { Project } from "@/lib/types/project";
import ProjectCard from "./ProjectCard";

interface ProjectsGridProps {
    projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
    return (
        <div className="grid gap-8 md:grid-cols-2 items-stretch">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
}