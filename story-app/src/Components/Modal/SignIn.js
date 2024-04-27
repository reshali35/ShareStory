import "./Modal.css";
import "./SignIn.css";
import React, { useState } from "react";
import eyeClosed from "./eye-closed.png";
import eyeOpen from "./eye-open.png";
import closeButton from "./closeIcon.jpg";

function SignIn({ onClose }) {
  const [password, setPassword] = useState("password");
  const [image, setImage] = useState(eyeClosed);
  const toggle = () => {
    if (password == "password") {
      setPassword("text");
      setImage(eyeOpen);
    } else {
      setPassword("password");
      setImage(eyeClosed);
    }
  };
  return (
    <>
      <div className="modal">
        <div onClick={onClose} className="overlay"></div>
        <div className="modal-content">
          <div>
            <div id="signInHeader" className="center">
              Login to SwipTory
            </div>
            <form>
              <div className="formRow">
                <p id="username">UserName</p>
                <div className="input-box">
                  <input type="text" placeholder="Enter username"></input>
                </div>
              </div>
              <div className="formRow">
                <p id="password">Password</p>
                <div className="input-box">
                  <input
                    id="password"
                    type={password}
                    placeholder="Enter password"
                  ></input>
                  <img src={image} onClick={toggle} />
                </div>
              </div>
              <button className="loginButton" type="submit">
                Login
              </button>
            </form>
          </div>
          <img src={closeButton} className="close-modal" onClick={onClose} />
        </div>
      </div>
    </>
  );
}

export default SignIn;
