import { useState } from "react";
import Box from "../components/Box";
import ColorPicker from "../components/ColorPicker";
import Folder from "../components/Folder";
import HandwriteText from "../components/HandwriteText";
import { foldersRoutes, icons } from "../constants/constants";
import { useColor } from "../context/ColorContext";
import "./About.css";

const About = () => {
  const { color, setColor } = useColor();
  const [filter, setFilter] = useState("none");

  return (
    <div
      className="parent"
      style={{
        filter: filter,
        backgroundColor: color,
        backgroundImage: `
        linear-gradient(to right, lightgray 1px, transparent 1px),
        linear-gradient(to bottom, lightgray 1px, transparent 1px)
      `,
        backgroundSize: "100px 100px",

      }}
    >
      <div className="div1">
        <div className="folders-navigation">
          <ul>
            {foldersRoutes.map((route) => (
              <li key={route.title}>
                <Folder img={route.img} title={route.title} route={route.route} />
              </li>
            ))}
          </ul>
        </div>
        <Box className="self-portrait" title="Photo">
          <img src="./selfie.jpeg" alt="selfie" />
          <div className="camera-button">
            <i className="fa-solid fa-camera"></i>
          </div>
        </Box>
        <ColorPicker  onColorChange={setColor} onFilterChange={setFilter}/>
      </div>

      <div className="div2">
        <Box title="About me" color="#f8d1fc">
          <div className="about-description">
            <p>
              I'm a Full-Stack Developer with a specialization in Front-End. I'm
              from Spain but currently living in Dublin and actively seeking new
              opportunities. I’m passionate about creating attractive and
              functional interfaces, always focusing on intuitive user
              experiences. I consider myself creative, organized,
              detail-oriented and curious, someone who enjoys the creative
              process.
            </p>
          </div>
        </Box>
      </div>

      <div className="div3">
        <ul className="contact-list">
          {icons.map((icon) => (
            <li>
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <i
                  className={icon.class}
                  style={{ color: icon.color, backgroundColor: icon.bgColor }}
                ></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
