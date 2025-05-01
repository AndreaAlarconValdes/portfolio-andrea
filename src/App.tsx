import "./index.css"
import { ColorProvider } from "./context/ColorContext";
import About from "./pages/About";

function App() {
  
  return (
    <ColorProvider>
      <About/>
    </ColorProvider>
  );
}

export default App;
