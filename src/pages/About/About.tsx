import Box from "../../components/Box";
import "./About.css";

const About = () => {
  return (
    <div  className="about">
      <Box title="About me">
        <p>
          Hi! I’m Andrea, a full-stack web developer with a strong focus
          on front-end technologies. I mainly work with React and Node.js,
          but I’ve also explored other programming languages and pick up
          new skills quickly. I’m passionate about crafting beautiful and
          functional interfaces, always putting the user experience first.

          I have experience working with startups and developing projects,
          I’m constantly evolving and eager to take on new challenges.

          I've contributed to real projects alongside multidisciplinary
          teams, working closely with designers, marketing professionals,
          and fellow developers through pair programming, which has
          enriched my projects and helped me continuously improve.

          I also have a keen interest in design and marketing, and I spend
          my free time self-learning to broaden my skill set beyond
          coding.

          When I’m not coding, you’ll find me enjoying nature,
          photography, or traveling. Interested in working together? Let’s
          connect!
        </p>
      </Box>
      <img src="./about-photo.png" alt="Portrait" />
      <Box className="photo-container">
        <img src="./photo(00).jpg" alt="Portrait"/>
      </Box>
    </div>
  );
};

export default About;
