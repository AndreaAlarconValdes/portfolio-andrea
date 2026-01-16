import Folder from "./Folder";
import "./DeskFolders.css";
import { deskFolders } from "../constants/constants";
import React from "react";

interface DeskFoldersProps {
  onProjectClick?: (projectId: string) => void;
}

const DeskFolders: React.FC<DeskFoldersProps> = ({ onProjectClick }) => {
  const handleFolderClick = (projectId: string) => {
    if (onProjectClick) {
      onProjectClick(projectId);
    }
  };

  return (
    <div className="desk-folders">
      {deskFolders.map((item) => (
          <Folder 
            key={item.title} 
            img={item.img} 
            title={item.title} 
            to={item.link} 
            className="folder-item"
            isProject={item.isProject}
            onClick={item.isProject && item.id ? () => handleFolderClick(item.id!) : undefined}
          />
      ))}
    </div>
  );
};

export default React.memo(DeskFolders);
