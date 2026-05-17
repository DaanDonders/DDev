import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
};

export default function Container({
  children,
  className = "",
  size = "lg",
}: ContainerProps) {
  return (
    <div
      className={`
        mx-auto w-full
        ${sizes[size]}
        px-4 md:px-6
        ${className}
      `}
    >
      {children}
    </div>
  );
}
