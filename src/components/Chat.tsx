import React, { useState } from "react";
import "./Chat.css";
import { messages } from "../constants/constants";

interface ChatProps {
  onClose: () => void;
  style?: React.CSSProperties;
}

const Chat = ({ onClose, style }: ChatProps) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleDropdown = (index: number) => {
    if (openIndexes.includes(index)) {
      // Si ya está abierto, lo quitamos del array
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      // Si no está abierto, lo añadimos
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="general-page" onClick={onClose} style={style}>
      <div className="dropdown-container" onClick={(e) => e.stopPropagation()}>
        {messages.map((item, index) => (
          <div key={index}>
            <button onClick={() => toggleDropdown(index)}>
              <p>{item.question}</p>
              <span className="material-icons">
                {openIndexes.includes(index) ? "remove" : "add"}
              </span>
            </button>
            {openIndexes.includes(index) && (
              <div className="answer-container">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
