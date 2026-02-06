"use client";

import React from "react";

interface TecnologiesItem {
  name: string;
  icon: string;
}

interface TecnologyCategory {
  title: string;
  items: TecnologiesItem[];
}

interface TecnologiesProps {
  categories: TecnologyCategory[];
}

function Tecnologies({ categories }: TecnologiesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {categories.map((category, categoryIndex) => (
        <div
          key={categoryIndex}
          className="flex flex-col gap-4 p-4 rounded-xl bg-surface-secondary border border-border-primary
            hover:border-accent-primary/30 transition-all duration-300"
          style={{ animationDelay: `${categoryIndex * 100}ms` }}
        >
          <p className="text-sm font-semibold text-accent-primary uppercase tracking-wider text-center">
            {category.title}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {category.items.map((item, index) => (
              <div
                key={index}
                className="tooltip group relative"
                data-tooltip={item.name}
              >
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-surface border border-border-primary
                    flex items-center justify-center
                    hover:border-accent-primary hover:scale-110 hover:shadow-lg hover:shadow-[#10b981]/20
                    transition-all duration-200 cursor-default"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <img
                    className="w-7 h-7 md:w-8 md:h-8 group-hover:scale-110 transition-transform duration-200"
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.icon}/${item.icon}-original.svg`}
                    alt={item.name}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tecnologies;
