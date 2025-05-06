import { useState, useEffect, useRef } from "react";
import "./Folder.css";

interface FolderProps {
  img: string; 
  title: string;
  sound: string; 
  handleOnClick: () => void;
}

const Folder = ({ img, title, sound, handleOnClick }: FolderProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 901);

  const hoverSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    hoverSoundRef.current = new Audio(`./audio/${sound}`);

    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1151);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [sound]); 


  const handleMouseEnter = () => {
    if (isDesktop) {
      setIsHovered(true);
      if (hoverSoundRef.current) {
        hoverSoundRef.current.currentTime = 0;
        hoverSoundRef.current.play();
      }
    }
  };

  const handleMouseLeave = () => {
    if (isDesktop) {
      setIsHovered(false);
    }
  };

  return (
    <div className="folder-container">
      <button onClick={handleOnClick}>
        <img
          src={ isHovered ? `./${img}-hover.svg` : `./${img}.svg`}
          alt={`${title} image`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </button>
      <p>{title}</p>
    </div>
  );
};

export default Folder;
