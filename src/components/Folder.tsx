import { useState, useEffect, useRef } from "react";

interface FolderProps {
  img: string;
  title: string;
  sound?: string;
  to: string;
  className?: string;
}

const Folder = ({
  img,
  title,
  sound,
  to,
  className,
}: FolderProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    hoverSoundRef.current = new Audio(`./audio/${sound}`);
  }, [sound]);

  const handleMouseEnter = () => {
      setIsHovered(true);
      if (hoverSoundRef.current) {
        hoverSoundRef.current.currentTime = 0;
        hoverSoundRef.current.play();
      }
  };

  const handleMouseLeave = () => {
      setIsHovered(false);
  };

  return (
    <div className={className}>
        <a href={to}>
          <img
            src={isHovered ? `./${img}-hover.png` : `./${img}.png`}
            alt={`${title} image`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </a>
        <p>{title}</p>
    </div>
  );
};

export default Folder;
