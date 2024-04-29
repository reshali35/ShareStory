import React, { useState } from "react";
import "./Modal.css";
import SignIn from "./SignIn";
import AddStory from "./AddStory";
import Slide from "./Slide";

export default function Modal() {
  const [login, setLogin] = useState(false);
  const [add, setAdd] = useState(false);

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
          setLogin(true);
        }}
        className="btn-modal"
      >
        Login
      </button>
      <button
        onClick={() => {
          setAdd(true);
        }}
        className="btn-modal"
      >
        Add Story
      </button>

      {login && (
        <SignIn
          onClose={() => {
            setLogin(false);
          }}
        />
      )}

      {add && (
        <Slide
          onClose={() => {
            setAdd(false);
          }}
        />
      )}
    </>
  );
}
