import { useEffect, useState } from "react";
import { useColor } from "../context/ColorContext";
import "./Main.css";
import Clock from "../components/Clock";
import Settings from "../components/Settings";
import DeskFolders from "../components/DeskFolders";
import Navbar from "../components/Navbar";



const Main = () => {
  const { color, setColor, filter, setFilter } = useColor();
  const [isOpenSettings, setIsOpenSettings] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = color;
    document.body.style.filter = filter;
  }, [color, filter]);

  const openSettings = () => {
    setIsOpenSettings(true);
  };

  const closeSettings = () => {
    setIsOpenSettings(false);
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
            {isOpenSettings && (
              <Settings
                onColorChange={setColor}
                onFilterChange={setFilter}
                onClose={closeSettings}
              />
            )}
            <a href="./CV_EN.pdf" target="_blank">
              Resume
            </a>
          </div>
        </div>
        <Clock />
      </div>
      <DeskFolders />
      <div className="desk">
        <div className="main-desk">
      <h1>PORTFOLIO</h1>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Main;
