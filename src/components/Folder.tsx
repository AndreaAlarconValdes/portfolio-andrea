import { useState, useEffect } from "react";
import "./Folder.css";

interface FolderProps {
  img: string; // solo el nombre base, ej: "icon-mail"
  title: string;
  handleOnClick: () => void;
}

const Folder = ({ img, title, handleOnClick }: FolderProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 901);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 901);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getImageSrc = () => {
    if (isDesktop) {
      return isHovered ? `/${img}-hover.svg` : `/${img}.svg`;
    } else {
      return `/${img}-m.svg`;
    }
  };

  return (
    <div className="folder-container">
      <button onClick={handleOnClick}>
        <img
          src={getImageSrc()}
          alt="Imagen con hover"
          onMouseEnter={() => isDesktop && setIsHovered(true)}
          onMouseLeave={() => isDesktop && setIsHovered(false)}
        />
      </button>
      <p>{title}</p>
    </div>
  );
};

export default Folder;
