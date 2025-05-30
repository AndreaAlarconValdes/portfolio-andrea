import { deskFolders } from "../constants/constants";
import Folder from "./Folder";
import './DeskFolders.css'

const DeskFolders = () => {
  return (
    <div className="desk-folders">
      {deskFolders.map((item)=>(
      <Folder
        className={item.className}
        img={item.img}
        title={item.title}
        to={item.link}
      />
      ))}
    </div>
  );
};

export default DeskFolders;
