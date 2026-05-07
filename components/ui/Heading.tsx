import { ReactNode } from "react";

interface HeadingProps {
    children: ReactNode;
    className?: string;
}

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