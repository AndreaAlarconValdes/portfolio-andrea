import { useEffect, useState } from "react";
import "./Home.css";

const ANIMATION_PLAYED_KEY = "home-animations-played";

const Home = () => {
  const [animationsPlayed, setAnimationsPlayed] = useState(false);

  useEffect(() => {
    const hasPlayed = localStorage.getItem(ANIMATION_PLAYED_KEY) === "true";
    setAnimationsPlayed(hasPlayed);

    if (!hasPlayed) {
      const timer = setTimeout(() => {
        localStorage.setItem(ANIMATION_PLAYED_KEY, "true");
        setAnimationsPlayed(true);
      }, 2100);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="home">
      <h1 className={animationsPlayed ? "title-typewriter-complete" : "title-typewriter"}>
        Welcome!
      </h1>
      <h2 className={animationsPlayed ? "title-fadein-complete" : "title-fadein"}>
        This is Andrea's desktop
      </h2>
    </div>
  );
};

export default Home;
