import Section from "../ui/Section";
import Heading from "../ui/Heading";

export default function ContactSection() {
    return (
        <Section id="contact">
            <div className="space-y-6">
                <Heading>Contact</Heading>

                <p className="text-zinc-400">
                    Contact information and social links will appear here.
                </p>
            </div>
        </Section>
    );
}