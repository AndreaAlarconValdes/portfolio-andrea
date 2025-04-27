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

const Resume = () => {
  return (
    <div id="resume" className="resume-page">
      <div className="left-column">
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
                  <p>
               {item.description}
                  </p>
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
