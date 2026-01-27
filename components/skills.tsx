import {
  Code,
  Lightbulb,
  Globe,
  Brain,
  Database,
  BarChart3,
  Wrench,
  FileSpreadsheet,
  Languages as LanguagesIcon,
} from "lucide-react"
import { SectionTitle } from "./section-title"

interface SkillsProps {
  lang: "es" | "en"
}

const skillsData = {
  es: {
    title: "Habilidades",
    technical: [
      {
        label: "Lenguajes de programación",
        icon: Code,
        items: ["C", "Python", "Rust", "JavaScript", "TypeScript", "Java", "Assembly", "SQL", "Bash (Shell Scripting)"],
      },
      {
        label: "Desarrollo web",
        icon: Globe,
        items: ["HTML", "CSS", "SASS", "React", "Angular JS"],
      },
      {
        label: "Machine Learning y Deep Learning",
        icon: Brain,
        items: ["PyTorch", "TensorFlow", "Scikit-learn", "Keras"],
      },
      {
        label: "Visualización de datos",
        icon: BarChart3,
        items: ["Matplotlib", "Seaborn", "Plotly"],
      },
      {
        label: "Bases de datos (SGBD)",
        icon: Database,
        items: ["MongoDB", "PostgreSQL", "Pandas"],
      },
      {
        label: "Herramientas",
        icon: Wrench,
        items: ["Docker", "Linux", "Git", "Github", "Makefile", "Jupyter Notebooks"],
      },
      {
        label: "Ofimática",
        icon: FileSpreadsheet,
        items: ["Excel (intermedio)", "Sony Vegas", "GIMP"],
      },
    ],
    soft: {
      label: "Habilidades Blandas",
      items: [
        "Comunicación efectiva y trabajo en equipo",
        "Pensamiento crítico y resolución de problemas",
        "Organización y optimización de tareas",
        "Adaptabilidad a nuevos desafíos",
      ],
    },
    languages: {
      label: "Idiomas",
      items: [
        { language: "Español", level: "Nativo", percentage: 100 },
        { language: "Inglés", level: "Intermedio", percentage: 65 },
      ],
    },
  },
  en: {
    title: "Skills",
    technical: [
      {
        label: "Programming Languages",
        icon: Code,
        items: ["C", "Python", "Rust", "JavaScript", "TypeScript", "Java", "Assembly", "SQL", "Bash (Shell Scripting)"],
      },
      {
        label: "Web Development",
        icon: Globe,
        items: ["HTML", "CSS", "SASS", "React", "Angular JS"],
      },
      {
        label: "Machine Learning & Deep Learning",
        icon: Brain,
        items: ["PyTorch", "TensorFlow", "Scikit-learn", "Keras"],
      },
      {
        label: "Data Visualization",
        icon: BarChart3,
        items: ["Matplotlib", "Seaborn", "Plotly"],
      },
      {
        label: "Databases (DBMS)",
        icon: Database,
        items: ["MongoDB", "PostgreSQL", "Pandas"],
      },
      {
        label: "Tools",
        icon: Wrench,
        items: ["Docker", "Linux", "Git", "Github", "Makefile", "Jupyter Notebooks"],
      },
      {
        label: "Office Tools",
        icon: FileSpreadsheet,
        items: ["Excel (intermediate)", "Sony Vegas", "GIMP"],
      },
    ],
    soft: {
      label: "Soft Skills",
      items: [
        "Effective communication and teamwork",
        "Critical thinking and problem solving",
        "Organization and task optimization",
        "Adaptability to new challenges",
      ],
    },
    languages: {
      label: "Languages",
      items: [
        { language: "Spanish", level: "Native", percentage: 100 },
        { language: "English", level: "Intermediate", percentage: 65 },
      ],
    },
  },
}

export function Skills({ lang }: SkillsProps) {
  const data = skillsData[lang]

  return (
    <section>
      <SectionTitle icon={Code} title={data.title} />
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Technical Skills - Each as a separate card */}
        {data.technical.map((category, index) => {
          const Icon = category.icon
          return (
            <div key={index} className="rounded-lg border border-border bg-card p-5">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-primary">
                <Icon className="h-4 w-4" />
                {category.label}
              </h3>
              <ul className="space-y-1.5">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}

        {/* Soft Skills - Separate card */}
        <div className="rounded-lg border border-border bg-card p-5">
          <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-accent">
            <Lightbulb className="h-4 w-4" />
            {data.soft.label}
          </h3>
          <ul className="space-y-1.5">
            {data.soft.items.map((skill, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/50" />
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Languages - Separate card */}
        <div className="rounded-lg border border-border bg-card p-5">
          <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-primary">
            <LanguagesIcon className="h-4 w-4" />
            {data.languages.label}
          </h3>
          <div className="space-y-4">
            {data.languages.items.map((item, index) => (
              <div key={index}>
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-sm text-foreground">{item.language}</span>
                  <span className="text-xs text-primary">{item.level}</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
