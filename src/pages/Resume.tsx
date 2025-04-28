import Box from "../components/Box";
import FilterableList from "../components/FilterableList";
import "./Resume.css";
import {
  education,
  skills,
  skillsFilters,
  languages,
  experience,
} from "../constants/constants.ts";
import HandwriteText from "../components/HandwriteText.tsx";
import { useColor } from "../context/ColorContext.tsx";
import { useState } from "react";

const Resume = () => {
  const { color } = useColor();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      id="resume"
      className="resume-page"
      style={{
        backgroundColor: color,
        backgroundImage: `
      linear-gradient(to right, lightgray 1px, transparent 1px),
      linear-gradient(to bottom, lightgray 1px, transparent 1px)
    `,
        backgroundSize: "100px 100px",
      }}
    >
      <div className="left-column">
        <div className="CV-folder">
          <HandwriteText title="Download my CV" arrowPosition="right" />
          <a href="./CV.pdf" target="_blank" rel="noopener noreferrer">
            <img
              src={isHovered ? "/icon-folder-hover.svg" : "/icon-folder.svg"}
              alt="Imagen con hover"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ width: 80,cursor:"pointer", transition: "all 0.3s ease-in-out" }}
            />
          </a>
        </div>
        <h1 className="page-title">RESUME</h1>
        <Box title="Education" className="education-box">
          <div className="education-container">
            {education.map((item) => (
              <div className="education-items">
                <h3>{item.program}</h3>
                <p>
                  {item.school}, {item.year}
                </p>
              </div>
            ))}
          </div>
        </Box>
      </div>
      <div className="center-column">
        <div className="languages">
          <span></span>
          <div className="languages-title">
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
      <div className="right-column">
        <Box title="Work experience" className="experience-box">
          <div className="education-container">
            {experience.map((item) => (
              <div>
                <div className="experience-title">
                  <h3>{item.company}</h3>
                  <p>
                    {item.location} | {item.year}
                  </p>
                </div>
                <div className="roll-description">
                  <h4>{item.position}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Resume;
