// Importing necessary dependencies and styles
import { useNavigate, Link } from "react-router-dom";
import "../CSS/AccountSettings.css";

import Home from "../Assets/Home Icon.jpg";
import Design from "../Assets/Design.png";
import Developer from "../Assets/Developer.png";

// Functional component for the Account Settings page
function ProfileSettings() {
  // Initializing the navigation hook
  const Navigate = useNavigate();

  // Navigating back to the Profile Settings page
  const back = Navigate("/profile/profilesettings");

  // Function to handle navigation to the home page
  function handleHomeNavigation() {
    Navigate("/studentMainpage");
  }

  // Rendering the component
  return (
    <>
      {/* Main container for the Account Settings page */}
      <div className="profile-settings-container">
        {/* Top navigation bar */}
        <div className="topBar">
          {/* Left side containing the home button */}
          <div className="leftSide">
            <button className="home-btn" onClick={handleHomeNavigation}>
              <img src={Home} alt="" />
              Home
            </button>
          </div>
          {/* Right side containing user greetings */}
          <div className="rightSide">
            <div className="userNameDisplay">
              <div className="greetings">
                <p>Welcome</p>
                <h6>Username</h6>
              </div>
            </div>
          </div>
        </div>

        {/* Main content section */}
        <div className="main-contents">
          {/* Form for updating email and password */}
          <div className="updationForm-as">
            <form action="">
              {/* Row for updating email */}
              <div className="row1 row">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" />
              </div>
              {/* Row for updating password */}
              <div className="row2 row">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
                <button className="update-credentials-btn">
                  Update Credentials
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar with links and credits */}
          <div className="sideBar">
            <div className="top-contents">
              {/* Link to navigate back to Profile Settings */}
              <div className="profile-settings links-div">
                <Link to={back}>Profile Settings</Link>
              </div>
              {/* Currently selected link (Account Settings) */}
              <div
                className="account-settings links-div"
                style={{ backgroundColor: "#1784C7" }}
              >
                <Link style={{ color: "white" }}>Account Settings</Link>
              </div>
            </div>
            <div className="bottom-contents">
              {/* Credits card with design and developer information */}
              <div className="credits-card">
                <div className="line">
                  <img src={Design} alt="Design logo" />
                  <p>Designed & Developed By</p>
                  <img src={Design} alt="Design logo" />
                </div>
                <div className="line p">
                  <p>Mohamed Zubair</p>
                </div>
                <div className="line ">
                  <Link to="https://zubair5235.github.io/personalsite/">More...</Link>
                </div>
                <div className="line">
                  <img src={Developer} alt="Developer logo" />
                  <p>Developed By</p>
                  <img src={Developer} alt="Developer logo" />
                </div>
                <div className="line p">Jawahirullah</div>
                <div className="line ">
                  <Link to="https://jawahirullah481.github.io/MyPortfolio/">More...</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer section */}
        <div className="footer">
          <p>All Rights Reserved &copy; 2023 </p>
        </div>
      </div>
    </>
  );
}

// Exporting the component
export default ProfileSettings;
