import { useEffect, useState } from "react";
import { useColor } from "../context/ColorContext";
import "./Main.css";
import Clock from "../components/Clock";
import { foldersRoutes } from "../constants/constants";
import Box from "../components/Box";
import Calculator from "../components/Calculator";
import Settings from "../components/Settings";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Resume from "./Resume/Resume";
import DeskFolders from "../components/DeskFolders";
import Note from "../components/Note";

type WindowName =
  | "about"
  | "resume"
  | "projects"
  | "contact"
  | "settings"
  | "cv"
  | "calculator";

const Main = () => {
  const { color, setColor, filter, setFilter } = useColor();
  const [isOpenResume, setIsOpenResume] = useState(false);
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [isOpenContact, setIsOpenContact] = useState(false);
  const [isOpenProjects, setIsOpenProjects] = useState(false);
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  const [isOpenCV, setIsOpenCV] = useState(false);
  const [isOpenCalculator, setIsOpenCalculator] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [zIndexes, setZIndexes] = useState<Record<WindowName, number>>({
    about: 1,
    resume: 1,
    projects: 1,
    contact: 1,
    settings: 1,
    cv: 1,
    calculator: 1,
  });
  const [currentMaxZ, setCurrentMaxZ] = useState(1);

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

  const openCV = () => {
    setIsOpenCV(true);
    bringToFront("cv");
  };

  const closeCV = () => {
    setIsOpenCV(false);
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
    closeCV();
  };

  return (
    <div
      className="screen"
      style={{
        backgroundColor: color,
      }}
    >
      <div className="menu-bar">
        <div className="menu-bar-nav">
          <h3>Andrea Alarcón</h3>
          <div className="nav">
            <button onClick={openSettings} id="settings">
              Settings
            </button>
            <button onClick={openCV} id="cv">
              Resume
            </button>
            <button onClick={openCalculator}>Calculator</button>
          </div>
        </div>
        <Clock />
      </div>
      <DeskFolders />
      <Note />
      <div className="desk">
        <div className="main-desk">
          <div className="welcome-box">
            <div className="box-wrapper">
              <span className="word-wrapper">
                <span className="letter-framer">w</span>
                <span className="letter-framer">e</span>
                <span className="letter-framer">l</span>
                <span className="letter-framer">c</span>
                <span className="letter-framer">o</span>
                <span className="letter-framer">m</span>
                <span className="letter-framer">e</span>
              </span>
              <span className="word-wrapper">
                <span className="letter-framer">t</span>
                <span className="letter-framer">o</span>
              </span>
              <span className="word-wrapper">
                <span className="letter-framer">m</span>
                <span className="letter-framer">y</span>
              </span>
            </div>
            <div>
              <span className="word-wrapper title">
                <span className="letter-framer">p</span>
                <span className="letter-framer">o</span>
                <span className="letter-framer">r</span>
                <span className="letter-framer">t</span>
                <span className="letter-framer">f</span>
                <span className="letter-framer">o</span>
                <span className="letter-framer">l</span>
                <span className="letter-framer">i</span>
                <span className="letter-framer">o</span>
                <span className="letter-framer">.</span>
              </span>
            </div>
          </div>

          {isOpenCV && (
            <Box
              square
              onClose={closeCV}
              className="CV-box"
              style={{ zIndex: zIndexes.cv }}
            >
              <div className="CV-container">
                <div>
                  <a href="./CV.pdf" target="_blank" rel="noopener noreferrer">
                    <img
                      src="./icon-resume-hover.png"
                      alt="Imagen con hover"
                      style={{
                        width: 70,
                        cursor: "url(./cursor-pointer.png), default",
                        transition: "all 0.3s ease-in-out",
                      }}
                    />
                  </a>
                </div>
                <div className="CV-container-text">
                  <h5>Take a look at my CV</h5>
                  <p>Click on the folder to download it</p>
                </div>
              </div>
            </Box>
          )}
          {isOpenCalculator && (
            <Calculator
              onClose={closeCalculator}
              style={{ zIndex: zIndexes.calculator }}
            />
          )}
          {isOpenSettings && (
            <Settings
              onColorChange={setColor}
              onFilterChange={setFilter}
              onClose={closeSettings}
              style={{ zIndex: zIndexes.settings }}
            />
          )}
          {isOpenAbout && (
            <About onClose={closeAbout} style={{ zIndex: zIndexes.about }} />
          )}
          {isOpenResume && (
            <Resume onClose={closeResume} style={{ zIndex: zIndexes.resume }} />
          )}
          {isOpenProjects && (
            <Projects
              onClose={closeProjects}
              style={{ zIndex: zIndexes.projects }}
            />
          )}
          {isOpenContact && (
            <Contact
              onClose={closeContact}
              style={{ zIndex: zIndexes.contact }}
            />
          )}
        </div>
        <div className="routes-desk" id="routes">
          {foldersRoutes.map((item, index) => (
            <button
            className="routes-button"
              key={item.title}
              onClick={() => {
                if (item.type === "about") openAbout();
                else if (item.type === "resume") openResume();
                else if (item.type === "projects") openProjects();
                else if (item.type === "contact") openContact();
                else if (item.type === "bin") closeAll();
              }}
            >
              <img
                src={
                  hoveredIndex === index
                    ? `./${item.img}-hover.png`
                    : `./${item.img}.png`
                }
                alt={`${item.title} image`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
              <span className="tooltip-text">{item.title}</span>
            </button>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
