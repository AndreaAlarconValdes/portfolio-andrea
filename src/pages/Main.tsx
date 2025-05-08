import { useEffect, useState } from "react";
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

type WindowName = "about" | "resume" | "projects" | "contact" | "settings" | "calculator";

const Main = () => {
  const { color, setColor, filter, setFilter } = useColor();
  const [isOpenResume, setIsOpenResume] = useState(false);
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [isOpenContact, setIsOpenContact] = useState(false);
  const [isOpenProjects, setIsOpenProjects] = useState(false);
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  const [isOpenCalculator, setIsOpenCalculator] = useState(false);

  // 👉 Estado para zIndex
  const [zIndexes, setZIndexes] = useState<Record<WindowName, number>>({
    about: 1,
    resume: 1,
    projects: 1,
    contact: 1,
    settings: 1,
    calculator: 1,
  });
  const [currentMaxZ, setCurrentMaxZ] = useState(1);

  // 👉 función para traer al frente
  const bringToFront = (windowName: WindowName) => {
    setCurrentMaxZ((prev) => prev + 1);
    setZIndexes((prev) => ({
      ...prev,
      [windowName]: currentMaxZ + 1,
    }));
  };

  useEffect(() => {
    document.body.style.backgroundColor = color;
    document.body.style.filter = filter;
  }, [color, filter]);

  const openSettings = () => {
    setIsOpenSettings(true);
    bringToFront("settings");
  };

  const closeSettings = () => {
    setIsOpenSettings(false);
  };

  const openCalculator = () => {
    setIsOpenCalculator(true);
    bringToFront("calculator");
  };

  const closeCalculator = () => {
    setIsOpenCalculator(false);
  };

  const openAbout = () => {
    setIsOpenAbout(true);
    bringToFront("about");
  };

  const closeAbout = () => {
    setIsOpenAbout(false);
  };

  const openResume = () => {
    setIsOpenResume(true);
    bringToFront("resume");
  };

  const closeResume = () => {
    setIsOpenResume(false);
  };

  const openContact = () => {
    setIsOpenContact(true);
    bringToFront("contact");
  };

  const closeContact = () => {
    setIsOpenContact(false);
  };

  const openProjects = () => {
    setIsOpenProjects(true);
    bringToFront("projects");
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
            <button onClick={openCalculator}>Calculator</button>
            <button onClick={openSettings}>Settings</button>
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
          {isOpenCalculator && <Calculator onClose={closeCalculator} style={{ zIndex: zIndexes.calculator }} />}
          {isOpenSettings && <Settings onColorChange={setColor} onFilterChange={setFilter} onClose={closeSettings} style={{ zIndex: zIndexes.settings }} />}
          {isOpenAbout && <About onClose={closeAbout} style={{ zIndex: zIndexes.about }} />}
          {isOpenResume && <Resume onClose={closeResume} style={{ zIndex: zIndexes.resume }} />}
          {isOpenProjects && <Projects onClose={closeProjects} style={{ zIndex: zIndexes.projects }} />}
          {isOpenContact && <Contact onClose={closeContact} style={{ zIndex: zIndexes.contact }} />}
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
