export const navLinks = [
  { img: "icon-about", title: "About", route: "/about" },
  { img: "icon-work", title: "Experience", route: "/experience" },
  { img: "icon-skills", title: "Skills", route: "/skills" },
  { img: "icon-contact", title: "Contact", route: "/contact" },
  { img: "icon-folder", title: "Projects", route: "/" },
  { img: "icon-settings", title: "Settings", route: "/settings" },
];

export const presetColors = [
     "#fafafa",
     "#f0aeae",
     "#54B9AD",
     "#F8D059",
     "#50C1EC",
     "#d496ec",
     "#a9c75d",
     "#f8b659",
     "#ec5850",
 ];

export const skills = {
  technicalSkills: {
    languages: [
      { icon: "html", name: "HTML5" },
      { icon: "css", name: "CSS3" },
      { icon: "js", name: "JavaScript" },
      { icon: "ts", name: "TypeScript" },
    ],

    runtime: [
      { icon: "nodejs", name: "Node.js" },
    ],

    frameworks: [
      { icon: "react", name: "React" },
      { icon: "nextjs", name: "Next.js" },
      { icon: "vite", name: "Vite" },
      { icon: "express", name: "Express.js" },
    ],

    cssTools: [
      { icon: "tailwind", name: "Tailwind CSS" },
      { icon: "bootstrap", name: "Bootstrap" },
    ],

    databases: [
      { icon: "mongodb", name: "MongoDB" },
      { icon: "mysql", name: "MySQL" },
      { icon: "postgresql", name: "PostgreSQL" },
    ],

    testing: [
      { icon: "jest", name: "Jest" },
    ],

    versionControl: [
      { icon: "git", name: "Git" },
      { icon: "github", name: "GitHub" },
    ],
  },


  toolsAndPlatforms: {
    designAndPrototyping: [
      { icon: "figma", name: "Figma" },
      { icon: "krita", name: "Krita" },
      { icon: "canva", name: "Canva" },
    ],
    development: [
      { icon: "vscode", name: "VS Code" },
      { icon: "postman", name: "Postman" },
      { icon: "docker", name: "Docker" },
    ],
    deploy: [
      { icon: "vercel", name: "Vercel" },
    ],
 
  },

  softSkills: {
    "Leadership & Teamwork": [
      "Leading multicultural teams",
      "Mentoring and coaching",
      "Conflict resolution",
      "Agile collaboration"
    ],
    "Communication & Collaboration": [
      "Clear and concise communication",
      "Cross-functional teamwork",
      "Empathy and active listening",
      "Customer and stakeholder focus"
    ],
    "Analytical & Problem-Solving": [
      "Data-driven decision making",
      "Troubleshooting and debugging",
      "Critical thinking",
      "Adaptability under pressure"
    ],
    "Organization & Productivity": [
      "Project and task prioritization",
      "Process optimization",
      "Goal-oriented mindset",
      "Attention to detail"
    ],
    "Professionalism & Growth": [
      "Proactive and self-motivated",
      "Continuous learning",
      "Responsibility and reliability"
    ]
  },
};

export const contacts = [
  {
    title: "LinkedIn",
    user: "@andreaalarconvaldes",
    link: "https://www.linkedin.com/in/andreaalarconvaldes/",
    icon: "linkedin",
  },
  {
    title: "GitHub",
    user: "@AndreaAlarconValdes",
    link: "https://github.com/AndreaAlarconValdes",
    icon: "github",
  },
  {
    title: "Email",
    user: "alarconvaldes.a@gmail.com",
    link: "mailto:alarconvaldes.a@gmail.com",
    icon: "mail",
  },
  {
    title: "Phone",
    user: "+34 644 403 445",
    link: "",
    icon: "phone",
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  concept?: string;
  images?: string[];
  githubLink: string;
  demoLink?: string;
  technologies: string[];
}

export interface DeskFolder {
  img?: string;
  title: string;
  link: string;
  isProject: boolean;
  id?: string;
}

export const deskFolders: DeskFolder[] = [
  { img: "paper", title: "Resume.pdf", link: "./TechCV_Andrea_Alarcon.pdf", isProject: false },
  { title: "Portfolio", link: "https://github.com/AndreaAlarconValdes/portfolio-andrea", isProject: true, id: "portfolio" },
  { title: "E-Commerce", link: "https://github.com/AndreaAlarconValdes/shopping-app", isProject: true, id: "ecommerce" },
  { title: "JobMatch", link: "https://github.com/AndreaAlarconValdes/jobmatch", isProject: true, id: "jobmatch" },
  { title: "Notes App", link: "https://github.com/AndreaAlarconValdes/notes-app", isProject: true, id: "notes-app" },
  { title: "Landing Page 01", link: "https://github.com/AndreaAlarconValdes/landing-page-bakery", isProject: true, id: "landing-page-01" },
  { title: "Landing Page 02", link: "https://github.com/AndreaAlarconValdes/barberia-41", isProject: true, id: "landing-page-02" },
];

export const projects: Record<string, Project> = {
  portfolio: {
    id: "portfolio",
    title: "Portfolio",
    description: "This project is an interactive web experience that simulates a macOS desktop, allowing you to explore my projects and professional journey in an intuitive and fun way.",
    concept: "The main idea behind this portfolio is to create a visual environment similar to an operating system, giving users the feeling of navigating a real computer. Each interactive element has a clear purpose and lets you discover more about me and my work dynamically.",
    images: [],
    demoLink: "https://andreaalarconvaldes.github.io/portfolio-andrea/",
    githubLink: "https://github.com/AndreaAlarconValdes/portfolio-andrea",
    technologies: ["React", "TypeScript", "CSS3", "Vite"],
  },
ecommerce: {
  id: "ecommerce",
  title: "Brillia — Jewelry E-Commerce Project",
  description: "This is a personal full-stack e-commerce application currently under development. It includes shopping cart functionality, user authentication, and product management, and is being built with modern web technologies to provide a seamless and scalable shopping experience. The project is still in progress and not yet finalized.",
  concept: "Brillia is conceived as a modern and elegant jewelry e-commerce platform focused on delivering a clean user experience, intuitive navigation, and a strong visual identity. The project explores best practices in full-stack development, performance optimization, and responsive, mobile-first design, while simulating real-world e-commerce features such as authentication, product management, and shopping workflows.",
  images: [],
  githubLink: "https://github.com/AndreaAlarconValdes/shopping-app",
  technologies: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB"],
},
 jobmatch: {
  id: "jobmatch",
  title: "JobMatch - Find Your Next Tech Job 💼",
  description: "JobMatch is a fictitious full-stack job portal project developed as part of the Midudev Bootcamp and intended for educational purposes only. The platform aims to connect job seekers with job opportunities through user profiles, job listings, search functionality, and application management. The project is currently in progress: the frontend is implemented using React, while the backend and database are still under development. All data, companies, and job postings are completely fictional.",
  concept: "The concept behind JobMatch is to simulate a real-world job portal while applying best practices in full-stack web development. The project focuses on building a scalable frontend architecture, preparing backend integration, and planning future enhancements such as database connectivity and AI-powered features to improve job matching and user experience. As an educational project, its primary goal is learning and experimentation rather than production use.",
  images: [],
  githubLink: "https://github.com/AndreaAlarconValdes/jobmatch",
  technologies: ["React", "Node.js", "Express.js", "MongoDB"],
},
  "notes-app": {
    id: "notes-app",
 title: "Notes App — Personal Notes Manager",
  description: "A modern and intuitive notes application designed to help users organize ideas, tasks, and reminders in one place. The app allows users to create, edit, and delete notes, keeping everything clear, accessible, and easy to manage with persistent storage so nothing important slips through the cracks.",
  concept: "The concept behind Notes App is to provide a simple yet fully-featured personal note-taking tool focused on clarity and usability. It emphasizes an intuitive user experience, clean interface design, and efficient organization through a category-based system, making it ideal for managing daily thoughts, priorities, and reminders.",
    images: [],
    demoLink:"https://andreaalarconvaldes.github.io/notes-app/",
    githubLink: "https://github.com/AndreaAlarconValdes/notes-app",
    technologies: ["React", "JavaScript", "CSS3"],
  },
"landing-page-01": {
  id: "landing-page-01",
  title: "Landing Page — Artisan Bakery",
  description: "A modern, visually appealing, and fully responsive landing page designed for an artisan bakery. The project focuses on clean aesthetics, smooth animations, and a mobile-first approach to deliver an engaging user experience across all devices.",
  concept: "The concept of this landing page is to showcase an artisan bakery’s brand identity through a warm, handcrafted visual style and clear content hierarchy. The design emphasizes accessibility, performance, and responsiveness, using modern frontend techniques to create an inviting and user-friendly experience that works seamlessly on mobile, tablet, and desktop devices.",
  images: [],
  demoLink: "https://andreaalarconvaldes.github.io/landing-page-bakery/",
  githubLink: "https://github.com/AndreaAlarconValdes/landing-page-bakery",
  technologies: ["React", "CSS3", "JavaScript"],
},
"landing-page-02": {
  id: "landing-page-02",
  title: "Landing Page — Barbershop",
  description: "A sleek single-page landing page for a barbershop, inspired by an existing design found online. This project was created primarily to practice CSS, layout, and responsive design. Features include a service showcase, booking section, and modern UI/UX elements to provide a clean and engaging user experience.",
  concept: "The concept behind this project is to recreate and learn from a professional landing page design while honing frontend skills. The focus is on practicing responsive layouts, CSS styling, animations, and modern UI/UX practices, creating a visually appealing and functional single-page application.",
  images: [],
  demoLink: "https://andreaalarconvaldes.github.io/barberia-41/",
  githubLink: "https://github.com/AndreaAlarconValdes/barberia-41",
  technologies: ["React", "CSS3", "JavaScript"],
}
,
};

export const experience = [
  {
    title: "Manager at Jump Juice Bar - Dublin, Ireland ",
    date: "June 2025 - Nov 2025",
    description:
      "Managed daily operations of a high-traffic smoothie bar, leading a team to deliver exceptional customer service. Implemented workflow improvements and staff training programs, increasing operational efficiency by 20%. Oversaw inventory management and stock control, ensuring compliance with HACCP food safety standards and reducing waste by 15%. Consistently achieved sales targets while promoting healthy, natural products and enhancing overall customer satisfaction.",
  },
  {
    title: "Supervisor at Jump Juice Bar - Dublin, Ireland",
    date: "July 2024 - May 2025",
    description:
      "Assisted the Store Manager in daily operations, including staff supervision, inventory management, and workflow coordination. Supported training and onboarding of new team members, ensured compliance with HACCP food safety standards, and maintained high levels of customer satisfaction. Played a key role in optimizing store processes and implemented sales and upselling techniques to drive revenue and improve customer experience. These contributions helped facilitate a smooth transition when promoted to Manager.",
  },
  {
    title: "Full Stack Developer at Haddock - Barcelona, Spain",
    date: "Jan 2023 - Dec 2023",
    description:
      "As a Full Stack Developer at Haddock, an AI-driven SaaS platform designed to automate daily tasks for restaurants, I contributed to the development of scalable solutions that enhanced operational efficiency and user experience for hospitality businesses. I developed and maintained end-to-end web features using React, TypeScript, and CSS, improving component reusability and reducing frontend maintenance efforts. I implemented Storybook for UI components, standardizing design patterns, enhancing collaboration with UI/UX teams, and accelerating feature development. I built and optimized backend services with Node.js and Express, increasing API reliability and reducing response times across key endpoints. I designed and maintained PostgreSQL database models, ensuring data consistency, faster queries, and improved system performance. I implemented automated testing with Jest, increasing test coverage by 35% and significantly reducing production bugs. I collaborated with UI/UX teams to deliver responsive, intuitive interfaces that improved user engagement and reduced support tickets. I contributed to core product features that improved onboarding speed and streamlined daily workflows for restaurant teams. I integrated and consumed RESTful APIs, enabling seamless data exchange between microservices and external platforms. I actively participated in Agile ceremonies (standups, sprint planning, reviews, retrospectives) and contributed to architectural and technical decision-making. I improved code quality and consistency through regular peer code reviews and adherence to best practices.",
  },
  {
    title: "Administrative at Barcelona epidemiology service - Barcelona, Spain",
    date: "Nov 2020 - Dec 2022",
    description:
      "Managed and analyzed epidemiological data related to the COVID-19 pandemic, ensuring accuracy, confidentiality, and compliance with health regulations. Collected, processed, and interpreted large datasets, identifying trends and key insights to support public-health decision making. Created detailed statistical reports and visual dashboards to improve understanding of transmission patterns and evaluate the impact of containment measures :contentReference[oaicite:1]{index=1}. Coordinated documentation, maintained precise records, and handled sensitive information with strict attention to detail. This role strengthened my analytical capabilities, professionalism, and ability to work in high-pressure environments with strong accuracy and discretion.",
  },
];

export const education = [
  {
    title: "Software Engineering Bootcamp – Full Stack Web Development",
    date: "Aug 2022 – Dec 2022",
    description: "The bootcamp covered JavaScript (ES6), Node.js, Express.js, MongoDB, React.js, HTML5, CSS3, responsive design, Git, Axios, and Postman. This comprehensive program equipped me with the skills to build dynamic web applications, create server-side logic and RESTful APIs, design efficient database structures, develop user-friendly interfaces, ensure seamless experiences across devices, and collaborate effectively using version control and API testing tools."},
  {
    title: "Veterinary Assistant – CIM Formación",
    date: "Oct 2020 – Jun 2021",
    description:
      "Studying to become a Veterinary Technician allowed me to pursue my love for animals while expanding my scientific and practical knowledge. I learned about animal anatomy, clinical procedures, handling techniques, and basic laboratory tasks. This experience strengthened my empathy, attention to detail, and ability to stay calm in high-pressure environments. Although I later transitioned to the tech field, this training contributed to my discipline, resilience, and commitment to continuous learning.",
  },
  {
    title: "Leaving Certificate, Higher Level Science & Maths",
    date: "2015 – 2017",
    description:
      "Completed Spanish Baccalaureate (Scientific Track) – equivalent to Leaving Certificate, Higher Level Science & Maths.",
  },
];
