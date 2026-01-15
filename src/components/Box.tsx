import "./Box.css";
import { Link } from "react-router-dom";

interface BoxProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

const Box = ({ children, title, className }: BoxProps) => {
  return (
    <div className="window-frame">
      <div className="title-bar">
        <Link to="/" className="window-buttons">
          <span className="close"></span>
          <span className="minimize"></span>
          <span className="maximize"></span>
        </Link>
        <small className="title">{title}</small>
      </div>
      <div className={className}>{children}</div>
    </div>
  );
};

export default Box;
