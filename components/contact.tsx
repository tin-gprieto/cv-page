"use client"

import React from "react"

import { useState } from "react"
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react"
import { SectionTitle } from "./section-title"
import { AnimateOnScroll } from "./animate-on-scroll"

interface ContactProps {
  lang: "es" | "en"
}

const translations = {
  es: {
    title: "Contacto",
    description: "¿Tienes alguna pregunta o propuesta? No dudes en contactarme.",
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre",
    emailLabel: "Email",
    emailPlaceholder: "tu@email.com",
    subjectLabel: "Asunto",
    subjectPlaceholder: "Asunto del mensaje",
    messageLabel: "Mensaje",
    messagePlaceholder: "Escribe tu mensaje aquí...",
    send: "Enviar mensaje",
    sending: "Enviando...",
    successTitle: "Mensaje enviado",
    successMessage: "Gracias por contactarme. Te responderé lo antes posible.",
    errorTitle: "Error",
    errorMessage: "Hubo un problema al enviar el mensaje. Intenta nuevamente.",
  },
  en: {
    title: "Contact",
    description: "Have any questions or proposals? Feel free to contact me.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@email.com",
    subjectLabel: "Subject",
    subjectPlaceholder: "Message subject",
    messageLabel: "Message",
    messagePlaceholder: "Write your message here...",
    send: "Send message",
    sending: "Sending...",
    successTitle: "Message sent",
    successMessage: "Thanks for reaching out. I will reply as soon as possible.",
    errorTitle: "Error",
    errorMessage: "There was a problem sending the message. Please try again.",
  },
}

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
    <section>
      <SectionTitle icon={Mail} title={t.title} />
      <div className="mt-6">
        <AnimateOnScroll animation="fade-up">
          <p className="mb-6 text-center text-sm sm:text-base text-muted-foreground">{t.description}</p>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" delay={100}>
          <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-3 sm:space-y-4">
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-medium text-foreground">
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.namePlaceholder}
                  className="w-full rounded-md border border-border bg-input px-3 sm:px-4 py-2 text-sm sm:text-base text-foreground placeholder:text-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-medium text-foreground">
                  {t.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t.emailPlaceholder}
                  className="w-full rounded-md border border-border bg-input px-3 sm:px-4 py-2 text-sm sm:text-base text-foreground placeholder:text-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-medium text-foreground">
                {t.subjectLabel}
              </label>
              <input
                type="text"
                id="subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder={t.subjectPlaceholder}
                className="w-full rounded-md border border-border bg-input px-3 sm:px-4 py-2 text-sm sm:text-base text-foreground placeholder:text-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-medium text-foreground">
                {t.messageLabel}
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={t.messagePlaceholder}
                className="w-full resize-none rounded-md border border-border bg-input px-3 sm:px-4 py-2 text-sm sm:text-base text-foreground placeholder:text-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {status === "success" && (
              <div className="flex items-center gap-2 rounded-md bg-accent/20 p-3 text-xs sm:text-sm text-accent animate-slide-in-right">
                <CheckCircle className="h-4 w-4 flex-shrink-0" />
                <span>{t.successMessage}</span>
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-2 rounded-md bg-destructive/20 p-3 text-xs sm:text-sm text-destructive animate-slide-in-right">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                <span>{t.errorMessage}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="group flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 disabled:cursor-not-allowed disabled:opacity-50 active:scale-[0.98]"
            >
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              {status === "sending" ? t.sending : t.send}
            </button>
          </form>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
