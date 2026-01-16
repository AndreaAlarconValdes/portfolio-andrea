import "./index.css";
import { ColorProvider } from "./context/ColorContext";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MenuBar from "./components/MenuBar";
import DeskFolders from "./components/DeskFolders";
import MessageNotification from "./components/MessageNotification";
import ProjectBox from "./components/ProjectBox";
import { projects } from "./constants/constants";

import { lazy, Suspense, useState } from "react";
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Experience = lazy(() => import("./pages/Experience/Experience"));
const Skills = lazy(() => import("./pages/Skills/Skills"));
const Settings = lazy(() => import("./pages/Settings/Settings"));


function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleProjectClick = (projectId: string) => {
    setSelectedProjectId(projectId);
  };

  const handleCloseProject = () => {
    setSelectedProjectId(null);
  };

  const selectedProject = selectedProjectId ? projects[selectedProjectId] : null;

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
      <DeskFolders onProjectClick={handleProjectClick} />
      <Navbar />
      <MessageNotification message="Have a look inside the folders to see my projects." />
      {selectedProject && (
        <ProjectBox project={selectedProject} onClose={handleCloseProject} />
      )}
    </ColorProvider>
  );
}


export default App;
