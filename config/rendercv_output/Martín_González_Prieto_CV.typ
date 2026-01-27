// Import the rendercv function and all the refactored components
#import "@preview/rendercv:0.1.0": *

// Apply the rendercv template with custom configuration
#show: rendercv.with(
  name: "Martín González Prieto",
  footer: context { [#emph[Martín González Prieto -- #str(here().page())\/#str(counter(page).final().first())]] },
  top-note: [ #emph[Última actualización: Ene 2026] ],
  locale-catalog-language: "es",
  page-size: "us-letter",
  page-top-margin: 0.7in,
  page-bottom-margin: 0.7in,
  page-left-margin: 0.7in,
  page-right-margin: 0.7in,
  page-show-footer: true,
  page-show-top-note: true,
  colors-body: rgb(0, 0, 0),
  colors-name: rgb(0, 0, 0),
  colors-headline: rgb(0, 0, 0),
  colors-connections: rgb(0, 0, 0),
  colors-section-titles: rgb(0, 0, 0),
  colors-links: rgb(0, 79, 144),
  colors-footer: rgb(0, 0, 0),
  colors-top-note: rgb(128, 128, 128),
  typography-line-spacing: 0.6em,
  typography-alignment: "justified",
  typography-date-and-location-column-alignment: right,
  typography-font-family-body: "Raleway",
  typography-font-family-name: "Raleway",
  typography-font-family-headline: "Raleway",
  typography-font-family-connections: "Raleway",
  typography-font-family-section-titles: "Raleway",
  typography-font-size-body: 10pt,
  typography-font-size-name: 30pt,
  typography-font-size-headline: 10pt,
  typography-font-size-connections: 10pt,
  typography-font-size-section-titles: 1.4em,
  typography-small-caps-name: false,
  typography-small-caps-headline: false,
  typography-small-caps-connections: false,
  typography-small-caps-section-titles: false,
  typography-bold-name: false,
  typography-bold-headline: false,
  typography-bold-connections: false,
  typography-bold-section-titles: false,
  links-underline: false,
  links-show-external-link-icon: false,
  header-alignment: left,
  header-photo-width: 3.5cm,
  header-space-below-name: 0.7cm,
  header-space-below-headline: 0.7cm,
  header-space-below-connections: 0.7cm,
  header-connections-hyperlink: true,
  header-connections-show-icons: true,
  header-connections-display-urls-instead-of-usernames: false,
  header-connections-separator: "",
  header-connections-space-between-connections: 0.5cm,
  section-titles-type: "with_full_line",
  section-titles-line-thickness: 0.5pt,
  section-titles-space-above: 0.5cm,
  section-titles-space-below: 0.3cm,
  sections-allow-page-break: true,
  sections-space-between-text-based-entries: 0.3em,
  sections-space-between-regular-entries: 1.2em,
  entries-date-and-location-width: 4.15cm,
  entries-side-space: 0.2cm,
  entries-space-between-columns: 0.1cm,
  entries-allow-page-break: false,
  entries-short-second-row: false,
  entries-summary-space-left: 0cm,
  entries-summary-space-above: 0.12cm,
  entries-highlights-bullet:  "•" ,
  entries-highlights-nested-bullet:  "•" ,
  entries-highlights-space-left: 0cm,
  entries-highlights-space-above: 0.12cm,
  entries-highlights-space-between-items: 0.12cm,
  entries-highlights-space-between-bullet-and-text: 0.5em,
  date: datetime(
    year: 2026,
    month: 1,
    day: 26,
  ),
)


= Martín González Prieto

  #headline([Estudiante avanzado de Ingeniería en Informática])

#connections(
  [#connection-with-icon("location-dot")[Buenos Aires, Argentina]],
  [#link("mailto:mgonzalezp@fi.uba.ar", icon: false, if-underline: false, if-color: false)[#connection-with-icon("envelope")[mgonzalezp\@fi.uba.ar]]],
  [#link("tel:+54-11-2235-8723", icon: false, if-underline: false, if-color: false)[#connection-with-icon("phone")[011 2235-8723]]],
  [#link("https://linkedin.com/in/mgonpri", icon: false, if-underline: false, if-color: false)[#connection-with-icon("linkedin")[mgonpri]]],
  [#link("https://github.com/tin-gprieto", icon: false, if-underline: false, if-color: false)[#connection-with-icon("github")[tin-gprieto]]],
)


== Education

#education-entry(
  [
    #strong[Facultad de Ingeniería, Universidad de Buenos Aires (FIUBA)], Carrera de grado in Ingeniería en Informática -- Buenos Aires, Argentina

  ],
  [
    Ene 2019 – presente

  ],
  main-column-second-row: [
    #summary[Estudiante avanzado de Ingeniería en Informática.]

    - 195 de 226 créditos aprobados (86\% de la carrera)

    - Promedio general: 7,74

  ],
)

#education-entry(
  [
    #strong[Universitat Politècnica de València (UPV)], Máster in Ingeniería en Informática -- Valencia, España

  ],
  [
    Feb 2025 – Jul 2025

  ],
  main-column-second-row: [
    #summary[Intercambio académico con la carrera de grado en Ingeniería en Informática y con el Máster Universitario en Ciberseguridad y Ciberinteligencia (MUCC).]

    - Computación paralela

    - Concurrencia y sistemas distribuidos

    - Informática forense y análisis de malware (MUCC)

    - Pentesting y hacking ético (MUCC)

    - Sistemas basados en Deep Learning para la Industria

  ],
)

#education-entry(
  [
    #strong[Colegio Nacional de Buenos Aires], Educación secundaria in Bachiller -- Buenos Aires, Argentina

  ],
  [
    Ene 2014 – Dec 2018

  ],
  main-column-second-row: [
  ],
)

== Experience

#regular-entry(
  [
    #strong[Ayudante ad honorem], FIUBA -- Buenos Aires, Argentina

  ],
  [
    Mar 2024 – Jun 2025

  ],
  main-column-second-row: [
    #summary[Colaboración docente en la materia “Organización del Computador\" de la carrera de Ingeniería en Informática.]

    - Corrección de trabajos prácticos

    - Contenidos: representación binaria, microarquitectura x86, Assembly y caching

  ],
)

#regular-entry(
  [
    #strong[Secretario Ejecutivo de CEPSI y NGL], Centro Argentino de Ingenieros (CAI) -- Buenos Aires, Argentina

  ],
  [
    May 2024 – Dec 2024

  ],
  main-column-second-row: [
    #summary[Pasantía en rol administrativo dentro de comisiones directivas y técnicas.]

    - Gestión de tareas administrativas

    - Coordinación de reuniones

    - Confección de minutas y seguimiento de proyectos internos

  ],
)

#regular-entry(
  [
    #strong[Programador Frontend], Banco Provincia de Buenos Aires -- Buenos Aires, Argentina

  ],
  [
    May 2021 – Ago 2022

  ],
  main-column-second-row: [
    #summary[Participación en el desarrollo de soluciones web para el sector bancario.]

    - Desarrollo de portal de noticias con React

    - Implementación de CMS institucional utilizando Angular

    - Relevamiento y análisis de requerimientos junto a áreas de negocio

  ],
)

== Languages

- Español — Nativo

- Inglés — Intermedio

== Technical Skills

#strong[Lenguajes de programación:] C, Python, Rust, JavaScript, TypeScript, Java, Assembly, SQL, Bash (Shell Scripting)

#strong[Desarrollo web:] HTML, CSS, SASS, React, Angular JS

#strong[Machine Learning y Deep Learning:] PyTorch, TensorFlow, Scikit-learn, Keras

#strong[Herramientas de visualización de datos:] Matplotlib, Seaborn, Plotly

#strong[Sistemas de gestión de bases de datos (SGBD):] MongoDB, PostgreSQL, Pandas

#strong[Herramientas:] Docker, Linux, Git, Github, Makefile, Jupyter Notebooks

#strong[Ofimática:] Excel (intermedio), Sony Vegas, GIMP

== Soft Skills

- Comunicación efectiva y trabajo en equipo

- Pensamiento crítico y resolución de problemas

- Organización y optimización de tareas

- Adaptabilidad a nuevos desafíos

== Certifications

  #regular-entry(
  [
    #strong[#link("https://www.credly.com/badges/dcd3a2b6-df98-431b-8140-3c07b12879f2")[Qiskit Fall Fest Mentor (IBM)]]

  ],
  [
  ],
  main-column-second-row: [
    #summary[Organizador de las primeras jornadas Qiskit Fall Fest en FIUBA.]

    - Difusión y contacto con sponsors

    - Organización del evento Kickoff y Hackathon

  ],
)

  #regular-entry(
  [
    #strong[#link("https://www.credly.com/badges/c2c46184-e493-417c-bf6e-61c9c393b443")[Data Classification and Summarization Using IBM Granite (IBM)]]

  ],
  [
  ],
  main-column-second-row: [
    #summary[Curso de IBM sobre clasificación y resumen de datos utilizando IBM Granite.]

    - Técnicas de preprocesamiento de datos

    - Modelos de clasificación y resumen

    - Implementación práctica con IBM Granite

  ],
)

== Proyects

  #regular-entry(
  [
    #strong[#link("https://github.com/tin-gprieto/taller-rust")[Agentes Autónomos de Prevención]]

  ],
  [
  ],
  main-column-second-row: [
    #summary[Trabajo grupal final para la materia \"Taller de Programación\" que consiste en el desarrollo de un sistema de seguridad urbana con drones y cámaras que detectan y resuelven incidentes mediante mensajería asincrónica y visión artificial.]

    - Desarrollado en Rust para ambientes Unix y Linux.

    - Implementación propia del protocolo MQTT 5.0 con QoS 1.

    - Coordinación de drones y cámaras mediante arquitectura Pub\/Sub.

    - Detección de incidentes con Microsoft Azure AI Vision.

    - Gestión de concurrencia mediante hilos y threadpools.

  ],
)

  #regular-entry(
  [
    #strong[#link("https://github.com/tin-gprieto/c_toolbox")[Toolbox para C]]

  ],
  [
  ],
  main-column-second-row: [
    #summary[Colección de herramientas personales en C para la creación de interfaces de terminal, estructuras de datos y testeo unitario.]

    - Interfaz de terminal interactiva con colores ANSI.

    - Implementación de TDAs como Listas, Colas y Hash.

    - Gestión de componentes mediante memoria dinámica.

    - Funciones auxiliares para agilizar el testeo unitario.

    - Organización modular en Interfaz, TDAs y Tools.

  ],
)

  #regular-entry(
  [
    #strong[#link("https://github.com/tin-gprieto/awesome")[Darkness Awesome Theme]]

  ],
  [
  ],
  main-column-second-row: [
    #summary[Tema personalizado para el gestor de ventanas Awesome WM para Linux, enfocado en una estética oscura e integración de widgets informativos.]

    - Configuración de entorno de escritorio escrita en Lua.

    - Widgets de batería, temperatura y Spotify integrados.

    - Personalización estética de fondos, íconos y resolución.

  ],
)
