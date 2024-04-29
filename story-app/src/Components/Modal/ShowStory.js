import "./Modal.css";
import "./showStory.css";
import "./SignIn.css";
import closeButton from "./closeIcon.jpg";
import React, { useState } from "react";

const ShowStory = ({ onClose }) => {
  return (
    <>
      <div className="modal">
        <div onClick={onClose} className="overlay"></div>
        <div className="modal-content">
          <img src={closeButton} className="close-modal" onClick={onClose} />
        </div>
      </div>
    </>
  );
};
export default ShowStory;
