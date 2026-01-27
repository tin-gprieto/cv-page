"use client"

import { useState } from "react"
import { Languages, Download, Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { cvConfig } from "@/lib/config"

interface NavbarProps {
  lang: "es" | "en"
  onToggleLang: () => void
}

const translations = cvConfig.translations.navbar

export function Navbar({ lang, onToggleLang }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const t = translations[lang]

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = lang === "es" ? "/config/rendercv_output/Martín_González_Prieto_CV.pdf" : "/config/rendercv_output/Martin_Gonzalez_Prieto_CV.pdf"
    link.download = lang === "es" ? "Martín_González_Prieto_CV.pdf" : "Martin_Gonzalez_Prieto_CV_EN.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="font-semibold text-foreground">
          <span className="text-primary">&lt;/MG</span>P<span className="text-primary">&gt;</span>
        </div>

        {/* Desktop menu */}
        <div className="hidden items-center gap-2 sm:flex">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center rounded-md border border-border bg-secondary p-2 text-secondary-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="Toggle theme"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </button>
          <button
            onClick={onToggleLang}
            className="flex items-center gap-2 rounded-md border border-border bg-secondary px-3 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Languages className="h-4 w-4" />
            {t.translate}
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Download className="h-4 w-4" />
            {t.download}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-md p-2 text-muted-foreground hover:text-foreground sm:hidden"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-sm px-4 py-3 sm:hidden animate-slide-in-right">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => {
                toggleTheme()
                setMobileMenuOpen(false)
              }}
              className="flex items-center gap-2 rounded-md border border-border bg-secondary px-3 py-2.5 text-sm font-medium text-secondary-foreground transition-all hover:border-primary hover:text-primary active:scale-[0.98]"
            >
              <Sun className="h-4 w-4 dark:hidden" />
              <Moon className="hidden h-4 w-4 dark:block" />
              {theme === "dark" ? (lang === "es" ? "Modo claro" : "Light mode") : (lang === "es" ? "Modo oscuro" : "Dark mode")}
            </button>
            <button
              onClick={() => {
                onToggleLang()
                setMobileMenuOpen(false)
              }}
              className="flex items-center gap-2 rounded-md border border-border bg-secondary px-3 py-2.5 text-sm font-medium text-secondary-foreground transition-all hover:border-primary hover:text-primary active:scale-[0.98]"
            >
              <Languages className="h-4 w-4" />
              {t.translate}
            </button>
            <button
              onClick={() => {
                handleDownload()
                setMobileMenuOpen(false)
              }}
              className="flex items-center gap-2 rounded-md bg-primary px-3 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98]"
            >
              <Download className="h-4 w-4" />
              {t.download}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
