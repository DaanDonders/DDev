import Section from "../ui/Section";
import Heading from "../ui/Heading";

const skills = [
    {
        title: "Frontend",
        items: [
            { name: "React", icon: "/icons/react.svg" },
            { name: "Next.js", icon: "/icons/nextjs.svg" },
            { name: "TypeScript", icon: "/icons/typescript.svg" },
        ],
    },
    {
        title: "Backend",
        items: [
            { name: "Node.js", icon: "/icons/node.svg" },
            { name: "PostgreSQL", icon: "/icons/postgres.svg" },
            { name: "Prisma", icon: "/icons/prisma.svg" },
        ],
    },
    {
        title: "Tools",
        items: [
            { name: "Docker", icon: "/icons/docker.svg" },
            { name: "Git", icon: "/icons/git.svg" },
            { name: "Vercel", icon: "/icons/vercel.svg" },
        ],
    },
];

export default function SkillsSection() {
    return (
        <Section id="skills">
            <div className="space-y-12">
                <div className="space-y-3">
                    <Heading level="h2">Skills</Heading>

                    <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                        Technologies & tools
                    </p>
                </div>

                <div className="grid gap-12 md:grid-cols-3">
                    {skills.map((group) => (
                        <div key={group.title} className="space-y-6">
                            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                                {group.title}
                            </h3>

                            <div className="grid grid-cols-3 gap-6">
                                {group.items.map((item) => (
                                    <div
                                        key={item.name}
                                        className="flex flex-col items-center gap-2 text-center"
                                    >
                                        <div className="h-10 w-10 rounded-lg bg-zinc-800/50" />
                                        <span className="text-xs text-zinc-400">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}