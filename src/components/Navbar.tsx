import { navLinks } from "../constants/constants";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            {navLinks.map((item) => (
                <Link key={item.title} to={item.route} className="nav-link">
                    <img
                        src={`./${item.img}.png`}
                        alt={`${item.title} image`}
                    />
                    <span className="nav-tooltip">{item.title}</span>
                </Link>

            ))}
        </div>
    )
}

export default Navbar