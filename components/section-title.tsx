import type { LucideIcon } from "lucide-react"
import { AnimateOnScroll } from "./animate-on-scroll"

interface SectionTitleProps {
  icon: LucideIcon
  title: string
}

export function SectionTitle({ icon: Icon, title }: SectionTitleProps) {
  return (
    <AnimateOnScroll animation="fade-left">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 transition-all hover:bg-primary/20 hover:scale-110 sm:h-10 sm:w-10">
          <Icon className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
        </div>
        <h2 className="text-xl font-bold text-foreground sm:text-2xl">{title}</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
      </div>
    </AnimateOnScroll>
  )
}
