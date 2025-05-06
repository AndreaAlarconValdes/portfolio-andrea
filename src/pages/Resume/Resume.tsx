import Box from "../../components/Box.tsx";
import FilterableList from "../../components/FilterableList.tsx";
import "./Resume.css";
import {
  education,
  skills,
  skillsFilters,
  languages,
  experience,
} from "../../constants/constants.ts";
import { useState } from "react";

const Resume = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="resume-page">
      <div className="left-column">
      <Box
        square
        color="#dadad3"
        bgColor="#f7f6f0"
        className="CV-box-container"
      >
        <div className="CV-container">
          <div>
            <a href="./CV.pdf" target="_blank" rel="noopener noreferrer">
              <img
                src={
                  isHovered ? "./icon-resume-hover.svg" : "./icon-resume.svg"
                }
                alt="Imagen con hover"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  width: 70,
                  cursor: "url(./cursor-pointer.png), default",
                  transition: "all 0.3s ease-in-out",
                }}
              />
            </a>
          </div>
          <div>
            <h5>Take a look at my CV</h5>
            <p>Click on the folder to download it</p>
          </div>
        </div>
      </Box>

        <Box title="Education">
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
        <Box color="#f49450" title="Languages" className="languages-content">
          <ul>
            {languages.map((item) => (
              <li>
                <i className="fa-solid fa-check"></i>
                <h3>{item.language}</h3>
                <p>{item.level}</p>
              </li>
            ))}
          </ul>
        </Box>
      </div>
      <div>
      <FilterableList
        items={skills}
        itemsTitle="Skills"
        filters={skillsFilters}
        filterTitle="Technical Skills"
      />
      </div>
      <div>
      <Box title="Work experience" className="experience-box" color="#F9D13E">
        <div className="experience-container">
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
