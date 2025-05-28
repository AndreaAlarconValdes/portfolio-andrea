import { useRef, useState } from "react";
import "./Note.css";
const Note = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragging.current) return;
    setPosition({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    });
  };

  const handleMouseUp = () => {
    dragging.current = false;
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      className="note"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        cursor: "grab",
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        handleMouseDown(e);
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <h4>To do:</h4>
      <ul>
        <li>Land a creative web deveveloper job</li>
        <li>Drink more water (less coffee... maybe)</li>
        <li className="line-through">Move to Ireland</li>
        <li> Learn the basics of Marketing & Analytics</li>
        <li className="line-through">Level up my English fluency</li>
        <li className="line-through">Volunteer for animal causes</li>
        <li>Explore a new country solo</li>
      </ul>
    </div>
  );
};

export default Note;
