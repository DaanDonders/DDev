import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
  level?: "h1" | "h2" | "h3";
}

const styles = {
  h1: "text-5xl md:text-6xl font-bold tracking-tight text-zinc-100",
  h2: "text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100",
  h3: "text-xl font-semibold tracking-tight text-zinc-100",
};

export default function Heading({
  children,
  className = "",
  level = "h2",
}: HeadingProps) {
  const Tag = level;
  const baseStyle = styles[level];

  return <Tag className={`${baseStyle} ${className}`}>{children}</Tag>;
}
