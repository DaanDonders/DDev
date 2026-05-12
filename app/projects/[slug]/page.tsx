import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import { fetchProject } from "@/lib/services/projectService";
import { Metadata } from "next";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export const revalidate = 86400; // Revalidate every 24 hours

// Optioneel: Dynamische metadata voor SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = await fetchProject(slug);

    return {
        title: project ? `${project.title} | Portfolio` : "Project Not Found",
    };
}

export default async function ProjectPage({ params }: Props) {
    // Cruciaal: Wacht op de params om de 'PrismaClientValidationError' te voorkomen
    const { slug } = await params;
    const project = await fetchProject(slug);

    if (!project) {
        return (
            <main>
                <Section>
                    <Heading level="h1">Project not found</Heading>
                    <p className="text-zinc-400 mt-4">
                        The project you are looking for does not exist.
                    </p>
                </Section>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-zinc-950 py-20">
            <Section>
                <div className="space-y-16">
                    {/* HERO SECTION */}
                    <div className="space-y-6">
                        <Heading level="h1" className="text-4xl md:text-6xl font-bold text-zinc-100">
                            {project.title}
                        </Heading>

                        <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
                            {project.summary}
                        </p>

                        <div className="flex gap-6 text-sm font-medium">
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-zinc-100 hover:text-white transition underline underline-offset-4"
                                >
                                    View on GitHub →
                                </a>
                            )}
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-zinc-100 hover:text-white transition underline underline-offset-4"
                                >
                                    Live Demo →
                                </a>
                            )}
                        </div>
                    </div>

                    {/* DESCRIPTION / OVERVIEW */}
                    <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <Heading level="h2" className="text-2xl text-zinc-100">Project Overview</Heading>
                                <div className="prose prose-invert max-w-none">
                                    {/* Splits description op in paragrafen voor betere leesbaarheid */}
                                    {project.description.split('\n\n').map((paragraph, index) => (
                                        <p key={index} className="text-zinc-400 leading-8 mb-4">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {/* FEATURES SECTION */}
                            {project.features && project.features.length > 0 && (
                                <div className="space-y-4">
                                    <Heading level="h2" className="text-2xl text-zinc-100">Key Features</Heading>
                                    <ul className="grid gap-3 sm:grid-cols-2">
                                        {project.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-3 text-zinc-400">
                                                <span className="text-zinc-600 mt-1">•</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* SIDEBAR: TECH & ROLE */}
                        <div className="space-y-10 border-l border-zinc-900 pl-0 md:pl-12">
                            {/* ROLE */}
                            {project.role && (
                                <div className="space-y-3">
                                    <Heading level="h3" className="text-sm uppercase tracking-widest text-zinc-500">My Role</Heading>
                                    <p className="text-zinc-200">{project.role}</p>
                                </div>
                            )}

                            {/* TECH STACK */}
                            <div className="space-y-4">
                                <Heading level="h3" className="text-sm uppercase tracking-widest text-zinc-500">Technologies</Heading>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* DATE OF CREATION (Optioneel, als je dit veld hebt) */}
                            <div className="space-y-3">
                                <Heading level="h3" className="text-sm uppercase tracking-widest text-zinc-500">Project Status</Heading>
                                <p className="text-zinc-400 text-sm">Completed / Case Study</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
