import Folder from "./Folder";
import "./DeskFolders.css";
import { deskFolders } from "../constants/constants";

const DeskFolders = () => {
  return (
    <div className="desk-folders">
      {deskFolders.map((item) => (
          <Folder key={item.title} img={item.img} title={item.title} to={item.link} className="folder-item" />
      ))}
    </div>
  );
};

export default DeskFolders;
