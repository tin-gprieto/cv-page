import type { LucideIcon } from "lucide-react"

interface SectionTitleProps {
  icon: LucideIcon
  title: string
}

export function SectionTitle({ icon: Icon, title }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  )
}
