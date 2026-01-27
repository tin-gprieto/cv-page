import { Briefcase } from "lucide-react"
import { SectionTitle } from "./section-title"
import { TimelineCard } from "./timeline-card"

interface ExperienceProps {
  lang: "es" | "en"
}

const experienceData = {
  es: [
    {
      company: "FIUBA",
      position: "Ayudante ad honorem",
      startDate: "Mar 2024",
      endDate: "Jun 2025",
      location: "Buenos Aires, Argentina",
      summary:
        'Colaboración docente en la materia "Organización del Computador" de la carrera de Ingeniería en Informática.',
      highlights: [
        "Corrección de trabajos prácticos",
        "Contenidos: representación binaria, microarquitectura x86, Assembly y caching",
      ],
    },
    {
      company: "Centro Argentino de Ingenieros (CAI)",
      position: "Secretario Ejecutivo de CEPSI y NGL",
      startDate: "May 2024",
      endDate: "Dic 2024",
      location: "Buenos Aires, Argentina",
      summary: "Pasantía en rol administrativo dentro de comisiones directivas y técnicas.",
      highlights: [
        "Gestión de tareas administrativas",
        "Coordinación de reuniones",
        "Confección de minutas y seguimiento de proyectos internos",
      ],
    },
    {
      company: "Banco Provincia de Buenos Aires",
      position: "Programador Frontend",
      startDate: "May 2021",
      endDate: "Ago 2022",
      location: "Buenos Aires, Argentina",
      summary: "Participación en el desarrollo de soluciones web para el sector bancario.",
      highlights: [
        "Desarrollo de portal de noticias con React",
        "Implementación de CMS institucional utilizando Angular",
        "Relevamiento y análisis de requerimientos junto a áreas de negocio",
      ],
    },
  ],
  en: [
    {
      company: "FIUBA",
      position: "Teaching Assistant (Ad Honorem)",
      startDate: "Mar 2024",
      endDate: "Jun 2025",
      location: "Buenos Aires, Argentina",
      summary:
        'Teaching collaboration in the "Computer Organization" course of the Computer Engineering program.',
      highlights: [
        "Grading practical assignments",
        "Contents: binary representation, x86 microarchitecture, Assembly and caching",
      ],
    },
    {
      company: "Argentine Center of Engineers (CAI)",
      position: "Executive Secretary of CEPSI and NGL",
      startDate: "May 2024",
      endDate: "Dec 2024",
      location: "Buenos Aires, Argentina",
      summary: "Internship in administrative role within directive and technical committees.",
      highlights: [
        "Administrative task management",
        "Meeting coordination",
        "Minutes preparation and internal project tracking",
      ],
    },
    {
      company: "Banco Provincia de Buenos Aires",
      position: "Frontend Developer",
      startDate: "May 2021",
      endDate: "Aug 2022",
      location: "Buenos Aires, Argentina",
      summary: "Participation in web solutions development for the banking sector.",
      highlights: [
        "News portal development with React",
        "Institutional CMS implementation using Angular",
        "Requirements gathering and analysis with business areas",
      ],
    },
  ],
}

const sectionTitle = {
  es: "Experiencia Profesional",
  en: "Professional Experience",
}

export function Experience({ lang }: ExperienceProps) {
  const data = experienceData[lang]

  return (
    <section>
      <SectionTitle icon={Briefcase} title={sectionTitle[lang]} />
      <div className="mt-6 space-y-4 sm:space-y-6">
        {data.map((exp, index) => (
          <TimelineCard
            key={index}
            index={index}
            title={exp.company}
            subtitle={exp.position}
            date={`${exp.startDate} - ${exp.endDate}`}
            location={exp.location}
            summary={exp.summary}
            highlights={exp.highlights}
          />
        ))}
      </div>
    </section>
  )
}
