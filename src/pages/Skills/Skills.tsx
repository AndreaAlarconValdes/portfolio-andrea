import { useState } from "react";
import Box from "../../components/Box";
import { skills } from "../../constants/constants";
import "./Skills.css";

const Skills = () => {
  const [activeSection, setActiveSection] = useState("technical");

  return (
    <div className="skills">
      <Box title="skills" className="skills-content">
        <header className="skills-header">
          <button
            onClick={() => setActiveSection("technical")}
            className={`skill-nav ${activeSection === "technical" ? "active" : ""}`}
          >
            Technical Skills
          </button>
          <button
            onClick={() => setActiveSection("tools")}
            className={`skill-nav ${activeSection === "tools" ? "active" : ""}`}
          >
            Tools & Platforms
          </button>
          <button
            onClick={() => setActiveSection("soft")}
            className={`skill-nav ${activeSection === "soft" ? "active" : ""}`}
          >
            Soft Skills
          </button>
        </header>
        <main className="skills-info">
          {activeSection === "technical" && (
            Object.entries(skills.technicalSkills).map(([category, items]) => (
              <div key={category} className="skill-category">
                <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                <ul className="skill-list">
                  {items.map((skill) => (
                    <li key={skill.name}>
                      <img src={`./${skill.icon}.png`} alt={skill.name} width={45} />
                      <p>{skill.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}

          {activeSection === "tools" && (
            Object.entries(skills.toolsAndPlatforms).map(([category, items]) => (
              <div key={category} className="skill-category">
                <h3>{category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}</h3>
                <ul className="skill-list">
                  {items.map((skill) => (
                    <li key={skill.name}>
                      <img src={`./${skill.icon}.png`} alt={skill.name} width={45} />
                      <p>{skill.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
          {activeSection === "soft" && (
            Object.entries(skills.softSkills).map(([category, items]) => (
              <div key={category} className="skill-category">
                <h3>{category}</h3>
                <ul className="soft-skill-list">
                  {items.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))
          )}

        </main>
      </Box>
    </div>
  );
};

export default Skills;
