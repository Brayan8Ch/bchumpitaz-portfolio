# Portfolio Bento - Sistema de Diseño

## Direccion y Feel
Portafolio de desarrollador con estilo **bento box modular**. Cards que respiran con bordes sutiles, soporte para tema claro/oscuro. Paleta **Midnight Blue + Emerald**.

## Paleta de Colores - Midnight Blue + Emerald

### Tema Oscuro (Dark)
```css
--color-bg-primary: #0a0f1a;      /* Canvas */
--color-bg-secondary: #111827;    /* Surface cards */
--color-bg-tertiary: #1f2937;     /* Surface elevated */
--color-bg-hover: #374151;        /* Hover states */

--color-border-primary: #1f2937;
--color-border-secondary: #374151;
--color-border-hover: #10b981;    /* Emerald */

--color-text-primary: #f9fafb;
--color-text-secondary: #e5e7eb;
--color-text-muted: #9ca3af;
--color-text-faint: #6b7280;

--color-accent-primary: #10b981;   /* Emerald - highlights */
--color-accent-secondary: #818cf8; /* Indigo */
--color-accent-glow: rgba(16, 185, 129, 0.25);
```

### Tema Claro (Light)
```css
--color-bg-primary: #f8fafc;
--color-bg-secondary: #ffffff;
--color-bg-tertiary: #f1f5f9;
--color-bg-hover: #e2e8f0;

--color-border-primary: #e2e8f0;
--color-border-secondary: #cbd5e1;

--color-text-primary: #0f172a;
--color-text-secondary: #475569;
--color-text-muted: #64748b;
--color-text-faint: #94a3b8;

--color-accent-primary: #10b981;
--color-accent-secondary: #6366f1;
--color-accent-glow: rgba(16, 185, 129, 0.2);
```

## Clases CSS Utilitarias
```
.bg-canvas        → var(--color-bg-primary)
.bg-surface       → var(--color-bg-secondary)
.bg-surface-secondary → var(--color-bg-tertiary)
.text-primary     → var(--color-text-primary)
.text-secondary   → var(--color-text-secondary)
.text-muted       → var(--color-text-muted)
.text-faint       → var(--color-text-faint)
.text-accent-primary → var(--color-accent-primary)
.border-border-primary → var(--color-border-primary)
```

## Theme Toggle
- Componente `ThemeToggle.tsx` en posición fija (top-right)
- Detecta tema del sistema por defecto
- Guarda preferencia en localStorage
- Script inline en `<head>` previene flash de tema incorrecto

## Tecnologías - Grid Compacto
- Grid de 3 columnas (1 por categoría)
- Solo iconos visibles, nombre en tooltip hover
- Cada categoría en mini-card con título
- Iconos: 48x48 mobile, 56x56 desktop

## Animaciones

### Entrada (fade-in-up)
```css
@keyframes fade-in-up {
  0% { opacity: 0; transform: translateY(24px); }
  100% { opacity: 1; transform: translateY(0); }
}
animation: fade-in-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
```

### Delays escalonados
- Hero: 0ms
- Contacto: 100ms
- Sobre mí: 200ms
- Experiencia UTP: 300ms
- Experiencia OSIPTEL: 400ms
- Proyectos: 500ms
- Tecnologías: 600ms
- Footer: 700ms
- Theme Toggle: 800ms

### Micro-interacciones
- Foto de perfil: gradient glow on hover
- Links de contacto: icon scale-110
- Tech icons: scale-110 + glow emerald
- Cards: border-accent + shadow-accent on hover

## Espaciado
- Base unit: 4px (Tailwind default)
- Gaps en grid: `gap-4 md:gap-5`
- Padding de cards: `p-5 md:p-6`
- Border radius: `rounded-2xl` cards, `rounded-xl` elementos internos

## Tipografia
- Fuente: Space Grotesk
- Pesos: 400, 500, 600, 700
- Titulos: `text-2xl md:text-4xl font-bold`
- Section headers: `text-lg md:text-xl font-bold`
- Highlights: `text-accent-primary font-medium`

## Componentes

### BentoCard
```jsx
bg-surface border border-border-primary rounded-2xl p-5 md:p-6
hover:border-border-secondary hover:shadow-lg hover:shadow-accent
animate-fade-in-up
```

### SectionHeader
```jsx
<span className="text-accent-primary">{icon}</span>
<h2 className="font-bold text-lg md:text-xl text-primary">{title}</h2>
```

### Tooltip (CSS puro)
```css
.tooltip::after {
  content: attr(data-tooltip);
  /* positioned above element, fade in on hover */
}
```

## Grid Bento
- 12 columnas desktop
- Hero: span-8, Contacto: span-4
- Sobre mí: span-5 row-span-2
- Experiencias: span-7 cada una
- Proyectos: span-12
- Tecnologías: span-12 (grid interno 3 cols)

## Proyectos
- CAD (Control de Asignación Docente) - size: medium
- SUMA OSIPTEL - size: medium
- Ambos con carrusel de imágenes
