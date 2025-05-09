import React, { useState, useRef } from "react";
import "./Box.css";

interface BoxProps {
  className?: string;
  title?: string;
  children?: React.ReactNode;
  square?: boolean;
  onClose?: () => void;
  style?: React.CSSProperties;
  showCloseBtn?: boolean
}

const Box = ({
  className,
  children,
  title,
  square = false,
  onClose,
  style,
  showCloseBtn =true,
}: BoxProps) => {
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
      className={className}
      style={{
        ...style,
        position: "absolute",
        transform: `translate(${position.x}px, ${position.y}px)`,
        cursor: "grab"
      }}
      onMouseDown={(e) => {
        e.stopPropagation(); // evita que el drag dispare onClose
        handleMouseDown(e);
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className="box-content"
        style={{
          borderRadius: square ? 0 : 10,
          backgroundColor: "#fafafa",
        }}
      >
        <div
          className="box-nav"
          style={{
            backgroundColor: "#dadad3",
            borderTopLeftRadius: square ? 0 : 10,
            borderTopRightRadius: square ? 0 : 10,
          }}
        >
          {showCloseBtn && (

          <div className="box-nav-btns">
            <button onClick={onClose}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          )}

          <p>{title}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Box;
