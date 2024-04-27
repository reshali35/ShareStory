import "./Modal.css";
import "./SignIn.css";

function SignIn({ onClose }) {
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
                <input type="text" placeholder="Enter username"></input>
              </div>
              <div className="formRow">
                <p id="password">Password</p>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                ></input>
                <span onClick={eye}>
                  <i class="fas fa-eye"></i>
                </span>
              </div>
              <button className="loginButton" type="submit">
                Login
              </button>
            </form>
          </div>
          <button className="close-modal" onClick={onClose}>
            CLOSE
          </button>
        </div>
      </div>
    </>
  );
}
const passwordField = document.getElementById("password");
const eye = () => {
  if (document.getElementById("password").type === "password") {
    document.getElementById("password").type = "text";
    document.span.classList.remove("fa-eye");
    document.span.classList.add("fa-eye-slash");
  } else {
    document.getElementById("password").type = "password";
    document.span.classList.remove("fa-eye-slash");
    document.span.classList.add("fa-eye");
  }
};
export default SignIn;
