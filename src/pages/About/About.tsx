import Box from "../../components/Box";
import "./About.css";

interface AboutProps {
  onClose: () => void;
  style?: React.CSSProperties;
}
const About = ({ onClose, style }: AboutProps) => {
  return (
    <div className="general-page about" style={style} onClick={onClose}>
      <Box onClose={onClose}>
        <div className="about-container">
          <div className="photo-container">
          <img src="./photo(00).jpg" alt="selfie" className="selfie-img"/>

            <ul className="about-contacts">
              <li className="icon-content">
                <a
                  href="https://www.linkedin.com/in/andreaalarconvaldes/"
                  aria-label="LinkedIn"
                  data-social="linkedin"
                >
                  <div className="filled"></div>
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li className="icon-content">
                <a
                  href="https://github.com/AndreaAlarconValdes"
                  aria-label="GitHub"
                  data-social="github"
                >
                  <div className="filled"></div>
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li className="icon-content">
                <a
                  href="mailto:alarconvaldes.a@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="email"
                  data-social="email"
                >
                  <div className="filled"></div>
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="about-description">
            <div>
              <p>
                Hi! I’m Andrea, a full-stack web developer with a strong focus
                on front-end technologies. I mainly work with React and Node.js,
                but I’ve also explored other programming languages and pick up
                new skills quickly. I’m passionate about crafting beautiful and
                functional interfaces, always putting the user experience first.
              </p>
              <p>
                I have experience working with startups and developing projects,
                I’m constantly evolving and eager to take on new challenges.
              </p>
              <p>
                I've contributed to real projects alongside multidisciplinary
                teams, working closely with designers, marketing professionals,
                and fellow developers through pair programming, which has
                enriched my projects and helped me continuously improve.
              </p>
              <p>
                I also have a keen interest in design and marketing, and I spend
                my free time self-learning to broaden my skill set beyond
                coding.
              </p>
              <p>
                When I’m not coding, you’ll find me enjoying nature,
                photography, or traveling. Interested in working together? Let’s
                connect!
              </p>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default About;
