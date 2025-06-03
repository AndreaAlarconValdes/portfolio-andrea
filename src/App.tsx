import "./index.css";
import { ColorProvider } from "./context/ColorContext";
import Main from "./pages/Main";
import { useEffect } from "react";
import {  initGA, logPageView } from "./utils/analytics";

function App() {
  useEffect(() => {
    initGA();
    logPageView(window.location.pathname);
  }, []);

  return (
    <ColorProvider>
      <Main />
    </ColorProvider>
  );
}

export default App;
