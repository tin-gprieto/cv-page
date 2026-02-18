"use client"

import React from "react"

import { useState } from "react"
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react"
import { CollapsibleSection } from "./collapsible-section"
import { AnimateOnScroll } from "./animate-on-scroll"
import { cvConfig } from "@/lib/config"
import { ContactMedia } from "./contact_media"

interface ContactProps {
  lang: "es" | "en"
}

const translations = cvConfig.translations.contact

export function Contact({ lang }: ContactProps) {
  const t = translations[lang]
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    // Create mailto link with form data
    const mailtoLink = `mailto:mgonzalezp@fi.uba.ar?subject=${encodeURIComponent(
      `[Web CV] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`

    // Open default email client
    window.location.href = mailtoLink

    // Show success state
    setTimeout(() => {
      setStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setStatus("idle"), 3000)
    }, 500)
  }

  return (
    <CollapsibleSection icon={Mail} title={t.title}>
      <div>
        <AnimateOnScroll animation="fade-up">
          <p className="mb-6 text-center text-sm sm:text-base text-muted-foreground">{t.description}</p>
        </AnimateOnScroll>
      </div>
      <div>
        <ContactMedia hasText={false} />
      </div>
    </CollapsibleSection>
  )
}
