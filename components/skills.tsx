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
  LucideIcon,
} from "lucide-react"
import { SectionTitle } from "./section-title"
import { AnimateOnScroll } from "./animate-on-scroll"
import { cvConfig, TechnicalSkillCategory } from "@/lib/config"

interface SkillsProps {
  lang: "es" | "en"
}

// Map icon names to actual icon components
const iconMap: Record<TechnicalSkillCategory["iconName"], LucideIcon> = {
  Code,
  Globe,
  Brain,
  BarChart3,
  Database,
  Wrench,
  FileSpreadsheet,
}

const skillsData = cvConfig.skills

export function Skills({ lang }: SkillsProps) {
  const data = skillsData[lang]

  return (
    <section>
      <SectionTitle icon={Code} title={data.title} />
      <div className="mt-6 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
        {/* Technical Skills - Each as a separate card */}
        {data.technical.map((category, index) => {
          const Icon = iconMap[category.iconName]
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
