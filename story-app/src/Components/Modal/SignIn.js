import "./Modal.css";
import "./SignIn.css";
import React, { useState } from "react";
import closeButton from "./Images/closeIcon.jpg";
import eyeClosed from "./Images/eye-closed.png";
import eyeOpen from "./Images/eye-open.png";

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
              <div className="formInput-container">
                <div className="input-label">
                  <p id="username">Username</p>
                </div>
                <div className="input-box">
                  <input type="text" placeholder="Enter username"></input>
                </div>

                <div className="input-label">
                  <p id="password">Password</p>
                </div>
                <div className="input-box">
                  <input
                    id="password"
                    type={password}
                    placeholder="Enter password"
                  ></input>
                  <img src={image} onClick={toggle} />
                </div>
              </div>
              <div>
                <button className="loginButton" type="submit">
                  Login
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

export default SignIn;
