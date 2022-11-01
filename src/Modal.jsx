import React from "react";
import "./Modal.css";
import "./App.js";

function Modal({ modalData, show, onClose, setShow }) {
  if (!show) {
    return null;
  }
  console.log(modalData.fullName, "this log");

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h1>{modalData.fullName}</h1>
          <h4>{modalData.description}</h4>
          <p><b>🌤️ Weather: </b> {modalData.weatherInfo}</p>
        </div>
        <div className="modal-footer">
          <button className="button" onClick={() => setShow(false)}>
            Discover More Parks 🔍
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
