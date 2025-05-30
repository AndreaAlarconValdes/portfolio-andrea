import "./Folder.css";

interface FolderProps {
  img?: string;
  title: string;
  to: string;
  className?: string;
}

const Folder = ({ img, title, to, className }: FolderProps) => {

  return (
    <div className={className}>
      <a href={to} target="_blank">
        {img ? (
          <img
            src={`./${img}.png`}
            alt={`${title} image`}
          />
        ) : (
          <div className="file">
            <div className="work-5"></div>
            <div className="work-4"></div>
            <div className="work-3"></div>
            <div className="work-2"></div>
            <div className="work-1"></div>
          </div>
        )}
      </a>
      <p className="folders-name">{title}</p>
    </div>
  );
};

export default Folder;
