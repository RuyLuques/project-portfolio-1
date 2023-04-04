import React from "react";
import "./styles/AlertModal.css";

const Modal = ({ show, handleClose, children }) => {
  return (
    <div
      className={`alertModal ${show ? "show" : ""}`}
      tabIndex="-1"
      role="dialog"
    >
      <div
        className="alertModal-dialog alertModal-dialog-centered"
        role="document"
      >
        <div className="alertModal-content">
          <div className="alertModal-header">
            <button type="button" className="close" onClick={handleClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="alertModal-body d-flex justify-content-center align-items-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
