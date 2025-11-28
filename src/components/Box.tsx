import React from "react";
import "./Box.css";

interface BoxProps {
  title?: string;
  children?: React.ReactNode;
}

const Box = ({ children, title }: BoxProps) => {
  return (
    <div className="window-frame">
      <div className="title-bar">
        <div className="window-buttons">
          <span className="close"></span>
          <span className="minimize"></span>
          <span className="maximize"></span>
        </div>
        <small className="title">{title}</small>
      </div>
      <div className="content-area">{children}</div>
    </div>
  );
};

export default Box;
