import { MapPin, Calendar } from "lucide-react"
import { AnimateOnScroll } from "./animate-on-scroll"

interface TimelineCardProps {
  title: string
  subtitle: string
  date: string
  location: string
  summary: string | null
  highlights: string[]
  index?: number
}

export function TimelineCard({
  title,
  subtitle,
  date,
  location,
  summary,
  highlights,
  index = 0,
}: TimelineCardProps) {
  return (
    <AnimateOnScroll animation="fade-up" delay={index * 100}>
      <div className="group relative rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 sm:p-6">
        <div className="absolute left-0 top-0 h-full w-1 rounded-l-lg bg-primary/20 transition-all duration-300 group-hover:bg-primary group-hover:w-1.5" />
        
        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-foreground text-sm sm:text-base leading-tight">{title}</h3>
            <p className="text-xs sm:text-sm text-primary mt-0.5">{subtitle}</p>
          </div>
          <div className="flex flex-row gap-3 text-xs text-muted-foreground sm:flex-col sm:items-end sm:gap-1">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3 flex-shrink-0" />
              <span className="whitespace-nowrap">{date}</span>
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3 flex-shrink-0" />
              <span className="whitespace-nowrap">{location}</span>
            </span>
          </div>
        </div>

        {summary && <p className="mb-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">{summary}</p>}

        {highlights.length > 0 && (
          <ul className="space-y-1.5">
            {highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60 transition-colors group-hover:bg-primary" />
                {highlight}
              </li>
            ))}
          </ul>
        )}
      </div>
    </AnimateOnScroll>
  )
}
