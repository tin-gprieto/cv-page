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
import { AnimateOnScroll } from "./animate-on-scroll"

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
      <div className="mt-6 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
        {/* Technical Skills - Each as a separate card */}
        {data.technical.map((category, index) => {
          const Icon = category.icon
          return (
            <AnimateOnScroll key={index} animation="scale-up" delay={index * 50}>
              <div className="group h-full rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 sm:p-5">
                <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold text-primary sm:mb-4 sm:text-sm">
                  <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                  {category.label}
                </h3>
                <ul className="space-y-1 sm:space-y-1.5">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground sm:text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/50 transition-colors group-hover:bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          )
        })}

        {/* Soft Skills - Separate card */}
        <AnimateOnScroll animation="scale-up" delay={350}>
          <div className="group h-full rounded-lg border border-border bg-card p-4 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 sm:p-5">
            <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold text-accent sm:mb-4 sm:text-sm">
              <Lightbulb className="h-4 w-4 transition-transform group-hover:scale-110" />
              {data.soft.label}
            </h3>
            <ul className="space-y-1 sm:space-y-1.5">
              {data.soft.items.map((skill, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground sm:text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/50 transition-colors group-hover:bg-accent" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>

        {/* Languages - Separate card */}
        <AnimateOnScroll animation="scale-up" delay={400}>
          <div className="group h-full rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 sm:p-5">
            <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold text-primary sm:mb-4 sm:text-sm">
              <LanguagesIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
              {data.languages.label}
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {data.languages.items.map((item, index) => (
                <div key={index}>
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-xs text-foreground sm:text-sm">{item.language}</span>
                    <span className="text-xs text-primary">{item.level}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
