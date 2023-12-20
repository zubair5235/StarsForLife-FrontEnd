// Importing necessary assets and dependencies
import { Link } from "react-router-dom";
import "../CSS/Start.css";

import logo from "../Assets/Logo.png";
import enter from "../Assets/enter 1.png";

// Functional component respresenting the start page with logo and login options
function Start() {
  return (
    <>
      {/* Wrapper for the start page */}
      <div className="start-container">
        {/* Logo section */}
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        {/* Login options container */}
        <div className="logins-container">
          {/* Student Login option */}
          <div className="logins student">
            <h2>Student</h2>
            <Link to="/studentlogin">
              <img src={enter} alt="enter-icon" />
            </Link>
          </div>

          {/* Admin login option */}
          <div className="logins admin">
            <h2>Admin</h2>
            <Link to="">
              <img src={enter} alt="enter-icon" />
            </Link>
          </div>

          {/* Alumni login option */}
          <div className="logins alumni">
            <h2>Alumni</h2>
            <Link to="">
              <img src={enter} alt="enter-icon" />
            </Link>
          </div>

          {/* Stars coordinator login option */}
          <div className="logins sc">
            <h2>Stars Coordinator</h2>
            <Link to="">
              <img src={enter} alt="enter-icon" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

// Exporting the Start componenet as the default export
export default Start;
