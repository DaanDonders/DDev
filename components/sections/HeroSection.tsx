import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <Section spacing="hero">
      <div className="max-w-4xl space-y-8">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 font-medium">
          Software Developer
        </p>

        <Heading level="h1" className="text-4xl md:text-7xl">
          Building software that turns ideas into working systems.
        </Heading>

        <div className="space-y-6">
          <p className="max-w-2xl text-lg md:text-xl leading-8 text-zinc-400">
            I’m a software developer focused on Java, JavaFX, and full-stack web
            systems. I like building applications that are not just functional,
            but structured, scalable, and deliberately engineered.
          </p>

          <p className="text-sm text-zinc-500 italic">
            Currently building and refining my development skills through school
            projects, personal experiments, and this portfolio itself.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          <Button href="#projects">View Projects</Button>

          <Button href="#about" variant="secondary">
            About Me
          </Button>
        </div>
      </div>
    </Section>
  );
}
