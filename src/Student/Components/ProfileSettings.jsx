import { useNavigate, Link } from "react-router-dom";
import "../CSS/ProfileSettings.css";

import Home from "../Assets/Home Icon.jpg";
import Design from "../Assets/Design.png";
import Developer from "../Assets/Developer.png";

function ProfileSettings() {
  // React hook to navigate to different routes
  const Navigate = useNavigate();

  // Function to handle navigation to the home page
  function handleHomeNavigation() {
    Navigate("/mainpage");
  }

  return (
    <>
      {/* Main container for the ProfileSettings component */}
      <div className="profile-settings-container">
        
        {/* Top navigation bar */}
        <div className="topBar">
          <div className="leftSide">
            {/* Home button with an icon */}
            <button className="home-btn" onClick={handleHomeNavigation}>
              <img src={Home} alt="" />
              Home
            </button>
          </div>
          <div className="rightSide">
            {/* User greeting display */}
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
          
          {/* Form for updating user details */}
          <div className="updationForm">
            <button className="update-btn">Update Details</button>
            <form action="">
              {/* Input fields for user details */}
              <div className="row1 row">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
              </div>
              <div className="row2 row">
                <label htmlFor="year">Year</label>
                <input type="number" id="year" />
              </div>
              <div className="row3 row">
                <label htmlFor="department">Department</label>
                <input type="text" id="department" />
              </div>
              <div className="row4 row">
                <label htmlFor="phonenumber">Phone Number</label>
                <input type="tel" id="phonenumber" />
              </div>
              <div className="row5 row">
                <label htmlFor="district">District</label>
                <input type="text" id="district" />
              </div>
            </form>
          </div>
          
          {/* Sidebar with links and credits */}
          <div className="sideBar">
            <div className="top-contents">
              
              {/* Links for profile settings and account settings */}
              <div className="profile-settings links-div" style={{backgroundColor : "#1784C7"}}>
                <Link style={{color : "white"}}>Profile Settings</Link>
              </div>
              <div className="account-settings links-div">
                <Link to="/profile/accountsettings">Account Settings</Link>
              </div>
            </div>
            
            {/* Credits section with designer and developer information */}
            <div className="bottom-contents">
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

// Exporting the ProfileSettings component
export default ProfileSettings;
