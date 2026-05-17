import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <Section importance="hero">
      <div className="max-w-3xl space-y-10">
        {/* Role label */}
        <p className="text-xs uppercase tracking-[0.35em] text-zinc-500 font-medium">
          Software Developer
        </p>

        {/* Main headline (stronger hierarchy) */}
        <Heading
          level="h1"
          className="text-5xl md:text-7xl leading-[1.05] font-extrabold text-white"
        >
          Building software that turns ideas into working systems.
        </Heading>

        {/* Narrative block (cleaner grouping) */}
        <div className="space-y-5">
          <p className="text-lg md:text-xl leading-8 text-zinc-300 max-w-2xl">
            I’m a software developer focused on Java, JavaFX, and full-stack web
            systems. I like building applications that are not just functional,
            but structured, scalable, and deliberately engineered.
          </p>

          <p className="text-sm text-zinc-500 italic max-w-xl">
            Currently building and refining my development skills through school
            projects, personal experiments, and this portfolio itself.
          </p>
        </div>

        {/* CTA (more separation = higher importance) */}
        <div className="flex flex-wrap gap-5 pt-2">
          <Button href="#projects">View Projects</Button>

          <Button href="#about" variant="secondary">
            About Me
          </Button>
        </div>
      </div>
    </Section>
  );
}
