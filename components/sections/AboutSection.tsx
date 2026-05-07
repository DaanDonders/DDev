import Section from "../ui/Section";
import Heading from "../ui/Heading";

export default function AboutSection() {
    return (
        <Section id="about">
            <div className="space-y-6">
                <Heading>About Me</Heading>

                <p className="max-w-3xl text-zinc-400 leading-8">
                    I am a fullstack developer focused on building scalable and
                    maintainable applications with modern technologies.
                </p>
            </div>
        </Section>
    );
}