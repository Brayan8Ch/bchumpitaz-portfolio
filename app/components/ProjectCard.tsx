"use client";

import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface ProjectCardProps {
  title: string;
  images: { src: string; alt: string }[];
  description: string;
  technologies: { name: string; icon: string }[];
  size?: "small" | "medium" | "large";
  repoUrl?: string;
  demoUrl?: string;
  isPublic?: boolean;
}

function ProjectCard({
  title,
  images,
  description,
  technologies,
  size = "small",
  repoUrl,
  demoUrl,
  isPublic = false,
}: ProjectCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isAnimating) return;
    setDirection("left");
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isAnimating) return;
    setDirection("right");
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToIndex = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    if (isAnimating || index === currentIndex) return;
    setDirection(index > currentIndex ? "right" : "left");
    setIsAnimating(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 400);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const sizeClasses = {
    small: "",
    medium: "md:col-span-2",
    large: "md:col-span-2 md:row-span-2",
  };

  const getAnimationClass = () => {
    if (!isAnimating) return "";
    return direction === "right"
      ? "animate-slide-in-right"
      : "animate-slide-in-left";
  };

  return (
    <div
      className={`
        w-full bg-surface-secondary border border-border-primary rounded-xl
        flex flex-col overflow-hidden
        hover:border-accent-primary/50 hover:shadow-xl hover:shadow-accent
        transition-all duration-300 group
        ${sizeClasses[size]}
      `}
    >
      {/* Image Carousel */}
      <div
        className={`relative w-full ${size === "large" ? "aspect-[16/9]" : "aspect-video"} overflow-hidden bg-canvas`}
      >
        {images.length > 0 && (
          <div className={`w-full h-full ${getAnimationClass()}`}>
            <img
              key={currentIndex}
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-contain"
            />
          </div>
        )}

        {/* Carousel Navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              disabled={isAnimating}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-[#111827]/90 backdrop-blur-sm border border-[#374151] text-white hover:bg-[#1f2937] hover:border-[#10b981] transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Imagen anterior"
            >
              <IoChevronBack className="text-lg" />
            </button>
            <button
              onClick={goToNext}
              disabled={isAnimating}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-[#111827]/90 backdrop-blur-sm border border-[#374151] text-white hover:bg-[#1f2937] hover:border-[#10b981] transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Imagen siguiente"
            >
              <IoChevronForward className="text-lg" />
            </button>

            {/* Dots - Always visible */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-[#111827]/80 backdrop-blur-sm px-3 py-2 rounded-full">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => goToIndex(e, index)}
                  disabled={isAnimating}
                  className={`rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                    index === currentIndex
                      ? "bg-[#10b981] w-6 h-2"
                      : "bg-[#6b7280] w-2 h-2 hover:bg-[#9ca3af]"
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>

            {/* Image counter */}
            <div className="absolute top-3 left-3 bg-[#111827]/80 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-lg">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}

        {/* Private Badge */}
        {!isPublic && (
          <div className="absolute top-3 right-3 bg-[#111827]/80 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-lg">
            Privado
          </div>
        )}
      </div>

      <div className="p-4 md:p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-primary text-lg md:text-xl leading-tight">
            {title}
          </h3>
          {isPublic && (repoUrl || demoUrl) && (
            <div className="flex items-center gap-2.5 shrink-0">
              {repoUrl && (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-primary transition-colors duration-200"
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
                  className="text-muted hover:text-accent-primary transition-colors duration-200"
                  aria-label="Ver demo"
                >
                  <FaExternalLinkAlt className="text-lg" />
                </a>
              )}
            </div>
          )}
        </div>

        <p className="text-muted text-sm md:text-base line-clamp-3 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="flex items-center gap-1.5 bg-surface border border-border-primary px-2.5 py-1.5 rounded-lg text-xs md:text-sm text-secondary hover:border-accent-primary/40 transition-colors"
            >
              <img
                className="h-4 md:h-4"
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
