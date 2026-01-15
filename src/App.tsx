import "./index.css";
import { ColorProvider } from "./context/ColorContext";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MenuBar from "./components/MenuBar";
import DeskFolders from "./components/DeskFolders";

import { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Experience = lazy(() => import("./pages/Experience/Experience"));
const Skills = lazy(() => import("./pages/Skills/Skills"));
const Settings = lazy(() => import("./pages/Settings/Settings"));


function App() {
  return (
    <ColorProvider>
      <MenuBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Suspense>
      <DeskFolders />
      <Navbar />
    </ColorProvider>
  );
}


export default App;
