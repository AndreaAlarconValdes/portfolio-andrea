import Box from "../../components/Box"
import "./Projects.css"

interface ProjectsProps {
  onClose: () => void;
}

const Projects = ({onClose}: ProjectsProps) => {
  return (
    <div id='projects' className="projects-page">
      <Box className="projects-container-page" onClose={onClose}>
        <h1>Projects</h1>
      </Box>
    </div>
  )
}

export default Projects
