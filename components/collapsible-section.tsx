"use client"

import { useState } from "react"
import type { LucideIcon } from "lucide-react"
import { ChevronDown } from "lucide-react"
import { AnimateOnScroll } from "./animate-on-scroll"

interface CollapsibleSectionProps {
  icon: LucideIcon
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export function CollapsibleSection({ 
  icon: Icon, 
  title, 
  children, 
  defaultOpen = false 
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <section>
      <AnimateOnScroll animation="fade-left">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center gap-3 group cursor-pointer"
          aria-expanded={isOpen}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 transition-all group-hover:bg-primary/20 group-hover:scale-110 sm:h-10 sm:w-10">
            <Icon className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
          </div>
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">{title}</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 transition-all group-hover:bg-primary/20 sm:h-9 sm:w-9">
            <ChevronDown 
              className={`h-4 w-4 text-primary transition-transform duration-300 sm:h-5 sm:w-5 ${
                isOpen ? "rotate-180" : ""
              }`} 
            />
          </div>
        </button>
      </AnimateOnScroll>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[5000px] opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        {children}
      </div>
    </section>
  )
}
