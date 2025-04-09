import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import "./index.css"

function App() {
  return (
    <>
      <Home />
      <Navbar />
      <About />
      <Resume />
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
