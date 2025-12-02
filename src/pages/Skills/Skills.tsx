import Box from "../../components/Box";
import { skills } from "../../constants/constants";
import "./Skills.css";

const Skills = () => {
  return (
  
      <Box  title="skills">
      <ul className="skills-items">
              {skills.map((item) => (
                <li key={item.name}>
                  <img src={`./${item.icon}.png`} alt={item.name} width={45}/>
                  <p>{item.name}</p>
                </li>
              ))}
            </ul>
      </Box>
  );
};

export default Skills;
