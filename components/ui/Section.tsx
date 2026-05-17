import { ReactNode } from "react";
import Container from "../ui/Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  importance: "hero" | "primary" | "secondary" | "minimal";
}

const importanceStyles = {
  hero: "min-h-screen flex items-center py-0",
  primary: "py-32",
  secondary: "py-24",
  minimal: "py-16 opacity-95",
};

export default function Section({
  children,
  className = "",
  id,
  importance = "secondary",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`
                ${importanceStyles[importance]}
                scroll-mt-24
                ${className}
            `}
    >
      <Container>{children}</Container>
    </section>
  );
}
