import React from "react";
import Draggable from "./Draggable";
import "./Box.css";

interface BoxProps {
  className?: string;
  title?: string;
  children?: React.ReactNode;
  onClose?: () => void;
  style?: React.CSSProperties;
}

const Box = ({ className, children, title, onClose, style }: BoxProps) => {
  return (
    <Draggable
      className={className}
      style={{ ...style, position: "absolute" }}
    >
      <div className="box-container" onClick={(e) => e.stopPropagation()}>
        <div className="box-nav">
          <div className="box-nav-btns" onClick={onClose}>
            <span></span><span></span><span></span>
          </div>
          <p>{title}</p>
        </div>
        <div className="box-content">{children}</div>
      </div>
    </Draggable>
  );
};

export default Box;
