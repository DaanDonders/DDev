import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
    href: string;
    children: ReactNode;
    variant?: "primary" | "secondary";
    className?: string;
}

const variantStyles = {
    primary:
        "bg-zinc-100 text-zinc-900 hover:bg-zinc-300",

    secondary:
        "border border-zinc-800 bg-transparent text-zinc-100 hover:bg-zinc-900",
};

export default function Button({
    href,
    children,
    variant = "primary",
    className = "",
}: ButtonProps) {
    return (
        <Link
            href={href}
            className={`
                inline-flex items-center justify-center
                rounded-lg
                px-5 py-2.5
                text-sm font-medium
                transition-colors duration-200
                ${variantStyles[variant]}
                ${className}
            `}
        >
            {children}
        </Link>
    );
}