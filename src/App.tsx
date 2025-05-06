import "./index.css";
import { ColorProvider } from "./context/ColorContext";
import Main from "./pages/Main";

function App() {
  return (
    <ColorProvider>
      <Main />
    </ColorProvider>
  );
}

export default App;
