import { Languages as LanguagesIcon } from "lucide-react"
import { SectionTitle } from "./section-title"
import { cvConfig } from "@/lib/config"

interface LanguagesProps {
  lang: "es" | "en"
}

const languagesData = cvConfig.languages
const sectionTitle = cvConfig.sectionTitles.languages

export function Languages({ lang }: LanguagesProps) {
  const languages = languagesData[lang]

  return (
    <section>
      <SectionTitle icon={LanguagesIcon} title={sectionTitle[lang]} />
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {languages.map((item, index) => (
          <div key={index} className="rounded-lg border border-border bg-card p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-medium text-foreground">{item.language}</span>
              <span className="text-sm text-primary">{item.level}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
