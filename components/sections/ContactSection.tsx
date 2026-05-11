import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Button from "../ui/Button";

export default function ContactSection() {
    return (
        <Section id="contact">
            <div className="space-y-10 text-center">
                <div className="space-y-3">
                    <Heading level="h2">Contact</Heading>

                    <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                        Let’s build something together
                    </p>
                </div>

                <p className="mx-auto max-w-2xl text-zinc-400 leading-8">
                    If you’re interested in working together or just want to connect,
                    feel free to reach out.
                </p>

                <div className="flex justify-center gap-6 pt-2">
                    <Button href="mailto:hello@daan.dev">
                        Email Me
                    </Button>

                    <Button
                        href="https://github.com"
                        variant="secondary"
                    >
                        GitHub
                    </Button>
                </div>
            </div>
        </Section>
    );
}