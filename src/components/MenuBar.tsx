import Clock from "./Clock";
import "./MenuBar.css"

const MenuBar = () => {
 
    return (
        <div className="menu-bar">
            <div className="menu-bar-left">
                <h3>Andrea Alarcón</h3>
                <div className="menu-bar-actions">
                    <button  id="settings">
                        Settings
                    </button>
                
                    <a href="./TechCV_Andrea_Alarcon.pdf" target="_blank">
                        Resume
                    </a>
                </div>
            </div>
            <Clock />
        </div>
    )
}

export default MenuBar