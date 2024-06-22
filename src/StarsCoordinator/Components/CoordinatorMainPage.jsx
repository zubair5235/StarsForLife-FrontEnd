import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState, useEffect, useRef } from "react";
import "../CSS/CoordinatorMainPage.css";

function CoordinatorMainPage() {
  const Navigate = useNavigate();
  const [isLightMode, setIsLightMode] = useState(false);
  const [showMeetingForm, setShowMeetingForm] = useState(false);
  const [showMessageForm, setShowMessageForm] = useState(false);
  const [showMeetingHistory, setShowMeetingHistory] = useState(false);
  const [showMessageHistory, setShowMessageHistory] = useState(false);
  const [showStarsReg, setShowStarsReg] = useState(false);
  const contentContainerRef = useRef(null);

  useEffect(() => {
    const contentContainer = contentContainerRef.current;
    if (contentContainer) {
      contentContainer.style.backgroundColor = isLightMode
        ? "white"
        : "rgb(62, 69, 76)";
    }
  }, [isLightMode]); // This effect runs when isLightMode changes

  function changeTheme(e) {
    const toggle = e.target;
    toggle.classList.toggle("right");
    setIsLightMode((prevMode) => !prevMode);
  }

  function handleCreateMeeting() {
    setShowMeetingForm(true);
    setShowMessageForm(false);
    setShowMeetingHistory(false);
    setShowMessageHistory(false);
    setShowStarsReg(false);
  }

  function handleSendMessage() {
    setShowMessageForm(true);
    setShowMeetingForm(false);
    setShowMeetingHistory(false);
    setShowMessageHistory(false);
    setShowStarsReg(false);
  }

  function hanldeMeetingHistory() {
    setShowMeetingHistory(true);
    setShowMessageHistory(false);
    setShowMeetingForm(false);
    setShowMessageForm(false);
    setShowStarsReg(false);
  }

  function handleMessageHistory() {
    setShowMessageHistory(true);
    setShowMeetingHistory(false);
    setShowMeetingForm(false);
    setShowMessageForm(false);
    setShowStarsReg(false);
  }

  function handleStarsReg() {
    setShowStarsReg(true);
    setShowMessageHistory(false);
    setShowMeetingHistory(false);
    setShowMeetingForm(false);
    setShowMessageForm(false);
  }

  function handleAbort() {
    setShowMeetingForm(false);
    setShowMessageForm(false);
  }

  function handleSchedule(e) {
    e.preventDefault();
    // Add scheduling logic here
  }

  function handleSend(e) {
    e.preventDefault();
    // Add scheduling logic here
  }

  function hanldeLogout() {
    Navigate("/");
  }

  return (
    <div className="contentContainer" ref={contentContainerRef}>
      <div className="topContents">
        <button className="meeting-btn btn" onClick={handleCreateMeeting}>
          Schedule Meeting
        </button>
        <button
          className="meetingHistory-btn btn"
          onClick={hanldeMeetingHistory}
        >
          Meeting History
        </button>
        <button
          className="starsdayRegistration-btn btn"
          onClick={handleStarsReg}
        >
          StarsDay-Reg
        </button>
        <button
          className="messageHistory-btn btn"
          onClick={handleMessageHistory}
        >
          Message History
        </button>
        <button className="message-btn btn" onClick={handleSendMessage}>
          Send Message
        </button>
      </div>
      <div className="sectionContainer">
        {!showMeetingForm &&
        !showMessageForm &&
        !showMeetingHistory &&
        !showMessageHistory &&
        !showStarsReg ? (
          <p className="textContent" id="textContent">
            Welcome to the Coordinator Dashboard. Please select an option from{" "}
            <br /> above to get started.
          </p>
        ) : showMeetingForm ? (
          <div className="meetingForm-container" id="meetingForm-container">
            <div className="topContents">
              <p>Meeting Form</p>
            </div>
            <form className="meeting-form" onSubmit={handleSchedule}>
              <div className="row1">
                <input type="date" name="date" placeholder="Date" required />
                <input type="time" name="time" placeholder="Time" required />
                <input type="text" placeholder="Venue" required />
              </div>
              <div className="row2">
                <input type="text" placeholder="Meeting Title" required />
                <input type="text" list="year" placeholder="To" required />
                <datalist id="year">
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                </datalist>
              </div>
              <div className="row3">
                <button
                  type="button"
                  className="abort-btn"
                  onClick={handleAbort}
                >
                  Abort
                </button>
                <button type="submit" className="schedule-btn">
                  Schedule
                </button>
              </div>
            </form>
          </div>
        ) : showMessageForm ? (
          <div className="messageForm-container">
            <div className="topContents">
              <p>Message Form</p>
            </div>
            <form action="" className="message-form" onSubmit={handleSend}>
              <div className="row1">
                <textarea
                  name=""
                  id=""
                  rows="15"
                  placeholder="Type Your Message Here..."
                ></textarea>
              </div>
              <div className="row2">
                <input type="text" list="year" placeholder="To" />
                <datalist id="year">
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                </datalist>
              </div>
              <div className="row3">
                <button className="abort-btn" onClick={handleAbort}>
                  Abort
                </button>
                <button className="send-btn">Send</button>
              </div>
            </form>
          </div>
        ) : showMeetingHistory ? (
          <div className="table-container">
            <div className="meetingHistory-table">
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Venue</th>
                    <th>To</th>
                    <th>Meeting Title</th>
                    <th>Responses</th>
                    <th>Once More</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>20-06-2024</td>
                    <td>9:43 AM</td>
                    <td>SJT - 301</td>
                    <td>2021</td>
                    <td>About Stars Day</td>
                    <td>96</td>
                    <td>
                      <button className="repeat-btn">Repeat</button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>20-06-2024</td>
                    <td>10:43 AM</td>
                    <td>SJT - 301</td>
                    <td>2022</td>
                    <td>About Stars Day</td>
                    <td>91</td>
                    <td>
                      <button className="repeat-btn">Repeat</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : showMessageHistory ? (
          <div className="table-container">
            <div className="messageHistory-table">
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>To</th>
                    <th>Message Title</th>
                    <th>Responses</th>
                    <th>Once More</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>20-06-2024</td>
                    <td>9:43 AM</td>
                    <td>2021</td>
                    <td>About Stars Day</td>
                    <td>96</td>
                    <td>
                      <button className="repeat-btn">Repeat</button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>20-06-2024</td>
                    <td>10:43 AM</td>
                    <td>2022</td>
                    <td>About Stars Day</td>
                    <td>91</td>
                    <td>
                      <button className="repeat-btn">Repeat</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="table-container">
            <div className="starsReg-table">
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Year</th>
                    <th>Total Count</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>2008</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>2009</td>
                    <td>14</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      <div className="bottomContents">
        <div className="toggle-btn">
          <div className="round" onClick={changeTheme}></div>
        </div>
        <button className="logout-btn" onClick={hanldeLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default CoordinatorMainPage;
