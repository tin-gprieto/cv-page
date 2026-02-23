# Personal CV Page

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/tin-gprietos-projects/v0-cv-page)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/4vJ0Ef70OID)

Página web personal de CV/Portfolio con soporte bilingüe (Español/Inglés), generación automática de traducciones y exportación a PDF mediante [RenderCV](https://github.com/rendercv/rendercv).

## Tabla de Contenidos

- [Personal CV Page](#personal-cv-page)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Características](#características)
  - [Tech Stack](#tech-stack)
  - [Estructura del Proyecto](#estructura-del-proyecto)
  - [Secciones del CV](#secciones-del-cv)
  - [Configuración mediante YAML](#configuración-mediante-yaml)
    - [Proceso de Build (`build-config.ts`)](#proceso-de-build-build-configts)
  - [Sistema de Traducción](#sistema-de-traducción)
    - [Funcionamiento](#funcionamiento)
  - [Generación de PDF con RenderCV](#generación-de-pdf-con-rendercv)
    - [Uso](#uso)
  - [Instalación y Uso](#instalación-y-uso)
    - [Requisitos](#requisitos)
    - [Instalación](#instalación)
    - [Desarrollo](#desarrollo)
    - [Actualizar CV](#actualizar-cv)
    - [Despliegue](#despliegue)

## Características

- **Soporte bilingüe**: Español e Inglés con cambio dinámico
- **Exportación a PDF**: Genera CVs en formato PDF para ambos idiomas
- **Traducción automática**: Traduce el contenido del YAML español al inglés usando Google Translate
- **Tema oscuro/claro**: Soporte para preferencias de tema del sistema
- **Diseño responsive**: Adaptado para dispositivos móviles y desktop
- **Animaciones**: Efectos de scroll animados para mejor UX

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS + shadcn/ui
- **Gestión de paquetes**: pnpm
- **Despliegue**: Vercel
- **Generación de PDF**: [RenderCV](https://github.com/rendercv/rendercv)
- **Traducción**: Google Translate API (via `translate` package)

## Estructura del Proyecto

    ├── app/                    # Next.js App Router
    │   ├── layout.tsx          # Layout principal
    │   ├── page.tsx            # Página principal
    │   └── globals.css         # Estilos globales
    ├── components/             # Componentes React
    ├── config/
    │   ├── Martín_González_Prieto_CV.yaml      # CV en español (fuente principal)
    │   ├── Martín_González_Prieto_CV_EN.yaml   # CV en inglés (generado)
    │   └── cv-config.json                       # Configuración JSON (generada)
    ├── scripts/
    │   ├── build-config.ts         # Genera cv-config.json desde YAMLs
    │   ├── generate-english-yaml.ts # Traduce YAML español a inglés
    │   └── update_cv.sh            # Script completo de actualización
    ├── public/
    │   ├── images/             # Imágenes de proyectos
    │   └── pdf/                # PDFs generados del CV
    └── lib/
        ├── config.ts           # Carga de configuración
        └── utils.ts            # Utilidades

## Secciones del CV

La página web incluye las siguientes secciones interactivas:

| Sección | Descripción |
| --------- | ------------- |
| **Header** | Nombre, título, ubicación, email, teléfono y redes sociales |
| **Experiencia** | Historial laboral con empresa, cargo, fechas y logros |
| **Educación** | Formación académica con institución, carrera y highlights |
| **Habilidades** | Skills técnicos organizados por categoría + habilidades blandas |
| **Proyectos** | Portfolio de proyectos personales con enlaces y descripción |
| **Certificaciones** | Credenciales y cursos con enlaces a Credly/certificados |
| **Idiomas** | Nivel de competencia en cada idioma con barra de progreso |

## Configuración mediante YAML

El sistema utiliza un archivo YAML como **fuente única de verdad** para toda la información del CV. El archivo principal en español (`Martín_González_Prieto_CV.yaml`) sigue el esquema de [RenderCV](https://github.com/rendercv/rendercv).

### Proceso de Build (`build-config.ts`)

El script `build-config.ts` transforma los archivos YAML a un JSON optimizado para el frontend:

1. **Lee** los archivos YAML (español e inglés)
2. **Transforma** los datos al formato esperado por los componentes React
3. **Formatea** fechas según el locale (ej: "Mar 2024" o "Mar 2024")
4. **Mapea** iconos para categorías de skills
5. **Genera** URLs para redes sociales
6. **Agrega** traducciones de UI (navbar, contacto, títulos de sección)
7. **Escribe** el archivo `cv-config.json`

Este archivo JSON es importado por `lib/config.ts` y utilizado por todos los componentes.

## Sistema de Traducción

El script `generate-english-yaml.ts` automatiza la traducción del CV del español al inglés:

### Funcionamiento

```bash
pnpm translate
```

1. **Lee** el archivo YAML en español (`Martín_González_Prieto_CV.yaml`)
2. **Clona** la estructura completa del documento
3. **Traduce** automáticamente usando Google Translate
4. **Actualiza** el locale a inglés (meses, "present", etc.)
5. **Genera** el archivo `Martín_González_Prieto_CV_EN.yaml`

## Generación de PDF con RenderCV

[RenderCV](https://github.com/rendercv/rendercv) genera CVs profesionales en PDF directamente desde los archivos YAML.

### Uso

```bash
# Instalar RenderCV (requiere Python)
pip install rendercv

# Generar PDF para un idioma
rendercv render config/Martín_González_Prieto_CV.yaml
```

## Instalación y Uso

### Requisitos

- Node.js 18+
- pnpm
- Python 3.8+ (para RenderCV)

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/tin-gprieto/cv-page.git
cd cv-page

# Instalar dependencias
pnpm install

# Instalar RenderCV (opcional, para PDFs)
pip install rendercv
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
pnpm dev
```

### Actualizar CV

1. Editar `config/Martín_González_Prieto_CV.yaml` con los nuevos datos
2. Ejecutar el pipeline completo:

```bash
bash scripts/update_cv.sh
```

Esto:

- Traduce automáticamente al inglés
- Genera el JSON de configuración
- Crea los PDFs para descarga
- Construye la aplicación Next.js

Los PDFs generados se guardan en `public/pdf/` y están disponibles para descarga desde la navbar.

### Despliegue

El proyecto está configurado para despliegue automático en Vercel. Cada push a `main` activa un nuevo deploy.

---

*Desarrollado por [Martín González Prieto](https://github.com/tin-gprieto)*
