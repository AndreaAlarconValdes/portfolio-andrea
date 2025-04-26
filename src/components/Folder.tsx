import "./Folder.css"

interface FolderProps {
  title: string
  handleOnClick: ()=> void
}
const Folder = ({title,handleOnClick}: FolderProps) => {
  return (
      <div className="folder-container">
        <button onClick={handleOnClick}>
        <i className="fa-solid fa-folder"></i>
        </button>
        <p>{title}</p>
      </div>
  )
}

export default Folder
