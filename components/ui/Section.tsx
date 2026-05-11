import { ReactNode } from "react";
import Container from "../ui/Container";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    spacing?: "normal" | "hero";
}

const spacingStyles = {
    normal: "py-24",
    hero: "min-h-screen py-32 flex items-center",
};

export default function Section({
    children,
    className = "",
    id,
    spacing = "normal",
}: SectionProps) {
    return (
        <section
            id={id}
            className={`
                ${spacingStyles[spacing]}
                scroll-mt-24
                ${className}
            `}
        >
            <Container>
                {children}
            </Container>
        </section>
    );
}