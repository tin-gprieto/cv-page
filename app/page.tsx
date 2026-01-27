"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Header } from "@/components/header"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Certifications } from "@/components/certifications"
import { Contact } from "@/components/contact"

const footerText = {
  es: "Última actualización: Enero 2026",
  en: "Last updated: January 2026",
}

export default function CVPage() {
  const [lang, setLang] = useState<"es" | "en">("es")

  const toggleLang = () => {
    setLang((prev) => (prev === "es" ? "en" : "es"))
  }

  return (
    <>
      <Navbar lang={lang} onToggleLang={toggleLang} />
      <main className="min-h-screen bg-background pt-14 sm:pt-16">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <Header lang={lang} />
          <div className="mt-8 space-y-8 sm:mt-12 sm:space-y-12">
            <Education lang={lang} />
            <Experience lang={lang} />
            <Skills lang={lang} />
            <Projects lang={lang} />
            <Certifications lang={lang} />
            <Contact lang={lang} />
          </div>
          <footer className="mt-12 border-t border-border pt-6 text-center sm:mt-16 sm:pt-8">
            <p className="text-xs sm:text-sm text-muted-foreground">{footerText[lang]}</p>
          </footer>
        </div>
      </main>
    </>
  )
}
