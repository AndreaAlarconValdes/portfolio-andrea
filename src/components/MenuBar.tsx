import { Link, useLocation } from "react-router-dom";
import Clock from "./Clock";
import "./MenuBar.css"

const MenuBar: React.FC  = () => {
    const location = useLocation();
 
    return (
        <div className="menu-bar">
            <div className="menu-bar-left">
                <h3>Andrea Alarcón</h3>
                <div className="menu-bar-actions">
                    <Link  to="/settings"
                 aria-current={location.pathname === "/settings" ? "page" : undefined}>
                        Settings
                    </Link>
                
                    <a href="./TechCV_Andrea_Alarcon.pdf" target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>
                </div>
            </div>
            <Clock />
        </div>
    )
}

export default MenuBar