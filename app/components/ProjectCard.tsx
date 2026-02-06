import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  technologies: { name: string; icon: string }[];
  size?: "small" | "medium" | "large";
  repoUrl?: string;
  demoUrl?: string;
  isPublic?: boolean;
}

function ProjectCard({
  title,
  image,
  description,
  technologies,
  size = "small",
  repoUrl,
  demoUrl,
  isPublic = false,
}: ProjectCardProps) {
  const sizeClasses = {
    small: "",
    medium: "md:col-span-2",
    large: "md:col-span-2 md:row-span-2",
  };

  return (
    <div
      className={`
        w-full border border-[#545557] bg-[#13202a] rounded-lg
        flex flex-col overflow-hidden
        hover:scale-[1.02] hover:shadow-lg hover:shadow-[#3575ff]/10
        transition-all duration-300 ease-in-out
        ${sizeClasses[size]}
      `}
    >
      <div
        className={`relative w-full ${size === "large" ? "aspect-[16/10]" : "aspect-video"}`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-3 md:p-4 flex flex-col gap-2 md:gap-3 flex-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold text-white text-lg md:text-xl">{title}</h3>
          {isPublic && (repoUrl || demoUrl) && (
            <div className="flex items-center gap-2">
              {repoUrl && (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a7a7a7] hover:text-[#3575ff] transition-colors duration-200"
                  aria-label="Ver repositorio"
                >
                  <FaGithub className="text-xl" />
                </a>
              )}
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a7a7a7] hover:text-[#ffb224] transition-colors duration-200"
                  aria-label="Ver demo"
                >
                  <FaExternalLinkAlt className="text-lg" />
                </a>
              )}
            </div>
          )}
        </div>

        <p className="text-[#a7a7a7] text-sm md:text-base line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 md:gap-2 mt-auto pt-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="flex items-center gap-1 bg-[#27323c] border border-[#404d53] px-2 py-1 rounded-full text-xs md:text-sm"
            >
              <img
                className="h-4 md:h-5"
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon}/${tech.icon}-original.svg`}
                alt={tech.name}
              />
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
