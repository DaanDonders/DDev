'use client';

import Image from "next/image";
import { useRouter } from "next/navigation"; // Gebruik de router voor navigatie
import { Project } from "@/lib/types/project";

interface ProjectCardProps {
    project: Project;
    priority?: boolean;
}

export default function ProjectCard({ project, priority = false,
}: ProjectCardProps) {
    const router = useRouter();

    // Functie om naar de projectpagina te gaan
    const handleCardClick = () => {
        router.push(`/projects/${project.slug}`);
    };

    return (
        <div
            data-testid="project-card"
            onClick={handleCardClick}
            className="
                group flex h-full flex-col justify-between
                rounded-2xl
                border border-zinc-800
                bg-zinc-900/50
                p-6
                transition-all duration-200
                hover:-translate-y-1
                hover:border-zinc-700
                cursor-pointer
            "
        >
            <div className="space-y-4">
                {/* THUMBNAIL placeholder */}
                <div className="relative aspect-video overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
                    <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={priority}
                        className="
            object-cover
            transition-transform duration-300
            group-hover:scale-[1.02]
        "
                    />
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-zinc-100">
                        {project.title}
                    </h3>
                    <p className="line-clamp-2 text-sm leading-7 text-zinc-400">
                        {project.summary}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-500"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
                <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition">
                    View project →
                </span>

                <div className="flex gap-4">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()} // Voorkomt dat de kaart-klik afgaat
                            className="text-xs font-medium text-zinc-400 hover:text-zinc-100 transition z-10"
                        >
                            GitHub
                        </a>
                    )}

                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()} // Voorkomt dat de kaart-klik afgaat
                            className="text-xs font-medium text-zinc-400 hover:text-zinc-100 transition z-10"
                        >
                            Live
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
