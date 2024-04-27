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
            {/* <div id="signInHeader" className="center">
              Login to SwipTory
            </div> */}
            <form>
              <div className="formRow">
                <p id="Heading">Heading:</p>
                <div className="input-box">
                  <input type="text" placeholder="Your Heading"></input>
                </div>
              </div>
              <div className="formRow">
                <p id="description">Description:</p>
                <div className="input-box">
                  <input type="text" placeholder="Story Description"></input>
                </div>
              </div>
              <div className="formRow">
                <p id="storyImage">Image:</p>
                <div className="input-box">
                  <input type="text" placeholder="Add Image URL"></input>
                </div>
              </div>
              <div className="formRow">
                <p id="category">Category:</p>
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
              <div>
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
