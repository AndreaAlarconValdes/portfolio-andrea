import { useState } from "react";
import Box from "../components/Box";
import Folder from "../components/Folder";
import HandwriteText from "../components/HandwriteText";
import "./Main.css";
import ColorPicker from "../components/ColorPicker";

const Main = () => {
  const [color, setColor] = useState("#fafafa");





  const icons = [
    { class: "fa-solid fa-envelope", link:"mailto:alarconvaldes.a@gmail.com", color: "white", bgColor: "#4da6ff" },
    { class: "fa-brands fa-linkedin-in" , link:"https://www.linkedin.com/in/andreaalarconvaldes/", color: "white", bgColor: "#0051a3"},
    { class: "fa-brands fa-whatsapp" , link:"", color: "white", bgColor: "#25D366"},
    { class: "fa-brands fa-github" , link:"https://github.com/AndreaAlarconValdes", color: "black", bgColor: "white"},
    { class: "fa-solid fa-file" , link:"./CV.pdf", color: "white", bgColor: "black"},
  ];

  const foldersRoutes = [
    {title:"Resume",route:"resume"},
    {title:"Projects",route:"projects"},
    {title:"Contact",route:"contact"},
  ]

  return (
    <div className="main-page" style={{ backgroundColor: color }}>
      <div className="desktop-container" >
        <ColorPicker color={color} onColorChange={setColor} />
     
        <div className="nav-container">
          <HandwriteText title={`Click here to navigate`} arrowPosition="left" />
        <ul>
            {foldersRoutes.map((route) => (
              <li key={route.title}>
                
                <Folder title={route.title} route={route.route} />
              </li>
            ))}
          </ul>
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
   
     
      </div>
        <div className="social-media-container">
      <HandwriteText title={`Reach me out!`} arrowPosition="left" />

      <ul>
      {icons.map((icon) => (
        <li>
          <a
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={icon.class} style={{color:icon.color, backgroundColor: icon.bgColor}}></i>
          </a>
        </li>
      ))}
    </ul>
     </div>
    </div>
  );
};

export default Main;
