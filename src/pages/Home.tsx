import SocialMedia from "../components/SocialMedia";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="title-container">
        <h1 className="title">
          <span>POR</span>
          <span className="transparent-text">TFO</span>
          <span>LIO</span>
        </h1>
        <h2>FULL STACK DEVELOPER | FRONTEND SPECIALIST</h2>
      </div>
      <div className="subtitle-container">
        <h3>ANDREA ALARCÓN VALDÉS</h3>
        <SocialMedia color="white" />
      </div>
    </div>
  );
};

export default Home;
