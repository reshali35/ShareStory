import React, { useState } from "react";
import "./Modal.css";
import SignIn from "./SignIn";
import AddStory from "./AddStory";
import Slide from "./Slide";
import ShowStory from "./ShowStory";

export default function Modal() {
  const [login, setLogin] = useState(false);
  const [addStory, setAddStory] = useState(false);
  const [showStory, setShowStory] = useState(false);

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
          setAddStory(true);
        }}
        className="btn-modal"
      >
        Add Story
      </button>
      <button
        onClick={() => {
          setShowStory(true);
        }}
        className="btn-modal"
      >
        Show Story
      </button>

      {login && (
        <SignIn
          onClose={() => {
            setLogin(false);
          }}
        />
      )}

      {addStory && (
        <Slide
          onClose={() => {
            setAddStory(false);
          }}
        />
      )}
      {showStory && (
        <ShowStory
          onClose={() => {
            setShowStory(false);
          }}
        />
      )}
    </>
  );
}
