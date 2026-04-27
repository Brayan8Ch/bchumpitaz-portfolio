import React from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "../data/projects";

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
          images={project.images}
          description={project.description}
          technologies={project.technologies}
          aiTools={project.aiTools}
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
