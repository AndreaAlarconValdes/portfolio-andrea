import Box from "../../components/Box";
import { contacts } from "../../constants/constants";
import "./Contact.css";

interface ContantProps {
  onClose: () => void;
  style?: React.CSSProperties;

}

const Contact = ({onClose,style}: ContantProps) => {
  return (
    <div className="general-page" style={style} onClick={onClose}>
      <Box  title="Contacts" onClose={onClose}>
               <ul className="contact-info">
            {contacts.map((item) => (
              <li>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <i
                    className={item.class}
                    style={{
                      color: item.color,
                      background: item.bgColor,
                    }}
                  ></i>
                <p>{item.info}</p>
                </a>
              </li>
            ))}
          </ul>
          </Box>
     
      </div>
  );
};

export default Contact;
