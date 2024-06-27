import { useNavigate, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useRef } from "react";
import "../CSS/StudentLogin.css";

import Logo from "../Assets/Logo.png";
import LoginGirl from "../Assets/Girl.png";
import LoginBoy from "../Assets/Boy.png";

function StudentLogin() {
  const navigate = useNavigate();
  const signupRef = useRef(null);

  function handleCreateAccount() {
    if (signupRef.current) {
      signupRef.current.style.display = "flex";
    }
  }

  function closeSignUp() {
    if (signupRef.current) {
      signupRef.current.style.display = "none";
    }
  }

  function toHome() {
    navigate("/");
  }

  function Authenticate(e) {
    e.preventDefault();
    navigate("/studentMainpage");
  }

  return (
    <>
      <div className="studentLogin-container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="home-btn-container">
          <button className="home-btn" onClick={toHome}>
            {" "}
            Home{" "}
          </button>
        </div>

        <div className="contents-container">
          <div className="paragraph">
            <p>
              Fear of FFCS? Can’t Find a right material to SCORE well? Want to
              know what she’s telling? Want to Calculate GPA and CGPA? Want to
              find a travel partner? Help from seniors? Hear it from Alumni’s
              .... Come Let’s Talk about What’s in your mind? Find Your Project
              Buddy? Fear of Placements .... No problem we have solutions for
              that...
            </p>
            <a href="#login">
              <button className="scrollDown-btn">Continue</button>
            </a>
          </div>

          <div className="login-container">
            <div className="loginForm" id="login">
              <form onSubmit={Authenticate}>
                <input type="text" placeholder="Email or Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
              </form>

              <Link to="">Forget Password?</Link>

              <br />
              <br />

              <div className="line"></div>

              <br />

              <button className="signUp-btn" onClick={handleCreateAccount}>
                Create New Account
              </button>

              <img
                src={LoginGirl}
                alt="login girl logo"
                className="loginGirl"
              />

              <img src={LoginBoy} alt="login boy logo" className="loginBoy" />
            </div>
          </div>

          <div className="signUp-container" id="signup" ref={signupRef}>
            <div className="overlay"></div>

            <div className="signUpForm">
              <div className="topContents">
                <div className="formTitle">Sign Up</div>
                <div className="close-icon">
                  <Icon
                    icon="carbon:close-filled"
                    width="32"
                    height="32"
                    onClick={closeSignUp}
                  />
                </div>
              </div>

              <form onSubmit="">
                <div className="row1">
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="Year" />
                </div>

                <div className="row2">
                  <input type="text" placeholder="Department" />
                  <input type="tel" placeholder="Phone Number" />
                </div>

                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button type="submit" className="signUp-btn">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentLogin;
