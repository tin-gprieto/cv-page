import { Award, ExternalLink } from "lucide-react"
import { CollapsibleSection } from "./collapsible-section"
import { AnimateOnScroll } from "./animate-on-scroll"
import { cvConfig } from "@/lib/config"

interface CertificationsProps {
  lang: "es" | "en"
}

const certificationsData = cvConfig.certifications
const sectionTitle = cvConfig.sectionTitles.certifications

export function Certifications({ lang }: CertificationsProps) {
  const certifications = certificationsData[lang]

  return (
    <CollapsibleSection icon={Award} title={sectionTitle[lang]}>
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 sm:gap-4">
        {certifications.map((cert, index) => (
          <AnimateOnScroll key={index} animation="fade-right" delay={index * 100}>
            <div className="group h-full rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 sm:p-5">
              <div className="mb-3 flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-foreground text-sm sm:text-base leading-tight">{cert.name}</h3>
                  <p className="text-xs sm:text-sm text-primary mt-0.5">{cert.issuer}</p>
                </div>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 rounded-md p-2 text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110"
                  aria-label={`Ver certificación ${cert.name}`}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <p className="mb-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">{cert.summary}</p>
              <ul className="space-y-1">
                {cert.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary transition-transform group-hover:scale-150" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </CollapsibleSection>
  )
}
