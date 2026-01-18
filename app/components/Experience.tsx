import React from "react";

interface ExperienceProps {
  company: string;
  role: string;
  date: string;
  activities?: string[];
}

function Experience({ company, role, date, activities }: ExperienceProps) {
  return (
    <div className="w-full border border-[#545557] bg-[#13202a] p-3 md:p-4 rounded-lg flex flex-col gap-2 md:gap-4">
      <div className="flex flex-col gap-2">
        <div>
          <p className="font-bold text-[#ffb224] text-xl">{role}</p>
          <p className="font-bold">{company}</p>
        </div>
        <div>
          <p className="bg-[#29333a] p-2 rounded-lg max-w-fit">{date}</p>
        </div>
      </div>

      {activities && activities.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="font-bold text-[#24c5ff]">Actividades</p>
          <ul className="flex flex-col list-disc list-inside gap-2">
            {activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Experience;
