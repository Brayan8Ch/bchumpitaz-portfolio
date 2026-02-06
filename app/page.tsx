import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import Experience from "./components/Experience";
import Tecnologies from "./components/Tecnologies";
import ProjectsGallery from "./components/ProjectsGallery";
import ThemeToggle from "./components/ThemeToggle";
import { FaLinkedin, FaUser, FaGithub } from "react-icons/fa";
import { IoMdBriefcase } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";
import { MdOutgoingMail } from "react-icons/md";
import { GoProject } from "react-icons/go";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
    <div
      className={`
        bg-surface border border-border-primary rounded-2xl p-5 md:p-6
        hover:border-border-secondary hover:shadow-lg hover:shadow-accent
        transition-all duration-300
        animate-fade-in-up
        ${className}
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionHeader({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="text-accent-primary">{icon}</span>
      <h2 className="font-bold text-lg md:text-xl text-primary">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <div className={`${spaceGrotesk.className} bg-canvas min-h-screen text-primary`}>
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-4 right-4 z-50 animate-fade-in" style={{ animationDelay: "800ms" }}>
        <ThemeToggle />
      </div>

      <div className="max-w-6xl mx-auto p-4 md:p-8">
        {/* Bento Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">

          {/* Hero Card - Presentación */}
          <BentoCard className="md:col-span-8 flex flex-col md:flex-row items-center gap-6" delay={0}>
            <div className="shrink-0 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#10b981] to-[#6366f1] rounded-2xl opacity-0 group-hover:opacity-50 blur transition-opacity duration-300" />
              <Image
                src="/photo.png"
                width={180}
                height={180}
                alt="Brayan Chumpitaz"
                className="relative rounded-2xl w-32 h-32 md:w-44 md:h-44 object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col text-center md:text-left gap-3">
              <div>
                <h1 className="text-primary text-2xl md:text-4xl font-bold">
                  Brayan Chumpitaz
                </h1>
                <p className="text-accent-primary text-lg md:text-xl mt-1 font-medium">
                  Frontend Developer
                </p>
              </div>
              <p className="text-muted text-sm md:text-base max-w-md">
                Ingeniero de Sistemas liderando iniciativas para mejorar la experiencia universitaria de estudiantes en Perú.
              </p>
            </div>
          </BentoCard>

          {/* Card de Contacto */}
          <BentoCard className="md:col-span-4 flex flex-col justify-center gap-3" delay={100}>
            <p className="text-muted text-sm font-medium uppercase tracking-wider mb-1">
              Conecta conmigo
            </p>
            <a
              href="https://www.linkedin.com/in/brayanchumpitaz/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-primary bg-surface-secondary hover:bg-surface-hover border border-border-primary hover:border-accent-primary rounded-xl px-4 py-3 transition-all duration-200"
            >
              <FaLinkedin className="text-[#0a66c2] text-xl group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/bchumpitaz"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-primary bg-surface-secondary hover:bg-surface-hover border border-border-primary hover:border-accent-primary rounded-xl px-4 py-3 transition-all duration-200"
            >
              <FaGithub className="text-primary text-xl group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:brayanchumpitaz9@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-primary bg-surface-secondary hover:bg-surface-hover border border-border-primary hover:border-accent-primary rounded-xl px-4 py-3 transition-all duration-200"
            >
              <MdOutgoingMail className="text-accent-primary text-xl group-hover:scale-110 transition-transform" />
              <span>Email</span>
            </a>
          </BentoCard>

          {/* Card Sobre Mí */}
          <BentoCard className="md:col-span-5 md:row-span-2" delay={200}>
            <SectionHeader icon={<FaUser className="text-lg" />} title="Sobre mí" />
            <div className="space-y-4 text-secondary">
              <p>
                Me llamo Brayan Chumpitaz Angeles. Soy Ingeniero de Sistemas
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

          {/* Card de Experiencia UTP */}
          <BentoCard className="md:col-span-7" delay={300}>
            <SectionHeader icon={<IoMdBriefcase className="text-xl" />} title="Experiencia Laboral" />
            <Experience
              company="Universidad Tecnológica del Perú"
              role="Analista de Retención"
              date="2023 - Actualidad"
              logo="/logoutp.png"
              activities={[
                "Diseñé flujo automatizado con n8n e IA (83% precisión) para detectar asignaciones docentes incompatibles",
                "Desarrollé plataforma web para centralizar comunicaciones multicanal, eliminando dependencia de Excel",
                "Lideré iniciativas de mejora continua con equipos multidisciplinarios",
              ]}
            />
          </BentoCard>

          {/* Card de Experiencia OSIPTEL */}
          <BentoCard className="md:col-span-7" delay={400}>
            <Experience
              company="OSIPTEL"
              role="Desarrollador - Programa de Extensión Universitaria"
              date="2022 - 2023"
              logo="/logoosiptel.png"
              activities={[
                "Desarrollé aplicación web para mejorar el acceso a información de servicios de telecomunicaciones",
                "Implementé dashboards interactivos para visualización de datos de cobertura y calidad de servicio",
                "Colaboré con equipos multidisciplinarios para definir requerimientos técnicos",
              ]}
            />
          </BentoCard>

          {/* Card de Proyectos */}
          <BentoCard className="md:col-span-12" delay={500}>
            <SectionHeader icon={<GoProject className="text-xl" />} title="Proyectos" />
            <ProjectsGallery
              projects={[
                {
                  id: "1",
                  title: "Control de Asignación Docente (CAD)",
                  images: [
                    { src: "/proyecto-cad.png", alt: "Interfaz principal del sistema CAD" },
                    { src: "/flujon8n.png", alt: "Flujo de automatización con n8n e IA" },
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
                    { src: "/proyecto-suma.png", alt: "Sistema SUMA OSIPTEL" },
                  ],
                  description:
                    "Plataforma web desarrollada para OSIPTEL que facilita el acceso a información de servicios de telecomunicaciones y mejora la experiencia del usuario.",
                  technologies: [
                    { name: "React", icon: "react" },
                    { name: "JavaScript", icon: "javascript" },
                    { name: "CSS3", icon: "css3" },
                  ],
                  size: "medium",
                  isPublic: false,
                  repoUrl: "https://github.com/usuario/suma-osiptel",
                  demoUrl: "https://suma.osiptel.gob.pe",
                },
              ]}
            />
          </BentoCard>

          {/* Card de Tecnologías */}
          <BentoCard className="md:col-span-12" delay={600}>
            <SectionHeader icon={<IoCodeSlash className="text-xl" />} title="Tecnologías" />
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

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-faint mt-8 pt-6 border-t border-border-primary animate-fade-in" style={{ animationDelay: "700ms" }}>
          <p>2026 - Brayan Chumpitaz Angeles</p>
          <a
            href="mailto:brayanchumpitaz9@gmail.com"
            className="hover:text-accent-primary transition-colors"
          >
            brayanchumpitaz9@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
