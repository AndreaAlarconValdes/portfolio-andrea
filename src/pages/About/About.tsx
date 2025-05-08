import Box from "../../components/Box";
import "./About.css";
interface AboutProps {
  onClose: () => void;
  style?: React.CSSProperties;
}
const About = ({onClose, style}:AboutProps) => {
  return (
   <div className="general-page" style={style}>
    <Box onClose={onClose}   className="about-box">
      <div className="about-description">
        <div>
        <img src="./selfie.jpeg" alt="selfie" />
          <h2>Andrea Alarcón Valdés</h2>

          </div>
        <div>
          <h4>
            Full-stack developer specialising in front-end development from
            Spain, based in Dublin.
          </h4>
          <p>
            Passionate about creating attractive and functional interfaces,
            always focused on delivering intuitive and user-centered
            experiences. I enjoy the creative process, blending design and
            development to achieve smooth and meaningful interactions.
          </p>
          <p>
            I see myself as a creative, organised, detail-oriented and curious
            person with a strong mindset for continuous learning and innovation.
            I work closely with multidisciplinary teams - designers, developers
            and marketing - to create digital experiences that are not only
            visually compelling, but also aligned with clear objectives.
            Adaptability, teamwork and problem solving are key pillars of my
            approach.
          </p>
        </div>
      </div>
      </Box>
      </div>
  );
};

export default About;
