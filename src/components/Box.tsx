import React from "react";
import "./Box.css";

interface BoxProps {
  className?: string;
  title?: string;
  children?: React.ReactNode;
  color?: string;
  square?: boolean;
  bgColor?: string;
  onClose?: () => void;
}

const Box = ({
  className,
  children,
  title,
  color = "#b2f282",
  bgColor = "#fdfbe6",
  square = false,
  onClose,
}: BoxProps) => {



 

  return (
    <div
      className={className}
    >
      <div
        className="box-content"
        style={{
          borderRadius: square ? 0 : 10,
          backgroundColor: bgColor,
        }}
      >
        <div
          className="box-nav"
          style={{
            backgroundColor: color,
            borderTopLeftRadius: square ? 0 : 10,
            borderTopRightRadius: square ? 0 : 10,
          }}
        >
            <button onClick={onClose}>X</button>
           
          <p>{title}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Box;
