import Box from "../../components/Box";
import EmailForm from "../../components/EmailForm";
import { icons } from "../../constants/constants";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <Box  title="Contacts">
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
      <Box className="email-box"  >
        <EmailForm />
      </Box>
      </div>
  );
};

export default Contact;
