/**
 * Generate English CV YAML
 * 
 * This script reads the Spanish CV YAML and translates it to English,
 * creating a new YAML file with the same structure.
 * 
 * Run with: pnpm translate
 */

import fs from "fs"
import path from "path"
import yaml from "js-yaml"
import translate from "translate"

// Configure translate to use Google (free)
translate.engine = "google"

// ============================================================================
// Types
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

interface YAMLLanguage {
  bullet: string
}

interface YAMLTechnicalSkill {
  label: string
  details: string
}

interface YAMLSoftSkill {
  bullet: string
}

interface YAMLLocale {
  language: string
  last_updated: string
  month: string
  months: string
  year: string
  years: string
  present: string
  month_abbreviations: string[]
  month_names: string[]
}

interface YAMLData {
  cv: {
    name: string
    headline: string
    location: string
    email: string
    phone: string
    photo?: string | null
    website?: string | null
    social_networks?: YAMLSocialNetwork[]
    sections: {
      education?: YAMLEducation[]
      experience?: YAMLExperience[]
      languages?: YAMLLanguage[]
      technical_skills?: YAMLTechnicalSkill[]
      soft_skills?: YAMLSoftSkill[]
      certifications?: YAMLCertification[]
      proyects?: YAMLProject[]
    }
  }
  design?: unknown
  locale?: YAMLLocale
  settings?: unknown
}

// ============================================================================
// Translation Helper
// ============================================================================

async function translateText(text: string): Promise<string> {
  if (!text || text.trim() === "") return text
  
  try {
    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 150))
    const result = await translate(text)
    return result
  } catch (error) {
    console.error(`  ⚠️ Failed to translate: "${text.substring(0, 50)}..."`)
    return text
  }
}

async function translateArray(texts: string[]): Promise<string[]> {
  const results: string[] = []
  for (const text of texts) {
    results.push(await translateText(text))
  }
  return results
}

// ============================================================================
// Main Generator
// ============================================================================

async function generateEnglishYAML(): Promise<void> {
  console.log("🌐 Starting English YAML generation...")

  // Load Spanish YAML
  const spanishPath = path.join(process.cwd(), "public", "config", "Martín_González_Prieto_CV.yaml")
  const spanishContent = fs.readFileSync(spanishPath, "utf8")
  const spanishData = yaml.load(spanishContent) as YAMLData

  // Clone the data for English version
  const englishData: YAMLData = JSON.parse(JSON.stringify(spanishData))
  const cv = englishData.cv
  const sections = cv.sections

  // Translate header
  console.log("📝 Translating header...")
  cv.headline = await translateText(cv.headline)

  // Translate experience
  console.log("💼 Translating experience...")
  if (sections.experience) {
    for (const exp of sections.experience) {
      exp.position = await translateText(exp.position)
      exp.summary = await translateText(exp.summary)
      if (exp.highlights) {
        exp.highlights = await translateArray(exp.highlights)
      }
    }
  }

  // Translate education
  console.log("🎓 Translating education...")
  if (sections.education) {
    for (const edu of sections.education) {
      edu.area = await translateText(edu.area)
      edu.degree = await translateText(edu.degree)
      if (edu.summary) {
        edu.summary = await translateText(edu.summary)
      }
      if (edu.highlights) {
        edu.highlights = await translateArray(edu.highlights)
      }
    }
  }

  // Translate certifications
  console.log("🏆 Translating certifications...")
  if (sections.certifications) {
    for (const cert of sections.certifications) {
      cert.summary = await translateText(cert.summary)
      if (cert.highlights) {
        cert.highlights = await translateArray(cert.highlights)
      }
    }
  }

  // Translate projects
  console.log("🚀 Translating projects...")
  if (sections.proyects) {
    for (const proj of sections.proyects) {
      // Extract project name from markdown link and translate
      const nameMatch = proj.name.match(/\[([^\]]+)\]\(([^)]+)\)/)
      if (nameMatch) {
        const translatedName = await translateText(nameMatch[1])
        proj.name = `[${translatedName}](${nameMatch[2]})`
      }
      proj.summary = await translateText(proj.summary)
      if (proj.highlights) {
        proj.highlights = await translateArray(proj.highlights)
      }
    }
  }

  // Translate technical skills labels
  console.log("🛠️ Translating skills...")
  if (sections.technical_skills) {
    for (const skill of sections.technical_skills) {
      skill.label = await translateText(skill.label)
    }
  }

  // Translate soft skills
  if (sections.soft_skills) {
    for (const skill of sections.soft_skills) {
      skill.bullet = await translateText(skill.bullet)
    }
  }

  // Translate languages
  console.log("🗣️ Translating languages...")
  if (sections.languages) {
    for (const lang of sections.languages) {
      lang.bullet = await translateText(lang.bullet)
    }
  }

  // Update locale for English
  if (englishData.locale) {
    englishData.locale.language = "english"
    englishData.locale.last_updated = "Last updated:"
    englishData.locale.month = "month"
    englishData.locale.months = "months"
    englishData.locale.year = "year"
    englishData.locale.years = "years"
    englishData.locale.present = "present"
    englishData.locale.month_abbreviations = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]
    englishData.locale.month_names = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ]
  }

  // Save English YAML
  const englishPath = path.join(process.cwd(), "public", "config", "Martín_González_Prieto_CV_EN.yaml")
  const englishYAML = yaml.dump(englishData, { 
    lineWidth: -1,
    noRefs: true,
    quotingType: '"',
    forceQuotes: false,
  })
  
  fs.writeFileSync(englishPath, englishYAML, "utf8")
  console.log("✅ English YAML generated:", englishPath)
}

// Run
generateEnglishYAML().catch(console.error)
