import Box from "../components/Box";
import Folder from "../components/Folder";
import HandwriteText from "../components/HandwriteText";
import "./Main.css";
import ColorPicker from "../components/ColorPicker";
import { foldersRoutes, icons } from "../constants/constants";
import { useColor } from "../context/ColorContext";


const Main = () => {
  const { color, setColor } = useColor()
  return (
    <div className="main-page" style={{ backgroundColor: color,
      backgroundImage: `
      linear-gradient(to right, lightgray 1px, transparent 1px),
      linear-gradient(to bottom, lightgray 1px, transparent 1px)
    `,
    backgroundSize: "100px 100px", }}>
      <div className="desktop-container">
        <ColorPicker color={color} onColorChange={setColor} />

        <div className="nav-container">
          <HandwriteText
            title={`Click here to navigate`}
            arrowPosition="left"
          />
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
       <div className="social">
        <HandwriteText title={`Reach me out!`} arrowPosition="left" />

        <ul>
          {icons.map((icon) => (
            <li>
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <i
                  className={icon.class}
                  style={{ color: icon.color, backgroundColor: icon.bgColor }}
                ></i>
              </a>
            </li>
          ))}
        </ul>
        </div>
        <img className="star-img" src="./star.png" alt="star" />
      </div>
    </div>
  );
};

export default Main;
