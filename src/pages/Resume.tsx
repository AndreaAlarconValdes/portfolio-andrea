import "./Resume.css";

const Resume = () => {
  const skills = [
    { icon: "fa-brands fa-react", name: "react" },
    { icon: "fa-brands fa-html5", name: "html5" },
    { icon: "fa-brands fa-css3-alt", name: "css3" },
    { icon: "fa-brands fa-js", name: "javascript" },
    { icon: "fa-brands fa-node-js", name: "node.js" },
    { icon: "fa-solid fa-database", name: "database" },
    { icon: "fa-brands fa-docker", name: "docker" },
    { icon: "fa-brands fa-git-alt", name: "git" },
    { icon: "fa-brands fa-figma", name: "figma" },
    { icon: "fa-brands fa-google", name: "google ads" },
    { icon: "fa-brands fa-wordpress-simple", name: "wordpress" },
    { icon: "fa-brands fa-shopify", name: "shopify" },
  ];

  const education = [
    { program: "Google Ads Certification", school: "Grow with Google" },
    { program: "Software Engineering Bootcamp", school: "Ironhack" },
    { program: "Science Bachelor Degree", school: "IES Bruguers" },
  ];

  const experience = [
    {
      year: "2024 - present",
      position: "Supervisor",
      company: "Jump Juice Bar",
      location: "Dublin, Ireland",
    },
    {
      year: "Jan 2023 - Dec 2023",
      position: "Full Stack Developer",
      company: "Haddock",
      location: "Barcelona, Spain",
    },
    {
      year: "Nov 2020 - Dec 2022",
      position: "Administrative",
      company: "Barcelona Epidemiology Service",
      location: "Barcelona, Spain",
    },
  ];

  const languages = [
    {language:"English",level:"Advanced"},
    {language:"Spanish",level:"Native"},
    {language:"Catalan",level:"Native"},
  ]
  return (
    <main id="resume" className="resume-container">
      <div>
        <div className="education-section">
          <h2>Education</h2>
          <ul>
            {education.map((item) => (
              <li>
                <i className="fa-solid fa-award"></i>
                <div>
                  <h3>{item.program}</h3>
                  <p>{`by ${item.school}`}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="experience-section">
          <h2>Experience</h2>
          <ul>
            {experience.map((item) => (
              <li>
                <h4>{item.year}</h4>
                <div>
                  <h3>{item.position}</h3>
                  <p>{item.company}</p>
                  <p>{item.location}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div className="skills-section">
          <h1>RESUME</h1>
          <h1>RESUME</h1>
          <h2>Technical Skills</h2>
          <ul>
            {skills.map((skill) => (
              <li key={skill.name}>
                <i className={skill.icon}></i>
                <p>{skill.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="languages-section">
          <h2>Languages</h2>
          <ul>
            {languages.map((item) => (
              <li>
                <h3>{item.language}</h3>
                <p>{item.level}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Resume;
