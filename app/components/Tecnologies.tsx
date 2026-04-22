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
  const [activeTech, setActiveTech] = React.useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {categories.map((category, categoryIndex) => (
        <div
          key={categoryIndex}
          className="flex flex-col gap-4 p-4 rounded-xl bg-surface-secondary border border-border-primary
            hover:border-accent-primary/30 transition-all duration-500 ease-out"
          style={{ animationDelay: `${categoryIndex * 100}ms` }}
        >
          <p className="text-sm font-semibold text-accent-primary uppercase tracking-wider text-center transition-colors duration-300">
            {category.title}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {category.items.map((item, index) => {
              const isActive = activeTech === item.name;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTech(isActive ? null : item.name)}
                  className="tooltip group relative outline-none"
                  data-tooltip={item.name}
                >
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-surface border flex items-center justify-center
                      transition-all duration-300 ease-out
                      ${
                        isActive
                          ? "border-accent-primary scale-110 shadow-lg shadow-[#10b981]/30 ring-2 ring-accent-primary/20"
                          : "border-border-primary hover:border-accent-primary hover:scale-110 hover:shadow-lg hover:shadow-[#10b981]/20"
                      }
                      active:scale-95`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <img
                      className={`w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 ease-out ${
                        isActive ? "scale-110" : "group-hover:scale-110"
                      }`}
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.icon}/${item.icon}-original.svg`}
                      alt={item.name}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tecnologies;
