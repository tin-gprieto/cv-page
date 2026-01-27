import Image from "next/image"
import { FolderGit2, ExternalLink } from "lucide-react"
import { SectionTitle } from "./section-title"
import { AnimateOnScroll } from "./animate-on-scroll"

interface ProjectsProps {
  lang: "es" | "en"
}

const projectsData = {
  es: [
    {
      name: "Agentes Autónomos de Prevención",
      url: "https://github.com/tin-gprieto/taller-rust",
      image: "/images/project-drones.jpg",
      summary:
        'Trabajo grupal final para la materia "Taller de Programación" que consiste en el desarrollo de un sistema de seguridad urbana con drones y cámaras que detectan y resuelven incidentes mediante mensajería asincrónica y visión artificial.',
      highlights: [
        "Desarrollado en Rust para ambientes Unix y Linux",
        "Implementación propia del protocolo MQTT 5.0 con QoS 1",
        "Coordinación de drones y cámaras mediante arquitectura Pub/Sub",
        "Detección de incidentes con Microsoft Azure AI Vision",
        "Gestión de concurrencia mediante hilos y threadpools",
      ],
    },
    {
      name: "Toolbox para C",
      url: "https://github.com/tin-gprieto/c_toolbox",
      image: "/images/project-toolbox.jpg",
      summary:
        "Colección de herramientas personales en C para la creación de interfaces de terminal, estructuras de datos y testeo unitario.",
      highlights: [
        "Interfaz de terminal interactiva con colores ANSI",
        "Implementación de TDAs como Listas, Colas y Hash",
        "Gestión de componentes mediante memoria dinámica",
        "Funciones auxiliares para agilizar el testeo unitario",
        "Organización modular en Interfaz, TDAs y Tools",
      ],
    },
    {
      name: "Darkness Awesome Theme",
      url: "https://github.com/tin-gprieto/awesome",
      image: "/images/project-awesome.jpg",
      summary:
        "Tema personalizado para el gestor de ventanas Awesome WM para Linux, enfocado en una estética oscura e integración de widgets informativos.",
      highlights: [
        "Configuración de entorno de escritorio escrita en Lua",
        "Widgets de batería, temperatura y Spotify integrados",
        "Personalización estética de fondos, íconos y resolución",
      ],
    },
  ],
  en: [
    {
      name: "Autonomous Prevention Agents",
      url: "https://github.com/tin-gprieto/taller-rust",
      image: "/images/project-drones.jpg",
      summary:
        'Final group project for the "Programming Workshop" course consisting of the development of an urban security system with drones and cameras that detect and resolve incidents through asynchronous messaging and artificial vision.',
      highlights: [
        "Developed in Rust for Unix and Linux environments",
        "Custom implementation of MQTT 5.0 protocol with QoS 1",
        "Drone and camera coordination via Pub/Sub architecture",
        "Incident detection with Microsoft Azure AI Vision",
        "Concurrency management through threads and threadpools",
      ],
    },
    {
      name: "C Toolbox",
      url: "https://github.com/tin-gprieto/c_toolbox",
      image: "/images/project-toolbox.jpg",
      summary:
        "Personal tools collection in C for creating terminal interfaces, data structures and unit testing.",
      highlights: [
        "Interactive terminal interface with ANSI colors",
        "Implementation of ADTs like Lists, Queues and Hash",
        "Component management through dynamic memory",
        "Helper functions to speed up unit testing",
        "Modular organization in Interface, ADTs and Tools",
      ],
    },
    {
      name: "Darkness Awesome Theme",
      url: "https://github.com/tin-gprieto/awesome",
      image: "/images/project-awesome.jpg",
      summary:
        "Custom theme for Awesome WM window manager for Linux, focused on a dark aesthetic and informative widget integration.",
      highlights: [
        "Desktop environment configuration written in Lua",
        "Integrated battery, temperature and Spotify widgets",
        "Aesthetic customization of backgrounds, icons and resolution",
      ],
    },
  ],
}

const sectionTitle = {
  es: "Proyectos",
  en: "Projects",
}

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
