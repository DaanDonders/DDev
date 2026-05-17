import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Button from "../ui/Button";

import ProjectsGrid from "../projects/ProjectsGrid";

import { fetchFeaturedProjects } from "@/lib/services/projectService";

export default async function ProjectsSection() {
  const projects = await fetchFeaturedProjects();

  return (
    <Section id="projects" importance="primary">
      <div className="space-y-12">
        <div className="space-y-3">
          <Heading level="h2">Featured Projects</Heading>

          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Selected work
          </p>
        </div>

        <ProjectsGrid projects={projects} />

        <div className="flex justify-center">
          <Button href="/projects" variant="secondary">
            View All Projects
          </Button>
        </div>
      </div>
    </Section>
  );
}
