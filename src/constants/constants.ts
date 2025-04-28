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
    { program: "Google Ads Certification", school: "Grow with Google" ,year: "Currently"},
    { program: "Software Engineering Bootcamp", school: "Ironhack", year:"Aug 2022 - Dec 2022" },
    { program: "Science Bachelor Degree", school: "IES Bruguers", year: "2015 - 2017" },
  ];
  export const languages = [
    { language: "English", level: "Advanced" },
    { language: "Spanish", level: "Native" },
    { language: "Catalan", level: "Native" },
  ];

  export const experience = [
    {
      year: "2024 - present",
      position: "Supervisor",
      company: "Jump Juice Bar",
      location: "Dublin, Ireland",
      description: "As a supervisor, I led a team of 10, optimizing task distribution to improve operational efficiency. I reduced service times, managed stock and orders to minimize waste, and ensured product availability. I also trained staff in hygiene, food handling, and customer service, while overseeing daily cash counts with 100% accuracy. My leadership in coordinating promotions contributed to increased sales."
    },
    {
      year: "Jan 2023 - Dec 2023",
      position: "Full Stack Developer",
      company: "Haddock",
      location: "Barcelona, Spain",
      description: "At a company specialising in expense management software solutions for the hospitality industry, I was part of the team responsible for developing and enhancing the web platform. I contributed to the end-to-end development, improving data management processes, implementing front-end interfaces and working closely with the UX/UI team to deliver a seamless and intuitive user experience."
    },
    {
      year: "Nov 2020 - Dec 2022",
      position: "Administrative",
      company: "Barcelona Epidemiology Service",
      location: "Barcelona, Spain",
      description: "As an administrative support at the Epidemiological Service, I managed and analyzed Covid-19 data, ensuring accuracy and compliance with health regulations. I created statistical reports and visualizations to support public health decisions, identifying key trends and insights related to virus transmission and containment measures."

    },
  ];

  export const icons = [
    { class: "fa-solid fa-envelope", link:"mailto:alarconvaldes.a@gmail.com", color: "white", bgColor: "#4da6ff" },
    { class: "fa-brands fa-linkedin-in" , link:"https://www.linkedin.com/in/andreaalarconvaldes/", color: "white", bgColor: "#0051a3"},
    { class: "fa-brands fa-whatsapp" , link:"", color: "white", bgColor: "#25D366"},
    { class: "fa-brands fa-github" , link:"https://github.com/AndreaAlarconValdes", color: "black", bgColor: "white"},
  ];

  export const foldersRoutes = [
    {img:"icon-folder", title:"Resume"  },
    {img:"icon-eye",title:"Projects"},
    {img:"icon-mail", title:"Contact"},
  ]

  export const aboutFilters = [
    {name:"Background"},
    {name:"Hobbies"},
    {name:"Personal information"},
  ]

  export const aboutItems = [
    {description:"Lorem ipsum 1", category:"Background"},
    {description:"Lorem ipsum 2", category:"Hobbies"},
    {description:"Lorem ipsum 3", category:"Personal information"},
  ]