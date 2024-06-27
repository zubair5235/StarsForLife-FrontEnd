import { useNavigate, Link } from "react-router-dom";
import "../CSS/AccountSettings.css";

import Home from "../Assets/Home Icon.jpg";
import Design from "../Assets/Design.png";
import Developer from "../Assets/Developer.png";

function ProfileSettings() {
  const Navigate = useNavigate();
  const back = Navigate("/profile/profilesettings");

  function handleHomeNavigation() {
    Navigate("/studentMainpage");
  }

  return (
    <>
      <div className="profile-settings-container">
        <div className="topBar">
          <div className="leftSide">
            <button className="home-btn" onClick={handleHomeNavigation}>
              <img src={Home} alt="" />
              Home
            </button>
          </div>

          <div className="rightSide">
            <div className="userNameDisplay">
              <div className="greetings">
                <p>Welcome</p>
                <h6>Username</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="main-contents">
          <div className="updationForm-as">
            <form action="">
              <div className="row1 row">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" />
              </div>
              <div className="row2 row">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
                <button className="update-credentials-btn">
                  Update Credentials
                </button>
              </div>
            </form>
          </div>

          <div className="sideBar">
            <div className="top-contents">
              <div className="profile-settings links-div">
                <Link to={back}>Profile Settings</Link>
              </div>
              <div
                className="account-settings links-div"
                style={{ backgroundColor: "#1784C7" }}
              >
                <Link style={{ color: "white" }}>Account Settings</Link>
              </div>
            </div>
            <div className="bottom-contents">
              <div className="credits-card">
                <div className="line">
                  <img src={Design} alt="Design logo" />
                  <p>Designed & Co-Developed By</p>
                  <img src={Design} alt="Design logo" />
                </div>
                <div className="line p">
                  <p>Mohamed Zubair</p>
                </div>
                <div className="line ">
                  <Link to="https://zubair5235.github.io/personalsite/">
                    More...
                  </Link>
                </div>
                <div className="line">
                  <img src={Developer} alt="Developer logo" />
                  <p>Co-Developed By</p>
                  <img src={Developer} alt="Developer logo" />
                </div>
                <div className="line p">Madasamy</div>
                <div className="line ">
                  <Link to="https://www.linkedin.com/in/madasamy-s-51788221b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4MjvfIWkQbSr9evhAN64wA%3D%3D">
                    More...
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <p>All Rights Reserved &copy; 2023 </p>
        </div>
      </div>
    </>
  );
}

export default ProfileSettings;
