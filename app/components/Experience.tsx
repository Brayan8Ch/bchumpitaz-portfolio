import React from "react";

interface ExperienceProps {
  company: string;
  role: string;
  date: string;
  logo?: string;
  activities?: string[];
}

function Experience({ company, role, date, logo, activities }: ExperienceProps) {
  return (
    <div className="flex gap-4 group">
      {/* Logo */}
      {logo && (
        <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white dark:bg-white flex items-center justify-center p-2 overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-sm">
          <img
            src={logo}
            alt={company}
            className="w-full h-full object-contain"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col gap-3 flex-1 min-w-0">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
          <div className="min-w-0">
            <p className="font-bold text-accent-primary text-lg md:text-xl leading-tight">{role}</p>
            <p className="text-secondary font-medium text-sm md:text-base truncate">{company}</p>
          </div>
          <span className="text-xs md:text-sm text-muted bg-surface-secondary border border-border-primary px-2.5 py-1 rounded-lg w-fit shrink-0 hover:border-accent-primary/40 transition-colors duration-200">
            {date}
          </span>
        </div>

        {activities && activities.length > 0 && (
          <ul className="flex flex-col gap-2">
            {activities.map((activity, index) => (
              <li
                key={index}
                className="flex items-start gap-2.5 text-secondary text-sm md:text-base hover:text-primary transition-colors duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-2 shrink-0" />
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Experience;
