import { Briefcase } from "lucide-react"
import { SectionTitle } from "./section-title"
import { TimelineCard } from "./timeline-card"
import { cvConfig } from "@/lib/config"

interface ExperienceProps {
  lang: "es" | "en"
}

const experienceData = cvConfig.experience
const sectionTitle = cvConfig.sectionTitles.experience

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
