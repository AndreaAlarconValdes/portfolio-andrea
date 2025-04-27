import FilterableList from "../components/FilterableList";
import "./Resume.css";

const Resume = () => {
  const skills = [
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

  const skillsFilters = [
    { name: "All", icon: "fa-solid fa-globe" },
    { name: "Frontend", icon: "fa-solid fa-desktop" },
    { name: "Backend", icon: "fa-solid fa-gear" },
    { name: "Others", icon: "fa-solid fa-wrench" },
  ];

  // const education = [
  //   { program: "Google Ads Certification", school: "Grow with Google" },
  //   { program: "Software Engineering Bootcamp", school: "Ironhack" },
  //   { program: "Science Bachelor Degree", school: "IES Bruguers" },
  // ];

  // const experience = [
  //   {
  //     year: "2024 - present",
  //     position: "Supervisor",
  //     company: "Jump Juice Bar",
  //     location: "Dublin, Ireland",
  //   },
  //   {
  //     year: "Jan 2023 - Dec 2023",
  //     position: "Full Stack Developer",
  //     company: "Haddock",
  //     location: "Barcelona, Spain",
  //   },
  //   {
  //     year: "Nov 2020 - Dec 2022",
  //     position: "Administrative",
  //     company: "Barcelona Epidemiology Service",
  //     location: "Barcelona, Spain",
  //   },
  // ];

  const languages = [
    { language: "English", level: "Advanced" },
    { language: "Spanish", level: "Native" },
    { language: "Catalan", level: "Native" },
  ];

  
  


  return (
    <div id="resume" className="resume-page">
      <div className="languages">
        <div className="languages-title">
          <i className="fa-solid fa-chevron-left"></i>
          <h2>Languages</h2>
        </div>
        <div className="languages-content">
          <ul>
            {languages.map((item) => (
              <li>
                <i className="fa-solid fa-check"></i>
                <h3>{item.language}</h3>
                <p>{item.level}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <FilterableList
        items={skills}
        itemsTitle="Skills"
        filters={skillsFilters}
        filterTitle="Technical Skills"
      />
    </div>
  );
};

export default Resume;
