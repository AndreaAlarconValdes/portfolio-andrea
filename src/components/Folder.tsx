import "./Folder.css"

interface FolderProps {
  title: string;
  route: string;
}
const Folder = ({title,route}: FolderProps) => {

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
      <div className="folder-container">
        <button onClick={() => scrollToSection(route)}>
        <i className="fa-solid fa-folder"/>
        </button>
        <p>{title}</p>
      </div>
  )
}

export default Folder
