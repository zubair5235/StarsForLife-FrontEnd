// Importing necessary modules and assets
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import "../CSS/MainPage.css";

/* Assets */
import Logo from "../Assets/Logo.png";
import AP from "../Assets/AP.png";
import RR from "../Assets/RR.png";
import SI from "../Assets/Search Icon 1.png";
import FFCS1 from "../Assets/FFCS1.png";
import FFCS2 from "../Assets/FFCS2.png";
import Materials1 from "../Assets/Materials.png";
import Materials2 from "../Assets/Materials2.png";
import Events1 from "../Assets/Events1.png";
import Events2 from "../Assets/Events2.png";
import Others1 from "../Assets/Others1.png";
import Ohters2 from "../Assets/Others2.png";
import User from "../Assets/User.png";
import Talk from "../Assets/Talk.png";
import TalkIcon from "../Assets/Talkicon.png";
import Down from "../Assets/Down.png";
import Enter from "../Assets/Enter.png";

// React component for the main page of the student
function StudentMainPage() {
  
  // State to manage the dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Ref for user dropdown and chat box
  const userDropDown = useRef(null);
  const chatBox = useRef(null);
  const Navigate = useNavigate();

  // Function to toggle dark mode
  function theme(e) {
    e.target.classList.toggle("on");
    setIsDarkMode(!isDarkMode);
  }

  // Applying styles based on dark mode state
  if (isDarkMode) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }

  // Function to show dropdown menu
  function showDropDown(e) {
    if (e.target.hasAttribute("class", "links")) {
      const dropDown = e.target.children.item(2);
      dropDown.classList.toggle("show");
    }
  }

  // Function to close dropdown menu
  function closeDropDown(e) {
    const dropDown = e.target;
    dropDown.classList.remove("show");
  }

  // Function to show user dropdown
  function showUserDropDown() {
    userDropDown.current.classList.toggle("show");
  }

  // Function to show chat box
  function showChatBox() {
    chatBox.current.classList.add("showChatBox");
  }

  // Function to hide chat box
  function hideChatBox() {
    chatBox.current.classList.remove("showChatBox");
  }

  //Function to handle logout
  function handleLogout(){
    Navigate("/");
  }

  // JSX structure for the component
  return (
    <>
      <div className="main-container">
        {/* Top navigation bar */}
        <div className="top-nav-bar">
          <div className="left">
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
          </div>

          <div className="right">
            {/* Buttons for Activity Pub and Resource Request */}
            <div className="buttons">
              <div className="ap-btn">
                <img src={AP} alt="ap-icon" />
                <h2>Activity Pub</h2>
              </div>
              <div className="rr-btn">
                <img src={RR} alt="rr-icon" />
                <h2>Resource Request</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Side navigation bar */}
        <div className="side-nav-bar">
          <div className="top-items">
            {/* Search bar */}
            <div className="searchBar">
              <input type="search" />
              <img src={SI} alt="search-icon" />
            </div>
          </div>
          <hr />

          <div className="middle-items">
            {/* Navigation links with dropdowns */}
            <nav>
              <ul>
                {/* FFCS dropdown */}
                <li
                  className="links link1"
                  onClick={(e) => {
                    showDropDown(e);
                  }}
                >
                  <img src={FFCS1} alt="FFCS-icon" />
                  FFCS
                  <img src={FFCS2} alt="FFCS-icon" />
                  <ul
                    className="dropDown hide"
                    onMouseLeave={(e) => {
                      closeDropDown(e);
                    }}
                  >
                    <li>
                      <Link to="/ffcs/facultyreview">Faculty Review</Link>
                    </li>
                    <li>
                      <Link to="/ffcs/facultysuggestion">
                        Faculty Suggestion
                      </Link>
                    </li>
                    <li>
                      <Link to="/ffcs/timetablemaker">Time Table Maker</Link>
                    </li>
                  </ul>
                </li>

                {/* Materials dropdown */}
                <li
                  className="links link2"
                  onClick={(e) => {
                    showDropDown(e);
                  }}
                >
                  <img src={Materials1} alt="Materials-icon" />
                  Materials
                  <img src={Materials2} alt="Materials-icon" />
                  <ul
                    className="dropDown"
                    onMouseLeave={(e) => {
                      closeDropDown(e);
                    }}
                  >
                    <li>
                      <Link to="/materials/btech">B.Tech</Link>
                    </li>
                    <li>
                      <Link to="/materials/mtech">M.Tech</Link>
                    </li>
                    <li>
                      <Link to="/materials/arts">Arts</Link>
                    </li>
                    <li>
                      <Link to="/materials/projects">Projects</Link>
                    </li>
                  </ul>
                </li>

                {/* Stars Coordinator dropdown */}
                <li
                  className="links link3"
                  onClick={(e) => {
                    showDropDown(e);
                  }}
                >
                  <span></span>Stars Coordinator<span></span>
                  <ul
                    className="dropDown"
                    onMouseLeave={(e) => {
                      closeDropDown(e);
                    }}
                  >
                    <li>
                      <Link to="/sc/meetings">Meetings</Link>
                    </li>
                    <li>
                      <Link to="/sc/messages">Messages</Link>
                    </li>
                  </ul>
                </li>

                {/* Events dropdown */}
                <li
                  className="links link4"
                  onClick={(e) => {
                    showDropDown(e);
                  }}
                >
                  <img src={Events1} alt="Events-icon" />
                  Events
                  <img src={Events2} alt="Events-icon" />
                  <ul
                    className="dropDown"
                    onMouseLeave={(e) => {
                      closeDropDown(e);
                    }}
                  >
                    <li>
                      <Link to="/events/starsday">StarsDay</Link>
                    </li>
                    <li>
                      <Link to="/events/archives">Archives</Link>
                    </li>
                  </ul>
                </li>

                {/* Others dropdown */}
                <li
                  className="links link5"
                  onClick={(e) => {
                    showDropDown(e);
                  }}
                >
                  <img src={Others1} alt="Others-icon" />
                  Others
                  <img src={Ohters2} alt="Others-icon" />
                  <ul
                    className="dropDown"
                    onMouseLeave={(e) => {
                      closeDropDown(e);
                    }}
                  >
                    <li>
                      <Link to="/others/calculators">Calculators</Link>
                    </li>
                    <li>
                      <Link to="/others/dudes">Dudes</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <hr />

          <div className="bottom-items">
            {/* Dark mode toggle button */}
            <div
              className="toggle-btn"
              onClick={(e) => {
                theme(e);
              }}
            >
              <div className="btn"></div>
            </div>

            {/* User profile dropdown */}
            <div className="user-profile">
              <img src={User} alt="user-icon" onClick={showUserDropDown} />
              <span></span>
              <ul className="userDropDown" ref={userDropDown}>
                <li>Username</li>
                <li>
                  <Link to="/profile/profilesettings">Profile Settings</Link>
                </li>
                <li>OnCampus</li>
                <li>
                  <a href="mailto:mohamedzubair235@gmail.com">Queries</a>
                </li>
                <li onClick={handleLogout}>Logout</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Shining star container */}
        <div className="shiningStar-container">
          <button className="congrats-btn">Congrats</button>
        </div>

        {/* Placement info container */}
        <div className="placementInfo-container"></div>

        {/* Talk button */}
        <div className="talk">
          <img src={Talk} alt="talk-icon" onClick={showChatBox} />
        </div>

        {/* Chat box */}
        <div className="chatBox" ref={chatBox}>
          <div className="topBar">
            <div className="left">
              <img src={TalkIcon} alt="talk-icon" />
              <p>Talk</p>
            </div>
            <div className="right">
              <button className="clear-btn">Clear</button>
              <img src={Down} alt="close-icon" onClick={hideChatBox} />
            </div>
          </div>
          <div className="chatBox-body">
            <div className="chatInput">
              <input type="text" placeholder="Enter Your Message..."/>
              <img src={Enter} alt="enter-icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Exporting the StudentMainPage component
export default StudentMainPage;
