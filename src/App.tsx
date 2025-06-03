import "./index.css";
import { ColorProvider } from "./context/ColorContext";
import Main from "./pages/Main";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom'; 
import { initGA, logPageView } from "./utils/analytics";

function App() {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    logPageView(location.pathname + location.search);
  }, [location]);

  return (
    <ColorProvider>
      <Main />
    </ColorProvider>
  );
}

export default App;
