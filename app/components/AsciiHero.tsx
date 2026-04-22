'use client'

import { useEffect, useState } from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdOutgoingMail } from 'react-icons/md'

const STEPS = [
  { cmd: 'whoami', out: 'Brayan Chumpitaz Angeles' },
  { cmd: 'cat role.txt', out: 'Systems Engineer · Frontend Developer' },
  { cmd: 'echo $LOCATION', out: 'Lima, Peru' },
  { cmd: 'echo $MISSION', out: 'Building tech that creates real impact' },
] as const

type LineData = { text: string; kind: 'cmd' | 'out' }

export default function AsciiHero() {
  const [lines, setLines] = useState<LineData[]>([])
  const [typing, setTyping] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let cancelled = false
    const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms))

    async function run() {
      await sleep(400)
      for (const step of STEPS) {
        if (cancelled) return
        for (let i = 1; i <= step.cmd.length; i++) {
          if (cancelled) return
          setTyping(step.cmd.slice(0, i))
          await sleep(55)
        }
        if (cancelled) return
        setTyping('')
        setLines(prev => [...prev, { text: step.cmd, kind: 'cmd' }])
        await sleep(260)
        if (cancelled) return
        setLines(prev => [...prev, { text: step.out, kind: 'out' }])
        await sleep(620)
      }
      if (!cancelled) setDone(true)
    }

    run()
    return () => { cancelled = true }
  }, [])

  return (
    <div className="flex flex-col items-center gap-10 px-4">
      {/* Terminal window */}
      <div className="w-full max-w-2xl rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 backdrop-blur-sm bg-black/70">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs text-white/30 font-mono">~/bchumpitaz-portfolio</span>
        </div>

        {/* Terminal body */}
        <div className="p-6 font-mono text-sm md:text-base min-h-[260px]">
          {lines.map((line, i) =>
            line.kind === 'cmd' ? (
              <div key={i} className="flex gap-2 mb-1">
                <span className="text-white/30 select-none">$</span>
                <span className="text-white/80">{line.text}</span>
              </div>
            ) : (
              <div key={i} className="flex gap-2 mb-4">
                <span className="text-accent-primary select-none">›</span>
                <span className="text-accent-primary font-medium">{line.text}</span>
              </div>
            )
          )}

          {/* Currently typing */}
          {!done && (
            <div className="flex gap-2">
              <span className="text-white/30 select-none">$</span>
              <span className="text-white/80">{typing}</span>
              <span className="animate-cursor-blink text-accent-primary">█</span>
            </div>
          )}

          {/* Final blinking cursor */}
          {done && (
            <div className="flex gap-2">
              <span className="text-white/30 select-none">$</span>
              <span className="animate-cursor-blink text-accent-primary">█</span>
            </div>
          )}
        </div>
      </div>

      {/* Social links */}
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/brayanchumpitaz/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-accent-primary/50 text-white/60 hover:text-white transition-all duration-200"
        >
          <FaLinkedin className="text-[#0a66c2] text-lg group-hover:scale-110 transition-transform" />
          <span className="text-sm font-medium">LinkedIn</span>
        </a>
        <a
          href="https://github.com/Brayan8Ch"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-accent-primary/50 text-white/60 hover:text-white transition-all duration-200"
        >
          <FaGithub className="text-white text-lg group-hover:scale-110 transition-transform" />
          <span className="text-sm font-medium">GitHub</span>
        </a>
        <a
          href="mailto:brayanchumpitaz9@gmail.com"
          className="group flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-accent-primary/50 text-white/60 hover:text-white transition-all duration-200"
        >
          <MdOutgoingMail className="text-accent-primary text-lg group-hover:scale-110 transition-transform" />
          <span className="text-sm font-medium">Email</span>
        </a>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={() => document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' })}
        className="flex flex-col items-center gap-1 text-white/20 animate-bounce-slow hover:text-white/60 transition-colors cursor-pointer"
      >
        <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" className="opacity-50">
          <path d="M8 0v16M2 10l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  )
}
