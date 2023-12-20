// Importing necessary modules ans assets
import { useNavigate, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../CSS/StudentLogin.css";

import Logo from "../Assets/Logo.png";
import LoginGirl from "../Assets/Girl.png";
import LoginBoy from "../Assets/Boy.png";

// React component for Student Login
function StudentLogin() {
  // React Router's useNavigate hook for Navigation

  const Navigate = useNavigate();

  // Variable to holdup the signup container

  var signup;

  // Function to fetch the signup container after delay

  function fetchElement() {
    signup = document.getElementById("signup");
  }

  // Delayed execution of fetchElement funtion

  setTimeout(fetchElement, 2000);

  /* Functions to handle create-new-account button behaviour */

  function handleCreateAccount() {
    signup.style.display = "flex";
    /* Not completed since backend needs to be developed */
  }

  function closeSignUp() {
    signup.style.display = "none";
  }

  /* Function to hanlde login button behaviour */

  function Authenticate() {
    Navigate("/mainpage");
    /* Not completed since backend needs to be developed */
  }

  // JSX structure for the component

  return (
    <>
      <div className="studentLogin-container">
        {/* Logo */}
        <div className="logo">
          <img src={Logo} alt="" />
        </div>

        <div className="contents-container">
          {/* Paragraph explaning use cases of the website */}
          <div className="paragraph">
            <p>
              Fear of FFCS? Can’t Find a right material to SCORE well? Want to
              know what she’s telling? Want to Calculate GPA and CGPA? Want to
              find a travel patner? Help from seniors? Hear it from Alumni’s
              .... Come Let’s Talk about What’s. in your mind? find Your Project
              Buddy? Fear of Placements .... No problem we have solutions for
              that...
            </p>
          </div>

          {/* Login container */}
          <div className="login-container">
            {/* Login Form */}
            <div className="loginForm">
              <form onSubmit={Authenticate}>
                <input type="text" placeholder="Email or Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
              </form>

              <Link to="">Forget Passsword?</Link>

              <br />
              <br />

              {/* Divider line */}
              <div className="line"></div>

              <br />

              {/* Button to create a new account */}
              <button className="signUp-btn" onClick={handleCreateAccount}>
                Create New Account
              </button>

              {/* Assets used in the login */}
              <img
                src={LoginGirl}
                alt="login girl logo"
                className="loginGirl"
              />

              <img src={LoginBoy} alt="login boy logo" className="loginBoy" />
            </div>
          </div>

          {/* Sign up container */}
          <div className="signUp-container" id="signup">
            {/* Overlay to hide the backGround of the page while signup form is open */}
            <div className="overlay"></div>

            {/* Signup form */}
            <div className="signUpForm">
              {/* Top Section of the Signup Form */}
              <div className="topContents">
                <div className="formTitle">Sign Up</div>
                <div className="close-icon">
                  {/* Close icon to hide the signup form */}
                  <Icon
                    icon="carbon:close-filled"
                    width="32"
                    height="32"
                    onClick={closeSignUp}
                  />
                </div>
              </div>

              {/* Form for new user Registration */}

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
                {/* Sign up button */}
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

// Exporting the StudentLogin Component.
export default StudentLogin;
