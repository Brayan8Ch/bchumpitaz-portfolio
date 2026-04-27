export interface AiTool {
  name: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Technology {
  name: string;
  icon: string;
  iconUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  images: ProjectImage[];
  description: string;
  technologies: Technology[];
  aiTools?: AiTool[];
  size?: "small" | "medium" | "large";
  repoUrl?: string;
  demoUrl?: string;
  isPublic?: boolean;
}

export const projects: Project[] = [

  {
    id: "3",
    title: "EureKreando",
    images: [
      { src: "/proyecto-eurekreando-1.png", alt: "Landing page de EureKreando" },
      { src: "/proyecto-eurekreando-2.png", alt: "Selección de proyecto Eureka por contexto local" },
      { src: "/proyecto-eurekreando-3.png", alt: "Guía de clase generada por IA" },
    ],
    description:
      "Herramienta para docentes que genera guías de indagación Eureka con 3 agentes de IA: investigador, validador y redactor de clase.",
    technologies: [
      { name: "TypeScript", icon: "typescript" },
      { name: "Python", icon: "python" },
      { name: "Vercel", icon: "vercel" },
    ],
    aiTools: [
      { name: "Claude Code" },
      { name: "OpenAI API" },
      { name: "Lovable" },

    ],
    size: "medium",
    isPublic: true,
    demoUrl: "https://hackaton-eurekreando.vercel.app/",
    repoUrl: "https://github.com/Brayan8Ch/HackatonEurekreando"
  },
  {
    id: "4",
    title: "Programador de Comunicaciones",
    images: [
      { src: "/proyecto-comms-1.png", alt: "Formulario de nueva comunicación" },
      { src: "/proyecto-comms-2.png", alt: "Lista y cronograma de comunicaciones programadas" },
    ],
    description:
      "Herramienta interna que reemplaza el copiado manual de filas en Excel. Ingresás los datos una vez y la comunicación se agrega automáticamente a la papelera lista para pegar.",
    technologies: [
      { name: "TypeScript", icon: "typescript" },
      { name: "GitHub Pages", icon: "github" },
    ],
    aiTools: [
      { name: "Lovable" },
      { name: "GitHub Copilot" },
    ],
    size: "medium",
    isPublic: true,
    repoUrl: "https://github.com/Brayan8Ch/programador_de_comms",
    demoUrl: "https://programadorcomms.bchumpitaz.dev/",
  },
  {
    id: "5",
    title: "Ticketera de Comunicaciones UTP",
    images: [
      { src: "/proyecto-ticketera-1.png", alt: "Formulario de registro de ticket" },
      { src: "/proyecto-ticketera-2.png", alt: "Lista de tickets con estado y filtros" },
      { src: "/proyecto-ticketera-3.png", alt: "Detalle de ticket con canales y segmentos" },
    ],
    description:
      "Sistema interno de gestión de solicitudes de comunicación en la UTP. Permite registrar tickets, envío automático de mails de seguimiento.",
    technologies: [
      { name: "Power Apps", icon: "", iconUrl: "/icons/powerapps.svg" },
      { name: "Power Automate", icon: "", iconUrl: "/icons/powerautomate.svg" },
      { name: "SharePoint", icon: "", iconUrl: "/icons/sharepoint.svg" },
    ],
    size: "medium",
    isPublic: false,
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
    aiTools: [
      { name: "Github Copilot" },
    ],
    size: "medium",
    isPublic: true,
    repoUrl: "https://github.com/zsergio1/Suma-osiptel",
    demoUrl: "https://zsergio1.github.io/Suma-osiptel/",
  },
  {
    id: "1",
    title: "Control de Asignación Docente (CAD)",
    images: [
      { src: "/proyecto-cad.webp", alt: "Interfaz principal del sistema CAD" },
      { src: "/flujon8n.webp", alt: "Flujo de automatización con n8n e IA" },
    ],
    description:
      "Sistema para detectar a docentes con cursos incompatibles usando flujos automatizados con n8n e IA.",
    technologies: [
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Vite", icon: "vitejs" },
    ],
    aiTools: [
      { name: "Claude Code" },
      { name: "n8n AI" },
      { name: "OpenAI API" }
    ],
    size: "medium",
    isPublic: false,
    repoUrl: "https://github.com/usuario/proyecto",
    demoUrl: "https://proyecto.vercel.app",
  },
];
