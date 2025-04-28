import { useState } from "react";
import Box from "../components/Box";
import ColorPicker from "../components/ColorPicker";
import { foldersRoutes, icons } from "../constants/constants";
import { useColor } from "../context/ColorContext";
import "./About.css";
import Clock from "../components/Clock";
import Resume from "./Resume";
import Contact from "./Contact";
import Folder from "../components/Folder";
import Projects from "./Projects";

const About = () => {
  const { color, setColor } = useColor();
  const [filter, setFilter] = useState("none");
  const [isOpenResume, setIsOpenResume] = useState(false);
  const [isOpenContact, setIsOpenContact] = useState(false);
  const [isOpenProjects, setIsOpenProjects] = useState(false);


  const openResume = () => {
    setIsOpenResume(true);
  };

  const closeResume = () => {
    setIsOpenResume(false);
  };

  const openContact = () => {
    setIsOpenContact(true);
  };

  const closeContact = () => {
    setIsOpenContact(false);
  };
  const openProjects = () => {
    setIsOpenProjects(true);
  };

  const closeProjects = () => {
    setIsOpenProjects(false);
  };
  return (
    <>
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
          <Clock />
          <Box className="self-portrait" title="Photo">
            <img src="./selfie.jpeg" alt="selfie" />
            <div className="camera-button">
              <i className="fa-solid fa-camera"></i>
            </div>
          </Box>
  
          <ColorPicker onColorChange={setColor} onFilterChange={setFilter} />
        </div>

        <div className="div2">
          <Box title="About me" color="#f8d1fc">
            <div className="about-description">
              <p>
                I'm a Full-Stack Developer with a specialization in Front-End.
                I'm from Spain but currently living in Dublin and actively
                seeking new opportunities. I’m passionate about creating
                attractive and functional interfaces, always focusing on
                intuitive user experiences. I consider myself creative,
                organized, detail-oriented and curious, someone who enjoys the
                creative process.
              </p>
            </div>
          </Box>
          <Box color="#a7e6fe" className="contact-box-info">
        <ul className="contact-info">
          {icons.map((icon) => (
            <li>
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <i
                  className={icon.class}
                  style={{ color: icon.color, backgroundColor: icon.bgColor }}
                ></i>
              </a>
              <p>{icon.info}</p>
            </li>
          ))}
        </ul>
      </Box>
        </div>
        <div className="div3">
          <ul>
            {foldersRoutes.map((item) => (
              <li key={item.title}>
                <Folder
                  img={item.img}
                  title={item.title}
                  handleOnClick={() => {
                    if (item.type === "resume") openResume();
                    else if (item.type === "projects")
                      openProjects(); 
                    else if (item.type === "contact") openContact();
                  }}
                />
              </li>
            ))}
          </ul>
        </div>

      </div>
      {isOpenResume && (
        <>
          <div onClick={closeResume} className="overlay">
            <Resume />
          </div>
        </>
      )}
{isOpenProjects && (
        <>
          <div onClick={closeProjects} className="overlay">
            <Projects />
          </div>
        </>
      )}
      {isOpenContact && (
        <>
          <div onClick={closeContact} className="overlay">
            <Contact />
          </div>
        </>
      )}
    </>
  );
};

export default About;
