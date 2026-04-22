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
        <div key={i} className="relative flex gap-4 md:gap-10">

          {/* ── Axis ─────────────────────────── */}
          <div className="flex flex-col items-center shrink-0 w-12 md:w-16">
            {/* Node */}
            <div className={`
              relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center shrink-0
              bg-surface border-2 transition-all duration-300
              ${item.current
                ? 'border-accent-primary shadow-lg shadow-[#10b981]/20'
                : 'border-border-secondary hover:border-accent-primary/60'}
            `}>
              {item.logo ? (
                <Image
                  src={item.logo}
                  alt={item.company}
                  width={40}
                  height={40}
                  className="object-contain w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white p-0.5"
                />
              ) : (
                <span className="font-mono text-xs text-accent-primary">
                  {String(i + 1).padStart(2, '0')}
                </span>
              )}

              {/* Active indicator */}
              {item.current && (
                <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent-primary animate-pulse-glow border-2 border-canvas" />
              )}
            </div>

            {/* Connector line */}
            {i < items.length - 1 && (
              <div className="w-px bg-gradient-to-b from-border-secondary to-transparent mt-2 flex-1 min-h-[2.5rem] md:min-h-[3rem]" />
            )}
          </div>

          {/* ── Content ──────────────────────── */}
          <div className={`flex-1 ${i < items.length - 1 ? 'pb-8 md:pb-12' : 'pb-0'}`}>

            {/* Date + status */}
            <div className="flex items-center gap-2 md:gap-3 mb-3 flex-wrap">
              <span className="font-mono text-muted text-xs select-none">{'>'}</span>
              <span className="font-mono text-accent-primary text-xs">
                {item.date}
              </span>

              {item.current && (
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-accent-primary/70 bg-accent-primary/10 border border-accent-primary/20 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                  en curso
                </span>
              )}
            </div>

            {/* Card */}
            <div className="group relative bg-surface border border-border-primary rounded-2xl p-4 md:p-6
              hover:border-border-secondary hover:shadow-lg hover:shadow-accent hover:-translate-y-1
              transition-all duration-300 overflow-hidden">

              {/* Role + company */}
              <div className="flex flex-col md:flex-row md:items-start gap-2 mb-4">
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-accent-primary text-base md:text-xl leading-tight">
                    {item.role}
                  </p>
                  <p className="text-secondary font-medium text-sm mt-0.5 break-words">
                    {item.company}
                  </p>
                </div>

                {/* Terminal decoration */}
                <span className="font-mono text-[10px] text-faint shrink-0 self-start mt-1">
                  [{String(i + 1).padStart(2, '0')}]
                </span>
              </div>

              {/* Activities */}
              {item.activities && item.activities.length > 0 && (
                <ul className="flex flex-col gap-2 border-t border-border-primary pt-4">
                  {item.activities.map((act, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-secondary text-sm hover:text-primary transition-colors duration-200"
                    >
                      <span className="text-accent-primary font-mono mt-0.5 shrink-0 select-none">
                        ›
                      </span>
                      <span className="break-words">{act}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}