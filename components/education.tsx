import { GraduationCap } from "lucide-react"
import { SectionTitle } from "./section-title"
import { TimelineCard } from "./timeline-card"

interface EducationProps {
  lang: "es" | "en"
}

const educationData = {
  es: [
    {
      institution: "Universitat Politècnica de València (UPV)",
      area: "Ingeniería en Informática",
      degree: "Máster",
      startDate: "Feb 2025",
      endDate: "Jul 2025",
      location: "Valencia, España",
      summary:
        "Intercambio académico con la carrera de grado en Ingeniería en Informática y con el Máster Universitario en Ciberseguridad y Ciberinteligencia (MUCC).",
      highlights: [
        "Computación paralela",
        "Concurrencia y sistemas distribuidos",
        "Informática forense y análisis de malware (MUCC)",
        "Pentesting y hacking ético (MUCC)",
        "Sistemas basados en Deep Learning para la Industria",
      ],
    },
    {
      institution: "Facultad de Ingeniería, Universidad de Buenos Aires (FIUBA)",
      area: "Ingeniería en Informática",
      degree: "Carrera de grado",
      startDate: "Ene 2019",
      endDate: "Presente",
      location: "Buenos Aires, Argentina",
      summary: "Estudiante avanzado de Ingeniería en Informática.",
      highlights: [
        "195 de 226 créditos aprobados (86% de la carrera)",
        "Promedio general: 7,74",
      ],
    },
    {
      institution: "Colegio Nacional de Buenos Aires",
      area: "Bachiller",
      degree: "Educación secundaria",
      startDate: "Ene 2014",
      endDate: "Dic 2018",
      location: "Buenos Aires, Argentina",
      summary: null,
      highlights: [],
    },
  ],
  en: [
    {
      institution: "Universitat Politècnica de València (UPV)",
      area: "Computer Engineering",
      degree: "Master's",
      startDate: "Feb 2025",
      endDate: "Jul 2025",
      location: "Valencia, Spain",
      summary:
        "Academic exchange with the Computer Engineering undergraduate program and the Master's in Cybersecurity and Cyberintelligence (MUCC).",
      highlights: [
        "Parallel computing",
        "Concurrency and distributed systems",
        "Digital forensics and malware analysis (MUCC)",
        "Pentesting and ethical hacking (MUCC)",
        "Deep Learning-based Systems for Industry",
      ],
    },
    {
      institution: "Faculty of Engineering, University of Buenos Aires (FIUBA)",
      area: "Computer Engineering",
      degree: "Undergraduate",
      startDate: "Jan 2019",
      endDate: "Present",
      location: "Buenos Aires, Argentina",
      summary: "Advanced Computer Engineering student.",
      highlights: [
        "195 of 226 credits completed (86% of the program)",
        "GPA: 7.74/10",
      ],
    },
    {
      institution: "Colegio Nacional de Buenos Aires",
      area: "High School Diploma",
      degree: "Secondary Education",
      startDate: "Jan 2014",
      endDate: "Dec 2018",
      location: "Buenos Aires, Argentina",
      summary: null,
      highlights: [],
    },
  ],
}

const sectionTitle = {
  es: "Educación",
  en: "Education",
}

export function Education({ lang }: EducationProps) {
  const data = educationData[lang]

  return (
    <section>
      <SectionTitle icon={GraduationCap} title={sectionTitle[lang]} />
      <div className="mt-6 space-y-4 sm:space-y-6">
        {data.map((edu, index) => (
          <TimelineCard
            key={index}
            index={index}
            title={edu.institution}
            subtitle={`${edu.degree} - ${edu.area}`}
            date={`${edu.startDate} - ${edu.endDate}`}
            location={edu.location}
            summary={edu.summary}
            highlights={edu.highlights}
          />
        ))}
      </div>
    </section>
  )
}
