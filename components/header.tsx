import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

interface HeaderProps {
  lang: "es" | "en"
}

const cvData = {
  name: "Martín González Prieto",
  headline: {
    es: "Estudiante avanzado de Ingeniería en Informática",
    en: "Advanced Computer Engineering Student",
  },
  location: "Buenos Aires, Argentina",
  email: "mgonzalezp@fi.uba.ar",
  phone: "+54 11 2235-8723",
  socialNetworks: [
    { network: "LinkedIn", username: "mgonpri", url: "https://linkedin.com/in/mgonpri" },
    { network: "GitHub", username: "tin-gprieto", url: "https://github.com/tin-gprieto" },
  ],
}

export function Header({ lang }: HeaderProps) {
  return (
    <header className="text-center">
      <div className="mb-6">
        <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary">
          <span className="text-3xl font-bold">MG</span>
        </div>
        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {cvData.name}
        </h1>
        <p className="mt-3 text-lg text-primary">{cvData.headline[lang]}</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
        <a
          href={`mailto:${cvData.email}`}
          className="flex items-center gap-2 transition-colors hover:text-primary"
        >
          <Mail className="h-4 w-4" />
          <span>{cvData.email}</span>
        </a>
        <span className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <span>{cvData.phone}</span>
        </span>
        <span className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span>{cvData.location}</span>
        </span>
      </div>

      <div className="mt-4 flex items-center justify-center gap-4">
        {cvData.socialNetworks.map((social) => (
          <a
            key={social.network}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {social.network === "LinkedIn" ? (
              <Linkedin className="h-4 w-4" />
            ) : (
              <Github className="h-4 w-4" />
            )}
            <span>{social.username}</span>
          </a>
        ))}
      </div>
    </header>
  )
}
