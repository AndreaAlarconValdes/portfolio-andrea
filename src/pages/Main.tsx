import { SetStateAction, useState } from "react";
import Box from "../components/Box";
import EmailForm from "../components/EmailForm";
import Folder from "../components/Folder";
import HandwriteText from "../components/HandwriteText";
import "./Main.css";
import ColorPicker from "../components/ColorPicker";

const Main = () => {
  const [color, setColor] = useState("#fafafa");

  const languages = [
    { language: "English", level: "Advanced" },
    { language: "Spanish", level: "Native" },
    { language: "Catalan", level: "Native" },
  ];

  return (
    <div className="main-page" style={{ backgroundColor: color }}>
      <ColorPicker color={color} onColorChange={setColor} />
      <div className="project-container">
        <Folder title="Projects" />
        <HandwriteText title={`<- Click here to view all my projects`} />
      </div>
      <Box className="self-portrait" title="Photo">
        <div >
          <img src="./selfie.jpeg" alt="selfie" />
          <div className="photo-info">
            <p>Hi, I'm Andrea</p>
            <img src="./arrow-down.png" alt="arrow"/>
          </div>
        </div>
        <div className="camera-button">
          <i className="fa-solid fa-camera"></i>
        </div>
      </Box>
      <Box className="self-description">
        <h4>
          <strong>About me</strong>
        </h4>
        <p>
          I'm a Full-Stack Developer with a specialization in Front-End,
          currently based in Dublin and actively seeking new opportunities. I’m
          passionate about creating attractive and functional interfaces, always
          focusing on intuitive user experiences. I consider myself creative,
          organized, detail-oriented and curious, someone who enjoys the
          creative process.
        </p>
      </Box>
      <div className="languages-container">
        <div className="languages">
          <div className="languages-title">
            <i className="fa-solid fa-chevron-left"></i>
            <h2>Languages</h2>
          </div>
          <div className="languages-content">
            <ul>
              {languages.map((item) => (
                <li>
                  <i className="fa-solid fa-check"></i>
                  <h3>{item.language}</h3>
                  <p>{item.level}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <HandwriteText title={`Hover to explore`} arrowDown />
      </div>
      <div className="email-container">
        <HandwriteText title={`Get in touch with me ->`} />
        <Box className="email-box">
          <EmailForm />
        </Box>
      </div>
    </div>
  );
};

export default Main;
