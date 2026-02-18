import { GraduationCap } from "lucide-react"
import { CollapsibleSection } from "./collapsible-section"
import { TimelineCard } from "./timeline-card"
import { cvConfig } from "@/lib/config"

interface EducationProps {
  lang: "es" | "en"
}

const educationData = cvConfig.education
const sectionTitle = cvConfig.sectionTitles.education

export function Education({ lang }: EducationProps) {
  const data = educationData[lang]

  return (
    <CollapsibleSection icon={GraduationCap} title={sectionTitle[lang]}>
      <div className="space-y-4 sm:space-y-6">
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
    </CollapsibleSection>
  )
}
