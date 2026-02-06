import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import Experience from "./components/Experience";
import Tecnologies from "./components/Tecnologies";
import ProjectsGallery from "./components/ProjectsGallery";
import { FaLinkedin, FaUser } from "react-icons/fa";
import { IoMdBriefcase } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";
import { MdOutgoingMail } from "react-icons/md";
import { GoProject } from "react-icons/go";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <div
      className={`${spaceGrotesk.className} bg-[#101922] min-h-screen text-white`}
    >
      <div className="flex flex-row md:flex-row items-center justify-center gap-4 p-4 md:gap-8 md:p-8">
        <div>
          <Image
            src="/photo.png"
            width={300}
            height={300}
            alt="my photo"
            className="rounded-full md:w-[300px] md:h-[300px]"
          />
        </div>
        <div className={`flex flex-col text-left mt-4 md:mt-0 gap-2`}>
          <h1 className="text-white text-2xl md:text-4xl font-bold">
            Brayan Chumpitaz
          </h1>
          <h2 className="text-[#a7a7a7] text-xl md:text-2xl">
            Frontend Developer
          </h2>
          <div className="flex flex-col md:flex-row gap-3">
            <a
              href="https://www.linkedin.com/in/brayanchumpitaz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3575ff] dark:text-[#6481ff] hover:underline border border-[#3575ff] rounded-xl p-2 flex justify-center items-center w-fit gap-1 hover:bg-[#e1eaff] dark:hover:bg-[#3a3b3c] transition-colors duration-300 md:p-3 md:text-lg"
            >
              <FaLinkedin className="text-[#6481ff] text-2xl md:text-3xl" />{" "}
              LinkedIn
            </a>
            <a
              href="mailto:brayanchumpitaz9@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3575ff] dark:text-[#6481ff] hover:underline border border-[#3575ff] rounded-xl p-2 flex justify-center items-center w-fit gap-1 hover:bg-[#e1eaff] dark:hover:bg-[#3a3b3c] transition-colors duration-300 md:p-3 md:text-lg"
            >
              <MdOutgoingMail className="text-[#6481ff] text-2xl md:text-3xl" />{" "}
              Contáctame
            </a>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col p-4 gap-4 md:p-8 md:gap-4 max-w-4xl mx-auto`}
      >
        <div>
          <p className="font-bold text-xl flex items-center gap-2">
            <IoMdBriefcase />
            Experiencia Laboral
          </p>
          <hr />
        </div>
        <Experience
          company="Universidad Tecnológica del Perú"
          role="Analista de Retención"
          date="Actualmente..."
          activities={[
            "Diseñé flujo automatizado con n8n e IA (83% precisión) para detectar asignaciones docentes incompatibles",
            "Desarrollé plataforma web para centralizar comunicaciones multicanal, eliminando dependencia de Excel y pérdida de datos entre ciclos académicos",
            "Lideré iniciativas de mejora continua con equipos multidisciplinarios, optimizando procesos de retención y experiencia estudiantil",
          ]}
        ></Experience>
        <div className="flex flex-col">
          <p className="font-bold text-xl flex items-center gap-2">
            <GoProject />
            Proyectos
          </p>
          <hr />
        </div>
        <ProjectsGallery
          projects={[
            {
              id: "1",
              title: "Control de Asignación Docente (CAD)",
              image: "/proyecto-cad.png",
              description:
                "Descripción del proyecto público con enlaces visibles al repositorio y demo.",
              technologies: [
                { name: "React", icon: "react" },
                { name: "TypeScript", icon: "typescript" },
                { name: "Vite", icon: "/vitejs" }
              ],
              size: "large",
              isPublic: false,
              repoUrl: "https://github.com/usuario/proyecto",
              demoUrl: "https://proyecto.vercel.app",
            },
          ]}
        />
        <div>
          <p className="font-bold text-xl flex items-center gap-2">
            <IoCodeSlash />
            Tecnologías
          </p>
          <hr />
        </div>
        <Tecnologies
          title="Frontend"
          items={[
            { name: "HTML", icon: "html5" },
            { name: "CSS", icon: "css3" },
            { name: "React", icon: "react" },
            { name: "Next.js", icon: "nextjs" },
            { name: "Typescript", icon: "typescript" },
            { name: "Tailwind", icon: "tailwindcss" },
            { name: "Javascript", icon: "javascript" },
          ]}
        />
        <div className="flex flex-col">
          <p className="font-bold text-xl flex items-center gap-2">
            <FaUser />
            Sobre mi
          </p>
          <hr />
        </div>
        <p>
          Me llamo Brayan Chumpitaz Angeles. Soy Ingeniero de Sistemas y
          actualmente me encuentro liderando iniciativas para{" "}
          <span className="text-amber-300">
            mejorar la experiencia universitaria de estudiantes de todo el Perú.
          </span>
        </p>
        <p>
          Algunos de mis logros incluyen{" "}
          <span className="text-amber-300">
            participar en el Programa de Extensión Universitaria de OSIPTEL{" "}
          </span>{" "}
          para el desarrollo de proyectos que mejoraron el acceso a información
          de los servicios de telecomunicaciones a nivel nacional.
        </p>

        <hr />
        <div className="flex justify-between text-sm text-[#a7a7a7]">
          <p> 2026 - Brayan Chumpitaz Angeles.</p>
          <a
            href="mailto:brayanchumpitaz9@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
}
