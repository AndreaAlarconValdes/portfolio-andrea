import Folder from "./Folder";

const DeskFolders = () => {
  const handleOpenCV = () => {
    window.open("./CV.pdf", "_blank");
  };
  return (
    <div>
      <Folder
        className="resumepdf-icon"
        img="paper"
        title="Resume.pdf"
        handleOnClick={handleOpenCV}
      />
      <Folder
        className="folder-01"
        img="folder"
        title="Project 01 (Ecommerce)"
        sound="paper.mp3"
        handleOnClick={handleOpenCV}
      />

      <Folder
        className="folder-02"
        img="folder"
        title="Project 02 (NotesApp)"
        sound="paper.mp3"
        handleOnClick={handleOpenCV}
      />

      <Folder
        className="folder-03"
        img="folder"
        title="Project 03 (Portfolio)"
        sound="paper.mp3"
        handleOnClick={handleOpenCV}
      />
    </div>
  );
};

export default DeskFolders;
