import { useState } from "react";
import Box from "../components/Box";
import EmailForm from "../components/EmailForm";
import Folder from "../components/Folder";
import HandwriteText from "../components/HandwriteText";
import "./Main.css";
import ColorPicker from "../components/ColorPicker";
import Modal from "../components/Modal";

const Main = () => {
  const [color, setColor] = useState("#fafafa");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const languages = [
    { language: "English", level: "Advanced" },
    { language: "Spanish", level: "Native" },
    { language: "Catalan", level: "Native" },
  ];

  const technicalSkills = [
    { icon: "fa-brands fa-react", name: "react" },
    { icon: "fa-brands fa-html5", name: "html5" },
    { icon: "fa-brands fa-css3-alt", name: "css3" },
    { icon: "fa-brands fa-js", name: "javascript" },
    { icon: "fa-brands fa-node-js", name: "node.js" },
    { icon: "fa-solid fa-database", name: "database" },
    { icon: "fa-brands fa-docker", name: "docker" },
    { icon: "fa-brands fa-git-alt", name: "git" },
    { icon: "fa-brands fa-figma", name: "figma" },
    { icon: "fa-brands fa-google", name: "google ads" },
    { icon: "fa-brands fa-wordpress-simple", name: "wordpress" },
    { icon: "fa-brands fa-shopify", name: "shopify" },
  ];

  return (
    <>
      <div className="main-page" style={{ backgroundColor: color }}>
        <ColorPicker color={color} onColorChange={setColor} />
        <div className="technical-skills">
        <HandwriteText title={`My Technical Skills`} arrowPosition="left" />
          
          <ul>
            {technicalSkills.map((skill) => (
              <li key={skill.name}>
                <i className={skill.icon}></i>
                <p>{skill.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="project-container">
          <Folder title="Projects" handleOnClick={handleOpenModal} />
          <HandwriteText title={`<- Click here to view all my projects`} />
        </div>
        <Box className="self-portrait" title="Photo">
          <div>
            <img src="./selfie.jpeg" alt="selfie" />
            <div className="photo-info">
              <p>Hi, I'm Andrea</p>
              <img src="./arrow-down.png" alt="arrow" />
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
            currently based in Dublin and actively seeking new opportunities.
            I’m passionate about creating attractive and functional interfaces,
            always focusing on intuitive user experiences. I consider myself
            creative, organized, detail-oriented and curious, someone who enjoys
            the creative process.
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
          <HandwriteText title={`Hover to explore`} arrowPosition="right" />
        </div>
        <div className="email-container">
          <HandwriteText title={`Get in touch with me ->`} />
          <Box className="email-box">
            <EmailForm />
          </Box>
        </div>
        <Modal open={isModalOpen} onClose={handleCloseModal}>
          <h2 className="text-2xl font-bold mb-4">¡Hola desde el Modal!</h2>
          <p className="mb-4">Este es el contenido del modal.</p>
          <button onClick={handleCloseModal}>Cerrar</button>
        </Modal>
      </div>
    </>
  );
};

export default Main;
