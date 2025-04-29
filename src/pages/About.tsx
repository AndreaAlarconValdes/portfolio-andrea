import { useState } from "react";
import Box from "../components/Box";
import { foldersRoutes, icons } from "../constants/constants";
import { useColor } from "../context/ColorContext";
import "./About.css";
import Clock from "../components/Clock";
import Resume from "./Resume";
import Contact from "./Contact";
import Folder from "../components/Folder";
import Projects from "./Projects";
import Settings from "../components/Settings";
import Calculator from "../components/Calculator";

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
          </Box>
          <Calculator />
          <Settings onColorChange={setColor} onFilterChange={setFilter} />
        </div>

        <div className="div2">
          <Box title="About me" color="#f8d1fc">
            <div className="about-description">
              <h2>Andrea Alarcón Valdés</h2>
              <h4>
                Full-stack developer specialising in front-end development from
                Spain, based in Dublin.
              </h4>
              <p>
                Passionate about creating attractive and functional interfaces,
                always focused on delivering intuitive and user-centered
                experiences. I enjoy the creative process, blending design and
                development to achieve smooth and meaningful interactions.
              </p>
              <p>
                I see myself as a creative, organised, detail-oriented and
                curious person with a strong mindset for continuous learning and
                innovation. I work closely with multidisciplinary teams -
                designers, developers and marketing - to create digital
                experiences that are not only visually compelling, but also
                aligned with clear objectives. Adaptability, teamwork and
                problem solving are key pillars of my approach.
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
                      style={{
                        color: icon.color,
                        backgroundColor: icon.bgColor,
                      }}
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
                    else if (item.type === "projects") openProjects();
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
