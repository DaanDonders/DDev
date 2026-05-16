import "@/test/mocks/next-navigation";

import { render, screen } from "@testing-library/react";

import ProjectCard from "@/components/projects/ProjectCard";
import { mockProject } from "@/test/mocks/project";

describe("ProjectCard", () => {
    it("renders project title and summary", () => {
        render(<ProjectCard project={mockProject} />);

        expect(screen.getByText("DDev")).toBeInTheDocument();

        expect(
            screen.getByText("Personal portfolio website")
        ).toBeInTheDocument();
    });
});