import Box from "../../components/Box";
import { skills } from "../../constants/constants";
import "./Skills.css";
interface SkillsProps {
  onClose: () => void;
  style?: React.CSSProperties;
}
const Skills = ({ onClose, style }: SkillsProps) => {
  return (
    <div className="general-page" style={style} onClick={onClose}>
      <Box  onClose={onClose}>
      <ul className="skills-items">
              {skills.map((item) => (
                <li key={item.name}>
                  <img src={`./${item.icon}.png`} alt={item.name} width={45}/>
                  <p>{item.name}</p>
                </li>
              ))}
            </ul>
      </Box>
    </div> 
  );
};

export default Skills;
