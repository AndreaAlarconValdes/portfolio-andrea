import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
import Resume from "./pages/Resume";

function App() {
  return (
    <>
      <Home />
      <Router>
        <Navbar />
      </Router>
      <About />
      <Resume/>
    </>
  );
}

export default App;
