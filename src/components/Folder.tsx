import { useState } from "react";
import "./Folder.css"

interface FolderProps {
  img: string;
  title: string;
  route: string;
}
const Folder = ({img, title,route}: FolderProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
      <div className="folder-container">
        <button onClick={() => scrollToSection(route)}>
        <img
              src={isHovered ? `/${img}-hover.svg` : `/${img}.svg`}
              alt="Imagen con hover"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ width: 80,cursor:"pointer", transition: "all 0.3s ease-in-out" }}
            />
        </button>
        <p>{title}</p>
      </div>
  )
}

export default Folder
