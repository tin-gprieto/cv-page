// ============================================================================
// CV Configuration - All hardcoded data centralized here
// ============================================================================

// ============================================================================
// Type Definitions
// ============================================================================

export interface SocialNetwork {
  network: string
  username: string
  url: string
}

export interface HeaderData {
  name: string
  headline: {
    es: string
    en: string
  }
  location: string
  email: string
  phone: string
  socialNetworks: SocialNetwork[]
}

export interface ExperienceEntry {
  company: string
  position: string
  startDate: string
  endDate: string
  location: string
  summary: string
  highlights: string[]
}

export interface EducationEntry {
  institution: string
  area: string
  degree: string
  startDate: string
  endDate: string
  location: string
  summary: string | null
  highlights: string[]
}

export interface CertificationEntry {
  name: string
  issuer: string
  url: string
  summary: string
  highlights: string[]
}

export interface ProjectEntry {
  name: string
  url: string
  image: string
  summary: string
  highlights: string[]
}

export interface LanguageEntry {
  language: string
  level: string
  percentage: number
}

export interface TechnicalSkillCategory {
  label: string
  iconName: "Code" | "Globe" | "Brain" | "BarChart3" | "Database" | "Wrench" | "FileSpreadsheet"
  items: string[]
}

export interface SoftSkills {
  label: string
  items: string[]
}

export interface LanguagesSkill {
  label: string
  items: LanguageEntry[]
}

export interface SkillsData {
  title: string
  technical: TechnicalSkillCategory[]
  soft: SoftSkills
  languages: LanguagesSkill
}

export interface ContactTranslations {
  title: string
  description: string
  nameLabel: string
  namePlaceholder: string
  emailLabel: string
  emailPlaceholder: string
  subjectLabel: string
  subjectPlaceholder: string
  messageLabel: string
  messagePlaceholder: string
  send: string
  sending: string
  successTitle: string
  successMessage: string
  errorTitle: string
  errorMessage: string
}

export interface NavbarTranslations {
  translate: string
  download: string
}

export interface SectionTitles {
  experience: { es: string; en: string }
  education: { es: string; en: string }
  skills: { es: string; en: string }
  projects: { es: string; en: string }
  certifications: { es: string; en: string }
  languages: { es: string; en: string }
  contact: { es: string; en: string }
}

export interface CVConfig {
  header: HeaderData
  experience: {
    es: ExperienceEntry[]
    en: ExperienceEntry[]
  }
  education: {
    es: EducationEntry[]
    en: EducationEntry[]
  }
  certifications: {
    es: CertificationEntry[]
    en: CertificationEntry[]
  }
  projects: {
    es: ProjectEntry[]
    en: ProjectEntry[]
  }
  languages: {
    es: LanguageEntry[]
    en: LanguageEntry[]
  }
  skills: {
    es: SkillsData
    en: SkillsData
  }
  translations: {
    contact: {
      es: ContactTranslations
      en: ContactTranslations
    }
    navbar: {
      es: NavbarTranslations
      en: NavbarTranslations
    }
  }
  sectionTitles: SectionTitles
}

// ============================================================================
// CV Data - Loaded from pre-built JSON (generated from YAML files)
// ============================================================================
import cvConfigData from "./cv-config.json"

export const cvConfig: CVConfig = cvConfigData as CVConfig
