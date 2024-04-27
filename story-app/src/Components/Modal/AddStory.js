import "./Modal.css";
import "./SignIn.css";
import React, { useState } from "react";
import closeButton from "./closeIcon.jpg";

function AddStory({ onClose }) {
  return (
    <>
      <div className="modal">
        <div onClick={onClose} className="overlay"></div>
        <div className="modal-content">
          <div>
            <form>
              <div className="formInput-container">
                <div className="input-label">
                  <p id="Heading">Heading:</p>
                </div>
                <div className="input-box">
                  <input type="text" placeholder="Your Heading"></input>
                </div>

                <div className="input-label">
                  <p id="description">Description:</p>{" "}
                </div>
                <div className="text-area">
                  <textarea placeholder="Story Description"></textarea>
                </div>

                <div className="input-label">
                  <p id="storyImage">Image:</p>
                </div>
                <div className="input-box">
                  <input type="text" placeholder="Add Image URL"></input>
                </div>

                <div className="input-label">
                  <p id="category">Category:</p>
                </div>
                <div>
                  <select className="input-box">
                    <option>Select Category</option>
                    <option>Food</option>
                    <option>Health and Fitness</option>
                    <option>Travel</option>
                    <option>Movies</option>
                    <option>Education</option>
                  </select>
                </div>
              </div>
              <div className="buttonsInput-container">
                <button className="previousButton">Previous</button>
                <button className="nextButton">Next</button>
                <button className="postButton" type="submit">
                  post
                </button>
              </div>
            </form>
          </div>
          <img src={closeButton} className="close-modal" onClick={onClose} />
        </div>
      </div>
    </>
  );
}

export default AddStory;
