import EmailForm from "../components/EmailForm";
import Box from "../components/Box";
import "./Contact.css";
import { icons } from "../constants/constants";

const Contact = () => {
  return (
    <div className="contact-container">
      <Box color="#f8d1fc" className="contact-box">
        <ul className="contact-info">
          {icons.map((icon) => (
            <li>
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <i
                  className={icon.class}
                  style={{ color: icon.color, backgroundColor: icon.bgColor }}
                ></i>
              </a>
              <p>{icon.info}</p>
            </li>
          ))}
        </ul>
      </Box>
      <Box className="email-box">
        <EmailForm />
      </Box>
    </div>
  );
};

export default Contact;
