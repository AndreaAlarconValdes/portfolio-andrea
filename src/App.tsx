import Home from "./pages/Home";
import "./index.css"
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import { ColorProvider } from "./context/ColorContext";
import About from "./pages/About";

function App() {
  
  return (
    <ColorProvider>
      {/* <Home /> */}
      <About/>
      {/* <Resume/>
      <Contact/> */}
    </ColorProvider>
  );
}

export default App;
