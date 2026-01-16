import "./Folder.css";

interface FolderProps {
  img?: string;
  title: string | undefined;
  to: string;
  className?: string;
  onClick?: () => void;
  isProject?: boolean;
}

const Folder = ({ img, title, to, className, onClick, isProject }: FolderProps) => {

  const content = (
    <>
      {img ? (
        <img src={`./${img}.png`} alt={`${title} image`} loading="lazy"/>
      ) : (
        <div className="file">
          <div className="work-5"></div>
            <div className="work-4"></div>
            <div className="work-3"></div>
            <div className="work-2"></div>
            <div className="work-1"></div>
        </div>
      )}
      <p className="folders-name">{title}</p>
    </>
  );

  const handleClick = (e: React.MouseEvent) => {
    if (isProject && onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
   <div className={className}>
      {to && !isProject ? (
        <a href={to} target="_blank" rel="noopener noreferrer" className="folder-info">
          {content}
        </a>
      ) : (
        <div 
          className={isProject ? "folder-info folder-clickable" : ""} 
          onClick={handleClick}
          style={{ cursor: isProject ? 'pointer' : 'default' }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Folder;
