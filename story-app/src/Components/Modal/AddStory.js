import "./Modal.css";
import "./Slide.css";
import "./SignIn.css";
import React, { useState } from "react";
import closeButton from "./closeIcon.jpg";

function Slide({ onClose }) {
  const [slideList, setSlideList] = useState([{ slide: "" }]);
  const [formList, setFormList] = useState([{ form: "" }]);

  const handleSlideAdd = () => {
    setSlideList([...slideList, { slide: "" }]);
    setFormList([...formList, { form: "" }]);
  };
  const handleSlideRemove = (index) => {
    const slist = [...slideList];
    const flist = [...formList];
    slist.splice(index, 1);
    flist.splice(index, 1);
    setSlideList(slist);
    setFormList(flist);
  };

  const handlePreviousButton = (index) => {};
  const handleNextButton = (index) => {};

  return (
    <>
      <div className="modal">
        <div onClick={onClose} className="overlay"></div>
        <div className="modal-content">
          <div>
            <div className="AllSlideStep" id="slideStep">
              <label htmlFor="slide" className=" Slide-Container">
                {/* <div className="slide-box" id="slide-box-one">
                  Slide 1
                </div> */}
                {slideList.map((singleSlide, index) => (
                  <div key={index}>
                    <div className="allslides">
                      <div className="slide-box" id="slide-one">
                        Slide {index + 1}
                        {index > 0 && (
                          <img
                            src={closeButton}
                            className="slide-close-button"
                            onClick={() => handleSlideRemove(index)}
                          />
                        )}
                      </div>
                      {slideList.length - 1 === index &&
                        slideList.length < 6 && (
                          <div
                            className="slide-box"
                            id="add"
                            onClick={handleSlideAdd}
                          >
                            Add +
                          </div>
                        )}
                    </div>
                    {/*  */}
                  </div>
                ))}
              </label>
              <label htmlFor="form" className="form-Container">
                {formList.map((singleForm, index) => (
                  <div key={index}>
                    <form>
                      <div className="formInput-container">
                        <div className="input-label">
                          <p id="Heading">Heading:</p>
                        </div>
                        <div className="input-box">
                          <input type="text" placeholder="Your Heading"></input>
                        </div>

                        <div className="input-label">
                          <p id="description">Description:</p>
                        </div>
                        <div className="text-area">
                          <textarea placeholder="Story Description"></textarea>
                        </div>

                        <div className="input-label">
                          <p id="storyImage">Image:</p>
                        </div>
                        <div className="input-box">
                          <input
                            type="text"
                            placeholder="Add Image URL"
                          ></input>
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
                        <button
                          className="previousButton secondPrev"
                          onClick={() => handlePreviousButton(index)}
                        >
                          Previous
                        </button>
                        <button
                          className="nextButton"
                          onClick={() => handleNextButton(index)}
                        >
                          Next
                        </button>
                        <button className="postButton" type="submit">
                          post
                        </button>
                      </div>
                    </form>
                  </div>
                ))}
              </label>
            </div>
          </div>
          <img src={closeButton} className="close-modal" onClick={onClose} />
        </div>
      </div>
    </>
  );
}

export default Slide;
