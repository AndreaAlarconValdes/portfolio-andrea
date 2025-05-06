import { useState } from "react";
import { useColor } from "../context/ColorContext";
import "./Main.css";
import Clock from "../components/Clock";
import Folder from "../components/Folder";
import { foldersRoutes } from "../constants/constants";
import Box from "../components/Box";
import About from "./About/About";
import Resume from "./Resume/Resume";
import Calculator from "../components/Calculator";
import Settings from "../components/Settings";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

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

  // const closeAbout = () => {
  //   setIsOpenAbout(false);
  // };
  const openResume = () => {
    setIsOpenResume(true);
  };

  // const closeResume = () => {
  //   setIsOpenResume(false);
  // };

  const openContact = () => {
    setIsOpenContact(true);
  };

  // const closeContact = () => {
  //   setIsOpenContact(false);
  // };
  const openProjects = () => {
    setIsOpenProjects(true);
  };

  // const closeProjects = () => {
  //   setIsOpenProjects(false);
  // };

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
            <div className="file-dropdown">
              <button onClick={toggleDropdown}>
                <span>File</span>
              </button>
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <button onClick={() => openAbout()}>About</button>
                  <button onClick={() => openResume()}>Resume</button>
                  <button onClick={() => openProjects()}>Projects</button>
                  <button onClick={() => openContact()}>Contact</button>
                </div>
              )}
            </div>
            <button onClick={() => openCalculator()}>Calculator</button>
            <button onClick={() => openSettings()}>Settings</button>
          </div>
        </div>
        <Clock />
      </div>
      <div className="desk">
        <div className="main-desk">
          <Box color="#0000ee" className="welcome-box">
            <img src="./portfolio.png" />
          </Box>
          {isOpenCalculator && <Calculator onClose={closeCalculator} />}
          {isOpenSettings && (
            <Settings
              onColorChange={setColor}
              onFilterChange={setFilter}
              onClose={closeSettings}
            />
          )}
          {isOpenAbout && <About />}
          {isOpenResume && <Resume />}
          {isOpenProjects && <Projects/>}
          {isOpenContact && <Contact/>}
        </div>
        <div className="routes-desk">
          <ul>
            {foldersRoutes.map((item) => (
              <li key={item.title}>
                <Folder
                  img={item.img}
                  title={item.title}
                  handleOnClick={() => {
                    if (item.type === "about") openAbout();
                    else if (item.type === "resume") openResume();
                    else if (item.type === "projects") openProjects();
                    else if (item.type === "contact") openContact();
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
