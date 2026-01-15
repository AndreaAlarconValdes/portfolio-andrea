import { useMemo, useState } from "react";
import Box from "../../components/Box";
import { skills } from "../../constants/constants";
import "./Skills.css";
import React from "react";

const Skills = () => {
  const [activeSkillsSection, setActiveSkillsSection] = useState("technical");

  const technicalEntries = useMemo(
  () => Object.entries(skills.technicalSkills),
  [] 
);

const toolsEntries = useMemo(
  () => Object.entries(skills.toolsAndPlatforms),
  []
);

const softEntries = useMemo(
  () => Object.entries(skills.softSkills),
  []
);

  return (
    <div className="skills">
      <Box title="skills" className="skills-content">
        <header className="skills-header">
          <button
            onClick={() => setActiveSkillsSection("technical")}
            className={`skill-nav ${activeSkillsSection === "technical" ? "active" : ""}`}
          >
            Technical Skills
          </button>
          <button
            onClick={() => setActiveSkillsSection("tools")}
            className={`skill-nav ${activeSkillsSection === "tools" ? "active" : ""}`}
          >
            Tools & Platforms
          </button>
          <button
            onClick={() => setActiveSkillsSection("soft")}
            className={`skill-nav ${activeSkillsSection === "soft" ? "active" : ""}`}
          >
            Soft Skills
          </button>
        </header>
        <main className="skills-info">
          {activeSkillsSection === "technical" && (
            technicalEntries.map(([category, items]) => (
              <div key={category} className="skill-category">
                <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                <ul className="skill-list">
                  {items.map((skill) => (
                    <li key={skill.name}>
                      <img src={`./${skill.icon}.png`} alt={skill.name} loading="lazy"/>
                      <p>{skill.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}

          {activeSkillsSection === "tools" && (
           toolsEntries.map(([category, items]) => (
              <div key={category} className="skill-category">
                <h3>{category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}</h3>
                <ul className="skill-list">
                  {items.map((skill, index) => (
                    <li key={`${category}-${skill}-${index}`}>
                      <img src={`./${skill.icon}.png`} alt={skill.name} loading="lazy"/>
                      <p>{skill.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
          {activeSkillsSection === "soft" && (
            softEntries.map(([category, items]) => (
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

export default React.memo(Skills);