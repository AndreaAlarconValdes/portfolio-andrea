import Box from "../../components/Box";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <Box title="About me" className="about-content">
        <div className="profile-section">
          <div className="profile-info">
            <img
              src="./photo(00).jpg"
              className="profile-image"
            />
            <div className="profile-text">
              <p className="name">Hi, I'm Andrea</p>
              <p className="description">
                Full Stack Web Developer turning ideas into fully functional, responsive web applications, with a focus on performance, usability, and maintainable code.
              </p>
            </div>
          </div>

          <div className="profile-links">
            <a href="https://www.linkedin.com/in/andreaalarconvaldes/" target="_blank" rel="noopener noreferrer" className="link-outline" >
              LinkedIn
            </a>
            <a href="https://github.com/AndreaAlarconValdes" target="_blank" rel="noopener noreferrer" className="link-primary">
              GitHub
            </a>
          </div>
        </div>
        <hr />
        <h2>My Story</h2>
        <p>
         I’m a Web Developer originally from Barcelona, currently living in Dublin. I come from a background in administration, customer service roles, and management, but my curiosity and creativity led me to pursue web development. I moved to Dublin two years ago to improve my English and explore new career opportunities that would allow me to grow and challenge myself.
        </p>
        <p>
          I’ve worked as a developer in a startup, completed freelance projects, and continue learning independently. I enjoy working with modern technologies like React and Node.js, and I focus on building efficient, scalable, and user-friendly web applications. Today, I combine my organizational skills, problem-solving mindset, and creative approach to deliver high-quality solutions, driven by my passion for creating and exploring new possibilities in tech.
        </p>
        <hr />
        <div className="contact-section">
          <p>Contact me</p>
          <a href="mailto:alarconvaldes.a@gmail.com">alarconvaldes.a@gmail.com</a>
        </div>
      </Box >
    </div >
  );
};

export default About;
