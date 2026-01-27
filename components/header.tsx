"use client"

import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import { AnimateOnScroll } from "./animate-on-scroll"
import { cvConfig } from "@/lib/config"

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
          <a
            href={`mailto:${cvData.email}`}
            className="flex items-center gap-2 rounded-md px-2 py-1 transition-all hover:bg-primary/10 hover:text-primary"
          >
            <Mail className="h-4 w-4 flex-shrink-0" />
            <span className="truncate">{cvData.email}</span>
          </a>
          <span className="flex items-center gap-2 rounded-md px-2 py-1 transition-all hover:bg-primary/10">
            <Phone className="h-4 w-4 flex-shrink-0" />
            <span>{cvData.phone}</span>
          </span>
          <span className="flex items-center gap-2 rounded-md px-2 py-1 transition-all hover:bg-primary/10">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            <span>{cvData.location}</span>
          </span>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" delay={200}>
        <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4">
          {cvData.socialNetworks.map((social) => (
            <a
              key={social.network}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-center gap-2 rounded-md bg-secondary px-4 py-2.5 text-sm font-medium text-secondary-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-105 sm:w-auto"
            >
              {social.network === "LinkedIn" ? (
                <Linkedin className="h-4 w-4 transition-transform group-hover:scale-110" />
              ) : (
                <Github className="h-4 w-4 transition-transform group-hover:scale-110" />
              )}
              <span>{social.username}</span>
            </a>
          ))}
        </div>
      </AnimateOnScroll>
    </header>
  )
}
