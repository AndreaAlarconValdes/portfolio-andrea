import Box from "./Box";
import "./ProjectBox.css";
import { Project } from "../constants/constants";
import { useEffect, useRef } from "react";

interface ProjectBoxProps {
  project: Project;
  onClose: () => void;
}

const ProjectBox = ({ project, onClose }: ProjectBoxProps) => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleCloseClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.window-buttons')) {
        e.preventDefault();
        e.stopPropagation();
        onClose();
      }
    };

    if (boxRef.current) {
      boxRef.current.addEventListener('click', handleCloseClick);
    }

    return () => {
      if (boxRef.current) {
        boxRef.current.removeEventListener('click', handleCloseClick);
      }
    };
  }, [onClose]);

  return (
    <div className="project-box-overlay" onClick={onClose}>
      <div className="project-box-container" onClick={(e) => e.stopPropagation()} ref={boxRef}>
        <Box title={project.title} className="project-box-content">
          <div className="project-header">
            <h2 className="project-title">{project.title}</h2>
            {project.description && (
              <p className="project-description">{project.description}</p>
            )}
          </div>
          {project.concept && (
            <div className="project-concept">
              <h3>🎨 Concept</h3>
              <p className="project-description">{project.concept}</p>
            </div>
          )}

          {project.images && project.images.length > 0 && (
            <div className="project-images">
              {project.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="project-image"
                  loading="lazy"
                />
              ))}
            </div>
          )}

          {project.technologies && project.technologies.length > 0 && (
            <div className="project-technologies">
              <h3>🛠 Technologies</h3>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="project-links">
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="link-primary"
              >
                View Demo
              </a>
            )}
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={project.demoLink ? "link-outline" : "link-primary"}
            >
              View Code
            </a>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default ProjectBox;
