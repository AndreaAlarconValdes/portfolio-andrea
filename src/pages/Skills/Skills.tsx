import { FilterPanel } from "../../components/FilterPanel";
import { skills, softSkills } from "../../constants/constants";
import "./Skills.css";
interface SkillsProps {
  onClose: () => void;
  style?: React.CSSProperties;
}
const Skills = ({ onClose, style }: SkillsProps) => {
  return (
    <div className="general-page" style={style} onClick={onClose}>
      <FilterPanel
        onClose={onClose}
        filters={[{ id: "skills", label: "Technical Skills" },
        { id: "softSkills", label: "Soft Skills" },
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
          softSkills: (
            <ul className="soft-skills-items">
              {softSkills.map((item) => (
                <li key={item}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          ),
        }}
        defaultFilterId="skills"
      />
    </div>
  );
};

export default Skills;
