"use client"

import { MapPin } from "lucide-react"
import { AnimateOnScroll } from "./animate-on-scroll"
import { cvConfig } from "@/lib/config"
import { ContactMedia } from "./contact_media"

interface HeaderProps {
  lang: "es" | "en"
}

const cvData = cvConfig.header

export function Header({ lang }: HeaderProps) {
  return (
    <header className="text-center">
      <AnimateOnScroll animation="scale-up">
        <div className="mb-6">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary animate-pulse-glow sm:h-24 sm:w-24">
            <img src="/pp.jpg" alt="Profile Picture" className="rounded-full" />
          </div>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {cvData.name}
          </h1>
          <p className="mt-3 text-base text-primary sm:text-lg">{cvData.headline[lang]}</p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" delay={100}>
        <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
          <span className="flex items-center gap-2 rounded-md px-2 py-1 transition-all hover:bg-primary/10">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            <span>{cvData.location}</span>
          </span>
        </div>
      </AnimateOnScroll>

      <ContactMedia />

    </header>
  )
}
