import { MapPin, Calendar } from "lucide-react"

interface TimelineCardProps {
  title: string
  subtitle: string
  date: string
  location: string
  summary: string | null
  highlights: string[]
}

export function TimelineCard({
  title,
  subtitle,
  date,
  location,
  summary,
  highlights,
}: TimelineCardProps) {
  return (
    <div className="group relative rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50">
      <div className="absolute left-0 top-0 h-full w-1 rounded-l-lg bg-primary/20 transition-colors group-hover:bg-primary" />
      
      <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-primary">{subtitle}</p>
        </div>
        <div className="flex flex-col items-start gap-1 text-xs text-muted-foreground sm:items-end">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {location}
          </span>
        </div>
      </div>

      {summary && <p className="mb-3 text-sm text-muted-foreground">{summary}</p>}

      {highlights.length > 0 && (
        <ul className="space-y-1">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
              {highlight}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
