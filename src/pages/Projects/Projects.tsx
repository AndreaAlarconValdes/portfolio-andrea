import { FilterPanel } from "../../components/FilterPanel";
import "./Projects.css";

interface ProjectsProps {
  onClose: () => void;

  style?: React.CSSProperties;
}

const Projects = ({ onClose, style }: ProjectsProps) => {
  return (
    <div className="general-page projects" style={style} onClick={onClose}>
      <FilterPanel
        onClose={onClose}
        filters={[
          { id: "project1", label: "Project 1" },
          { id: "project2", label: "Project 2" },
          { id: "project3", label: "Project 3" },
          { id: "project4", label: "Project 4" },
        ]}
        contentMap={{
          project1: (
            <div>
              <img src="./notes-project.png" />
              <div className="projects-info-container">
                <h1>All in order, all in notes</h1>
                <p>
                  This is a personal project of a notes application where users
                  can create, edit and delete notes. It is built with React and
                  TypeScript using the Vite rapid development environment. The
                  project is designed to practice modern React development
                  tools, state handling, and integration with TypeScript for a
                  more robust development experience.
                </p>
                <div className="projects-links-container">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://andreaalarconvaldes.github.io/notes-app/"
                  >
                    Live preview
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/AndreaAlarconValdes/notes-app"
                  >
                    View code
                  </a>
                </div>
              </div>
            </div>
          ),
          project2: (
            <div>
              <img src="./wedding-project.png" />
              <div className="projects-info-container">
                <h1>Wedding Website</h1>
                <p>
                  This is a React-based wedding website, created to provide
                  guests with all the important details about the big day —
                  including the date, location, dress code, RSVP,
                  recommendations, and more. The site is designed to be clean,
                  modern, and fully responsive, ensuring a smooth experience on
                  any device.
                </p>
                <div className="projects-links-container">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://andreaalarconvaldes.github.io/wedding/"
                  >
                    Live preview
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/AndreaAlarconValdes/wedding"
                  >
                    View code
                  </a>
                </div>
              </div>
            </div>
          ),
          project3: (
            <div>
              <img src="./to-do-project.png" />
              <div className="projects-info-container">
                <h1>Daily Task Manager</h1>
                <p>
                  This project was developed as part of a web development
                  bootcamp. It is built using HTML, CSS, and JavaScript. The app
                  allows users to organize the tasks they need to complete
                  throughout the day. As each task is completed, a visual
                  progress bar updates to show overall progress, helping users
                  stay focused and motivated. It’s an ideal tool for anyone
                  looking to manage their time efficiently and achieve their
                  daily goals.
                </p>
                <div className="projects-links-container">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://andreaalarconvaldes.github.io/daily-task-manager/"
                  >
                    Live preview
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/AndreaAlarconValdes/daily-task-manager"
                  >
                    View code
                  </a>
                </div>
              </div>
            </div>
          ),
          project4: (
            <div>
              <img src="./portfolio-project.png" />
              <div className="projects-info-container">
                <h1>Personal portfolio</h1>
                <p>
                  This is my personal portfolio built with React, TypeScript,
                  and Vite, showcasing my projects, skills, and experience as a
                  Full-Stack developer focused on Front-end. The application is
                  fast, modern, and fully responsive, designed to provide a
                  smooth and clean user experience across all devices.
                </p>
                <div className="projects-links-container">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://andreaalarconvaldes.github.io/portfolio-andrea/"
                  >
                    Live preview
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/AndreaAlarconValdes/portfolio-andrea"
                  >
                    View code
                  </a>
                </div>
              </div>
            </div>
          ),
        }}
        defaultFilterId="project1"
      />
    </div>
  );
};

export default Projects;
