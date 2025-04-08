import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Home />
      <Router>
        <Navbar />
      </Router>
      <About />
      <Projects/>
    </>
  );
}

export default App;
