import Container from "../ui/Container";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur">
            <Container className="flex h-16 items-center justify-between">
                <Link
                    href="/"
                    className="text-sm font-semibold tracking-wide text-zinc-100"
                >
                    daan.dev
                </Link>

                <nav className="flex items-center gap-6 text-sm text-zinc-400">
                    <Link
                        href="/#about"
                        className="transition-colors duration-200 hover:text-zinc-100"
                    >
                        About
                    </Link>

                    <Link
                        href="/#projects"
                        className="transition-colors duration-200 hover:text-zinc-100"
                    >
                        Projects
                    </Link>

                    <Link
                        href="/#contact"
                        className="transition-colors duration-200 hover:text-zinc-100"
                    >
                        Contact
                    </Link>
                </nav>
            </Container>
        </header>
    );
}