import {  NavLink, useLocation } from "react-router-dom";
import "./navbar.css";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [menu, setMenu] = useState(false);
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    // Función para manejar el scroll
    const handleScroll = () => {
      // Si la posición de desplazamiento es mayor a 300px, hace visible la navbar
      if (window.scrollY >= window.innerHeight) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    // Agregar el event listener para el scroll
    window.addEventListener('scroll', handleScroll);

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const routes = [
    { to: "/about", name: "about me" },
    { to: "/resume", name: "resume" },
    { to: "/projects", name: "projects" },
    { to: "/contact", name: "contact" },
  ];

  const handleClick = (to: string) => {
    toggleMenu();
    const targetElement = document.getElementById(to);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={`navbar-container ${visible ? 'visible' : ''}`}>
      <ul>
      {routes.map((route) => (
              <li className="nav-item" key={route.name}>
                <NavLink
                  className={`nav-link ${
                    location.pathname === route.to ? "isActive" : ""
                  }`}
                  to={route.to}
                  onClick={() => {
                    handleClick(route.name);
                  }}
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
      </ul>
    </nav>
  );
}
