import React from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  technologies: { name: string; icon: string }[];
  size?: "small" | "medium" | "large";
  repoUrl?: string;
  demoUrl?: string;
  isPublic?: boolean;
}

interface ProjectsGalleryProps {
  projects: Project[];
}

function ProjectsGallery({ projects }: ProjectsGalleryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          image={project.image}
          description={project.description}
          technologies={project.technologies}
          size={project.size}
          repoUrl={project.repoUrl}
          demoUrl={project.demoUrl}
          isPublic={project.isPublic}
        />
      ))}
    </div>
  );
}

export default ProjectsGallery;
