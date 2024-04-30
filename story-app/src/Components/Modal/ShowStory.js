import "./Modal.css";
import "./showStory.css";
import "./SignIn.css";
import storyCloseButton from "./Images/storyCloseButton.png";
import storyShareButton from "./Images/storyShareButton.png";
import whiteHeartButton from "./Images/whiteHeartButton.png";
import redHeartButton from "./Images/redHeartButton.png";
import blueSaveButton from "./Images/blueSaveButton.png";
import whiteSaveButton from "./Images/whiteSaveButton.png";
import React, { useState } from "react";
import Stories from "react-insta-stories";
import { WithSeeMore } from "react-insta-stories";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShowStory = ({ onClose }) => {
  const [saveImage, setSaveImage] = useState(whiteSaveButton);
  const [heartImage, setHeartImage] = useState(whiteHeartButton);

  const [state, setState] = useState({
    value: "hello copied",
    copied: false,
  });
  const handleSave = () => {
    if (saveImage == whiteSaveButton) {
      setSaveImage(blueSaveButton);
    } else {
      setSaveImage(whiteSaveButton);
    }
  };
  const handleFavorite = () => {
    if (heartImage == whiteHeartButton) {
      setHeartImage(redHeartButton);
    } else {
      setHeartImage(whiteHeartButton);
    }
  };
  const notify = () => {
    toast.success("Link copied to clipboard");
  };
  const story = [
    {
      url: "https://www.thespruceeats.com/thmb/QjCQ4RTjmnhrovGkuJWzZCXYFX8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-90053856-588b7aff5f9b5874ee534b04.jpg",
      duration: 2000,
    },
    {
      url: "https://www.shawsicecream.com/wp-content/uploads/2022/02/cotton-candy-1.png",
      duration: 2000,
    },
  ];

  return (
    <>
      <div className="modal">
        <div onClick={onClose} className="overlay"></div>
        <div className="story-content">
          <img
            src={storyCloseButton}
            className="story-close-modal"
            onClick={onClose}
          />
          <CopyToClipboard
            text={state.value}
            onCopy={() => setState({ copied: true })}
          >
            <img
              src={storyShareButton}
              className="story-share-modal"
              onClick={notify}
            />
          </CopyToClipboard>
          <ToastContainer className="copy-notification" />

          <img
            src={saveImage}
            className="story-save-modal"
            onClick={handleSave}
          />
          <img
            src={heartImage}
            className="story-heart-modal"
            onClick={handleFavorite}
          />
          <Stories
            stories={story}
            defaultInterval={1500}
            width={432}
            height={650}
          />
        </div>
      </div>
    </>
  );
};
export default ShowStory;
