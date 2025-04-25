import "./Skills.css";

const Skills = () => {
  const technicalSkills = [
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

  const softSkills = [
    { name: "Project Management" },
    { name: "Teamwork" },
    { name: "Problem-solving" },
    { name: "Leadership" },
    { name: "Creativity" },
    { name: "Adaptability" },
  ];

  return (
    <div className="skills-page">
      <div className="skills-container">
        <div className="soft-skills">
          <h1>Resume</h1>
          <h1>Resume</h1>
          <h2>Skills</h2>
          <ul>
            {softSkills.map((skill) => (
              <li key={skill.name}>
                <p>{skill.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="technical-skills">
          <ul>
            {technicalSkills.map((skill) => (
              <li key={skill.name}>
                <i className={skill.icon}></i>
                <p>{skill.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
