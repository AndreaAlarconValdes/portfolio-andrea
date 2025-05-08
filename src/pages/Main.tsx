import { useState } from "react";
import { useColor } from "../context/ColorContext";
import "./Main.css";
import Clock from "../components/Clock";
import Folder from "../components/Folder";
import { foldersRoutes } from "../constants/constants";
import Box from "../components/Box";
import Calculator from "../components/Calculator";
import Settings from "../components/Settings";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Resume from "./Resume/Resume";

const Main = () => {
  const { color, setColor } = useColor();
  const [filter, setFilter] = useState("none");
  const [isOpenResume, setIsOpenResume] = useState(false);
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [isOpenContact, setIsOpenContact] = useState(false);
  const [isOpenProjects, setIsOpenProjects] = useState(false);
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  const [isOpenCalculator, setIsOpenCalculator] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const openSettings = () => {
    setIsOpenSettings(true);
  };

  const closeSettings = () => {
    setIsOpenSettings(false);
  };

  const openCalculator = () => {
    setIsOpenCalculator(true);
  };

  const closeCalculator = () => {
    setIsOpenCalculator(false);
  };

  const openAbout = () => {
    setIsOpenAbout(true);
  };

  const closeAbout = () => {
    setIsOpenAbout(false);
  };
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


  const closeAll = () => {
    closeSettings();
    closeCalculator();
    closeAbout();
    closeResume();
    closeContact();
    closeProjects();
  };
  return (
    <div
      className="screen"
      style={{
        filter: filter,
        backgroundColor: color,
      }}
    >
      <div className="menu-bar">
        <div className="menu-bar-nav">
          <h3>Andrea Alarcón</h3>
          <div className="nav">
            <button onClick={() => openCalculator()}>Calculator</button>
            <button onClick={() => openSettings()}>Settings</button>
          </div>
        </div>
        <Clock />
      </div>
      <div className="desk">
        <div className="main-desk">
          <Box className="welcome-box">
            <video autoPlay playsInline muted id="background-video">
              <source src="./portfolio.mp4" type="video/mp4" />
            </video>
          </Box>
          {isOpenCalculator && <Calculator onClose={closeCalculator} />}
          {isOpenSettings && (
            <Settings
              onColorChange={setColor}
              onFilterChange={setFilter}
              onClose={closeSettings}
            />
          )}
          {isOpenAbout && <About onClose={() => closeAbout()} />}
          {isOpenResume && <Resume onClose={() => closeResume()} />}
          {isOpenProjects && <Projects onClose={()=>{closeProjects()}}/>}
          {isOpenContact && <Contact onClose={()=>{closeContact()}}/>}
        </div>
        <div className="routes-desk">
          <ul>
            {foldersRoutes.map((item) => (
              <li key={item.title}>
                <Folder
                  img={item.img}
                  title={item.title}
                  sound={item.sound}
                  handleOnClick={() => {
                    if (item.type === "about") openAbout();
                    else if (item.type === "resume") openResume();
                    else if (item.type === "projects") openProjects();
                    else if (item.type === "contact") openContact();
                    else if (item.type === "bin") closeAll();
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
