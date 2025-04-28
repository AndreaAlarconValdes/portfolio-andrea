import React from "react";
import "./Box.css";

interface BoxProps {
  className?: string;
  title?: string;
  children?: React.ReactNode;
  color?: string;
  square?: boolean;
  bgColor?: string;
}

const Box = ({
  className,
  children,
  title,
  color = "#b2f282",
  bgColor="#fdfbe6",
  square = false,
}: BoxProps) => {
  return (
    <div className={className}>
      <div
        className="box-content"
        style={{ borderRadius: square === true ? 0 : 10 , backgroundColor: bgColor}}
      >
        <div
          className="box-nav"
          style={{
            backgroundColor: color,
            borderTopLeftRadius: square === true ? 0 : 10,
            borderTopRightRadius: square === true ? 0 : 10,
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <p>{title}</p>
        </div>
       {children}
      </div>
    </div>
  );
};

export default Box;
