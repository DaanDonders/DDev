import Section from "../ui/Section";
import Heading from "../ui/Heading";

export default function AboutSection() {
  return (
    <Section id="about" importance="secondary">
      <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
        <div className="space-y-3">
          <Heading level="h2">About Me</Heading>
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 font-medium">
            My Story & Approach
          </p>
        </div>

        <div className="space-y-6 max-w-3xl text-zinc-400 leading-8 text-lg">
          <p>
            I’m a software developer with a strong focus on building structured
            and logical applications, mainly in Java and web technologies. My
            journey started with small console-based programs where the goal was
            simple: understand how logic flows and how systems behave when you
            start adding real structure.
          </p>

          <p>
            Over time, I moved toward more complex applications using JavaFX,
            where I began focusing on user interfaces, state management, and
            full application flow. This shift helped me understand the gap
            between <span className="text-zinc-200">“code that works”</span> and
            <span className="text-zinc-200">
              {" "}
              “applications that feel complete.”
            </span>
          </p>

          <p>
            What I enjoy most is building systems that have clear architecture
            behind them. Whether it’s a game, a utility tool, or a data-driven
            application, I like thinking in terms of structure first — how
            components interact, how data moves through the system, and how
            everything stays maintainable as it grows.
          </p>

          <p className="text-zinc-500 text-sm border-t border-zinc-900 pt-6">
            This portfolio is also part of that process. It’s not just a
            showcase, but an ongoing project where I’m actively refining both my
            development skills and how I present my work.
          </p>
        </div>
      </div>
    </Section>
  );
}
