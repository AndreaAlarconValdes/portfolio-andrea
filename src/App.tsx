import "./index.css";
import { ColorProvider } from "./context/ColorContext";
import Main from "./pages/Main";
import { useEffect } from "react";
import { initGA, logPageView } from "./utils/analytics";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  useEffect(() => {
    initGA();
    logPageView(window.location.pathname);
  }, []);

  return (
    <ColorProvider>
      <Main />
      <About />
      <Contact />
    </ColorProvider>


  );

}

export default App;
