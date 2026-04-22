'use client'

import { useEffect, useRef, useState } from 'react'

// ─── Types ───────────────────────────────────────────────────────────────────

type ShaderId = 'aurora' | 'liquid' | 'grid' | 'mesh' | 'cells'

interface Click { x: number; y: number; t: number }
interface Blob  { cx: number; cy: number }
interface Cell  { nx: number; ny: number; baseR: number; phase: number; speed: number; ci: number }

interface S {
  t: number
  shader: ShaderId
  needsClear: boolean
  mouse: { x: number; y: number; nx: number; ny: number }
  clicks: Click[]
  aurora: Blob[]
  mesh: Blob[]
  cells: Cell[]
}

// ─── Constants ───────────────────────────────────────────────────────────────

const SHADERS: Array<{ id: ShaderId; label: string }> = [
  { id: 'aurora', label: 'AURORA FIELD' },
  { id: 'liquid', label: 'LIQUID CHROME' },
  { id: 'grid',   label: 'GRAVITY GRID' },
  { id: 'mesh',   label: 'MESH GRADIENT' },
  { id: 'cells',  label: 'CELL BLOOM' },
]

const AURORA_CFG = [
  { r: 0.62, c: '12,48,130',  xs: 0.28, ys: 0.19, xp: 0.0, yp: 0.0 },
  { r: 0.52, c: '22,65,162',  xs: 0.19, ys: 0.31, xp: 1.4, yp: 2.2 },
  { r: 0.58, c: '35,22,110',  xs: 0.35, ys: 0.14, xp: 3.1, yp: 0.9 },
  { r: 0.48, c: '8,35,95',    xs: 0.13, ys: 0.38, xp: 0.7, yp: 3.7 },
  { r: 0.45, c: '18,55,145',  xs: 0.22, ys: 0.26, xp: 2.4, yp: 0.4 },
  { r: 0.40, c: '5,20,82',    xs: 0.32, ys: 0.22, xp: 1.8, yp: 1.6 },
]

const MESH_COLORS = [
  '255,0,128', '0,220,200', '128,0,255', '255,120,0',
  '0,255,136', '255,50,50', '50,100,255', '220,180,0',
]

const CELL_COLORS = ['16,185,129', '0,200,180', '20,220,120', '0,180,200', '10,210,150']

// ─── State factory ───────────────────────────────────────────────────────────

function makeState(): S {
  return {
    t: 0,
    shader: 'aurora',
    needsClear: false,
    mouse: { x: 0, y: 0, nx: 0.5, ny: 0.5 },
    clicks: [],
    aurora: AURORA_CFG.map((_, i) => ({
      cx: 0.5 + 0.42 * Math.sin(i * 1.1),
      cy: 0.5 + 0.36 * Math.cos(i * 0.9),
    })),
    mesh: MESH_COLORS.map((_, i) => ({
      cx: 0.12 + (i % 4) * 0.25,
      cy: 0.2 + Math.floor(i / 4) * 0.55,
    })),
    cells: Array.from({ length: 18 }, () => ({
      nx: 0.05 + Math.random() * 0.9,
      ny: 0.05 + Math.random() * 0.9,
      baseR: 0.032 + Math.random() * 0.05,
      phase: Math.random() * Math.PI * 2,
      speed: 0.4 + Math.random() * 0.7,
      ci: Math.floor(Math.random() * CELL_COLORS.length),
    })),
  }
}

// ─── Shaders ─────────────────────────────────────────────────────────────────

function drawAurora(ctx: CanvasRenderingContext2D, W: number, H: number, s: S) {
  const isDark = document.documentElement.classList.contains('dark');
  ctx.fillStyle = isDark ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.1)';
  ctx.fillRect(0, 0, W, H)

  const lightModeColors = ['16,185,129', '52,211,153', '99,102,241', '129,140,248', '16,185,129', '52,211,153'];

  AURORA_CFG.forEach((cfg, i) => {
    const blob = s.aurora[i]
    const tx = 0.5 + 0.42 * Math.sin(s.t * cfg.xs + cfg.xp) + (s.mouse.nx - 0.5) * 0.12
    const ty = 0.5 + 0.36 * Math.cos(s.t * cfg.ys + cfg.yp) + (s.mouse.ny - 0.5) * 0.10
    blob.cx += (tx - blob.cx) * 0.018
    blob.cy += (ty - blob.cy) * 0.018

    const x = blob.cx * W
    const y = blob.cy * H
    const r = cfg.r * Math.min(W, H)
    const c = isDark ? cfg.c : lightModeColors[i]
    const g = ctx.createRadialGradient(x, y, 0, x, y, r)
    g.addColorStop(0,    `rgba(${c},${isDark ? 0.45 : 0.35})`)
    g.addColorStop(0.45, `rgba(${c},${isDark ? 0.12 : 0.15})`)
    g.addColorStop(1,    `rgba(${c},0)`)
    ctx.fillStyle = g
    ctx.fillRect(0, 0, W, H)
  })
}

function drawLiquid(ctx: CanvasRenderingContext2D, W: number, H: number, s: S) {
  ctx.fillStyle = 'rgba(0,0,0,0.18)'
  ctx.fillRect(0, 0, W, H)

  const mx = s.mouse.nx
  const my = s.mouse.ny
  const bands = 20
  const step = Math.ceil(W / 8)

  for (let i = 0; i < bands; i++) {
    const f = i / bands
    const bright = 0.15 + 0.85 * Math.abs(Math.sin(f * 7 + s.t * 0.5 + mx * 3))
    const v = Math.floor(bright * 190)
    const b = Math.floor(bright * 220)

    ctx.beginPath()
    ctx.moveTo(0, H)
    for (let j = 0; j <= step; j++) {
      const x = (j / step) * W
      const xn = j / step
      const y = f * H
        + 28 * Math.sin(xn * 10 + s.t * 1.2 + mx * 4) * Math.cos(s.t * 0.5 + my * 3)
        + 14 * Math.sin(xn * 6  + s.t * 0.7 + my * 5)
        + 18 * Math.sin(xn * 3  + f * 8 + s.t * 0.3)
      if (j === 0) ctx.lineTo(0, y)
      else ctx.lineTo(x, y)
    }
    ctx.lineTo(W, H)
    ctx.closePath()

    const grad = ctx.createLinearGradient(0, f * H - 35, 0, f * H + 35)
    grad.addColorStop(0,   `rgba(${v},${v},${b},0)`)
    grad.addColorStop(0.5, `rgba(${v + 25},${v + 25},${b + 20},${bright * 0.22})`)
    grad.addColorStop(1,   `rgba(${v},${v},${b},0)`)
    ctx.fillStyle = grad
    ctx.fill()
  }
}

function drawGrid(ctx: CanvasRenderingContext2D, W: number, H: number, s: S) {
  ctx.fillStyle = 'rgba(0,0,0,0.28)'
  ctx.fillRect(0, 0, W, H)

  const cols = 22
  const rows = 13
  const cw = W / cols
  const ch = H / rows

  const px: number[] = []
  const py: number[] = []
  const forces: number[] = []

  for (let row = 0; row <= rows; row++) {
    for (let col = 0; col <= cols; col++) {
      const bx = col * cw
      const by = row * ch
      const dx = s.mouse.x - bx
      const dy = s.mouse.y - by
      const dist = Math.sqrt(dx * dx + dy * dy) + 1
      const force = Math.min(55, 4500 / dist)
      const angle = Math.atan2(dy, dx)

      let sw = 0
      for (const c of s.clicks) {
        const age = s.t - c.t
        if (age > 1.8) continue
        const sdx = bx - c.x
        const sdy = by - c.y
        const sdist = Math.sqrt(sdx * sdx + sdy * sdy)
        const waveR = age * 300
        const diff = Math.abs(sdist - waveR)
        if (diff < 50) sw += (1 - diff / 50) * 45 * Math.max(0, 1 - age * 0.7)
      }

      px.push(bx + Math.cos(angle) * (force + sw))
      py.push(by + Math.sin(angle) * (force + sw))
      forces.push(force)
    }
  }

  const w = cols + 1

  // Batch draw all dim grid lines
  ctx.strokeStyle = 'rgba(16,185,129,0.07)'
  ctx.lineWidth = 0.5
  ctx.beginPath()
  for (let row = 0; row <= rows; row++) {
    for (let col = 0; col < cols; col++) {
      const idx = row * w + col
      ctx.moveTo(px[idx], py[idx])
      ctx.lineTo(px[idx + 1], py[idx + 1])
    }
    for (let col = 0; col <= cols; col++) {
      if (row < rows) {
        const idx = row * w + col
        ctx.moveTo(px[idx], py[idx])
        ctx.lineTo(px[idx + w], py[idx + w])
      }
    }
  }
  ctx.stroke()

  // Draw individual dots with varying brightness
  for (let i = 0; i < px.length; i++) {
    const fo = forces[i] / 55
    ctx.fillStyle = `rgba(16,185,129,${0.08 + fo * 0.75})`
    ctx.beginPath()
    ctx.arc(px[i], py[i], 1 + fo * 2.5, 0, Math.PI * 2)
    ctx.fill()
  }
}

function drawMesh(ctx: CanvasRenderingContext2D, W: number, H: number, s: S) {
  ctx.fillStyle = 'rgba(0,0,0,0.04)'
  ctx.fillRect(0, 0, W, H)

  MESH_COLORS.forEach((c, i) => {
    const blob = s.mesh[i]
    const oscX = 0.5 + 0.4 * Math.sin(s.t * 0.18 + i * 1.1)
    const oscY = 0.5 + 0.35 * Math.cos(s.t * 0.14 + i * 0.9)
    const mdx = s.mouse.nx - blob.cx
    const mdy = s.mouse.ny - blob.cy
    const mdist = Math.sqrt(mdx * mdx + mdy * mdy) + 0.01
    const pull = mdist < 0.45 ? 0.006 / mdist : 0

    blob.cx += (oscX - blob.cx) * 0.012 + mdx * pull
    blob.cy += (oscY - blob.cy) * 0.012 + mdy * pull

    const x = blob.cx * W
    const y = blob.cy * H
    const r = 0.54 * Math.min(W, H)
    const g = ctx.createRadialGradient(x, y, 0, x, y, r)
    g.addColorStop(0,   `rgba(${c},0.52)`)
    g.addColorStop(0.45,`rgba(${c},0.13)`)
    g.addColorStop(1,   `rgba(${c},0)`)
    ctx.fillStyle = g
    ctx.fillRect(0, 0, W, H)
  })
}

function drawCells(ctx: CanvasRenderingContext2D, W: number, H: number, s: S) {
  ctx.fillStyle = 'rgba(0,0,0,0.08)'
  ctx.fillRect(0, 0, W, H)

  const dim = Math.min(W, H)

  for (const cell of s.cells) {
    const x = cell.nx * W
    const y = cell.ny * H

    const mdx = s.mouse.nx - cell.nx
    const mdy = s.mouse.ny - cell.ny
    const mdist = Math.sqrt(mdx * mdx + mdy * mdy)
    const hover = mdist < 0.22 ? (1 - mdist / 0.22) * 2.8 : 0

    let boom = 0
    for (const click of s.clicks) {
      const age = s.t - click.t
      if (age > 1.4) continue
      const cdx = click.x / W - cell.nx
      const cdy = click.y / H - cell.ny
      const cd = Math.sqrt(cdx * cdx + cdy * cdy)
      if (cd < 0.55) boom += (1 - cd / 0.55) * 3.2 * Math.max(0, 1 - age * 1.1)
    }

    const pulse = Math.sin(s.t * cell.speed + cell.phase)
    const r = dim * (cell.baseR + cell.baseR * 0.4 * pulse + cell.baseR * hover + cell.baseR * boom)
    const c = CELL_COLORS[cell.ci]

    const glow = ctx.createRadialGradient(x, y, 0, x, y, r)
    glow.addColorStop(0,   `rgba(${c},0.92)`)
    glow.addColorStop(0.3, `rgba(${c},0.4)`)
    glow.addColorStop(0.7, `rgba(${c},0.1)`)
    glow.addColorStop(1,   `rgba(${c},0)`)
    ctx.fillStyle = glow
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
  }
}

function drawRipples(ctx: CanvasRenderingContext2D, s: S) {
  for (const click of s.clicks) {
    const age = s.t - click.t
    if (age > 1.6) continue
    const opacity = Math.max(0, 0.55 - age * 0.4)
    ctx.strokeStyle = `rgba(16,185,129,${opacity})`
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.arc(click.x, click.y, age * 260, 0, Math.PI * 2)
    ctx.stroke()
    // second ring
    if (age > 0.3) {
      const o2 = Math.max(0, 0.3 - (age - 0.3) * 0.5)
      ctx.strokeStyle = `rgba(16,185,129,${o2})`
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(click.x, click.y, (age - 0.3) * 200, 0, Math.PI * 2)
      ctx.stroke()
    }
  }
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [active, setActive] = useState<ShaderId>('aurora')
  const stateRef = useRef<S>(makeState())

  useEffect(() => {
    stateRef.current.shader = active
    stateRef.current.needsClear = true
  }, [active])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const S = stateRef.current

    const sync = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width  = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    }
    sync()
    const ro = new ResizeObserver(sync)
    ro.observe(canvas)

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      S.mouse.x  = e.clientX - rect.left
      S.mouse.y  = e.clientY - rect.top
      S.mouse.nx = S.mouse.x / canvas.width
      S.mouse.ny = S.mouse.y / canvas.height
    }
    const onClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      S.clicks.push({ x: e.clientX - rect.left, y: e.clientY - rect.top, t: S.t })
    }

    canvas.addEventListener('mousemove', onMove)
    canvas.addEventListener('click', onClick)

    let raf = 0

    const tick = () => {
      const W = canvas.offsetWidth
      const H = canvas.offsetHeight

      if (S.needsClear) {
        ctx.clearRect(0, 0, W, H)
        S.needsClear = false
      }

      if (S.shader === 'aurora') drawAurora(ctx, W, H, S)
      else if (S.shader === 'liquid') drawLiquid(ctx, W, H, S)
      else if (S.shader === 'grid')   drawGrid(ctx, W, H, S)
      else if (S.shader === 'mesh')   drawMesh(ctx, W, H, S)
      else if (S.shader === 'cells')  drawCells(ctx, W, H, S)

      drawRipples(ctx, S)

      S.clicks = S.clicks.filter(c => S.t - c.t < 2.5)
      S.t += 0.016
      raf = requestAnimationFrame(tick)
    }

    tick()

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      canvas.removeEventListener('mousemove', onMove)
      canvas.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <div className="absolute inset-0">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-crosshair"
        aria-hidden="true"
      />

    </div>
  )
}
