import Image from 'next/image'

interface TimelineItem {
  company: string
  role: string
  date: string
  logo?: string
  activities?: string[]
  current?: boolean
}

interface TimelineProps {
  items: TimelineItem[]
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {items.map((item, i) => (
        <div key={i} className="relative mb-12 md:grid md:grid-cols-5 md:gap-10 last:mb-0">
          
          {/* ── Left Column: Axis & Metadata ── */}
          <div className="md:col-span-2 relative pl-8">
            
            {/* Connector line */}
            {i < items.length - 1 && (
              <div className="absolute top-3 bottom-[-3rem] left-[5px] w-px bg-border-secondary/30" />
            )}
            
            {/* Node Dot */}
            <div className={`absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-canvas z-10
              ${item.current 
                ? 'bg-accent-primary shadow-[0_0_12px_var(--color-accent-primary)]' 
                : 'bg-border-secondary'
              }
            `} />

            <h3 className="font-bold text-accent-primary text-lg md:text-xl leading-tight">
              {item.role}
            </h3>
            <h4 className="text-primary font-bold text-base mt-1.5">
              {item.company}
            </h4>
            <p className="text-muted text-sm mt-2">
              {item.date}
            </p>
          </div>

          {/* ── Right Column: Content ── */}
          <div className="md:col-span-3 pl-8 md:pl-0 mt-4 md:mt-0">
            {item.activities && item.activities.length > 0 && (
              <div className="text-secondary text-sm md:text-base leading-relaxed space-y-3">
                {item.activities.map((act, j) => (
                  <p key={j} className="hover:text-primary transition-colors duration-200">
                    {act}
                  </p>
                ))}
              </div>
            )}
          </div>

        </div>
      ))}
    </div>
  )
}