import { ReactNode } from "react";

interface HeadingProps {
    children: ReactNode;
    className?: string;
    level?: "h1" | "h2" | "h3";
}

const styles = {
    h1: "text-5xl md:text-6xl font-bold tracking-tight",
    h2: "text-3xl md:text-4xl font-semibold tracking-tight",
    h3: "text-xl font-semibold tracking-tight",
};

export default function Heading({
    children,
    className = "",
}: HeadingProps) {
    return (
        <h2
            className={`text-3xl font-semibold tracking-tight text-zinc-100 ${className}`}
        >
            {children}
        </h2>
    );
}