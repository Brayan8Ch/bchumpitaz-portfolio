import Image from "next/image";
import NavSidebar from "./components/NavSidebar";
import InteractiveBackground from "./components/InteractiveBackground";
import AsciiHero from "./components/AsciiHero";
import Timeline from "./components/Timeline";
import Tecnologies from "./components/Tecnologies";
import ProjectsGallery from "./components/ProjectsGallery";
import { HiUser, HiBriefcase, HiFolderOpen, HiCpuChip } from "react-icons/hi2";
import { IoCodeSlash } from "react-icons/io5";
import ScrollReveal from "./components/ScrollReveal";
import AsciiCheems from "./components/AsciiCheems";

// ─── Shared primitives ───────────────────────────────────────────────────────

function BentoCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <ScrollReveal delay={delay} className={className}>
      <div
        className={`
          relative group bg-surface border border-border-primary rounded-2xl p-5 md:p-6
          hover:border-border-secondary hover:shadow-lg hover:shadow-accent hover:-translate-y-1
          transition-all duration-300 overflow-hidden h-full
        `}
      >
        {children}
      </div>
    </ScrollReveal>
  );
}

function SectionHeader({
  icon,
  title,
  tag,
}: {
  icon: React.ReactNode;
  title: string;
  tag: string;
}) {
  return (
    <ScrollReveal className="mb-20">
      <p className="font-mono text-xs text-muted mb-2 tracking-wide">{`// ${tag}`}</p>
      <div className="flex items-center gap-4">
        <span className="text-accent-primary text-xl shrink-0">{icon}</span>
        <h2 className="text-2xl md:text-3xl font-bold text-primary">{title}</h2>
        <div className="flex-1 h-px bg-border-primary" />
      </div>
    </ScrollReveal>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="bg-canvas text-primary min-h-screen">
      <NavSidebar />

      <main className="lg:pl-16">

        {/* ═══════════════ HERO ═══════════════ */}
        <section
          id="hero"
          className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        >
          <InteractiveBackground />
          <div className="absolute inset-0 bg-white/70 dark:bg-black/35 z-[1]" />
          <div className="relative z-10 w-full max-w-2xl mx-auto px-4">
            <AsciiHero />
          </div>
        </section>

        {/* ═══════════════ SOBRE MÍ ═══════════════ */}
        <section id="sobre-mi" className="relative bg-canvas dot-grid py-24 overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
            <SectionHeader icon={<HiUser />} title="Sobre mí" tag="about_me.tsx" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Bio */}
              <BentoCard className="lg:col-span-3 order-2 lg:order-1" delay={0}>
                {/* Terminal comment header */}
                <p className="font-mono text-xs text-muted mb-4 select-none">
                  {'/* brayan_chumpitaz_angeles.txt */'}
                </p>
                <div className="space-y-4 text-secondary leading-relaxed">
                  <p>
                    Soy{" "}
                    <span className="text-primary font-semibold">Ingeniero de Sistemas</span>{" "}
                    liderando iniciativas para{" "}
                    <span className="text-accent-primary font-medium">
                      mejorar la experiencia universitaria de estudiantes de todo el Perú.
                    </span>
                  </p>
                  <p>
                    Participé en el{" "}
                    <span className="text-accent-primary font-medium">
                      Programa de Extensión Universitaria de OSIPTEL
                    </span>{" "}
                    mejorando el acceso a información de telecomunicaciones a nivel nacional.
                  </p>
                  <p>
                    Me apasiona crear soluciones tecnológicas que generen impacto real,
                    combinando desarrollo frontend moderno con automatización e inteligencia artificial.
                  </p>
                </div>
              </BentoCard>

              {/* Photo + location */}
              <ScrollReveal delay={100} className="lg:col-span-2 flex flex-col items-center gap-6 order-1 lg:order-2">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-[#10b981] to-[#6366f1] rounded-2xl opacity-0 group-hover:opacity-40 blur transition-opacity duration-500" />
                  <Image
                    src="/photo.webp"
                    width={220}
                    height={220}
                    alt="Brayan Chumpitaz"
                    priority
                    sizes="220px"
                    className="relative rounded-2xl w-40 h-40 md:w-52 md:h-52 object-cover border border-border-primary group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border-primary bg-surface text-sm font-mono">
                  <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse-glow shrink-0" />
                  <span className="text-muted">Lima, Peru</span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ═══════════════ EXPERIENCIA ═══════════════ */}
        <section id="experiencia" className="relative bg-surface py-24 overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2" />
          <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
            <SectionHeader icon={<HiBriefcase />} title="Experiencia Laboral" tag="work_experience.ts" />

            <Timeline
              items={[
                {
                  company: "Universidad Tecnológica del Perú",
                  role: "Analista de Retención",
                  date: "Sep 2025 – Actualidad",
                  logo: "/logoutp.webp",
                  current: true,
                  activities: [
                    "Diseñé flujo automatizado con n8n e IA (83% precisión) para detectar asignaciones docentes incompatibles",
                    "Desarrollé plataforma web para centralizar comunicaciones multicanal, eliminando dependencia de Excel",
                    "Lideré iniciativas de mejora continua con equipos multidisciplinarios",
                  ],
                },
                {
                  company: "Organismo Supervisor de Inversión Privada en Telecomunicaciones",
                  role: "Practicante Pre Profesional",
                  date: "Abr 2025 – Ago 2025",
                  logo: "/logoosiptel.webp",
                  activities: [
                    "Desarrollé aplicación web para mejorar el acceso a información de servicios de telecomunicaciones",
                    "Implementé dashboards interactivos para visualización de datos de cobertura y calidad de servicio",
                    "Colaboré con equipos multidisciplinarios para definir requerimientos técnicos",
                  ],
                },
              ]}
            />
          </div>
        </section>

        {/* ═══════════════ PROYECTOS ═══════════════ */}
        <section id="proyectos" className="relative bg-canvas dot-grid py-24 overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
            <SectionHeader icon={<HiFolderOpen />} title="Proyectos" tag="projects/index.ts" />

            <BentoCard delay={0}>
              <p className="font-mono text-xs text-muted mb-5 select-none">
                {'// featured projects'}
              </p>
              <ProjectsGallery
                projects={[
                  {
                    id: "1",
                    title: "Control de Asignación Docente (CAD)",
                    images: [
                      { src: "/proyecto-cad.webp", alt: "Interfaz principal del sistema CAD" },
                      { src: "/flujon8n.webp", alt: "Flujo de automatización con n8n e IA" },
                    ],
                    description:
                      "Sistema para detectar asignaciones docentes incompatibles usando flujos automatizados con n8n e IA. Logró 83% de precisión en la detección de incompatibilidades.",
                    technologies: [
                      { name: "React", icon: "react" },
                      { name: "TypeScript", icon: "typescript" },
                      { name: "Vite", icon: "vitejs" },
                    ],
                    size: "medium",
                    isPublic: false,
                    repoUrl: "https://github.com/usuario/proyecto",
                    demoUrl: "https://proyecto.vercel.app",
                  },
                  {
                    id: "2",
                    title: "SUMA OSIPTEL",
                    images: [
                      { src: "/proyecto-suma.webp", alt: "Sistema SUMA OSIPTEL 1" },
                      { src: "/proyecto-suma-2.webp", alt: "Sistema SUMA OSIPTEL 2" },
                      { src: "/proyecto-suma-3.webp", alt: "Sistema SUMA OSIPTEL 3" },
                    ],
                    description:
                      "Página web desarrollada para OSIPTEL que facilita el acceso a información de los voluntariados realizados por la institución.",
                    technologies: [
                      { name: "HTML", icon: "html5" },
                      { name: "JavaScript", icon: "javascript" },
                      { name: "CSS3", icon: "css3" },
                    ],
                    size: "medium",
                    isPublic: true,
                    repoUrl: "https://github.com/zsergio1/Suma-osiptel",
                    demoUrl: "https://zsergio1.github.io/Suma-osiptel/",
                  },
                ]}
              />
            </BentoCard>
          </div>
        </section>

        {/* ═══════════════ TECNOLOGÍAS ═══════════════ */}
        <section id="tecnologias" className="relative bg-surface py-24 overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-10 right-1/4 w-72 h-72 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
            <SectionHeader icon={<HiCpuChip />} title="Tecnologías" tag="stack.config.ts" />

            <BentoCard delay={0}>
              <p className="font-mono text-xs text-muted mb-5 select-none">
                {'// tools I work with'}
              </p>
              <Tecnologies
                categories={[
                  {
                    title: "Frontend",
                    items: [
                      { name: "React", icon: "react" },
                      { name: "Next.js", icon: "nextjs" },
                      { name: "TypeScript", icon: "typescript" },
                      { name: "JavaScript", icon: "javascript" },
                      { name: "Tailwind CSS", icon: "tailwindcss" },
                      { name: "HTML5", icon: "html5" },
                      { name: "CSS3", icon: "css3" },
                    ],
                  },
                  {
                    title: "Backend",
                    items: [
                      { name: "Node.js", icon: "nodejs" },
                      { name: "Python", icon: "python" },
                      { name: "PostgreSQL", icon: "postgresql" },
                    ],
                  },
                  {
                    title: "Herramientas",
                    items: [
                      { name: "Git", icon: "git" },
                      { name: "Docker", icon: "docker" },
                      { name: "Figma", icon: "figma" },
                      { name: "VS Code", icon: "vscode" },
                    ],
                  },
                ]}
              />
            </BentoCard>
          </div>
        </section>

        {/* ═══════════════ ASCII ANIMATION ═══════════════ */}
        <ScrollReveal delay={0}>
          <AsciiCheems />
        </ScrollReveal>

        {/* ═══════════════ FOOTER ═══════════════ */}
        <footer className="bg-canvas border-t border-border-primary py-8 px-8">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="flex items-center gap-2 font-mono text-xs text-faint">
              <IoCodeSlash className="text-accent-primary" />
              <span>2026 — Brayan Chumpitaz Angeles</span>
            </div>
            <a
              href="mailto:brayanchumpitaz9@gmail.com"
              className="font-mono text-xs text-faint hover:text-accent-primary transition-colors"
            >
              brayanchumpitaz9@gmail.com
            </a>
          </div>
        </footer>

      </main>
    </div>
  );
}
