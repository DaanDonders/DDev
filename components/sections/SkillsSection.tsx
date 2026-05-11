import Section from "../ui/Section";
import Heading from "../ui/Heading";

import {
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiDocker,
    SiGit,
    SiFigma,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import JavaFXIcon from "@/components/icons/JavaFXIcon";

const iconColors: Record<string, string> = {
    React: "#61DAFB",
    "Next.js": "#ffffff",
    "Node.js": "#339933",
    PostgreSQL: "#336791",
    Docker: "#2496ED",
    Git: "#F05032",
    Figma: "#F24E1E",
    Java: "#007396",
};

const skills = [
    {
        title: "Frontend",
        items: [
            { name: "React", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "JavaFX", icon: JavaFXIcon },
        ],
    },
    {
        title: "Backend",
        items: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Java", icon: FaJava },
        ],
    },
    {
        title: "Tools",
        items: [
            { name: "Docker", icon: SiDocker },
            { name: "Git", icon: SiGit },
            { name: "Figma", icon: SiFigma },
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
                                {group.items.map((item) => {
                                    const Icon = item.icon;
                                    const color = iconColors[item.name];

                                    return (
                                        <div
                                            key={item.name}
                                            className="flex flex-col items-center gap-2 text-center"
                                        >
                                            <div className="text-zinc-400 transition hover:scale-110">
                                                <Icon
                                                    className="h-10 w-10 transition"
                                                    style={{
                                                        color,
                                                    }}
                                                />
                                            </div>

                                            <span className="text-xs text-zinc-400">
                                                {item.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}