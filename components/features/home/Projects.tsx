import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/features/home/SectionHeader";
import { ProjectCard } from "@/components/common/ProjectCard";
import { PROJECTS } from "@/constants/project";

export function Projects() {
  return (
    <Section
      id="projects"
      className="py-20 bg-muted/40 rounded-2xl space-y-12"
    >
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        
        <SectionHeading
          title="Recent Projects"
          description="Here are some of the projects I've worked on recently."
        />

        {/* View More Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full 
          bg-primary text-white text-sm font-medium 
          hover:bg-primary/90 transition"
        >
          View More
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* PROJECT GRID */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.slice(0, 3).map((project, index) => (
          <div
            key={index}
            className="group rounded-xl border bg-background p-2 shadow-sm hover:shadow-md transition"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </Section>
  );
}