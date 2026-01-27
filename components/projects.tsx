import Image from "next/image"
import { FolderGit2, ExternalLink } from "lucide-react"
import { SectionTitle } from "./section-title"
import { AnimateOnScroll } from "./animate-on-scroll"
import { cvConfig } from "@/lib/config"

interface ProjectsProps {
  lang: "es" | "en"
}

const projectsData = cvConfig.projects
const sectionTitle = cvConfig.sectionTitles.projects

export function Projects({ lang }: ProjectsProps) {
  const projects = projectsData[lang]

  return (
    <section>
      <SectionTitle icon={FolderGit2} title={sectionTitle[lang]} />
      <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
        {projects.map((project, index) => (
          <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
            <div className="group h-full overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
              </div>
              <div className="p-4 sm:p-5">
                <div className="mb-3 flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-foreground text-sm sm:text-base leading-tight">{project.name}</h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 rounded-md p-2 text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110"
                    aria-label={`Ver proyecto ${project.name}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                <p className="mb-3 text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">{project.summary}</p>
                <ul className="space-y-1">
                  {project.highlights.slice(0, 3).map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary transition-transform group-hover:scale-150" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  )
}
