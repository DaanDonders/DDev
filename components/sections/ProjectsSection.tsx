import Section from "../ui/Section";
import Heading from "../ui/Heading";

export default function ProjectsSection() {
    return (
        <Section id="projects">
            <div className="space-y-6">
                <Heading>Projects</Heading>

                <p className="text-zinc-400">
                    Featured projects will appear here.
                </p>
            </div>
        </Section>
    );
}