import Box from "../../components/Box"
import "./Projects.css"

interface ProjectsProps {
  onClose: () => void;
  
  style?: React.CSSProperties;

}

const Projects = ({onClose,style}: ProjectsProps) => {
  return (
    <div className="general-page" style={style}>
      <Box className="projects-container-page" onClose={onClose}>
        <h1>Projects</h1>
      </Box>
    </div>
  )
}

export default Projects
