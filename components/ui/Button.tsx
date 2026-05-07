import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
    href: string;
    children: ReactNode;
}

export default function Button({ href, children }: ButtonProps) {
    return (
        <Link
            href={href}
            className="inline-flex items-center rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-300"
        >
            {children}
        </Link>
    );
}