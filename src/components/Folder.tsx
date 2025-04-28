import { useState } from "react";
import "./Folder.css"

interface FolderProps {
  img: string;
  title: string;
  handleOnClick: ()=>void;
}
const Folder = ({img, title,handleOnClick}: FolderProps) => {
  const [isHovered, setIsHovered] = useState(false);


  return (
      <div className="folder-container">
        <button onClick={handleOnClick}>
        <img
              src={isHovered ? `/${img}-hover.svg` : `/${img}.svg`}
              alt="Imagen con hover"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ width: 80,cursor:"url(./cursor-pointer.png), default", transition: "all 0.3s ease-in-out" }}
            />
        </button>
        <p>{title}</p>
      </div>
  )
}

export default Folder
