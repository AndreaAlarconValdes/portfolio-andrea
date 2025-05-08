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
    <div className="general-page" style={style}>
      <FilterPanel
        onClose={onClose}
        filters={[
          { id: "skills", label: "Skills" },
          { id: "languages", label: "Languages" },
          { id: "education", label: "Education" },
          { id: "experience", label: "Experience" },
        ]}
        contentMap={{
          skills: (
            <ul className="filtered-items">
              {skills.map((item) => (
                <li key={item.name}>
                  <img src={`./${item.icon}.png`} alt={item.name} />
                  <h5>{item.name}</h5>
                </li>
              ))}
            </ul>
          ),
          languages: (
            <ul>
              {languages.map((item) => (
                <li>
                  <img src="star.png" width={25} />
                  <h3>{item.language}</h3>
                  <p>{item.level}</p>
                </li>
              ))}
            </ul>
          ),
          education: (
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
          ),
          experience: (
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
          ),
        }}
        defaultFilterId="skills"
      />
    </div>
  );
};

export default Resume;
