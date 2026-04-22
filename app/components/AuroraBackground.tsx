'use client'

import { useEffect, useRef } from 'react'

const BLOBS = [
  { xs: 0.28, ys: 0.19, xp: 0.0, yp: 0.0, r: 0.65, c: '12, 48, 130' },
  { xs: 0.19, ys: 0.31, xp: 1.4, yp: 2.2, r: 0.55, c: '22, 65, 162' },
  { xs: 0.35, ys: 0.14, xp: 3.1, yp: 0.9, r: 0.60, c: '35, 22, 110' },
  { xs: 0.13, ys: 0.38, xp: 0.7, yp: 3.7, r: 0.50, c: '8, 35, 95' },
  { xs: 0.22, ys: 0.26, xp: 2.4, yp: 0.4, r: 0.48, c: '18, 55, 145' },
  { xs: 0.32, ys: 0.22, xp: 1.8, yp: 1.6, r: 0.38, c: '5, 20, 82' },
] as const

export default function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let t = 0

    const sync = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    sync()
    const ro = new ResizeObserver(sync)
    ro.observe(canvas)

    const tick = () => {
      const W = canvas.width
      const H = canvas.height

      ctx.fillStyle = 'rgba(0,0,0,0.05)'
      ctx.fillRect(0, 0, W, H)

      for (const b of BLOBS) {
        const x = (0.5 + 0.42 * Math.sin(t * b.xs + b.xp)) * W
        const y = (0.5 + 0.36 * Math.cos(t * b.ys + b.yp)) * H
        const r = b.r * Math.min(W, H)
        const g = ctx.createRadialGradient(x, y, 0, x, y, r)
        g.addColorStop(0, `rgba(${b.c},0.45)`)
        g.addColorStop(0.4, `rgba(${b.c},0.12)`)
        g.addColorStop(1, `rgba(${b.c},0)`)
        ctx.fillStyle = g
        ctx.fillRect(0, 0, W, H)
      }

      t += 0.004
      raf = requestAnimationFrame(tick)
    }

    tick()
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  )
}
