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
              alt="Andrea Alarcón - Full Stack Developer"
              loading="lazy"
            />
            <div className="profile-text">
              <p className="name">Hi, I'm Andrea</p>
              <p className="description">
                Full Stack Developer | Building Scalable Web Apps with React, TypeScript, Node.js, Express.js,  MongoDB & MySQL
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
          I’m a <strong>Full Stack Web Developer</strong> with 2+ years of experience building scalable, user-focused web applications. I’m passionate about creating clean, efficient, and intuitive digital solutions using modern JavaScript technologies such as <strong>React, Node.js, Express, TypeScript, MongoDB, and SQL</strong>.
        </p>
        <br />
        <p>
          Originally from Barcelona, I moved to Dublin two years ago to improve my English and pursue new career opportunities that challenge me. Before transitioning into tech, I worked several years in administration and customer service roles, which helped me develop strong communication, problem-solving, and detail-oriented skills. This background allows me to bring a unique perspective to development, combining technical expertise with a deep understanding of user needs, processes, and business requirements.
        </p>
        <br />

        <p>
          I’ve worked as a developer in a startup, completed freelance projects, and continue learning independently. I enjoy working in collaborative environments, continuously learning new technologies, and turning complex ideas into real, functional products. My experience includes building <strong>full stack web applications, developing RESTful APIs, designing database models, implementing automated testing, and creating responsive, user-friendly interfaces</strong>.
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
