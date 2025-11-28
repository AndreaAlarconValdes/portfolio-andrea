import React from "react";
import "./Contact.css";
import { Element } from "react-scroll";
import Box from "../../components/Box";
import { contacts } from "../../constants/constants";


const Contact: React.FC = () => {
  return (
    <Element name="contact" className="contact-page" >
      <Box title="Contact">

        {/* Left: Form Section */}
        <div className="form-section">
          <div className="form-header">
            <h1>Get in touch</h1>
            <p>Send me a message and I'll reply as soon as possible.</p>
          </div>
          <form className="contact-form">
            <div className="row">
              <label>
                <span>Name</span>
                <input type="text" placeholder="Tu nombre completo" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" placeholder="tu@email.com" />
              </label>
            </div>
            <label>
              <span>Asunto</span>
              <input type="text" placeholder="Asunto del mensaje" />
            </label>
            <label>
              <span>Mensaje</span>
              <textarea placeholder="Escribe tu mensaje aquí..."></textarea>
            </label>
            <button type="submit">
              Send Message
              <img src="./send.svg" alt="send" width={20} />
            </button>
          </form>
        </div>

        {/* Right: Social & Other Contact */}
        <div className="social-section">
          <div className="social-header">
            <h2>Other ways to connect</h2>
            <p>Find me on other platforms.</p>
          </div>
          <div className="social-links">
            {contacts.map((item) => (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="icon">
                  <img src={`./${item.icon}.svg`} alt="LinkedIn" className="svg-icon" />
                </div>
                <div>
                  <p>{item.title}</p>
                  <small>{item.user}</small>
                </div>
              </a>
            ))}


          </div>
        </div>
      </Box>
    </Element>

  );
};

export default Contact;
