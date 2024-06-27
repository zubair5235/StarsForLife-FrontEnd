import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../CSS/Starsday.css";

import Home from "../Assets/Home Icon.jpg";

function StarsDay() {
  const Navigate = useNavigate();

  const participationFormContainer = useRef(null);
  const registeredPopup = useRef(null);

  function handleHomeNavigation() {
    Navigate("/studentMainpage");
  }

  function handleOpenNewparticipation() {
    participationFormContainer.current.classList.add("show");
  }

  function handleCloseNewparticipation() {
    participationFormContainer.current.classList.remove("show");
  }

  function handleOpenPopup() {
    registeredPopup.current.classList.add("show");
  }

  function handleClosePopup() {
    registeredPopup.current.classList.remove("show");
  }

  return (
    <>
      <div className="starsday-container">
        <div className="topBar">
          <button className="home-btn" onClick={handleHomeNavigation}>
            <img src={Home} alt="" />
            Home
          </button>
        </div>

        <div className="agenda-container">
          <div className="agenda">stars day poster will be placed here...</div>
          <div className="bottom-items">
            <button className="register-btn" onClick={handleOpenPopup}>
              Register
            </button>
            <button
              className="participate-btn"
              onClick={handleOpenNewparticipation}
            >
              Participate
            </button>
          </div>
        </div>

        <h2 className="participation-details">Participation Details</h2>

        <div className="participation-details-table">
          <table>
            <thead>
              <tr id="top">
                <th>S.No</th>
                <th>Event Name</th>
                <th>By</th>
                <th>Team Leader</th>
                <th>Team Members</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Dance</td>
                <td>2021</td>
                <td>Username</td>
                <td>List of the Team Members</td>
                <td>Event Description</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table-filters">
          <button className="top-btn">
            <a href="#top">Go to Top</a>
          </button>
        </div>
      </div>

      <div
        className="participation-form-container"
        ref={participationFormContainer}
      >
        <div className="pf-form">
          <div className="pf-form-header">
            <p>Life is for Participating not for spectating</p>
            <Icon
              icon="ic:round-close"
              color="black"
              width="32"
              height="32"
              onClick={handleCloseNewparticipation}
            />
          </div>

          <form>
            <div className="pf-row1">
              <input type="text" placeholder="Event Name" />
              <input type="text" list="by" placeholder="By" />
              <datalist id="by">
                <select>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </select>
              </datalist>
            </div>
            <div className="pf-row2">
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="pf-row3">
              <input type="text" list="type" placeholder="Team Members" />
              <datalist id="type">
                <select>
                  <option value="Team Members">Team Members</option>
                  <option value="Solo">Solo</option>
                </select>
              </datalist>
              <button className="add-member-btn">Add Member</button>
            </div>
            <div className="pf-row4">
              <textarea
                cols="30"
                rows="10"
                placeholder="Event Description"
              ></textarea>
            </div>
            <button className="participate-btn">Participate</button>
          </form>
        </div>
      </div>

      <div className="registeredPopup" ref={registeredPopup}>
        <div className="popup">
          <p>Registered Successfully</p>
          <button className="done-btn" onClick={handleClosePopup}>
            Done
          </button>
        </div>
      </div>
    </>
  );
}

export default StarsDay;
