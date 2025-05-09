import React from "react";
import "./Box.css";

interface BoxProps {
  className?: string;
  title?: string;
  children?: React.ReactNode;
  square?: boolean;
  onClose?: () => void;
  style?: React.CSSProperties;
}

const Box = ({
  className,
  children,
  title,
  square = false,
  onClose,
  style
}: BoxProps) => {
  return (
    <div className={className} style={style}>
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
          <div className="box-nav-btns">
            <button onClick={onClose}>
            <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <p>{title}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Box;
