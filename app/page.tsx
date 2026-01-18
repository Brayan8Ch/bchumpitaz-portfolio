import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import Experience from "./components/Experience";
import Tecnologies from "./components/Tecnologies";
import { FaLinkedin } from "react-icons/fa";
import { IoMdBriefcase } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";
import { MdOutgoingMail } from "react-icons/md";

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
      <div className="flex items-center justify-center gap-4 p-4">
        <div>
          <Image
            src="/photo.png"
            width={200}
            height={200}
            alt="my photo"
            className="rounded-full"
          />
        </div>
        <div className={`flex flex-col text-left mt-4 gap-2`}>
          <h1 className="text-white text-2xl font-bold">Brayan Chumpitaz</h1>
          <h2 className="text-[#a7a7a7] text-xl">Frontend Developer</h2>

          <a
            href="https://www.linkedin.com/in/brayanchumpitaz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3575ff] dark:text-[#6481ff] hover:underline border border-[#3575ff] rounded-xl p-2 flex justify-center items-center w-fit gap-1 hover:bg-[#e1eaff] dark:hover:bg-[#3a3b3c] transition-colors duration-300"
          >
            <FaLinkedin className="text-[#6481ff] text-2xl" /> LinkedIn
          </a>
          <a
            href="mailto:brayanchumpitaz9@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3575ff] dark:text-[#6481ff] hover:underline border border-[#3575ff] rounded-xl p-2 flex justify-center items-center w-fit gap-1 hover:bg-[#e1eaff] dark:hover:bg-[#3a3b3c] transition-colors duration-300"
          >
            <MdOutgoingMail className="text-[#6481ff] text-2xl" /> Contáctame
          </a>
        </div>
      </div>
      <div className={`flex flex-col p-4 gap-4`}>
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
      </div>
    </div>
  );
}
