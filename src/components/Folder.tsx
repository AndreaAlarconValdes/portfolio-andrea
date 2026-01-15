import "./Folder.css";

interface FolderProps {
  img?: string;
  title: string | undefined;
  to: string;
  className?: string;
}

const Folder = ({ img, title, to, className }: FolderProps) => {

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


  return (
   <div className={className}>
      {to ? (
        <a href={to} target="_blank" rel="noopener noreferrer" className="folder-info">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
};

export default Folder;
