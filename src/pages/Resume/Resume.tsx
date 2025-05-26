import { FilterPanel } from "../../components/FilterPanel";
import {
  education,
  experience,
  languages,
  skills,
} from "../../constants/constants";
import "./Resume.css";
interface ResumeProps {
  onClose: () => void;
  style?: React.CSSProperties;

}
const Resume = ({ onClose,style }: ResumeProps) => {
  return (
    <div className="general-page" style={style} onClick={onClose}>
      <FilterPanel
        onClose={onClose}
        filters={[
          { id: "skills", label: "Skills" },
          { id: "experience", label: "Experience" },
          { id: "education", label: "Education" },
          { id: "languages", label: "Languages" },
        ]}
        contentMap={{
          skills: (
            <ul className="skills-items">
              {skills.map((item) => (
                <li key={item.name}>
                  <img src={`./${item.icon}.png`} alt={item.name} />
                  <h5>{item.name}</h5>
                </li>
              ))}
            </ul>
          ),
          languages: (
            <div className="languages-items">
            <ul>
              {languages.map((item) => (
                <li key={item.language}>
                  <img src={`./${item.language}.png`} width={55} />
                  <h3>{item.language}</h3>
                  <p>{item.level}</p>
                </li>
              ))}
            </ul>
            </div>
          ),
          education: (
            <div className="education-container">
              {education.map((item) => (
                <div className="education-items" key={item.program}>
                  <h3>{item.program}</h3>
                  <p>
                    {item.school}, {item.year}
                  </p>
                </div>
              ))}
            </div>
          ),
          experience: (
            <div className="experience-container">
              {experience.map((item) => (
                <div key={item.company}>
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
          ),
        }}
        defaultFilterId="skills"
      />
    </div>
  );
};

export default Resume;
