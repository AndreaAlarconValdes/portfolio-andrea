import { navLinks } from "../constants/constants";
import { Link, useLocation} from "react-router-dom";
import "./Navbar.css"
import React from "react";

const Navbar: React.FC = () => {
    const location = useLocation();

    return (
        <div className="navbar">
            {navLinks.map((item) => (
                <Link key={item.title} to={item.route} className="nav-link"
                 aria-current={location.pathname === item.route ? "page" : undefined}>
                    <img
                        src={`./${item.img}.png`}
                        alt={`${item.title} image`}
                        loading="lazy"
                    />
                    <span className="nav-tooltip">{item.title}</span>
                </Link>

            ))}
        </div>
    )
}

export default React.memo(Navbar);