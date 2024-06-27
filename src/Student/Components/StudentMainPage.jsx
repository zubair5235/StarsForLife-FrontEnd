import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "../CSS/MainPage.css";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import Logo from "../Assets/Logo.png";
import SI from "../Assets/Search Icon 1.png";
import FFCS1 from "../Assets/FFCS1.png";
import FFCS2 from "../Assets/FFCS2.png";
import Materials1 from "../Assets/Materials.png";
import Materials2 from "../Assets/Materials2.png";
import Events1 from "../Assets/Events1.png";
import Events2 from "../Assets/Events2.png";
import Others1 from "../Assets/Others1.png";
import Others2 from "../Assets/Others2.png";
import User from "../Assets/User.png";

import img1 from "../Assets/Developer.png";
import img2 from "../Assets/Design.png";
import img3 from "../Assets/User.png";
import img4 from "../Assets/Events1.png";

function StudentMainPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const userDropDown = useRef(null);
  const buttonsDD = useRef(null);
  const [isOnCampus, setIsOnCampus] = useState(true);
  const [showButtonsDD, setShowButtonsDD] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const Navigate = useNavigate();

  const images = [img1, img2, img3, img4];

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "black" : "white";
    document.body.style.color = isDarkMode ? "white" : "black";
  }, [isDarkMode]);

  useEffect(() => {
    buttonsDD.current.style.display = showButtonsDD ? "flex" : "none";
  }, [showButtonsDD]);

  function theme(e) {
    e.target.classList.toggle("on");
    setIsDarkMode(!isDarkMode);
  }

  function showDropDown(e) {
    if (e.target.hasAttribute("class", "links")) {
      const dropDown = e.target.children.item(2);
      dropDown.classList.toggle("show");
    }
  }

  function closeDropDown(e) {
    const dropDown = e.target;
    dropDown.classList.remove("show");
  }

  function showUserDropDown() {
    userDropDown.current.classList.toggle("show");
  }

  function handleOncampus(e) {
    setIsOnCampus(!isOnCampus);
    e.target.style.backgroundColor = isOnCampus ? "green" : "red";
  }

  function handleShowButtonDD() {
    setShowButtonsDD(!showButtonsDD);
  }

  function handleLogout() {
    Navigate("/");
  }

  return (
    <>
      <div className="main-container">
        <div className="top-nav-bar">
          <div className="left">
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
          </div>
          <div className="right">
            <div className="buttons">
              <div className="toggle-btn" onClick={(e) => theme(e)}>
                <div className="btn"></div>
              </div>
              <div className="down-btn" onClick={handleShowButtonDD}>
                ▼
              </div>
              <button className="oncampus-btn btn" onClick={handleOncampus}>
                Oncampus
              </button>
              <button className="queries-btn btn">
                <a href="mailto:mohamedzubair235@gmail.com">Queries</a>
              </button>
              <button className="logout-btn btn" onClick={handleLogout}>
                Logout
              </button>
              <div className="buttons-dd" ref={buttonsDD}>
                <button
                  className="oncampus-btn dd-btn"
                  onClick={(e) => {
                    handleOncampus(e);
                  }}
                >
                  Oncampus
                </button>
                <button className="queries-btn dd-btn">
                  <a href="mailto:mohamedzubair235@gmail.com">Queries</a>
                </button>
                <button className="logout-btn dd-btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="side-nav-bar">
          <div className="top-items">
            {/* <div className="expansion-logo">➲</div> */}
            <div className="searchBar">
              <input type="search" />
              <img src={SI} alt="search-icon" />
            </div>
          </div>
          <hr />
          <div className="middle-items">
            <nav>
              <ul>
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
                  </ul>
                </li>
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
                <li
                  className="links link5"
                  onClick={(e) => {
                    showDropDown(e);
                  }}
                >
                  <img src={Others1} alt="Others-icon" />
                  Others
                  <img src={Others2} alt="Others-icon" />
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
            <div className="user-profile">
              <img src={User} alt="user-icon" onClick={showUserDropDown} />
              <span></span>
              <ul className="userDropDown" ref={userDropDown}>
                <li>Username</li>
                <li>
                  <Link to="/profile/profilesettings">Profile Settings</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="shiningStar-container">
          <Slider {...settings}>
            {images.map((img, idx) => (
              <div
                className={idx === imageIndex ? "slide activeSlide" : "slide "}
              >
                <img src={img} alt={img} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="placementInfo-container"></div>
      </div>
    </>
  );
}

export default StudentMainPage;
