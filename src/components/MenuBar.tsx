import { useState } from "react";
import Settings from "./Settings";
import Clock from "./Clock";
import { useColor } from "../context/ColorContext";
import "./MenuBar.css"

const MenuBar = () => {
    const [isOpenSettings, setIsOpenSettings] = useState(false);
    const { setColor, setFilter } = useColor();

 

    const openSettings = () => {
        setIsOpenSettings(true);
    };

    const closeSettings = () => {
        setIsOpenSettings(false);
    };
    return (
        <div className="menu-bar">
            <div className="menu-bar-left">
                <h3>Andrea Alarcón</h3>
                <div className="menu-bar-actions">
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
    )
}

export default MenuBar