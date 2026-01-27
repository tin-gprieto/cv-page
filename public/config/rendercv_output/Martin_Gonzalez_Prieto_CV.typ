// Import the rendercv function and all the refactored components
#import "@preview/rendercv:0.1.0": *

// Apply the rendercv template with custom configuration
#show: rendercv.with(
  name: "Martin Gonzalez Prieto",
  footer: context { [#emph[Martin Gonzalez Prieto -- #str(here().page())\/#str(counter(page).final().first())]] },
  top-note: [ #emph[Last updated: Jan 2026] ],
  locale-catalog-language: "en",
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


= Martin Gonzalez Prieto

  #headline([Advanced Computer Engineering student])

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
    #strong[Facultad de Ingeniería, Universidad de Buenos Aires (FIUBA)], degree course in Computer Engineering -- Buenos Aires, Argentina

  ],
  [
    Jan 2019 – present

  ],
  main-column-second-row: [
    #summary[Advanced Computer Engineering student.]

    - 195 of 226 credits approved (86\% of the degree)

    - General average: 7.74

  ],
)

#education-entry(
  [
    #strong[Universitat Politècnica de València (UPV)], academic exchange in Computer Engineering -- Valencia, España

  ],
  [
    Feb 2025 – Jul 2025

  ],
  main-column-second-row: [
    #summary[Academic exchange with the degree program in Computer Engineering and with the Master's Degree in Cybersecurity and Cyberintelligence (MUCC).]

    - Parallel computing

    - Concurrency and distributed systems

    - Computer Forensics and Malware Analysis (MUCC)

    - Pentesting and ethical hacking (MUCC)

    - Systems based on Deep Learning for Industry

  ],
)

#education-entry(
  [
    #strong[Colegio Nacional de Buenos Aires], Secondary education in Bachelor -- Buenos Aires, Argentina

  ],
  [
    Jan 2014 – Dec 2018

  ],
  main-column-second-row: [
  ],
)

== Experience

#regular-entry(
  [
    #strong[Ad honorem assistant], FIUBA -- Buenos Aires, Argentina

  ],
  [
    Mar 2024 – Jun 2025

  ],
  main-column-second-row: [
    #summary[Teaching collaboration in the subject \"Computer Organization\" of the Computer Engineering degree.]

    - Correction of practical work

    - Contents: binary representation, x86 microarchitecture, Assembly and caching

  ],
)

#regular-entry(
  [
    #strong[Executive Secretary of CEPSI and NGL], Centro Argentino de Ingenieros (CAI) -- Buenos Aires, Argentina

  ],
  [
    May 2024 – Dec 2024

  ],
  main-column-second-row: [
    #summary[Internship in administrative role within management and technical committees.]

    - Management of administrative tasks

    - Meeting coordination

    - Preparation of minutes and monitoring of internal projects

  ],
)

#regular-entry(
  [
    #strong[Frontend Programmer], Banco Provincia de Buenos Aires -- Buenos Aires, Argentina

  ],
  [
    May 2021 – Aug 2022

  ],
  main-column-second-row: [
    #summary[Participation in the development of web solutions for the banking sector.]

    - News portal development with React

    - Institutional CMS implementation using Angular

    - Survey and analysis of requirements together with business areas

  ],
)

== Languages

- Spanish — Native

- English — Intermediate

== Technical Skills

#strong[Programming languages:] C, Python, Rust, JavaScript, TypeScript, Java, Assembly, SQL, Bash (Shell Scripting)

#strong[Web development:] HTML, CSS, SASS, React, Angular JS

#strong[Machine Learning and Deep Learning:] PyTorch, TensorFlow, Scikit-learn, Keras

#strong[Data visualization tools:] Matplotlib, Seaborn, Plotly

#strong[Database management systems (DBMS):] MongoDB, PostgreSQL, Pandas

#strong[Tools:] Docker, Linux, Git, Github, Makefile, Jupyter Notebooks

#strong[Office automation:] Excel (intermedio), Sony Vegas, GIMP

== Soft Skills

- Effective communication and teamwork

- Critical thinking and problem solving

- Organization and optimization of tasks

- Adaptability to new challenges

== Certifications

  #regular-entry(
  [
    #strong[#link("https://www.credly.com/badges/dcd3a2b6-df98-431b-8140-3c07b12879f2")[Qiskit Fall Fest Mentor (IBM)]]

  ],
  [
  ],
  main-column-second-row: [
    #summary[Organizer of the first Qiskit Fall Fest days at FIUBA.]

    - Dissemination and contact with sponsors

    - Organization of the Kickoff and Hackathon event

  ],
)

  #regular-entry(
  [
    #strong[#link("https://www.credly.com/badges/c2c46184-e493-417c-bf6e-61c9c393b443")[Data Classification and Summarization Using IBM Granite (IBM)]]

  ],
  [
  ],
  main-column-second-row: [
    #summary[IBM course on data classification and summarization using IBM Granite.]

    - Data preprocessing techniques

    - Classification and summary models

    - Practical implementation with IBM Granite

  ],
)

== Proyects

  #regular-entry(
  [
    #strong[#link("https://github.com/tin-gprieto/taller-rust")[Autonomous Prevention Agents]]

  ],
  [
  ],
  main-column-second-row: [
    #summary[Final group work for the subject \"Programming Workshop\" which consists of the development of an urban security system with drones and cameras that detect and resolve incidents through asynchronous messaging and artificial vision.]

    - Developed in Rust for Unix and Linux environments.

    - Own implementation of the MQTT 5.0 protocol with QoS 1.

    - Coordination of drones and cameras through Pub\/Sub architecture.

    - Incident detection with Microsoft Azure AI Vision.

    - Concurrency management through threads and threadpools.

  ],
)

  #regular-entry(
  [
    #strong[#link("https://github.com/tin-gprieto/c_toolbox")[Toolbox for C]]

  ],
  [
  ],
  main-column-second-row: [
    #summary[Collection of personal tools in C for creating terminal interfaces, data structures and unit testing.]

    - Interactive terminal interface with ANSI colors.

    - Implementation of TDAs such as Lists, Queues and Hashes.

    - Component management through dynamic memory.

    - Auxiliary functions to speed up unit testing.

    - Modular organization in Interface, TDAs and Tools.

  ],
)

  #regular-entry(
  [
    #strong[#link("https://github.com/tin-gprieto/awesome")[Darkness Awesome Theme]]

  ],
  [
  ],
  main-column-second-row: [
    #summary[Custom theme for the Awesome WM window manager for Linux, focused on a dark aesthetic and integration of informative widgets.]

    - Desktop environment configuration written in Lua.

    - Integrated battery, temperature and Spotify widgets.

    - Aesthetic customization of backgrounds, icons and resolution.

  ],
)
