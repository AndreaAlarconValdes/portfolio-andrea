import SocialMedia from "../components/SocialMedia";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="title-container">
        <h1>Hi, I'm Andrea</h1>
        <h4>FULL STACK DEVELOPER</h4>
      </div>
     <SocialMedia color="white"/>
    </div>
  );
};

export default Home;
