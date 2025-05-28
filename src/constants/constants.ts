export const skills = [
  { icon: "react", name: "react", category: "Frontend" },
  { icon: "html", name: "html5", category: "Frontend" },
  { icon: "css", name: "css3", category: "Frontend" },
  { icon: "tailwind", name: "tailwind css", category: "Frontend" },
  { icon: "js", name: "javascript", category: "Frontend" },
  { icon: "ts", name: "typescript", category: "Frontend" },
  { icon: "nodejs", name: "node.js", category: "Backend" },
  { icon: "mongodb", name: "mongodb", category: "Backend" },
  { icon: "mysql", name: "mysql", category: "Backend" },
  { icon: "postgresql", name: "postgresql", category: "Backend" },
  { icon: "docker", name: "docker", category: "Backend" },
  { icon: "git", name: "git", category: "Others" },
  { icon: "figma", name: "figma", category: "Others" },
  { icon: "google-ads", name: "google ads", category: "Others" },
  {
    icon: "wordpress",
    name: "wordpress",
    category: "Others",
  },
  { icon: "shopify", name: "shopify", category: "Others" },
];

export const skillsFilters = [
  { name: "All", icon: "fa-solid fa-globe" },
  { name: "Frontend", icon: "fa-solid fa-desktop" },
  { name: "Backend", icon: "fa-solid fa-gear" },
  { name: "Others", icon: "fa-solid fa-wrench" },
];

export const education = [
  {
    program: "Google Ads Certification",
    school: "Grow with Google",
    year: "Currently",
  },
  {
    program: "Software Engineering Bootcamp",
    school: "Ironhack",
    year: "Aug 2022 - Dec 2022",
  },
  {
    program: "Science Bachelor Degree",
    school: "IES Bruguers",
    year: "2015 - 2017",
  },
];
export const languages = [
  { language: "english", level: "Advanced" },
  { language: "spanish", level: "Native" },
  { language: "catalan", level: "Native" },
];

export const experience = [
  {
    year: "2024 - present",
    position: "Supervisor",
    company: "Jump Juice Bar",
    location: "Dublin, Ireland",
    description:
      "As a supervisor, I was responsible for leading a team, managing stock control, optimizing task distribution, reducing service times, ensuring product availability, and driving sales through effective coordination and leadership.",
  },
  {
    year: "Jan 2023 - Dec 2023",
    position: "Full Stack Developer",
    company: "Haddock",
    location: "Barcelona, Spain",
    description:
      "At a company specialising in expense management software solutions for the hospitality industry, I was part of the team responsible for developing and enhancing the web platform. I contributed to the end-to-end development, improving data management processes, implementing front-end interfaces and working closely with the UX/UI team to deliver a seamless and intuitive user experience.",
  },
  {
    year: "Nov 2020 - Dec 2022",
    position: "Administrative",
    company: "Barcelona Epidemiology Service",
    location: "Barcelona, Spain",
    description:
      "As administrative support at the Epidemiological Service, I managed Covid-19 data, ensured compliance, and produced reports to inform public health decisions.",
  },
];

export const contacts = [
  {
    info: "@AndreaAlarconValdes",
    class: "fa-brands fa-github",
    link: "https://github.com/AndreaAlarconValdes",
    color: "black",
    bgColor: "white",
  },
  {
    info: "@andreaalarconvaldes",
    class: "fa-brands fa-linkedin-in",
    link: "https://www.linkedin.com/in/andreaalarconvaldes/",
    color: "white",
    bgColor: "#0051a3",
  },
  {
    info: "alarconvaldes.a@gmail.com",
    class: "fa-solid fa-envelope",
    link: "mailto:alarconvaldes.a@gmail.com",
    color: "white",
    bgColor: "#4da6ff",
  },
  {
    info: "+353 87 217 3094",
    class: "fa-brands fa-whatsapp",
    link: "",
    color: "black",
    bgColor:
      "linear-gradient(to right, #169b62 0%, #169b62 33.33%, #ffffff 33.33%, #ffffff 66.66%, #ff883e 66.66%, #ff883e 100%)",
  },

  {
    info: "+34 644 403 445",
    class: "fa-brands fa-whatsapp",
    link: "",
    color: "black",
    bgColor:
      "linear-gradient(to bottom, #aa151b 0%, #aa151b 25%, #f1bf00 25%, #f1bf00 75%, #aa151b 75%, #aa151b 100%)",
  },
];

export const foldersRoutes = [
  { img: "icon-about", title: "About", type: "about" },
  { img: "icon-resume", title: "Resume", type: "resume" },
  {
    img: "icon-projects",
    title: "Projects",
    type: "projects",
  },
  { img: "icon-contact", title: "Contact", type: "contact" },
  { img: "icon-bin", title: "Clean", type: "bin" },
];

export const deskFolders = [
  { className: "resumepdf-icon", img: "paper", title: "Resume.pdf", sound: "", link: "./CV.pdf" },
  { className: "folder-01", img: "folder", title: "Project 01 (Ecommerce)", sound: "paper.mps", link: "https://github.com/AndreaAlarconValdes/shopping-app" },
  { className: "folder-02", img: "folder", title: "Project 02 (NotesApp)", sound: "paper.mps", link: "https://github.com/AndreaAlarconValdes/notes-app" },
  { className: "folder-03", img: "folder", title: "Project 03 (Portfolio)", sound: "paper.mps", link: "https://github.com/AndreaAlarconValdes/portfolio-andrea" },
];
