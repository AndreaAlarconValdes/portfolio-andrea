import "./index.css";
import { ColorProvider } from "./context/ColorContext";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Experience from "./pages/Experience/Experience";
import { Routes, Route } from "react-router-dom";
import Skills from "./pages/Skills/Skills";
import Navbar from "./components/Navbar";
import MenuBar from "./components/MenuBar";


function App() {
  return (
    <ColorProvider>
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Navbar />
    </ColorProvider>
  );
}

export default App;
