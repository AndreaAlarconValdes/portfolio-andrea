import React from "react";
import "./Box.css";

interface BoxProps {
    className?: string;
  title?: string;
  children?: React.ReactNode;
}
const Box = ({ className, children, title }: BoxProps) => {
  return (
    <div className={className}>
    <div className="box-content">
      <div className="box-nav">
        <span></span>
        <span></span>
        <span></span>
        <p>{title}</p>
      </div>
      <div className="children-content">{children}</div>
    </div>
    </div>
  );
};

export default Box;
