"use client"

import { Mail, Linkedin, Github } from "lucide-react"
import { AnimateOnScroll } from "./animate-on-scroll"
import { cvConfig } from "@/lib/config"

const cvData = cvConfig.header

export function ContactMedia( {hasText = true}: {hasText?: boolean} ) {
  return (
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
                {hasText && <span>{social.username}</span>}
                
            </a>
            ))}
            <a
            href={`mailto:${cvData.email}`}
            target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-2 rounded-md bg-secondary px-4 py-2.5 text-sm font-medium text-secondary-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-105 sm:w-auto"
            >
            <Mail className="h-4 w-4 flex-shrink-0" />
            {hasText && <span className="truncate">{cvData.email}</span>}
            </a>
        </div>
    </AnimateOnScroll>
  )
}