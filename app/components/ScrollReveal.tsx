'use client'

import { useEffect, useRef, useState } from 'react'

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  animationClass = ""
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  animationClass?: string
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [animKey, setAnimKey] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        setAnimKey(k => k + 1)
      } else {
        setIsVisible(false)
      }
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  if (animationClass) {
    return (
      <div ref={ref} className={className}>
        <div
          key={animKey}
          style={{ animationDelay: `${delay}ms` }}
          className={isVisible ? animationClass : 'opacity-0'}
        >
          {children}
        </div>
      </div>
    )
  }

  return (
    <div
      ref={ref}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '100ms' }}
      className={`transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } ${className}`}
    >
      {children}
    </div>
  )
}
