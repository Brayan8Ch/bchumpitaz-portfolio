'use client'

import { useEffect, useState, useRef } from 'react'
import {
  HiHome,
  HiUser,
  HiBriefcase,
  HiFolderOpen,
  HiCpuChip,
  HiChevronLeft,
  HiChevronRight,
} from 'react-icons/hi2'

const SECTIONS = [
  { id: 'hero', label: 'Inicio', Icon: HiHome },
  { id: 'sobre-mi', label: 'Sobre mí', Icon: HiUser },
  { id: 'experiencia', label: 'Experiencia', Icon: HiBriefcase },
  { id: 'proyectos', label: 'Proyectos', Icon: HiFolderOpen },
  { id: 'tecnologias', label: 'Tecnologías', Icon: HiCpuChip },
] as const

export default function NavSidebar() {
  const [expanded, setExpanded] = useState(false)
  const [active, setActive] = useState('hero')
  const isManualScroll = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (isManualScroll.current) return
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { threshold: 0, rootMargin: '-30% 0px -50% 0px' }
    )

    SECTIONS.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    isManualScroll.current = true
    setActive(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => {
      isManualScroll.current = false
    }, 1000)
  }

  return (
    <>
      {/* Sidebar — hidden on mobile */}
      <aside
        className={`
          hidden lg:flex flex-col
          fixed left-0 top-0 h-screen z-40
          border-r border-border-primary bg-canvas/95 backdrop-blur-md
          transition-all duration-300 ease-in-out
          ${expanded ? 'w-56' : 'w-16'}
        `}
      >
        {/* Logo / brand mark */}
        <div className="flex items-center h-16 px-4 border-b border-border-primary shrink-0 overflow-hidden">
          <span className="text-accent-primary font-mono font-bold text-lg shrink-0">{'>'}_</span>
          <span className={`text-primary font-semibold text-sm whitespace-nowrap overflow-hidden transition-all duration-300 ease-out ${expanded ? 'max-w-[200px] opacity-100 ml-3' : 'max-w-0 opacity-0 ml-0'}`}>
            bchumpitaz
          </span>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 flex-1 py-4 px-2 overflow-hidden">
          {SECTIONS.map(({ id, label, Icon }) => {
            const isActive = active === id
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`
                  group flex items-center gap-3 w-full rounded-lg px-3 py-2.5
                  transition-all duration-200 text-left overflow-hidden
                  ${isActive
                    ? 'bg-accent-primary/10 text-accent-primary border border-accent-primary/20'
                    : 'text-muted hover:text-primary hover:bg-surface-secondary border border-transparent'
                  }
                `}
                aria-label={label}
              >
                <Icon className={`shrink-0 text-xl ${isActive ? 'text-accent-primary' : 'text-muted group-hover:text-primary'}`} />
                <span className={`text-sm font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ease-out ${expanded ? 'max-w-[200px] opacity-100 ml-3' : 'max-w-0 opacity-0 ml-0'}`}>
                  {label}
                </span>
              </button>
            )
          })}
        </nav>

        {/* Bottom controls */}
        <div className="flex flex-col gap-2 py-4 px-2 border-t border-border-primary shrink-0">
          {/* Toggle collapse */}
          <button
            onClick={() => setExpanded(e => !e)}
            className="flex items-center justify-center w-10 h-10 rounded-lg border border-border-primary text-muted hover:text-primary hover:border-border-secondary hover:bg-surface-secondary transition-all duration-300 self-center"
            aria-label={expanded ? 'Colapsar menú' : 'Expandir menú'}
          >
            <HiChevronRight className={`text-lg transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </aside>

      {/* Mobile: fixed bottom dots */}
      <nav className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full border border-border-primary bg-canvas/90 backdrop-blur-md shadow-lg">
        {SECTIONS.map(({ id, label, Icon }) => {
          const isActive = active === id
          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              aria-label={label}
              className={`p-2.5 rounded-full transition-colors duration-300 relative ${
                isActive 
                  ? 'text-accent-primary bg-accent-primary/15 animate-pop shadow-[0_0_15px_rgba(16,185,129,0.3)]' 
                  : 'text-muted hover:text-primary hover:bg-surface-secondary'
              }`}
            >
              <Icon className="text-xl relative z-10" />
            </button>
          )
        })}
      </nav>
    </>
  )
}
