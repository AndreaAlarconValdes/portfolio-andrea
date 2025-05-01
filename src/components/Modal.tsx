import React from "react";
import "./Modal.css";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="nav-modal-menu">
          <div className="close-btn" >
            <button onClick={onClose}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <button onClick={onClose}></button>
            <button onClick={onClose}></button>
          </div>
        </div>
        <div>{children}</div>
      </div>

      <div className="backdrop" />
    </>
  );
};

export default Modal;
