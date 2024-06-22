import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import "../CSS/AlumniMainPage.css";

function AlumniMainPage() {
  const Navigate = useNavigate();
  const [isLightMode, setIsLightMode] = useState(false);
  const [showRegForm, setShowRegForm] = useState(false);
  const alumniContentsRef = useRef();

  useEffect(() => {
    const alumniContents = alumniContentsRef.current;
    if (alumniContents) {
      alumniContents.style.backgroundColor = isLightMode
        ? "white"
        : "rgb(62, 69, 76)";
    }
  }, [isLightMode]);
  function changeTheme(e) {
    const toggle = e.target;
    toggle.classList.toggle("right");
    setIsLightMode((prevMode) => !prevMode);
  }
  function handleReg() {
    setShowRegForm(true);
  }

  function handleAbort(){
    setShowRegForm(false);
  }

  function hanldeLogout() {
    Navigate("/");
  }
  return (
    <>
      <div className="alumniContents" ref={alumniContentsRef}>
        <div className="top-contents">
          <button className="register-btn btn" onClick={handleReg}>
            Register
          </button>
        </div>
        <div className="section-container">
          {!showRegForm ? (
            <p className="text-content">Welcome Username</p>
          ) : (
            <div className="registerForm-container">
              <div className="top-contents">Registration Form</div>
              <form action="" className="registration-form">
                <div className="input-contents">
                  <div className="row1">
                    <input type="email" name="" id="" placeholder="Email" />
                    <input type="text" placeholder="Reg No" />
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className="row2">
                    <input type="number" name="" id="" placeholder="Batch" />
                    <input type="text" placeholder="Branch" />
                    <input type="text" placeholder="District" />
                  </div>
                  <div className="row3">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Gender"
                      list="gender"
                    />
                    <datalist id="gender">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </datalist>
                    <input
                      type="tel"
                      name=""
                      id=""
                      placeholder="Mobile Number"
                    />
                    <input
                      type="number"
                      placeholder="Number of Additional Members"
                    />
                  </div>
                  <div className="row4">
                    <input
                      type="text"
                      placeholder="Food Type"
                      list="food-type"
                    />
                    <datalist id="food-type">
                      <option value="Non-Veg">Non-Veg</option>
                      <option value="Veg">Veg</option>
                    </datalist>
                    <input
                      type="number"
                      name=""
                      id=""
                      placeholder="Number of males"
                    />
                    <input
                      type="number"
                      name=""
                      id=""
                      placeholder="Number of females"
                    />
                  </div>
                  <div className="row5">
                    <input type="date" name="" id="" placeholder="Arriving Date"/>
                    <textarea name="" id="" placeholder="Any other information"></textarea>
                  </div>
                </div>
                <div className="button-row">
                    <button className="abort-btn" onClick={handleAbort}>Abort</button>
                    <button className="register-btn">Register</button>
                </div>
              </form>
            </div>
          )}
        </div>
        <div className="bottom-contents">
          <div className="toggle-btn">
            <div className="round" onClick={changeTheme}></div>
          </div>
          <button className="logout-btn" onClick={hanldeLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default AlumniMainPage;
