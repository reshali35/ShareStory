import React, { useState } from "react";
import "./Modal.css";
import SignIn from "./SignIn";
import AddStory from "./AddStory";

export default function Modal() {
  const [modal, setModal] = useState(false);

  // const toggleModal = () => {
  //   setModal(!modal);
  // };

  // if (modal) {
  //   document.body.classList.add("active-modal");
  // } else {
  //   document.body.classList.remove("active-modal");
  // }

  return (
    <>
      <button
        onClick={() => {
          setModal(true);
        }}
        className="btn-modal"
      >
        Login
      </button>
      <button
        onClick={() => {
          setModal(true);
        }}
        className="btn-modal"
      >
        Add Story
      </button>

      {modal && (
        <SignIn
          onClose={() => {
            setModal(false);
          }}
        />
      )}

      {modal && (
        <AddStory
          onClose={() => {
            setModal(false);
          }}
        />
      )}
    </>
  );
}
