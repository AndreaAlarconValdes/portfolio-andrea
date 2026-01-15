import Folder from "./Folder";
import "./DeskFolders.css";
import { deskFolders } from "../constants/constants";
import React from "react";

const DeskFolders: React.FC = () => {
  return (
    <div className="desk-folders">
      {deskFolders.map((item) => (
          <Folder key={item.title} img={item.img} title={item.title} to={item.link} className="folder-item" />
      ))}
    </div>
  );
};

export default React.memo(DeskFolders);
