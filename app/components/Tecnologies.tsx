import React from "react";

interface TecnologiesItem {
  name: string;
  icon: string;
}

interface TecnologiesProps {
  title: string;
  items: TecnologiesItem[];
}

function Tecnologies({ title, items }: TecnologiesProps) {
  return (
    <div className="w-full border border-[#545557] bg-[#13202a] p-3 md:p-4 rounded-lg flex flex-col gap-2 md:gap-4">
      <p className="font-bold text-xl md:text-2xl">{title}</p>
      <div className="flex flex-wrap gap-2 md:gap-3">
        {items.map((item, index) => (
          <span
            key={index}
            className="flex items-center gap-2 border-[#404d53] bg-[#27323c] font-medium border px-3 py-1.5 md:px-4 md:py-2 rounded-full"
          >
            <img
              className="h-8 md:h-10"
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.icon}/${item.icon}-original.svg`}
              alt={item.name}
            />
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Tecnologies;
