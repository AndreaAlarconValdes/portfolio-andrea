import "./Folder.css"

interface FolderProps {
  title: string
}
const Folder = ({title}: FolderProps) => {
  return (
      <div className="folder-container">
        <i className="fa-solid fa-folder"></i>
        <p>{title}</p>
      </div>
  )
}

export default Folder
