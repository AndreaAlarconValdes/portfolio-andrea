import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      number: "01",
      name: "Prueba",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dicta Beatae corporis expedita commodi nisi perspiciatis? Quam sequi ab fugit ducimus earum quibusdam, reprehenderit exercitationem assumenda molestiae nam, doloremque provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dicta Beatae corporis expedita commodi nisi perspiciatis? Quam sequi ab fugit ducimus earum quibusdam, reprehenderit exercitationem assumenda molestiae nam, doloremque provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      macbookImg: "./mac.webp",
      iphoneImg: "./iphone.webp",
    },
    {
      number: "02",
      name: "Prueba",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dicta Beatae corporis expedita commodi nisi perspiciatis? Quam sequi ab fugit ducimus earum quibusdam, reprehenderit exercitationem assumenda molestiae nam, doloremque provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dicta Beatae corporis expedita commodi nisi perspiciatis? Quam sequi ab fugit ducimus earum quibusdam, reprehenderit exercitationem assumenda molestiae nam, doloremque provident. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      macbookImg: "./mac.webp",
      iphoneImg: "./iphone.webp",
    },
  ];
  return (
    <div id="projects" className="projects-page">
      <div className="projects-title">
        <h1>Personal</h1>
        <h2>Projects</h2>
      </div>
      <div className="projects-container">
        <ul>
          {projects.map((item) => (
            <li>
              <div>
                <img src={item.macbookImg} alt={item.name} />
                <img src={item.iphoneImg} alt={item.name} />
              </div>
              <div>
                <h3>{item.number}</h3>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
