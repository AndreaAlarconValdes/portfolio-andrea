import Box from "../../components/Box";
import { icons } from "../../constants/constants";
import "./Contact.css";

interface ContantProps {
  onClose: () => void;
  style?: React.CSSProperties;

}

const Contact = ({onClose,style}: ContantProps) => {
  return (
    <div className="general-page" style={style}>
      <Box  title="Contacts" onClose={onClose}>
               <ul className="contact-info">
            {icons.map((icon) => (
              <li>
                <a href={icon.link} target="_blank" rel="noopener noreferrer">
                  <i
                    className={icon.class}
                    style={{
                      color: icon.color,
                      backgroundColor: icon.bgColor,
                    }}
                  ></i>
                </a>
                <p>{icon.info}</p>
              </li>
            ))}
          </ul>
          </Box>
     
      </div>
  );
};

export default Contact;
