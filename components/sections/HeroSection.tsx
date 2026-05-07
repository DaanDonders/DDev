import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Button from "../ui/Button";

export default function HeroSection() {
    return (
        <Section className="flex min-h-screen items-center">
            <div className="max-w-3xl space-y-6">
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
                    Fullstack Developer
                </p>

                <Heading className="text-6xl leading-tight">
                    Hi, I&apos;m Daan.
                </Heading>

                <p className="text-lg leading-8 text-zinc-400">
                    I build clean, scalable, and modern web applications with a strong
                    focus on architecture, maintainability, and user experience.
                </p>

                <div className="flex gap-4">
                    <Button href="/projects">View Projects</Button>

                    <Button href="https://github.com">
                        GitHub
                    </Button>
                </div>
            </div>
        </Section>
    );
}