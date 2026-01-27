/**
 * Build CV Config
 * 
 * This script reads both Spanish and English YAML files and generates
 * a static JSON config file that can be imported by the frontend.
 * 
 * Run with: pnpm build:config
 */

import fs from "fs"
import path from "path"
import yaml from "js-yaml"

// ============================================================================
// YAML Types
// ============================================================================

interface YAMLSocialNetwork {
  network: string
  username: string
}

interface YAMLEducation {
  institution: string
  area: string
  degree: string
  start_date: string
  end_date: string
  location: string
  summary?: string | null
  highlights?: string[]
}

interface YAMLExperience {
  company: string
  position: string
  start_date: string
  end_date: string
  location: string
  summary: string
  highlights?: string[]
}

interface YAMLCertification {
  name: string
  summary: string
  highlights?: string[]
}

interface YAMLProject {
  name: string
  summary: string
  highlights?: string[]
}

interface YAMLLocale {
  language?: string
  present?: string
  month_abbreviations?: string[]
}

interface YAMLData {
  cv: {
    name: string
    headline: string
    location: string
    email: string
    phone: string
    social_networks?: YAMLSocialNetwork[]
    sections: {
      education?: YAMLEducation[]
      experience?: YAMLExperience[]
      languages?: Array<{ bullet: string }>
      technical_skills?: Array<{ label: string; details: string }>
      soft_skills?: Array<{ bullet: string }>
      certifications?: YAMLCertification[]
      proyects?: YAMLProject[]
    }
  }
  locale?: YAMLLocale
}

// ============================================================================
// Output Types
// ============================================================================

interface SocialNetwork {
  network: string
  username: string
  url: string
}

interface ExperienceEntry {
  company: string
  position: string
  startDate: string
  endDate: string
  location: string
  summary: string
  highlights: string[]
}

interface EducationEntry {
  institution: string
  area: string
  degree: string
  startDate: string
  endDate: string
  location: string
  summary: string | null
  highlights: string[]
}

interface CertificationEntry {
  name: string
  issuer: string
  url: string
  summary: string
  highlights: string[]
}

interface ProjectEntry {
  name: string
  url: string
  image: string
  summary: string
  highlights: string[]
}

interface LanguageEntry {
  language: string
  level: string
  percentage: number
}

interface TechnicalSkillCategory {
  label: string
  iconName: string
  items: string[]
}

interface SkillsData {
  title: string
  technical: TechnicalSkillCategory[]
  soft: { label: string; items: string[] }
  languages: { label: string; items: LanguageEntry[] }
}

// ============================================================================
// Helper Functions
// ============================================================================

const SOCIAL_NETWORK_URLS: Record<string, string> = {
  LinkedIn: "https://linkedin.com/in/",
  GitHub: "https://github.com/",
  Twitter: "https://twitter.com/",
}

const SKILL_ICON_MAP: Record<string, string> = {
  // Spanish
  "Lenguajes de programación": "Code",
  "Desarrollo web": "Globe",
  "Machine Learning y Deep Learning": "Brain",
  "Herramientas de visualización de datos": "BarChart3",
  "Sistemas de gestión de bases de datos (SGBD)": "Database",
  "Herramientas": "Wrench",
  "Ofimática": "FileSpreadsheet",
  // English
  "Programming languages": "Code",
  "Web development": "Globe",
  "Machine Learning and Deep Learning": "Brain",
  "Data visualization tools": "BarChart3",
  "Database management systems (DBMS)": "Database",
  "Tools": "Wrench",
  "Office automation": "FileSpreadsheet",
}

const LANGUAGE_LEVEL_PERCENTAGE: Record<string, number> = {
  "Nativo": 100, "Native": 100,
  "Avanzado": 85, "Advanced": 85,
  "Intermedio": 65, "Intermediate": 65,
  "Básico": 35, "Basic": 35,
}

const PROJECT_IMAGES: Record<string, string> = {
  "Agentes Autónomos de Prevención": "/images/project-drones.jpg",
  "Autonomous Prevention Agents": "/images/project-drones.jpg",
  "Toolbox para C": "/images/project-toolbox.jpg",
  "Toolbox for C": "/images/project-toolbox.jpg",
  "Darkness Awesome Theme": "/images/project-awesome.jpg",
}

function formatDate(dateStr: string, locale: YAMLLocale = {}): string {
  if (dateStr === "present" || dateStr === "presente") {
    return locale.present || "Present"
  }
  
  const defaultMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const monthAbbr = locale.month_abbreviations || defaultMonths
  
  const [year, month] = dateStr.split("-")
  const monthIndex = parseInt(month, 10) - 1
  return `${monthAbbr[monthIndex]} ${year}`
}

function parseMarkdownLink(text: string): { name: string; url: string } {
  const match = text.match(/\[([^\]]+)\]\(([^)]+)\)/)
  return match ? { name: match[1], url: match[2] } : { name: text, url: "" }
}

function parseCertification(certName: string): { name: string; issuer: string; url: string } {
  const { name, url } = parseMarkdownLink(certName)
  const issuerMatch = name.match(/^(.+?)\s*\(([^)]+)\)\s*$/)
  return issuerMatch
    ? { name: issuerMatch[1], issuer: issuerMatch[2], url }
    : { name, issuer: "", url }
}

function parseLanguageBullet(bullet: string): { language: string; level: string } {
  const parts = bullet.split("—").map(s => s.trim())
  return parts.length >= 2 ? { language: parts[0], level: parts[1] } : { language: bullet, level: "" }
}

function cleanHighlights(highlights?: string[]): string[] {
  if (!highlights) return []
  return highlights.map(h => h.replace(/\.\s*$/, ""))
}

function getProjectImage(name: string): string {
  return PROJECT_IMAGES[name] || "/images/project-default.jpg"
}

function getIconName(label: string): string {
  return SKILL_ICON_MAP[label] || "Code"
}

// ============================================================================
// Transform YAML to Config
// ============================================================================

function transformYAML(yamlData: YAMLData, lang: "es" | "en") {
  const { cv, locale = {} } = yamlData
  const sections = cv.sections

  // Social networks
  const socialNetworks: SocialNetwork[] = (cv.social_networks || []).map(sn => ({
    network: sn.network,
    username: sn.username,
    url: `${SOCIAL_NETWORK_URLS[sn.network] || ""}${sn.username}`,
  }))

  // Experience
  const experience: ExperienceEntry[] = (sections.experience || []).map(exp => ({
    company: exp.company,
    position: exp.position,
    startDate: formatDate(exp.start_date, locale),
    endDate: formatDate(exp.end_date, locale),
    location: exp.location,
    summary: exp.summary,
    highlights: cleanHighlights(exp.highlights),
  }))

  // Education
  const education: EducationEntry[] = (sections.education || []).map(edu => ({
    institution: edu.institution,
    area: edu.area,
    degree: edu.degree,
    startDate: formatDate(edu.start_date, locale),
    endDate: formatDate(edu.end_date, locale),
    location: edu.location,
    summary: edu.summary || null,
    highlights: cleanHighlights(edu.highlights),
  }))

  // Certifications
  const certifications: CertificationEntry[] = (sections.certifications || []).map(cert => {
    const parsed = parseCertification(cert.name)
    return {
      name: parsed.name,
      issuer: parsed.issuer,
      url: parsed.url,
      summary: cert.summary,
      highlights: cleanHighlights(cert.highlights),
    }
  })

  // Projects
  const projects: ProjectEntry[] = (sections.proyects || []).map(proj => {
    const { name, url } = parseMarkdownLink(proj.name)
    return {
      name,
      url,
      image: getProjectImage(name),
      summary: proj.summary,
      highlights: cleanHighlights(proj.highlights),
    }
  })

  // Languages
  const languages: LanguageEntry[] = (sections.languages || []).map(lang => {
    const { language, level } = parseLanguageBullet(lang.bullet)
    return {
      language,
      level,
      percentage: LANGUAGE_LEVEL_PERCENTAGE[level] || 50,
    }
  })

  // Technical skills
  const technicalSkills: TechnicalSkillCategory[] = (sections.technical_skills || []).map(skill => ({
    label: skill.label,
    iconName: getIconName(skill.label),
    items: skill.details.split(",").map(s => s.trim()),
  }))

  // Soft skills
  const softSkills: string[] = (sections.soft_skills || []).map(s => s.bullet)

  // Skills data
  const skills: SkillsData = {
    title: lang === "es" ? "Habilidades" : "Skills",
    technical: technicalSkills,
    soft: {
      label: lang === "es" ? "Habilidades Blandas" : "Soft Skills",
      items: softSkills,
    },
    languages: {
      label: lang === "es" ? "Idiomas" : "Languages",
      items: languages,
    },
  }

  return {
    header: {
      name: cv.name,
      headline: cv.headline,
      location: cv.location,
      email: cv.email,
      phone: cv.phone,
      socialNetworks,
    },
    experience,
    education,
    certifications,
    projects,
    languages,
    skills,
  }
}

// ============================================================================
// Main
// ============================================================================

function buildConfig(): void {
  console.log("📦 Building CV config from YAML files...")

  const configDir = path.join(process.cwd(), "public", "config")
  
  // Load Spanish YAML
  const spanishPath = path.join(configDir, "Martín_González_Prieto_CV.yaml")
  const spanishData = yaml.load(fs.readFileSync(spanishPath, "utf8")) as YAMLData
  console.log("✅ Loaded Spanish YAML")

  // Load English YAML (or use Spanish as fallback)
  const englishPath = path.join(configDir, "Martín_González_Prieto_CV_EN.yaml")
  let englishData: YAMLData
  if (fs.existsSync(englishPath)) {
    englishData = yaml.load(fs.readFileSync(englishPath, "utf8")) as YAMLData
    console.log("✅ Loaded English YAML")
  } else {
    console.log("⚠️ English YAML not found, using Spanish data")
    englishData = spanishData
  }

  // Transform both
  const esData = transformYAML(spanishData, "es")
  const enData = transformYAML(englishData, "en")

  // Build final config
  const config = {
    header: {
      name: esData.header.name,
      headline: {
        es: esData.header.headline,
        en: enData.header.headline,
      },
      location: esData.header.location,
      email: esData.header.email,
      phone: esData.header.phone,
      socialNetworks: esData.header.socialNetworks,
    },
    experience: { es: esData.experience, en: enData.experience },
    education: { es: esData.education, en: enData.education },
    certifications: { es: esData.certifications, en: enData.certifications },
    projects: { es: esData.projects, en: enData.projects },
    languages: { es: esData.languages, en: enData.languages },
    skills: { es: esData.skills, en: enData.skills },
    translations: {
      contact: {
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
      },
      navbar: {
        es: { translate: "English", download: "Descargar CV" },
        en: { translate: "Español", download: "Download CV" },
      },
    },
    sectionTitles: {
      experience: { es: "Experiencia Profesional", en: "Professional Experience" },
      education: { es: "Educación", en: "Education" },
      skills: { es: "Habilidades", en: "Skills" },
      projects: { es: "Proyectos", en: "Projects" },
      certifications: { es: "Certificaciones", en: "Certifications" },
      languages: { es: "Idiomas", en: "Languages" },
      contact: { es: "Contacto", en: "Contact" },
    },
  }

  // Write config
  const outputPath = path.join(process.cwd(), "lib", "cv-config.json")
  fs.writeFileSync(outputPath, JSON.stringify(config, null, 2), "utf8")
  console.log("✅ Config built:", outputPath)
}

buildConfig()
