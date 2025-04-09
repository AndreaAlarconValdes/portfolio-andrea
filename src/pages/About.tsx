import SocialMedia from "../components/SocialMedia";
import "./About.css";

const About = () => {
  return (
    <div id="about me" className="about-container">
      <div className="col-1">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          dicta? Beatae corporis expedita commodi nisi perspiciatis? Quam sequi
          ab fugit ducimus earum quibusdam, reprehenderit exercitationem
          assumenda molestiae nam, doloremque provident.
        </p>
        <h1>ABOUT</h1>
        <img src="./img-1.jpg" alt="Deer" />
      </div>
      <div className="col-2">
        <h1>ME</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
          laboriosam esse soluta quisquam minus iusto praesentium quia
          architecto, voluptatem et obcaecati? Temporibus, labore. Amet,
          voluptatum mollitia nulla enim corporis vel.
        </p>
      </div> 
      <div className="col-3">
        <img src="./img-1.jpg" alt="Deer" />
        {/* AÑADIR PROP COLOR */}
        <SocialMedia/>
      </div>
    </div>
  );
};

export default About;
